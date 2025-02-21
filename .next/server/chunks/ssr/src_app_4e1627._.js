module.exports = {

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
"[project]/src/app/components/Home/header/header.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/header/header.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Header = ({ color = "white" })=>{
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleMenu = ()=>{
        setMenuOpen((prev)=>!prev);
        if (!menuOpen) {
            document.body.classList.add("no-scroll"); // Disable Scroll
        } else {
            document.body.classList.remove("no-scroll"); // Enable Scroll
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lenisInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            duration: 1.2,
            easing: (t)=>t,
            smoothWheel: true
        });
        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return ()=>{
            lenisInstance.destroy();
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (headerRef.current && !menuOpen) {
                const scrollY = window.scrollY;
                headerRef.current.style.transform = `translateY(-${scrollY * 0.3}px)`;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        menuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flipContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].front}`,
                            src: "/images/RouteToMarket Media India Pvt Ltd.png",
                            alt: "Front Logo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburger,
                onClick: toggleMenu,
                children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiX"], {
                    size: 35,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cross
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/header/header.js",
                    lineNumber: 64,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMenu"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLinks,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/src/app/utils/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/app/components/About/Globe/globe.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/cobe/dist/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/utils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Earth = ({ className, theta = 0.25, dark = 1, scale = 1.1, diffuse = 1.2, mapSamples = 40000, mapBrightness = 6, baseColor = [
    0.4,
    0.6509,
    1
], markerColor = [
    1,
    0,
    0
], glowColor = [
    0.2745,
    0.5765,
    0.898
] })=>{
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let width = 0;
        const onResize = ()=>canvasRef.current && (width = canvasRef.current.offsetWidth);
        window.addEventListener('resize', onResize);
        onResize();
        let phi = 0;
        onResize();
        const globe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cobe$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: theta,
            dark: dark,
            scale: scale,
            diffuse: diffuse,
            mapSamples: mapSamples,
            mapBrightness: mapBrightness,
            baseColor: baseColor,
            markerColor: markerColor,
            glowColor: glowColor,
            opacity: 1,
            offset: [
                0,
                0
            ],
            markers: [],
            onRender: (state)=>{
                state.phi = phi;
                phi += 0.003;
            }
        });
        return ()=>{
            globe.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-center z-[10] w-full max-w-[350px] mx-auto pb-16', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            style: {
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                aspectRatio: '1'
            }
        }, void 0, false, {
            fileName: "[project]/src/app/components/About/Globe/globe.js",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/About/Globe/globe.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Earth;
}}),
"[project]/src/app/components/About/locationSearch/location.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "CountryTree_active__qyTIC": "location-module__S7PndW__CountryTree_active__qyTIC",
  "CountryTree_chevronContinent__5PL4R": "location-module__S7PndW__CountryTree_chevronContinent__5PL4R",
  "CountryTree_chevron__YFYxk": "location-module__S7PndW__CountryTree_chevron__YFYxk",
  "CountryTree_continentRight__30OHO": "location-module__S7PndW__CountryTree_continentRight__30OHO",
  "CountryTree_continent__nzEHk": "location-module__S7PndW__CountryTree_continent__nzEHk",
  "CountryTree_counter__kUwVx": "location-module__S7PndW__CountryTree_counter__kUwVx",
  "CountryTree_countriesList__expanded": "location-module__S7PndW__CountryTree_countriesList__expanded",
  "CountryTree_countries__uOCPg": "location-module__S7PndW__CountryTree_countries__uOCPg",
  "CountryTree_countryActive__lWOXm": "location-module__S7PndW__CountryTree_countryActive__lWOXm",
  "CountryTree_country__f6oSc": "location-module__S7PndW__CountryTree_country__f6oSc",
  "CountryTree_country__item": "location-module__S7PndW__CountryTree_country__item",
  "CountryTree_location__dETGk": "location-module__S7PndW__CountryTree_location__dETGk",
  "CountryTree_locations__GpPhU": "location-module__S7PndW__CountryTree_locations__GpPhU",
  "CountryTree_o-site-container__qDRLZ": "location-module__S7PndW__CountryTree_o-site-container__qDRLZ",
  "CountryTree_tree__mylqy": "location-module__S7PndW__CountryTree_tree__mylqy",
  "Earth_container__wLwGA": "location-module__S7PndW__Earth_container__wLwGA",
  "Icon_icon___Kgo7": "location-module__S7PndW__Icon_icon___Kgo7",
  "LocationSearchBlock_background__ZV3T6": "location-module__S7PndW__LocationSearchBlock_background__ZV3T6",
  "LocationSearchBlock_container__r4xLW": "location-module__S7PndW__LocationSearchBlock_container__r4xLW",
  "LocationSearchBlock_content__Qs6Fy": "location-module__S7PndW__LocationSearchBlock_content__Qs6Fy",
  "LocationSearchBlock_info__bKjBZ": "location-module__S7PndW__LocationSearchBlock_info__bKjBZ",
  "LocationSearchBlock_map__Ez2na": "location-module__S7PndW__LocationSearchBlock_map__Ez2na",
  "LocationSearchBlock_o-site-container__9hHe5": "location-module__S7PndW__LocationSearchBlock_o-site-container__9hHe5",
  "LocationSearchBlock_section__gZTHp": "location-module__S7PndW__LocationSearchBlock_section__gZTHp",
  "LocationSearchBlock_title__VQf4s": "location-module__S7PndW__LocationSearchBlock_title__VQf4s",
  "LocationSearchBlock_tree__G44tP": "location-module__S7PndW__LocationSearchBlock_tree__G44tP",
  "Modal_close__UorvO": "location-module__S7PndW__Modal_close__UorvO",
  "Modal_icon__eN6oP": "location-module__S7PndW__Modal_icon__eN6oP",
  "Modal_link__4qgev": "location-module__S7PndW__Modal_link__4qgev",
  "Modal_links__TReQU": "location-module__S7PndW__Modal_links__TReQU",
  "Modal_modal__drKVc": "location-module__S7PndW__Modal_modal__drKVc",
  "Modal_o-site-container__Mqcms": "location-module__S7PndW__Modal_o-site-container__Mqcms",
  "Modal_title__rsbVJ": "location-module__S7PndW__Modal_title__rsbVJ",
  "countryColumn": "location-module__S7PndW__countryColumn",
  "countryColumns": "location-module__S7PndW__countryColumns",
  "gold": "location-module__S7PndW__gold",
  "icon": "location-module__S7PndW__icon",
});
}}),
"[project]/src/app/components/About/locationSearch/location.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$Globe$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/About/Globe/globe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/About/locationSearch/location.module.css [app-client] (css module)");
'use client';
;
;
;
;
const countries = [
    {
        name: 'Singapore'
    },
    {
        name: 'Australia'
    },
    {
        name: 'Malaysia'
    },
    {
        name: 'USA'
    },
    {
        name: 'Vietnam'
    },
    {
        name: 'Nigeria'
    },
    {
        name: 'South Africa'
    },
    {
        name: 'Mauritius'
    },
    {
        name: 'Kenya'
    },
    {
        name: 'Uganda'
    },
    {
        name: 'Tanzania'
    },
    {
        name: 'Belgium'
    }
];
const LocationSearchBlock = ()=>{
    const countriesPerRow = Math.ceil(countries.length / 2); // Calculate how many countries per column
    const column1 = countries.slice(0, countriesPerRow);
    const column2 = countries.slice(countriesPerRow);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationSearchBlock_section__gZTHp,
        id: "locations",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationSearchBlock_container__r4xLW,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationSearchBlock_title__VQf4s,
                    children: "The world at your fingertips"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/About/locationSearch/location.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationSearchBlock_tree__G44tP,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CountryTree_tree__mylqy,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countryColumns,
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countryColumn,
                                    children: [
                                        " ",
                                        column1.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CountryTree_continent__nzEHk,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: country.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/About/locationSearch/location.js",
                                                    lineNumber: 40,
                                                    columnNumber: 21
                                                }, this)
                                            }, country.name, false, {
                                                fileName: "[project]/src/app/components/About/locationSearch/location.js",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/About/locationSearch/location.js",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countryColumn,
                                    children: [
                                        " ",
                                        column2.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CountryTree_continent__nzEHk,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: country.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/About/locationSearch/location.js",
                                                    lineNumber: 47,
                                                    columnNumber: 21
                                                }, this)
                                            }, country.name, false, {
                                                fileName: "[project]/src/app/components/About/locationSearch/location.js",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/About/locationSearch/location.js",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/About/locationSearch/location.js",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/About/locationSearch/location.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/About/locationSearch/location.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationSearchBlock_map__Ez2na,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Earth_container__wLwGA,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$Globe$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                style: {
                                    width: 300,
                                    height: 300
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/About/locationSearch/location.js",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/About/locationSearch/location.js",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/About/locationSearch/location.js",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/About/locationSearch/location.js",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$About$2f$locationSearch$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationSearchBlock_background__ZV3T6
                }, void 0, false, {
                    fileName: "[project]/src/app/components/About/locationSearch/location.js",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/About/locationSearch/location.js",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/About/locationSearch/location.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LocationSearchBlock;
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
"[project]/src/app/utils/Tilteffect.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useTiltEffect": (()=>useTiltEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const [rotate, setRotate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const onMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(throttle((e)=>{
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
    }, 50), [
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
}}),
"[project]/src/app/components/Home/CrossLink/crossLink.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/CrossLink/crosslink.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$Tilteffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/Tilteffect.js [app-ssr] (ecmascript)"); // Import the tilt effect hook
'use client';
;
;
;
;
const Crosslink = ()=>{
    const buttontext = [
        "#2086ae",
        "#fff"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_section__LjJPm,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            ].map((item, index)=>{
                const { rotate, onMouseMove, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$Tilteffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTiltEffect"])(); // Apply tilt effect
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ParallaxWrapper_rotationWrapper__iR1i1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_crosslinkCard__SCoir}`,
                    onMouseMove: onMouseMove,
                    onMouseLeave: onMouseLeave,
                    style: {
                        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                        transition: "transform 0.2s ease-out"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ParallaxWrapper_sheenWrapper__vGGtf} sheen`
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                            lineNumber: 36,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_title__hlDQO,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_icon__FwiZm}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M2.697 13.75a1.6 1.6 0 0 1 1.6-1.6h15.406a1.6 1.6 0 0 1 1.6 1.6v8.5a1.6 1.6 0 0 1-1.6 1.6H4.297a1.6 1.6 0 0 1-1.6-1.6v-8.5Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                                lineNumber: 40,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_info__hYdqG,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `button primary ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_primary__b__QL} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_button___D_2N}`,
                            "aria-label": item.buttonLabel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M.15 12a.6.6 0 0 1 .6-.6h22.5a.6.6 0 0 1 0 1.2H.75a.6.6 0 0 1-.6-.6Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/CrossLink/crossLink.js",
                                                    lineNumber: 60,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            })
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
const __TURBOPACK__default__export__ = Crosslink;
}}),
"[project]/src/app/components/Home/UpsBlock/upsBlock.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "UspBlock_container__BsBlZ": "upsBlock-module__Yyrv5q__UspBlock_container__BsBlZ",
  "UspBlock_dark__576q1": "upsBlock-module__Yyrv5q__UspBlock_dark__576q1",
  "UspBlock_imageSection__Pe14P": "upsBlock-module__Yyrv5q__UspBlock_imageSection__Pe14P",
  "UspBlock_imageWrapper__ZvgfK": "upsBlock-module__Yyrv5q__UspBlock_imageWrapper__ZvgfK",
  "UspBlock_image__O4ZSe": "upsBlock-module__Yyrv5q__UspBlock_image__O4ZSe",
  "UspBlock_item-0__UOfYz": "upsBlock-module__Yyrv5q__UspBlock_item-0__UOfYz",
  "UspBlock_item-1__AojHj": "upsBlock-module__Yyrv5q__UspBlock_item-1__AojHj",
  "UspBlock_item-2__QOb9H": "upsBlock-module__Yyrv5q__UspBlock_item-2__QOb9H",
  "UspBlock_item-3__MzYZi": "upsBlock-module__Yyrv5q__UspBlock_item-3__MzYZi",
  "UspBlock_item-4__1Y1kt": "upsBlock-module__Yyrv5q__UspBlock_item-4__1Y1kt",
  "UspBlock_o-site-container__2z6oU": "upsBlock-module__Yyrv5q__UspBlock_o-site-container__2z6oU",
  "UspBlock_section__SSpPU": "upsBlock-module__Yyrv5q__UspBlock_section__SSpPU",
  "UspBlock_show__QO2Kq": "upsBlock-module__Yyrv5q__UspBlock_show__QO2Kq",
  "UspBlock_titleWrapper__0bZaZ": "upsBlock-module__Yyrv5q__UspBlock_titleWrapper__0bZaZ",
  "UspBlock_title__5syXk": "upsBlock-module__Yyrv5q__UspBlock_title__5syXk",
  "UspBlock_uspWrapperInside__00mFz": "upsBlock-module__Yyrv5q__UspBlock_uspWrapperInside__00mFz",
  "UspBlock_uspWrapper__dzsDK": "upsBlock-module__Yyrv5q__UspBlock_uspWrapper__dzsDK",
  "UspItem_light__BSdNE": "upsBlock-module__Yyrv5q__UspItem_light__BSdNE",
  "UspItem_lineWrapper__CaFPf": "upsBlock-module__Yyrv5q__UspItem_lineWrapper__CaFPf",
  "UspItem_line__xiQ1n": "upsBlock-module__Yyrv5q__UspItem_line__xiQ1n",
  "UspItem_o-site-container__SgrIQ": "upsBlock-module__Yyrv5q__UspItem_o-site-container__SgrIQ",
  "UspItem_uspItemText__6aUpv": "upsBlock-module__Yyrv5q__UspItem_uspItemText__6aUpv",
  "UspItem_uspItemTitle__pyK16": "upsBlock-module__Yyrv5q__UspItem_uspItemTitle__pyK16",
  "UspItem_uspItem__qkMCK": "upsBlock-module__Yyrv5q__UspItem_uspItem__qkMCK",
  "animate": "upsBlock-module__Yyrv5q__animate",
  "gold": "upsBlock-module__Yyrv5q__gold",
});
}}),
"[project]/src/app/utils/swiper/swiper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
;
;
;
;
;
const AutoPlaySwiper = ()=>{
    const images = [
        '/images/iron.png',
        '/images/micro.png',
        '/images/sandmaker.png',
        '/images/mixer1.png',
        '/images/fan.png',
        '/images/switchboard.png',
        '/images/wires.png',
        '/images/light.png'
    ];
    const shuffleArray = (array)=>{
        const newArray = [
            ...array
        ];
        for(let i = newArray.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [
                newArray[j],
                newArray[i]
            ];
        }
        return newArray;
    };
    const shuffledImages = shuffleArray(images);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[80px] h-[80px] overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-transparent to-transparent backdrop-blur-md z-10"
            }, void 0, false, {
                fileName: "[project]/src/app/utils/swiper/swiper.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-transparent to-transparent backdrop-blur-md z-10"
            }, void 0, false, {
                fileName: "[project]/src/app/utils/swiper/swiper.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                ],
                spaceBetween: 10,
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                className: "w-[100px] h-[100px]",
                children: shuffledImages.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: src,
                            alt: `Slide ${index + 1}`,
                            className: "object-cover w-full h-full "
                        }, void 0, false, {
                            fileName: "[project]/src/app/utils/swiper/swiper.js",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/app/utils/swiper/swiper.js",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/utils/swiper/swiper.js",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/utils/swiper/swiper.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AutoPlaySwiper;
}}),
"[project]/src/app/components/Home/UpsBlock/loadingline/loadingline.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "loadLine": "loadingline-module__vPR_hW__loadLine",
  "loadingContainer": "loadingline-module__vPR_hW__loadingContainer",
  "loadingLine": "loadingline-module__vPR_hW__loadingLine",
});
}}),
"[project]/src/app/components/Home/UpsBlock/loadingline/loadingline.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LoadingLine)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$loadingline$2f$loadingline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/UpsBlock/loadingline/loadingline.module.css [app-client] (css module)");
;
;
;
function LoadingLine({ isLoading, duration = 10000 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$loadingline$2f$loadingline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$loadingline$2f$loadingline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingLine,
            style: {
                animation: isLoading ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$loadingline$2f$loadingline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadLine} ${duration / 1000}s linear forwards` : "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/components/Home/UpsBlock/loadingline/loadingline.js",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/UpsBlock/loadingline/loadingline.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
