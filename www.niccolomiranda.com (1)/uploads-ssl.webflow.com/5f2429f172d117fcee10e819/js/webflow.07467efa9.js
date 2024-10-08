/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var bi = s(() => {
    window.tram = (function (e) {
      function t(c, p) {
        var h = new ye.Bare();
        return h.init(c, p);
      }
      function r(c) {
        return c.replace(/[A-Z]/g, function (p) {
          return "-" + p.toLowerCase();
        });
      }
      function n(c) {
        var p = parseInt(c.slice(1), 16),
          h = (p >> 16) & 255,
          y = (p >> 8) & 255,
          w = 255 & p;
        return [h, y, w];
      }
      function i(c, p, h) {
        return (
          "#" + ((1 << 24) | (c << 16) | (p << 8) | h).toString(16).slice(1)
        );
      }
      function o() {}
      function a(c, p) {
        f("Type warning: Expected: [" + c + "] Got: [" + typeof p + "] " + p);
      }
      function u(c, p, h) {
        f("Units do not match [" + c + "]: " + p + ", " + h);
      }
      function l(c, p, h) {
        if ((p !== void 0 && (h = p), c === void 0)) return h;
        var y = h;
        return (
          Yy.test(c) || !fs.test(c)
            ? (y = parseInt(c, 10))
            : fs.test(c) && (y = 1e3 * parseFloat(c)),
          0 > y && (y = 0),
          y === y ? y : h
        );
      }
      function f(c) {
        Ae.debug && window && window.console.warn(c);
      }
      function v(c) {
        for (var p = -1, h = c ? c.length : 0, y = []; ++p < h; ) {
          var w = c[p];
          w && y.push(w);
        }
        return y;
      }
      var d = (function (c, p, h) {
          function y(H) {
            return typeof H == "object";
          }
          function w(H) {
            return typeof H == "function";
          }
          function m() {}
          function V(H, oe) {
            function F() {
              var Ie = new $();
              return w(Ie.init) && Ie.init.apply(Ie, arguments), Ie;
            }
            function $() {}
            oe === h && ((oe = H), (H = Object)), (F.Bare = $);
            var Z,
              le = (m[c] = H[c]),
              je = ($[c] = F[c] = new m());
            return (
              (je.constructor = F),
              (F.mixin = function (Ie) {
                return ($[c] = F[c] = V(F, Ie)[c]), F;
              }),
              (F.open = function (Ie) {
                if (
                  ((Z = {}),
                  w(Ie) ? (Z = Ie.call(F, je, le, F, H)) : y(Ie) && (Z = Ie),
                  y(Z))
                )
                  for (var dr in Z) p.call(Z, dr) && (je[dr] = Z[dr]);
                return w(je.init) || (je.init = H), F;
              }),
              F.open(oe)
            );
          }
          return V;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (c, p, h, y) {
              var w = (c /= y) * c,
                m = w * c;
              return (
                p +
                h * (-2.75 * m * w + 11 * w * w + -15.5 * m + 8 * w + 0.25 * c)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (c, p, h, y) {
              var w = (c /= y) * c,
                m = w * c;
              return p + h * (-1 * m * w + 3 * w * w + -3 * m + 2 * w);
            },
          ],
          "ease-out": [
            "ease-out",
            function (c, p, h, y) {
              var w = (c /= y) * c,
                m = w * c;
              return (
                p +
                h * (0.3 * m * w + -1.6 * w * w + 2.2 * m + -1.8 * w + 1.9 * c)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (c, p, h, y) {
              var w = (c /= y) * c,
                m = w * c;
              return p + h * (2 * m * w + -5 * w * w + 2 * m + 2 * w);
            },
          ],
          linear: [
            "linear",
            function (c, p, h, y) {
              return (h * c) / y + p;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (c, p, h, y) {
              return h * (c /= y) * c + p;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (c, p, h, y) {
              return -h * (c /= y) * (c - 2) + p;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (c, p, h, y) {
              return (c /= y / 2) < 1
                ? (h / 2) * c * c + p
                : (-h / 2) * (--c * (c - 2) - 1) + p;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (c, p, h, y) {
              return h * (c /= y) * c * c + p;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (c, p, h, y) {
              return h * ((c = c / y - 1) * c * c + 1) + p;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (c, p, h, y) {
              return (c /= y / 2) < 1
                ? (h / 2) * c * c * c + p
                : (h / 2) * ((c -= 2) * c * c + 2) + p;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (c, p, h, y) {
              return h * (c /= y) * c * c * c + p;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (c, p, h, y) {
              return -h * ((c = c / y - 1) * c * c * c - 1) + p;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (c, p, h, y) {
              return (c /= y / 2) < 1
                ? (h / 2) * c * c * c * c + p
                : (-h / 2) * ((c -= 2) * c * c * c - 2) + p;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (c, p, h, y) {
              return h * (c /= y) * c * c * c * c + p;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (c, p, h, y) {
              return h * ((c = c / y - 1) * c * c * c * c + 1) + p;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (c, p, h, y) {
              return (c /= y / 2) < 1
                ? (h / 2) * c * c * c * c * c + p
                : (h / 2) * ((c -= 2) * c * c * c * c + 2) + p;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (c, p, h, y) {
              return -h * Math.cos((c / y) * (Math.PI / 2)) + h + p;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (c, p, h, y) {
              return h * Math.sin((c / y) * (Math.PI / 2)) + p;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (c, p, h, y) {
              return (-h / 2) * (Math.cos((Math.PI * c) / y) - 1) + p;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (c, p, h, y) {
              return c === 0 ? p : h * Math.pow(2, 10 * (c / y - 1)) + p;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (c, p, h, y) {
              return c === y
                ? p + h
                : h * (-Math.pow(2, (-10 * c) / y) + 1) + p;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (c, p, h, y) {
              return c === 0
                ? p
                : c === y
                ? p + h
                : (c /= y / 2) < 1
                ? (h / 2) * Math.pow(2, 10 * (c - 1)) + p
                : (h / 2) * (-Math.pow(2, -10 * --c) + 2) + p;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (c, p, h, y) {
              return -h * (Math.sqrt(1 - (c /= y) * c) - 1) + p;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (c, p, h, y) {
              return h * Math.sqrt(1 - (c = c / y - 1) * c) + p;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (c, p, h, y) {
              return (c /= y / 2) < 1
                ? (-h / 2) * (Math.sqrt(1 - c * c) - 1) + p
                : (h / 2) * (Math.sqrt(1 - (c -= 2) * c) + 1) + p;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (c, p, h, y, w) {
              return (
                w === void 0 && (w = 1.70158),
                h * (c /= y) * c * ((w + 1) * c - w) + p
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (c, p, h, y, w) {
              return (
                w === void 0 && (w = 1.70158),
                h * ((c = c / y - 1) * c * ((w + 1) * c + w) + 1) + p
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (c, p, h, y, w) {
              return (
                w === void 0 && (w = 1.70158),
                (c /= y / 2) < 1
                  ? (h / 2) * c * c * (((w *= 1.525) + 1) * c - w) + p
                  : (h / 2) *
                      ((c -= 2) * c * (((w *= 1.525) + 1) * c + w) + 2) +
                    p
              );
            },
          ],
        },
        T = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        b = document,
        S = window,
        q = "bkwld-tram",
        O = /[\-\.0-9]/g,
        A = /[A-Z]/,
        g = "number",
        C = /^(rgb|#)/,
        R = /(em|cm|mm|in|pt|pc|px)$/,
        N = /(em|cm|mm|in|pt|pc|px|%)$/,
        M = /(deg|rad|turn)$/,
        G = "unitless",
        X = /(all|none) 0s ease 0s/,
        Q = /^(width|height)$/,
        W = " ",
        P = b.createElement("a"),
        _ = ["Webkit", "Moz", "O", "ms"],
        L = ["-webkit-", "-moz-", "-o-", "-ms-"],
        x = function (c) {
          if (c in P.style) return { dom: c, css: c };
          var p,
            h,
            y = "",
            w = c.split("-");
          for (p = 0; p < w.length; p++)
            y += w[p].charAt(0).toUpperCase() + w[p].slice(1);
          for (p = 0; p < _.length; p++)
            if (((h = _[p] + y), h in P.style))
              return { dom: h, css: L[p] + c };
        },
        D = (t.support = {
          bind: Function.prototype.bind,
          transform: x("transform"),
          transition: x("transition"),
          backface: x("backface-visibility"),
          timing: x("transition-timing-function"),
        });
      if (D.transition) {
        var B = D.timing.dom;
        if (((P.style[B] = E["ease-in-back"][0]), !P.style[B]))
          for (var K in T) E[K][0] = T[K];
      }
      var ne = (t.frame = (function () {
          var c =
            S.requestAnimationFrame ||
            S.webkitRequestAnimationFrame ||
            S.mozRequestAnimationFrame ||
            S.oRequestAnimationFrame ||
            S.msRequestAnimationFrame;
          return c && D.bind
            ? c.bind(S)
            : function (p) {
                S.setTimeout(p, 16);
              };
        })()),
        Ne = (t.now = (function () {
          var c = S.performance,
            p = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
          return p && D.bind
            ? p.bind(c)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        He = d(function (c) {
          function p(U, J) {
            var se = v(("" + U).split(W)),
              ee = se[0];
            J = J || {};
            var Te = Ai[ee];
            if (!Te) return f("Unsupported property: " + ee);
            if (!J.weak || !this.props[ee]) {
              var Me = Te[0],
                be = this.props[ee];
              return (
                be || (be = this.props[ee] = new Me.Bare()),
                be.init(this.$el, se, Te, J),
                be
              );
            }
          }
          function h(U, J, se) {
            if (U) {
              var ee = typeof U;
              if (
                (J ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ee == "number" && J)
              )
                return (
                  (this.timer = new $r({
                    duration: U,
                    context: this,
                    complete: m,
                  })),
                  void (this.active = !0)
                );
              if (ee == "string" && J) {
                switch (U) {
                  case "hide":
                    F.call(this);
                    break;
                  case "stop":
                    V.call(this);
                    break;
                  case "redraw":
                    $.call(this);
                    break;
                  default:
                    p.call(this, U, se && se[1]);
                }
                return m.call(this);
              }
              if (ee == "function") return void U.call(this, this);
              if (ee == "object") {
                var Te = 0;
                je.call(
                  this,
                  U,
                  function (fe, Zy) {
                    fe.span > Te && (Te = fe.span), fe.stop(), fe.animate(Zy);
                  },
                  function (fe) {
                    "wait" in fe && (Te = l(fe.wait, 0));
                  }
                ),
                  le.call(this),
                  Te > 0 &&
                    ((this.timer = new $r({ duration: Te, context: this })),
                    (this.active = !0),
                    J && (this.timer.complete = m));
                var Me = this,
                  be = !1,
                  Qr = {};
                ne(function () {
                  je.call(Me, U, function (fe) {
                    fe.active && ((be = !0), (Qr[fe.name] = fe.nextStyle));
                  }),
                    be && Me.$el.css(Qr);
                });
              }
            }
          }
          function y(U) {
            (U = l(U, 0)),
              this.active
                ? this.queue.push({ options: U })
                : ((this.timer = new $r({
                    duration: U,
                    context: this,
                    complete: m,
                  })),
                  (this.active = !0));
          }
          function w(U) {
            return this.active
              ? (this.queue.push({ options: U, args: arguments }),
                void (this.timer.complete = m))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function m() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var U = this.queue.shift();
              h.call(this, U.options, !0, U.args);
            }
          }
          function V(U) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var J;
            typeof U == "string"
              ? ((J = {}), (J[U] = 1))
              : (J = typeof U == "object" && U != null ? U : this.props),
              je.call(this, J, Ie),
              le.call(this);
          }
          function H(U) {
            V.call(this, U), je.call(this, U, dr, $y);
          }
          function oe(U) {
            typeof U != "string" && (U = "block"), (this.el.style.display = U);
          }
          function F() {
            V.call(this), (this.el.style.display = "none");
          }
          function $() {
            this.el.offsetHeight;
          }
          function Z() {
            V.call(this), e.removeData(this.el, q), (this.$el = this.el = null);
          }
          function le() {
            var U,
              J,
              se = [];
            this.upstream && se.push(this.upstream);
            for (U in this.props)
              (J = this.props[U]), J.active && se.push(J.string);
            (se = se.join(",")),
              this.style !== se &&
                ((this.style = se), (this.el.style[D.transition.dom] = se));
          }
          function je(U, J, se) {
            var ee,
              Te,
              Me,
              be,
              Qr = J !== Ie,
              fe = {};
            for (ee in U)
              (Me = U[ee]),
                ee in ut
                  ? (fe.transform || (fe.transform = {}),
                    (fe.transform[ee] = Me))
                  : (A.test(ee) && (ee = r(ee)),
                    ee in Ai
                      ? (fe[ee] = Me)
                      : (be || (be = {}), (be[ee] = Me)));
            for (ee in fe) {
              if (((Me = fe[ee]), (Te = this.props[ee]), !Te)) {
                if (!Qr) continue;
                Te = p.call(this, ee);
              }
              J.call(this, Te, Me);
            }
            se && be && se.call(this, be);
          }
          function Ie(U) {
            U.stop();
          }
          function dr(U, J) {
            U.set(J);
          }
          function $y(U) {
            this.$el.css(U);
          }
          function xe(U, J) {
            c[U] = function () {
              return this.children
                ? Qy.call(this, J, arguments)
                : (this.el && J.apply(this, arguments), this);
            };
          }
          function Qy(U, J) {
            var se,
              ee = this.children.length;
            for (se = 0; ee > se; se++) U.apply(this.children[se], J);
            return this;
          }
          (c.init = function (U) {
            if (
              ((this.$el = e(U)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              Ae.keepInherited && !Ae.fallback)
            ) {
              var J = cs(this.el, "transition");
              J && !X.test(J) && (this.upstream = J);
            }
            D.backface &&
              Ae.hideBackface &&
              Lt(this.el, D.backface.css, "hidden");
          }),
            xe("add", p),
            xe("start", h),
            xe("wait", y),
            xe("then", w),
            xe("next", m),
            xe("stop", V),
            xe("set", H),
            xe("show", oe),
            xe("hide", F),
            xe("redraw", $),
            xe("destroy", Z);
        }),
        ye = d(He, function (c) {
          function p(h, y) {
            var w = e.data(h, q) || e.data(h, q, new He.Bare());
            return w.el || w.init(h), y ? w.start(y) : w;
          }
          c.init = function (h, y) {
            var w = e(h);
            if (!w.length) return this;
            if (w.length === 1) return p(w[0], y);
            var m = [];
            return (
              w.each(function (V, H) {
                m.push(p(H, y));
              }),
              (this.children = m),
              this
            );
          };
        }),
        Y = d(function (c) {
          function p() {
            var m = this.get();
            this.update("auto");
            var V = this.get();
            return this.update(m), V;
          }
          function h(m, V, H) {
            return V !== void 0 && (H = V), m in E ? m : H;
          }
          function y(m) {
            var V = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(m);
            return (V ? i(V[1], V[2], V[3]) : m).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var w = { duration: 500, ease: "ease", delay: 0 };
          (c.init = function (m, V, H, oe) {
            (this.$el = m), (this.el = m[0]);
            var F = V[0];
            H[2] && (F = H[2]),
              ls[F] && (F = ls[F]),
              (this.name = F),
              (this.type = H[1]),
              (this.duration = l(V[1], this.duration, w.duration)),
              (this.ease = h(V[2], this.ease, w.ease)),
              (this.delay = l(V[3], this.delay, w.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = Q.test(this.name)),
              (this.unit = oe.unit || this.unit || Ae.defaultUnit),
              (this.angle = oe.angle || this.angle || Ae.defaultAngle),
              Ae.fallback || oe.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    W +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? W + E[this.ease][0] : "") +
                    (this.delay ? W + this.delay + "ms" : "")));
          }),
            (c.set = function (m) {
              (m = this.convert(m, this.type)), this.update(m), this.redraw();
            }),
            (c.transition = function (m) {
              (this.active = !0),
                (m = this.convert(m, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  m == "auto" && (m = p.call(this))),
                (this.nextStyle = m);
            }),
            (c.fallback = function (m) {
              var V =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (m = this.convert(m, this.type)),
                this.auto &&
                  (V == "auto" && (V = this.convert(this.get(), this.type)),
                  m == "auto" && (m = p.call(this))),
                (this.tween = new fr({
                  from: V,
                  to: m,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (c.get = function () {
              return cs(this.el, this.name);
            }),
            (c.update = function (m) {
              Lt(this.el, this.name, m);
            }),
            (c.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                Lt(this.el, this.name, this.get()));
              var m = this.tween;
              m && m.context && m.destroy();
            }),
            (c.convert = function (m, V) {
              if (m == "auto" && this.auto) return m;
              var H,
                oe = typeof m == "number",
                F = typeof m == "string";
              switch (V) {
                case g:
                  if (oe) return m;
                  if (F && m.replace(O, "") === "") return +m;
                  H = "number(unitless)";
                  break;
                case C:
                  if (F) {
                    if (m === "" && this.original) return this.original;
                    if (V.test(m))
                      return m.charAt(0) == "#" && m.length == 7 ? m : y(m);
                  }
                  H = "hex or rgb string";
                  break;
                case R:
                  if (oe) return m + this.unit;
                  if (F && V.test(m)) return m;
                  H = "number(px) or string(unit)";
                  break;
                case N:
                  if (oe) return m + this.unit;
                  if (F && V.test(m)) return m;
                  H = "number(px) or string(unit or %)";
                  break;
                case M:
                  if (oe) return m + this.angle;
                  if (F && V.test(m)) return m;
                  H = "number(deg) or string(angle)";
                  break;
                case G:
                  if (oe || (F && N.test(m))) return m;
                  H = "number(unitless) or string(unit or %)";
              }
              return a(H, m), m;
            }),
            (c.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        Pe = d(Y, function (c, p) {
          c.init = function () {
            p.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), C));
          };
        }),
        lr = d(Y, function (c, p) {
          (c.init = function () {
            p.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (c.get = function () {
              return this.$el[this.name]();
            }),
            (c.update = function (h) {
              this.$el[this.name](h);
            });
        }),
        Yr = d(Y, function (c, p) {
          function h(y, w) {
            var m, V, H, oe, F;
            for (m in y)
              (oe = ut[m]),
                (H = oe[0]),
                (V = oe[1] || m),
                (F = this.convert(y[m], H)),
                w.call(this, V, F, H);
          }
          (c.init = function () {
            p.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                ut.perspective &&
                  Ae.perspective &&
                  ((this.current.perspective = Ae.perspective),
                  Lt(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (c.set = function (y) {
              h.call(this, y, function (w, m) {
                this.current[w] = m;
              }),
                Lt(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (c.transition = function (y) {
              var w = this.values(y);
              this.tween = new us({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var m,
                V = {};
              for (m in this.current) V[m] = m in w ? w[m] : this.current[m];
              (this.active = !0), (this.nextStyle = this.style(V));
            }),
            (c.fallback = function (y) {
              var w = this.values(y);
              this.tween = new us({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (c.update = function () {
              Lt(this.el, this.name, this.style(this.current));
            }),
            (c.style = function (y) {
              var w,
                m = "";
              for (w in y) m += w + "(" + y[w] + ") ";
              return m;
            }),
            (c.values = function (y) {
              var w,
                m = {};
              return (
                h.call(this, y, function (V, H, oe) {
                  (m[V] = H),
                    this.current[V] === void 0 &&
                      ((w = 0),
                      ~V.indexOf("scale") && (w = 1),
                      (this.current[V] = this.convert(w, oe)));
                }),
                m
              );
            });
        }),
        fr = d(function (c) {
          function p(F) {
            H.push(F) === 1 && ne(h);
          }
          function h() {
            var F,
              $,
              Z,
              le = H.length;
            if (le)
              for (ne(h), $ = Ne(), F = le; F--; ) (Z = H[F]), Z && Z.render($);
          }
          function y(F) {
            var $,
              Z = e.inArray(F, H);
            Z >= 0 &&
              (($ = H.slice(Z + 1)),
              (H.length = Z),
              $.length && (H = H.concat($)));
          }
          function w(F) {
            return Math.round(F * oe) / oe;
          }
          function m(F, $, Z) {
            return i(
              F[0] + Z * ($[0] - F[0]),
              F[1] + Z * ($[1] - F[1]),
              F[2] + Z * ($[2] - F[2])
            );
          }
          var V = { ease: E.ease[1], from: 0, to: 1 };
          (c.init = function (F) {
            (this.duration = F.duration || 0), (this.delay = F.delay || 0);
            var $ = F.ease || V.ease;
            E[$] && ($ = E[$][1]),
              typeof $ != "function" && ($ = V.ease),
              (this.ease = $),
              (this.update = F.update || o),
              (this.complete = F.complete || o),
              (this.context = F.context || this),
              (this.name = F.name);
            var Z = F.from,
              le = F.to;
            Z === void 0 && (Z = V.from),
              le === void 0 && (le = V.to),
              (this.unit = F.unit || ""),
              typeof Z == "number" && typeof le == "number"
                ? ((this.begin = Z), (this.change = le - Z))
                : this.format(le, Z),
              (this.value = this.begin + this.unit),
              (this.start = Ne()),
              F.autoplay !== !1 && this.play();
          }),
            (c.play = function () {
              this.active ||
                (this.start || (this.start = Ne()),
                (this.active = !0),
                p(this));
            }),
            (c.stop = function () {
              this.active && ((this.active = !1), y(this));
            }),
            (c.render = function (F) {
              var $,
                Z = F - this.start;
              if (this.delay) {
                if (Z <= this.delay) return;
                Z -= this.delay;
              }
              if (Z < this.duration) {
                var le = this.ease(Z, 0, 1, this.duration);
                return (
                  ($ = this.startRGB
                    ? m(this.startRGB, this.endRGB, le)
                    : w(this.begin + le * this.change)),
                  (this.value = $ + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              ($ = this.endHex || this.begin + this.change),
                (this.value = $ + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (c.format = function (F, $) {
              if ((($ += ""), (F += ""), F.charAt(0) == "#"))
                return (
                  (this.startRGB = n($)),
                  (this.endRGB = n(F)),
                  (this.endHex = F),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var Z = $.replace(O, ""),
                  le = F.replace(O, "");
                Z !== le && u("tween", $, F), (this.unit = Z);
              }
              ($ = parseFloat($)),
                (F = parseFloat(F)),
                (this.begin = this.value = $),
                (this.change = F - $);
            }),
            (c.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var H = [],
            oe = 1e3;
        }),
        $r = d(fr, function (c) {
          (c.init = function (p) {
            (this.duration = p.duration || 0),
              (this.complete = p.complete || o),
              (this.context = p.context),
              this.play();
          }),
            (c.render = function (p) {
              var h = p - this.start;
              h < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        us = d(fr, function (c, p) {
          (c.init = function (h) {
            (this.context = h.context),
              (this.update = h.update),
              (this.tweens = []),
              (this.current = h.current);
            var y, w;
            for (y in h.values)
              (w = h.values[y]),
                this.current[y] !== w &&
                  this.tweens.push(
                    new fr({
                      name: y,
                      from: this.current[y],
                      to: w,
                      duration: h.duration,
                      delay: h.delay,
                      ease: h.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (c.render = function (h) {
              var y,
                w,
                m = this.tweens.length,
                V = !1;
              for (y = m; y--; )
                (w = this.tweens[y]),
                  w.context &&
                    (w.render(h), (this.current[w.name] = w.value), (V = !0));
              return V
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (c.destroy = function () {
              if ((p.destroy.call(this), this.tweens)) {
                var h,
                  y = this.tweens.length;
                for (h = y; h--; ) this.tweens[h].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        Ae = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !D.transition,
          agentTests: [],
        });
      (t.fallback = function (c) {
        if (!D.transition) return (Ae.fallback = !0);
        Ae.agentTests.push("(" + c + ")");
        var p = new RegExp(Ae.agentTests.join("|"), "i");
        Ae.fallback = p.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (c) {
          return new fr(c);
        }),
        (t.delay = function (c, p, h) {
          return new $r({ complete: p, duration: c, context: h });
        }),
        (e.fn.tram = function (c) {
          return t.call(null, this, c);
        });
      var Lt = e.style,
        cs = e.css,
        ls = { transform: D.transform && D.transform.css },
        Ai = {
          color: [Pe, C],
          background: [Pe, C, "background-color"],
          "outline-color": [Pe, C],
          "border-color": [Pe, C],
          "border-top-color": [Pe, C],
          "border-right-color": [Pe, C],
          "border-bottom-color": [Pe, C],
          "border-left-color": [Pe, C],
          "border-width": [Y, R],
          "border-top-width": [Y, R],
          "border-right-width": [Y, R],
          "border-bottom-width": [Y, R],
          "border-left-width": [Y, R],
          "border-spacing": [Y, R],
          "letter-spacing": [Y, R],
          margin: [Y, R],
          "margin-top": [Y, R],
          "margin-right": [Y, R],
          "margin-bottom": [Y, R],
          "margin-left": [Y, R],
          padding: [Y, R],
          "padding-top": [Y, R],
          "padding-right": [Y, R],
          "padding-bottom": [Y, R],
          "padding-left": [Y, R],
          "outline-width": [Y, R],
          opacity: [Y, g],
          top: [Y, N],
          right: [Y, N],
          bottom: [Y, N],
          left: [Y, N],
          "font-size": [Y, N],
          "text-indent": [Y, N],
          "word-spacing": [Y, N],
          width: [Y, N],
          "min-width": [Y, N],
          "max-width": [Y, N],
          height: [Y, N],
          "min-height": [Y, N],
          "max-height": [Y, N],
          "line-height": [Y, G],
          "scroll-top": [lr, g, "scrollTop"],
          "scroll-left": [lr, g, "scrollLeft"],
        },
        ut = {};
      D.transform &&
        ((Ai.transform = [Yr]),
        (ut = {
          x: [N, "translateX"],
          y: [N, "translateY"],
          rotate: [M],
          rotateX: [M],
          rotateY: [M],
          scale: [g],
          scaleX: [g],
          scaleY: [g],
          skew: [M],
          skewX: [M],
          skewY: [M],
        })),
        D.transform &&
          D.backface &&
          ((ut.z = [N, "translateZ"]),
          (ut.rotateZ = [M]),
          (ut.scaleZ = [g]),
          (ut.perspective = [R]));
      var Yy = /ms/,
        fs = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var ps = s((jU, ds) => {
    var Jy = window.$,
      eI = bi() && Jy.tram;
    ds.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        u = r.concat,
        l = n.toString,
        f = n.hasOwnProperty,
        v = r.forEach,
        d = r.map,
        E = r.reduce,
        T = r.reduceRight,
        b = r.filter,
        S = r.every,
        q = r.some,
        O = r.indexOf,
        A = r.lastIndexOf,
        g = Array.isArray,
        C = Object.keys,
        R = i.bind,
        N =
          (e.each =
          e.forEach =
            function (_, L, x) {
              if (_ == null) return _;
              if (v && _.forEach === v) _.forEach(L, x);
              else if (_.length === +_.length) {
                for (var D = 0, B = _.length; D < B; D++)
                  if (L.call(x, _[D], D, _) === t) return;
              } else
                for (var K = e.keys(_), D = 0, B = K.length; D < B; D++)
                  if (L.call(x, _[K[D]], K[D], _) === t) return;
              return _;
            });
      (e.map = e.collect =
        function (_, L, x) {
          var D = [];
          return _ == null
            ? D
            : d && _.map === d
            ? _.map(L, x)
            : (N(_, function (B, K, ne) {
                D.push(L.call(x, B, K, ne));
              }),
              D);
        }),
        (e.find = e.detect =
          function (_, L, x) {
            var D;
            return (
              M(_, function (B, K, ne) {
                if (L.call(x, B, K, ne)) return (D = B), !0;
              }),
              D
            );
          }),
        (e.filter = e.select =
          function (_, L, x) {
            var D = [];
            return _ == null
              ? D
              : b && _.filter === b
              ? _.filter(L, x)
              : (N(_, function (B, K, ne) {
                  L.call(x, B, K, ne) && D.push(B);
                }),
                D);
          });
      var M =
        (e.some =
        e.any =
          function (_, L, x) {
            L || (L = e.identity);
            var D = !1;
            return _ == null
              ? D
              : q && _.some === q
              ? _.some(L, x)
              : (N(_, function (B, K, ne) {
                  if (D || (D = L.call(x, B, K, ne))) return t;
                }),
                !!D);
          });
      (e.contains = e.include =
        function (_, L) {
          return _ == null
            ? !1
            : O && _.indexOf === O
            ? _.indexOf(L) != -1
            : M(_, function (x) {
                return x === L;
              });
        }),
        (e.delay = function (_, L) {
          var x = a.call(arguments, 2);
          return setTimeout(function () {
            return _.apply(null, x);
          }, L);
        }),
        (e.defer = function (_) {
          return e.delay.apply(e, [_, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (_) {
          var L, x, D;
          return function () {
            L ||
              ((L = !0),
              (x = arguments),
              (D = this),
              eI.frame(function () {
                (L = !1), _.apply(D, x);
              }));
          };
        }),
        (e.debounce = function (_, L, x) {
          var D,
            B,
            K,
            ne,
            Ne,
            He = function () {
              var ye = e.now() - ne;
              ye < L
                ? (D = setTimeout(He, L - ye))
                : ((D = null), x || ((Ne = _.apply(K, B)), (K = B = null)));
            };
          return function () {
            (K = this), (B = arguments), (ne = e.now());
            var ye = x && !D;
            return (
              D || (D = setTimeout(He, L)),
              ye && ((Ne = _.apply(K, B)), (K = B = null)),
              Ne
            );
          };
        }),
        (e.defaults = function (_) {
          if (!e.isObject(_)) return _;
          for (var L = 1, x = arguments.length; L < x; L++) {
            var D = arguments[L];
            for (var B in D) _[B] === void 0 && (_[B] = D[B]);
          }
          return _;
        }),
        (e.keys = function (_) {
          if (!e.isObject(_)) return [];
          if (C) return C(_);
          var L = [];
          for (var x in _) e.has(_, x) && L.push(x);
          return L;
        }),
        (e.has = function (_, L) {
          return f.call(_, L);
        }),
        (e.isObject = function (_) {
          return _ === Object(_);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var G = /(.)^/,
        X = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        Q = /\\|'|\r|\n|\u2028|\u2029/g,
        W = function (_) {
          return "\\" + X[_];
        },
        P = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (_, L, x) {
          !L && x && (L = x), (L = e.defaults({}, L, e.templateSettings));
          var D = RegExp(
              [
                (L.escape || G).source,
                (L.interpolate || G).source,
                (L.evaluate || G).source,
              ].join("|") + "|$",
              "g"
            ),
            B = 0,
            K = "__p+='";
          _.replace(D, function (ye, Y, Pe, lr, Yr) {
            return (
              (K += _.slice(B, Yr).replace(Q, W)),
              (B = Yr + ye.length),
              Y
                ? (K +=
                    `'+
((__t=(` +
                    Y +
                    `))==null?'':_.escape(__t))+
'`)
                : Pe
                ? (K +=
                    `'+
((__t=(` +
                    Pe +
                    `))==null?'':__t)+
'`)
                : lr &&
                  (K +=
                    `';
` +
                    lr +
                    `
__p+='`),
              ye
            );
          }),
            (K += `';
`);
          var ne = L.variable;
          if (ne) {
            if (!P.test(ne))
              throw new Error("variable is not a bare identifier: " + ne);
          } else
            (K =
              `with(obj||{}){
` +
              K +
              `}
`),
              (ne = "obj");
          K =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            K +
            `return __p;
`;
          var Ne;
          try {
            Ne = new Function(L.variable || "obj", "_", K);
          } catch (ye) {
            throw ((ye.source = K), ye);
          }
          var He = function (ye) {
            return Ne.call(this, ye, e);
          };
          return (
            (He.source =
              "function(" +
              ne +
              `){
` +
              K +
              "}"),
            He
          );
        }),
        e
      );
    })();
  });
  var rt = s((KU, Ts) => {
    var te = {},
      Pt = {},
      xt = [],
      wi = window.Webflow || [],
      ct = window.jQuery,
      Fe = ct(window),
      tI = ct(document),
      Ke = ct.isFunction,
      De = (te._ = ps()),
      Es = (te.tram = bi() && ct.tram),
      Jr = !1,
      Ci = !1;
    Es.config.hideBackface = !1;
    Es.config.keepInherited = !0;
    te.define = function (e, t, r) {
      Pt[e] && _s(Pt[e]);
      var n = (Pt[e] = t(ct, De, r) || {});
      return hs(n), n;
    };
    te.require = function (e) {
      return Pt[e];
    };
    function hs(e) {
      te.env() &&
        (Ke(e.design) && Fe.on("__wf_design", e.design),
        Ke(e.preview) && Fe.on("__wf_preview", e.preview)),
        Ke(e.destroy) && Fe.on("__wf_destroy", e.destroy),
        e.ready && Ke(e.ready) && rI(e);
    }
    function rI(e) {
      if (Jr) {
        e.ready();
        return;
      }
      De.contains(xt, e.ready) || xt.push(e.ready);
    }
    function _s(e) {
      Ke(e.design) && Fe.off("__wf_design", e.design),
        Ke(e.preview) && Fe.off("__wf_preview", e.preview),
        Ke(e.destroy) && Fe.off("__wf_destroy", e.destroy),
        e.ready && Ke(e.ready) && nI(e);
    }
    function nI(e) {
      xt = De.filter(xt, function (t) {
        return t !== e.ready;
      });
    }
    te.push = function (e) {
      if (Jr) {
        Ke(e) && e();
        return;
      }
      wi.push(e);
    };
    te.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Zr = navigator.userAgent.toLowerCase(),
      gs = (te.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      iI = (te.env.chrome =
        /chrome/.test(Zr) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Zr.match(/chrome\/(\d+)\./)[1], 10)),
      oI = (te.env.ios = /(ipod|iphone|ipad)/.test(Zr));
    te.env.safari = /safari/.test(Zr) && !iI && !oI;
    var Ri;
    gs &&
      tI.on("touchstart mousedown", function (e) {
        Ri = e.target;
      });
    te.validClick = gs
      ? function (e) {
          return e === Ri || ct.contains(e, Ri);
        }
      : function () {
          return !0;
        };
    var ys = "resize.webflow orientationchange.webflow load.webflow",
      aI = "scroll.webflow " + ys;
    te.resize = Ni(Fe, ys);
    te.scroll = Ni(Fe, aI);
    te.redraw = Ni();
    function Ni(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = De.throttle(function (i) {
          De.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (De.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = De.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    te.location = function (e) {
      window.location = e;
    };
    te.env() && (te.location = function () {});
    te.ready = function () {
      (Jr = !0), Ci ? sI() : De.each(xt, vs), De.each(wi, vs), te.resize.up();
    };
    function vs(e) {
      Ke(e) && e();
    }
    function sI() {
      (Ci = !1), De.each(Pt, hs);
    }
    var yt;
    te.load = function (e) {
      yt.then(e);
    };
    function Is() {
      yt && (yt.reject(), Fe.off("load", yt.resolve)),
        (yt = new ct.Deferred()),
        Fe.on("load", yt.resolve);
    }
    te.destroy = function (e) {
      (e = e || {}),
        (Ci = !0),
        Fe.triggerHandler("__wf_destroy"),
        e.domready != null && (Jr = e.domready),
        De.each(Pt, _s),
        te.resize.off(),
        te.scroll.off(),
        te.redraw.off(),
        (xt = []),
        (wi = []),
        yt.state() === "pending" && Is();
    };
    ct(te.ready);
    Is();
    Ts.exports = window.Webflow = te;
  });
  var Ss = s((kU, ms) => {
    var Os = rt();
    Os.define(
      "brand",
      (ms.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          l =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var T = n.attr("data-wf-status"),
            b = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(b) && a.hostname !== b && (T = !0),
            T &&
              !u &&
              ((f = f || d()),
              E(),
              setTimeout(E, 500),
              e(r).off(l, v).on(l, v));
        };
        function v() {
          var T =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", T ? "display: none !important;" : "");
        }
        function d() {
          var T = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            b = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            S = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return T.append(b, S), T[0];
        }
        function E() {
          var T = i.children(o),
            b = T.length && T.get(0) === f,
            S = Os.env("editor");
          if (b) {
            S && T.remove();
            return;
          }
          T.length && T.remove(), S || i.append(f);
        }
        return t;
      })
    );
  });
  var bs = s((zU, As) => {
    var qi = rt();
    qi.define(
      "edit",
      (As.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (qi.env("test") || qi.env("frame")) && !r.fixture && !uI())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          u = "hashchange",
          l,
          f = r.load || E,
          v = !1;
        try {
          v =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        v
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(u, d).triggerHandler(u);
        function d() {
          l || (/\?edit/.test(a.hash) && f());
        }
        function E() {
          (l = !0),
            (window.WebflowEditor = !0),
            i.off(u, d),
            A(function (C) {
              e.ajax({
                url: O("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: T(C),
              });
            });
        }
        function T(C) {
          return function (R) {
            if (!R) {
              console.error("Could not load editor data");
              return;
            }
            (R.thirdPartyCookiesSupported = C),
              b(q(R.bugReporterScriptPath), function () {
                b(q(R.scriptPath), function () {
                  window.WebflowEditor(R);
                });
              });
          };
        }
        function b(C, R) {
          e.ajax({ type: "GET", url: C, dataType: "script", cache: !0 }).then(
            R,
            S
          );
        }
        function S(C, R, N) {
          throw (console.error("Could not load editor script: " + R), N);
        }
        function q(C) {
          return C.indexOf("//") >= 0
            ? C
            : O("https://editor-api.webflow.com" + C);
        }
        function O(C) {
          return C.replace(/([^:])\/\//g, "$1/");
        }
        function A(C) {
          var R = window.document.createElement("iframe");
          (R.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (R.style.display = "none"),
            (R.sandbox = "allow-scripts allow-same-origin");
          var N = function (M) {
            M.data === "WF_third_party_cookies_unsupported"
              ? (g(R, N), C(!1))
              : M.data === "WF_third_party_cookies_supported" &&
                (g(R, N), C(!0));
          };
          (R.onerror = function () {
            g(R, N), C(!1);
          }),
            window.addEventListener("message", N, !1),
            window.document.body.appendChild(R);
        }
        function g(C, R) {
          window.removeEventListener("message", R, !1), C.remove();
        }
        return n;
      })
    );
    function uI() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var ws = s((YU, Rs) => {
    var cI = rt();
    cI.define(
      "focus-visible",
      (Rs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(g) {
            return !!(
              g &&
              g !== document &&
              g.nodeName !== "HTML" &&
              g.nodeName !== "BODY" &&
              "classList" in g &&
              "contains" in g.classList
            );
          }
          function l(g) {
            var C = g.type,
              R = g.tagName;
            return !!(
              (R === "INPUT" && a[C] && !g.readOnly) ||
              (R === "TEXTAREA" && !g.readOnly) ||
              g.isContentEditable
            );
          }
          function f(g) {
            g.getAttribute("data-wf-focus-visible") ||
              g.setAttribute("data-wf-focus-visible", "true");
          }
          function v(g) {
            g.getAttribute("data-wf-focus-visible") &&
              g.removeAttribute("data-wf-focus-visible");
          }
          function d(g) {
            g.metaKey ||
              g.altKey ||
              g.ctrlKey ||
              (u(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function T(g) {
            u(g.target) && (n || l(g.target)) && f(g.target);
          }
          function b(g) {
            u(g.target) &&
              g.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              v(g.target));
          }
          function S() {
            document.visibilityState === "hidden" && (i && (n = !0), q());
          }
          function q() {
            document.addEventListener("mousemove", A),
              document.addEventListener("mousedown", A),
              document.addEventListener("mouseup", A),
              document.addEventListener("pointermove", A),
              document.addEventListener("pointerdown", A),
              document.addEventListener("pointerup", A),
              document.addEventListener("touchmove", A),
              document.addEventListener("touchstart", A),
              document.addEventListener("touchend", A);
          }
          function O() {
            document.removeEventListener("mousemove", A),
              document.removeEventListener("mousedown", A),
              document.removeEventListener("mouseup", A),
              document.removeEventListener("pointermove", A),
              document.removeEventListener("pointerdown", A),
              document.removeEventListener("pointerup", A),
              document.removeEventListener("touchmove", A),
              document.removeEventListener("touchstart", A),
              document.removeEventListener("touchend", A);
          }
          function A(g) {
            (g.target.nodeName && g.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), O());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", S, !0),
            q(),
            r.addEventListener("focus", T, !0),
            r.addEventListener("blur", b, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var qs = s(($U, Ns) => {
    var Cs = rt();
    Cs.define(
      "focus",
      (Ns.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            l = u.tagName;
          return (
            (/^a$/i.test(l) && u.href != null) ||
            (/^(button|textarea)$/i.test(l) && u.disabled !== !0) ||
            (/^input$/i.test(l) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(l) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(l) ||
            (/^video$/i.test(l) && u.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Cs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var xs = s((QU, Ps) => {
    "use strict";
    var Li = window.jQuery,
      ke = {},
      en = [],
      Ls = ".w-ix",
      tn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Li(t).triggerHandler(ke.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Li(t).triggerHandler(ke.types.OUTRO));
        },
      };
    ke.triggers = {};
    ke.types = { INTRO: "w-ix-intro" + Ls, OUTRO: "w-ix-outro" + Ls };
    ke.init = function () {
      for (var e = en.length, t = 0; t < e; t++) {
        var r = en[t];
        r[0](0, r[1]);
      }
      (en = []), Li.extend(ke.triggers, tn);
    };
    ke.async = function () {
      for (var e in tn) {
        var t = tn[e];
        tn.hasOwnProperty(e) &&
          (ke.triggers[e] = function (r, n) {
            en.push([t, n]);
          });
      }
    };
    ke.async();
    Ps.exports = ke;
  });
  var Gs = s((ZU, Fs) => {
    "use strict";
    var Pi = xs();
    function Ms(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var lI = window.jQuery,
      rn = {},
      Ds = ".w-ix",
      fI = {
        reset: function (e, t) {
          Pi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Pi.triggers.intro(e, t), Ms(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Pi.triggers.outro(e, t), Ms(t, "COMPONENT_INACTIVE");
        },
      };
    rn.triggers = {};
    rn.types = { INTRO: "w-ix-intro" + Ds, OUTRO: "w-ix-outro" + Ds };
    lI.extend(rn.triggers, fI);
    Fs.exports = rn;
  });
  var Xs = s((JU, nt) => {
    function xi(e) {
      return (
        (nt.exports = xi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (nt.exports.__esModule = !0),
        (nt.exports.default = nt.exports),
        xi(e)
      );
    }
    (nt.exports = xi),
      (nt.exports.__esModule = !0),
      (nt.exports.default = nt.exports);
  });
  var Mt = s((eB, pr) => {
    var dI = Xs().default;
    function Vs(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Vs = function (i) {
        return i ? r : t;
      })(e);
    }
    function pI(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (dI(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Vs(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (pr.exports = pI),
      (pr.exports.__esModule = !0),
      (pr.exports.default = pr.exports);
  });
  var ze = s((tB, vr) => {
    function vI(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (vr.exports = vI),
      (vr.exports.__esModule = !0),
      (vr.exports.default = vr.exports);
  });
  var ae = s((rB, Us) => {
    var nn = function (e) {
      return e && e.Math == Math && e;
    };
    Us.exports =
      nn(typeof globalThis == "object" && globalThis) ||
      nn(typeof window == "object" && window) ||
      nn(typeof self == "object" && self) ||
      nn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Dt = s((nB, Bs) => {
    Bs.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var It = s((iB, Ws) => {
    var EI = Dt();
    Ws.exports = !EI(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var on = s((oB, Hs) => {
    var Er = Function.prototype.call;
    Hs.exports = Er.bind
      ? Er.bind(Er)
      : function () {
          return Er.apply(Er, arguments);
        };
  });
  var zs = s((ks) => {
    "use strict";
    var js = {}.propertyIsEnumerable,
      Ks = Object.getOwnPropertyDescriptor,
      hI = Ks && !js.call({ 1: 2 }, 1);
    ks.f = hI
      ? function (t) {
          var r = Ks(this, t);
          return !!r && r.enumerable;
        }
      : js;
  });
  var Mi = s((sB, Ys) => {
    Ys.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ge = s((uB, Qs) => {
    var $s = Function.prototype,
      Di = $s.bind,
      Fi = $s.call,
      _I = Di && Di.bind(Fi);
    Qs.exports = Di
      ? function (e) {
          return e && _I(Fi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Fi.apply(e, arguments);
            }
          );
        };
  });
  var eu = s((cB, Js) => {
    var Zs = Ge(),
      gI = Zs({}.toString),
      yI = Zs("".slice);
    Js.exports = function (e) {
      return yI(gI(e), 8, -1);
    };
  });
  var ru = s((lB, tu) => {
    var II = ae(),
      TI = Ge(),
      OI = Dt(),
      mI = eu(),
      Gi = II.Object,
      SI = TI("".split);
    tu.exports = OI(function () {
      return !Gi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return mI(e) == "String" ? SI(e, "") : Gi(e);
        }
      : Gi;
  });
  var Xi = s((fB, nu) => {
    var AI = ae(),
      bI = AI.TypeError;
    nu.exports = function (e) {
      if (e == null) throw bI("Can't call method on " + e);
      return e;
    };
  });
  var hr = s((dB, iu) => {
    var RI = ru(),
      wI = Xi();
    iu.exports = function (e) {
      return RI(wI(e));
    };
  });
  var Ye = s((pB, ou) => {
    ou.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Ft = s((vB, au) => {
    var CI = Ye();
    au.exports = function (e) {
      return typeof e == "object" ? e !== null : CI(e);
    };
  });
  var _r = s((EB, su) => {
    var Vi = ae(),
      NI = Ye(),
      qI = function (e) {
        return NI(e) ? e : void 0;
      };
    su.exports = function (e, t) {
      return arguments.length < 2 ? qI(Vi[e]) : Vi[e] && Vi[e][t];
    };
  });
  var cu = s((hB, uu) => {
    var LI = Ge();
    uu.exports = LI({}.isPrototypeOf);
  });
  var fu = s((_B, lu) => {
    var PI = _r();
    lu.exports = PI("navigator", "userAgent") || "";
  });
  var gu = s((gB, _u) => {
    var hu = ae(),
      Ui = fu(),
      du = hu.process,
      pu = hu.Deno,
      vu = (du && du.versions) || (pu && pu.version),
      Eu = vu && vu.v8,
      Xe,
      an;
    Eu &&
      ((Xe = Eu.split(".")),
      (an = Xe[0] > 0 && Xe[0] < 4 ? 1 : +(Xe[0] + Xe[1])));
    !an &&
      Ui &&
      ((Xe = Ui.match(/Edge\/(\d+)/)),
      (!Xe || Xe[1] >= 74) &&
        ((Xe = Ui.match(/Chrome\/(\d+)/)), Xe && (an = +Xe[1])));
    _u.exports = an;
  });
  var Bi = s((yB, Iu) => {
    var yu = gu(),
      xI = Dt();
    Iu.exports =
      !!Object.getOwnPropertySymbols &&
      !xI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && yu && yu < 41)
        );
      });
  });
  var Wi = s((IB, Tu) => {
    var MI = Bi();
    Tu.exports = MI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Hi = s((TB, Ou) => {
    var DI = ae(),
      FI = _r(),
      GI = Ye(),
      XI = cu(),
      VI = Wi(),
      UI = DI.Object;
    Ou.exports = VI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = FI("Symbol");
          return GI(t) && XI(t.prototype, UI(e));
        };
  });
  var Su = s((OB, mu) => {
    var BI = ae(),
      WI = BI.String;
    mu.exports = function (e) {
      try {
        return WI(e);
      } catch {
        return "Object";
      }
    };
  });
  var bu = s((mB, Au) => {
    var HI = ae(),
      jI = Ye(),
      KI = Su(),
      kI = HI.TypeError;
    Au.exports = function (e) {
      if (jI(e)) return e;
      throw kI(KI(e) + " is not a function");
    };
  });
  var wu = s((SB, Ru) => {
    var zI = bu();
    Ru.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : zI(r);
    };
  });
  var Nu = s((AB, Cu) => {
    var YI = ae(),
      ji = on(),
      Ki = Ye(),
      ki = Ft(),
      $I = YI.TypeError;
    Cu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Ki((r = e.toString)) && !ki((n = ji(r, e)))) ||
        (Ki((r = e.valueOf)) && !ki((n = ji(r, e)))) ||
        (t !== "string" && Ki((r = e.toString)) && !ki((n = ji(r, e))))
      )
        return n;
      throw $I("Can't convert object to primitive value");
    };
  });
  var Lu = s((bB, qu) => {
    qu.exports = !1;
  });
  var sn = s((RB, xu) => {
    var Pu = ae(),
      QI = Object.defineProperty;
    xu.exports = function (e, t) {
      try {
        QI(Pu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Pu[e] = t;
      }
      return t;
    };
  });
  var un = s((wB, Du) => {
    var ZI = ae(),
      JI = sn(),
      Mu = "__core-js_shared__",
      eT = ZI[Mu] || JI(Mu, {});
    Du.exports = eT;
  });
  var zi = s((CB, Gu) => {
    var tT = Lu(),
      Fu = un();
    (Gu.exports = function (e, t) {
      return Fu[e] || (Fu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: tT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Vu = s((NB, Xu) => {
    var rT = ae(),
      nT = Xi(),
      iT = rT.Object;
    Xu.exports = function (e) {
      return iT(nT(e));
    };
  });
  var lt = s((qB, Uu) => {
    var oT = Ge(),
      aT = Vu(),
      sT = oT({}.hasOwnProperty);
    Uu.exports =
      Object.hasOwn ||
      function (t, r) {
        return sT(aT(t), r);
      };
  });
  var Yi = s((LB, Bu) => {
    var uT = Ge(),
      cT = 0,
      lT = Math.random(),
      fT = uT((1).toString);
    Bu.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + fT(++cT + lT, 36);
    };
  });
  var $i = s((PB, ku) => {
    var dT = ae(),
      pT = zi(),
      Wu = lt(),
      vT = Yi(),
      Hu = Bi(),
      Ku = Wi(),
      Gt = pT("wks"),
      Tt = dT.Symbol,
      ju = Tt && Tt.for,
      ET = Ku ? Tt : (Tt && Tt.withoutSetter) || vT;
    ku.exports = function (e) {
      if (!Wu(Gt, e) || !(Hu || typeof Gt[e] == "string")) {
        var t = "Symbol." + e;
        Hu && Wu(Tt, e)
          ? (Gt[e] = Tt[e])
          : Ku && ju
          ? (Gt[e] = ju(t))
          : (Gt[e] = ET(t));
      }
      return Gt[e];
    };
  });
  var Qu = s((xB, $u) => {
    var hT = ae(),
      _T = on(),
      zu = Ft(),
      Yu = Hi(),
      gT = wu(),
      yT = Nu(),
      IT = $i(),
      TT = hT.TypeError,
      OT = IT("toPrimitive");
    $u.exports = function (e, t) {
      if (!zu(e) || Yu(e)) return e;
      var r = gT(e, OT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = _T(r, e, t)), !zu(n) || Yu(n))
        )
          return n;
        throw TT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), yT(e, t);
    };
  });
  var Qi = s((MB, Zu) => {
    var mT = Qu(),
      ST = Hi();
    Zu.exports = function (e) {
      var t = mT(e, "string");
      return ST(t) ? t : t + "";
    };
  });
  var Ji = s((DB, ec) => {
    var AT = ae(),
      Ju = Ft(),
      Zi = AT.document,
      bT = Ju(Zi) && Ju(Zi.createElement);
    ec.exports = function (e) {
      return bT ? Zi.createElement(e) : {};
    };
  });
  var eo = s((FB, tc) => {
    var RT = It(),
      wT = Dt(),
      CT = Ji();
    tc.exports =
      !RT &&
      !wT(function () {
        return (
          Object.defineProperty(CT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var to = s((nc) => {
    var NT = It(),
      qT = on(),
      LT = zs(),
      PT = Mi(),
      xT = hr(),
      MT = Qi(),
      DT = lt(),
      FT = eo(),
      rc = Object.getOwnPropertyDescriptor;
    nc.f = NT
      ? rc
      : function (t, r) {
          if (((t = xT(t)), (r = MT(r)), FT))
            try {
              return rc(t, r);
            } catch {}
          if (DT(t, r)) return PT(!qT(LT.f, t, r), t[r]);
        };
  });
  var gr = s((XB, oc) => {
    var ic = ae(),
      GT = Ft(),
      XT = ic.String,
      VT = ic.TypeError;
    oc.exports = function (e) {
      if (GT(e)) return e;
      throw VT(XT(e) + " is not an object");
    };
  });
  var yr = s((uc) => {
    var UT = ae(),
      BT = It(),
      WT = eo(),
      ac = gr(),
      HT = Qi(),
      jT = UT.TypeError,
      sc = Object.defineProperty;
    uc.f = BT
      ? sc
      : function (t, r, n) {
          if ((ac(t), (r = HT(r)), ac(n), WT))
            try {
              return sc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw jT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var cn = s((UB, cc) => {
    var KT = It(),
      kT = yr(),
      zT = Mi();
    cc.exports = KT
      ? function (e, t, r) {
          return kT.f(e, t, zT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var no = s((BB, lc) => {
    var YT = Ge(),
      $T = Ye(),
      ro = un(),
      QT = YT(Function.toString);
    $T(ro.inspectSource) ||
      (ro.inspectSource = function (e) {
        return QT(e);
      });
    lc.exports = ro.inspectSource;
  });
  var pc = s((WB, dc) => {
    var ZT = ae(),
      JT = Ye(),
      eO = no(),
      fc = ZT.WeakMap;
    dc.exports = JT(fc) && /native code/.test(eO(fc));
  });
  var io = s((HB, Ec) => {
    var tO = zi(),
      rO = Yi(),
      vc = tO("keys");
    Ec.exports = function (e) {
      return vc[e] || (vc[e] = rO(e));
    };
  });
  var ln = s((jB, hc) => {
    hc.exports = {};
  });
  var Oc = s((KB, Tc) => {
    var nO = pc(),
      Ic = ae(),
      oo = Ge(),
      iO = Ft(),
      oO = cn(),
      ao = lt(),
      so = un(),
      aO = io(),
      sO = ln(),
      _c = "Object already initialized",
      co = Ic.TypeError,
      uO = Ic.WeakMap,
      fn,
      Ir,
      dn,
      cO = function (e) {
        return dn(e) ? Ir(e) : fn(e, {});
      },
      lO = function (e) {
        return function (t) {
          var r;
          if (!iO(t) || (r = Ir(t)).type !== e)
            throw co("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    nO || so.state
      ? ((ft = so.state || (so.state = new uO())),
        (gc = oo(ft.get)),
        (uo = oo(ft.has)),
        (yc = oo(ft.set)),
        (fn = function (e, t) {
          if (uo(ft, e)) throw new co(_c);
          return (t.facade = e), yc(ft, e, t), t;
        }),
        (Ir = function (e) {
          return gc(ft, e) || {};
        }),
        (dn = function (e) {
          return uo(ft, e);
        }))
      : ((Ot = aO("state")),
        (sO[Ot] = !0),
        (fn = function (e, t) {
          if (ao(e, Ot)) throw new co(_c);
          return (t.facade = e), oO(e, Ot, t), t;
        }),
        (Ir = function (e) {
          return ao(e, Ot) ? e[Ot] : {};
        }),
        (dn = function (e) {
          return ao(e, Ot);
        }));
    var ft, gc, uo, yc, Ot;
    Tc.exports = { set: fn, get: Ir, has: dn, enforce: cO, getterFor: lO };
  });
  var Ac = s((kB, Sc) => {
    var lo = It(),
      fO = lt(),
      mc = Function.prototype,
      dO = lo && Object.getOwnPropertyDescriptor,
      fo = fO(mc, "name"),
      pO = fo && function () {}.name === "something",
      vO = fo && (!lo || (lo && dO(mc, "name").configurable));
    Sc.exports = { EXISTS: fo, PROPER: pO, CONFIGURABLE: vO };
  });
  var Nc = s((zB, Cc) => {
    var EO = ae(),
      bc = Ye(),
      hO = lt(),
      Rc = cn(),
      _O = sn(),
      gO = no(),
      wc = Oc(),
      yO = Ac().CONFIGURABLE,
      IO = wc.get,
      TO = wc.enforce,
      OO = String(String).split("String");
    (Cc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        u = n && n.name !== void 0 ? n.name : t,
        l;
      if (
        (bc(r) &&
          (String(u).slice(0, 7) === "Symbol(" &&
            (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!hO(r, "name") || (yO && r.name !== u)) && Rc(r, "name", u),
          (l = TO(r)),
          l.source || (l.source = OO.join(typeof u == "string" ? u : ""))),
        e === EO)
      ) {
        o ? (e[t] = r) : _O(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Rc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (bc(this) && IO(this).source) || gO(this);
    });
  });
  var po = s((YB, qc) => {
    var mO = Math.ceil,
      SO = Math.floor;
    qc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? SO : mO)(t);
    };
  });
  var Pc = s(($B, Lc) => {
    var AO = po(),
      bO = Math.max,
      RO = Math.min;
    Lc.exports = function (e, t) {
      var r = AO(e);
      return r < 0 ? bO(r + t, 0) : RO(r, t);
    };
  });
  var Mc = s((QB, xc) => {
    var wO = po(),
      CO = Math.min;
    xc.exports = function (e) {
      return e > 0 ? CO(wO(e), 9007199254740991) : 0;
    };
  });
  var Fc = s((ZB, Dc) => {
    var NO = Mc();
    Dc.exports = function (e) {
      return NO(e.length);
    };
  });
  var vo = s((JB, Xc) => {
    var qO = hr(),
      LO = Pc(),
      PO = Fc(),
      Gc = function (e) {
        return function (t, r, n) {
          var i = qO(t),
            o = PO(i),
            a = LO(n, o),
            u;
          if (e && r != r) {
            for (; o > a; ) if (((u = i[a++]), u != u)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Xc.exports = { includes: Gc(!0), indexOf: Gc(!1) };
  });
  var ho = s((eW, Uc) => {
    var xO = Ge(),
      Eo = lt(),
      MO = hr(),
      DO = vo().indexOf,
      FO = ln(),
      Vc = xO([].push);
    Uc.exports = function (e, t) {
      var r = MO(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Eo(FO, o) && Eo(r, o) && Vc(i, o);
      for (; t.length > n; ) Eo(r, (o = t[n++])) && (~DO(i, o) || Vc(i, o));
      return i;
    };
  });
  var pn = s((tW, Bc) => {
    Bc.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var Hc = s((Wc) => {
    var GO = ho(),
      XO = pn(),
      VO = XO.concat("length", "prototype");
    Wc.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return GO(t, VO);
      };
  });
  var Kc = s((jc) => {
    jc.f = Object.getOwnPropertySymbols;
  });
  var zc = s((iW, kc) => {
    var UO = _r(),
      BO = Ge(),
      WO = Hc(),
      HO = Kc(),
      jO = gr(),
      KO = BO([].concat);
    kc.exports =
      UO("Reflect", "ownKeys") ||
      function (t) {
        var r = WO.f(jO(t)),
          n = HO.f;
        return n ? KO(r, n(t)) : r;
      };
  });
  var $c = s((oW, Yc) => {
    var kO = lt(),
      zO = zc(),
      YO = to(),
      $O = yr();
    Yc.exports = function (e, t) {
      for (var r = zO(t), n = $O.f, i = YO.f, o = 0; o < r.length; o++) {
        var a = r[o];
        kO(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var Zc = s((aW, Qc) => {
    var QO = Dt(),
      ZO = Ye(),
      JO = /#|\.prototype\./,
      Tr = function (e, t) {
        var r = tm[em(e)];
        return r == nm ? !0 : r == rm ? !1 : ZO(t) ? QO(t) : !!t;
      },
      em = (Tr.normalize = function (e) {
        return String(e).replace(JO, ".").toLowerCase();
      }),
      tm = (Tr.data = {}),
      rm = (Tr.NATIVE = "N"),
      nm = (Tr.POLYFILL = "P");
    Qc.exports = Tr;
  });
  var el = s((sW, Jc) => {
    var _o = ae(),
      im = to().f,
      om = cn(),
      am = Nc(),
      sm = sn(),
      um = $c(),
      cm = Zc();
    Jc.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        u,
        l,
        f,
        v;
      if (
        (n
          ? (a = _o)
          : i
          ? (a = _o[r] || sm(r, {}))
          : (a = (_o[r] || {}).prototype),
        a)
      )
        for (u in t) {
          if (
            ((f = t[u]),
            e.noTargetGet ? ((v = im(a, u)), (l = v && v.value)) : (l = a[u]),
            (o = cm(n ? u : r + (i ? "." : "#") + u, e.forced)),
            !o && l !== void 0)
          ) {
            if (typeof f == typeof l) continue;
            um(f, l);
          }
          (e.sham || (l && l.sham)) && om(f, "sham", !0), am(a, u, f, e);
        }
    };
  });
  var rl = s((uW, tl) => {
    var lm = ho(),
      fm = pn();
    tl.exports =
      Object.keys ||
      function (t) {
        return lm(t, fm);
      };
  });
  var il = s((cW, nl) => {
    var dm = It(),
      pm = yr(),
      vm = gr(),
      Em = hr(),
      hm = rl();
    nl.exports = dm
      ? Object.defineProperties
      : function (t, r) {
          vm(t);
          for (var n = Em(r), i = hm(r), o = i.length, a = 0, u; o > a; )
            pm.f(t, (u = i[a++]), n[u]);
          return t;
        };
  });
  var al = s((lW, ol) => {
    var _m = _r();
    ol.exports = _m("document", "documentElement");
  });
  var vl = s((fW, pl) => {
    var gm = gr(),
      ym = il(),
      sl = pn(),
      Im = ln(),
      Tm = al(),
      Om = Ji(),
      mm = io(),
      ul = ">",
      cl = "<",
      yo = "prototype",
      Io = "script",
      fl = mm("IE_PROTO"),
      go = function () {},
      dl = function (e) {
        return cl + Io + ul + e + cl + "/" + Io + ul;
      },
      ll = function (e) {
        e.write(dl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      Sm = function () {
        var e = Om("iframe"),
          t = "java" + Io + ":",
          r;
        return (
          (e.style.display = "none"),
          Tm.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(dl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      vn,
      En = function () {
        try {
          vn = new ActiveXObject("htmlfile");
        } catch {}
        En =
          typeof document < "u"
            ? document.domain && vn
              ? ll(vn)
              : Sm()
            : ll(vn);
        for (var e = sl.length; e--; ) delete En[yo][sl[e]];
        return En();
      };
    Im[fl] = !0;
    pl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((go[yo] = gm(t)), (n = new go()), (go[yo] = null), (n[fl] = t))
            : (n = En()),
          r === void 0 ? n : ym(n, r)
        );
      };
  });
  var hl = s((dW, El) => {
    var Am = $i(),
      bm = vl(),
      Rm = yr(),
      To = Am("unscopables"),
      Oo = Array.prototype;
    Oo[To] == null && Rm.f(Oo, To, { configurable: !0, value: bm(null) });
    El.exports = function (e) {
      Oo[To][e] = !0;
    };
  });
  var _l = s(() => {
    "use strict";
    var wm = el(),
      Cm = vo().includes,
      Nm = hl();
    wm(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return Cm(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    Nm("includes");
  });
  var yl = s((EW, gl) => {
    var qm = ae(),
      Lm = Ge();
    gl.exports = function (e, t) {
      return Lm(qm[e].prototype[t]);
    };
  });
  var Tl = s((hW, Il) => {
    _l();
    var Pm = yl();
    Il.exports = Pm("Array", "includes");
  });
  var ml = s((_W, Ol) => {
    var xm = Tl();
    Ol.exports = xm;
  });
  var Al = s((gW, Sl) => {
    var Mm = ml();
    Sl.exports = Mm;
  });
  var mo = s((yW, bl) => {
    var Dm =
      typeof global == "object" && global && global.Object === Object && global;
    bl.exports = Dm;
  });
  var Ve = s((IW, Rl) => {
    var Fm = mo(),
      Gm = typeof self == "object" && self && self.Object === Object && self,
      Xm = Fm || Gm || Function("return this")();
    Rl.exports = Xm;
  });
  var Xt = s((TW, wl) => {
    var Vm = Ve(),
      Um = Vm.Symbol;
    wl.exports = Um;
  });
  var Ll = s((OW, ql) => {
    var Cl = Xt(),
      Nl = Object.prototype,
      Bm = Nl.hasOwnProperty,
      Wm = Nl.toString,
      Or = Cl ? Cl.toStringTag : void 0;
    function Hm(e) {
      var t = Bm.call(e, Or),
        r = e[Or];
      try {
        e[Or] = void 0;
        var n = !0;
      } catch {}
      var i = Wm.call(e);
      return n && (t ? (e[Or] = r) : delete e[Or]), i;
    }
    ql.exports = Hm;
  });
  var xl = s((mW, Pl) => {
    var jm = Object.prototype,
      Km = jm.toString;
    function km(e) {
      return Km.call(e);
    }
    Pl.exports = km;
  });
  var dt = s((SW, Fl) => {
    var Ml = Xt(),
      zm = Ll(),
      Ym = xl(),
      $m = "[object Null]",
      Qm = "[object Undefined]",
      Dl = Ml ? Ml.toStringTag : void 0;
    function Zm(e) {
      return e == null
        ? e === void 0
          ? Qm
          : $m
        : Dl && Dl in Object(e)
        ? zm(e)
        : Ym(e);
    }
    Fl.exports = Zm;
  });
  var So = s((AW, Gl) => {
    function Jm(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Gl.exports = Jm;
  });
  var Ao = s((bW, Xl) => {
    var eS = So(),
      tS = eS(Object.getPrototypeOf, Object);
    Xl.exports = tS;
  });
  var it = s((RW, Vl) => {
    function rS(e) {
      return e != null && typeof e == "object";
    }
    Vl.exports = rS;
  });
  var bo = s((wW, Bl) => {
    var nS = dt(),
      iS = Ao(),
      oS = it(),
      aS = "[object Object]",
      sS = Function.prototype,
      uS = Object.prototype,
      Ul = sS.toString,
      cS = uS.hasOwnProperty,
      lS = Ul.call(Object);
    function fS(e) {
      if (!oS(e) || nS(e) != aS) return !1;
      var t = iS(e);
      if (t === null) return !0;
      var r = cS.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Ul.call(r) == lS;
    }
    Bl.exports = fS;
  });
  var Wl = s((Ro) => {
    "use strict";
    Object.defineProperty(Ro, "__esModule", { value: !0 });
    Ro.default = dS;
    function dS(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Hl = s((Co, wo) => {
    "use strict";
    Object.defineProperty(Co, "__esModule", { value: !0 });
    var pS = Wl(),
      vS = ES(pS);
    function ES(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Vt;
    typeof self < "u"
      ? (Vt = self)
      : typeof window < "u"
      ? (Vt = window)
      : typeof global < "u"
      ? (Vt = global)
      : typeof wo < "u"
      ? (Vt = wo)
      : (Vt = Function("return this")());
    var hS = (0, vS.default)(Vt);
    Co.default = hS;
  });
  var No = s((mr) => {
    "use strict";
    mr.__esModule = !0;
    mr.ActionTypes = void 0;
    mr.default = zl;
    var _S = bo(),
      gS = kl(_S),
      yS = Hl(),
      jl = kl(yS);
    function kl(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Kl = (mr.ActionTypes = { INIT: "@@redux/INIT" });
    function zl(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(zl)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        u = a,
        l = !1;
      function f() {
        u === a && (u = a.slice());
      }
      function v() {
        return o;
      }
      function d(S) {
        if (typeof S != "function")
          throw new Error("Expected listener to be a function.");
        var q = !0;
        return (
          f(),
          u.push(S),
          function () {
            if (q) {
              (q = !1), f();
              var A = u.indexOf(S);
              u.splice(A, 1);
            }
          }
        );
      }
      function E(S) {
        if (!(0, gS.default)(S))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof S.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (l) throw new Error("Reducers may not dispatch actions.");
        try {
          (l = !0), (o = i(o, S));
        } finally {
          l = !1;
        }
        for (var q = (a = u), O = 0; O < q.length; O++) q[O]();
        return S;
      }
      function T(S) {
        if (typeof S != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = S), E({ type: Kl.INIT });
      }
      function b() {
        var S,
          q = d;
        return (
          (S = {
            subscribe: function (A) {
              if (typeof A != "object")
                throw new TypeError("Expected the observer to be an object.");
              function g() {
                A.next && A.next(v());
              }
              g();
              var C = q(g);
              return { unsubscribe: C };
            },
          }),
          (S[jl.default] = function () {
            return this;
          }),
          S
        );
      }
      return (
        E({ type: Kl.INIT }),
        (n = { dispatch: E, subscribe: d, getState: v, replaceReducer: T }),
        (n[jl.default] = b),
        n
      );
    }
  });
  var Lo = s((qo) => {
    "use strict";
    qo.__esModule = !0;
    qo.default = IS;
    function IS(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Ql = s((Po) => {
    "use strict";
    Po.__esModule = !0;
    Po.default = AS;
    var Yl = No(),
      TS = bo(),
      LW = $l(TS),
      OS = Lo(),
      PW = $l(OS);
    function $l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function mS(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function SS(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: Yl.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Yl.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function AS(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        SS(r);
      } catch (l) {
        u = l;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          v = arguments[1];
        if (u) throw u;
        if (!1) var d;
        for (var E = !1, T = {}, b = 0; b < o.length; b++) {
          var S = o[b],
            q = r[S],
            O = f[S],
            A = q(O, v);
          if (typeof A > "u") {
            var g = mS(S, v);
            throw new Error(g);
          }
          (T[S] = A), (E = E || A !== O);
        }
        return E ? T : f;
      };
    }
  });
  var Jl = s((xo) => {
    "use strict";
    xo.__esModule = !0;
    xo.default = bS;
    function Zl(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function bS(e, t) {
      if (typeof e == "function") return Zl(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = Zl(a, t));
      }
      return n;
    }
  });
  var Do = s((Mo) => {
    "use strict";
    Mo.__esModule = !0;
    Mo.default = RS;
    function RS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var ef = s((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    var wS =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Fo.default = LS;
    var CS = Do(),
      NS = qS(CS);
    function qS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function LS() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var u = n(i, o, a),
            l = u.dispatch,
            f = [],
            v = {
              getState: u.getState,
              dispatch: function (E) {
                return l(E);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(v);
            })),
            (l = NS.default.apply(void 0, f)(u.dispatch)),
            wS({}, u, { dispatch: l })
          );
        };
      };
    }
  });
  var Go = s((qe) => {
    "use strict";
    qe.__esModule = !0;
    qe.compose =
      qe.applyMiddleware =
      qe.bindActionCreators =
      qe.combineReducers =
      qe.createStore =
        void 0;
    var PS = No(),
      xS = Ut(PS),
      MS = Ql(),
      DS = Ut(MS),
      FS = Jl(),
      GS = Ut(FS),
      XS = ef(),
      VS = Ut(XS),
      US = Do(),
      BS = Ut(US),
      WS = Lo(),
      GW = Ut(WS);
    function Ut(e) {
      return e && e.__esModule ? e : { default: e };
    }
    qe.createStore = xS.default;
    qe.combineReducers = DS.default;
    qe.bindActionCreators = GS.default;
    qe.applyMiddleware = VS.default;
    qe.compose = BS.default;
  });
  var tf = s((Ee) => {
    "use strict";
    Object.defineProperty(Ee, "__esModule", { value: !0 });
    Ee.QuickEffectIds =
      Ee.QuickEffectDirectionConsts =
      Ee.EventTypeConsts =
      Ee.EventLimitAffectedElements =
      Ee.EventContinuousMouseAxes =
      Ee.EventBasedOn =
      Ee.EventAppliesTo =
        void 0;
    var HS = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Ee.EventTypeConsts = HS;
    var jS = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Ee.EventAppliesTo = jS;
    var KS = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Ee.EventBasedOn = KS;
    var kS = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Ee.EventContinuousMouseAxes = kS;
    var zS = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Ee.EventLimitAffectedElements = zS;
    var YS = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Ee.QuickEffectIds = YS;
    var $S = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Ee.QuickEffectDirectionConsts = $S;
  });
  var Xo = s((Bt) => {
    "use strict";
    Object.defineProperty(Bt, "__esModule", { value: !0 });
    Bt.ActionTypeConsts = Bt.ActionAppliesTo = void 0;
    var QS = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    Bt.ActionTypeConsts = QS;
    var ZS = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    Bt.ActionAppliesTo = ZS;
  });
  var rf = s((hn) => {
    "use strict";
    Object.defineProperty(hn, "__esModule", { value: !0 });
    hn.InteractionTypeConsts = void 0;
    var JS = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    hn.InteractionTypeConsts = JS;
  });
  var nf = s((_n) => {
    "use strict";
    Object.defineProperty(_n, "__esModule", { value: !0 });
    _n.ReducedMotionTypes = void 0;
    var eA = Xo(),
      {
        TRANSFORM_MOVE: tA,
        TRANSFORM_SCALE: rA,
        TRANSFORM_ROTATE: nA,
        TRANSFORM_SKEW: iA,
        STYLE_SIZE: oA,
        STYLE_FILTER: aA,
        STYLE_FONT_VARIATION: sA,
      } = eA.ActionTypeConsts,
      uA = {
        [tA]: !0,
        [rA]: !0,
        [nA]: !0,
        [iA]: !0,
        [oA]: !0,
        [aA]: !0,
        [sA]: !0,
      };
    _n.ReducedMotionTypes = uA;
  });
  var of = s((k) => {
    "use strict";
    Object.defineProperty(k, "__esModule", { value: !0 });
    k.IX2_VIEWPORT_WIDTH_CHANGED =
      k.IX2_TEST_FRAME_RENDERED =
      k.IX2_STOP_REQUESTED =
      k.IX2_SESSION_STOPPED =
      k.IX2_SESSION_STARTED =
      k.IX2_SESSION_INITIALIZED =
      k.IX2_RAW_DATA_IMPORTED =
      k.IX2_PREVIEW_REQUESTED =
      k.IX2_PLAYBACK_REQUESTED =
      k.IX2_PARAMETER_CHANGED =
      k.IX2_MEDIA_QUERIES_DEFINED =
      k.IX2_INSTANCE_STARTED =
      k.IX2_INSTANCE_REMOVED =
      k.IX2_INSTANCE_ADDED =
      k.IX2_EVENT_STATE_CHANGED =
      k.IX2_EVENT_LISTENER_ADDED =
      k.IX2_ELEMENT_STATE_CHANGED =
      k.IX2_CLEAR_REQUESTED =
      k.IX2_ANIMATION_FRAME_CHANGED =
      k.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var cA = "IX2_RAW_DATA_IMPORTED";
    k.IX2_RAW_DATA_IMPORTED = cA;
    var lA = "IX2_SESSION_INITIALIZED";
    k.IX2_SESSION_INITIALIZED = lA;
    var fA = "IX2_SESSION_STARTED";
    k.IX2_SESSION_STARTED = fA;
    var dA = "IX2_SESSION_STOPPED";
    k.IX2_SESSION_STOPPED = dA;
    var pA = "IX2_PREVIEW_REQUESTED";
    k.IX2_PREVIEW_REQUESTED = pA;
    var vA = "IX2_PLAYBACK_REQUESTED";
    k.IX2_PLAYBACK_REQUESTED = vA;
    var EA = "IX2_STOP_REQUESTED";
    k.IX2_STOP_REQUESTED = EA;
    var hA = "IX2_CLEAR_REQUESTED";
    k.IX2_CLEAR_REQUESTED = hA;
    var _A = "IX2_EVENT_LISTENER_ADDED";
    k.IX2_EVENT_LISTENER_ADDED = _A;
    var gA = "IX2_EVENT_STATE_CHANGED";
    k.IX2_EVENT_STATE_CHANGED = gA;
    var yA = "IX2_ANIMATION_FRAME_CHANGED";
    k.IX2_ANIMATION_FRAME_CHANGED = yA;
    var IA = "IX2_PARAMETER_CHANGED";
    k.IX2_PARAMETER_CHANGED = IA;
    var TA = "IX2_INSTANCE_ADDED";
    k.IX2_INSTANCE_ADDED = TA;
    var OA = "IX2_INSTANCE_STARTED";
    k.IX2_INSTANCE_STARTED = OA;
    var mA = "IX2_INSTANCE_REMOVED";
    k.IX2_INSTANCE_REMOVED = mA;
    var SA = "IX2_ELEMENT_STATE_CHANGED";
    k.IX2_ELEMENT_STATE_CHANGED = SA;
    var AA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    k.IX2_ACTION_LIST_PLAYBACK_CHANGED = AA;
    var bA = "IX2_VIEWPORT_WIDTH_CHANGED";
    k.IX2_VIEWPORT_WIDTH_CHANGED = bA;
    var RA = "IX2_MEDIA_QUERIES_DEFINED";
    k.IX2_MEDIA_QUERIES_DEFINED = RA;
    var wA = "IX2_TEST_FRAME_RENDERED";
    k.IX2_TEST_FRAME_RENDERED = wA;
  });
  var af = s((I) => {
    "use strict";
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.W_MOD_JS =
      I.W_MOD_IX =
      I.WILL_CHANGE =
      I.WIDTH =
      I.WF_PAGE =
      I.TRANSLATE_Z =
      I.TRANSLATE_Y =
      I.TRANSLATE_X =
      I.TRANSLATE_3D =
      I.TRANSFORM =
      I.SKEW_Y =
      I.SKEW_X =
      I.SKEW =
      I.SIBLINGS =
      I.SCALE_Z =
      I.SCALE_Y =
      I.SCALE_X =
      I.SCALE_3D =
      I.ROTATE_Z =
      I.ROTATE_Y =
      I.ROTATE_X =
      I.RENDER_TRANSFORM =
      I.RENDER_STYLE =
      I.RENDER_PLUGIN =
      I.RENDER_GENERAL =
      I.PRESERVE_3D =
      I.PLAIN_OBJECT =
      I.PARENT =
      I.OPACITY =
      I.IX2_ID_DELIMITER =
      I.IMMEDIATE_CHILDREN =
      I.HTML_ELEMENT =
      I.HEIGHT =
      I.FONT_VARIATION_SETTINGS =
      I.FLEX =
      I.FILTER =
      I.DISPLAY =
      I.CONFIG_Z_VALUE =
      I.CONFIG_Z_UNIT =
      I.CONFIG_Y_VALUE =
      I.CONFIG_Y_UNIT =
      I.CONFIG_X_VALUE =
      I.CONFIG_X_UNIT =
      I.CONFIG_VALUE =
      I.CONFIG_UNIT =
      I.COMMA_DELIMITER =
      I.COLOR =
      I.COLON_DELIMITER =
      I.CHILDREN =
      I.BOUNDARY_SELECTOR =
      I.BORDER_COLOR =
      I.BAR_DELIMITER =
      I.BACKGROUND_COLOR =
      I.BACKGROUND =
      I.AUTO =
      I.ABSTRACT_NODE =
        void 0;
    var CA = "|";
    I.IX2_ID_DELIMITER = CA;
    var NA = "data-wf-page";
    I.WF_PAGE = NA;
    var qA = "w-mod-js";
    I.W_MOD_JS = qA;
    var LA = "w-mod-ix";
    I.W_MOD_IX = LA;
    var PA = ".w-dyn-item";
    I.BOUNDARY_SELECTOR = PA;
    var xA = "xValue";
    I.CONFIG_X_VALUE = xA;
    var MA = "yValue";
    I.CONFIG_Y_VALUE = MA;
    var DA = "zValue";
    I.CONFIG_Z_VALUE = DA;
    var FA = "value";
    I.CONFIG_VALUE = FA;
    var GA = "xUnit";
    I.CONFIG_X_UNIT = GA;
    var XA = "yUnit";
    I.CONFIG_Y_UNIT = XA;
    var VA = "zUnit";
    I.CONFIG_Z_UNIT = VA;
    var UA = "unit";
    I.CONFIG_UNIT = UA;
    var BA = "transform";
    I.TRANSFORM = BA;
    var WA = "translateX";
    I.TRANSLATE_X = WA;
    var HA = "translateY";
    I.TRANSLATE_Y = HA;
    var jA = "translateZ";
    I.TRANSLATE_Z = jA;
    var KA = "translate3d";
    I.TRANSLATE_3D = KA;
    var kA = "scaleX";
    I.SCALE_X = kA;
    var zA = "scaleY";
    I.SCALE_Y = zA;
    var YA = "scaleZ";
    I.SCALE_Z = YA;
    var $A = "scale3d";
    I.SCALE_3D = $A;
    var QA = "rotateX";
    I.ROTATE_X = QA;
    var ZA = "rotateY";
    I.ROTATE_Y = ZA;
    var JA = "rotateZ";
    I.ROTATE_Z = JA;
    var eb = "skew";
    I.SKEW = eb;
    var tb = "skewX";
    I.SKEW_X = tb;
    var rb = "skewY";
    I.SKEW_Y = rb;
    var nb = "opacity";
    I.OPACITY = nb;
    var ib = "filter";
    I.FILTER = ib;
    var ob = "font-variation-settings";
    I.FONT_VARIATION_SETTINGS = ob;
    var ab = "width";
    I.WIDTH = ab;
    var sb = "height";
    I.HEIGHT = sb;
    var ub = "backgroundColor";
    I.BACKGROUND_COLOR = ub;
    var cb = "background";
    I.BACKGROUND = cb;
    var lb = "borderColor";
    I.BORDER_COLOR = lb;
    var fb = "color";
    I.COLOR = fb;
    var db = "display";
    I.DISPLAY = db;
    var pb = "flex";
    I.FLEX = pb;
    var vb = "willChange";
    I.WILL_CHANGE = vb;
    var Eb = "AUTO";
    I.AUTO = Eb;
    var hb = ",";
    I.COMMA_DELIMITER = hb;
    var _b = ":";
    I.COLON_DELIMITER = _b;
    var gb = "|";
    I.BAR_DELIMITER = gb;
    var yb = "CHILDREN";
    I.CHILDREN = yb;
    var Ib = "IMMEDIATE_CHILDREN";
    I.IMMEDIATE_CHILDREN = Ib;
    var Tb = "SIBLINGS";
    I.SIBLINGS = Tb;
    var Ob = "PARENT";
    I.PARENT = Ob;
    var mb = "preserve-3d";
    I.PRESERVE_3D = mb;
    var Sb = "HTML_ELEMENT";
    I.HTML_ELEMENT = Sb;
    var Ab = "PLAIN_OBJECT";
    I.PLAIN_OBJECT = Ab;
    var bb = "ABSTRACT_NODE";
    I.ABSTRACT_NODE = bb;
    var Rb = "RENDER_TRANSFORM";
    I.RENDER_TRANSFORM = Rb;
    var wb = "RENDER_GENERAL";
    I.RENDER_GENERAL = wb;
    var Cb = "RENDER_STYLE";
    I.RENDER_STYLE = Cb;
    var Nb = "RENDER_PLUGIN";
    I.RENDER_PLUGIN = Nb;
  });
  var Re = s((de) => {
    "use strict";
    var sf = Mt().default;
    Object.defineProperty(de, "__esModule", { value: !0 });
    var gn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    de.IX2EngineConstants = de.IX2EngineActionTypes = void 0;
    var Vo = tf();
    Object.keys(Vo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(gn, e) ||
        (e in de && de[e] === Vo[e]) ||
        Object.defineProperty(de, e, {
          enumerable: !0,
          get: function () {
            return Vo[e];
          },
        });
    });
    var Uo = Xo();
    Object.keys(Uo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(gn, e) ||
        (e in de && de[e] === Uo[e]) ||
        Object.defineProperty(de, e, {
          enumerable: !0,
          get: function () {
            return Uo[e];
          },
        });
    });
    var Bo = rf();
    Object.keys(Bo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(gn, e) ||
        (e in de && de[e] === Bo[e]) ||
        Object.defineProperty(de, e, {
          enumerable: !0,
          get: function () {
            return Bo[e];
          },
        });
    });
    var Wo = nf();
    Object.keys(Wo).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(gn, e) ||
        (e in de && de[e] === Wo[e]) ||
        Object.defineProperty(de, e, {
          enumerable: !0,
          get: function () {
            return Wo[e];
          },
        });
    });
    var qb = sf(of());
    de.IX2EngineActionTypes = qb;
    var Lb = sf(af());
    de.IX2EngineConstants = Lb;
  });
  var uf = s((yn) => {
    "use strict";
    Object.defineProperty(yn, "__esModule", { value: !0 });
    yn.ixData = void 0;
    var Pb = Re(),
      { IX2_RAW_DATA_IMPORTED: xb } = Pb.IX2EngineActionTypes,
      Mb = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case xb:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    yn.ixData = Mb;
  });
  var Sr = s((zW, ot) => {
    function Ho() {
      return (
        (ot.exports = Ho =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (ot.exports.__esModule = !0),
        (ot.exports.default = ot.exports),
        Ho.apply(this, arguments)
      );
    }
    (ot.exports = Ho),
      (ot.exports.__esModule = !0),
      (ot.exports.default = ot.exports);
  });
  var Wt = s((ue) => {
    "use strict";
    Object.defineProperty(ue, "__esModule", { value: !0 });
    var Db =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ue.clone = Tn;
    ue.addLast = ff;
    ue.addFirst = df;
    ue.removeLast = pf;
    ue.removeFirst = vf;
    ue.insert = Ef;
    ue.removeAt = hf;
    ue.replaceAt = _f;
    ue.getIn = On;
    ue.set = mn;
    ue.setIn = Sn;
    ue.update = yf;
    ue.updateIn = If;
    ue.merge = Tf;
    ue.mergeDeep = Of;
    ue.mergeIn = mf;
    ue.omit = Sf;
    ue.addDefaults = Af;
    var cf = "INVALID_ARGS";
    function lf(e) {
      throw new Error(e);
    }
    function jo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Fb = {}.hasOwnProperty;
    function Tn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function we(e, t, r) {
      var n = r;
      n == null && lf(cf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3;
        u < o;
        u++
      )
        a[u - 3] = arguments[u];
      for (var l = 0; l < a.length; l++) {
        var f = a[l];
        if (f != null) {
          var v = jo(f);
          if (v.length)
            for (var d = 0; d <= v.length; d++) {
              var E = v[d];
              if (!(e && n[E] !== void 0)) {
                var T = f[E];
                t && In(n[E]) && In(T) && (T = we(e, t, n[E], T)),
                  !(T === void 0 || T === n[E]) &&
                    (i || ((i = !0), (n = Tn(n))), (n[E] = T));
              }
            }
        }
      }
      return n;
    }
    function In(e) {
      var t = typeof e > "u" ? "undefined" : Db(e);
      return e != null && (t === "object" || t === "function");
    }
    function ff(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function df(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function pf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function vf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Ef(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function hf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function _f(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function On(e, t) {
      if ((!Array.isArray(t) && lf(cf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function mn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Tn(i);
      return (o[t] = r), o;
    }
    function gf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          In(e) && In(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = gf(a, t, r, n + 1);
      }
      return mn(e, o, i);
    }
    function Sn(e, t, r) {
      return t.length ? gf(e, t, r, 0) : r;
    }
    function yf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return mn(e, t, i);
    }
    function If(e, t, r) {
      var n = On(e, t),
        i = r(n);
      return Sn(e, t, i);
    }
    function Tf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), l = 6;
        l < a;
        l++
      )
        u[l - 6] = arguments[l];
      return u.length
        ? we.call.apply(we, [null, !1, !1, e, t, r, n, i, o].concat(u))
        : we(!1, !1, e, t, r, n, i, o);
    }
    function Of(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), l = 6;
        l < a;
        l++
      )
        u[l - 6] = arguments[l];
      return u.length
        ? we.call.apply(we, [null, !1, !0, e, t, r, n, i, o].concat(u))
        : we(!1, !0, e, t, r, n, i, o);
    }
    function mf(e, t, r, n, i, o, a) {
      var u = On(e, t);
      u == null && (u = {});
      for (
        var l = void 0,
          f = arguments.length,
          v = Array(f > 7 ? f - 7 : 0),
          d = 7;
        d < f;
        d++
      )
        v[d - 7] = arguments[d];
      return (
        v.length
          ? (l = we.call.apply(we, [null, !1, !1, u, r, n, i, o, a].concat(v)))
          : (l = we(!1, !1, u, r, n, i, o, a)),
        Sn(e, t, l)
      );
    }
    function Sf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (Fb.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = jo(e), u = 0; u < a.length; u++) {
        var l = a[u];
        r.indexOf(l) >= 0 || (o[l] = e[l]);
      }
      return o;
    }
    function Af(e, t, r, n, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), l = 6;
        l < a;
        l++
      )
        u[l - 6] = arguments[l];
      return u.length
        ? we.call.apply(we, [null, !0, !1, e, t, r, n, i, o].concat(u))
        : we(!0, !1, e, t, r, n, i, o);
    }
    var Gb = {
      clone: Tn,
      addLast: ff,
      addFirst: df,
      removeLast: pf,
      removeFirst: vf,
      insert: Ef,
      removeAt: hf,
      replaceAt: _f,
      getIn: On,
      set: mn,
      setIn: Sn,
      update: yf,
      updateIn: If,
      merge: Tf,
      mergeDeep: Of,
      mergeIn: mf,
      omit: Sf,
      addDefaults: Af,
    };
    ue.default = Gb;
  });
  var Rf = s((An) => {
    "use strict";
    var Xb = ze().default;
    Object.defineProperty(An, "__esModule", { value: !0 });
    An.ixRequest = void 0;
    var Vb = Xb(Sr()),
      Ub = Re(),
      Bb = Wt(),
      {
        IX2_PREVIEW_REQUESTED: Wb,
        IX2_PLAYBACK_REQUESTED: Hb,
        IX2_STOP_REQUESTED: jb,
        IX2_CLEAR_REQUESTED: Kb,
      } = Ub.IX2EngineActionTypes,
      kb = { preview: {}, playback: {}, stop: {}, clear: {} },
      bf = Object.create(null, {
        [Wb]: { value: "preview" },
        [Hb]: { value: "playback" },
        [jb]: { value: "stop" },
        [Kb]: { value: "clear" },
      }),
      zb = (e = kb, t) => {
        if (t.type in bf) {
          let r = [bf[t.type]];
          return (0, Bb.setIn)(e, [r], (0, Vb.default)({}, t.payload));
        }
        return e;
      };
    An.ixRequest = zb;
  });
  var Cf = s((bn) => {
    "use strict";
    Object.defineProperty(bn, "__esModule", { value: !0 });
    bn.ixSession = void 0;
    var Yb = Re(),
      $e = Wt(),
      {
        IX2_SESSION_INITIALIZED: $b,
        IX2_SESSION_STARTED: Qb,
        IX2_TEST_FRAME_RENDERED: Zb,
        IX2_SESSION_STOPPED: Jb,
        IX2_EVENT_LISTENER_ADDED: e0,
        IX2_EVENT_STATE_CHANGED: t0,
        IX2_ANIMATION_FRAME_CHANGED: r0,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: n0,
        IX2_VIEWPORT_WIDTH_CHANGED: i0,
        IX2_MEDIA_QUERIES_DEFINED: o0,
      } = Yb.IX2EngineActionTypes,
      wf = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      a0 = 20,
      s0 = (e = wf, t) => {
        switch (t.type) {
          case $b: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, $e.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case Qb:
            return (0, $e.set)(e, "active", !0);
          case Zb: {
            let {
              payload: { step: r = a0 },
            } = t;
            return (0, $e.set)(e, "tick", e.tick + r);
          }
          case Jb:
            return wf;
          case r0: {
            let {
              payload: { now: r },
            } = t;
            return (0, $e.set)(e, "tick", r);
          }
          case e0: {
            let r = (0, $e.addLast)(e.eventListeners, t.payload);
            return (0, $e.set)(e, "eventListeners", r);
          }
          case t0: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, $e.setIn)(e, ["eventState", r], n);
          }
          case n0: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, $e.setIn)(e, ["playbackState", r], n);
          }
          case i0: {
            let { width: r, mediaQueries: n } = t.payload,
              i = n.length,
              o = null;
            for (let a = 0; a < i; a++) {
              let { key: u, min: l, max: f } = n[a];
              if (r >= l && r <= f) {
                o = u;
                break;
              }
            }
            return (0, $e.merge)(e, { viewportWidth: r, mediaQueryKey: o });
          }
          case o0:
            return (0, $e.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    bn.ixSession = s0;
  });
  var qf = s((ZW, Nf) => {
    function u0() {
      (this.__data__ = []), (this.size = 0);
    }
    Nf.exports = u0;
  });
  var Rn = s((JW, Lf) => {
    function c0(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Lf.exports = c0;
  });
  var Ar = s((e5, Pf) => {
    var l0 = Rn();
    function f0(e, t) {
      for (var r = e.length; r--; ) if (l0(e[r][0], t)) return r;
      return -1;
    }
    Pf.exports = f0;
  });
  var Mf = s((t5, xf) => {
    var d0 = Ar(),
      p0 = Array.prototype,
      v0 = p0.splice;
    function E0(e) {
      var t = this.__data__,
        r = d0(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : v0.call(t, r, 1), --this.size, !0;
    }
    xf.exports = E0;
  });
  var Ff = s((r5, Df) => {
    var h0 = Ar();
    function _0(e) {
      var t = this.__data__,
        r = h0(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Df.exports = _0;
  });
  var Xf = s((n5, Gf) => {
    var g0 = Ar();
    function y0(e) {
      return g0(this.__data__, e) > -1;
    }
    Gf.exports = y0;
  });
  var Uf = s((i5, Vf) => {
    var I0 = Ar();
    function T0(e, t) {
      var r = this.__data__,
        n = I0(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Vf.exports = T0;
  });
  var br = s((o5, Bf) => {
    var O0 = qf(),
      m0 = Mf(),
      S0 = Ff(),
      A0 = Xf(),
      b0 = Uf();
    function Ht(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ht.prototype.clear = O0;
    Ht.prototype.delete = m0;
    Ht.prototype.get = S0;
    Ht.prototype.has = A0;
    Ht.prototype.set = b0;
    Bf.exports = Ht;
  });
  var Hf = s((a5, Wf) => {
    var R0 = br();
    function w0() {
      (this.__data__ = new R0()), (this.size = 0);
    }
    Wf.exports = w0;
  });
  var Kf = s((s5, jf) => {
    function C0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    jf.exports = C0;
  });
  var zf = s((u5, kf) => {
    function N0(e) {
      return this.__data__.get(e);
    }
    kf.exports = N0;
  });
  var $f = s((c5, Yf) => {
    function q0(e) {
      return this.__data__.has(e);
    }
    Yf.exports = q0;
  });
  var Qe = s((l5, Qf) => {
    function L0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Qf.exports = L0;
  });
  var Ko = s((f5, Zf) => {
    var P0 = dt(),
      x0 = Qe(),
      M0 = "[object AsyncFunction]",
      D0 = "[object Function]",
      F0 = "[object GeneratorFunction]",
      G0 = "[object Proxy]";
    function X0(e) {
      if (!x0(e)) return !1;
      var t = P0(e);
      return t == D0 || t == F0 || t == M0 || t == G0;
    }
    Zf.exports = X0;
  });
  var ed = s((d5, Jf) => {
    var V0 = Ve(),
      U0 = V0["__core-js_shared__"];
    Jf.exports = U0;
  });
  var nd = s((p5, rd) => {
    var ko = ed(),
      td = (function () {
        var e = /[^.]+$/.exec((ko && ko.keys && ko.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function B0(e) {
      return !!td && td in e;
    }
    rd.exports = B0;
  });
  var zo = s((v5, id) => {
    var W0 = Function.prototype,
      H0 = W0.toString;
    function j0(e) {
      if (e != null) {
        try {
          return H0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    id.exports = j0;
  });
  var ad = s((E5, od) => {
    var K0 = Ko(),
      k0 = nd(),
      z0 = Qe(),
      Y0 = zo(),
      $0 = /[\\^$.*+?()[\]{}|]/g,
      Q0 = /^\[object .+?Constructor\]$/,
      Z0 = Function.prototype,
      J0 = Object.prototype,
      eR = Z0.toString,
      tR = J0.hasOwnProperty,
      rR = RegExp(
        "^" +
          eR
            .call(tR)
            .replace($0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function nR(e) {
      if (!z0(e) || k0(e)) return !1;
      var t = K0(e) ? rR : Q0;
      return t.test(Y0(e));
    }
    od.exports = nR;
  });
  var ud = s((h5, sd) => {
    function iR(e, t) {
      return e?.[t];
    }
    sd.exports = iR;
  });
  var pt = s((_5, cd) => {
    var oR = ad(),
      aR = ud();
    function sR(e, t) {
      var r = aR(e, t);
      return oR(r) ? r : void 0;
    }
    cd.exports = sR;
  });
  var wn = s((g5, ld) => {
    var uR = pt(),
      cR = Ve(),
      lR = uR(cR, "Map");
    ld.exports = lR;
  });
  var Rr = s((y5, fd) => {
    var fR = pt(),
      dR = fR(Object, "create");
    fd.exports = dR;
  });
  var vd = s((I5, pd) => {
    var dd = Rr();
    function pR() {
      (this.__data__ = dd ? dd(null) : {}), (this.size = 0);
    }
    pd.exports = pR;
  });
  var hd = s((T5, Ed) => {
    function vR(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Ed.exports = vR;
  });
  var gd = s((O5, _d) => {
    var ER = Rr(),
      hR = "__lodash_hash_undefined__",
      _R = Object.prototype,
      gR = _R.hasOwnProperty;
    function yR(e) {
      var t = this.__data__;
      if (ER) {
        var r = t[e];
        return r === hR ? void 0 : r;
      }
      return gR.call(t, e) ? t[e] : void 0;
    }
    _d.exports = yR;
  });
  var Id = s((m5, yd) => {
    var IR = Rr(),
      TR = Object.prototype,
      OR = TR.hasOwnProperty;
    function mR(e) {
      var t = this.__data__;
      return IR ? t[e] !== void 0 : OR.call(t, e);
    }
    yd.exports = mR;
  });
  var Od = s((S5, Td) => {
    var SR = Rr(),
      AR = "__lodash_hash_undefined__";
    function bR(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = SR && t === void 0 ? AR : t),
        this
      );
    }
    Td.exports = bR;
  });
  var Sd = s((A5, md) => {
    var RR = vd(),
      wR = hd(),
      CR = gd(),
      NR = Id(),
      qR = Od();
    function jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    jt.prototype.clear = RR;
    jt.prototype.delete = wR;
    jt.prototype.get = CR;
    jt.prototype.has = NR;
    jt.prototype.set = qR;
    md.exports = jt;
  });
  var Rd = s((b5, bd) => {
    var Ad = Sd(),
      LR = br(),
      PR = wn();
    function xR() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Ad(),
          map: new (PR || LR)(),
          string: new Ad(),
        });
    }
    bd.exports = xR;
  });
  var Cd = s((R5, wd) => {
    function MR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    wd.exports = MR;
  });
  var wr = s((w5, Nd) => {
    var DR = Cd();
    function FR(e, t) {
      var r = e.__data__;
      return DR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Nd.exports = FR;
  });
  var Ld = s((C5, qd) => {
    var GR = wr();
    function XR(e) {
      var t = GR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    qd.exports = XR;
  });
  var xd = s((N5, Pd) => {
    var VR = wr();
    function UR(e) {
      return VR(this, e).get(e);
    }
    Pd.exports = UR;
  });
  var Dd = s((q5, Md) => {
    var BR = wr();
    function WR(e) {
      return BR(this, e).has(e);
    }
    Md.exports = WR;
  });
  var Gd = s((L5, Fd) => {
    var HR = wr();
    function jR(e, t) {
      var r = HR(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Fd.exports = jR;
  });
  var Cn = s((P5, Xd) => {
    var KR = Rd(),
      kR = Ld(),
      zR = xd(),
      YR = Dd(),
      $R = Gd();
    function Kt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Kt.prototype.clear = KR;
    Kt.prototype.delete = kR;
    Kt.prototype.get = zR;
    Kt.prototype.has = YR;
    Kt.prototype.set = $R;
    Xd.exports = Kt;
  });
  var Ud = s((x5, Vd) => {
    var QR = br(),
      ZR = wn(),
      JR = Cn(),
      ew = 200;
    function tw(e, t) {
      var r = this.__data__;
      if (r instanceof QR) {
        var n = r.__data__;
        if (!ZR || n.length < ew - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new JR(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Vd.exports = tw;
  });
  var Yo = s((M5, Bd) => {
    var rw = br(),
      nw = Hf(),
      iw = Kf(),
      ow = zf(),
      aw = $f(),
      sw = Ud();
    function kt(e) {
      var t = (this.__data__ = new rw(e));
      this.size = t.size;
    }
    kt.prototype.clear = nw;
    kt.prototype.delete = iw;
    kt.prototype.get = ow;
    kt.prototype.has = aw;
    kt.prototype.set = sw;
    Bd.exports = kt;
  });
  var Hd = s((D5, Wd) => {
    var uw = "__lodash_hash_undefined__";
    function cw(e) {
      return this.__data__.set(e, uw), this;
    }
    Wd.exports = cw;
  });
  var Kd = s((F5, jd) => {
    function lw(e) {
      return this.__data__.has(e);
    }
    jd.exports = lw;
  });
  var zd = s((G5, kd) => {
    var fw = Cn(),
      dw = Hd(),
      pw = Kd();
    function Nn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new fw(); ++t < r; ) this.add(e[t]);
    }
    Nn.prototype.add = Nn.prototype.push = dw;
    Nn.prototype.has = pw;
    kd.exports = Nn;
  });
  var $d = s((X5, Yd) => {
    function vw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Yd.exports = vw;
  });
  var Zd = s((V5, Qd) => {
    function Ew(e, t) {
      return e.has(t);
    }
    Qd.exports = Ew;
  });
  var $o = s((U5, Jd) => {
    var hw = zd(),
      _w = $d(),
      gw = Zd(),
      yw = 1,
      Iw = 2;
    function Tw(e, t, r, n, i, o) {
      var a = r & yw,
        u = e.length,
        l = t.length;
      if (u != l && !(a && l > u)) return !1;
      var f = o.get(e),
        v = o.get(t);
      if (f && v) return f == t && v == e;
      var d = -1,
        E = !0,
        T = r & Iw ? new hw() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < u; ) {
        var b = e[d],
          S = t[d];
        if (n) var q = a ? n(S, b, d, t, e, o) : n(b, S, d, e, t, o);
        if (q !== void 0) {
          if (q) continue;
          E = !1;
          break;
        }
        if (T) {
          if (
            !_w(t, function (O, A) {
              if (!gw(T, A) && (b === O || i(b, O, r, n, o))) return T.push(A);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(b === S || i(b, S, r, n, o))) {
          E = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), E;
    }
    Jd.exports = Tw;
  });
  var tp = s((B5, ep) => {
    var Ow = Ve(),
      mw = Ow.Uint8Array;
    ep.exports = mw;
  });
  var np = s((W5, rp) => {
    function Sw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    rp.exports = Sw;
  });
  var op = s((H5, ip) => {
    function Aw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    ip.exports = Aw;
  });
  var lp = s((j5, cp) => {
    var ap = Xt(),
      sp = tp(),
      bw = Rn(),
      Rw = $o(),
      ww = np(),
      Cw = op(),
      Nw = 1,
      qw = 2,
      Lw = "[object Boolean]",
      Pw = "[object Date]",
      xw = "[object Error]",
      Mw = "[object Map]",
      Dw = "[object Number]",
      Fw = "[object RegExp]",
      Gw = "[object Set]",
      Xw = "[object String]",
      Vw = "[object Symbol]",
      Uw = "[object ArrayBuffer]",
      Bw = "[object DataView]",
      up = ap ? ap.prototype : void 0,
      Qo = up ? up.valueOf : void 0;
    function Ww(e, t, r, n, i, o, a) {
      switch (r) {
        case Bw:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case Uw:
          return !(e.byteLength != t.byteLength || !o(new sp(e), new sp(t)));
        case Lw:
        case Pw:
        case Dw:
          return bw(+e, +t);
        case xw:
          return e.name == t.name && e.message == t.message;
        case Fw:
        case Xw:
          return e == t + "";
        case Mw:
          var u = ww;
        case Gw:
          var l = n & Nw;
          if ((u || (u = Cw), e.size != t.size && !l)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= qw), a.set(e, t);
          var v = Rw(u(e), u(t), n, i, o, a);
          return a.delete(e), v;
        case Vw:
          if (Qo) return Qo.call(e) == Qo.call(t);
      }
      return !1;
    }
    cp.exports = Ww;
  });
  var qn = s((K5, fp) => {
    function Hw(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    fp.exports = Hw;
  });
  var he = s((k5, dp) => {
    var jw = Array.isArray;
    dp.exports = jw;
  });
  var Zo = s((z5, pp) => {
    var Kw = qn(),
      kw = he();
    function zw(e, t, r) {
      var n = t(e);
      return kw(e) ? n : Kw(n, r(e));
    }
    pp.exports = zw;
  });
  var Ep = s((Y5, vp) => {
    function Yw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    vp.exports = Yw;
  });
  var Jo = s(($5, hp) => {
    function $w() {
      return [];
    }
    hp.exports = $w;
  });
  var ea = s((Q5, gp) => {
    var Qw = Ep(),
      Zw = Jo(),
      Jw = Object.prototype,
      eC = Jw.propertyIsEnumerable,
      _p = Object.getOwnPropertySymbols,
      tC = _p
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                Qw(_p(e), function (t) {
                  return eC.call(e, t);
                }));
          }
        : Zw;
    gp.exports = tC;
  });
  var Ip = s((Z5, yp) => {
    function rC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    yp.exports = rC;
  });
  var Op = s((J5, Tp) => {
    var nC = dt(),
      iC = it(),
      oC = "[object Arguments]";
    function aC(e) {
      return iC(e) && nC(e) == oC;
    }
    Tp.exports = aC;
  });
  var Cr = s((eH, Ap) => {
    var mp = Op(),
      sC = it(),
      Sp = Object.prototype,
      uC = Sp.hasOwnProperty,
      cC = Sp.propertyIsEnumerable,
      lC = mp(
        (function () {
          return arguments;
        })()
      )
        ? mp
        : function (e) {
            return sC(e) && uC.call(e, "callee") && !cC.call(e, "callee");
          };
    Ap.exports = lC;
  });
  var Rp = s((tH, bp) => {
    function fC() {
      return !1;
    }
    bp.exports = fC;
  });
  var Ln = s((Nr, zt) => {
    var dC = Ve(),
      pC = Rp(),
      Np = typeof Nr == "object" && Nr && !Nr.nodeType && Nr,
      wp = Np && typeof zt == "object" && zt && !zt.nodeType && zt,
      vC = wp && wp.exports === Np,
      Cp = vC ? dC.Buffer : void 0,
      EC = Cp ? Cp.isBuffer : void 0,
      hC = EC || pC;
    zt.exports = hC;
  });
  var Pn = s((rH, qp) => {
    var _C = 9007199254740991,
      gC = /^(?:0|[1-9]\d*)$/;
    function yC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? _C),
        !!t &&
          (r == "number" || (r != "symbol" && gC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    qp.exports = yC;
  });
  var xn = s((nH, Lp) => {
    var IC = 9007199254740991;
    function TC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= IC;
    }
    Lp.exports = TC;
  });
  var xp = s((iH, Pp) => {
    var OC = dt(),
      mC = xn(),
      SC = it(),
      AC = "[object Arguments]",
      bC = "[object Array]",
      RC = "[object Boolean]",
      wC = "[object Date]",
      CC = "[object Error]",
      NC = "[object Function]",
      qC = "[object Map]",
      LC = "[object Number]",
      PC = "[object Object]",
      xC = "[object RegExp]",
      MC = "[object Set]",
      DC = "[object String]",
      FC = "[object WeakMap]",
      GC = "[object ArrayBuffer]",
      XC = "[object DataView]",
      VC = "[object Float32Array]",
      UC = "[object Float64Array]",
      BC = "[object Int8Array]",
      WC = "[object Int16Array]",
      HC = "[object Int32Array]",
      jC = "[object Uint8Array]",
      KC = "[object Uint8ClampedArray]",
      kC = "[object Uint16Array]",
      zC = "[object Uint32Array]",
      ie = {};
    ie[VC] =
      ie[UC] =
      ie[BC] =
      ie[WC] =
      ie[HC] =
      ie[jC] =
      ie[KC] =
      ie[kC] =
      ie[zC] =
        !0;
    ie[AC] =
      ie[bC] =
      ie[GC] =
      ie[RC] =
      ie[XC] =
      ie[wC] =
      ie[CC] =
      ie[NC] =
      ie[qC] =
      ie[LC] =
      ie[PC] =
      ie[xC] =
      ie[MC] =
      ie[DC] =
      ie[FC] =
        !1;
    function YC(e) {
      return SC(e) && mC(e.length) && !!ie[OC(e)];
    }
    Pp.exports = YC;
  });
  var Dp = s((oH, Mp) => {
    function $C(e) {
      return function (t) {
        return e(t);
      };
    }
    Mp.exports = $C;
  });
  var Gp = s((qr, Yt) => {
    var QC = mo(),
      Fp = typeof qr == "object" && qr && !qr.nodeType && qr,
      Lr = Fp && typeof Yt == "object" && Yt && !Yt.nodeType && Yt,
      ZC = Lr && Lr.exports === Fp,
      ta = ZC && QC.process,
      JC = (function () {
        try {
          var e = Lr && Lr.require && Lr.require("util").types;
          return e || (ta && ta.binding && ta.binding("util"));
        } catch {}
      })();
    Yt.exports = JC;
  });
  var Mn = s((aH, Up) => {
    var eN = xp(),
      tN = Dp(),
      Xp = Gp(),
      Vp = Xp && Xp.isTypedArray,
      rN = Vp ? tN(Vp) : eN;
    Up.exports = rN;
  });
  var ra = s((sH, Bp) => {
    var nN = Ip(),
      iN = Cr(),
      oN = he(),
      aN = Ln(),
      sN = Pn(),
      uN = Mn(),
      cN = Object.prototype,
      lN = cN.hasOwnProperty;
    function fN(e, t) {
      var r = oN(e),
        n = !r && iN(e),
        i = !r && !n && aN(e),
        o = !r && !n && !i && uN(e),
        a = r || n || i || o,
        u = a ? nN(e.length, String) : [],
        l = u.length;
      for (var f in e)
        (t || lN.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              sN(f, l))
          ) &&
          u.push(f);
      return u;
    }
    Bp.exports = fN;
  });
  var Dn = s((uH, Wp) => {
    var dN = Object.prototype;
    function pN(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || dN;
      return e === r;
    }
    Wp.exports = pN;
  });
  var jp = s((cH, Hp) => {
    var vN = So(),
      EN = vN(Object.keys, Object);
    Hp.exports = EN;
  });
  var Fn = s((lH, Kp) => {
    var hN = Dn(),
      _N = jp(),
      gN = Object.prototype,
      yN = gN.hasOwnProperty;
    function IN(e) {
      if (!hN(e)) return _N(e);
      var t = [];
      for (var r in Object(e)) yN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Kp.exports = IN;
  });
  var mt = s((fH, kp) => {
    var TN = Ko(),
      ON = xn();
    function mN(e) {
      return e != null && ON(e.length) && !TN(e);
    }
    kp.exports = mN;
  });
  var Pr = s((dH, zp) => {
    var SN = ra(),
      AN = Fn(),
      bN = mt();
    function RN(e) {
      return bN(e) ? SN(e) : AN(e);
    }
    zp.exports = RN;
  });
  var $p = s((pH, Yp) => {
    var wN = Zo(),
      CN = ea(),
      NN = Pr();
    function qN(e) {
      return wN(e, NN, CN);
    }
    Yp.exports = qN;
  });
  var Jp = s((vH, Zp) => {
    var Qp = $p(),
      LN = 1,
      PN = Object.prototype,
      xN = PN.hasOwnProperty;
    function MN(e, t, r, n, i, o) {
      var a = r & LN,
        u = Qp(e),
        l = u.length,
        f = Qp(t),
        v = f.length;
      if (l != v && !a) return !1;
      for (var d = l; d--; ) {
        var E = u[d];
        if (!(a ? E in t : xN.call(t, E))) return !1;
      }
      var T = o.get(e),
        b = o.get(t);
      if (T && b) return T == t && b == e;
      var S = !0;
      o.set(e, t), o.set(t, e);
      for (var q = a; ++d < l; ) {
        E = u[d];
        var O = e[E],
          A = t[E];
        if (n) var g = a ? n(A, O, E, t, e, o) : n(O, A, E, e, t, o);
        if (!(g === void 0 ? O === A || i(O, A, r, n, o) : g)) {
          S = !1;
          break;
        }
        q || (q = E == "constructor");
      }
      if (S && !q) {
        var C = e.constructor,
          R = t.constructor;
        C != R &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof C == "function" &&
            C instanceof C &&
            typeof R == "function" &&
            R instanceof R
          ) &&
          (S = !1);
      }
      return o.delete(e), o.delete(t), S;
    }
    Zp.exports = MN;
  });
  var tv = s((EH, ev) => {
    var DN = pt(),
      FN = Ve(),
      GN = DN(FN, "DataView");
    ev.exports = GN;
  });
  var nv = s((hH, rv) => {
    var XN = pt(),
      VN = Ve(),
      UN = XN(VN, "Promise");
    rv.exports = UN;
  });
  var ov = s((_H, iv) => {
    var BN = pt(),
      WN = Ve(),
      HN = BN(WN, "Set");
    iv.exports = HN;
  });
  var na = s((gH, av) => {
    var jN = pt(),
      KN = Ve(),
      kN = jN(KN, "WeakMap");
    av.exports = kN;
  });
  var Gn = s((yH, pv) => {
    var ia = tv(),
      oa = wn(),
      aa = nv(),
      sa = ov(),
      ua = na(),
      dv = dt(),
      $t = zo(),
      sv = "[object Map]",
      zN = "[object Object]",
      uv = "[object Promise]",
      cv = "[object Set]",
      lv = "[object WeakMap]",
      fv = "[object DataView]",
      YN = $t(ia),
      $N = $t(oa),
      QN = $t(aa),
      ZN = $t(sa),
      JN = $t(ua),
      St = dv;
    ((ia && St(new ia(new ArrayBuffer(1))) != fv) ||
      (oa && St(new oa()) != sv) ||
      (aa && St(aa.resolve()) != uv) ||
      (sa && St(new sa()) != cv) ||
      (ua && St(new ua()) != lv)) &&
      (St = function (e) {
        var t = dv(e),
          r = t == zN ? e.constructor : void 0,
          n = r ? $t(r) : "";
        if (n)
          switch (n) {
            case YN:
              return fv;
            case $N:
              return sv;
            case QN:
              return uv;
            case ZN:
              return cv;
            case JN:
              return lv;
          }
        return t;
      });
    pv.exports = St;
  });
  var Tv = s((IH, Iv) => {
    var ca = Yo(),
      eq = $o(),
      tq = lp(),
      rq = Jp(),
      vv = Gn(),
      Ev = he(),
      hv = Ln(),
      nq = Mn(),
      iq = 1,
      _v = "[object Arguments]",
      gv = "[object Array]",
      Xn = "[object Object]",
      oq = Object.prototype,
      yv = oq.hasOwnProperty;
    function aq(e, t, r, n, i, o) {
      var a = Ev(e),
        u = Ev(t),
        l = a ? gv : vv(e),
        f = u ? gv : vv(t);
      (l = l == _v ? Xn : l), (f = f == _v ? Xn : f);
      var v = l == Xn,
        d = f == Xn,
        E = l == f;
      if (E && hv(e)) {
        if (!hv(t)) return !1;
        (a = !0), (v = !1);
      }
      if (E && !v)
        return (
          o || (o = new ca()),
          a || nq(e) ? eq(e, t, r, n, i, o) : tq(e, t, l, r, n, i, o)
        );
      if (!(r & iq)) {
        var T = v && yv.call(e, "__wrapped__"),
          b = d && yv.call(t, "__wrapped__");
        if (T || b) {
          var S = T ? e.value() : e,
            q = b ? t.value() : t;
          return o || (o = new ca()), i(S, q, r, n, o);
        }
      }
      return E ? (o || (o = new ca()), rq(e, t, r, n, i, o)) : !1;
    }
    Iv.exports = aq;
  });
  var la = s((TH, Sv) => {
    var sq = Tv(),
      Ov = it();
    function mv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Ov(e) && !Ov(t))
        ? e !== e && t !== t
        : sq(e, t, r, n, mv, i);
    }
    Sv.exports = mv;
  });
  var bv = s((OH, Av) => {
    var uq = Yo(),
      cq = la(),
      lq = 1,
      fq = 2;
    function dq(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var u = r[i];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        u = r[i];
        var l = u[0],
          f = e[l],
          v = u[1];
        if (a && u[2]) {
          if (f === void 0 && !(l in e)) return !1;
        } else {
          var d = new uq();
          if (n) var E = n(f, v, l, e, t, d);
          if (!(E === void 0 ? cq(v, f, lq | fq, n, d) : E)) return !1;
        }
      }
      return !0;
    }
    Av.exports = dq;
  });
  var fa = s((mH, Rv) => {
    var pq = Qe();
    function vq(e) {
      return e === e && !pq(e);
    }
    Rv.exports = vq;
  });
  var Cv = s((SH, wv) => {
    var Eq = fa(),
      hq = Pr();
    function _q(e) {
      for (var t = hq(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, Eq(i)];
      }
      return t;
    }
    wv.exports = _q;
  });
  var da = s((AH, Nv) => {
    function gq(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Nv.exports = gq;
  });
  var Lv = s((bH, qv) => {
    var yq = bv(),
      Iq = Cv(),
      Tq = da();
    function Oq(e) {
      var t = Iq(e);
      return t.length == 1 && t[0][2]
        ? Tq(t[0][0], t[0][1])
        : function (r) {
            return r === e || yq(r, e, t);
          };
    }
    qv.exports = Oq;
  });
  var xr = s((RH, Pv) => {
    var mq = dt(),
      Sq = it(),
      Aq = "[object Symbol]";
    function bq(e) {
      return typeof e == "symbol" || (Sq(e) && mq(e) == Aq);
    }
    Pv.exports = bq;
  });
  var Vn = s((wH, xv) => {
    var Rq = he(),
      wq = xr(),
      Cq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Nq = /^\w*$/;
    function qq(e, t) {
      if (Rq(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        wq(e)
        ? !0
        : Nq.test(e) || !Cq.test(e) || (t != null && e in Object(t));
    }
    xv.exports = qq;
  });
  var Fv = s((CH, Dv) => {
    var Mv = Cn(),
      Lq = "Expected a function";
    function pa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(Lq);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (pa.Cache || Mv)()), r;
    }
    pa.Cache = Mv;
    Dv.exports = pa;
  });
  var Xv = s((NH, Gv) => {
    var Pq = Fv(),
      xq = 500;
    function Mq(e) {
      var t = Pq(e, function (n) {
          return r.size === xq && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Gv.exports = Mq;
  });
  var Uv = s((qH, Vv) => {
    var Dq = Xv(),
      Fq =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Gq = /\\(\\)?/g,
      Xq = Dq(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(Fq, function (r, n, i, o) {
            t.push(i ? o.replace(Gq, "$1") : n || r);
          }),
          t
        );
      });
    Vv.exports = Xq;
  });
  var va = s((LH, Bv) => {
    function Vq(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    Bv.exports = Vq;
  });
  var zv = s((PH, kv) => {
    var Wv = Xt(),
      Uq = va(),
      Bq = he(),
      Wq = xr(),
      Hq = 1 / 0,
      Hv = Wv ? Wv.prototype : void 0,
      jv = Hv ? Hv.toString : void 0;
    function Kv(e) {
      if (typeof e == "string") return e;
      if (Bq(e)) return Uq(e, Kv) + "";
      if (Wq(e)) return jv ? jv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -Hq ? "-0" : t;
    }
    kv.exports = Kv;
  });
  var $v = s((xH, Yv) => {
    var jq = zv();
    function Kq(e) {
      return e == null ? "" : jq(e);
    }
    Yv.exports = Kq;
  });
  var Mr = s((MH, Qv) => {
    var kq = he(),
      zq = Vn(),
      Yq = Uv(),
      $q = $v();
    function Qq(e, t) {
      return kq(e) ? e : zq(e, t) ? [e] : Yq($q(e));
    }
    Qv.exports = Qq;
  });
  var Qt = s((DH, Zv) => {
    var Zq = xr(),
      Jq = 1 / 0;
    function eL(e) {
      if (typeof e == "string" || Zq(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -Jq ? "-0" : t;
    }
    Zv.exports = eL;
  });
  var Un = s((FH, Jv) => {
    var tL = Mr(),
      rL = Qt();
    function nL(e, t) {
      t = tL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[rL(t[r++])];
      return r && r == n ? e : void 0;
    }
    Jv.exports = nL;
  });
  var Bn = s((GH, eE) => {
    var iL = Un();
    function oL(e, t, r) {
      var n = e == null ? void 0 : iL(e, t);
      return n === void 0 ? r : n;
    }
    eE.exports = oL;
  });
  var rE = s((XH, tE) => {
    function aL(e, t) {
      return e != null && t in Object(e);
    }
    tE.exports = aL;
  });
  var iE = s((VH, nE) => {
    var sL = Mr(),
      uL = Cr(),
      cL = he(),
      lL = Pn(),
      fL = xn(),
      dL = Qt();
    function pL(e, t, r) {
      t = sL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = dL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && fL(i) && lL(a, i) && (cL(e) || uL(e)));
    }
    nE.exports = pL;
  });
  var aE = s((UH, oE) => {
    var vL = rE(),
      EL = iE();
    function hL(e, t) {
      return e != null && EL(e, t, vL);
    }
    oE.exports = hL;
  });
  var uE = s((BH, sE) => {
    var _L = la(),
      gL = Bn(),
      yL = aE(),
      IL = Vn(),
      TL = fa(),
      OL = da(),
      mL = Qt(),
      SL = 1,
      AL = 2;
    function bL(e, t) {
      return IL(e) && TL(t)
        ? OL(mL(e), t)
        : function (r) {
            var n = gL(r, e);
            return n === void 0 && n === t ? yL(r, e) : _L(t, n, SL | AL);
          };
    }
    sE.exports = bL;
  });
  var Wn = s((WH, cE) => {
    function RL(e) {
      return e;
    }
    cE.exports = RL;
  });
  var Ea = s((HH, lE) => {
    function wL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    lE.exports = wL;
  });
  var dE = s((jH, fE) => {
    var CL = Un();
    function NL(e) {
      return function (t) {
        return CL(t, e);
      };
    }
    fE.exports = NL;
  });
  var vE = s((KH, pE) => {
    var qL = Ea(),
      LL = dE(),
      PL = Vn(),
      xL = Qt();
    function ML(e) {
      return PL(e) ? qL(xL(e)) : LL(e);
    }
    pE.exports = ML;
  });
  var vt = s((kH, EE) => {
    var DL = Lv(),
      FL = uE(),
      GL = Wn(),
      XL = he(),
      VL = vE();
    function UL(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? GL
        : typeof e == "object"
        ? XL(e)
          ? FL(e[0], e[1])
          : DL(e)
        : VL(e);
    }
    EE.exports = UL;
  });
  var ha = s((zH, hE) => {
    var BL = vt(),
      WL = mt(),
      HL = Pr();
    function jL(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!WL(t)) {
          var o = BL(r, 3);
          (t = HL(t)),
            (r = function (u) {
              return o(i[u], u, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    hE.exports = jL;
  });
  var _a = s((YH, _E) => {
    function KL(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    _E.exports = KL;
  });
  var yE = s(($H, gE) => {
    var kL = /\s/;
    function zL(e) {
      for (var t = e.length; t-- && kL.test(e.charAt(t)); );
      return t;
    }
    gE.exports = zL;
  });
  var TE = s((QH, IE) => {
    var YL = yE(),
      $L = /^\s+/;
    function QL(e) {
      return e && e.slice(0, YL(e) + 1).replace($L, "");
    }
    IE.exports = QL;
  });
  var Hn = s((ZH, SE) => {
    var ZL = TE(),
      OE = Qe(),
      JL = xr(),
      mE = 0 / 0,
      eP = /^[-+]0x[0-9a-f]+$/i,
      tP = /^0b[01]+$/i,
      rP = /^0o[0-7]+$/i,
      nP = parseInt;
    function iP(e) {
      if (typeof e == "number") return e;
      if (JL(e)) return mE;
      if (OE(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = OE(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = ZL(e);
      var r = tP.test(e);
      return r || rP.test(e) ? nP(e.slice(2), r ? 2 : 8) : eP.test(e) ? mE : +e;
    }
    SE.exports = iP;
  });
  var RE = s((JH, bE) => {
    var oP = Hn(),
      AE = 1 / 0,
      aP = 17976931348623157e292;
    function sP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = oP(e)), e === AE || e === -AE)) {
        var t = e < 0 ? -1 : 1;
        return t * aP;
      }
      return e === e ? e : 0;
    }
    bE.exports = sP;
  });
  var ga = s((ej, wE) => {
    var uP = RE();
    function cP(e) {
      var t = uP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    wE.exports = cP;
  });
  var NE = s((tj, CE) => {
    var lP = _a(),
      fP = vt(),
      dP = ga(),
      pP = Math.max;
    function vP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : dP(r);
      return i < 0 && (i = pP(n + i, 0)), lP(e, fP(t, 3), i);
    }
    CE.exports = vP;
  });
  var ya = s((rj, qE) => {
    var EP = ha(),
      hP = NE(),
      _P = EP(hP);
    qE.exports = _P;
  });
  var Kn = s((Oe) => {
    "use strict";
    var gP = ze().default;
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.withBrowser =
      Oe.TRANSFORM_STYLE_PREFIXED =
      Oe.TRANSFORM_PREFIXED =
      Oe.IS_BROWSER_ENV =
      Oe.FLEX_PREFIXED =
      Oe.ELEMENT_MATCHES =
        void 0;
    var yP = gP(ya()),
      PE = typeof window < "u";
    Oe.IS_BROWSER_ENV = PE;
    var jn = (e, t) => (PE ? e() : t);
    Oe.withBrowser = jn;
    var IP = jn(() =>
      (0, yP.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Oe.ELEMENT_MATCHES = IP;
    var TP = jn(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i];
          if (((e.style.display = o), e.style.display === o)) return o;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Oe.FLEX_PREFIXED = TP;
    var xE = jn(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i] + r;
          if (e.style[o] !== void 0) return o;
        }
      }
      return "transform";
    }, "transform");
    Oe.TRANSFORM_PREFIXED = xE;
    var LE = xE.split("transform")[0],
      OP = LE ? LE + "TransformStyle" : "transformStyle";
    Oe.TRANSFORM_STYLE_PREFIXED = OP;
  });
  var Ia = s((ij, XE) => {
    var mP = 4,
      SP = 0.001,
      AP = 1e-7,
      bP = 10,
      Dr = 11,
      kn = 1 / (Dr - 1),
      RP = typeof Float32Array == "function";
    function ME(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function DE(e, t) {
      return 3 * t - 6 * e;
    }
    function FE(e) {
      return 3 * e;
    }
    function zn(e, t, r) {
      return ((ME(t, r) * e + DE(t, r)) * e + FE(t)) * e;
    }
    function GE(e, t, r) {
      return 3 * ME(t, r) * e * e + 2 * DE(t, r) * e + FE(t);
    }
    function wP(e, t, r, n, i) {
      var o,
        a,
        u = 0;
      do
        (a = t + (r - t) / 2), (o = zn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > AP && ++u < bP);
      return a;
    }
    function CP(e, t, r, n) {
      for (var i = 0; i < mP; ++i) {
        var o = GE(t, r, n);
        if (o === 0) return t;
        var a = zn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    XE.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = RP ? new Float32Array(Dr) : new Array(Dr);
      if (t !== r || n !== i)
        for (var a = 0; a < Dr; ++a) o[a] = zn(a * kn, t, n);
      function u(l) {
        for (var f = 0, v = 1, d = Dr - 1; v !== d && o[v] <= l; ++v) f += kn;
        --v;
        var E = (l - o[v]) / (o[v + 1] - o[v]),
          T = f + E * kn,
          b = GE(T, t, n);
        return b >= SP ? CP(l, T, t, n) : b === 0 ? T : wP(l, f, f + kn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : zn(u(f), r, i);
      };
    };
  });
  var Ta = s((j) => {
    "use strict";
    var NP = ze().default;
    Object.defineProperty(j, "__esModule", { value: !0 });
    j.bounce = dx;
    j.bouncePast = px;
    j.easeOut = j.easeInOut = j.easeIn = j.ease = void 0;
    j.inBack = nx;
    j.inCirc = JP;
    j.inCubic = GP;
    j.inElastic = ax;
    j.inExpo = $P;
    j.inOutBack = ox;
    j.inOutCirc = tx;
    j.inOutCubic = VP;
    j.inOutElastic = ux;
    j.inOutExpo = ZP;
    j.inOutQuad = FP;
    j.inOutQuart = WP;
    j.inOutQuint = KP;
    j.inOutSine = YP;
    j.inQuad = MP;
    j.inQuart = UP;
    j.inQuint = HP;
    j.inSine = kP;
    j.outBack = ix;
    j.outBounce = rx;
    j.outCirc = ex;
    j.outCubic = XP;
    j.outElastic = sx;
    j.outExpo = QP;
    j.outQuad = DP;
    j.outQuart = BP;
    j.outQuint = jP;
    j.outSine = zP;
    j.swingFrom = lx;
    j.swingFromTo = cx;
    j.swingTo = fx;
    var Yn = NP(Ia()),
      at = 1.70158,
      qP = (0, Yn.default)(0.25, 0.1, 0.25, 1);
    j.ease = qP;
    var LP = (0, Yn.default)(0.42, 0, 1, 1);
    j.easeIn = LP;
    var PP = (0, Yn.default)(0, 0, 0.58, 1);
    j.easeOut = PP;
    var xP = (0, Yn.default)(0.42, 0, 0.58, 1);
    j.easeInOut = xP;
    function MP(e) {
      return Math.pow(e, 2);
    }
    function DP(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function FP(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function GP(e) {
      return Math.pow(e, 3);
    }
    function XP(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function VP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function UP(e) {
      return Math.pow(e, 4);
    }
    function BP(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function WP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function HP(e) {
      return Math.pow(e, 5);
    }
    function jP(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function KP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function kP(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function zP(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function YP(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function $P(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function QP(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function ZP(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function JP(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function ex(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function tx(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function rx(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function nx(e) {
      let t = at;
      return e * e * ((t + 1) * e - t);
    }
    function ix(e) {
      let t = at;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function ox(e) {
      let t = at;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function ax(e) {
      let t = at,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function sx(e) {
      let t = at,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function ux(e) {
      let t = at,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function cx(e) {
      let t = at;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function lx(e) {
      let t = at;
      return e * e * ((t + 1) * e - t);
    }
    function fx(e) {
      let t = at;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function dx(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function px(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var ma = s((Fr) => {
    "use strict";
    var vx = ze().default,
      Ex = Mt().default;
    Object.defineProperty(Fr, "__esModule", { value: !0 });
    Fr.applyEasing = gx;
    Fr.createBezierEasing = _x;
    Fr.optimizeFloat = Oa;
    var VE = Ex(Ta()),
      hx = vx(Ia());
    function Oa(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
    function _x(e) {
      return (0, hx.default)(...e);
    }
    function gx(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Oa(r ? (t > 0 ? r(t) : t) : t > 0 && e && VE[e] ? VE[e](t) : t);
    }
  });
  var HE = s((Zt) => {
    "use strict";
    Object.defineProperty(Zt, "__esModule", { value: !0 });
    Zt.createElementState = WE;
    Zt.ixElements = void 0;
    Zt.mergeActionState = Sa;
    var $n = Wt(),
      BE = Re(),
      {
        HTML_ELEMENT: sj,
        PLAIN_OBJECT: yx,
        ABSTRACT_NODE: uj,
        CONFIG_X_VALUE: Ix,
        CONFIG_Y_VALUE: Tx,
        CONFIG_Z_VALUE: Ox,
        CONFIG_VALUE: mx,
        CONFIG_X_UNIT: Sx,
        CONFIG_Y_UNIT: Ax,
        CONFIG_Z_UNIT: bx,
        CONFIG_UNIT: Rx,
      } = BE.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: wx,
        IX2_INSTANCE_ADDED: Cx,
        IX2_ELEMENT_STATE_CHANGED: Nx,
      } = BE.IX2EngineActionTypes,
      UE = {},
      qx = "refState",
      Lx = (e = UE, t = {}) => {
        switch (t.type) {
          case wx:
            return UE;
          case Cx: {
            let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: o,
                refType: a,
              } = t.payload,
              { actionTypeId: u } = o,
              l = e;
            return (
              (0, $n.getIn)(l, [r, n]) !== n && (l = WE(l, n, a, r, o)),
              Sa(l, r, u, i, o)
            );
          }
          case Nx: {
            let {
              elementId: r,
              actionTypeId: n,
              current: i,
              actionItem: o,
            } = t.payload;
            return Sa(e, r, n, i, o);
          }
          default:
            return e;
        }
      };
    Zt.ixElements = Lx;
    function WE(e, t, r, n, i) {
      let o =
        r === yx ? (0, $n.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, $n.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
    }
    function Sa(e, t, r, n, i) {
      let o = xx(i),
        a = [t, qx, r];
      return (0, $n.mergeIn)(e, a, n, o);
    }
    var Px = [
      [Ix, Sx],
      [Tx, Ax],
      [Ox, bx],
      [mx, Rx],
    ];
    function xx(e) {
      let { config: t } = e;
      return Px.reduce((r, n) => {
        let i = n[0],
          o = n[1],
          a = t[i],
          u = t[o];
        return a != null && u != null && (r[o] = u), r;
      }, {});
    }
  });
  var jE = s((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.renderPlugin =
      _e.getPluginOrigin =
      _e.getPluginDuration =
      _e.getPluginDestination =
      _e.getPluginConfig =
      _e.createPluginInstance =
      _e.clearPlugin =
        void 0;
    var Mx = (e) => e.value;
    _e.getPluginConfig = Mx;
    var Dx = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    _e.getPluginDuration = Dx;
    var Fx = (e) => e || { value: 0 };
    _e.getPluginOrigin = Fx;
    var Gx = (e) => ({ value: e.value });
    _e.getPluginDestination = Gx;
    var Xx = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    _e.createPluginInstance = Xx;
    var Vx = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    _e.renderPlugin = Vx;
    var Ux = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    _e.clearPlugin = Ux;
  });
  var Aa = s((ve) => {
    "use strict";
    Object.defineProperty(ve, "__esModule", { value: !0 });
    ve.getPluginOrigin =
      ve.getPluginDuration =
      ve.getPluginDestination =
      ve.getPluginConfig =
      ve.createPluginInstance =
      ve.clearPlugin =
        void 0;
    ve.isPluginType = Hx;
    ve.renderPlugin = void 0;
    var At = jE(),
      KE = Re(),
      Bx = Kn(),
      Wx = {
        [KE.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: At.getPluginConfig,
          getOrigin: At.getPluginOrigin,
          getDuration: At.getPluginDuration,
          getDestination: At.getPluginDestination,
          createInstance: At.createPluginInstance,
          render: At.renderPlugin,
          clear: At.clearPlugin,
        },
      };
    function Hx(e) {
      return e === KE.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var bt = (e) => (t) => {
        if (!Bx.IS_BROWSER_ENV) return () => null;
        let r = Wx[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      jx = bt("getConfig");
    ve.getPluginConfig = jx;
    var Kx = bt("getOrigin");
    ve.getPluginOrigin = Kx;
    var kx = bt("getDuration");
    ve.getPluginDuration = kx;
    var zx = bt("getDestination");
    ve.getPluginDestination = zx;
    var Yx = bt("createInstance");
    ve.createPluginInstance = Yx;
    var $x = bt("render");
    ve.renderPlugin = $x;
    var Qx = bt("clear");
    ve.clearPlugin = Qx;
  });
  var zE = s((dj, kE) => {
    function Zx(e, t) {
      return e == null || e !== e ? t : e;
    }
    kE.exports = Zx;
  });
  var $E = s((pj, YE) => {
    function Jx(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    YE.exports = Jx;
  });
  var ZE = s((vj, QE) => {
    function eM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), u = a.length; u--; ) {
          var l = a[e ? u : ++i];
          if (r(o[l], l, o) === !1) break;
        }
        return t;
      };
    }
    QE.exports = eM;
  });
  var eh = s((Ej, JE) => {
    var tM = ZE(),
      rM = tM();
    JE.exports = rM;
  });
  var ba = s((hj, th) => {
    var nM = eh(),
      iM = Pr();
    function oM(e, t) {
      return e && nM(e, t, iM);
    }
    th.exports = oM;
  });
  var nh = s((_j, rh) => {
    var aM = mt();
    function sM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!aM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    rh.exports = sM;
  });
  var Ra = s((gj, ih) => {
    var uM = ba(),
      cM = nh(),
      lM = cM(uM);
    ih.exports = lM;
  });
  var ah = s((yj, oh) => {
    function fM(e, t, r, n, i) {
      return (
        i(e, function (o, a, u) {
          r = n ? ((n = !1), o) : t(r, o, a, u);
        }),
        r
      );
    }
    oh.exports = fM;
  });
  var uh = s((Ij, sh) => {
    var dM = $E(),
      pM = Ra(),
      vM = vt(),
      EM = ah(),
      hM = he();
    function _M(e, t, r) {
      var n = hM(e) ? dM : EM,
        i = arguments.length < 3;
      return n(e, vM(t, 4), r, i, pM);
    }
    sh.exports = _M;
  });
  var lh = s((Tj, ch) => {
    var gM = _a(),
      yM = vt(),
      IM = ga(),
      TM = Math.max,
      OM = Math.min;
    function mM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = IM(r)), (i = r < 0 ? TM(n + i, 0) : OM(i, n - 1))),
        gM(e, yM(t, 3), i, !0)
      );
    }
    ch.exports = mM;
  });
  var dh = s((Oj, fh) => {
    var SM = ha(),
      AM = lh(),
      bM = SM(AM);
    fh.exports = bM;
  });
  var vh = s((Qn) => {
    "use strict";
    Object.defineProperty(Qn, "__esModule", { value: !0 });
    Qn.default = void 0;
    var RM = Object.prototype.hasOwnProperty;
    function ph(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function wM(e, t) {
      if (ph(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
        if (!RM.call(t, r[i]) || !ph(e[r[i]], t[r[i]])) return !1;
      return !0;
    }
    var CM = wM;
    Qn.default = CM;
  });
  var Mh = s((re) => {
    "use strict";
    var ei = ze().default;
    Object.defineProperty(re, "__esModule", { value: !0 });
    re.cleanupHTMLElement = bD;
    re.clearAllStyles = AD;
    re.getActionListProgress = wD;
    re.getAffectedElements = Pa;
    re.getComputedStyle = eD;
    re.getDestinationValues = sD;
    re.getElementId = $M;
    re.getInstanceId = zM;
    re.getInstanceOrigin = nD;
    re.getItemConfigByKey = void 0;
    re.getMaxDurationItemIndex = xh;
    re.getNamespacedParameterId = qD;
    re.getRenderType = qh;
    re.getStyleProp = uD;
    re.mediaQueriesEqual = PD;
    re.observeStore = JM;
    re.reduceListToGroup = CD;
    re.reifyState = QM;
    re.renderHTMLElement = cD;
    Object.defineProperty(re, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return Sh.default;
      },
    });
    re.shouldAllowMediaQuery = LD;
    re.shouldNamespaceEventParameter = ND;
    re.stringifyTarget = xD;
    var Et = ei(zE()),
      Ca = ei(uh()),
      wa = ei(dh()),
      Eh = Wt(),
      Rt = Re(),
      Sh = ei(vh()),
      NM = ma(),
      et = Aa(),
      me = Kn(),
      {
        BACKGROUND: qM,
        TRANSFORM: LM,
        TRANSLATE_3D: PM,
        SCALE_3D: xM,
        ROTATE_X: MM,
        ROTATE_Y: DM,
        ROTATE_Z: FM,
        SKEW: GM,
        PRESERVE_3D: XM,
        FLEX: VM,
        OPACITY: Zn,
        FILTER: Gr,
        FONT_VARIATION_SETTINGS: Xr,
        WIDTH: Ze,
        HEIGHT: Je,
        BACKGROUND_COLOR: Ah,
        BORDER_COLOR: UM,
        COLOR: BM,
        CHILDREN: hh,
        IMMEDIATE_CHILDREN: WM,
        SIBLINGS: _h,
        PARENT: HM,
        DISPLAY: Jn,
        WILL_CHANGE: Jt,
        AUTO: ht,
        COMMA_DELIMITER: Vr,
        COLON_DELIMITER: jM,
        BAR_DELIMITER: gh,
        RENDER_TRANSFORM: bh,
        RENDER_GENERAL: Na,
        RENDER_STYLE: qa,
        RENDER_PLUGIN: Rh,
      } = Rt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: er,
        TRANSFORM_SCALE: tr,
        TRANSFORM_ROTATE: rr,
        TRANSFORM_SKEW: Ur,
        STYLE_OPACITY: wh,
        STYLE_FILTER: Br,
        STYLE_FONT_VARIATION: Wr,
        STYLE_SIZE: nr,
        STYLE_BACKGROUND_COLOR: ir,
        STYLE_BORDER: or,
        STYLE_TEXT_COLOR: ar,
        GENERAL_DISPLAY: ti,
      } = Rt.ActionTypeConsts,
      KM = "OBJECT_VALUE",
      Ch = (e) => e.trim(),
      La = Object.freeze({ [ir]: Ah, [or]: UM, [ar]: BM }),
      Nh = Object.freeze({
        [me.TRANSFORM_PREFIXED]: LM,
        [Ah]: qM,
        [Zn]: Zn,
        [Gr]: Gr,
        [Ze]: Ze,
        [Je]: Je,
        [Xr]: Xr,
      }),
      yh = {},
      kM = 1;
    function zM() {
      return "i" + kM++;
    }
    var YM = 1;
    function $M(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + YM++;
    }
    function QM({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Ca.default)(
          e,
          (a, u) => {
            let { eventTypeId: l } = u;
            return a[l] || (a[l] = {}), (a[l][u.id] = u), a;
          },
          {}
        ),
        i = r && r.mediaQueries,
        o = [];
      return (
        i
          ? (o = i.map((a) => a.key))
          : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: i,
            mediaQueryKeys: o,
          },
        }
      );
    }
    var ZM = (e, t) => e === t;
    function JM({ store: e, select: t, onChange: r, comparator: n = ZM }) {
      let { getState: i, subscribe: o } = e,
        a = o(l),
        u = t(i());
      function l() {
        let f = t(i());
        if (f == null) {
          a();
          return;
        }
        n(f, u) || ((u = f), r(u, e));
      }
      return a;
    }
    function Ih(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: u,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: u,
        };
      }
      return {};
    }
    function Pa({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i,
    }) {
      var o, a, u;
      if (!i) throw new Error("IX2 missing elementApi");
      let { targets: l } = e;
      if (Array.isArray(l) && l.length > 0)
        return l.reduce(
          (x, D) =>
            x.concat(
              Pa({
                config: { target: D },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i,
              })
            ),
          []
        );
      let {
          getValidDocument: f,
          getQuerySelector: v,
          queryDocument: d,
          getChildElements: E,
          getSiblingElements: T,
          matchSelector: b,
          elementContains: S,
          isSiblingNode: q,
        } = i,
        { target: O } = e;
      if (!O) return [];
      let {
        id: A,
        objectId: g,
        selector: C,
        selectorGuids: R,
        appliesTo: N,
        useEventTarget: M,
      } = Ih(O);
      if (g) return [yh[g] || (yh[g] = {})];
      if (N === Rt.EventAppliesTo.PAGE) {
        let x = f(A);
        return x ? [x] : [];
      }
      let X =
          ((o =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (u = a.config) === null ||
            u === void 0
              ? void 0
              : u.affectedElements) !== null && o !== void 0
            ? o
            : {})[A || C] || {},
        Q = !!(X.id || X.selector),
        W,
        P,
        _,
        L = t && v(Ih(t.target));
      if (
        (Q
          ? ((W = X.limitAffectedElements), (P = L), (_ = v(X)))
          : (P = _ = v({ id: A, selector: C, selectorGuids: R })),
        t && M)
      ) {
        let x = r && (_ || M === !0) ? [r] : d(L);
        if (_) {
          if (M === HM) return d(_).filter((D) => x.some((B) => S(D, B)));
          if (M === hh) return d(_).filter((D) => x.some((B) => S(B, D)));
          if (M === _h) return d(_).filter((D) => x.some((B) => q(B, D)));
        }
        return x;
      }
      return P == null || _ == null
        ? []
        : me.IS_BROWSER_ENV && n
        ? d(_).filter((x) => n.contains(x))
        : W === hh
        ? d(P, _)
        : W === WM
        ? E(d(P)).filter(b(_))
        : W === _h
        ? T(d(P)).filter(b(_))
        : d(_);
    }
    function eD({ element: e, actionItem: t }) {
      if (!me.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case nr:
        case ir:
        case or:
        case ar:
        case ti:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Th = /px/,
      tD = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = lD[n.type]), r),
          e || {}
        ),
      rD = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = fD[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function nD(e, t = {}, r = {}, n, i) {
      let { getStyle: o } = i,
        { actionTypeId: a } = n;
      if ((0, et.isPluginType)(a)) return (0, et.getPluginOrigin)(a)(t[a]);
      switch (n.actionTypeId) {
        case er:
        case tr:
        case rr:
        case Ur:
          return t[n.actionTypeId] || xa[n.actionTypeId];
        case Br:
          return tD(t[n.actionTypeId], n.config.filters);
        case Wr:
          return rD(t[n.actionTypeId], n.config.fontVariations);
        case wh:
          return { value: (0, Et.default)(parseFloat(o(e, Zn)), 1) };
        case nr: {
          let u = o(e, Ze),
            l = o(e, Je),
            f,
            v;
          return (
            n.config.widthUnit === ht
              ? (f = Th.test(u) ? parseFloat(u) : parseFloat(r.width))
              : (f = (0, Et.default)(parseFloat(u), parseFloat(r.width))),
            n.config.heightUnit === ht
              ? (v = Th.test(l) ? parseFloat(l) : parseFloat(r.height))
              : (v = (0, Et.default)(parseFloat(l), parseFloat(r.height))),
            { widthValue: f, heightValue: v }
          );
        }
        case ir:
        case or:
        case ar:
          return OD({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: o,
          });
        case ti:
          return { value: (0, Et.default)(o(e, Jn), r.display) };
        case KM:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var iD = (e, t) => (t && (e[t.type] = t.value || 0), e),
      oD = (e, t) => (t && (e[t.type] = t.value || 0), e),
      aD = (e, t, r) => {
        if ((0, et.isPluginType)(e)) return (0, et.getPluginConfig)(e)(r, t);
        switch (e) {
          case Br: {
            let n = (0, wa.default)(r.filters, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          case Wr: {
            let n = (0, wa.default)(r.fontVariations, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    re.getItemConfigByKey = aD;
    function sD({ element: e, actionItem: t, elementApi: r }) {
      if ((0, et.isPluginType)(t.actionTypeId))
        return (0, et.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case er:
        case tr:
        case rr:
        case Ur: {
          let { xValue: n, yValue: i, zValue: o } = t.config;
          return { xValue: n, yValue: i, zValue: o };
        }
        case nr: {
          let { getStyle: n, setStyle: i, getProperty: o } = r,
            { widthUnit: a, heightUnit: u } = t.config,
            { widthValue: l, heightValue: f } = t.config;
          if (!me.IS_BROWSER_ENV) return { widthValue: l, heightValue: f };
          if (a === ht) {
            let v = n(e, Ze);
            i(e, Ze, ""), (l = o(e, "offsetWidth")), i(e, Ze, v);
          }
          if (u === ht) {
            let v = n(e, Je);
            i(e, Je, ""), (f = o(e, "offsetHeight")), i(e, Je, v);
          }
          return { widthValue: l, heightValue: f };
        }
        case ir:
        case or:
        case ar: {
          let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
          return { rValue: n, gValue: i, bValue: o, aValue: a };
        }
        case Br:
          return t.config.filters.reduce(iD, {});
        case Wr:
          return t.config.fontVariations.reduce(oD, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function qh(e) {
      if (/^TRANSFORM_/.test(e)) return bh;
      if (/^STYLE_/.test(e)) return qa;
      if (/^GENERAL_/.test(e)) return Na;
      if (/^PLUGIN_/.test(e)) return Rh;
    }
    function uD(e, t) {
      return e === qa ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function cD(e, t, r, n, i, o, a, u, l) {
      switch (u) {
        case bh:
          return vD(e, t, r, i, a);
        case qa:
          return mD(e, t, r, i, o, a);
        case Na:
          return SD(e, i, a);
        case Rh: {
          let { actionTypeId: f } = i;
          if ((0, et.isPluginType)(f)) return (0, et.renderPlugin)(f)(l, t, i);
        }
      }
    }
    var xa = {
        [er]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [tr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [rr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Ur]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      lD = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      fD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      dD = (e, t) => {
        let r = (0, wa.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      pD = Object.keys(xa);
    function vD(e, t, r, n, i) {
      let o = pD
          .map((u) => {
            let l = xa[u],
              {
                xValue: f = l.xValue,
                yValue: v = l.yValue,
                zValue: d = l.zValue,
                xUnit: E = "",
                yUnit: T = "",
                zUnit: b = "",
              } = t[u] || {};
            switch (u) {
              case er:
                return `${PM}(${f}${E}, ${v}${T}, ${d}${b})`;
              case tr:
                return `${xM}(${f}${E}, ${v}${T}, ${d}${b})`;
              case rr:
                return `${MM}(${f}${E}) ${DM}(${v}${T}) ${FM}(${d}${b})`;
              case Ur:
                return `${GM}(${f}${E}, ${v}${T})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: a } = i;
      wt(e, me.TRANSFORM_PREFIXED, i),
        a(e, me.TRANSFORM_PREFIXED, o),
        _D(n, r) && a(e, me.TRANSFORM_STYLE_PREFIXED, XM);
    }
    function ED(e, t, r, n) {
      let i = (0, Ca.default)(t, (a, u, l) => `${a} ${l}(${u}${dD(l, r)})`, ""),
        { setStyle: o } = n;
      wt(e, Gr, n), o(e, Gr, i);
    }
    function hD(e, t, r, n) {
      let i = (0, Ca.default)(
          t,
          (a, u, l) => (a.push(`"${l}" ${u}`), a),
          []
        ).join(", "),
        { setStyle: o } = n;
      wt(e, Xr, n), o(e, Xr, i);
    }
    function _D({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === er && n !== void 0) ||
        (e === tr && n !== void 0) ||
        (e === rr && (t !== void 0 || r !== void 0))
      );
    }
    var gD = "\\(([^)]+)\\)",
      yD = /^rgb/,
      ID = RegExp(`rgba?${gD}`);
    function TD(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function OD({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let i = La[t],
        o = n(e, i),
        a = yD.test(o) ? o : r[i],
        u = TD(ID, a).split(Vr);
      return {
        rValue: (0, Et.default)(parseInt(u[0], 10), 255),
        gValue: (0, Et.default)(parseInt(u[1], 10), 255),
        bValue: (0, Et.default)(parseInt(u[2], 10), 255),
        aValue: (0, Et.default)(parseFloat(u[3]), 1),
      };
    }
    function mD(e, t, r, n, i, o) {
      let { setStyle: a } = o;
      switch (n.actionTypeId) {
        case nr: {
          let { widthUnit: u = "", heightUnit: l = "" } = n.config,
            { widthValue: f, heightValue: v } = r;
          f !== void 0 &&
            (u === ht && (u = "px"), wt(e, Ze, o), a(e, Ze, f + u)),
            v !== void 0 &&
              (l === ht && (l = "px"), wt(e, Je, o), a(e, Je, v + l));
          break;
        }
        case Br: {
          ED(e, r, n.config, o);
          break;
        }
        case Wr: {
          hD(e, r, n.config, o);
          break;
        }
        case ir:
        case or:
        case ar: {
          let u = La[n.actionTypeId],
            l = Math.round(r.rValue),
            f = Math.round(r.gValue),
            v = Math.round(r.bValue),
            d = r.aValue;
          wt(e, u, o),
            a(
              e,
              u,
              d >= 1 ? `rgb(${l},${f},${v})` : `rgba(${l},${f},${v},${d})`
            );
          break;
        }
        default: {
          let { unit: u = "" } = n.config;
          wt(e, i, o), a(e, i, r.value + u);
          break;
        }
      }
    }
    function SD(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case ti: {
          let { value: i } = t.config;
          i === VM && me.IS_BROWSER_ENV
            ? n(e, Jn, me.FLEX_PREFIXED)
            : n(e, Jn, i);
          return;
        }
      }
    }
    function wt(e, t, r) {
      if (!me.IS_BROWSER_ENV) return;
      let n = Nh[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, Jt);
      if (!a) {
        o(e, Jt, n);
        return;
      }
      let u = a.split(Vr).map(Ch);
      u.indexOf(n) === -1 && o(e, Jt, u.concat(n).join(Vr));
    }
    function Lh(e, t, r) {
      if (!me.IS_BROWSER_ENV) return;
      let n = Nh[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, Jt);
      !a ||
        a.indexOf(n) === -1 ||
        o(
          e,
          Jt,
          a
            .split(Vr)
            .map(Ch)
            .filter((u) => u !== n)
            .join(Vr)
        );
    }
    function AD({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: i = {} } = r;
      Object.keys(n).forEach((o) => {
        let a = n[o],
          { config: u } = a.action,
          { actionListId: l } = u,
          f = i[l];
        f && Oh({ actionList: f, event: a, elementApi: t });
      }),
        Object.keys(i).forEach((o) => {
          Oh({ actionList: i[o], elementApi: t });
        });
    }
    function Oh({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e;
      n &&
        n.forEach((o) => {
          mh({ actionGroup: o, event: t, elementApi: r });
        }),
        i &&
          i.forEach((o) => {
            let { continuousActionGroups: a } = o;
            a.forEach((u) => {
              mh({ actionGroup: u, event: t, elementApi: r });
            });
          });
    }
    function mh({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: i, config: o }) => {
        let a;
        (0, et.isPluginType)(i)
          ? (a = (0, et.clearPlugin)(i))
          : (a = Ph({ effect: RD, actionTypeId: i, elementApi: r })),
          Pa({ config: o, event: t, elementApi: r }).forEach(a);
      });
    }
    function bD(e, t, r) {
      let { setStyle: n, getStyle: i } = r,
        { actionTypeId: o } = t;
      if (o === nr) {
        let { config: a } = t;
        a.widthUnit === ht && n(e, Ze, ""), a.heightUnit === ht && n(e, Je, "");
      }
      i(e, Jt) && Ph({ effect: Lh, actionTypeId: o, elementApi: r })(e);
    }
    var Ph =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case er:
          case tr:
          case rr:
          case Ur:
            e(n, me.TRANSFORM_PREFIXED, r);
            break;
          case Br:
            e(n, Gr, r);
            break;
          case Wr:
            e(n, Xr, r);
            break;
          case wh:
            e(n, Zn, r);
            break;
          case nr:
            e(n, Ze, r), e(n, Je, r);
            break;
          case ir:
          case or:
          case ar:
            e(n, La[t], r);
            break;
          case ti:
            e(n, Jn, r);
            break;
        }
      };
    function RD(e, t, r) {
      let { setStyle: n } = r;
      Lh(e, t, r),
        n(e, t, ""),
        t === me.TRANSFORM_PREFIXED && n(e, me.TRANSFORM_STYLE_PREFIXED, "");
    }
    function xh(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, i) => {
          let { config: o } = n,
            a = o.delay + o.duration;
          a >= t && ((t = a), (r = i));
        }),
        r
      );
    }
    function wD(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: i, verboseTimeElapsed: o = 0 } = t,
        a = 0,
        u = 0;
      return (
        r.forEach((l, f) => {
          if (n && f === 0) return;
          let { actionItems: v } = l,
            d = v[xh(v)],
            { config: E, actionTypeId: T } = d;
          i.id === d.id && (u = a + o);
          let b = qh(T) === Na ? 0 : E.duration;
          a += E.delay + b;
        }),
        a > 0 ? (0, NM.optimizeFloat)(u / a) : 0
      );
    }
    function CD({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e,
        o = [],
        a = (u) => (
          o.push((0, Eh.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
          u.id === t
        );
      return (
        n && n.some(({ actionItems: u }) => u.some(a)),
        i &&
          i.some((u) => {
            let { continuousActionGroups: l } = u;
            return l.some(({ actionItems: f }) => f.some(a));
          }),
        (0, Eh.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
        })
      );
    }
    function ND(e, { basedOn: t }) {
      return (
        (e === Rt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Rt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Rt.EventTypeConsts.MOUSE_MOVE && t === Rt.EventBasedOn.ELEMENT)
      );
    }
    function qD(e, t) {
      return e + jM + t;
    }
    function LD(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function PD(e, t) {
      return (0, Sh.default)(e && e.sort(), t && t.sort());
    }
    function xD(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + gh + r + gh + n;
    }
  });
  var Ct = s((Se) => {
    "use strict";
    var sr = Mt().default;
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.IX2VanillaUtils =
      Se.IX2VanillaPlugins =
      Se.IX2ElementsReducer =
      Se.IX2Easings =
      Se.IX2EasingUtils =
      Se.IX2BrowserSupport =
        void 0;
    var MD = sr(Kn());
    Se.IX2BrowserSupport = MD;
    var DD = sr(Ta());
    Se.IX2Easings = DD;
    var FD = sr(ma());
    Se.IX2EasingUtils = FD;
    var GD = sr(HE());
    Se.IX2ElementsReducer = GD;
    var XD = sr(Aa());
    Se.IX2VanillaPlugins = XD;
    var VD = sr(Mh());
    Se.IX2VanillaUtils = VD;
  });
  var Xh = s((ni) => {
    "use strict";
    Object.defineProperty(ni, "__esModule", { value: !0 });
    ni.ixInstances = void 0;
    var Dh = Re(),
      Fh = Ct(),
      ur = Wt(),
      {
        IX2_RAW_DATA_IMPORTED: UD,
        IX2_SESSION_STOPPED: BD,
        IX2_INSTANCE_ADDED: WD,
        IX2_INSTANCE_STARTED: HD,
        IX2_INSTANCE_REMOVED: jD,
        IX2_ANIMATION_FRAME_CHANGED: KD,
      } = Dh.IX2EngineActionTypes,
      {
        optimizeFloat: ri,
        applyEasing: Gh,
        createBezierEasing: kD,
      } = Fh.IX2EasingUtils,
      { RENDER_GENERAL: zD } = Dh.IX2EngineConstants,
      {
        getItemConfigByKey: Ma,
        getRenderType: YD,
        getStyleProp: $D,
      } = Fh.IX2VanillaUtils,
      QD = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: u,
            actionTypeId: l,
            customEasingFn: f,
            skipMotion: v,
            skipToValue: d,
          } = e,
          { parameters: E } = t.payload,
          T = Math.max(1 - a, 0.01),
          b = E[n];
        b == null && ((T = 1), (b = u));
        let S = Math.max(b, 0) || 0,
          q = ri(S - r),
          O = v ? d : ri(r + q * T),
          A = O * 100;
        if (O === r && e.current) return e;
        let g, C, R, N;
        for (let G = 0, { length: X } = i; G < X; G++) {
          let { keyframe: Q, actionItems: W } = i[G];
          if ((G === 0 && (g = W[0]), A >= Q)) {
            g = W[0];
            let P = i[G + 1],
              _ = P && A !== Q;
            (C = _ ? P.actionItems[0] : null),
              _ && ((R = Q / 100), (N = (P.keyframe - Q) / 100));
          }
        }
        let M = {};
        if (g && !C)
          for (let G = 0, { length: X } = o; G < X; G++) {
            let Q = o[G];
            M[Q] = Ma(l, Q, g.config);
          }
        else if (g && C && R !== void 0 && N !== void 0) {
          let G = (O - R) / N,
            X = g.config.easing,
            Q = Gh(X, G, f);
          for (let W = 0, { length: P } = o; W < P; W++) {
            let _ = o[W],
              L = Ma(l, _, g.config),
              B = (Ma(l, _, C.config) - L) * Q + L;
            M[_] = B;
          }
        }
        return (0, ur.merge)(e, { position: O, current: M });
      },
      ZD = (e, t) => {
        let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: u,
            actionItem: l,
            destination: f,
            destinationKeys: v,
            pluginDuration: d,
            instanceDelay: E,
            customEasingFn: T,
            skipMotion: b,
          } = e,
          S = l.config.easing,
          { duration: q, delay: O } = l.config;
        d != null && (q = d),
          (O = E ?? O),
          a === zD ? (q = 0) : (o || b) && (q = O = 0);
        let { now: A } = t.payload;
        if (r && n) {
          let g = A - (i + O);
          if (u) {
            let G = A - i,
              X = q + O,
              Q = ri(Math.min(Math.max(0, G / X), 1));
            e = (0, ur.set)(e, "verboseTimeElapsed", X * Q);
          }
          if (g < 0) return e;
          let C = ri(Math.min(Math.max(0, g / q), 1)),
            R = Gh(S, C, T),
            N = {},
            M = null;
          return (
            v.length &&
              (M = v.reduce((G, X) => {
                let Q = f[X],
                  W = parseFloat(n[X]) || 0,
                  _ = (parseFloat(Q) - W) * R + W;
                return (G[X] = _), G;
              }, {})),
            (N.current = M),
            (N.position = C),
            C === 1 && ((N.active = !1), (N.complete = !0)),
            (0, ur.merge)(e, N)
          );
        }
        return e;
      },
      JD = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case UD:
            return t.payload.ixInstances || Object.freeze({});
          case BD:
            return Object.freeze({});
          case WD: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: a,
                eventStateKey: u,
                actionListId: l,
                groupIndex: f,
                isCarrier: v,
                origin: d,
                destination: E,
                immediate: T,
                verbose: b,
                continuous: S,
                parameterId: q,
                actionGroups: O,
                smoothing: A,
                restingValue: g,
                pluginInstance: C,
                pluginDuration: R,
                instanceDelay: N,
                skipMotion: M,
                skipToValue: G,
              } = t.payload,
              { actionTypeId: X } = i,
              Q = YD(X),
              W = $D(Q, X),
              P = Object.keys(E).filter((L) => E[L] != null),
              { easing: _ } = i.config;
            return (0, ur.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: d,
              destination: E,
              destinationKeys: P,
              immediate: T,
              verbose: b,
              current: null,
              actionItem: i,
              actionTypeId: X,
              eventId: o,
              eventTarget: a,
              eventStateKey: u,
              actionListId: l,
              groupIndex: f,
              renderType: Q,
              isCarrier: v,
              styleProp: W,
              continuous: S,
              parameterId: q,
              actionGroups: O,
              smoothing: A,
              restingValue: g,
              pluginInstance: C,
              pluginDuration: R,
              instanceDelay: N,
              skipMotion: M,
              skipToValue: G,
              customEasingFn:
                Array.isArray(_) && _.length === 4 ? kD(_) : void 0,
            });
          }
          case HD: {
            let { instanceId: r, time: n } = t.payload;
            return (0, ur.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case jD: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              i = Object.keys(e),
              { length: o } = i;
            for (let a = 0; a < o; a++) {
              let u = i[a];
              u !== r && (n[u] = e[u]);
            }
            return n;
          }
          case KD: {
            let r = e,
              n = Object.keys(e),
              { length: i } = n;
            for (let o = 0; o < i; o++) {
              let a = n[o],
                u = e[a],
                l = u.continuous ? QD : ZD;
              r = (0, ur.set)(r, a, l(u, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    ni.ixInstances = JD;
  });
  var Vh = s((ii) => {
    "use strict";
    Object.defineProperty(ii, "__esModule", { value: !0 });
    ii.ixParameters = void 0;
    var e2 = Re(),
      {
        IX2_RAW_DATA_IMPORTED: t2,
        IX2_SESSION_STOPPED: r2,
        IX2_PARAMETER_CHANGED: n2,
      } = e2.IX2EngineActionTypes,
      i2 = (e = {}, t) => {
        switch (t.type) {
          case t2:
            return t.payload.ixParameters || {};
          case r2:
            return {};
          case n2: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    ii.ixParameters = i2;
  });
  var Uh = s((oi) => {
    "use strict";
    Object.defineProperty(oi, "__esModule", { value: !0 });
    oi.default = void 0;
    var o2 = Go(),
      a2 = uf(),
      s2 = Rf(),
      u2 = Cf(),
      c2 = Ct(),
      l2 = Xh(),
      f2 = Vh(),
      { ixElements: d2 } = c2.IX2ElementsReducer,
      p2 = (0, o2.combineReducers)({
        ixData: a2.ixData,
        ixRequest: s2.ixRequest,
        ixSession: u2.ixSession,
        ixElements: d2,
        ixInstances: l2.ixInstances,
        ixParameters: f2.ixParameters,
      });
    oi.default = p2;
  });
  var Bh = s((Cj, Hr) => {
    function v2(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        i,
        o;
      for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
      return r;
    }
    (Hr.exports = v2),
      (Hr.exports.__esModule = !0),
      (Hr.exports.default = Hr.exports);
  });
  var Hh = s((Nj, Wh) => {
    var E2 = dt(),
      h2 = he(),
      _2 = it(),
      g2 = "[object String]";
    function y2(e) {
      return typeof e == "string" || (!h2(e) && _2(e) && E2(e) == g2);
    }
    Wh.exports = y2;
  });
  var Kh = s((qj, jh) => {
    var I2 = Ea(),
      T2 = I2("length");
    jh.exports = T2;
  });
  var zh = s((Lj, kh) => {
    var O2 = "\\ud800-\\udfff",
      m2 = "\\u0300-\\u036f",
      S2 = "\\ufe20-\\ufe2f",
      A2 = "\\u20d0-\\u20ff",
      b2 = m2 + S2 + A2,
      R2 = "\\ufe0e\\ufe0f",
      w2 = "\\u200d",
      C2 = RegExp("[" + w2 + O2 + b2 + R2 + "]");
    function N2(e) {
      return C2.test(e);
    }
    kh.exports = N2;
  });
  var n_ = s((Pj, r_) => {
    var $h = "\\ud800-\\udfff",
      q2 = "\\u0300-\\u036f",
      L2 = "\\ufe20-\\ufe2f",
      P2 = "\\u20d0-\\u20ff",
      x2 = q2 + L2 + P2,
      M2 = "\\ufe0e\\ufe0f",
      D2 = "[" + $h + "]",
      Da = "[" + x2 + "]",
      Fa = "\\ud83c[\\udffb-\\udfff]",
      F2 = "(?:" + Da + "|" + Fa + ")",
      Qh = "[^" + $h + "]",
      Zh = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Jh = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      G2 = "\\u200d",
      e_ = F2 + "?",
      t_ = "[" + M2 + "]?",
      X2 = "(?:" + G2 + "(?:" + [Qh, Zh, Jh].join("|") + ")" + t_ + e_ + ")*",
      V2 = t_ + e_ + X2,
      U2 = "(?:" + [Qh + Da + "?", Da, Zh, Jh, D2].join("|") + ")",
      Yh = RegExp(Fa + "(?=" + Fa + ")|" + U2 + V2, "g");
    function B2(e) {
      for (var t = (Yh.lastIndex = 0); Yh.test(e); ) ++t;
      return t;
    }
    r_.exports = B2;
  });
  var o_ = s((xj, i_) => {
    var W2 = Kh(),
      H2 = zh(),
      j2 = n_();
    function K2(e) {
      return H2(e) ? j2(e) : W2(e);
    }
    i_.exports = K2;
  });
  var s_ = s((Mj, a_) => {
    var k2 = Fn(),
      z2 = Gn(),
      Y2 = mt(),
      $2 = Hh(),
      Q2 = o_(),
      Z2 = "[object Map]",
      J2 = "[object Set]";
    function eF(e) {
      if (e == null) return 0;
      if (Y2(e)) return $2(e) ? Q2(e) : e.length;
      var t = z2(e);
      return t == Z2 || t == J2 ? e.size : k2(e).length;
    }
    a_.exports = eF;
  });
  var c_ = s((Dj, u_) => {
    var tF = "Expected a function";
    function rF(e) {
      if (typeof e != "function") throw new TypeError(tF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    u_.exports = rF;
  });
  var Ga = s((Fj, l_) => {
    var nF = pt(),
      iF = (function () {
        try {
          var e = nF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    l_.exports = iF;
  });
  var Xa = s((Gj, d_) => {
    var f_ = Ga();
    function oF(e, t, r) {
      t == "__proto__" && f_
        ? f_(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    d_.exports = oF;
  });
  var v_ = s((Xj, p_) => {
    var aF = Xa(),
      sF = Rn(),
      uF = Object.prototype,
      cF = uF.hasOwnProperty;
    function lF(e, t, r) {
      var n = e[t];
      (!(cF.call(e, t) && sF(n, r)) || (r === void 0 && !(t in e))) &&
        aF(e, t, r);
    }
    p_.exports = lF;
  });
  var __ = s((Vj, h_) => {
    var fF = v_(),
      dF = Mr(),
      pF = Pn(),
      E_ = Qe(),
      vF = Qt();
    function EF(e, t, r, n) {
      if (!E_(e)) return e;
      t = dF(t, e);
      for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o; ) {
        var l = vF(t[i]),
          f = r;
        if (l === "__proto__" || l === "constructor" || l === "prototype")
          return e;
        if (i != a) {
          var v = u[l];
          (f = n ? n(v, l, u) : void 0),
            f === void 0 && (f = E_(v) ? v : pF(t[i + 1]) ? [] : {});
        }
        fF(u, l, f), (u = u[l]);
      }
      return e;
    }
    h_.exports = EF;
  });
  var y_ = s((Uj, g_) => {
    var hF = Un(),
      _F = __(),
      gF = Mr();
    function yF(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          u = hF(e, a);
        r(u, a) && _F(o, gF(a, e), u);
      }
      return o;
    }
    g_.exports = yF;
  });
  var T_ = s((Bj, I_) => {
    var IF = qn(),
      TF = Ao(),
      OF = ea(),
      mF = Jo(),
      SF = Object.getOwnPropertySymbols,
      AF = SF
        ? function (e) {
            for (var t = []; e; ) IF(t, OF(e)), (e = TF(e));
            return t;
          }
        : mF;
    I_.exports = AF;
  });
  var m_ = s((Wj, O_) => {
    function bF(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    O_.exports = bF;
  });
  var A_ = s((Hj, S_) => {
    var RF = Qe(),
      wF = Dn(),
      CF = m_(),
      NF = Object.prototype,
      qF = NF.hasOwnProperty;
    function LF(e) {
      if (!RF(e)) return CF(e);
      var t = wF(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !qF.call(e, n))) || r.push(n);
      return r;
    }
    S_.exports = LF;
  });
  var R_ = s((jj, b_) => {
    var PF = ra(),
      xF = A_(),
      MF = mt();
    function DF(e) {
      return MF(e) ? PF(e, !0) : xF(e);
    }
    b_.exports = DF;
  });
  var C_ = s((Kj, w_) => {
    var FF = Zo(),
      GF = T_(),
      XF = R_();
    function VF(e) {
      return FF(e, XF, GF);
    }
    w_.exports = VF;
  });
  var q_ = s((kj, N_) => {
    var UF = va(),
      BF = vt(),
      WF = y_(),
      HF = C_();
    function jF(e, t) {
      if (e == null) return {};
      var r = UF(HF(e), function (n) {
        return [n];
      });
      return (
        (t = BF(t)),
        WF(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    N_.exports = jF;
  });
  var P_ = s((zj, L_) => {
    var KF = vt(),
      kF = c_(),
      zF = q_();
    function YF(e, t) {
      return zF(e, kF(KF(t)));
    }
    L_.exports = YF;
  });
  var M_ = s((Yj, x_) => {
    var $F = Fn(),
      QF = Gn(),
      ZF = Cr(),
      JF = he(),
      e1 = mt(),
      t1 = Ln(),
      r1 = Dn(),
      n1 = Mn(),
      i1 = "[object Map]",
      o1 = "[object Set]",
      a1 = Object.prototype,
      s1 = a1.hasOwnProperty;
    function u1(e) {
      if (e == null) return !0;
      if (
        e1(e) &&
        (JF(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          t1(e) ||
          n1(e) ||
          ZF(e))
      )
        return !e.length;
      var t = QF(e);
      if (t == i1 || t == o1) return !e.size;
      if (r1(e)) return !$F(e).length;
      for (var r in e) if (s1.call(e, r)) return !1;
      return !0;
    }
    x_.exports = u1;
  });
  var F_ = s(($j, D_) => {
    var c1 = Xa(),
      l1 = ba(),
      f1 = vt();
    function d1(e, t) {
      var r = {};
      return (
        (t = f1(t, 3)),
        l1(e, function (n, i, o) {
          c1(r, i, t(n, i, o));
        }),
        r
      );
    }
    D_.exports = d1;
  });
  var X_ = s((Qj, G_) => {
    function p1(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    G_.exports = p1;
  });
  var U_ = s((Zj, V_) => {
    var v1 = Wn();
    function E1(e) {
      return typeof e == "function" ? e : v1;
    }
    V_.exports = E1;
  });
  var W_ = s((Jj, B_) => {
    var h1 = X_(),
      _1 = Ra(),
      g1 = U_(),
      y1 = he();
    function I1(e, t) {
      var r = y1(e) ? h1 : _1;
      return r(e, g1(t));
    }
    B_.exports = I1;
  });
  var j_ = s((eK, H_) => {
    var T1 = Ve(),
      O1 = function () {
        return T1.Date.now();
      };
    H_.exports = O1;
  });
  var z_ = s((tK, k_) => {
    var m1 = Qe(),
      Va = j_(),
      K_ = Hn(),
      S1 = "Expected a function",
      A1 = Math.max,
      b1 = Math.min;
    function R1(e, t, r) {
      var n,
        i,
        o,
        a,
        u,
        l,
        f = 0,
        v = !1,
        d = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(S1);
      (t = K_(t) || 0),
        m1(r) &&
          ((v = !!r.leading),
          (d = "maxWait" in r),
          (o = d ? A1(K_(r.maxWait) || 0, t) : o),
          (E = "trailing" in r ? !!r.trailing : E));
      function T(N) {
        var M = n,
          G = i;
        return (n = i = void 0), (f = N), (a = e.apply(G, M)), a;
      }
      function b(N) {
        return (f = N), (u = setTimeout(O, t)), v ? T(N) : a;
      }
      function S(N) {
        var M = N - l,
          G = N - f,
          X = t - M;
        return d ? b1(X, o - G) : X;
      }
      function q(N) {
        var M = N - l,
          G = N - f;
        return l === void 0 || M >= t || M < 0 || (d && G >= o);
      }
      function O() {
        var N = Va();
        if (q(N)) return A(N);
        u = setTimeout(O, S(N));
      }
      function A(N) {
        return (u = void 0), E && n ? T(N) : ((n = i = void 0), a);
      }
      function g() {
        u !== void 0 && clearTimeout(u), (f = 0), (n = l = i = u = void 0);
      }
      function C() {
        return u === void 0 ? a : A(Va());
      }
      function R() {
        var N = Va(),
          M = q(N);
        if (((n = arguments), (i = this), (l = N), M)) {
          if (u === void 0) return b(l);
          if (d) return clearTimeout(u), (u = setTimeout(O, t)), T(l);
        }
        return u === void 0 && (u = setTimeout(O, t)), a;
      }
      return (R.cancel = g), (R.flush = C), R;
    }
    k_.exports = R1;
  });
  var $_ = s((rK, Y_) => {
    var w1 = z_(),
      C1 = Qe(),
      N1 = "Expected a function";
    function q1(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(N1);
      return (
        C1(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        w1(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Y_.exports = q1;
  });
  var ai = s((z) => {
    "use strict";
    var L1 = ze().default;
    Object.defineProperty(z, "__esModule", { value: !0 });
    z.viewportWidthChanged =
      z.testFrameRendered =
      z.stopRequested =
      z.sessionStopped =
      z.sessionStarted =
      z.sessionInitialized =
      z.rawDataImported =
      z.previewRequested =
      z.playbackRequested =
      z.parameterChanged =
      z.mediaQueriesDefined =
      z.instanceStarted =
      z.instanceRemoved =
      z.instanceAdded =
      z.eventStateChanged =
      z.eventListenerAdded =
      z.elementStateChanged =
      z.clearRequested =
      z.animationFrameChanged =
      z.actionListPlaybackChanged =
        void 0;
    var Q_ = L1(Sr()),
      Z_ = Re(),
      P1 = Ct(),
      {
        IX2_RAW_DATA_IMPORTED: x1,
        IX2_SESSION_INITIALIZED: M1,
        IX2_SESSION_STARTED: D1,
        IX2_SESSION_STOPPED: F1,
        IX2_PREVIEW_REQUESTED: G1,
        IX2_PLAYBACK_REQUESTED: X1,
        IX2_STOP_REQUESTED: V1,
        IX2_CLEAR_REQUESTED: U1,
        IX2_EVENT_LISTENER_ADDED: B1,
        IX2_TEST_FRAME_RENDERED: W1,
        IX2_EVENT_STATE_CHANGED: H1,
        IX2_ANIMATION_FRAME_CHANGED: j1,
        IX2_PARAMETER_CHANGED: K1,
        IX2_INSTANCE_ADDED: k1,
        IX2_INSTANCE_STARTED: z1,
        IX2_INSTANCE_REMOVED: Y1,
        IX2_ELEMENT_STATE_CHANGED: $1,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: Q1,
        IX2_VIEWPORT_WIDTH_CHANGED: Z1,
        IX2_MEDIA_QUERIES_DEFINED: J1,
      } = Z_.IX2EngineActionTypes,
      { reifyState: eG } = P1.IX2VanillaUtils,
      tG = (e) => ({ type: x1, payload: (0, Q_.default)({}, eG(e)) });
    z.rawDataImported = tG;
    var rG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: M1,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    z.sessionInitialized = rG;
    var nG = () => ({ type: D1 });
    z.sessionStarted = nG;
    var iG = () => ({ type: F1 });
    z.sessionStopped = iG;
    var oG = ({ rawData: e, defer: t }) => ({
      type: G1,
      payload: { defer: t, rawData: e },
    });
    z.previewRequested = oG;
    var aG = ({
      actionTypeId: e = Z_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: i,
      immediate: o,
      testManual: a,
      verbose: u,
      rawData: l,
    }) => ({
      type: X1,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: i,
        immediate: o,
        verbose: u,
        rawData: l,
      },
    });
    z.playbackRequested = aG;
    var sG = (e) => ({ type: V1, payload: { actionListId: e } });
    z.stopRequested = sG;
    var uG = () => ({ type: U1 });
    z.clearRequested = uG;
    var cG = (e, t) => ({
      type: B1,
      payload: { target: e, listenerParams: t },
    });
    z.eventListenerAdded = cG;
    var lG = (e = 1) => ({ type: W1, payload: { step: e } });
    z.testFrameRendered = lG;
    var fG = (e, t) => ({ type: H1, payload: { stateKey: e, newState: t } });
    z.eventStateChanged = fG;
    var dG = (e, t) => ({ type: j1, payload: { now: e, parameters: t } });
    z.animationFrameChanged = dG;
    var pG = (e, t) => ({ type: K1, payload: { key: e, value: t } });
    z.parameterChanged = pG;
    var vG = (e) => ({ type: k1, payload: (0, Q_.default)({}, e) });
    z.instanceAdded = vG;
    var EG = (e, t) => ({ type: z1, payload: { instanceId: e, time: t } });
    z.instanceStarted = EG;
    var hG = (e) => ({ type: Y1, payload: { instanceId: e } });
    z.instanceRemoved = hG;
    var _G = (e, t, r, n) => ({
      type: $1,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    z.elementStateChanged = _G;
    var gG = ({ actionListId: e, isPlaying: t }) => ({
      type: Q1,
      payload: { actionListId: e, isPlaying: t },
    });
    z.actionListPlaybackChanged = gG;
    var yG = ({ width: e, mediaQueries: t }) => ({
      type: Z1,
      payload: { width: e, mediaQueries: t },
    });
    z.viewportWidthChanged = yG;
    var IG = () => ({ type: J1 });
    z.mediaQueriesDefined = IG;
  });
  var tg = s((ge) => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    ge.elementContains = LG;
    ge.getChildElements = xG;
    ge.getClosestElement = void 0;
    ge.getProperty = RG;
    ge.getQuerySelector = CG;
    ge.getRefType = FG;
    ge.getSiblingElements = MG;
    ge.getStyle = bG;
    ge.getValidDocument = NG;
    ge.isSiblingNode = PG;
    ge.matchSelector = wG;
    ge.queryDocument = qG;
    ge.setStyle = AG;
    var TG = Ct(),
      OG = Re(),
      { ELEMENT_MATCHES: Ua } = TG.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: J_,
        HTML_ELEMENT: mG,
        PLAIN_OBJECT: SG,
        WF_PAGE: eg,
      } = OG.IX2EngineConstants;
    function AG(e, t, r) {
      e.style[t] = r;
    }
    function bG(e, t) {
      return e.style[t];
    }
    function RG(e, t) {
      return e[t];
    }
    function wG(e) {
      return (t) => t[Ua](e);
    }
    function CG({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(J_) !== -1) {
          let n = e.split(J_),
            i = n[0];
          if (((r = n[1]), i !== document.documentElement.getAttribute(eg)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function NG(e) {
      return e == null || e === document.documentElement.getAttribute(eg)
        ? document
        : null;
    }
    function qG(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function LG(e, t) {
      return e.contains(t);
    }
    function PG(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function xG(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: i } = e[r],
          { length: o } = i;
        if (o) for (let a = 0; a < o; a++) t.push(i[a]);
      }
      return t;
    }
    function MG(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: i } = e; n < i; n++) {
        let { parentNode: o } = e[n];
        if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
          continue;
        r.push(o);
        let a = o.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var DG = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[Ua] && r[Ua](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    ge.getClosestElement = DG;
    function FG(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? mG
          : SG
        : null;
    }
  });
  var Ba = s((oK, ng) => {
    var GG = Qe(),
      rg = Object.create,
      XG = (function () {
        function e() {}
        return function (t) {
          if (!GG(t)) return {};
          if (rg) return rg(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    ng.exports = XG;
  });
  var si = s((aK, ig) => {
    function VG() {}
    ig.exports = VG;
  });
  var ci = s((sK, og) => {
    var UG = Ba(),
      BG = si();
    function ui(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    ui.prototype = UG(BG.prototype);
    ui.prototype.constructor = ui;
    og.exports = ui;
  });
  var cg = s((uK, ug) => {
    var ag = Xt(),
      WG = Cr(),
      HG = he(),
      sg = ag ? ag.isConcatSpreadable : void 0;
    function jG(e) {
      return HG(e) || WG(e) || !!(sg && e && e[sg]);
    }
    ug.exports = jG;
  });
  var dg = s((cK, fg) => {
    var KG = qn(),
      kG = cg();
    function lg(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = kG), i || (i = []); ++o < a; ) {
        var u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? lg(u, t - 1, r, n, i)
            : KG(i, u)
          : n || (i[i.length] = u);
      }
      return i;
    }
    fg.exports = lg;
  });
  var vg = s((lK, pg) => {
    var zG = dg();
    function YG(e) {
      var t = e == null ? 0 : e.length;
      return t ? zG(e, 1) : [];
    }
    pg.exports = YG;
  });
  var hg = s((fK, Eg) => {
    function $G(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Eg.exports = $G;
  });
  var yg = s((dK, gg) => {
    var QG = hg(),
      _g = Math.max;
    function ZG(e, t, r) {
      return (
        (t = _g(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = _g(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
          return (u[t] = r(a)), QG(e, this, u);
        }
      );
    }
    gg.exports = ZG;
  });
  var Tg = s((pK, Ig) => {
    function JG(e) {
      return function () {
        return e;
      };
    }
    Ig.exports = JG;
  });
  var Sg = s((vK, mg) => {
    var eX = Tg(),
      Og = Ga(),
      tX = Wn(),
      rX = Og
        ? function (e, t) {
            return Og(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: eX(t),
              writable: !0,
            });
          }
        : tX;
    mg.exports = rX;
  });
  var bg = s((EK, Ag) => {
    var nX = 800,
      iX = 16,
      oX = Date.now;
    function aX(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = oX(),
          i = iX - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= nX) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Ag.exports = aX;
  });
  var wg = s((hK, Rg) => {
    var sX = Sg(),
      uX = bg(),
      cX = uX(sX);
    Rg.exports = cX;
  });
  var Ng = s((_K, Cg) => {
    var lX = vg(),
      fX = yg(),
      dX = wg();
    function pX(e) {
      return dX(fX(e, void 0, lX), e + "");
    }
    Cg.exports = pX;
  });
  var Pg = s((gK, Lg) => {
    var qg = na(),
      vX = qg && new qg();
    Lg.exports = vX;
  });
  var Mg = s((yK, xg) => {
    function EX() {}
    xg.exports = EX;
  });
  var Wa = s((IK, Fg) => {
    var Dg = Pg(),
      hX = Mg(),
      _X = Dg
        ? function (e) {
            return Dg.get(e);
          }
        : hX;
    Fg.exports = _X;
  });
  var Xg = s((TK, Gg) => {
    var gX = {};
    Gg.exports = gX;
  });
  var Ha = s((OK, Ug) => {
    var Vg = Xg(),
      yX = Object.prototype,
      IX = yX.hasOwnProperty;
    function TX(e) {
      for (
        var t = e.name + "", r = Vg[t], n = IX.call(Vg, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    Ug.exports = TX;
  });
  var fi = s((mK, Bg) => {
    var OX = Ba(),
      mX = si(),
      SX = 4294967295;
    function li(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = SX),
        (this.__views__ = []);
    }
    li.prototype = OX(mX.prototype);
    li.prototype.constructor = li;
    Bg.exports = li;
  });
  var Hg = s((SK, Wg) => {
    function AX(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Wg.exports = AX;
  });
  var Kg = s((AK, jg) => {
    var bX = fi(),
      RX = ci(),
      wX = Hg();
    function CX(e) {
      if (e instanceof bX) return e.clone();
      var t = new RX(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = wX(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    jg.exports = CX;
  });
  var Yg = s((bK, zg) => {
    var NX = fi(),
      kg = ci(),
      qX = si(),
      LX = he(),
      PX = it(),
      xX = Kg(),
      MX = Object.prototype,
      DX = MX.hasOwnProperty;
    function di(e) {
      if (PX(e) && !LX(e) && !(e instanceof NX)) {
        if (e instanceof kg) return e;
        if (DX.call(e, "__wrapped__")) return xX(e);
      }
      return new kg(e);
    }
    di.prototype = qX.prototype;
    di.prototype.constructor = di;
    zg.exports = di;
  });
  var Qg = s((RK, $g) => {
    var FX = fi(),
      GX = Wa(),
      XX = Ha(),
      VX = Yg();
    function UX(e) {
      var t = XX(e),
        r = VX[t];
      if (typeof r != "function" || !(t in FX.prototype)) return !1;
      if (e === r) return !0;
      var n = GX(r);
      return !!n && e === n[0];
    }
    $g.exports = UX;
  });
  var ty = s((wK, ey) => {
    var Zg = ci(),
      BX = Ng(),
      WX = Wa(),
      ja = Ha(),
      HX = he(),
      Jg = Qg(),
      jX = "Expected a function",
      KX = 8,
      kX = 32,
      zX = 128,
      YX = 256;
    function $X(e) {
      return BX(function (t) {
        var r = t.length,
          n = r,
          i = Zg.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(jX);
          if (i && !a && ja(o) == "wrapper") var a = new Zg([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var u = ja(o),
            l = u == "wrapper" ? WX(o) : void 0;
          l &&
          Jg(l[0]) &&
          l[1] == (zX | KX | kX | YX) &&
          !l[4].length &&
          l[9] == 1
            ? (a = a[ja(l[0])].apply(a, l[3]))
            : (a = o.length == 1 && Jg(o) ? a[u]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            v = f[0];
          if (a && f.length == 1 && HX(v)) return a.plant(v).value();
          for (var d = 0, E = r ? t[d].apply(this, f) : v; ++d < r; )
            E = t[d].call(this, E);
          return E;
        };
      });
    }
    ey.exports = $X;
  });
  var ny = s((CK, ry) => {
    var QX = ty(),
      ZX = QX();
    ry.exports = ZX;
  });
  var oy = s((NK, iy) => {
    function JX(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    iy.exports = JX;
  });
  var sy = s((qK, ay) => {
    var eV = oy(),
      Ka = Hn();
    function tV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = Ka(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = Ka(t)), (t = t === t ? t : 0)),
        eV(Ka(e), t, r)
      );
    }
    ay.exports = tV;
  });
  var Ay = s((_i) => {
    "use strict";
    var hi = ze().default;
    Object.defineProperty(_i, "__esModule", { value: !0 });
    _i.default = void 0;
    var Le = hi(Sr()),
      rV = hi(ny()),
      nV = hi(Bn()),
      iV = hi(sy()),
      Nt = Re(),
      ka = Qa(),
      pi = ai(),
      oV = Ct(),
      {
        MOUSE_CLICK: aV,
        MOUSE_SECOND_CLICK: sV,
        MOUSE_DOWN: uV,
        MOUSE_UP: cV,
        MOUSE_OVER: lV,
        MOUSE_OUT: fV,
        DROPDOWN_CLOSE: dV,
        DROPDOWN_OPEN: pV,
        SLIDER_ACTIVE: vV,
        SLIDER_INACTIVE: EV,
        TAB_ACTIVE: hV,
        TAB_INACTIVE: _V,
        NAVBAR_CLOSE: gV,
        NAVBAR_OPEN: yV,
        MOUSE_MOVE: IV,
        PAGE_SCROLL_DOWN: hy,
        SCROLL_INTO_VIEW: _y,
        SCROLL_OUT_OF_VIEW: TV,
        PAGE_SCROLL_UP: OV,
        SCROLLING_IN_VIEW: mV,
        PAGE_FINISH: gy,
        ECOMMERCE_CART_CLOSE: SV,
        ECOMMERCE_CART_OPEN: AV,
        PAGE_START: yy,
        PAGE_SCROLL: bV,
      } = Nt.EventTypeConsts,
      za = "COMPONENT_ACTIVE",
      Iy = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: uy } = Nt.IX2EngineConstants,
      { getNamespacedParameterId: cy } = oV.IX2VanillaUtils,
      Ty = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      Kr = Ty(({ element: e, nativeEvent: t }) => e === t.target),
      RV = Ty(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      tt = (0, rV.default)([Kr, RV]),
      Oy = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            i = n[t];
          if (i && !CV[i.eventTypeId]) return i;
        }
        return null;
      },
      wV = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!Oy(e, n);
      },
      Ce = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
        let { action: o, id: a } = t,
          { actionListId: u, autoStopEventId: l } = o.config,
          f = Oy(e, l);
        return (
          f &&
            (0, ka.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: r,
              eventStateKey: l + uy + n.split(uy)[1],
              actionListId: (0, nV.default)(f, "action.config.actionListId"),
            }),
          (0, ka.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: u,
          }),
          (0, ka.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: u,
          }),
          i
        );
      },
      Ue = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      kr = { handler: Ue(tt, Ce) },
      my = (0, Le.default)({}, kr, { types: [za, Iy].join(" ") }),
      Ya = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      ly = "mouseover mouseout",
      $a = { types: Ya },
      CV = { PAGE_START: yy, PAGE_FINISH: gy },
      jr = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, iV.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      NV = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      qV = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: i } = t,
          o = e.contains(n);
        if (r === "mouseover" && o) return !0;
        let a = e.contains(i);
        return !!(r === "mouseout" && o && a);
      },
      LV = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: i } = jr(),
          o = r.scrollOffsetValue,
          l = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
        return NV(t.getBoundingClientRect(), {
          left: 0,
          top: l,
          right: n,
          bottom: i - l,
        });
      },
      Sy = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          i = [za, Iy].indexOf(n) !== -1 ? n === za : r.isActive,
          o = (0, Le.default)({}, r, { isActive: i });
        return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
      },
      fy = (e) => (t, r) => {
        let n = { elementHovered: qV(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      PV = (e) => (t, r) => {
        let n = (0, Le.default)({}, r, { elementVisible: LV(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      dy =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = jr(),
            {
              event: { config: a, eventTypeId: u },
            } = t,
            { scrollOffsetValue: l, scrollOffsetUnit: f } = a,
            v = f === "PX",
            d = i - o,
            E = Number((n / d).toFixed(2));
          if (r && r.percentTop === E) return r;
          let T = (v ? l : (o * (l || 0)) / 100) / d,
            b,
            S,
            q = 0;
          r &&
            ((b = E > r.percentTop),
            (S = r.scrollingDown !== b),
            (q = S ? E : r.anchorTop));
          let O = u === hy ? E >= q + T : E <= q - T,
            A = (0, Le.default)({}, r, {
              percentTop: E,
              inBounds: O,
              anchorTop: q,
              scrollingDown: b,
            });
          return (r && O && (S || A.inBounds !== r.inBounds) && e(t, A)) || A;
        },
      xV = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      MV = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      DV = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      py =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      vi = (e = !0) =>
        (0, Le.default)({}, my, {
          handler: Ue(
            e ? tt : Kr,
            Sy((t, r) => (r.isActive ? kr.handler(t, r) : r))
          ),
        }),
      Ei = (e = !0) =>
        (0, Le.default)({}, my, {
          handler: Ue(
            e ? tt : Kr,
            Sy((t, r) => (r.isActive ? r : kr.handler(t, r)))
          ),
        }),
      vy = (0, Le.default)({}, $a, {
        handler: PV((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: i } = e,
            { ixData: o } = i.getState(),
            { events: a } = o;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === _y) === r
            ? (Ce(e), (0, Le.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Ey = 0.05,
      FV = {
        [vV]: vi(),
        [EV]: Ei(),
        [pV]: vi(),
        [dV]: Ei(),
        [yV]: vi(!1),
        [gV]: Ei(!1),
        [hV]: vi(),
        [_V]: Ei(),
        [AV]: { types: "ecommerce-cart-open", handler: Ue(tt, Ce) },
        [SV]: { types: "ecommerce-cart-close", handler: Ue(tt, Ce) },
        [aV]: {
          types: "click",
          handler: Ue(
            tt,
            py((e, { clickCount: t }) => {
              wV(e) ? t === 1 && Ce(e) : Ce(e);
            })
          ),
        },
        [sV]: {
          types: "click",
          handler: Ue(
            tt,
            py((e, { clickCount: t }) => {
              t === 2 && Ce(e);
            })
          ),
        },
        [uV]: (0, Le.default)({}, kr, { types: "mousedown" }),
        [cV]: (0, Le.default)({}, kr, { types: "mouseup" }),
        [lV]: {
          types: ly,
          handler: Ue(
            tt,
            fy((e, t) => {
              t.elementHovered && Ce(e);
            })
          ),
        },
        [fV]: {
          types: ly,
          handler: Ue(
            tt,
            fy((e, t) => {
              t.elementHovered || Ce(e);
            })
          ),
        },
        [IV]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: i,
            },
            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: u,
                continuousParameterGroupId: l,
                reverse: f,
                restingState: v = 0,
              } = r,
              {
                clientX: d = o.clientX,
                clientY: E = o.clientY,
                pageX: T = o.pageX,
                pageY: b = o.pageY,
              } = n,
              S = u === "X_AXIS",
              q = n.type === "mouseout",
              O = v / 100,
              A = l,
              g = !1;
            switch (a) {
              case Nt.EventBasedOn.VIEWPORT: {
                O = S
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(E, window.innerHeight) / window.innerHeight;
                break;
              }
              case Nt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: C,
                  scrollTop: R,
                  scrollWidth: N,
                  scrollHeight: M,
                } = jr();
                O = S ? Math.min(C + T, N) / N : Math.min(R + b, M) / M;
                break;
              }
              case Nt.EventBasedOn.ELEMENT:
              default: {
                A = cy(i, l);
                let C = n.type.indexOf("mouse") === 0;
                if (C && tt({ element: t, nativeEvent: n }) !== !0) break;
                let R = t.getBoundingClientRect(),
                  { left: N, top: M, width: G, height: X } = R;
                if (!C && !xV({ left: d, top: E }, R)) break;
                (g = !0), (O = S ? (d - N) / G : (E - M) / X);
                break;
              }
            }
            return (
              q && (O > 1 - Ey || O < Ey) && (O = Math.round(O)),
              (a !== Nt.EventBasedOn.ELEMENT || g || g !== o.elementHovered) &&
                ((O = f ? 1 - O : O),
                e.dispatch((0, pi.parameterChanged)(A, O))),
              { elementHovered: g, clientX: d, clientY: E, pageX: T, pageY: b }
            );
          },
        },
        [bV]: {
          types: Ya,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: i, scrollHeight: o, clientHeight: a } = jr(),
              u = i / (o - a);
            (u = n ? 1 - u : u), e.dispatch((0, pi.parameterChanged)(r, u));
          },
        },
        [mV]: {
          types: Ya,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            i = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: o,
                scrollTop: a,
                scrollWidth: u,
                scrollHeight: l,
                clientHeight: f,
              } = jr(),
              {
                basedOn: v,
                selectedAxis: d,
                continuousParameterGroupId: E,
                startsEntering: T,
                startsExiting: b,
                addEndOffset: S,
                addStartOffset: q,
                addOffsetValue: O = 0,
                endOffsetValue: A = 0,
              } = r,
              g = d === "X_AXIS";
            if (v === Nt.EventBasedOn.VIEWPORT) {
              let C = g ? o / u : a / l;
              return (
                C !== i.scrollPercent &&
                  t.dispatch((0, pi.parameterChanged)(E, C)),
                { scrollPercent: C }
              );
            } else {
              let C = cy(n, E),
                R = e.getBoundingClientRect(),
                N = (q ? O : 0) / 100,
                M = (S ? A : 0) / 100;
              (N = T ? N : 1 - N), (M = b ? M : 1 - M);
              let G = R.top + Math.min(R.height * N, f),
                Q = R.top + R.height * M - G,
                W = Math.min(f + Q, l),
                _ = Math.min(Math.max(0, f - G), W) / W;
              return (
                _ !== i.scrollPercent &&
                  t.dispatch((0, pi.parameterChanged)(C, _)),
                { scrollPercent: _ }
              );
            }
          },
        },
        [_y]: vy,
        [TV]: vy,
        [hy]: (0, Le.default)({}, $a, {
          handler: dy((e, t) => {
            t.scrollingDown && Ce(e);
          }),
        }),
        [OV]: (0, Le.default)({}, $a, {
          handler: dy((e, t) => {
            t.scrollingDown || Ce(e);
          }),
        }),
        [gy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Ue(Kr, MV(Ce)),
        },
        [yy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Ue(Kr, DV(Ce)),
        },
      };
    _i.default = FV;
  });
  var Qa = s((gt) => {
    "use strict";
    var We = ze().default,
      GV = Mt().default;
    Object.defineProperty(gt, "__esModule", { value: !0 });
    gt.observeRequests = pU;
    gt.startActionGroup = is;
    gt.startEngine = Ti;
    gt.stopActionGroup = ns;
    gt.stopAllActionGroups = xy;
    gt.stopEngine = Oi;
    var XV = We(Sr()),
      VV = We(Bh()),
      UV = We(ya()),
      _t = We(Bn()),
      BV = We(s_()),
      WV = We(P_()),
      HV = We(M_()),
      jV = We(F_()),
      zr = We(W_()),
      KV = We($_()),
      Be = Re(),
      wy = Ct(),
      ce = ai(),
      pe = GV(tg()),
      kV = We(Ay()),
      zV = ["store", "computedStyle"],
      YV = Object.keys(Be.QuickEffectIds),
      Za = (e) => YV.includes(e),
      {
        COLON_DELIMITER: Ja,
        BOUNDARY_SELECTOR: gi,
        HTML_ELEMENT: Cy,
        RENDER_GENERAL: $V,
        W_MOD_IX: by,
      } = Be.IX2EngineConstants,
      {
        getAffectedElements: yi,
        getElementId: QV,
        getDestinationValues: es,
        observeStore: qt,
        getInstanceId: ZV,
        renderHTMLElement: JV,
        clearAllStyles: Ny,
        getMaxDurationItemIndex: eU,
        getComputedStyle: tU,
        getInstanceOrigin: rU,
        reduceListToGroup: nU,
        shouldNamespaceEventParameter: iU,
        getNamespacedParameterId: oU,
        shouldAllowMediaQuery: Ii,
        cleanupHTMLElement: aU,
        stringifyTarget: sU,
        mediaQueriesEqual: uU,
        shallowEqual: cU,
      } = wy.IX2VanillaUtils,
      {
        isPluginType: ts,
        createPluginInstance: rs,
        getPluginDuration: lU,
      } = wy.IX2VanillaPlugins,
      Ry = navigator.userAgent,
      fU = Ry.match(/iPad/i) || Ry.match(/iPhone/),
      dU = 12;
    function pU(e) {
      qt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: hU }),
        qt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: _U,
        }),
        qt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: gU }),
        qt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: yU });
    }
    function vU(e) {
      qt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Oi(e),
            Ny({ store: e, elementApi: pe }),
            Ti({ store: e, allowEvents: !0 }),
            qy();
        },
      });
    }
    function EU(e, t) {
      let r = qt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function hU({ rawData: e, defer: t }, r) {
      let n = () => {
        Ti({ store: r, rawData: e, allowEvents: !0 }), qy();
      };
      t ? setTimeout(n, 0) : n();
    }
    function qy() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function _U(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: i,
          eventId: o,
          allowEvents: a,
          immediate: u,
          testManual: l,
          verbose: f = !0,
        } = e,
        { rawData: v } = e;
      if (n && i && v && u) {
        let d = v.actionLists[n];
        d && (v = nU({ actionList: d, actionItemId: i, rawData: v }));
      }
      if (
        (Ti({ store: t, rawData: v, allowEvents: a, testManual: l }),
        (n && r === Be.ActionTypeConsts.GENERAL_START_ACTION) || Za(r))
      ) {
        ns({ store: t, actionListId: n }),
          Py({ store: t, actionListId: n, eventId: o });
        let d = is({
          store: t,
          eventId: o,
          actionListId: n,
          immediate: u,
          verbose: f,
        });
        f &&
          d &&
          t.dispatch(
            (0, ce.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !u,
            })
          );
      }
    }
    function gU({ actionListId: e }, t) {
      e ? ns({ store: t, actionListId: e }) : xy({ store: t }), Oi(t);
    }
    function yU(e, t) {
      Oi(t), Ny({ store: t, elementApi: pe });
    }
    function Ti({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: i } = e.getState();
      t && e.dispatch((0, ce.rawDataImported)(t)),
        i.active ||
          (e.dispatch(
            (0, ce.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(gi),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (AU(e),
            IU(),
            e.getState().ixSession.hasDefinedMediaQueries && vU(e)),
          e.dispatch((0, ce.sessionStarted)()),
          TU(e, n));
    }
    function IU() {
      let { documentElement: e } = document;
      e.className.indexOf(by) === -1 && (e.className += ` ${by}`);
    }
    function TU(e, t) {
      let r = (n) => {
        let { ixSession: i, ixParameters: o } = e.getState();
        i.active &&
          (e.dispatch((0, ce.animationFrameChanged)(n, o)),
          t ? EU(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Oi(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(OU), e.dispatch((0, ce.sessionStopped)());
      }
    }
    function OU({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function mU({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: o,
      parameterGroup: a,
      smoothing: u,
      restingValue: l,
    }) {
      let { ixData: f, ixSession: v } = e.getState(),
        { events: d } = f,
        E = d[n],
        { eventTypeId: T } = E,
        b = {},
        S = {},
        q = [],
        { continuousActionGroups: O } = a,
        { id: A } = a;
      iU(T, i) && (A = oU(t, A));
      let g = v.hasBoundaryNodes && r ? pe.getClosestElement(r, gi) : null;
      O.forEach((C) => {
        let { keyframe: R, actionItems: N } = C;
        N.forEach((M) => {
          let { actionTypeId: G } = M,
            { target: X } = M.config;
          if (!X) return;
          let Q = X.boundaryMode ? g : null,
            W = sU(X) + Ja + G;
          if (((S[W] = SU(S[W], R, M)), !b[W])) {
            b[W] = !0;
            let { config: P } = M;
            yi({
              config: P,
              event: E,
              eventTarget: r,
              elementRoot: Q,
              elementApi: pe,
            }).forEach((_) => {
              q.push({ element: _, key: W });
            });
          }
        });
      }),
        q.forEach(({ element: C, key: R }) => {
          let N = S[R],
            M = (0, _t.default)(N, "[0].actionItems[0]", {}),
            { actionTypeId: G } = M,
            X = ts(G) ? rs(G)(C, M) : null,
            Q = es({ element: C, actionItem: M, elementApi: pe }, X);
          os({
            store: e,
            element: C,
            eventId: n,
            actionListId: o,
            actionItem: M,
            destination: Q,
            continuous: !0,
            parameterId: A,
            actionGroups: N,
            smoothing: u,
            restingValue: l,
            pluginInstance: X,
          });
        });
    }
    function SU(e = [], t, r) {
      let n = [...e],
        i;
      return (
        n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
        i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[i].actionItems.push(r),
        n
      );
    }
    function AU(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      Ly(e),
        (0, zr.default)(r, (i, o) => {
          let a = kV.default[o];
          if (!a) {
            console.warn(`IX2 event type not configured: ${o}`);
            return;
          }
          qU({ logic: a, store: e, events: i });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && RU(e);
    }
    var bU = ["resize", "orientationchange"];
    function RU(e) {
      let t = () => {
        Ly(e);
      };
      bU.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, ce.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function Ly(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: i } = r;
        e.dispatch((0, ce.viewportWidthChanged)({ width: n, mediaQueries: i }));
      }
    }
    var wU = (e, t) => (0, WV.default)((0, jV.default)(e, t), HV.default),
      CU = (e, t) => {
        (0, zr.default)(e, (r, n) => {
          r.forEach((i, o) => {
            let a = n + Ja + o;
            t(i, n, a);
          });
        });
      },
      NU = (e) => {
        let t = { target: e.target, targets: e.targets };
        return yi({ config: t, elementApi: pe });
      };
    function qU({ logic: e, store: t, events: r }) {
      LU(r);
      let { types: n, handler: i } = e,
        { ixData: o } = t.getState(),
        { actionLists: a } = o,
        u = wU(r, NU);
      if (!(0, BV.default)(u)) return;
      (0, zr.default)(u, (d, E) => {
        let T = r[E],
          { action: b, id: S, mediaQueries: q = o.mediaQueryKeys } = T,
          { actionListId: O } = b.config;
        uU(q, o.mediaQueryKeys) || t.dispatch((0, ce.mediaQueriesDefined)()),
          b.actionTypeId === Be.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(T.config) ? T.config : [T.config]).forEach((g) => {
              let { continuousParameterGroupId: C } = g,
                R = (0, _t.default)(a, `${O}.continuousParameterGroups`, []),
                N = (0, UV.default)(R, ({ id: X }) => X === C),
                M = (g.smoothing || 0) / 100,
                G = (g.restingState || 0) / 100;
              N &&
                d.forEach((X, Q) => {
                  let W = S + Ja + Q;
                  mU({
                    store: t,
                    eventStateKey: W,
                    eventTarget: X,
                    eventId: S,
                    eventConfig: g,
                    actionListId: O,
                    parameterGroup: N,
                    smoothing: M,
                    restingValue: G,
                  });
                });
            }),
          (b.actionTypeId === Be.ActionTypeConsts.GENERAL_START_ACTION ||
            Za(b.actionTypeId)) &&
            Py({ store: t, actionListId: O, eventId: S });
      });
      let l = (d) => {
          let { ixSession: E } = t.getState();
          CU(u, (T, b, S) => {
            let q = r[b],
              O = E.eventState[S],
              { action: A, mediaQueries: g = o.mediaQueryKeys } = q;
            if (!Ii(g, E.mediaQueryKey)) return;
            let C = (R = {}) => {
              let N = i(
                {
                  store: t,
                  element: T,
                  event: q,
                  eventConfig: R,
                  nativeEvent: d,
                  eventStateKey: S,
                },
                O
              );
              cU(N, O) || t.dispatch((0, ce.eventStateChanged)(S, N));
            };
            A.actionTypeId === Be.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(q.config) ? q.config : [q.config]).forEach(C)
              : C();
          });
        },
        f = (0, KV.default)(l, dU),
        v = ({ target: d = document, types: E, throttle: T }) => {
          E.split(" ")
            .filter(Boolean)
            .forEach((b) => {
              let S = T ? f : l;
              d.addEventListener(b, S),
                t.dispatch((0, ce.eventListenerAdded)(d, [b, S]));
            });
        };
      Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e);
    }
    function LU(e) {
      if (!fU) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: i, target: o } = e[n],
          a = pe.getQuerySelector(o);
        t[a] ||
          ((i === Be.EventTypeConsts.MOUSE_CLICK ||
            i === Be.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Py({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: i } = e.getState(),
        { actionLists: o, events: a } = n,
        u = a[r],
        l = o[t];
      if (l && l.useFirstGroupAsInitialState) {
        let f = (0, _t.default)(l, "actionItemGroups[0].actionItems", []),
          v = (0, _t.default)(u, "mediaQueries", n.mediaQueryKeys);
        if (!Ii(v, i.mediaQueryKey)) return;
        f.forEach((d) => {
          var E;
          let { config: T, actionTypeId: b } = d,
            S =
              (T == null || (E = T.target) === null || E === void 0
                ? void 0
                : E.useEventTarget) === !0
                ? { target: u.target, targets: u.targets }
                : T,
            q = yi({ config: S, event: u, elementApi: pe }),
            O = ts(b);
          q.forEach((A) => {
            let g = O ? rs(b)(A, d) : null;
            os({
              destination: es({ element: A, actionItem: d, elementApi: pe }, g),
              immediate: !0,
              store: e,
              element: A,
              eventId: r,
              actionItem: d,
              actionListId: t,
              pluginInstance: g,
            });
          });
        });
      }
    }
    function xy({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, zr.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: i } = r;
          as(r, e),
            i &&
              e.dispatch(
                (0, ce.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ns({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
    }) {
      let { ixInstances: o, ixSession: a } = e.getState(),
        u = a.hasBoundaryNodes && r ? pe.getClosestElement(r, gi) : null;
      (0, zr.default)(o, (l) => {
        let f = (0, _t.default)(l, "actionItem.config.target.boundaryMode"),
          v = n ? l.eventStateKey === n : !0;
        if (l.actionListId === i && l.eventId === t && v) {
          if (u && f && !pe.elementContains(u, l.element)) return;
          as(l, e),
            l.verbose &&
              e.dispatch(
                (0, ce.actionListPlaybackChanged)({
                  actionListId: i,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function is({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: o = 0,
      immediate: a,
      verbose: u,
    }) {
      var l;
      let { ixData: f, ixSession: v } = e.getState(),
        { events: d } = f,
        E = d[t] || {},
        { mediaQueries: T = f.mediaQueryKeys } = E,
        b = (0, _t.default)(f, `actionLists.${i}`, {}),
        { actionItemGroups: S, useFirstGroupAsInitialState: q } = b;
      if (!S || !S.length) return !1;
      o >= S.length && (0, _t.default)(E, "config.loop") && (o = 0),
        o === 0 && q && o++;
      let A =
          (o === 0 || (o === 1 && q)) &&
          Za((l = E.action) === null || l === void 0 ? void 0 : l.actionTypeId)
            ? E.config.delay
            : void 0,
        g = (0, _t.default)(S, [o, "actionItems"], []);
      if (!g.length || !Ii(T, v.mediaQueryKey)) return !1;
      let C = v.hasBoundaryNodes && r ? pe.getClosestElement(r, gi) : null,
        R = eU(g),
        N = !1;
      return (
        g.forEach((M, G) => {
          let { config: X, actionTypeId: Q } = M,
            W = ts(Q),
            { target: P } = X;
          if (!P) return;
          let _ = P.boundaryMode ? C : null;
          yi({
            config: X,
            event: E,
            eventTarget: r,
            elementRoot: _,
            elementApi: pe,
          }).forEach((x, D) => {
            let B = W ? rs(Q)(x, M) : null,
              K = W ? lU(Q)(x, M) : null;
            N = !0;
            let ne = R === G && D === 0,
              Ne = tU({ element: x, actionItem: M }),
              He = es({ element: x, actionItem: M, elementApi: pe }, B);
            os({
              store: e,
              element: x,
              actionItem: M,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: i,
              groupIndex: o,
              isCarrier: ne,
              computedStyle: Ne,
              destination: He,
              immediate: a,
              verbose: u,
              pluginInstance: B,
              pluginDuration: K,
              instanceDelay: A,
            });
          });
        }),
        N
      );
    }
    function os(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        i = (0, VV.default)(e, zV),
        {
          element: o,
          actionItem: a,
          immediate: u,
          pluginInstance: l,
          continuous: f,
          restingValue: v,
          eventId: d,
        } = i,
        E = !f,
        T = ZV(),
        { ixElements: b, ixSession: S, ixData: q } = r.getState(),
        O = QV(b, o),
        { refState: A } = b[O] || {},
        g = pe.getRefType(o),
        C = S.reducedMotion && Be.ReducedMotionTypes[a.actionTypeId],
        R;
      if (C && f)
        switch (
          (t = q.events[d]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case Be.EventTypeConsts.MOUSE_MOVE:
          case Be.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            R = v;
            break;
          default:
            R = 0.5;
            break;
        }
      let N = rU(o, A, n, a, pe, l);
      if (
        (r.dispatch(
          (0, ce.instanceAdded)(
            (0, XV.default)(
              {
                instanceId: T,
                elementId: O,
                origin: N,
                refType: g,
                skipMotion: C,
                skipToValue: R,
              },
              i
            )
          )
        ),
        My(document.body, "ix2-animation-started", T),
        u)
      ) {
        PU(r, T);
        return;
      }
      qt({ store: r, select: ({ ixInstances: M }) => M[T], onChange: Dy }),
        E && r.dispatch((0, ce.instanceStarted)(T, S.tick));
    }
    function as(e, t) {
      My(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: i } = t.getState(),
        { ref: o, refType: a } = i[r] || {};
      a === Cy && aU(o, n, pe), t.dispatch((0, ce.instanceRemoved)(e.id));
    }
    function My(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function PU(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, ce.instanceStarted)(t, 0)),
        e.dispatch((0, ce.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      Dy(n[t], e);
    }
    function Dy(e, t) {
      let {
          active: r,
          continuous: n,
          complete: i,
          elementId: o,
          actionItem: a,
          actionTypeId: u,
          renderType: l,
          current: f,
          groupIndex: v,
          eventId: d,
          eventTarget: E,
          eventStateKey: T,
          actionListId: b,
          isCarrier: S,
          styleProp: q,
          verbose: O,
          pluginInstance: A,
        } = e,
        { ixData: g, ixSession: C } = t.getState(),
        { events: R } = g,
        N = R[d] || {},
        { mediaQueries: M = g.mediaQueryKeys } = N;
      if (Ii(M, C.mediaQueryKey) && (n || r || i)) {
        if (f || (l === $V && i)) {
          t.dispatch((0, ce.elementStateChanged)(o, u, f, a));
          let { ixElements: G } = t.getState(),
            { ref: X, refType: Q, refState: W } = G[o] || {},
            P = W && W[u];
          switch (Q) {
            case Cy: {
              JV(X, W, P, d, a, q, pe, l, A);
              break;
            }
          }
        }
        if (i) {
          if (S) {
            let G = is({
              store: t,
              eventId: d,
              eventTarget: E,
              eventStateKey: T,
              actionListId: b,
              groupIndex: v + 1,
              verbose: O,
            });
            O &&
              !G &&
              t.dispatch(
                (0, ce.actionListPlaybackChanged)({
                  actionListId: b,
                  isPlaying: !1,
                })
              );
          }
          as(e, t);
        }
      }
    }
  });
  var Gy = s((st) => {
    "use strict";
    var xU = Mt().default,
      MU = ze().default;
    Object.defineProperty(st, "__esModule", { value: !0 });
    st.actions = void 0;
    st.destroy = Fy;
    st.init = VU;
    st.setEnv = XU;
    st.store = void 0;
    Al();
    var DU = Go(),
      FU = MU(Uh()),
      ss = Qa(),
      GU = xU(ai());
    st.actions = GU;
    var mi = (0, DU.createStore)(FU.default);
    st.store = mi;
    function XU(e) {
      e() && (0, ss.observeRequests)(mi);
    }
    function VU(e) {
      Fy(), (0, ss.startEngine)({ store: mi, rawData: e, allowEvents: !0 });
    }
    function Fy() {
      (0, ss.stopEngine)(mi);
    }
  });
  var By = s((MK, Uy) => {
    var Xy = rt(),
      Vy = Gy();
    Vy.setEnv(Xy.env);
    Xy.define(
      "ix2",
      (Uy.exports = function () {
        return Vy;
      })
    );
  });
  var Hy = s((DK, Wy) => {
    var cr = rt();
    cr.define(
      "links",
      (Wy.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = cr.env(),
          a = window.location,
          u = document.createElement("a"),
          l = "w--current",
          f = /index\.(html|php)$/,
          v = /\/$/,
          d,
          E;
        r.ready = r.design = r.preview = T;
        function T() {
          (i = o && cr.env("design")),
            (E = cr.env("slug") || a.pathname || ""),
            cr.scroll.off(S),
            (d = []);
          for (var O = document.links, A = 0; A < O.length; ++A) b(O[A]);
          d.length && (cr.scroll.on(S), S());
        }
        function b(O) {
          var A =
            (i && O.getAttribute("href-disabled")) || O.getAttribute("href");
          if (((u.href = A), !(A.indexOf(":") >= 0))) {
            var g = e(O);
            if (
              u.hash.length > 1 &&
              u.host + u.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
              var C = e(u.hash);
              C.length && d.push({ link: g, sec: C, active: !1 });
              return;
            }
            if (!(A === "#" || A === "")) {
              var R = u.href === a.href || A === E || (f.test(A) && v.test(E));
              q(g, l, R);
            }
          }
        }
        function S() {
          var O = n.scrollTop(),
            A = n.height();
          t.each(d, function (g) {
            var C = g.link,
              R = g.sec,
              N = R.offset().top,
              M = R.outerHeight(),
              G = A * 0.5,
              X = R.is(":visible") && N + M - G >= O && N + G <= O + A;
            g.active !== X && ((g.active = X), q(C, l, X));
          });
        }
        function q(O, A, g) {
          var C = O.hasClass(A);
          (g && C) || (!g && !C) || (g ? O.addClass(A) : O.removeClass(A));
        }
        return r;
      })
    );
  });
  var Ky = s((FK, jy) => {
    var Si = rt();
    Si.define(
      "scroll",
      (jy.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = b() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (P) {
              window.setTimeout(P, 15);
            },
          l = Si.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            l +
            " > .header, " +
            l +
            " > .w-nav:not([data-no-scroll])",
          v = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          T = document.createElement("style");
        T.appendChild(document.createTextNode(E));
        function b() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var S = /^#[a-zA-Z0-9][\w:.-]*$/;
        function q(P) {
          return S.test(P.hash) && P.host + P.pathname === r.host + r.pathname;
        }
        let O =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function A() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            O.matches
          );
        }
        function g(P, _) {
          var L;
          switch (_) {
            case "add":
              (L = P.attr("tabindex")),
                L
                  ? P.attr("data-wf-tabindex-swap", L)
                  : P.attr("tabindex", "-1");
              break;
            case "remove":
              (L = P.attr("data-wf-tabindex-swap")),
                L
                  ? (P.attr("tabindex", L),
                    P.removeAttr("data-wf-tabindex-swap"))
                  : P.removeAttr("tabindex");
              break;
          }
          P.toggleClass("wf-force-outline-none", _ === "add");
        }
        function C(P) {
          var _ = P.currentTarget;
          if (
            !(
              Si.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))
            )
          ) {
            var L = q(_) ? _.hash : "";
            if (L !== "") {
              var x = e(L);
              x.length &&
                (P && (P.preventDefault(), P.stopPropagation()),
                R(L, P),
                window.setTimeout(
                  function () {
                    N(x, function () {
                      g(x, "add"),
                        x.get(0).focus({ preventScroll: !0 }),
                        g(x, "remove");
                    });
                  },
                  P ? 0 : 300
                ));
            }
          }
        }
        function R(P) {
          if (
            r.hash !== P &&
            n &&
            n.pushState &&
            !(Si.env.chrome && r.protocol === "file:")
          ) {
            var _ = n.state && n.state.hash;
            _ !== P && n.pushState({ hash: P }, "", P);
          }
        }
        function N(P, _) {
          var L = i.scrollTop(),
            x = M(P);
          if (L !== x) {
            var D = G(P, L, x),
              B = Date.now(),
              K = function () {
                var ne = Date.now() - B;
                window.scroll(0, X(L, x, ne, D)),
                  ne <= D ? u(K) : typeof _ == "function" && _();
              };
            u(K);
          }
        }
        function M(P) {
          var _ = e(f),
            L = _.css("position") === "fixed" ? _.outerHeight() : 0,
            x = P.offset().top - L;
          if (P.data("scroll") === "mid") {
            var D = i.height() - L,
              B = P.outerHeight();
            B < D && (x -= Math.round((D - B) / 2));
          }
          return x;
        }
        function G(P, _, L) {
          if (A()) return 0;
          var x = 1;
          return (
            a.add(P).each(function (D, B) {
              var K = parseFloat(B.getAttribute("data-scroll-time"));
              !isNaN(K) && K >= 0 && (x = K);
            }),
            (472.143 * Math.log(Math.abs(_ - L) + 125) - 2e3) * x
          );
        }
        function X(P, _, L, x) {
          return L > x ? _ : P + (_ - P) * Q(L / x);
        }
        function Q(P) {
          return P < 0.5
            ? 4 * P * P * P
            : (P - 1) * (2 * P - 2) * (2 * P - 2) + 1;
        }
        function W() {
          var { WF_CLICK_EMPTY: P, WF_CLICK_SCROLL: _ } = t;
          o.on(_, d, C),
            o.on(P, v, function (L) {
              L.preventDefault();
            }),
            document.head.insertBefore(T, document.head.firstChild);
        }
        return { ready: W };
      })
    );
  });
  var zy = s((GK, ky) => {
    var UU = rt();
    UU.define(
      "touch",
      (ky.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            u = !1,
            l = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            v;
          o.addEventListener("touchstart", d, !1),
            o.addEventListener("touchmove", E, !1),
            o.addEventListener("touchend", T, !1),
            o.addEventListener("touchcancel", b, !1),
            o.addEventListener("mousedown", d, !1),
            o.addEventListener("mousemove", E, !1),
            o.addEventListener("mouseup", T, !1),
            o.addEventListener("mouseout", b, !1);
          function d(q) {
            var O = q.touches;
            (O && O.length > 1) ||
              ((a = !0),
              O ? ((u = !0), (f = O[0].clientX)) : (f = q.clientX),
              (v = f));
          }
          function E(q) {
            if (a) {
              if (u && q.type === "mousemove") {
                q.preventDefault(), q.stopPropagation();
                return;
              }
              var O = q.touches,
                A = O ? O[0].clientX : q.clientX,
                g = A - v;
              (v = A),
                Math.abs(g) > l &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", q, { direction: g > 0 ? "right" : "left" }), b());
            }
          }
          function T(q) {
            if (a && ((a = !1), u && q.type === "mouseup")) {
              q.preventDefault(), q.stopPropagation(), (u = !1);
              return;
            }
          }
          function b() {
            a = !1;
          }
          function S() {
            o.removeEventListener("touchstart", d, !1),
              o.removeEventListener("touchmove", E, !1),
              o.removeEventListener("touchend", T, !1),
              o.removeEventListener("touchcancel", b, !1),
              o.removeEventListener("mousedown", d, !1),
              o.removeEventListener("mousemove", E, !1),
              o.removeEventListener("mouseup", T, !1),
              o.removeEventListener("mouseout", b, !1),
              (o = null);
          }
          this.destroy = S;
        }
        function i(o, a, u) {
          var l = e.Event(o, { originalEvent: a });
          e(a.target).trigger(l, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  Ss();
  bs();
  ws();
  qs();
  Gs();
  By();
  Hy();
  Ky();
  zy();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".item",
        originalId:
          "6176a76d2bc7b22e2e30bcbe|3e52d327-1b3d-c0d2-5de8-114887b8e89f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".item",
          originalId:
            "6176a76d2bc7b22e2e30bcbe|3e52d327-1b3d-c0d2-5de8-114887b8e89f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1596817717603,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".item",
        originalId:
          "6176a76d2bc7b22e2e30bcbe|3e52d327-1b3d-c0d2-5de8-114887b8e89f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".item",
          originalId:
            "6176a76d2bc7b22e2e30bcbe|3e52d327-1b3d-c0d2-5de8-114887b8e89f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1596817717604,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b2817330bcba|19467815-f182-899d-4b90-dcd972b6428e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2817330bcba|19467815-f182-899d-4b90-dcd972b6428e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 80,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-6-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 80,
          restingState: 50,
        },
      ],
      createdOn: 1611672338826,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|3fadac9e-248c-ccc4-f19a-f9a9abc7fc52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|3fadac9e-248c-ccc4-f19a-f9a9abc7fc52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1615216329107,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|3fadac9e-248c-ccc4-f19a-f9a9abc7fc52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|3fadac9e-248c-ccc4-f19a-f9a9abc7fc52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1615216329108,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "6176a76d2bc7b23fed30bca7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1615309112779,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b224e130bcc2|553c51be-1af8-7f05-dbb4-41ae45d924dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b224e130bcc2|553c51be-1af8-7f05-dbb4-41ae45d924dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1616573371625,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b224e130bcc2|553c51be-1af8-7f05-dbb4-41ae45d924dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b224e130bcc2|553c51be-1af8-7f05-dbb4-41ae45d924dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1616573371625,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|af8143f5-c4bd-7eb6-0bbf-06e371a2b308",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|af8143f5-c4bd-7eb6-0bbf-06e371a2b308",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1616772133098,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|af8143f5-c4bd-7eb6-0bbf-06e371a2b308",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|af8143f5-c4bd-7eb6-0bbf-06e371a2b308",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1616772133099,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-53",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|44cf4578-c065-1edc-4f4a-439fde42bc3c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|44cf4578-c065-1edc-4f4a-439fde42bc3c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1625080364436,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|44cf4578-c065-1edc-4f4a-439fde42bc3c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|44cf4578-c065-1edc-4f4a-439fde42bc3c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1625080364438,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b224e130bcc2|Div Block 7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b224e130bcc2|Div Block 7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1627395645661,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b224e130bcc2|Div Block 7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b224e130bcc2|Div Block 7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1627395645663,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b2760a30bcb2|e8ebbc93-3577-1aa3-0cdb-acc29edb783a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2760a30bcb2|e8ebbc93-3577-1aa3-0cdb-acc29edb783a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1628024482680,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b2760a30bcb2|e8ebbc93-3577-1aa3-0cdb-acc29edb783a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2760a30bcb2|e8ebbc93-3577-1aa3-0cdb-acc29edb783a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1628024482682,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b224e130bcc2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b224e130bcc2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1632947085280,
    },
    "e-66": {
      id: "e-66",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-67",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|bd11d9d3-1f38-30c7-f551-269d5b645351",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|bd11d9d3-1f38-30c7-f551-269d5b645351",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633376069579,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|bd11d9d3-1f38-30c7-f551-269d5b645351",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|bd11d9d3-1f38-30c7-f551-269d5b645351",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633376069580,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|66416161-20e0-82bc-15a2-33062ba7c6d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|66416161-20e0-82bc-15a2-33062ba7c6d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633376828135,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|66416161-20e0-82bc-15a2-33062ba7c6d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|66416161-20e0-82bc-15a2-33062ba7c6d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633376828137,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-71",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|7721f517-f1c7-aa27-99c8-ce4315523ae0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|7721f517-f1c7-aa27-99c8-ce4315523ae0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633378079547,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|7721f517-f1c7-aa27-99c8-ce4315523ae0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|7721f517-f1c7-aa27-99c8-ce4315523ae0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633378079548,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "6176a76d2bc7b23fed30bca7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633427211434,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "6176a76d2bc7b23fed30bca7",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633427211436,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|8d509daf-0ed2-8454-4be6-f600c2953287",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|8d509daf-0ed2-8454-4be6-f600c2953287",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633683223595,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b23fed30bca7|8d509daf-0ed2-8454-4be6-f600c2953287",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b23fed30bca7|8d509daf-0ed2-8454-4be6-f600c2953287",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633683223596,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b224e130bcc2|8c0a2b88-49ee-ee2e-b5c1-9ad0ae477335",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b224e130bcc2|8c0a2b88-49ee-ee2e-b5c1-9ad0ae477335",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633683249418,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b224e130bcc2|8c0a2b88-49ee-ee2e-b5c1-9ad0ae477335",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b224e130bcc2|8c0a2b88-49ee-ee2e-b5c1-9ad0ae477335",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633683249420,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b2817330bcba|4f1bbece-c36b-2841-fd6c-91d954b1ef66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2817330bcba|4f1bbece-c36b-2841-fd6c-91d954b1ef66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633683308484,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b2817330bcba|4f1bbece-c36b-2841-fd6c-91d954b1ef66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2817330bcba|4f1bbece-c36b-2841-fd6c-91d954b1ef66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633683308486,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".nav-link",
        originalId: "af8143f5-c4bd-7eb6-0bbf-06e371a2b30d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-link",
          originalId: "af8143f5-c4bd-7eb6-0bbf-06e371a2b30d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633684751515,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".nav-link",
        originalId: "af8143f5-c4bd-7eb6-0bbf-06e371a2b30d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-link",
          originalId: "af8143f5-c4bd-7eb6-0bbf-06e371a2b30d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633684751517,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".menu-link",
        originalId: "af8143f5-c4bd-7eb6-0bbf-06e371a2b316",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu-link",
          originalId: "af8143f5-c4bd-7eb6-0bbf-06e371a2b316",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633687090847,
    },
    "e-84": {
      id: "e-84",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b2817330bcba|16fe78b1-3b25-5e8b-a052-3f708eb79e46",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2817330bcba|16fe78b1-3b25-5e8b-a052-3f708eb79e46",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633704756011,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b2817330bcba|b740df94-4e0b-10fb-13bc-351dbea63103",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2817330bcba|b740df94-4e0b-10fb-13bc-351dbea63103",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633705757054,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".aw1-item",
        originalId:
          "6176a76d2bc7b2760a30bcb2|02d24ca2-323c-61d4-72ed-643582fb5628",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "6176a76d2bc7b2760a30bcb2|02d24ca2-323c-61d4-72ed-643582fb5628",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633946519797,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".aw1-item",
        originalId:
          "6176a76d2bc7b2760a30bcb2|02d24ca2-323c-61d4-72ed-643582fb5628",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "6176a76d2bc7b2760a30bcb2|02d24ca2-323c-61d4-72ed-643582fb5628",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633946519798,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "6176a76d2bc7b2760a30bcb2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2760a30bcb2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633956694504,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "6176a76d2bc7b2760a30bcb2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2760a30bcb2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1633956694506,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-93",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "6176a76d2bc7b2817330bcba",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2817330bcba",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1634034209678,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "6176a76d2bc7b2817330bcba",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2817330bcba",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1634034209680,
    },
    "e-94": {
      id: "e-94",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b2817330bcba|e04e11a5-4cc9-1c40-7ee3-72b0c83a0a3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2817330bcba|e04e11a5-4cc9-1c40-7ee3-72b0c83a0a3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1634645621229,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b2817330bcba|e04e11a5-4cc9-1c40-7ee3-72b0c83a0a3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b2817330bcba|e04e11a5-4cc9-1c40-7ee3-72b0c83a0a3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1634645621231,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-97",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b224e130bcc2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b224e130bcc2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1634714697188,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6176a76d2bc7b224e130bcc2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b224e130bcc2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1634714697190,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "6176a76d2bc7b244c530bcbb",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b244c530bcbb",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1634717602732,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "6176a76d2bc7b244c530bcbb",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6176a76d2bc7b244c530bcbb",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1634717602734,
    },
  },
  actionLists: {
    "a-2": {
      id: "a-2",
      title: "Sidebar – Hover IN",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".item-img",
                  selectorGuids: ["349e469c-5744-5cf2-63b5-29a96ce1e9d6"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".item-img",
                  selectorGuids: ["349e469c-5744-5cf2-63b5-29a96ce1e9d6"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1596817720452,
    },
    "a-3": {
      id: "a-3",
      title: "Sidebar – Hover OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".item-img",
                  selectorGuids: ["349e469c-5744-5cf2-63b5-29a96ce1e9d6"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1596817720452,
    },
    "a-6": {
      id: "a-6",
      title: "Contact Icon XY",
      continuousParameterGroups: [
        {
          id: "a-6-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-6-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".head-ico",
                      selectorGuids: ["7fc77999-7133-0174-a90f-5cba5e244ccc"],
                    },
                    xValue: -9,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-6-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".head-ico",
                      selectorGuids: ["7fc77999-7133-0174-a90f-5cba5e244ccc"],
                    },
                    zValue: -80,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-6-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".head-ico",
                      selectorGuids: ["7fc77999-7133-0174-a90f-5cba5e244ccc"],
                    },
                    xValue: 9,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-6-n-6",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".head-ico",
                      selectorGuids: ["7fc77999-7133-0174-a90f-5cba5e244ccc"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-6-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-6-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".head-ico",
                      selectorGuids: ["7fc77999-7133-0174-a90f-5cba5e244ccc"],
                    },
                    yValue: -7,
                    xUnit: "PX",
                    yUnit: "VW",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-6-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".head-ico",
                      selectorGuids: ["7fc77999-7133-0174-a90f-5cba5e244ccc"],
                    },
                    yValue: 7,
                    xUnit: "PX",
                    yUnit: "VW",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1603397466673,
    },
    "a-7": {
      id: "a-7",
      title: "Home – Review 1 IN",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-13",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-2",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5c5ad695-cecd-124e-e20d-72811e01d3b6",
                  ],
                },
                xValue: -22,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-3",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5cc8a449-ea35-4bd7-91bf-89286469ac99",
                  ],
                },
                xValue: -43,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-4",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "b16787e7-fde5-37bc-0c0b-eb9a1f40af81",
                  ],
                },
                xValue: -65,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 900,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-14",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                globalSwatchId: "b6b28498",
                rValue: 190,
                bValue: 171,
                gValue: 181,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1100,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-2",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5c5ad695-cecd-124e-e20d-72811e01d3b6",
                  ],
                },
                xValue: -1,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-3",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5cc8a449-ea35-4bd7-91bf-89286469ac99",
                  ],
                },
                xValue: -25,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 950,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-4",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "b16787e7-fde5-37bc-0c0b-eb9a1f40af81",
                  ],
                },
                xValue: -50,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1615216331827,
    },
    "a-8": {
      id: "a-8",
      title: "Home – Review 1 OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 900,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-22",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 950,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-2",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5c5ad695-cecd-124e-e20d-72811e01d3b6",
                  ],
                },
                xValue: -22,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-3",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5cc8a449-ea35-4bd7-91bf-89286469ac99",
                  ],
                },
                xValue: -43,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1100,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-4",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "b16787e7-fde5-37bc-0c0b-eb9a1f40af81",
                  ],
                },
                xValue: -65,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1615216331827,
    },
    a: {
      id: "a",
      title: "Loader",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6176a76d2bc7b23fed30bca7|a4f20c94-f77d-5612-6f88-8ba669c39129",
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6176a76d2bc7b23fed30bca7|a4f20c94-f77d-5612-6f88-8ba669c39129",
                },
                zValue: 720,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6176a76d2bc7b23fed30bca7|a4f20c94-f77d-5612-6f88-8ba669c39129",
                },
                yValue: 25,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 2000,
                target: {
                  id: "6176a76d2bc7b23fed30bca7|a4f20c94-f77d-5612-6f88-8ba669c39129",
                },
                yValue: -18,
                xUnit: "PX",
                yUnit: "vw",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 500,
                easing: "inOutExpo",
                duration: 2000,
                target: {
                  id: "6176a76d2bc7b23fed30bca7|a4f20c94-f77d-5612-6f88-8ba669c39129",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 500,
                easing: "inOutExpo",
                duration: 2000,
                target: {
                  id: "6176a76d2bc7b23fed30bca7|a4f20c94-f77d-5612-6f88-8ba669c39129",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "inOutExpo",
                duration: 1500,
                target: {
                  id: "6176a76d2bc7b23fed30bca7|a4f20c94-f77d-5612-6f88-8ba669c39129",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "VW",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1596721063757,
    },
    "a-37": {
      id: "a-37",
      title: "Menu – Open (Work)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["00c8eef9-f02e-3a59-946c-547317501ae8"],
                },
                value: "none",
              },
            },
            {
              id: "a-37-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f0",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-37-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-37-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu-title.m1",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1f4af507-2c66-9fcc-5ba3-d18cd46a8e20",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu-title.m2",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "fa6343c6-8479-73c4-a83c-a17df5cece17",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu-title.m3",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1422cefd-bd56-9629-3ac7-3b2df9c24cc6",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-8",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-37-n-9",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-37-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                value: "none",
              },
            },
            {
              id: "a-37-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-14",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".m-active.work",
                  selectorGuids: [
                    "f95b73fa-0635-a8cb-31d1-5ee1091f737c",
                    "d862e921-a76d-a4e7-cc32-5f38359836d0",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-37-n-15",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".m-active.work",
                  selectorGuids: [
                    "f95b73fa-0635-a8cb-31d1-5ee1091f737c",
                    "d862e921-a76d-a4e7-cc32-5f38359836d0",
                  ],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-37-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-img.dark",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "91fa1cb8-2b03-1c76-a96e-dff2beb7c2ec",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-37-n-17",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-37-n-18",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-img.dark",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "91fa1cb8-2b03-1c76-a96e-dff2beb7c2ec",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-37-n-19",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f0",
                },
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-37-n-20",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f1",
                },
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-37-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f1",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "rem",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-22",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["00c8eef9-f02e-3a59-946c-547317501ae8"],
                },
                value: "flex",
              },
            },
            {
              id: "a-37-n-23",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                globalSwatchId: "",
                rValue: 182,
                bValue: 36,
                gValue: 36,
                aValue: 1,
              },
            },
            {
              id: "a-37-n-24",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {},
                globalSwatchId: "",
                rValue: 228,
                bValue: 37,
                gValue: 140,
                aValue: 1,
              },
            },
            {
              id: "a-37-n-25",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-37-n-26",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                value: "block",
              },
            },
            {
              id: "a-37-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 1600,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                xValue: 101,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".nav-img.dark",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "91fa1cb8-2b03-1c76-a96e-dff2beb7c2ec",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-29",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f0",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-37-n-30",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f0",
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-37-n-31",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f1",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-37-n-32",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f1",
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-37-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f1",
                },
                xValue: 0,
                yValue: -0.3,
                xUnit: "rem",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-34",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 400,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-37-n-35",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-37-n-36",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "outExpo",
                duration: 1000,
                target: {
                  selector: ".menu-title.m1",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1f4af507-2c66-9fcc-5ba3-d18cd46a8e20",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-37",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1050,
                easing: "outExpo",
                duration: 1100,
                target: {
                  selector: ".menu-title.m2",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "fa6343c6-8479-73c4-a83c-a17df5cece17",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-38",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1100,
                easing: "outExpo",
                duration: 1200,
                target: {
                  selector: ".menu-title.m3",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1422cefd-bd56-9629-3ac7-3b2df9c24cc6",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-39",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1100,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-37-n-40",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1100,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-37-n-41",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 1100,
                easing: "inOutExpo",
                duration: 900,
                target: {
                  selector: ".m-active.work",
                  selectorGuids: [
                    "f95b73fa-0635-a8cb-31d1-5ee1091f737c",
                    "d862e921-a76d-a4e7-cc32-5f38359836d0",
                  ],
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: "a-37-n-42",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 1100,
                easing: "",
                duration: 0,
                target: {
                  selector: ".m-active.work",
                  selectorGuids: [
                    "f95b73fa-0635-a8cb-31d1-5ee1091f737c",
                    "d862e921-a76d-a4e7-cc32-5f38359836d0",
                  ],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1615410942553,
    },
    "a-38": {
      id: "a-38",
      title: "Menu - Close (Work)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {},
                globalSwatchId: "",
                rValue: 228,
                bValue: 37,
                gValue: 140,
                aValue: 1,
              },
            },
            {
              id: "a-38-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f1",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-38-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f1",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "rem",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b224e130bcc2|e5fc4e1e-b4fc-99f9-fd78-b54f8f9042f1",
                },
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-38-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 800,
                target: {
                  selector: ".m-active.work",
                  selectorGuids: [
                    "f95b73fa-0635-a8cb-31d1-5ee1091f737c",
                    "d862e921-a76d-a4e7-cc32-5f38359836d0",
                  ],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-38-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-38-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 1600,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-8",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-line.up",
                  selectorGuids: [
                    "fd88b548-fc6b-51e0-667d-c45719414c76",
                    "cc3e301a-e6cf-05a7-17a1-d3ed14c9d462",
                  ],
                },
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-38-n-9",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-line.up",
                  selectorGuids: [
                    "fd88b548-fc6b-51e0-667d-c45719414c76",
                    "cc3e301a-e6cf-05a7-17a1-d3ed14c9d462",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-38-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 750,
                target: {
                  selector: ".menu-title.m1",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1f4af507-2c66-9fcc-5ba3-d18cd46a8e20",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 750,
                target: {
                  selector: ".menu-title.m2",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "fa6343c6-8479-73c4-a83c-a17df5cece17",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 750,
                target: {
                  selector: ".menu-title.m3",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1422cefd-bd56-9629-3ac7-3b2df9c24cc6",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                yValue: 3,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-38-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1400,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".nav-img.dark",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "91fa1cb8-2b03-1c76-a96e-dff2beb7c2ec",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1400,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-17",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["00c8eef9-f02e-3a59-946c-547317501ae8"],
                },
                value: "none",
              },
            },
            {
              id: "a-38-n-18",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".m-active.work",
                  selectorGuids: [
                    "f95b73fa-0635-a8cb-31d1-5ee1091f737c",
                    "d862e921-a76d-a4e7-cc32-5f38359836d0",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-38-n-19",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                value: "block",
              },
            },
            {
              id: "a-38-n-20",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-38-n-21",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-img.dark",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "91fa1cb8-2b03-1c76-a96e-dff2beb7c2ec",
                  ],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1615410942553,
    },
    "a-11": {
      id: "a-11",
      title: "Black & White",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".item-img",
                  selectorGuids: ["349e469c-5744-5cf2-63b5-29a96ce1e9d6"],
                },
                filters: [
                  { type: "grayscale", filterId: "7d00", value: 0, unit: "%" },
                ],
              },
            },
            {
              id: "a-11-n-3",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-img",
                  selectorGuids: ["bb3ff506-967e-b130-1c63-ec8360806509"],
                },
                filters: [
                  { type: "grayscale", filterId: "7d00", value: 0, unit: "%" },
                ],
              },
            },
            {
              id: "a-11-n-5",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".postage.blend",
                  selectorGuids: [
                    "da98208f-d271-f134-5bd2-e710045dc8b9",
                    "49b2c88e-653f-03f0-f8c2-8e22343149d5",
                  ],
                },
                filters: [
                  { type: "grayscale", filterId: "7d00", value: 0, unit: "%" },
                ],
              },
            },
            {
              id: "a-11-n-7",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                filters: [
                  { type: "grayscale", filterId: "7d00", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-2",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".item-img",
                  selectorGuids: ["349e469c-5744-5cf2-63b5-29a96ce1e9d6"],
                },
                filters: [
                  {
                    type: "grayscale",
                    filterId: "2be9",
                    value: 100,
                    unit: "%",
                  },
                ],
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".h-img",
                  selectorGuids: ["bb3ff506-967e-b130-1c63-ec8360806509"],
                },
                filters: [
                  {
                    type: "grayscale",
                    filterId: "2be9",
                    value: 100,
                    unit: "%",
                  },
                ],
              },
            },
            {
              id: "a-11-n-6",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".postage.blend",
                  selectorGuids: [
                    "da98208f-d271-f134-5bd2-e710045dc8b9",
                    "49b2c88e-653f-03f0-f8c2-8e22343149d5",
                  ],
                },
                filters: [
                  {
                    type: "grayscale",
                    filterId: "2be9",
                    value: 100,
                    unit: "%",
                  },
                ],
              },
            },
            {
              id: "a-11-n-8",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {},
                filters: [
                  {
                    type: "grayscale",
                    filterId: "2be9",
                    value: 100,
                    unit: "%",
                  },
                ],
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1616772136293,
    },
    "a-12": {
      id: "a-12",
      title: "Black & White – OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n-5",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".item-img",
                  selectorGuids: ["349e469c-5744-5cf2-63b5-29a96ce1e9d6"],
                },
                filters: [
                  { type: "grayscale", filterId: "2be9", value: 0, unit: "%" },
                ],
              },
            },
            {
              id: "a-12-n-6",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".h-img",
                  selectorGuids: ["bb3ff506-967e-b130-1c63-ec8360806509"],
                },
                filters: [
                  { type: "grayscale", filterId: "2be9", value: 0, unit: "%" },
                ],
              },
            },
            {
              id: "a-12-n-7",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".postage.blend",
                  selectorGuids: [
                    "da98208f-d271-f134-5bd2-e710045dc8b9",
                    "49b2c88e-653f-03f0-f8c2-8e22343149d5",
                  ],
                },
                filters: [
                  { type: "grayscale", filterId: "2be9", value: 0, unit: "%" },
                ],
              },
            },
            {
              id: "a-12-n-8",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {},
                filters: [
                  { type: "grayscale", filterId: "2be9", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1616772136293,
    },
    "a-13": {
      id: "a-13",
      title: "Nav Trigger – Hover IN",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b23fed30bca7|af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b23fed30bca7|af8143f5-c4bd-7eb6-0bbf-06e371a2b30e",
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b23fed30bca7|af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                xValue: -0.2,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b23fed30bca7|af8143f5-c4bd-7eb6-0bbf-06e371a2b30e",
                },
                xValue: 0.2,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1625080189132,
    },
    "a-14": {
      id: "a-14",
      title: "Nav Trigger – Hover OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "6176a76d2bc7b23fed30bca7|af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".nav-line.up",
                  selectorGuids: [
                    "fd88b548-fc6b-51e0-667d-c45719414c76",
                    "cc3e301a-e6cf-05a7-17a1-d3ed14c9d462",
                  ],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1625080189132,
    },
    "a-15": {
      id: "a-15",
      title: "Work – Book Open (Color)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b224e130bcc2|Div Block 7",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b224e130bcc2|Div Block 7",
                },
                globalSwatchId: "9df29821",
                rValue: 216,
                bValue: 197,
                gValue: 207,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1627395652364,
    },
    "a-16": {
      id: "a-16",
      title: "Work – Book Close (Color)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b224e130bcc2|Div Block 7",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1627395652364,
    },
    "a-19": {
      id: "a-19",
      title: "Publications – Hover IN",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pub-numb__wrap",
                  selectorGuids: ["5eadb356-8991-2edf-28e6-56232374d2fd"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pub-trigger",
                  selectorGuids: ["0fbb5e8a-67a9-02b7-a707-2d75bd8af89e"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pub-numb__wrap",
                  selectorGuids: ["5eadb356-8991-2edf-28e6-56232374d2fd"],
                },
                yValue: -150,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pub-trigger",
                  selectorGuids: ["0fbb5e8a-67a9-02b7-a707-2d75bd8af89e"],
                },
                yValue: -150,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1628024485065,
    },
    "a-20": {
      id: "a-20",
      title: "Publications – Hover OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pub-numb__wrap",
                  selectorGuids: ["5eadb356-8991-2edf-28e6-56232374d2fd"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".pub-trigger",
                  selectorGuids: ["0fbb5e8a-67a9-02b7-a707-2d75bd8af89e"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1628024485065,
    },
    "a-21": {
      id: "a-21",
      title: "Work – Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6176a76d2bc7b224e130bcc2|01c3b9b3-2225-8bd9-db5a-ff78bdf1f51f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6176a76d2bc7b224e130bcc2|49a371da-49d0-6ee0-7317-1231c9c98268",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1400,
                target: {
                  id: "6176a76d2bc7b224e130bcc2|49a371da-49d0-6ee0-7317-1231c9c98268",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outQuad",
                duration: 1000,
                target: {
                  id: "6176a76d2bc7b224e130bcc2|01c3b9b3-2225-8bd9-db5a-ff78bdf1f51f",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1632947087982,
    },
    "a-27": {
      id: "a-27",
      title: "Home – Review 2 IN",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b23fed30bca7|bd11d9d3-1f38-30c7-f551-269d5b645351",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-27-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-2",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5c5ad695-cecd-124e-e20d-72811e01d3b6",
                  ],
                },
                xValue: -22,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-3",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5cc8a449-ea35-4bd7-91bf-89286469ac99",
                  ],
                },
                xValue: -43,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-4",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "b16787e7-fde5-37bc-0c0b-eb9a1f40af81",
                  ],
                },
                xValue: -65,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 900,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b23fed30bca7|bd11d9d3-1f38-30c7-f551-269d5b645351",
                },
                globalSwatchId: "b6b28498",
                rValue: 190,
                bValue: 171,
                gValue: 181,
                aValue: 1,
              },
            },
            {
              id: "a-27-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1100,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-2",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5c5ad695-cecd-124e-e20d-72811e01d3b6",
                  ],
                },
                xValue: -1,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-3",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5cc8a449-ea35-4bd7-91bf-89286469ac99",
                  ],
                },
                xValue: -25,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 950,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-4",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "b16787e7-fde5-37bc-0c0b-eb9a1f40af81",
                  ],
                },
                xValue: -50,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1615216331827,
    },
    "a-28": {
      id: "a-28",
      title: "Home – Review 2 OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 900,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b23fed30bca7|bd11d9d3-1f38-30c7-f551-269d5b645351",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 950,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-2",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5c5ad695-cecd-124e-e20d-72811e01d3b6",
                  ],
                },
                xValue: -22,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-3",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5cc8a449-ea35-4bd7-91bf-89286469ac99",
                  ],
                },
                xValue: -43,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1100,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-4",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "b16787e7-fde5-37bc-0c0b-eb9a1f40af81",
                  ],
                },
                xValue: -65,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1615216331827,
    },
    "a-29": {
      id: "a-29",
      title: "Home – Review 3 IN",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b23fed30bca7|66416161-20e0-82bc-15a2-33062ba7c6d0",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-29-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-2",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5c5ad695-cecd-124e-e20d-72811e01d3b6",
                  ],
                },
                xValue: -22,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw-block.s-3",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5cc8a449-ea35-4bd7-91bf-89286469ac99",
                  ],
                },
                xValue: -43,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-4",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "b16787e7-fde5-37bc-0c0b-eb9a1f40af81",
                  ],
                },
                xValue: -65,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 900,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b23fed30bca7|66416161-20e0-82bc-15a2-33062ba7c6d0",
                },
                globalSwatchId: "b6b28498",
                rValue: 190,
                bValue: 171,
                gValue: 181,
                aValue: 1,
              },
            },
            {
              id: "a-29-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1100,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-2",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5c5ad695-cecd-124e-e20d-72811e01d3b6",
                  ],
                },
                xValue: -22,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 950,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-4",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "b16787e7-fde5-37bc-0c0b-eb9a1f40af81",
                  ],
                },
                xValue: -45,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw-block.s-3",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5cc8a449-ea35-4bd7-91bf-89286469ac99",
                  ],
                },
                xValue: -43,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1615216331827,
    },
    "a-30": {
      id: "a-30",
      title: "Home – Review 3 OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 900,
                target: {
                  selector: ".aw-block.s-1",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "9a5fb7a7-8b2c-3455-ae0e-704952ea7195",
                  ],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b23fed30bca7|bd11d9d3-1f38-30c7-f551-269d5b645351",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-30-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 950,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-2",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5c5ad695-cecd-124e-e20d-72811e01d3b6",
                  ],
                },
                xValue: -22,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-3",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "5cc8a449-ea35-4bd7-91bf-89286469ac99",
                  ],
                },
                xValue: -43,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-30-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1100,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".aw-block.s-4",
                  selectorGuids: [
                    "3ee91967-d322-c7af-d1ff-92863dd9d785",
                    "b16787e7-fde5-37bc-0c0b-eb9a1f40af81",
                  ],
                },
                xValue: -65,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1615216331827,
    },
    "a-31": {
      id: "a-31",
      title: "Home – Review 4 IN",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b23fed30bca7|66416161-20e0-82bc-15a2-33062ba7c6d0",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b23fed30bca7|66416161-20e0-82bc-15a2-33062ba7c6d0",
                },
                globalSwatchId: "b6b28498",
                rValue: 190,
                bValue: 171,
                gValue: 181,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1615216331827,
    },
    "a-32": {
      id: "a-32",
      title: "Home – Review 4 OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n-2",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "6176a76d2bc7b23fed30bca7|bd11d9d3-1f38-30c7-f551-269d5b645351",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1615216331827,
    },
    "a-34": {
      id: "a-34",
      title: "Navbar – Appear",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: { id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b306" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1633427215500,
    },
    "a-33": {
      id: "a-33",
      title: "Navbar – Disappear",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 300,
                target: { id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b306" },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1633427215500,
    },
    "a-35": {
      id: "a-35",
      title: "CTA – Hover IN (Home)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-text",
                  selectorGuids: ["af9fb7b5-4b5a-8083-c7d0-c6641a9fab2a"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-35-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["02f7faa8-a0c2-9f1f-ee7f-97e3bdd85014"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-35-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-text",
                  selectorGuids: ["af9fb7b5-4b5a-8083-c7d0-c6641a9fab2a"],
                },
                xValue: 30,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-35-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["02f7faa8-a0c2-9f1f-ee7f-97e3bdd85014"],
                },
                xValue: 26,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1627396737404,
    },
    "a-18": {
      id: "a-18",
      title: "CTA – Hover OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-text",
                  selectorGuids: ["af9fb7b5-4b5a-8083-c7d0-c6641a9fab2a"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["02f7faa8-a0c2-9f1f-ee7f-97e3bdd85014"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1627396737404,
    },
    "a-22": {
      id: "a-22",
      title: "CTA – Hover IN (Work)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-text",
                  selectorGuids: ["af9fb7b5-4b5a-8083-c7d0-c6641a9fab2a"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["02f7faa8-a0c2-9f1f-ee7f-97e3bdd85014"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-22-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-text",
                  selectorGuids: ["af9fb7b5-4b5a-8083-c7d0-c6641a9fab2a"],
                },
                xValue: 30,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["02f7faa8-a0c2-9f1f-ee7f-97e3bdd85014"],
                },
                xValue: 27,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1627396737404,
    },
    "a-36": {
      id: "a-36",
      title: "CTA – Hover IN (Project)",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-text",
                  selectorGuids: ["af9fb7b5-4b5a-8083-c7d0-c6641a9fab2a"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-36-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["02f7faa8-a0c2-9f1f-ee7f-97e3bdd85014"],
                },
                xValue: 0,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cta-text",
                  selectorGuids: ["af9fb7b5-4b5a-8083-c7d0-c6641a9fab2a"],
                },
                xValue: 30,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-36-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["02f7faa8-a0c2-9f1f-ee7f-97e3bdd85014"],
                },
                xValue: 28,
                xUnit: "vw",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1627396737404,
    },
    "a-9": {
      id: "a-9",
      title: "Menu - Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["00c8eef9-f02e-3a59-946c-547317501ae8"],
                },
                value: "none",
              },
            },
            {
              id: "a-9-n-42",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b30e",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-38",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu-title.m1",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1f4af507-2c66-9fcc-5ba3-d18cd46a8e20",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu-title.m2",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "fa6343c6-8479-73c4-a83c-a17df5cece17",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu-title.m3",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1422cefd-bd56-9629-3ac7-3b2df9c24cc6",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-13",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-15",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                yValue: 2,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-21",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                value: "none",
              },
            },
            {
              id: "a-9-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-25",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".m-active",
                  selectorGuids: ["f95b73fa-0635-a8cb-31d1-5ee1091f737c"],
                },
                value: "none",
              },
            },
            {
              id: "a-9-n-26",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".m-active",
                  selectorGuids: ["f95b73fa-0635-a8cb-31d1-5ee1091f737c"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-9-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-img.dark",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "91fa1cb8-2b03-1c76-a96e-dff2beb7c2ec",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-33",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-9-n-31",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-img.dark",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "91fa1cb8-2b03-1c76-a96e-dff2beb7c2ec",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-9-n-40",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b30e",
                },
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-44",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-47",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "rem",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["00c8eef9-f02e-3a59-946c-547317501ae8"],
                },
                value: "flex",
              },
            },
            {
              id: "a-9-n-39",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {},
                globalSwatchId: "",
                rValue: 182,
                bValue: 36,
                gValue: 36,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-14",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {},
                globalSwatchId: "",
                rValue: 228,
                bValue: 37,
                gValue: 140,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-16",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-22",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                value: "block",
              },
            },
            {
              id: "a-9-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 1600,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                xValue: 101,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".nav-img.dark",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "91fa1cb8-2b03-1c76-a96e-dff2beb7c2ec",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-41",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b30e",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-43",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b30e",
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-45",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                globalSwatchId: "7f2c8ba3",
                rValue: 205,
                bValue: 190,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-9-n-46",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-48",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                xValue: 0,
                yValue: -0.3,
                xUnit: "rem",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-32",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 400,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-9-n-35",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "outExpo",
                duration: 1000,
                target: {
                  selector: ".menu-title.m1",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1f4af507-2c66-9fcc-5ba3-d18cd46a8e20",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1050,
                easing: "outExpo",
                duration: 1100,
                target: {
                  selector: ".menu-title.m2",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "fa6343c6-8479-73c4-a83c-a17df5cece17",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1100,
                easing: "outExpo",
                duration: 1200,
                target: {
                  selector: ".menu-title.m3",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1422cefd-bd56-9629-3ac7-3b2df9c24cc6",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1100,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1100,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-28",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 1100,
                easing: "inOutExpo",
                duration: 900,
                target: {
                  selector: ".m-active",
                  selectorGuids: ["f95b73fa-0635-a8cb-31d1-5ee1091f737c"],
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: "a-9-n-27",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 1100,
                easing: "",
                duration: 0,
                target: {
                  selector: ".m-active",
                  selectorGuids: ["f95b73fa-0635-a8cb-31d1-5ee1091f737c"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1615410942553,
    },
    "a-10": {
      id: "a-10",
      title: "Menu - Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n-16",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {},
                globalSwatchId: "",
                rValue: 228,
                bValue: 37,
                gValue: 140,
                aValue: 1,
              },
            },
            {
              id: "a-10-n-34",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b30e",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-10-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "rem",
                yUnit: "rem",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-31",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b30e",
                },
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-10-n-25",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 800,
                target: {
                  selector: ".m-active",
                  selectorGuids: ["f95b73fa-0635-a8cb-31d1-5ee1091f737c"],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: "a-10-n-17",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-10-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutExpo",
                duration: 1600,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-32",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                globalSwatchId: "806799d6",
                rValue: 29,
                bValue: 27,
                gValue: 29,
                aValue: 1,
              },
            },
            {
              id: "a-10-n-35",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "af8143f5-c4bd-7eb6-0bbf-06e371a2b311",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-10-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 750,
                target: {
                  selector: ".menu-title.m1",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1f4af507-2c66-9fcc-5ba3-d18cd46a8e20",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 750,
                target: {
                  selector: ".menu-title.m2",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "fa6343c6-8479-73c4-a83c-a17df5cece17",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outExpo",
                duration: 750,
                target: {
                  selector: ".menu-title.m3",
                  selectorGuids: [
                    "3063c0e6-2fbd-f5db-853e-49ecc56ffde4",
                    "1422cefd-bd56-9629-3ac7-3b2df9c24cc6",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                yValue: 3,
                xUnit: "PX",
                yUnit: "vh",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".f-block.li",
                  selectorGuids: [
                    "5a82e1b3-4b1c-adfd-db95-dda240492756",
                    "f4412c9d-0b5c-f1be-05a7-9567b8811618",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1400,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".nav-img.dark",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "91fa1cb8-2b03-1c76-a96e-dff2beb7c2ec",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-10-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1400,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu",
                  selectorGuids: ["00c8eef9-f02e-3a59-946c-547317501ae8"],
                },
                value: "none",
              },
            },
            {
              id: "a-10-n-26",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".m-active",
                  selectorGuids: ["f95b73fa-0635-a8cb-31d1-5ee1091f737c"],
                },
                value: "none",
              },
            },
            {
              id: "a-10-n-18",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu-side",
                  selectorGuids: ["b83960d3-591f-0c1b-f2a8-ba287a62f922"],
                },
                value: "block",
              },
            },
            {
              id: "a-10-n-28",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-img.light",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "35111b37-1f31-70eb-76c5-0d38c011fd76",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-10-n-30",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-img.dark",
                  selectorGuids: [
                    "91a96e53-dc49-7fdf-54b0-8e9f09024ebc",
                    "91fa1cb8-2b03-1c76-a96e-dff2beb7c2ec",
                  ],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1615410942553,
    },
    "a-39": {
      id: "a-39",
      title: "Project – Gallery Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".gallery",
                  selectorGuids: ["100161d3-caad-5dc9-9657-1cce145f726c"],
                },
                value: "none",
              },
            },
            {
              id: "a-39-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".gallery-overlay",
                  selectorGuids: ["cb17ccde-b190-8687-f019-cb65c2e8698f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".gallery-box",
                  selectorGuids: ["f18c6c53-a937-d3a1-088b-5e8ab3173ca5"],
                },
                xValue: 100,
                yValue: null,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".case-wrap",
                  selectorGuids: ["6afa9557-e89a-206e-df0b-794012f3a34b"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sidebar.f",
                  selectorGuids: [
                    "9271592d-3ede-8446-3104-8d54569cd23c",
                    "5061919d-1f53-c201-f4d1-cc243d896c5f",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".gallery",
                  selectorGuids: ["100161d3-caad-5dc9-9657-1cce145f726c"],
                },
                value: "flex",
              },
            },
            {
              id: "a-39-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 800,
                target: {
                  selector: ".gallery-box",
                  selectorGuids: ["f18c6c53-a937-d3a1-088b-5e8ab3173ca5"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 800,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".case-wrap",
                  selectorGuids: ["6afa9557-e89a-206e-df0b-794012f3a34b"],
                },
                xValue: -43,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 800,
                target: {
                  selector: ".sidebar.f",
                  selectorGuids: [
                    "9271592d-3ede-8446-3104-8d54569cd23c",
                    "5061919d-1f53-c201-f4d1-cc243d896c5f",
                  ],
                },
                xValue: -43,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-39-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outExpo",
                duration: 2000,
                target: {
                  selector: ".gallery-overlay",
                  selectorGuids: ["cb17ccde-b190-8687-f019-cb65c2e8698f"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1633704758923,
    },
    "a-40": {
      id: "a-40",
      title: "Project – Gallery Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-40-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 800,
                target: {
                  selector: ".gallery-box",
                  selectorGuids: ["f18c6c53-a937-d3a1-088b-5e8ab3173ca5"],
                },
                xValue: 100,
                yValue: null,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-40-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 800,
                target: {
                  selector: ".case-wrap",
                  selectorGuids: ["6afa9557-e89a-206e-df0b-794012f3a34b"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-40-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  selector: ".gallery-overlay",
                  selectorGuids: ["cb17ccde-b190-8687-f019-cb65c2e8698f"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-40-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 800,
                target: {
                  selector: ".sidebar.f",
                  selectorGuids: [
                    "9271592d-3ede-8446-3104-8d54569cd23c",
                    "5061919d-1f53-c201-f4d1-cc243d896c5f",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-40-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".gallery",
                  selectorGuids: ["100161d3-caad-5dc9-9657-1cce145f726c"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1633704758923,
    },
    "a-41": {
      id: "a-41",
      title: "About – Awards IN",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-41-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw1-waypoint",
                  selectorGuids: ["2f5e82be-e5d3-f670-0c2f-444b930cd4c9"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-41-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw-explore",
                  selectorGuids: ["7b86b684-a448-e70b-fc9b-40180adee68d"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-41-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw1-outer",
                  selectorGuids: ["d7d95bb2-7d1b-4862-12b9-fa84166a6177"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-41-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw1-outer",
                  selectorGuids: ["d7d95bb2-7d1b-4862-12b9-fa84166a6177"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-41-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw-explore",
                  selectorGuids: ["7b86b684-a448-e70b-fc9b-40180adee68d"],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-41-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw1-waypoint",
                  selectorGuids: ["2f5e82be-e5d3-f670-0c2f-444b930cd4c9"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1633946522033,
    },
    "a-42": {
      id: "a-42",
      title: "About – Awards OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-42-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw1-outer",
                  selectorGuids: ["d7d95bb2-7d1b-4862-12b9-fa84166a6177"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-42-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw-explore",
                  selectorGuids: ["7b86b684-a448-e70b-fc9b-40180adee68d"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-42-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCubic",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".aw1-waypoint",
                  selectorGuids: ["2f5e82be-e5d3-f670-0c2f-444b930cd4c9"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1633946522033,
    },
    "a-26": {
      id: "a-26",
      title: "Project – Navbar SHOW",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav.default",
                  selectorGuids: [
                    "57162c0f-5182-fc17-b48f-4c1c596f54d9",
                    "8183ca5b-c777-4e51-2036-5d640eb59595",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-26-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav.default",
                  selectorGuids: [
                    "57162c0f-5182-fc17-b48f-4c1c596f54d9",
                    "8183ca5b-c777-4e51-2036-5d640eb59595",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav.default",
                  selectorGuids: [
                    "57162c0f-5182-fc17-b48f-4c1c596f54d9",
                    "8183ca5b-c777-4e51-2036-5d640eb59595",
                  ],
                },
                value: "block",
              },
            },
            {
              id: "a-26-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 500,
                target: {
                  selector: ".nav.default",
                  selectorGuids: [
                    "57162c0f-5182-fc17-b48f-4c1c596f54d9",
                    "8183ca5b-c777-4e51-2036-5d640eb59595",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1633370625613,
    },
    "a-43": {
      id: "a-43",
      title: "Project – Navbar HIDE",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-43-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuad",
                duration: 400,
                target: {
                  selector: ".nav.default",
                  selectorGuids: [
                    "57162c0f-5182-fc17-b48f-4c1c596f54d9",
                    "8183ca5b-c777-4e51-2036-5d640eb59595",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-43-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav.default",
                  selectorGuids: [
                    "57162c0f-5182-fc17-b48f-4c1c596f54d9",
                    "8183ca5b-c777-4e51-2036-5d640eb59595",
                  ],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1633370625613,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
