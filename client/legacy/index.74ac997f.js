import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_slots, f as space, g as element, t as text, q as query_selector_all, h as detach_dev, j as claim_space, k as claim_element, l as children, m as claim_text, n as attr_dev, o as add_location, p as insert_dev, r as append_dev, u as noop } from './client.265c37c1.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\index.svelte";

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var figure;
  var img;
  var img_src_value;
  var t3;
  var figcaption;
  var t4;
  var t5;
  var p;
  var strong;
  var t6;
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("Great success!");
      t2 = space();
      figure = element("figure");
      img = element("img");
      t3 = space();
      figcaption = element("figcaption");
      t4 = text("Have fun with Sapper!");
      t5 = space();
      p = element("p");
      strong = element("strong");
      t6 = text("Try editing this file (src/routes/index.svelte) to test live reloading.");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-oh6yg0\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Great success!");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      figure = claim_element(nodes, "FIGURE", {
        class: true
      });
      var figure_nodes = children(figure);
      img = claim_element(figure_nodes, "IMG", {
        alt: true,
        src: true,
        class: true
      });
      t3 = claim_space(figure_nodes);
      figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
      var figcaption_nodes = children(figcaption);
      t4 = claim_text(figcaption_nodes, "Have fun with Sapper!");
      figcaption_nodes.forEach(detach_dev);
      figure_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      strong = claim_element(p_nodes, "STRONG", {});
      var strong_nodes = children(strong);
      t6 = claim_text(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
      strong_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Sapper project template";
      attr_dev(h1, "class", "svelte-1kk9opm");
      add_location(h1, file, 38, 0, 444);
      attr_dev(img, "alt", "Success Kid");
      if (img.src !== (img_src_value = "successkid.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "svelte-1kk9opm");
      add_location(img, file, 41, 1, 479);
      add_location(figcaption, file, 42, 1, 525);
      attr_dev(figure, "class", "svelte-1kk9opm");
      add_location(figure, file, 40, 0, 469);
      add_location(strong, file, 45, 3, 586);
      attr_dev(p, "class", "svelte-1kk9opm");
      add_location(p, file, 45, 0, 583);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, figure, anchor);
      append_dev(figure, img);
      append_dev(figure, t3);
      append_dev(figure, figcaption);
      append_dev(figcaption, t4);
      insert_dev(target, t5, anchor);
      insert_dev(target, p, anchor);
      append_dev(p, strong);
      append_dev(strong, t6);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(figure);
      if (detaching) detach_dev(t5);
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", $$slots, []);
  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
