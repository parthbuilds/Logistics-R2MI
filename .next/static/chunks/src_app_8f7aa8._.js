(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_8f7aa8._.js", {

"[project]/src/app/components/Home/header/header.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "back": "header-module__nI8dKq__back",
  "cancel": "header-module__nI8dKq__cancel",
  "cross": "header-module__nI8dKq__cross",
  "flipContainer": "header-module__nI8dKq__flipContainer",
  "front": "header-module__nI8dKq__front",
  "hamburger": "header-module__nI8dKq__hamburger",
  "header": "header-module__nI8dKq__header",
  "logo": "header-module__nI8dKq__logo",
  "logoImage": "header-module__nI8dKq__logoImage",
  "menu-open": "header-module__nI8dKq__menu-open",
  "nav": "header-module__nI8dKq__nav",
  "navLinks": "header-module__nI8dKq__navLinks",
  "no-scroll": "header-module__nI8dKq__no-scroll",
  "open": "header-module__nI8dKq__open",
});
}}),
"[project]/src/app/components/Home/header/header.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/header/header.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const Header = ({ color = "white" })=>{
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleMenu = ()=>{
        setMenuOpen((prev)=>!prev);
        if (!menuOpen) {
            document.body.classList.add("no-scroll"); // Disable Scroll
        } else {
            document.body.classList.remove("no-scroll"); // Enable Scroll
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const lenisInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "Header.useEffect": (t)=>t
                }["Header.useEffect"],
                smoothWheel: true
            });
            function raf(time) {
                lenisInstance.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            return ({
                "Header.useEffect": ()=>{
                    lenisInstance.destroy();
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    if (headerRef.current && !menuOpen) {
                        const scrollY = window.scrollY;
                        headerRef.current.style.transform = `translateY(-${scrollY * 0.3}px)`;
                    }
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Header.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        menuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flipContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].front}`,
                            src: "/images/RouteToMarket Media India Pvt Ltd.png",
                            alt: "Front Logo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].back}`,
                            src: "/images/RTX Logo.svg",
                            alt: "Back Logo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/header/header.js",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/header/header.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburger,
                onClick: toggleMenu,
                children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                    size: 35,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cross
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/header/header.js",
                    lineNumber: 64,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                    size: 35
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/header/header.js",
                    lineNumber: 64,
                    columnNumber: 66
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/header/header.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLinks,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                style: {
                                    color
                                },
                                children: `Home`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/header/header.js",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "Services",
                                style: {
                                    color
                                },
                                children: `Services`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/header/header.js",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "About",
                                style: {
                                    color
                                },
                                children: `About`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/header/header.js",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "Contact",
                                style: {
                                    color
                                },
                                children: `Contact`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/header/header.js",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/header/header.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/header/header.js",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Home/header/header.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
};
_s(Header, "9f4Bp8wDZ2IINuoR8/al1fco1mY=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_refresh__.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Services/verticalSlider/verticalSlider.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "Icon_icon___Kgo7": "verticalSlider-module__ZXI4SW__Icon_icon___Kgo7",
  "ServiceCarousel_carouselWrapper__RpN_d": "verticalSlider-module__ZXI4SW__ServiceCarousel_carouselWrapper__RpN_d",
  "ServiceCarousel_carousel__container__cu6pT": "verticalSlider-module__ZXI4SW__ServiceCarousel_carousel__container__cu6pT",
  "ServiceCarousel_carousel__item__86bjI": "verticalSlider-module__ZXI4SW__ServiceCarousel_carousel__item__86bjI",
  "ServiceCarousel_carousel__vmnkx": "verticalSlider-module__ZXI4SW__ServiceCarousel_carousel__vmnkx",
  "ServiceCarousel_dotWrapper__Y19Fs": "verticalSlider-module__ZXI4SW__ServiceCarousel_dotWrapper__Y19Fs",
  "ServiceCarousel_dot___ME3W": "verticalSlider-module__ZXI4SW__ServiceCarousel_dot___ME3W",
  "ServiceCarousel_indicatorButtonLine__nRrTp": "verticalSlider-module__ZXI4SW__ServiceCarousel_indicatorButtonLine__nRrTp",
  "ServiceCarousel_indicatorWrapper__Qdy_O": "verticalSlider-module__ZXI4SW__ServiceCarousel_indicatorWrapper__Qdy_O",
  "ServiceCarousel_items-1__vWJy4": "verticalSlider-module__ZXI4SW__ServiceCarousel_items-1__vWJy4",
  "ServiceCarousel_items-2__jd8iz": "verticalSlider-module__ZXI4SW__ServiceCarousel_items-2__jd8iz",
  "ServiceCarousel_items-3__IFt4_": "verticalSlider-module__ZXI4SW__ServiceCarousel_items-3__IFt4_",
  "ServiceCarousel_items-4__qc0tB": "verticalSlider-module__ZXI4SW__ServiceCarousel_items-4__qc0tB",
  "ServiceCarousel_items-5__IrBhx": "verticalSlider-module__ZXI4SW__ServiceCarousel_items-5__IrBhx",
  "ServiceCarousel_nonActive__frmcN": "verticalSlider-module__ZXI4SW__ServiceCarousel_nonActive__frmcN",
  "ServiceCarousel_o-site-container__pU_6c": "verticalSlider-module__ZXI4SW__ServiceCarousel_o-site-container__pU_6c",
  "ServiceCarousel_selected__yVkxm": "verticalSlider-module__ZXI4SW__ServiceCarousel_selected__yVkxm",
  "ServiceSlider_MoveUpDown__0jNAW": "verticalSlider-module__ZXI4SW__ServiceSlider_MoveUpDown__0jNAW",
  "ServiceSlider_active___VK5E": "verticalSlider-module__ZXI4SW__ServiceSlider_active___VK5E",
  "ServiceSlider_barging__TeGsz": "verticalSlider-module__ZXI4SW__ServiceSlider_barging__TeGsz",
  "ServiceSlider_button__vaKTa": "verticalSlider-module__ZXI4SW__ServiceSlider_button__vaKTa",
  "ServiceSlider_container__ZYKXg": "verticalSlider-module__ZXI4SW__ServiceSlider_container__ZYKXg",
  "ServiceSlider_dotWrapper__gbWrp": "verticalSlider-module__ZXI4SW__ServiceSlider_dotWrapper__gbWrp",
  "ServiceSlider_dot__mQNgg": "verticalSlider-module__ZXI4SW__ServiceSlider_dot__mQNgg",
  "ServiceSlider_imageFallback__O_KME": "verticalSlider-module__ZXI4SW__ServiceSlider_imageFallback__O_KME",
  "ServiceSlider_imageWrapper__mcELX": "verticalSlider-module__ZXI4SW__ServiceSlider_imageWrapper__mcELX",
  "ServiceSlider_image__zrDy4": "verticalSlider-module__ZXI4SW__ServiceSlider_image__zrDy4",
  "ServiceSlider_katamaran__WLSIj": "verticalSlider-module__ZXI4SW__ServiceSlider_katamaran__WLSIj",
  "ServiceSlider_o-site-container__xDkKs": "verticalSlider-module__ZXI4SW__ServiceSlider_o-site-container__xDkKs",
  "ServiceSlider_plane__KRDJf": "verticalSlider-module__ZXI4SW__ServiceSlider_plane__KRDJf",
  "ServiceSlider_rail__4UP_q": "verticalSlider-module__ZXI4SW__ServiceSlider_rail__4UP_q",
  "ServiceSlider_section__tsvy4": "verticalSlider-module__ZXI4SW__ServiceSlider_section__tsvy4",
  "ServiceSlider_ship__Le7Oe": "verticalSlider-module__ZXI4SW__ServiceSlider_ship__Le7Oe",
  "ServiceSlider_slideInfo__ZrRFv": "verticalSlider-module__ZXI4SW__ServiceSlider_slideInfo__ZrRFv",
  "ServiceSlider_slideTitle__mTYcM": "verticalSlider-module__ZXI4SW__ServiceSlider_slideTitle__mTYcM",
  "ServiceSlider_slideWrapper__tEDks": "verticalSlider-module__ZXI4SW__ServiceSlider_slideWrapper__tEDks",
  "ServiceSlider_slide__sWHQ6": "verticalSlider-module__ZXI4SW__ServiceSlider_slide__sWHQ6",
  "ServiceSlider_textWapper__CgzsO": "verticalSlider-module__ZXI4SW__ServiceSlider_textWapper__CgzsO",
  "ServiceSlider_truck__ZrDqb": "verticalSlider-module__ZXI4SW__ServiceSlider_truck__ZrDqb",
  "gold": "verticalSlider-module__ZXI4SW__gold",
});
}}),
"[project]/src/app/components/Services/verticalSlider/verticalSlider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ServiceSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Services/verticalSlider/verticalSlider.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ServiceSlider() {
    _s();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const data = [
        {
            title: 'Your Cargo Across the Ocean',
            description: 'At Route To Export, ocean freight is a cornerstone of our services. Through exclusive partnerships with global and local networks, we ensure smooth, hassle-free shipping tailored to your needs.',
            image: '/images/services/Ship.png',
            alt: 'Service 1 Image'
        },
        {
            title: 'Your Cargo Flying in the Air',
            description: 'Through strong partnerships with leading airlines, we offer competitive rates and flexible scheduling for all air freight shipments. Our expert team handles customs clearance and paperwork, ensuring fast and seamless deliveries. We also provide specialized solutions such as on-board courier (OBC) and aircraft-on-ground (AOG) services. For chartering, we offer both full and partial options, tailored to meet your specific requirements.',
            image: '/images/services/baloon_rocket.png',
            alt: 'Service 2 Image'
        },
        {
            title: 'Service Your Cargo on the Road',
            description: 'As a leading export company in India, we collaborate with trusted road transport providers to deliver comprehensive freight solutions. From full truckload (FTL) and less-than-truckload (LTL) to seamless multimodal transport, we ensure efficient shipping by combining road freight with other transport modes for global deliveries.',
            image: '/images/services/truck.png',
            alt: 'Service 3 Image'
        },
        {
            title: 'Your Cargo on rails',
            description: 'Rail transport is the future of efficient, sustainable, and innovative shipping. With cost-effective solutions, reduced carbon footprints, and seamless connectivity, we ensure your cargo moves reliably across borders. Discover how our rail freight services provide a secure, timely, and eco-friendly way to transport goods worldwide.',
            image: '/images/services/train.png',
            alt: 'Service 4 Image'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceSlider.useEffect": ()=>{
            const slider = sliderRef.current;
            const container = containerRef.current;
            if (!slider || !container) return;
            const slides = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_slide__sWHQ6}`);
            const slideWidth = slides[0].offsetWidth;
            const totalWidth = slideWidth * slides.length;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(slider, {
                width: totalWidth
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(slider, {
                x: {
                    "ServiceSlider.useEffect": ()=>-(totalWidth - window.innerWidth)
                }["ServiceSlider.useEffect"],
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: true,
                    end: {
                        "ServiceSlider.useEffect": ()=>`+=${totalWidth - window.innerWidth}`
                    }["ServiceSlider.useEffect"],
                    invalidateOnRefresh: true
                }
            });
        }
    }["ServiceSlider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_section__tsvy4,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_container__ZYKXg,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sliderRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_slideWrapper__tEDks,
                children: data.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_slide__sWHQ6,
                        "data-index": index + 1,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_textWapper__CgzsO,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_slideTitle__mTYcM,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
                                            lineNumber: 72,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
                                        lineNumber: 71,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_slideInfo__ZrRFv,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: service.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
                                            lineNumber: 75,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
                                        lineNumber: 74,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
                                lineNumber: 70,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_imageWrapper__mcELX,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: service.alt,
                                    loading: "lazy",
                                    width: "920",
                                    height: "803",
                                    decoding: "async",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_image__zrDy4} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$verticalSlider$2f$verticalSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ServiceSlider_imageFallback__O_KME}`,
                                    src: service.image
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
                                    lineNumber: 79,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
                                lineNumber: 78,
                                columnNumber: 29
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
                        lineNumber: 69,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
                lineNumber: 67,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
            lineNumber: 66,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Services/verticalSlider/verticalSlider.js",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(ServiceSlider, "oMIwExMpoYhdUIaWXNG77cdPUfQ=");
_c = ServiceSlider;
var _c;
__turbopack_refresh__.register(_c, "ServiceSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Services/Stepper_section/stepperSection.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "BlogCarousel_emblabutton__t5aLE": "stepperSection-module__wI8TlG__BlogCarousel_emblabutton__t5aLE",
  "BlogCarousel_prev__vAE6w": "stepperSection-module__wI8TlG__BlogCarousel_prev__vAE6w",
  "Icon_icon___Kgo7": "stepperSection-module__wI8TlG__Icon_icon___Kgo7",
  "StepperCarousel_active__T0jkw": "stepperSection-module__wI8TlG__StepperCarousel_active__T0jkw",
  "StepperCarousel_carouselButtonWrapper__t20mg": "stepperSection-module__wI8TlG__StepperCarousel_carouselButtonWrapper__t20mg",
  "StepperCarousel_carouselContainer__Q0BAq": "stepperSection-module__wI8TlG__StepperCarousel_carouselContainer__Q0BAq",
  "StepperCarousel_carouselHeader__6jOqV": "stepperSection-module__wI8TlG__StepperCarousel_carouselHeader__6jOqV",
  "StepperCarousel_carouselTitle__iHkFC": "stepperSection-module__wI8TlG__StepperCarousel_carouselTitle__iHkFC",
  "StepperCarousel_carouselWrapper__v0h6t": "stepperSection-module__wI8TlG__StepperCarousel_carouselWrapper__v0h6t",
  "StepperCarousel_carousel__container__3P3yF": "stepperSection-module__wI8TlG__StepperCarousel_carousel__container__3P3yF",
  "StepperCarousel_carousel__item__cYjQb": "stepperSection-module__wI8TlG__StepperCarousel_carousel__item__cYjQb",
  "StepperCarousel_carousel__qtKCt": "stepperSection-module__wI8TlG__StepperCarousel_carousel__qtKCt",
  "StepperCarousel_dotWrapper__dBBXM": "stepperSection-module__wI8TlG__StepperCarousel_dotWrapper__dBBXM",
  "StepperCarousel_dot__Af1eM": "stepperSection-module__wI8TlG__StepperCarousel_dot__Af1eM",
  "StepperCarousel_emblabutton__V3jp7": "stepperSection-module__wI8TlG__StepperCarousel_emblabutton__V3jp7",
  "StepperCarousel_indicatorButtonLine__8_rkL": "stepperSection-module__wI8TlG__StepperCarousel_indicatorButtonLine__8_rkL",
  "StepperCarousel_indicatorButton__K50NX": "stepperSection-module__wI8TlG__StepperCarousel_indicatorButton__K50NX",
  "StepperCarousel_indicatorWrapper__iqtoK": "stepperSection-module__wI8TlG__StepperCarousel_indicatorWrapper__iqtoK",
  "StepperCarousel_items-1__XEvyV": "stepperSection-module__wI8TlG__StepperCarousel_items-1__XEvyV",
  "StepperCarousel_items-2__CrqY0": "stepperSection-module__wI8TlG__StepperCarousel_items-2__CrqY0",
  "StepperCarousel_items-3__7O2vR": "stepperSection-module__wI8TlG__StepperCarousel_items-3__7O2vR",
  "StepperCarousel_items-4__aQ7Ni": "stepperSection-module__wI8TlG__StepperCarousel_items-4__aQ7Ni",
  "StepperCarousel_items-5__Tuo_e": "stepperSection-module__wI8TlG__StepperCarousel_items-5__Tuo_e",
  "StepperCarousel_noTitle__R7_oT": "stepperSection-module__wI8TlG__StepperCarousel_noTitle__R7_oT",
  "StepperCarousel_nonActive__HUD_1": "stepperSection-module__wI8TlG__StepperCarousel_nonActive__HUD_1",
  "StepperCarousel_o-site-container__3947T": "stepperSection-module__wI8TlG__StepperCarousel_o-site-container__3947T",
  "StepperCarousel_prev__cBg79": "stepperSection-module__wI8TlG__StepperCarousel_prev__cBg79",
  "StepperCarousel_selected__TZmll": "stepperSection-module__wI8TlG__StepperCarousel_selected__TZmll",
  "Stepper_containerTitleWrapper___TcKF": "stepperSection-module__wI8TlG__Stepper_containerTitleWrapper___TcKF",
  "Stepper_container__oFfO_": "stepperSection-module__wI8TlG__Stepper_container__oFfO_",
  "Stepper_icon__LMtYi": "stepperSection-module__wI8TlG__Stepper_icon__LMtYi",
  "Stepper_info__udxYT": "stepperSection-module__wI8TlG__Stepper_info__udxYT",
  "Stepper_itemIcon__6trkX": "stepperSection-module__wI8TlG__Stepper_itemIcon__6trkX",
  "Stepper_item____1Dn": "stepperSection-module__wI8TlG__Stepper_item____1Dn",
  "Stepper_number__Syhmc": "stepperSection-module__wI8TlG__Stepper_number__Syhmc",
  "Stepper_o-site-container__AOcx_": "stepperSection-module__wI8TlG__Stepper_o-site-container__AOcx_",
  "Stepper_section__s_Und": "stepperSection-module__wI8TlG__Stepper_section__s_Und",
  "Stepper_stepperWrapper__Y2Scs": "stepperSection-module__wI8TlG__Stepper_stepperWrapper__Y2Scs",
  "Stepper_titleWrapper__oATRq": "stepperSection-module__wI8TlG__Stepper_titleWrapper__oATRq",
  "Stepper_title__dXCXT": "stepperSection-module__wI8TlG__Stepper_title__dXCXT",
  "gold": "stepperSection-module__wI8TlG__gold",
  "icon": "stepperSection-module__wI8TlG__icon",
});
}}),
"[project]/src/app/components/Services/Stepper_section/stepperSection.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Services/Stepper_section/stepperSection.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const data = [
    {
        id: '01',
        title: 'Multimodal Transport Services',
        description: 'Getting your shipment to its final destination often requires a combination of transport modes. That’s why we provide seamless multimodal solutions, ensuring smooth and efficient deliveries across the globe. By integrating air, sea, road, and rail, we optimize routes for speed, cost-effectiveness, and reliability.'
    },
    {
        id: '02',
        title: 'Tender & Procurement Services',
        description: 'Our team provides expert support for tenders, offering 3PL, 4PL, or direct account (BCO) solutions tailored to your needs. With a structured and customized approach, we assist in budgeting for maritime transport, coordinating supplier meetings, managing data, and setting negotiation timelines. From initial planning to final carrier selection and evaluation, we ensure a smooth and efficient procurement process.'
    },
    {
        id: '03',
        title: 'In-House Customs',
        description: 'Our expert Fast Customs team offers tailored consultancy to streamline your customs processes for maximum efficiency and cost savings. Beyond import, export, and transit management, we handle fiscal representation, inspections, cargo checks, surveys, and more to ensure a seamless customs experience.'
    },
    {
        id: '04',
        title: 'Handling & Storage',
        description: 'We collaborate with a network of internal and external partners, providing unbiased guidance on handling and storage solutions. As part of our commitment to reliable exports, we operate strategically located warehouses worldwide. This enables us to deliver end-to-end solutions, ensuring efficient storage and smooth supply chain management for our customers.'
    }
];
const StepperSection = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const totalSlides = data.length;
    const handleNext = ()=>{
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const handlePrev = ()=>{
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const Final = 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Stepper_section__s_Und,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Stepper_container__oFfO_,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Stepper_containerTitleWrapper___TcKF,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "More Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                    lineNumber: 49,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Stepper_stepperWrapper__Y2Scs,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].StepperCarousel_carouselContainer__Q0BAq,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].StepperCarousel_carouselButtonWrapper__t20mg,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_emblabutton__t5aLE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_prev__vAE6w}`,
                                        "aria-label": "carouselbutton previous",
                                        onClick: handlePrev,
                                        disabled: currentIndex === 0,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} icon`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "currentColor",
                                                        fillRule: "evenodd",
                                                        d: "M11.674 1.076a.6.6 0 0 0-.848 0l-10.5 10.5a.6.6 0 0 0 0 .848l10.5 10.5a.6.6 0 0 0 .848-.848L1.6 12l10.074-10.074a.6.6 0 0 0 0-.848Z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                        lineNumber: 63,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "currentColor",
                                                        fillRule: "evenodd",
                                                        d: "M23.85 12a.6.6 0 0 0-.6-.6H1.85a.6.6 0 0 0 0 1.2h21.5a.6.6 0 0 0 .6-.6Z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                        lineNumber: 64,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                lineNumber: 62,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                            lineNumber: 61,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                        lineNumber: 55,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_emblabutton__t5aLE,
                                        "aria-label": "carouselbutton next",
                                        onClick: handleNext,
                                        disabled: currentIndex === Final - 1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} icon`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "currentColor",
                                                        fillRule: "evenodd",
                                                        d: "M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                        lineNumber: 76,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "currentColor",
                                                        fillRule: "evenodd",
                                                        d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                        lineNumber: 77,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                lineNumber: 75,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                            lineNumber: 74,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                        lineNumber: 68,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                lineNumber: 54,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].StepperCarousel_carouselWrapper__v0h6t,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].StepperCarousel_carousel__qtKCt,
                                    style: {
                                        transform: `translateX(-${currentIndex * 100}%)`,
                                        transition: 'transform 0.5s ease-in-out',
                                        display: 'flex'
                                    },
                                    children: data.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Stepper_item____1Dn,
                                            style: {
                                                minWidth: '34%'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Stepper_itemIcon__6trkX,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/Logo.svg",
                                                        alt: "",
                                                        height: "40px",
                                                        width: "40px"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                        lineNumber: 95,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                    lineNumber: 94,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Stepper_titleWrapper__oATRq,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Stepper_number__Syhmc,
                                                            children: item.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                            lineNumber: 98,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Stepper_title__dXCXT,
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                            lineNumber: 99,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                    lineNumber: 97,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Services$2f$Stepper_section$2f$stepperSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Stepper_info__udxYT,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                        lineNumber: 102,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                                    lineNumber: 101,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                            lineNumber: 93,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
            lineNumber: 48,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Services/Stepper_section/stepperSection.js",
        lineNumber: 47,
        columnNumber: 9
    }, this);
};
_s(StepperSection, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c = StepperSection;
const __TURBOPACK__default__export__ = StepperSection;
var _c;
__turbopack_refresh__.register(_c, "StepperSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/CrossLink/crosslink.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "Button_anti-bob__G1XfJ": "crosslink-module__3UdhZW__Button_anti-bob__G1XfJ",
  "Button_back___SPoE": "crosslink-module__3UdhZW__Button_back___SPoE",
  "Button_bob__3_pUe": "crosslink-module__3UdhZW__Button_bob__3_pUe",
  "Button_button__T6zT9": "crosslink-module__3UdhZW__Button_button__T6zT9",
  "Button_darkmode__ozqJQ": "crosslink-module__3UdhZW__Button_darkmode__ozqJQ",
  "Button_goldDark__LAUet": "crosslink-module__3UdhZW__Button_goldDark__LAUet",
  "Button_goldLight__ZvTNn": "crosslink-module__3UdhZW__Button_goldLight__ZvTNn",
  "Button_iconButton__fsKFn": "crosslink-module__3UdhZW__Button_iconButton__fsKFn",
  "Button_icon__Rt_Hz": "crosslink-module__3UdhZW__Button_icon__Rt_Hz",
  "Button_o-site-container__ks40o": "crosslink-module__3UdhZW__Button_o-site-container__ks40o",
  "Button_primary__b__QL": "crosslink-module__3UdhZW__Button_primary__b__QL",
  "Button_secondary__8ZLTI": "crosslink-module__3UdhZW__Button_secondary__8ZLTI",
  "Button_tertiary__JUfBS": "crosslink-module__3UdhZW__Button_tertiary__JUfBS",
  "Button_titleWrapper__Glw9g": "crosslink-module__3UdhZW__Button_titleWrapper__Glw9g",
  "Button_vertical__Xt6Qr": "crosslink-module__3UdhZW__Button_vertical__Xt6Qr",
  "CrosslinkBlock_backgroundImage__ggk5B": "crosslink-module__3UdhZW__CrosslinkBlock_backgroundImage__ggk5B",
  "CrosslinkBlock_background__PQGMI": "crosslink-module__3UdhZW__CrosslinkBlock_background__PQGMI",
  "CrosslinkBlock_button___D_2N": "crosslink-module__3UdhZW__CrosslinkBlock_button___D_2N",
  "CrosslinkBlock_container__HKHjr": "crosslink-module__3UdhZW__CrosslinkBlock_container__HKHjr",
  "CrosslinkBlock_crosslinkCard__SCoir": "crosslink-module__3UdhZW__CrosslinkBlock_crosslinkCard__SCoir",
  "CrosslinkBlock_icon__FwiZm": "crosslink-module__3UdhZW__CrosslinkBlock_icon__FwiZm",
  "CrosslinkBlock_info__hYdqG": "crosslink-module__3UdhZW__CrosslinkBlock_info__hYdqG",
  "CrosslinkBlock_link__H620e": "crosslink-module__3UdhZW__CrosslinkBlock_link__H620e",
  "CrosslinkBlock_o-site-container__eHF4n": "crosslink-module__3UdhZW__CrosslinkBlock_o-site-container__eHF4n",
  "CrosslinkBlock_section__LjJPm": "crosslink-module__3UdhZW__CrosslinkBlock_section__LjJPm",
  "CrosslinkBlock_title__hlDQO": "crosslink-module__3UdhZW__CrosslinkBlock_title__hlDQO",
  "Icon_icon___Kgo7": "crosslink-module__3UdhZW__Icon_icon___Kgo7",
  "darkmode": "crosslink-module__3UdhZW__darkmode",
  "gold": "crosslink-module__3UdhZW__gold",
  "icon": "crosslink-module__3UdhZW__icon",
});
}}),
"[project]/src/app/utils/Tilteffect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTiltEffect": (()=>useTiltEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
function throttle(func, delay) {
    let lastCall = 0;
    return (...args)=>{
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        func(...args);
    };
}
const useTiltEffect = ()=>{
    _s();
    const [rotate, setRotate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const onMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(throttle({
        "useTiltEffect.useCallback[onMouseMove]": (e)=>{
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (centerY - y) / 50; // Adjust for intensity
            const rotateY = (x - centerX) / 50;
            setRotate({
                x: rotateX,
                y: rotateY
            });
        }
    }["useTiltEffect.useCallback[onMouseMove]"], 50), [
        setRotate
    ]);
    const onMouseLeave = ()=>{
        setRotate({
            x: 0,
            y: 0
        });
    };
    return {
        rotate,
        onMouseMove,
        onMouseLeave
    };
};
_s(useTiltEffect, "iyHvH5kS8wsLdMt/Xb+/KHn4NXE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/CrossLink/crossLink.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/CrossLink/crosslink.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$Tilteffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/Tilteffect.js [app-client] (ecmascript)"); // Import the tilt effect hook
'use client';
;
;
;
;
const Crosslink = ()=>{
    var _s = __turbopack_refresh__.signature();
    const buttontext = [
        "#2086ae",
        "#fff"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_section__LjJPm,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_container__HKHjr,
            children: [
                {
                    title: "COMMODITIES",
                    subtitle: "What We Export",
                    buttonLabel: "Commodities",
                    link: "/Services"
                },
                {
                    title: "OUR SERVICES",
                    subtitle: "About Us",
                    buttonLabel: "About Us",
                    link: "/About"
                }
            ].map(_s((item, index)=>{
                _s();
                const { rotate, onMouseMove, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$Tilteffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTiltEffect"])(); // Apply tilt effect
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ParallaxWrapper_rotationWrapper__iR1i1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_crosslinkCard__SCoir}`,
                    onMouseMove: onMouseMove,
                    onMouseLeave: onMouseLeave,
                    style: {
                        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                        transition: "transform 0.2s ease-out"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ParallaxWrapper_sheenWrapper__vGGtf} sheen`
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                            lineNumber: 36,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_title__hlDQO,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_icon__FwiZm}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M2.697 13.75a1.6 1.6 0 0 1 1.6-1.6h15.406a1.6 1.6 0 0 1 1.6 1.6v8.5a1.6 1.6 0 0 1-1.6 1.6H4.297a1.6 1.6 0 0 1-1.6-1.6v-8.5Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                                lineNumber: 40,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M8.27 15.15a.6.6 0 0 1 .6.6v4.5a.6.6 0 1 1-1.2 0v-4.5a.6.6 0 0 1 .6-.6ZM12 15.15a.6.6 0 0 1 .6.6v4.5a.6.6 0 1 1-1.2 0v-4.5a.6.6 0 0 1 .6-.6Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                                lineNumber: 41,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                        lineNumber: 39,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                    lineNumber: 38,
                                    columnNumber: 33
                                }, this),
                                item.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                            lineNumber: 37,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_info__hYdqG,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: item.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                lineNumber: 47,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                            lineNumber: 46,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `button primary ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_primary__b__QL} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_button___D_2N}`,
                            "aria-label": item.buttonLabel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g,
                                    style: {
                                        color: buttontext[index]
                                    },
                                    children: item.buttonLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                    lineNumber: 54,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                                    lineNumber: 60,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                                    lineNumber: 61,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                            lineNumber: 59,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                        lineNumber: 58,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                    lineNumber: 57,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                            lineNumber: 49,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_link__H620e,
                            href: item.link
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                            lineNumber: 66,
                            columnNumber: 29
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                    lineNumber: 26,
                    columnNumber: 25
                }, this);
            }, "c2fucZ6JThdFfExI4EU/OVEdDVU=", false, function() {
                return [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$Tilteffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTiltEffect"]
                ];
            }))
        }, void 0, false, {
            fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
};
_c = Crosslink;
const __TURBOPACK__default__export__ = Crosslink;
var _c;
__turbopack_refresh__.register(_c, "Crosslink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Services/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_8f7aa8._.js.map