;
}}),
"[project]/src/app/components/Home/UpsBlock/upsBlock.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>UpsBlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/UpsBlock/upsBlock.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$swiper$2f$swiper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/swiper/swiper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$loadingline$2f$loadingline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/UpsBlock/loadingline/loadingline.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function UpsBlock() {
    const [expandedIndex, setExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingIndex, setLoadingIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoPlayIndex, setAutoPlayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const titles = [
        "We Believe in Accessible Modern Appliances",
        "We Resolve Every Export Challenge",
        "Single Point of Contact",
        "Quick and Adaptive Decision-Making"
    ];
    const titleRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timer;
        if (loadingIndex !== null) {
            timer = setTimeout(()=>{
                setLoadingIndex(null);
            }, 10000);
        }
        return ()=>clearTimeout(timer);
    }, [
        loadingIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            handleAutoPlay();
        }, 10000);
        return ()=>clearInterval(interval);
    }, [
        autoPlayIndex
    ]);
    const handleAutoPlay = ()=>{
        handleToggle(autoPlayIndex);
        setAutoPlayIndex((prevIndex)=>(prevIndex + 1) % titles.length);
    };
    const handleToggle = (index)=>{
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
            setLoadingIndex(index);
        }
    };
    const getTitleStyle = (index)=>{
        return {
            cursor: 'pointer',
            color: expandedIndex === index ? 'white' : '#ccc'
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_section__SSpPU} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_dark__576q1}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_container__BsBlZ,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_titleWrapper__0bZaZ,
                    style: {
                        transform: 'translateY(24px) translateZ(0)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_title__5syXk,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "World's Leading Home Appliances Exporter."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_imageSection__Pe14P,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$swiper$2f$swiper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                width: "180px",
                                height: "160px"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_uspWrapper__dzsDK,
                    children: titles.map((title, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_uspWrapperInside__00mFz,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspItem_uspItem__qkMCK,
                                style: {
                                    opacity: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspItem_uspItemTitle__pyK16,
                                        onClick: ()=>handleToggle(index),
                                        style: getTitleStyle(index),
                                        ref: (el)=>titleRefs.current[index] = el,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspItem_uspItemText__6aUpv,
                                        style: {
                                            opacity: expandedIndex === index ? 1 : 0,
                                            maxHeight: expandedIndex === index ? '1000px' : '0',
                                            height: expandedIndex === index ? 'auto' : '0',
                                            transition: '0.5s ease-in-out'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                title === "We Believe in Accessible Modern Appliances" && "We believe that essential home appliances with the latest technology should be accessible and affordable in every corner of the world.",
                                                title === "We Resolve Every Export Challenge" && "Our dedicated teams specialize in each commodity, providing high-quality solutions and insights for any product or request.",
                                                title === "Single Point of Contact" && "Our team guides customers through every stage of the export process, ensuring a seamless experience.",
                                                title === "Quick and Adaptive Decision-Making" && "We support customers through quick decision-making and open communication, setting us apart."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$loadingline$2f$loadingline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        isLoading: loadingIndex === index,
                                        duration: 10000
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/About/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_app_4e1627._.js.map