(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_f24ac7._.js", {

"[project]/src/app/components/LoadingScreen/loadingScreen.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "carSvg": "loadingScreen-module__BNw0Pa__carSvg",
  "contentWrapper": "loadingScreen-module__BNw0Pa__contentWrapper",
  "loadingBox": "loadingScreen-module__BNw0Pa__loadingBox",
  "loadingContainer": "loadingScreen-module__BNw0Pa__loadingContainer",
  "loadingSvg": "loadingScreen-module__BNw0Pa__loadingSvg",
  "loadingText": "loadingScreen-module__BNw0Pa__loadingText",
  "outline": "loadingScreen-module__BNw0Pa__outline",
});
}}),
"[project]/src/app/components/LoadingScreen/loadingScreen.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LoadingScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/LoadingScreen/loadingScreen.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
function LoadingScreen() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [expand, setExpand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingScreen.useEffect": ()=>{
            const interval = setInterval({
                "LoadingScreen.useEffect.interval": ()=>{
                    setProgress({
                        "LoadingScreen.useEffect.interval": (prev)=>{
                            if (prev >= 100) {
                                clearInterval(interval);
                                setTimeout({
                                    "LoadingScreen.useEffect.interval": ()=>setExpand(true)
                                }["LoadingScreen.useEffect.interval"], 500);
                                setTimeout({
                                    "LoadingScreen.useEffect.interval": ()=>setLoading(false)
                                }["LoadingScreen.useEffect.interval"], 1500);
                                return 100;
                            }
                            return prev + 5;
                        }
                    }["LoadingScreen.useEffect.interval"]);
                }
            }["LoadingScreen.useEffect.interval"], 100);
        }
    }["LoadingScreen.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingBox,
                initial: {
                    width: "500px",
                    height: "250px",
                    backgroundColor: "white"
                },
                animate: expand ? {
                    width: "200vw",
                    height: "200vh",
                    transition: {
                        duration: .3
                    }
                } : {},
                exit: {
                    opacity: 0,
                    transition: {
                        duration: 5.0
                    }
                },
                children: !expand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingText} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outline}`,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            children: [
                                progress,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                            lineNumber: 37,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSvg,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1,
                                y: [
                                    0,
                                    -5,
                                    0
                                ]
                            },
                            transition: {
                                repeat: Infinity,
                                duration: 1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "50",
                                height: "50",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "#2086ae",
                                    strokeWidth: "4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                                    lineNumber: 52,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                                lineNumber: 51,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                            lineNumber: 45,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carSvg,
                            initial: {
                                x: "100%"
                            },
                            animate: {
                                x: "-100%"
                            },
                            transition: {
                                repeat: Infinity,
                                duration: 3,
                                ease: "linear"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "100",
                                height: "50",
                                viewBox: "0 0 100 50",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100",
                                        height: "30",
                                        rx: "5",
                                        fill: "#ffcc00"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                                        lineNumber: 62,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "20",
                                        cy: "40",
                                        r: "8",
                                        fill: "#333"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                                        lineNumber: 63,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "80",
                                        cy: "40",
                                        r: "8",
                                        fill: "#333"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                                        lineNumber: 64,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                                lineNumber: 61,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                            lineNumber: 55,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                    lineNumber: 36,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                lineNumber: 29,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(LoadingScreen, "GvFbLa6+5WL1VZj7hFbtjOjzSJY=");
_c = LoadingScreen;
var _c;
__turbopack_refresh__.register(_c, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/hero/hero.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "VideoBlock_background__abLep": "hero-module__IYM1Ka__VideoBlock_background__abLep",
  "VideoBlock_carouselButtonWrapper__aN2k_": "hero-module__IYM1Ka__VideoBlock_carouselButtonWrapper__aN2k_",
  "VideoBlock_carouselWrapper__fnrgi": "hero-module__IYM1Ka__VideoBlock_carouselWrapper__fnrgi",
  "VideoBlock_carousel__MuAnE": "hero-module__IYM1Ka__VideoBlock_carousel__MuAnE",
  "VideoBlock_carousel__container__R2arb": "hero-module__IYM1Ka__VideoBlock_carousel__container__R2arb",
  "VideoBlock_carousel__item___kdpC": "hero-module__IYM1Ka__VideoBlock_carousel__item___kdpC",
  "VideoBlock_container__AMMln": "hero-module__IYM1Ka__VideoBlock_container__AMMln",
  "VideoBlock_contentWrapper__MLz4U": "hero-module__IYM1Ka__VideoBlock_contentWrapper__MLz4U",
  "VideoBlock_content__5IbZO": "hero-module__IYM1Ka__VideoBlock_content__5IbZO",
  "VideoBlock_emblabutton__d4G1X": "hero-module__IYM1Ka__VideoBlock_emblabutton__d4G1X",
  "VideoBlock_imageWrapper__YU9aC": "hero-module__IYM1Ka__VideoBlock_imageWrapper__YU9aC",
  "VideoBlock_image__RchCs": "hero-module__IYM1Ka__VideoBlock_image__RchCs",
  "VideoBlock_intro__JnyTU": "hero-module__IYM1Ka__VideoBlock_intro__JnyTU",
  "VideoBlock_items-1__Cv7l0": "hero-module__IYM1Ka__VideoBlock_items-1__Cv7l0",
  "VideoBlock_items-2__xcOUE": "hero-module__IYM1Ka__VideoBlock_items-2__xcOUE",
  "VideoBlock_items-3__3JCRH": "hero-module__IYM1Ka__VideoBlock_items-3__3JCRH",
  "VideoBlock_items-4__l9wE3": "hero-module__IYM1Ka__VideoBlock_items-4__l9wE3",
  "VideoBlock_items-5__ksDMr": "hero-module__IYM1Ka__VideoBlock_items-5__ksDMr",
  "VideoBlock_nonActive__otSIC": "hero-module__IYM1Ka__VideoBlock_nonActive__otSIC",
  "VideoBlock_o-site-container__ivKo6": "hero-module__IYM1Ka__VideoBlock_o-site-container__ivKo6",
  "VideoBlock_prev__iRqQG": "hero-module__IYM1Ka__VideoBlock_prev__iRqQG",
  "VideoBlock_section__ZOJyc": "hero-module__IYM1Ka__VideoBlock_section__ZOJyc",
  "VideoBlock_title__i8um1": "hero-module__IYM1Ka__VideoBlock_title__i8um1",
  "VideoPrimaryHero_buttonWrapper__r8bFp": "hero-module__IYM1Ka__VideoPrimaryHero_buttonWrapper__r8bFp",
  "VideoPrimaryHero_button__Dsdr6": "hero-module__IYM1Ka__VideoPrimaryHero_button__Dsdr6",
  "VideoPrimaryHero_container__JJnQY": "hero-module__IYM1Ka__VideoPrimaryHero_container__JJnQY",
  "VideoPrimaryHero_content__legsx": "hero-module__IYM1Ka__VideoPrimaryHero_content__legsx",
  "VideoPrimaryHero_darkContent___llDG": "hero-module__IYM1Ka__VideoPrimaryHero_darkContent___llDG",
  "VideoPrimaryHero_darkMask__VOrPn": "hero-module__IYM1Ka__VideoPrimaryHero_darkMask__VOrPn",
  "VideoPrimaryHero_darkRect__cPUgc": "hero-module__IYM1Ka__VideoPrimaryHero_darkRect__cPUgc",
  "VideoPrimaryHero_date__oCrIT": "hero-module__IYM1Ka__VideoPrimaryHero_date__oCrIT",
  "VideoPrimaryHero_imageWrapper__SkScL": "hero-module__IYM1Ka__VideoPrimaryHero_imageWrapper__SkScL",
  "VideoPrimaryHero_image__H7CbZ": "hero-module__IYM1Ka__VideoPrimaryHero_image__H7CbZ",
  "VideoPrimaryHero_info__Y1nmI": "hero-module__IYM1Ka__VideoPrimaryHero_info__Y1nmI",
  "VideoPrimaryHero_initialized__1nbT5": "hero-module__IYM1Ka__VideoPrimaryHero_initialized__1nbT5",
  "VideoPrimaryHero_innerContent__T_tvv": "hero-module__IYM1Ka__VideoPrimaryHero_innerContent__T_tvv",
  "VideoPrimaryHero_lightContent__QQuKE": "hero-module__IYM1Ka__VideoPrimaryHero_lightContent__QQuKE",
  "VideoPrimaryHero_maskRect__vdR7Y": "hero-module__IYM1Ka__VideoPrimaryHero_maskRect__vdR7Y",
  "VideoPrimaryHero_mask__nIxWs": "hero-module__IYM1Ka__VideoPrimaryHero_mask__nIxWs",
  "VideoPrimaryHero_mobileimage__vNeBT": "hero-module__IYM1Ka__VideoPrimaryHero_mobileimage__vNeBT",
  "VideoPrimaryHero_muteButton__01kJF": "hero-module__IYM1Ka__VideoPrimaryHero_muteButton__01kJF",
  "VideoPrimaryHero_o-site-container__03EWh": "hero-module__IYM1Ka__VideoPrimaryHero_o-site-container__03EWh",
  "VideoPrimaryHero_section__FQhT_": "hero-module__IYM1Ka__VideoPrimaryHero_section__FQhT_",
  "VideoPrimaryHero_svgmask__zLDO_": "hero-module__IYM1Ka__VideoPrimaryHero_svgmask__zLDO_",
  "VideoPrimaryHero_titleWrapper__dDLQh": "hero-module__IYM1Ka__VideoPrimaryHero_titleWrapper__dDLQh",
  "VideoPrimaryHero_title__ovhlz": "hero-module__IYM1Ka__VideoPrimaryHero_title__ovhlz",
  "VideoPrimaryHero_unmuted__H_j0m": "hero-module__IYM1Ka__VideoPrimaryHero_unmuted__H_j0m",
  "VideoPrimaryHero_video__550RF": "hero-module__IYM1Ka__VideoPrimaryHero_video__550RF",
  "darkMask": "hero-module__IYM1Ka__darkMask",
  "gold": "hero-module__IYM1Ka__gold",
  "icon": "hero-module__IYM1Ka__icon",
  "outline": "hero-module__IYM1Ka__outline",
  "promar": "hero-module__IYM1Ka__promar",
  "stroke-text": "hero-module__IYM1Ka__stroke-text",
});
}}),
"[project]/src/app/components/Home/hero/hero.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/hero/hero.module.css [app-client] (css module)");
;
;
;
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_section__FQhT_,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_container__JJnQY} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_initialized__1nbT5}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_content__legsx,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_innerContent__T_tvv,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_lightContent__QQuKE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_initialized__1nbT5}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_titleWrapper__dDLQh,
                                    style: {
                                        opacity: 1,
                                        transform: 'none'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_title__ovhlz,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Precision"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/hero/hero.js",
                                                lineNumber: 13,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Freight."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/hero/hero.js",
                                                lineNumber: 14,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    "Seamless",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outline,
                                                        children: " Delivery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Home/hero/hero.js",
                                                        lineNumber: 15,
                                                        columnNumber: 48
                                                    }, this),
                                                    ". "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Home/hero/hero.js",
                                                lineNumber: 15,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Home/hero/hero.js",
                                        lineNumber: 12,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/hero/hero.js",
                                    lineNumber: 11,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/hero/hero.js",
                                lineNumber: 10,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_darkContent___llDG,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_titleWrapper__dDLQh,
                                        style: {
                                            opacity: 1,
                                            transform: 'none'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_title__ovhlz,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Precision"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/hero/hero.js",
                                                    lineNumber: 22,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Freight."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/hero/hero.js",
                                                    lineNumber: 23,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Seamless",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outline,
                                                            children: " Delivery"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/hero/hero.js",
                                                            lineNumber: 24,
                                                            columnNumber: 56
                                                        }, this),
                                                        ". "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/hero/hero.js",
                                                    lineNumber: 24,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/hero/hero.js",
                                            lineNumber: 21,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/hero/hero.js",
                                        lineNumber: 20,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].WaveMask_waveWrapper__LIIIs,
                                        style: {
                                            height: '0%'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/hero/hero.js",
                                        lineNumber: 27,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Home/hero/hero.js",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/hero/hero.js",
                        lineNumber: 9,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/hero/hero.js",
                    lineNumber: 8,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_imageWrapper__SkScL} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_initialized__1nbT5}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_muteButton__01kJF}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "1.5",
                                    d: "M13.422 4.658a1.5 1.5 0 0 0-1.571.142L5.251 9h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3l6.6 4.2a1.5 1.5 0 0 0 2.4-1.2V6a1.5 1.5 0 0 0-.829-1.342Z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/hero/hero.js",
                                    lineNumber: 35,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/hero/hero.js",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/hero/hero.js",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: "/video/R2MEx Ad2.mp4",
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_image__H7CbZ} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_video__550RF}`,
                            playsInline: true,
                            controlsList: "nodownload",
                            autoPlay: true,
                            muted: true,
                            loop: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/hero/hero.js",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/hero/hero.js",
                    lineNumber: 32,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Home/hero/hero.js",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/hero/hero.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_refresh__.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/header/header.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "cancel": "header-module__nI8dKq__cancel",
  "cross": "header-module__nI8dKq__cross",
  "hamburger": "header-module__nI8dKq__hamburger",
  "header": "header-module__nI8dKq__header",
  "logo": "header-module__nI8dKq__logo",
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/logo.png",
                    alt: "Logo"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/header/header.js",
                    lineNumber: 56,
                    columnNumber: 9
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
                    lineNumber: 60,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                    size: 35
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/header/header.js",
                    lineNumber: 60,
                    columnNumber: 66
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/header/header.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLinks,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                style: {
                                    color
                                },
                                children: `Home`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/header/header.js",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 65,
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
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 66,
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
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "Careers",
                                style: {
                                    color
                                },
                                children: `Careers`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/header/header.js",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 68,
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
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/header/header.js",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/header/header.js",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/header/header.js",
                lineNumber: 63,
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
  "gold": "upsBlock-module__Yyrv5q__gold",
});
}}),
"[project]/src/app/components/Home/UpsBlock/upsBlock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>UpsBlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/UpsBlock/upsBlock.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
function UpsBlock() {
    _s();
    // State to manage the expanded section
    const [expandedIndex, setExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Handle click to toggle the description visibility
    const toggleAccordion = (index)=>{
        if (expandedIndex === index) {
            setExpandedIndex(null); // Close the accordion if it's already open
        } else {
            setExpandedIndex(index); // Open the clicked accordion
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_section__SSpPU} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_dark__576q1}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_container__BsBlZ,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_titleWrapper__0bZaZ,
                    style: {
                        transform: 'translateY(24px) translateZ(0)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_title__5syXk,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We’re Different Because"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_imageSection__Pe14P,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                alt: "Manuport logistics",
                                loading: "lazy",
                                width: "424",
                                height: "232",
                                decoding: "async",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_image__O4ZSe,
                                srcSet: "/images/Wood-Business.png"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_uspWrapper__dzsDK,
                    children: [
                        "We Believe in People",
                        "We Solve Each and Any Shipping Problem",
                        "Single Point of Contact",
                        "Flexible & Fast Decision-Making"
                    ].map((title, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_uspWrapperInside__00mFz,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspItem_uspItem__qkMCK,
                                style: {
                                    opacity: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspItem_uspItemTitle__pyK16,
                                        onClick: ()=>toggleAccordion(index),
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspItem_uspItemText__6aUpv,
                                        style: {
                                            opacity: expandedIndex === index ? 1 : 0,
                                            maxHeight: expandedIndex === index ? '1000px' : '0',
                                            minHeight: expandedIndex === index ? 'auto' : '0',
                                            height: expandedIndex === index ? 'auto' : '0',
                                            transition: '.5 0.3s ease-in-out, max-height 0.3s ease-in-out, height 0.3s ease-in-out'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                title === "We Believe in People" && "Our people are our greatest asset, and we deeply believe in them. At MPL, we embrace a unique culture together where everyone is valued, supported, and empowered to achieve their full potential.",
                                                title === "We Solve Each and Any Shipping Problem" && "We collaborate with dedicated teams for each commodity, leveraging their specialized expertise to deliver high-quality solutions and insights for any product or request. With a global presence, we possess deep knowledge of local markets, regulations, and customs.",
                                                title === "Single Point of Contact" && "Our team helps customers navigate every step of the logistics process, including customs clearance, tendering, and procurement services.",
                                                title === "Flexible & Fast Decision-Making" && "Our flexibility and commitment to supporting customers in every way make us unique. Our rapid decision-making is driven by the open communication strategy we cultivate within the company."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspItem_lineWrapper__CaFPf,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspItem_line__xiQ1n,
                                            style: {
                                                transform: 'scaleX(0) translateZ(0)',
                                                transformOrigin: '100% 50% 0'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/UpsBlock/upsBlock.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(UpsBlock, "bzV0X/G6ETLTHnPPQQ2qIqf2BxU=");
_c = UpsBlock;
var _c;
__turbopack_refresh__.register(_c, "UpsBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/location/location.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "Button_anti-bob__G1XfJ": "location-module__GFbJrG__Button_anti-bob__G1XfJ",
  "Button_bob__3_pUe": "location-module__GFbJrG__Button_bob__3_pUe",
  "Button_button__T6zT9": "location-module__GFbJrG__Button_button__T6zT9",
  "Button_darkmode__ozqJQ": "location-module__GFbJrG__Button_darkmode__ozqJQ",
  "Button_goldLight__ZvTNn": "location-module__GFbJrG__Button_goldLight__ZvTNn",
  "Button_iconButton__fsKFn": "location-module__GFbJrG__Button_iconButton__fsKFn",
  "Button_icon__Rt_Hz": "location-module__GFbJrG__Button_icon__Rt_Hz",
  "Button_o-site-container__ks40o": "location-module__GFbJrG__Button_o-site-container__ks40o",
  "Button_primary__b__QL": "location-module__GFbJrG__Button_primary__b__QL",
  "Button_titleWrapper__Glw9g": "location-module__GFbJrG__Button_titleWrapper__Glw9g",
  "Icon_icon___Kgo7": "location-module__GFbJrG__Icon_icon___Kgo7",
  "Image_is_loaded__RCqPL": "location-module__GFbJrG__Image_is_loaded__RCqPL",
  "Image_storyblok_image__oDocz": "location-module__GFbJrG__Image_storyblok_image__oDocz",
  "LocationBlock_buttonWrapper__t95EU": "location-module__GFbJrG__LocationBlock_buttonWrapper__t95EU",
  "LocationBlock_container__W_TQR": "location-module__GFbJrG__LocationBlock_container__W_TQR",
  "LocationBlock_content__4vYYD": "location-module__GFbJrG__LocationBlock_content__4vYYD",
  "LocationBlock_info__PEoID": "location-module__GFbJrG__LocationBlock_info__PEoID",
  "LocationBlock_locations__jqljX": "location-module__GFbJrG__LocationBlock_locations__jqljX",
  "LocationBlock_o-site-container__PYXnH": "location-module__GFbJrG__LocationBlock_o-site-container__PYXnH",
  "LocationBlock_section__FpKpI": "location-module__GFbJrG__LocationBlock_section__FpKpI",
  "LocationBlock_title__OoA2u": "location-module__GFbJrG__LocationBlock_title__OoA2u",
  "LocationsSlider_hasImage__pdKoo": "location-module__GFbJrG__LocationsSlider_hasImage__pdKoo",
  "LocationsSlider_imageWrapper__noqux": "location-module__GFbJrG__LocationsSlider_imageWrapper__noqux",
  "LocationsSlider_image__F7MqP": "location-module__GFbJrG__LocationsSlider_image__F7MqP",
  "LocationsSlider_location__x6NQX": "location-module__GFbJrG__LocationsSlider_location__x6NQX",
  "LocationsSlider_o-site-container__Xsp6v": "location-module__GFbJrG__LocationsSlider_o-site-container__Xsp6v",
  "LocationsSlider_sliderWrapper___jN5Z": "location-module__GFbJrG__LocationsSlider_sliderWrapper___jN5Z",
  "LocationsSlider_slider__Aaqu7": "location-module__GFbJrG__LocationsSlider_slider__Aaqu7",
  "LocationsSlider_svg__6TBtR": "location-module__GFbJrG__LocationsSlider_svg__6TBtR",
  "LocationsSlider_title__vKaO_": "location-module__GFbJrG__LocationsSlider_title__vKaO_",
  "darkmode": "location-module__GFbJrG__darkmode",
  "gold": "location-module__GFbJrG__gold",
  "icon": "location-module__GFbJrG__icon",
});
}}),
"[project]/src/app/components/Home/location/location.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/location/location.module.css [app-client] (css module)");
;
;
;
const Location = ()=>{
    const focus = 'center';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationBlock_section__FpKpI,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationBlock_container__W_TQR,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationBlock_content__4vYYD,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationBlock_title__OoA2u,
                        children: "Our Locations"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/location/location.js",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationBlock_info__PEoID,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Our teams around the world are dedicated to meeting your logistics needs. With a strong network and global affiliations, we leverage our group assets to enhance our solutions, offering financial stability and flexibility for your benefit. Explore the world to see ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.euroports.com/",
                                    target: "_self",
                                    "aria-label": "https://www.euroports.com/",
                                    children: "how we can support you."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/location/location.js",
                                    lineNumber: 14,
                                    columnNumber: 293
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/location/location.js",
                            lineNumber: 13,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/location/location.js",
                        lineNumber: 12,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationBlock_buttonWrapper__t95EU,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_primary__b__QL} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_goldLight__ZvTNn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE}`,
                            "aria-label": "All Locations",
                            href: "/about",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g,
                                    children: "All Locations"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/location/location.js",
                                    lineNumber: 19,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconwrapper}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon}`,
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
                                                    fileName: "[project]/src/app/components/Home/location/location.js",
                                                    lineNumber: 24,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    fillRule: "evenodd",
                                                    d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/location/location.js",
                                                    lineNumber: 25,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/location/location.js",
                                            lineNumber: 23,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/location/location.js",
                                        lineNumber: 21,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/location/location.js",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/location/location.js",
                            lineNumber: 18,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/location/location.js",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Home/location/location.js",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Home/location/location.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/location/location.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
};
_c = Location;
const __TURBOPACK__default__export__ = Location;
var _c;
__turbopack_refresh__.register(_c, "Location");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/footer/footer.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "Footer_address__Cj4AX": "footer-module__u_2CLq__Footer_address__Cj4AX",
  "Footer_blue__Hy8ea": "footer-module__u_2CLq__Footer_blue__Hy8ea",
  "Footer_footerTop__XBqF3": "footer-module__u_2CLq__Footer_footerTop__XBqF3",
  "Footer_footer__EQXzy": "footer-module__u_2CLq__Footer_footer__EQXzy",
  "Footer_grey__qmRgm": "footer-module__u_2CLq__Footer_grey__qmRgm",
  "Footer_logoWrapper__P93m7": "footer-module__u_2CLq__Footer_logoWrapper__P93m7",
  "Footer_logo__p1Zz4": "footer-module__u_2CLq__Footer_logo__p1Zz4",
  "Footer_navItem__DCCez": "footer-module__u_2CLq__Footer_navItem__DCCez",
  "Footer_navWrapper__xWSoa": "footer-module__u_2CLq__Footer_navWrapper__xWSoa",
  "Footer_o-site-container__7mBjf": "footer-module__u_2CLq__Footer_o-site-container__7mBjf",
  "Footer_privacyTerms__sz4zC": "footer-module__u_2CLq__Footer_privacyTerms__sz4zC",
  "Footer_socialIcon__bQEbt": "footer-module__u_2CLq__Footer_socialIcon__bQEbt",
  "Footer_socialLinks__zyHKp": "footer-module__u_2CLq__Footer_socialLinks__zyHKp",
  "Footer_socials__9ZNZ_": "footer-module__u_2CLq__Footer_socials__9ZNZ_",
  "Icon_icon___Kgo7": "footer-module__u_2CLq__Icon_icon___Kgo7",
  "MadeBy_o-site-container__MF_pf": "footer-module__u_2CLq__MadeBy_o-site-container__MF_pf",
  "MadeBy_text__cbSBi": "footer-module__u_2CLq__MadeBy_text__cbSBi",
  "MadeBy_wrapper__hnstJ": "footer-module__u_2CLq__MadeBy_wrapper__hnstJ",
  "blue": "footer-module__u_2CLq__blue",
  "gold": "footer-module__u_2CLq__gold",
  "icon": "footer-module__u_2CLq__icon",
  "promar": "footer-module__u_2CLq__promar",
});
}}),
"[project]/src/app/components/Home/footer/footer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/footer/footer.module.css [app-client] (css module)");
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_footer__EQXzy} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_footerTop__XBqF3,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_logoWrapper__P93m7,
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_logo__p1Zz4,
                            viewBox: "0 0 389 80",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_grey__qmRgm,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M127.9 35.859H117.855V10.7461H117.751L111.344 35.8659H104.475L97.8608 10.7461H97.7575V35.8659H89.6552V0.694031H103.752L108.774 19.3513H108.877L113.693 0.694031H127.893V35.859H127.9Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 11,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M154.997 28.9418H145.62L143.471 35.8591H134.707L145.62 0.694031H157.002L168.019 35.8591H157.002L155.004 28.9418H154.997ZM153.151 21.2529L150.278 11.0492L147.405 21.2529H153.144H153.151Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 12,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M195.688 35.8591L185.587 19.4065L182.459 13.0473L182.356 13.1506L182.459 13.5571C182.969 15.81 183.176 17.0433 183.176 19.4547V35.8591H174.412V0.694031H184.616L196.404 20.3228L196.508 20.2194L195.736 10.4774V0.694031H204.5V35.8591H195.681H195.688Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 13,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M241.821 23.2991C241.821 27.3985 241.36 30.678 237.977 33.3994C234.952 35.7557 231.266 36.3758 227.573 36.3758C224.342 36.3758 220.139 35.6592 217.425 33.861C213.684 31.4014 212.967 28.0668 212.967 23.8641V0.694031H223.935V22.6308C223.935 23.809 223.88 25.4005 224.604 26.4753C225.424 27.6052 227.063 28.0668 228.448 28.0668C229.681 28.0668 231.218 27.7085 232.141 26.8887C233.526 25.7105 233.374 23.8641 233.374 22.2243V0.694031H241.835V23.2991H241.821Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 14,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M261.491 35.8591H250.571V0.694031H264.922C268.36 0.694031 272.198 0.797376 275.229 2.54047C278.509 4.49026 280.459 7.97644 280.459 11.7658C280.459 15.1004 279.177 18.2765 276.559 20.3779C273.844 22.5826 270.358 23.0924 266.975 23.0924H261.491V35.8591ZM264.309 15.562C266.769 15.562 269.745 15.4104 269.745 12.1309C269.745 8.85144 267.079 8.74809 264.619 8.74809H261.491V15.562H264.309Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 15,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M320.019 18.3799C320.019 28.3769 313.867 36.3689 303.208 36.3689C292.55 36.3689 286.397 28.37 286.397 18.3799C286.397 7.87311 292.502 0.184204 303.208 0.184204C313.915 0.184204 320.019 7.87311 320.019 18.3799ZM297.931 18.435C297.931 21.8179 298.289 28.3286 303.208 28.3286C308.128 28.3286 308.493 21.8179 308.493 18.435C308.493 15.0522 307.976 8.12803 303.208 8.12803C298.441 8.12803 297.931 14.9971 297.931 18.435Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 16,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M337.898 35.8591H326.978V0.694031H344.87C347.943 0.694031 351.326 1.10741 353.944 2.84362C356.865 4.69006 358.25 7.81798 358.25 11.2491C358.25 15.8651 356.204 18.6279 352.05 20.5295L358.409 35.8591H346.414L341.288 22.431H337.905V35.8591H337.898ZM337.898 14.8937H341.846C344.202 14.8937 347.027 14.5354 347.027 11.5109C347.027 10.3327 346.414 9.20281 345.332 8.63786C344.409 8.17625 343.286 8.17625 342.259 8.17625H337.905V14.8937H337.898Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 17,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M380.538 35.8591H370.286V9.15458H362.907V0.694031H387.766V9.15458H380.538V35.8591Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 18,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M114.396 79.3055H89.7378V44.1405H100.61V70.6934H114.396V79.3055Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 19,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M154.322 61.8263C154.322 71.8233 148.169 79.8153 137.511 79.8153C126.853 79.8153 120.7 71.8164 120.7 61.8263C120.7 51.3195 126.798 43.6306 137.511 43.6306C148.224 43.6306 154.322 51.3195 154.322 61.8263ZM132.233 61.8814C132.233 65.2643 132.592 71.775 137.511 71.775C142.43 71.775 142.795 65.2643 142.795 61.8814C142.795 58.4986 142.279 51.5744 137.511 51.5744C132.743 51.5744 132.233 58.4435 132.233 61.8814Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 20,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M193.476 79.3055H188.192L186.759 75.6126C184.554 78.589 180.868 79.8153 177.23 79.8153C166.978 79.8153 161.494 71.9197 161.494 62.2879C161.494 57.6787 162.672 52.8559 165.593 49.2182C168.921 45.0154 173.179 43.6306 178.36 43.6306C186.511 43.6306 191.94 47.7851 193.483 55.8323L183.024 56.9071C182.611 54.0892 181.433 51.4229 178.153 51.4229C173.179 51.4229 172.876 58.0852 172.876 61.6747C172.876 63.721 172.979 66.284 173.799 68.1304C174.674 70.1835 176.362 71.5132 178.615 71.5132C181.385 71.5132 183.431 69.8184 183.431 67.0556H177.637V59.6216H193.476V79.3055Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 21,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M213.966 79.3055H203.101V44.1405H213.966V79.3055Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 22,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M232.21 67.3105C233.133 70.4385 235.489 71.5615 238.617 71.5615C240.002 71.5615 242.772 71.3548 242.772 69.4119C242.772 67.2623 240.05 66.8489 238.466 66.5389C231.852 65.2574 224.011 63.4661 224.011 55.1089C224.011 51.6778 225.706 48.2881 228.524 46.2901C231.397 44.292 235.138 43.6237 238.624 43.6237C244.728 43.6237 250.619 46.1385 252.769 52.2359L243.853 54.9504C242.827 52.3323 240.877 51.416 238.163 51.416C236.73 51.416 234.676 51.8294 234.676 53.6689C234.676 55.5085 237.239 55.8736 238.569 56.1837C241.904 56.852 245.438 57.4169 248.511 59.0016C251.949 60.848 253.74 64.1275 253.74 67.9719C253.74 76.4325 245.335 79.8153 238.052 79.8153C230.77 79.8153 224.108 76.7425 222.213 69.1019L232.21 67.3105Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 23,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M278.385 79.3055H268.133V52.601H260.754V44.1405H285.612V52.601H278.385V79.3055Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 24,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M304.876 79.3055H294.011V44.1405H304.876V79.3055Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 25,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M344.443 66.4906C343.775 74.5929 337.884 79.8153 329.789 79.8153C319.227 79.8153 313.694 72.1746 313.694 62.1846C313.694 52.1945 318.565 43.6306 329.637 43.6306C338.608 43.6306 343.734 48.9632 344.45 57.7269L334.405 58.2437C334.508 55.2673 333.378 51.5262 329.741 51.5262C324.973 51.5262 324.766 58.8569 324.766 62.1915C324.766 65.7259 324.973 71.7268 329.844 71.7268C333.179 71.7268 334.46 68.8056 334.612 65.8843L344.45 66.4975L344.443 66.4906Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 26,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M361.964 67.3105C362.887 70.4385 365.243 71.5615 368.371 71.5615C369.756 71.5615 372.526 71.3548 372.526 69.4119C372.526 67.2623 369.804 66.8489 368.22 66.5389C361.606 65.2574 353.765 63.4661 353.765 55.1089C353.765 51.6778 355.46 48.2881 358.278 46.2901C361.151 44.292 364.892 43.6237 368.378 43.6237C374.482 43.6237 380.373 46.1385 382.53 52.2359L373.607 54.9504C372.581 52.3323 370.631 51.416 367.916 51.416C366.483 51.416 364.43 51.8294 364.43 53.6689C364.43 55.5085 366.993 55.8736 368.323 56.1837C371.658 56.852 375.192 57.4169 378.265 59.0016C381.703 60.848 383.494 64.1275 383.494 67.9719C383.494 76.4325 375.089 79.8153 367.806 79.8153C360.524 79.8153 353.861 76.7425 351.967 69.1019L361.964 67.3105Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 27,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 10,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_blue__Hy8ea,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M19.8532 28.3271C29.2081 28.6302 36.4412 35.202 44.5079 39.0597C54.9443 44.3227 66.6757 49.5236 78.6138 46.9955V33.6245C63.6998 35.8014 49.578 28.892 36.9165 21.8586C31.502 18.8138 26.1495 14.8666 19.681 14.6875C12.0414 14.0468 5.04942 18.3385 0 23.7186V35.8082C5.55229 31.2204 12.4961 27.776 19.8532 28.3133V28.3271Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 30,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M14.2321 46.7268C20.673 45.3559 27.3826 47.3054 32.9555 50.5845C41.408 55.5581 50.0188 60.4698 59.4013 63.5008C65.5666 65.4778 72.2142 66.4354 78.6207 65.0301V51.5076C72.848 52.5133 66.9168 52.0931 61.275 50.5638C50.3426 47.6086 40.3816 42.0356 30.7098 36.2835C26.0806 33.5143 20.5559 32.0814 15.1689 32.9632C9.18264 33.8174 4.10567 37.5373 0.00689697 41.7945V53.9462C4.09878 50.4743 8.89332 47.6706 14.2389 46.7337L14.2321 46.7268Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 31,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M78.6207 79.3104V69.6318C73.3991 70.2862 68.0397 70.3 62.9145 68.9842C51.4379 66.2425 41.0015 60.4353 30.944 54.456C25.8877 51.418 19.7017 49.7716 13.8532 51.232C8.43177 52.4651 3.80256 55.8406 0 59.774V79.3104H78.6207Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 32,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0 0.689667V17.8012C5.93806 12.7862 13.6947 9.28676 21.603 10.4096C30.3654 11.4911 37.1783 17.5876 44.935 21.2111C55.2267 26.3432 66.9099 31.6199 78.6207 28.7336V0.689667H0Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 33,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 29,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                            lineNumber: 9,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navWrapper__xWSoa,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/services",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/commodities",
                                children: "Commodities"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/commodities/Pindar-by-Manuport-Logistics",
                                children: "Pindar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/digital",
                                children: "Digital"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/careers",
                                children: "Careers"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/blog",
                                children: "Blog"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/about",
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/contact",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Home/footer/footer.js",
                lineNumber: 7,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_socials__9ZNZ_,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_socialLinks__zyHKp,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.facebook.com/ManuportLogistics",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_socialIcon__bQEbt}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "currentColor",
                                            d: "M18.13 7.75h-4.26V5.84a1.001 1.001 0 0 1 1-1.1h3v-4h-4.33c-3.93 0-4.67 3-4.67 4.86v2.15h-3v4h3v11.5h5v-11.5h3.85l.41-4Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 53,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                                        lineNumber: 52,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/company/manuport-logistics",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_socialIcon__bQEbt}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "currentColor",
                                            d: "M5.67 22.63H.81V8.7h4.86v13.93Zm10.09-9.39a2.14 2.14 0 0 0-2.14 2.14v7.25H8.51V8.7h5.11v1.59a6.76 6.76 0 0 1 4.28-1.6c3.17 0 5.37 2.35 5.37 6.81v7.13H17.9v-7.25a2.14 2.14 0 0 0-2.14-2.15v.01Zm-10-9.36a2.5 2.5 0 1 1-2.5-2.5 2.5 2.5 0 0 1 2.48 2.5h.02Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 61,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                                        lineNumber: 60,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.instagram.com/manuportlogisticsglobal/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_socialIcon__bQEbt}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "currentColor",
                                            fillRule: "evenodd",
                                            d: "M5.812 1.35A4.464 4.464 0 0 0 1.348 5.81v11.904a4.464 4.464 0 0 0 4.464 4.464h11.904a4.464 4.464 0 0 0 4.462-4.464V5.811a4.464 4.464 0 0 0-4.462-4.462H5.812ZM19 5.817a1.286 1.286 0 1 1-2.572 0 1.286 1.286 0 0 1 2.572 0Zm-7.235 2.38a3.566 3.566 0 1 0 0 7.131 3.566 3.566 0 0 0 0-7.131Zm-5.281 3.565a5.28 5.28 0 1 1 10.56 0 5.28 5.28 0 0 1-10.56 0Z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 69,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                                        lineNumber: 68,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.tiktok.com/@manuportlogistics",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_socialIcon__bQEbt}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "currentColor",
                                            d: "M10.19 8.937v4.122a3.588 3.588 0 0 0-4.5 3.324 3.244 3.244 0 0 0 3.468 3.45 3.233 3.233 0 0 0 3.466-3.489V0h4.079c.694 4.314 2.85 5.316 5.74 5.778v4.134a12.285 12.285 0 0 1-5.625-1.899v8.167c-.003 3.695-2.193 7.82-7.63 7.82a7.665 7.665 0 0 1-7.628-7.858 7.515 7.515 0 0 1 8.63-7.205Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 77,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                                        lineNumber: 76,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_privacyTerms__sz4zC,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/conditions-disclaimer",
                                children: "Conditions &Disclaimer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            "| ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/privacy-statement",
                                children: "Privacy Statement"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.borndigital.be",
                        target: "_blank",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].MadeBy_wrapper__hnst,
                        "aria-label": "Born Digital",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].MadeBy_text__cbSBi,
                                children: "Made by"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 26 20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        fill: "currentColor",
                                        clipPath: "url(#BDLogo_svg__a)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21.77 8.26c-.784 0-1.5-.18-2.15-.516-.65-.359-1.164-.83-1.545-1.459a4.085 4.085 0 0 1-.582-2.155c0-.808.202-1.526.582-2.155A3.869 3.869 0 0 1 19.62.516 4.605 4.605 0 0 1 21.77 0c.783 0 1.477.18 2.126.516a3.87 3.87 0 0 1 1.544 1.46c.38.628.56 1.346.56 2.154 0 .808-.18 1.527-.56 2.155a3.87 3.87 0 0 1-1.544 1.46 4.58 4.58 0 0 1-2.127.515Zm-.046-.875c.627 0 1.187-.135 1.68-.404.492-.27.895-.651 1.186-1.145.29-.494.425-1.055.425-1.706 0-.628-.134-1.212-.425-1.706a2.918 2.918 0 0 0-1.187-1.145c-.492-.269-1.052-.404-1.679-.404-.626 0-1.164.135-1.679.404-.492.27-.895.651-1.186 1.145-.291.494-.425 1.055-.425 1.706 0 .629.134 1.19.425 1.684.29.494.671.875 1.164 1.144.515.292 1.075.427 1.701.427ZM20.27 6.128V2.11h1.59c.649 0 1.164.18 1.5.539.335.359.514.853.514 1.481 0 .651-.179 1.145-.537 1.482-.358.336-.85.516-1.477.516h-1.59Zm1.03-.449-.492-.494h1.03c.313 0 .559-.09.716-.292.156-.202.246-.449.246-.785 0-.36-.09-.629-.269-.808-.179-.18-.403-.27-.716-.27h-1.03l.493-.494V5.68h.022ZM.167 20V0H9.21c1.164 0 2.193.224 3.089.673.895.45 1.612 1.078 2.104 1.863.493.786.739 1.706.739 2.717 0 1.077-.269 2.02-.828 2.828-.56.808-1.299 1.392-2.284 1.773 1.075.314 1.925.898 2.552 1.729.605.852.918 1.863.918 3.052 0 1.1-.269 2.065-.806 2.873-.537.809-1.276 1.415-2.26 1.841-.963.427-2.105.629-3.381.629H.167V20ZM7.912 8.26c.85 0 1.545-.202 2.015-.628.492-.427.739-1.01.739-1.773-.023-.719-.269-1.28-.74-1.684-.47-.404-1.118-.628-1.947-.628H4.442V8.26h3.47Zm.358 8.193c.896 0 1.59-.224 2.06-.65.47-.427.716-1.033.716-1.774 0-.763-.246-1.347-.739-1.773-.492-.427-1.164-.629-2.014-.629h-3.85v4.826H8.27Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 91,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "BDLogo_svg__a",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#fff",
                                                d: "M.167 0H26v20H.167z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                                lineNumber: 95,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 94,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Home/footer/footer.js",
                lineNumber: 48,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Home/footer/footer.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_refresh__.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/ctaBlock/ctaBlock.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "Button_anti-bob__G1XfJ": "ctaBlock-module__LK2AxG__Button_anti-bob__G1XfJ",
  "Button_bob__3_pUe": "ctaBlock-module__LK2AxG__Button_bob__3_pUe",
  "Button_button__T6zT9": "ctaBlock-module__LK2AxG__Button_button__T6zT9",
  "Button_darkmode__ozqJQ": "ctaBlock-module__LK2AxG__Button_darkmode__ozqJQ",
  "Button_goldLight__ZvTNn": "ctaBlock-module__LK2AxG__Button_goldLight__ZvTNn",
  "Button_iconButton__fsKFn": "ctaBlock-module__LK2AxG__Button_iconButton__fsKFn",
  "Button_icon__Rt_Hz": "ctaBlock-module__LK2AxG__Button_icon__Rt_Hz",
  "Button_o-site-container__ks40o": "ctaBlock-module__LK2AxG__Button_o-site-container__ks40o",
  "Button_primary__b__QL": "ctaBlock-module__LK2AxG__Button_primary__b__QL",
  "Button_titleWrapper__Glw9g": "ctaBlock-module__LK2AxG__Button_titleWrapper__Glw9g",
  "CtaBlock_CargoBarging__2X_Yi": "ctaBlock-module__LK2AxG__CtaBlock_CargoBarging__2X_Yi",
  "CtaBlock_CargoTruck__2gjEY": "ctaBlock-module__LK2AxG__CtaBlock_CargoTruck__2gjEY",
  "CtaBlock___Flooring__JBc5r": "ctaBlock-module__LK2AxG__CtaBlock___Flooring__JBc5r",
  "CtaBlock_active__t5HIF": "ctaBlock-module__LK2AxG__CtaBlock_active__t5HIF",
  "CtaBlock_animatedImage__AL5Rq": "ctaBlock-module__LK2AxG__CtaBlock_animatedImage__AL5Rq",
  "CtaBlock_animatedVideo__KIFx4": "ctaBlock-module__LK2AxG__CtaBlock_animatedVideo__KIFx4",
  "CtaBlock_background__Goley": "ctaBlock-module__LK2AxG__CtaBlock_background__Goley",
  "CtaBlock_container__nHh2p": "ctaBlock-module__LK2AxG__CtaBlock_container__nHh2p",
  "CtaBlock_content__87Op8": "ctaBlock-module__LK2AxG__CtaBlock_content__87Op8",
  "CtaBlock_dark__Vqkj3": "ctaBlock-module__LK2AxG__CtaBlock_dark__Vqkj3",
  "CtaBlock_default__4hQ8L": "ctaBlock-module__LK2AxG__CtaBlock_default__4hQ8L",
  "CtaBlock_fromBottom__FP36m": "ctaBlock-module__LK2AxG__CtaBlock_fromBottom__FP36m",
  "CtaBlock_fromRight__pmZrF": "ctaBlock-module__LK2AxG__CtaBlock_fromRight__pmZrF",
  "CtaBlock_imageAnimWrapper__8yppU": "ctaBlock-module__LK2AxG__CtaBlock_imageAnimWrapper__8yppU",
  "CtaBlock_imageWrapper__d_ZrU": "ctaBlock-module__LK2AxG__CtaBlock_imageWrapper__d_ZrU",
  "CtaBlock_image__ZWyx1": "ctaBlock-module__LK2AxG__CtaBlock_image__ZWyx1",
  "CtaBlock_inactive__UBkTw": "ctaBlock-module__LK2AxG__CtaBlock_inactive__UBkTw",
  "CtaBlock_info__DVPeC": "ctaBlock-module__LK2AxG__CtaBlock_info__DVPeC",
  "CtaBlock_left__m_YMo": "ctaBlock-module__LK2AxG__CtaBlock_left__m_YMo",
  "CtaBlock_o-site-container__EBaL9": "ctaBlock-module__LK2AxG__CtaBlock_o-site-container__EBaL9",
  "CtaBlock_right__cyR7S": "ctaBlock-module__LK2AxG__CtaBlock_right__cyR7S",
  "CtaBlock_secondaryImageAnimWrapper__rsqz3": "ctaBlock-module__LK2AxG__CtaBlock_secondaryImageAnimWrapper__rsqz3",
  "CtaBlock_secondaryImage__NSFSe": "ctaBlock-module__LK2AxG__CtaBlock_secondaryImage__NSFSe",
  "CtaBlock_section__bNFj7": "ctaBlock-module__LK2AxG__CtaBlock_section__bNFj7",
  "CtaBlock_title__enemh": "ctaBlock-module__LK2AxG__CtaBlock_title__enemh",
  "CtaBlock_toLeft__PJNZ6": "ctaBlock-module__LK2AxG__CtaBlock_toLeft__PJNZ6",
  "CtaBlock_toTop__YOw4U": "ctaBlock-module__LK2AxG__CtaBlock_toTop__YOw4U",
  "CtaBlock_videoAnimWrapper__MFcyz": "ctaBlock-module__LK2AxG__CtaBlock_videoAnimWrapper__MFcyz",
  "CtaBlock_videoWrapper__ZHqAx": "ctaBlock-module__LK2AxG__CtaBlock_videoWrapper__ZHqAx",
  "CtaBlock_video__image__RLW28": "ctaBlock-module__LK2AxG__CtaBlock_video__image__RLW28",
  "CtaBlock_video__xkBJd": "ctaBlock-module__LK2AxG__CtaBlock_video__xkBJd",
  "Icon_icon___Kgo7": "ctaBlock-module__LK2AxG__Icon_icon___Kgo7",
  "Navigation_ctaButton__bL_kC": "ctaBlock-module__LK2AxG__Navigation_ctaButton__bL_kC",
  "Navigation_iconwrapper__TR4Vj": "ctaBlock-module__LK2AxG__Navigation_iconwrapper__TR4Vj",
  "UspItem_light__BSdNE": "ctaBlock-module__LK2AxG__UspItem_light__BSdNE",
  "UspItem_line__xiQ1n": "ctaBlock-module__LK2AxG__UspItem_line__xiQ1n",
  "darkmode": "ctaBlock-module__LK2AxG__darkmode",
  "gold": "ctaBlock-module__LK2AxG__gold",
  "icon": "ctaBlock-module__LK2AxG__icon",
});
}}),
"[project]/src/app/components/Home/ctaBlock/ctaBlock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/ctaBlock/ctaBlock.module.css [app-client] (css module)");
;
;
;
const CtaBlock = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_section__bNFj7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_default__4hQ8L}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_container__nHh2p} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_right__cyR7S}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_content__87Op8} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_right__cyR7S}`,
                    style: {
                        transform: 'translateY(24px) translateZ(0)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_title__enemh,
                                children: "How we Move"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                lineNumber: 10,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                            lineNumber: 9,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_info__DVPeC,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Manuport Logistics brings a fresh perspective to shipping, powered by creative solutions. Whether by ship, barge, plane, train, truck, or a mix, we move mountains for you."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                            lineNumber: 15,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                        lineNumber: 14,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                    lineNumber: 13,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_primary__b__QL} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_goldLight__ZvTNn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE}`,
                                        "aria-label": "Discover our Services",
                                        href: "/services",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g,
                                                children: "Discover our Services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                                lineNumber: 20,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconwrapper}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon}`,
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
                                                                fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                                                lineNumber: 24,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fill: "currentColor",
                                                                fillRule: "evenodd",
                                                                d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                                                lineNumber: 25,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                                        lineNumber: 23,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                                    lineNumber: 22,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                                lineNumber: 21,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                        lineNumber: 19,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                    lineNumber: 18,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                            lineNumber: 12,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                    lineNumber: 8,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_videoWrapper__ZHqAx} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_default__4hQ8L} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_right__cyR7S}`,
                    style: {
                        transform: 'none'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_videoAnimWrapper__MFcyz,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_video__xkBJd,
                            style: {
                                left: '10%'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                alt: "cargo Ship image",
                                loading: "lazy",
                                width: "968",
                                height: "847",
                                decoding: "async",
                                "data-nimg": "1",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_video__image__RLW28,
                                style: {
                                    color: 'transparent'
                                },
                                sizes: "(max-width: 768px) 640px, (max-width: 1200px) 1024px, 1024px",
                                srcSet: "images/Cargo-Plane-Business.png"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                lineNumber: 36,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                            lineNumber: 35,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                        lineNumber: 34,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                    lineNumber: 33,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
_c = CtaBlock;
const __TURBOPACK__default__export__ = CtaBlock;
var _c;
__turbopack_refresh__.register(_c, "CtaBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/Section/section.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "Button_back___SPoE": "section-module__u-BWLG__Button_back___SPoE",
  "Button_bob__3_pUe": "section-module__u-BWLG__Button_bob__3_pUe",
  "Button_button__T6zT9": "section-module__u-BWLG__Button_button__T6zT9",
  "Button_darkmode__ozqJQ": "section-module__u-BWLG__Button_darkmode__ozqJQ",
  "Button_goldDark__LAUet": "section-module__u-BWLG__Button_goldDark__LAUet",
  "Button_goldLight__ZvTNn": "section-module__u-BWLG__Button_goldLight__ZvTNn",
  "Button_iconButton__fsKFn": "section-module__u-BWLG__Button_iconButton__fsKFn",
  "Button_icon__Rt_Hz": "section-module__u-BWLG__Button_icon__Rt_Hz",
  "Button_primary__b__QL": "section-module__u-BWLG__Button_primary__b__QL",
  "Button_secondary__8ZLTI": "section-module__u-BWLG__Button_secondary__8ZLTI",
  "Button_tertiary__JUfBS": "section-module__u-BWLG__Button_tertiary__JUfBS",
  "Button_titleWrapper__Glw9g": "section-module__u-BWLG__Button_titleWrapper__Glw9g",
  "CtaBlock_CargoBarging__2X_Yi": "section-module__u-BWLG__CtaBlock_CargoBarging__2X_Yi",
  "CtaBlock_CargoTruck__2gjEY": "section-module__u-BWLG__CtaBlock_CargoTruck__2gjEY",
  "CtaBlock___Flooring__JBc5r": "section-module__u-BWLG__CtaBlock___Flooring__JBc5r",
  "CtaBlock_animatedImage__AL5Rq": "section-module__u-BWLG__CtaBlock_animatedImage__AL5Rq",
  "CtaBlock_animatedVideo__KIFx4": "section-module__u-BWLG__CtaBlock_animatedVideo__KIFx4",
  "CtaBlock_background__Goley": "section-module__u-BWLG__CtaBlock_background__Goley",
  "CtaBlock_container__nHh2p": "section-module__u-BWLG__CtaBlock_container__nHh2p",
  "CtaBlock_content__87Op8": "section-module__u-BWLG__CtaBlock_content__87Op8",
  "CtaBlock_dark__Vqkj3": "section-module__u-BWLG__CtaBlock_dark__Vqkj3",
  "CtaBlock_default__4hQ8L": "section-module__u-BWLG__CtaBlock_default__4hQ8L",
  "CtaBlock_fromBottom__FP36m": "section-module__u-BWLG__CtaBlock_fromBottom__FP36m",
  "CtaBlock_fromRight__pmZrF": "section-module__u-BWLG__CtaBlock_fromRight__pmZrF",
  "CtaBlock_imageAnimWrapper__8yppU": "section-module__u-BWLG__CtaBlock_imageAnimWrapper__8yppU",
  "CtaBlock_imageWrapper__d_ZrU": "section-module__u-BWLG__CtaBlock_imageWrapper__d_ZrU",
  "CtaBlock_image__ZWyx1": "section-module__u-BWLG__CtaBlock_image__ZWyx1",
  "CtaBlock_info__DVPeC": "section-module__u-BWLG__CtaBlock_info__DVPeC",
  "CtaBlock_left__m_YMo": "section-module__u-BWLG__CtaBlock_left__m_YMo",
  "CtaBlock_o-site-container__EBaL9": "section-module__u-BWLG__CtaBlock_o-site-container__EBaL9",
  "CtaBlock_right__cyR7S": "section-module__u-BWLG__CtaBlock_right__cyR7S",
  "CtaBlock_secondaryImageAnimWrapper__rsqz3": "section-module__u-BWLG__CtaBlock_secondaryImageAnimWrapper__rsqz3",
  "CtaBlock_secondaryImage__NSFSe": "section-module__u-BWLG__CtaBlock_secondaryImage__NSFSe",
  "CtaBlock_section__bNFj7": "section-module__u-BWLG__CtaBlock_section__bNFj7",
  "CtaBlock_title__enemh": "section-module__u-BWLG__CtaBlock_title__enemh",
  "CtaBlock_toLeft__PJNZ6": "section-module__u-BWLG__CtaBlock_toLeft__PJNZ6",
  "CtaBlock_toTop__YOw4U": "section-module__u-BWLG__CtaBlock_toTop__YOw4U",
  "CtaBlock_videoAnimWrapper__MFcyz": "section-module__u-BWLG__CtaBlock_videoAnimWrapper__MFcyz",
  "CtaBlock_videoWrapper__ZHqAx": "section-module__u-BWLG__CtaBlock_videoWrapper__ZHqAx",
  "CtaBlock_video__image__RLW28": "section-module__u-BWLG__CtaBlock_video__image__RLW28",
  "CtaBlock_video__xkBJd": "section-module__u-BWLG__CtaBlock_video__xkBJd",
  "darkmode": "section-module__u-BWLG__darkmode",
  "gold": "section-module__u-BWLG__gold",
  "icon": "section-module__u-BWLG__icon",
});
}}),
"[project]/src/app/components/Home/Section/section.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/Section/section.module.css [app-client] (css module)");
'use client';
;
;
function Section() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_section__bNFj7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_dark__Vqkj3}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_container__nHh2p} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_left__m_YMo}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_content__87Op8} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_left__m_YMo}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_title__enemh,
                                    children: "What we Move"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/Section/section.js",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/Section/section.js",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_info__DVPeC,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Behind every shipment is a world of opportunities. From raw materials and chemicals to consumer goods and beyond, we don’t just move cargo—we carry your dreams."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Section/section.js",
                                                lineNumber: 17,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/Section/section.js",
                                            lineNumber: 16,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/Section/section.js",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_primary__b__QL} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_darkmode__ozqJQ} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_goldLight__ZvTNn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_goldDark__LAUet} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE}`,
                                            "aria-label": "About our Commodities",
                                            href: "/commodities",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g,
                                                    children: "About our Commodities"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/Section/section.js",
                                                    lineNumber: 28,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconwrapper}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon}`,
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
                                                                    fileName: "[project]/src/app/components/Home/Section/section.js",
                                                                    lineNumber: 40,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "currentColor",
                                                                    fillRule: "evenodd",
                                                                    d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Section/section.js",
                                                                    lineNumber: 46,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Section/section.js",
                                                            lineNumber: 35,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Home/Section/section.js",
                                                        lineNumber: 34,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/Section/section.js",
                                                    lineNumber: 31,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/Section/section.js",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/Section/section.js",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Home/Section/section.js",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/Section/section.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_videoWrapper__ZHqAx} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_dark__Vqkj3} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_left__m_YMo}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_videoAnimWrapper__MFcyz,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                alt: "Manuport logistics commodity",
                                loading: "lazy",
                                width: "727",
                                height: "727",
                                "data-nimg": "1",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_inactive__UBkTw} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_animatedImage__AL5Rq}`,
                                src: "/images/Flooring-Business.png"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/Section/section.js",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/Section/section.js",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/Section/section.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Home/Section/section.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_background__Goley
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/Section/section.js",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Home/Section/section.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Section;
const __TURBOPACK__default__export__ = Section;
var _c;
__turbopack_refresh__.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/imagewrap/imagewrap.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "Button_anti-bob__G1XfJ": "imagewrap-module__q81Ugq__Button_anti-bob__G1XfJ",
  "Button_bob__3_pUe": "imagewrap-module__q81Ugq__Button_bob__3_pUe",
  "Button_button__T6zT9": "imagewrap-module__q81Ugq__Button_button__T6zT9",
  "Button_darkmode__ozqJQ": "imagewrap-module__q81Ugq__Button_darkmode__ozqJQ",
  "Button_goldLight__ZvTNn": "imagewrap-module__q81Ugq__Button_goldLight__ZvTNn",
  "Button_iconButton__fsKFn": "imagewrap-module__q81Ugq__Button_iconButton__fsKFn",
  "Button_icon__Rt_Hz": "imagewrap-module__q81Ugq__Button_icon__Rt_Hz",
  "Button_o-site-container__ks40o": "imagewrap-module__q81Ugq__Button_o-site-container__ks40o",
  "Button_primary__b__QL": "imagewrap-module__q81Ugq__Button_primary__b__QL",
  "Button_titleWrapper__Glw9g": "imagewrap-module__q81Ugq__Button_titleWrapper__Glw9g",
  "CtaBlock_CargoBarging__2X_Yi": "imagewrap-module__q81Ugq__CtaBlock_CargoBarging__2X_Yi",
  "CtaBlock_CargoTruck__2gjEY": "imagewrap-module__q81Ugq__CtaBlock_CargoTruck__2gjEY",
  "CtaBlock___Flooring__JBc5r": "imagewrap-module__q81Ugq__CtaBlock___Flooring__JBc5r",
  "CtaBlock_active__t5HIF": "imagewrap-module__q81Ugq__CtaBlock_active__t5HIF",
  "CtaBlock_animatedImage__AL5Rq": "imagewrap-module__q81Ugq__CtaBlock_animatedImage__AL5Rq",
  "CtaBlock_animatedVideo__KIFx4": "imagewrap-module__q81Ugq__CtaBlock_animatedVideo__KIFx4",
  "CtaBlock_background__Goley": "imagewrap-module__q81Ugq__CtaBlock_background__Goley",
  "CtaBlock_container__nHh2p": "imagewrap-module__q81Ugq__CtaBlock_container__nHh2p",
  "CtaBlock_content__87Op8": "imagewrap-module__q81Ugq__CtaBlock_content__87Op8",
  "CtaBlock_dark__Vqkj3": "imagewrap-module__q81Ugq__CtaBlock_dark__Vqkj3",
  "CtaBlock_default__4hQ8L": "imagewrap-module__q81Ugq__CtaBlock_default__4hQ8L",
  "CtaBlock_fromBottom__FP36m": "imagewrap-module__q81Ugq__CtaBlock_fromBottom__FP36m",
  "CtaBlock_fromRight__pmZrF": "imagewrap-module__q81Ugq__CtaBlock_fromRight__pmZrF",
  "CtaBlock_imageAnimWrapper__8yppU": "imagewrap-module__q81Ugq__CtaBlock_imageAnimWrapper__8yppU",
  "CtaBlock_imageWrapper__d_ZrU": "imagewrap-module__q81Ugq__CtaBlock_imageWrapper__d_ZrU",
  "CtaBlock_image__ZWyx1": "imagewrap-module__q81Ugq__CtaBlock_image__ZWyx1",
  "CtaBlock_inactive__UBkTw": "imagewrap-module__q81Ugq__CtaBlock_inactive__UBkTw",
  "CtaBlock_info__DVPeC": "imagewrap-module__q81Ugq__CtaBlock_info__DVPeC",
  "CtaBlock_left__m_YMo": "imagewrap-module__q81Ugq__CtaBlock_left__m_YMo",
  "CtaBlock_o-site-container__EBaL9": "imagewrap-module__q81Ugq__CtaBlock_o-site-container__EBaL9",
  "CtaBlock_right__cyR7S": "imagewrap-module__q81Ugq__CtaBlock_right__cyR7S",
  "CtaBlock_secondaryImageAnimWrapper__rsqz3": "imagewrap-module__q81Ugq__CtaBlock_secondaryImageAnimWrapper__rsqz3",
  "CtaBlock_secondaryImage__NSFSe": "imagewrap-module__q81Ugq__CtaBlock_secondaryImage__NSFSe",
  "CtaBlock_section__bNFj7": "imagewrap-module__q81Ugq__CtaBlock_section__bNFj7",
  "CtaBlock_title__enemh": "imagewrap-module__q81Ugq__CtaBlock_title__enemh",
  "CtaBlock_toLeft__PJNZ6": "imagewrap-module__q81Ugq__CtaBlock_toLeft__PJNZ6",
  "CtaBlock_toTop__YOw4U": "imagewrap-module__q81Ugq__CtaBlock_toTop__YOw4U",
  "CtaBlock_videoAnimWrapper__MFcyz": "imagewrap-module__q81Ugq__CtaBlock_videoAnimWrapper__MFcyz",
  "CtaBlock_videoWrapper__ZHqAx": "imagewrap-module__q81Ugq__CtaBlock_videoWrapper__ZHqAx",
  "CtaBlock_video__image__RLW28": "imagewrap-module__q81Ugq__CtaBlock_video__image__RLW28",
  "CtaBlock_video__xkBJd": "imagewrap-module__q81Ugq__CtaBlock_video__xkBJd",
  "Icon_icon___Kgo7": "imagewrap-module__q81Ugq__Icon_icon___Kgo7",
  "darkmode": "imagewrap-module__q81Ugq__darkmode",
  "gold": "imagewrap-module__q81Ugq__gold",
  "icon": "imagewrap-module__q81Ugq__icon",
});
}}),
"[project]/src/app/components/Home/imagewrap/imagewrap.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/imagewrap/imagewrap.module.css [app-client] (css module)");
;
;
;
const Imagewrap = ()=>{
    const focus = '100%';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_section__bNFj7,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_container__nHh2p} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_right__cyR7S}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_content__87Op8} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_right__cyR7S}`,
                    style: {
                        transform: 'translateY(24px) translateZ(0)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_title__enemh,
                                children: "A Fully Transparent Logistics Flow at your Fingertips"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_info__DVPeC,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We map out your entire logistics flow, so you always know the whereabouts of your cargo. With our user-friendly tool, you have full control and can make quick adjustments when necessary."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                            lineNumber: 17,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_primary__b__QL} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_goldLight__ZvTNn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE}`,
                                        "aria-label": "Discover our Customer Portal",
                                        href: "/digital",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g,
                                                children: "Discover our Customer Portal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                                lineNumber: 22,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconwrapper}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon}`,
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
                                                                fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                                                lineNumber: 26,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fill: "currentColor",
                                                                fillRule: "evenodd",
                                                                d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                                                lineNumber: 27,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                                        lineNumber: 25,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                                    lineNumber: 24,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                                lineNumber: 23,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_imageWrapper__d_ZrU} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_right__cyR7S}`,
                    style: {
                        transform: 'none'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_imageAnimWrapper__8yppU,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "Manuport logistics",
                            loading: "eager",
                            width: "536",
                            height: "624",
                            decoding: "async",
                            "data-nimg": "1",
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_image__ZWyx1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                            style: {
                                color: 'transparent',
                                backgroundSize: 'cover',
                                backgroundPosition: '50% 50%',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 536 624'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%' height='100%'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%' height='100%' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/50x0/filters:blur(10):focal(${focus})'/%3E%3C/svg%3E")`
                            },
                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw",
                            srcSet: "https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/96x112/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/128x149/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/256x298/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/320x373/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/384x447/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/450x524/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/600x699/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/768x894/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/1024x1192/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/1360x1583/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/1720x2002/filters:quality(95):focal() 1720w",
                            src: "https://a.storyblok.com/f/240783/1080x622/44f5d62fa7/screen_business.png/m/1720x2002/filters:quality(95):focal() 1720w"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/imagewrap/imagewrap.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = Imagewrap;
const __TURBOPACK__default__export__ = Imagewrap;
var _c;
__turbopack_refresh__.register(_c, "Imagewrap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/About/about.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "AboutBlock_button__gGFFn": "about-module__aUbYna__AboutBlock_button__gGFFn",
  "AboutBlock_cardImageWrapper__QcDd4": "about-module__aUbYna__AboutBlock_cardImageWrapper__QcDd4",
  "AboutBlock_cardImage__3eqAu": "about-module__aUbYna__AboutBlock_cardImage__3eqAu",
  "AboutBlock_cardWrapper__Nhths": "about-module__aUbYna__AboutBlock_cardWrapper__Nhths",
  "AboutBlock_card__gxXEg": "about-module__aUbYna__AboutBlock_card__gxXEg",
  "AboutBlock_cardtextWrapper__b06bU": "about-module__aUbYna__AboutBlock_cardtextWrapper__b06bU",
  "AboutBlock_cardtitle__zemEt": "about-module__aUbYna__AboutBlock_cardtitle__zemEt",
  "AboutBlock_cardvariant__CK8bi": "about-module__aUbYna__AboutBlock_cardvariant__CK8bi",
  "AboutBlock_container___ieX0": "about-module__aUbYna__AboutBlock_container___ieX0",
  "AboutBlock_iconWrapper__JivBc": "about-module__aUbYna__AboutBlock_iconWrapper__JivBc",
  "AboutBlock_icon__lsHnW": "about-module__aUbYna__AboutBlock_icon__lsHnW",
  "AboutBlock_imageMove__MFYcS": "about-module__aUbYna__AboutBlock_imageMove__MFYcS",
  "AboutBlock_imageSection__6z_Kp": "about-module__aUbYna__AboutBlock_imageSection__6z_Kp",
  "AboutBlock_imageWrapper__46_w_": "about-module__aUbYna__AboutBlock_imageWrapper__46_w_",
  "AboutBlock_image__znq8o": "about-module__aUbYna__AboutBlock_image__znq8o",
  "AboutBlock_infoSection__rhhGb": "about-module__aUbYna__AboutBlock_infoSection__rhhGb",
  "AboutBlock_info__jqTAN": "about-module__aUbYna__AboutBlock_info__jqTAN",
  "AboutBlock_link__HwftW": "about-module__aUbYna__AboutBlock_link__HwftW",
  "AboutBlock_o-site-container__ekSty": "about-module__aUbYna__AboutBlock_o-site-container__ekSty",
  "AboutBlock_section__9WQmC": "about-module__aUbYna__AboutBlock_section__9WQmC",
  "AboutBlock_textSection__toSlF": "about-module__aUbYna__AboutBlock_textSection__toSlF",
  "AboutBlock_titleLarge__hwrwt": "about-module__aUbYna__AboutBlock_titleLarge__hwrwt",
  "AboutBlock_titleSmall__f0IN5": "about-module__aUbYna__AboutBlock_titleSmall__f0IN5",
  "AboutBlock_videoMove__s_Zgz": "about-module__aUbYna__AboutBlock_videoMove__s_Zgz",
  "AboutBlock_videoWrapper__s0vxa": "about-module__aUbYna__AboutBlock_videoWrapper__s0vxa",
  "AboutBlock_video__CKPzH": "about-module__aUbYna__AboutBlock_video__CKPzH",
  "Button_anti-bob__G1XfJ": "about-module__aUbYna__Button_anti-bob__G1XfJ",
  "Button_bob__3_pUe": "about-module__aUbYna__Button_bob__3_pUe",
  "Button_button__T6zT9": "about-module__aUbYna__Button_button__T6zT9",
  "Button_darkmode__ozqJQ": "about-module__aUbYna__Button_darkmode__ozqJQ",
  "Button_goldLight__ZvTNn": "about-module__aUbYna__Button_goldLight__ZvTNn",
  "Button_iconButton__fsKFn": "about-module__aUbYna__Button_iconButton__fsKFn",
  "Button_icon__Rt_Hz": "about-module__aUbYna__Button_icon__Rt_Hz",
  "Button_primary__b__QL": "about-module__aUbYna__Button_primary__b__QL",
  "Button_titleWrapper__Glw9g": "about-module__aUbYna__Button_titleWrapper__Glw9g",
  "Icon_icon___Kgo7": "about-module__aUbYna__Icon_icon___Kgo7",
  "JobsCard_info__mr8vF": "about-module__aUbYna__JobsCard_info__mr8vF",
  "darkmode": "about-module__aUbYna__darkmode",
  "gold": "about-module__aUbYna__gold",
  "icon": "about-module__aUbYna__icon",
});
}}),
"[project]/src/app/components/Home/About/about.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/About/about.module.css [app-client] (css module)");
;
;
;
const About = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_section__9WQmC,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_container___ieX0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_imageSection__6z_Kp,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_titleLarge__hwrwt,
                            children: "A Unique Company Culture"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/About/about.js",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_videoWrapper__s0vxa,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_videoMove__s_Zgz,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_video__CKPzH,
                                    width: "1418",
                                    height: "628",
                                    playsInline: true,
                                    autoPlay: true,
                                    src: "https://pub-1658b62356034e6383dac2ceabbea7a0.r2.dev/people1-video-extracompressed.mp4",
                                    muted: true,
                                    loop: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/About/about.js",
                                    lineNumber: 12,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/About/about.js",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/About/about.js",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/About/about.js",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_textSection__toSlF,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_titleSmall__f0IN5,
                        children: "With a heart for logistics and great teamwork"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/About/about.js",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/About/about.js",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_infoSection__rhhGb,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_info__jqTAN,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "The MPL family: a team that consists of more than 700 differentiators, spread across the globe. They all have one thing in common: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "a passion for logistics!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/About/about.js",
                                        lineNumber: 35,
                                        columnNumber: 146
                                    }, this),
                                    "They're highly skilled and hands-on, driven by the goal of making logistics more efficient and reliable, and with a commitment to putting our customers first. We do this by using our creative solutions to gain customers' trust, and deliver ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "satisfaction"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/About/about.js",
                                        lineNumber: 36,
                                        columnNumber: 265
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Home/About/about.js",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: `button primary ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_primary__b__QL} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_darkmode__ozqJQ} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_button__gGFFn}`,
                                "aria-label": "Join our Team",
                                href: "/careers",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsCard_title__tjjE7}`,
                                        children: "Join our Team"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/About/about.js",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconwrapper}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon}`,
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
                                                        fileName: "[project]/src/app/components/Home/About/about.js",
                                                        lineNumber: 47,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "currentColor",
                                                        fillRule: "evenodd",
                                                        d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Home/About/about.js",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Home/About/about.js",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/About/about.js",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/About/about.js",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Home/About/about.js",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/About/about.js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/About/about.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Home/About/about.js",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/About/about.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_refresh__.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/Job/job.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "Button_anti-bob__G1XfJ": "job-module__D-5L7q__Button_anti-bob__G1XfJ",
  "Button_bob__3_pUe": "job-module__D-5L7q__Button_bob__3_pUe",
  "Button_button__T6zT9": "job-module__D-5L7q__Button_button__T6zT9",
  "Button_darkmode__ozqJQ": "job-module__D-5L7q__Button_darkmode__ozqJQ",
  "Button_goldDark__LAUet": "job-module__D-5L7q__Button_goldDark__LAUet",
  "Button_goldLight__ZvTNn": "job-module__D-5L7q__Button_goldLight__ZvTNn",
  "Button_iconButton__fsKFn": "job-module__D-5L7q__Button_iconButton__fsKFn",
  "Button_icon__Rt_Hz": "job-module__D-5L7q__Button_icon__Rt_Hz",
  "Button_o-site-container__ks40o": "job-module__D-5L7q__Button_o-site-container__ks40o",
  "Button_primary__b__QL": "job-module__D-5L7q__Button_primary__b__QL",
  "Button_secondary__8ZLTI": "job-module__D-5L7q__Button_secondary__8ZLTI",
  "Button_titleWrapper__Glw9g": "job-module__D-5L7q__Button_titleWrapper__Glw9g",
  "Icon_icon___Kgo7": "job-module__D-5L7q__Icon_icon___Kgo7",
  "JobsBlock_button__lIDsB": "job-module__D-5L7q__JobsBlock_button__lIDsB",
  "JobsBlock_cardWrapper__23TBW": "job-module__D-5L7q__JobsBlock_cardWrapper__23TBW",
  "JobsBlock_container__28saQ": "job-module__D-5L7q__JobsBlock_container__28saQ",
  "JobsBlock_largeTitle__RYiIZ": "job-module__D-5L7q__JobsBlock_largeTitle__RYiIZ",
  "JobsBlock_o-site-container__AC3bF": "job-module__D-5L7q__JobsBlock_o-site-container__AC3bF",
  "JobsBlock_section__2OMCO": "job-module__D-5L7q__JobsBlock_section__2OMCO",
  "JobsBlock_smallTitle__gk_sO": "job-module__D-5L7q__JobsBlock_smallTitle__gk_sO",
  "JobsBlock_textWrapper__yQx7Q": "job-module__D-5L7q__JobsBlock_textWrapper__yQx7Q",
  "JobsCard_buttonIcon__rxzEr": "job-module__D-5L7q__JobsCard_buttonIcon__rxzEr",
  "JobsCard_button__RAf_R": "job-module__D-5L7q__JobsCard_button__RAf_R",
  "JobsCard_dateIcon__k1xlv": "job-module__D-5L7q__JobsCard_dateIcon__k1xlv",
  "JobsCard_dateWrapper__HB3DM": "job-module__D-5L7q__JobsCard_dateWrapper__HB3DM",
  "JobsCard_extraInfo__iW6o4": "job-module__D-5L7q__JobsCard_extraInfo__iW6o4",
  "JobsCard_imageWrapper__UPtOz": "job-module__D-5L7q__JobsCard_imageWrapper__UPtOz",
  "JobsCard_image__s932i": "job-module__D-5L7q__JobsCard_image__s932i",
  "JobsCard_info__mr8vF": "job-module__D-5L7q__JobsCard_info__mr8vF",
  "JobsCard_jobcard__1oiYB": "job-module__D-5L7q__JobsCard_jobcard__1oiYB",
  "JobsCard_link__aBb8Y": "job-module__D-5L7q__JobsCard_link__aBb8Y",
  "JobsCard_locationIcon__b0lSx": "job-module__D-5L7q__JobsCard_locationIcon__b0lSx",
  "JobsCard_location__yEXJ5": "job-module__D-5L7q__JobsCard_location__yEXJ5",
  "JobsCard_o-site-container__UZ2L1": "job-module__D-5L7q__JobsCard_o-site-container__UZ2L1",
  "JobsCard_seperator__h_YIz": "job-module__D-5L7q__JobsCard_seperator__h_YIz",
  "JobsCard_textWrapper__vKRoV": "job-module__D-5L7q__JobsCard_textWrapper__vKRoV",
  "JobsCard_title__tjjE7": "job-module__D-5L7q__JobsCard_title__tjjE7",
  "ParallaxWrapper_rotationWrapper__iR1i1": "job-module__D-5L7q__ParallaxWrapper_rotationWrapper__iR1i1",
  "TextAnimation_mounted__Iz2_c": "job-module__D-5L7q__TextAnimation_mounted__Iz2_c",
  "TextAnimation_text__sTrzf": "job-module__D-5L7q__TextAnimation_text__sTrzf",
  "char": "job-module__D-5L7q__char",
  "darkmode": "job-module__D-5L7q__darkmode",
  "gold": "job-module__D-5L7q__gold",
  "icon": "job-module__D-5L7q__icon",
  "line": "job-module__D-5L7q__line",
  "linecontainer": "job-module__D-5L7q__linecontainer",
  "outline": "job-module__D-5L7q__outline",
  "word": "job-module__D-5L7q__word",
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
"[project]/src/app/components/Home/Job/job.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Job": (()=>Job),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/Job/job.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$Tilteffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/Tilteffect.js [app-client] (ecmascript)"); // Import the tilt effect hook
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const Job = ()=>{
    _s();
    const { rotate, onMouseMove, onMouseLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$Tilteffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTiltEffect"])(); // Apply tilt effect
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsBlock_section__2OMCO,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsBlock_container__28saQ,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsBlock_textWrapper__yQx7Q,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsBlock_smallTitle__gk_sO,
                            children: "VACANCIES"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/Job/job.js",
                            lineNumber: 14,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsBlock_largeTitle__RYiIZ,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].TextAnimation_text__sTrzf,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Join",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/Job/job.js",
                                            lineNumber: 18,
                                            columnNumber: 37
                                        }, this),
                                        "our Team"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Home/Job/job.js",
                                    lineNumber: 17,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/Job/job.js",
                                lineNumber: 16,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/Job/job.js",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_primary__b__QL} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_goldLight__ZvTNn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE}`,
                            "aria-label": "Discover our Customer Portal",
                            href: "/digital",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g,
                                    children: "All Vacancies"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/Job/job.js",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconwrapper}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon}`,
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
                                                    fileName: "[project]/src/app/components/Home/Job/job.js",
                                                    lineNumber: 27,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    fillRule: "evenodd",
                                                    d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/Job/job.js",
                                                    lineNumber: 28,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/Job/job.js",
                                            lineNumber: 26,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/Job/job.js",
                                        lineNumber: 25,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/Job/job.js",
                                    lineNumber: 24,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/Job/job.js",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/Job/job.js",
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsBlock_cardWrapper__23TBW,
                    onMouseMove: onMouseMove,
                    onMouseLeave: onMouseLeave,
                    style: {
                        transform: `perspective(2000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                        transition: "transform 0.2s ease-out"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ParallaxWrapper_rotationWrapper__iR1i1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsCard_jobcard__1oiYB}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ParallaxWrapper_sheenWrapper__vGGtf} sheen`
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/Job/job.js",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsCard_imageWrapper__UPtOz,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "Manuport logistics",
                                    loading: "lazy",
                                    width: "200",
                                    height: "252",
                                    decoding: "async",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsCard_image__s932i} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/Job/job.js",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/Job/job.js",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsCard_textWrapper__vKRoV,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsCard_title__tjjE7,
                                        children: "Receptionist - Office Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/Job/job.js",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsCard_info__mr8vF,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Our flexibility and commitment to supporting customers in every way make us unique."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/Job/job.js",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/Job/job.js",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].JobsCard_button__RAf_R,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondary} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_secondary__8ZLTI} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE}`,
                                            "aria-label": "Apply here",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g,
                                                children: "Apply here"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Job/job.js",
                                                lineNumber: 52,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/Job/job.js",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/Job/job.js",
                                        lineNumber: 50,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Home/Job/job.js",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/Job/job.js",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/Job/job.js",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Home/Job/job.js",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/Job/job.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
_s(Job, "c2fucZ6JThdFfExI4EU/OVEdDVU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$Tilteffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTiltEffect"]
    ];
});
_c = Job;
const __TURBOPACK__default__export__ = Job;
var _c;
__turbopack_refresh__.register(_c, "Job");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/Blog/blog.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "AboutBlock_button__gGFFn": "blog-module__WDTRSq__AboutBlock_button__gGFFn",
  "AboutBlock_iconWrapper__JivBc": "blog-module__WDTRSq__AboutBlock_iconWrapper__JivBc",
  "AboutBlock_icon__lsHnW": "blog-module__WDTRSq__AboutBlock_icon__lsHnW",
  "BlogBlock_blogWrapper__Jvbdh": "blog-module__WDTRSq__BlogBlock_blogWrapper__Jvbdh",
  "BlogBlock_button__8zJky": "blog-module__WDTRSq__BlogBlock_button__8zJky",
  "BlogBlock_container__uZmM4": "blog-module__WDTRSq__BlogBlock_container__uZmM4",
  "BlogBlock_contentContainer__cKm_G": "blog-module__WDTRSq__BlogBlock_contentContainer__cKm_G",
  "BlogBlock_o-site-container__8K84H": "blog-module__WDTRSq__BlogBlock_o-site-container__8K84H",
  "BlogBlock_section__rcDP8": "blog-module__WDTRSq__BlogBlock_section__rcDP8",
  "BlogBlock_textContent__JN2ro": "blog-module__WDTRSq__BlogBlock_textContent__JN2ro",
  "BlogBlock_titleLarge__wPU7i": "blog-module__WDTRSq__BlogBlock_titleLarge__wPU7i",
  "BlogBlock_titleSmall__VvSfo": "blog-module__WDTRSq__BlogBlock_titleSmall__VvSfo",
  "BlogCard_articleMeta__cxC2L": "blog-module__WDTRSq__BlogCard_articleMeta__cxC2L",
  "BlogCard_blogCardImage__vIK8k": "blog-module__WDTRSq__BlogCard_blogCardImage__vIK8k",
  "BlogCard_blogCard__7OcFE": "blog-module__WDTRSq__BlogCard_blogCard__7OcFE",
  "BlogCard_category__kyHao": "blog-module__WDTRSq__BlogCard_category__kyHao",
  "BlogCard_icon___0PpG": "blog-module__WDTRSq__BlogCard_icon___0PpG",
  "BlogCard_image__sKQlk": "blog-module__WDTRSq__BlogCard_image__sKQlk",
  "BlogCard_info__qswUS": "blog-module__WDTRSq__BlogCard_info__qswUS",
  "BlogCard_link__jtBXR": "blog-module__WDTRSq__BlogCard_link__jtBXR",
  "BlogCard_meta__kiRaW": "blog-module__WDTRSq__BlogCard_meta__kiRaW",
  "BlogCard_o-site-container__ysDV0": "blog-module__WDTRSq__BlogCard_o-site-container__ysDV0",
  "BlogCard_textWrapper__DaUK1": "blog-module__WDTRSq__BlogCard_textWrapper__DaUK1",
  "BlogCard_title__az94E": "blog-module__WDTRSq__BlogCard_title__az94E",
  "BlogCarousel_carouselButtonWrapper__i4KNb": "blog-module__WDTRSq__BlogCarousel_carouselButtonWrapper__i4KNb",
  "BlogCarousel_carouselHeader__AShub": "blog-module__WDTRSq__BlogCarousel_carouselHeader__AShub",
  "BlogCarousel_carouselTitle__vRiuu": "blog-module__WDTRSq__BlogCarousel_carouselTitle__vRiuu",
  "BlogCarousel_carouselWrapper__ulveD": "blog-module__WDTRSq__BlogCarousel_carouselWrapper__ulveD",
  "BlogCarousel_carousel__Hv9rA": "blog-module__WDTRSq__BlogCarousel_carousel__Hv9rA",
  "BlogCarousel_carousel__container__CdeDd": "blog-module__WDTRSq__BlogCarousel_carousel__container__CdeDd",
  "BlogCarousel_carousel__item__X2F2P": "blog-module__WDTRSq__BlogCarousel_carousel__item__X2F2P",
  "BlogCarousel_dotWrapper__jjI04": "blog-module__WDTRSq__BlogCarousel_dotWrapper__jjI04",
  "BlogCarousel_dot__aDzeM": "blog-module__WDTRSq__BlogCarousel_dot__aDzeM",
  "BlogCarousel_emblabutton__t5aLE": "blog-module__WDTRSq__BlogCarousel_emblabutton__t5aLE",
  "BlogCarousel_items-1__sqgIQ": "blog-module__WDTRSq__BlogCarousel_items-1__sqgIQ",
  "BlogCarousel_items-2__sTh3k": "blog-module__WDTRSq__BlogCarousel_items-2__sTh3k",
  "BlogCarousel_items-3__STurY": "blog-module__WDTRSq__BlogCarousel_items-3__STurY",
  "BlogCarousel_items-4__cRqVx": "blog-module__WDTRSq__BlogCarousel_items-4__cRqVx",
  "BlogCarousel_items-5__MkdgL": "blog-module__WDTRSq__BlogCarousel_items-5__MkdgL",
  "BlogCarousel_noTitle__6X3On": "blog-module__WDTRSq__BlogCarousel_noTitle__6X3On",
  "BlogCarousel_nonActive__Z2HzT": "blog-module__WDTRSq__BlogCarousel_nonActive__Z2HzT",
  "BlogCarousel_o-site-container__eLHAm": "blog-module__WDTRSq__BlogCarousel_o-site-container__eLHAm",
  "BlogCarousel_prev__vAE6w": "blog-module__WDTRSq__BlogCarousel_prev__vAE6w",
  "BlogCarousel_selected__bCQv7": "blog-module__WDTRSq__BlogCarousel_selected__bCQv7",
  "Button_anti-bob__G1XfJ": "blog-module__WDTRSq__Button_anti-bob__G1XfJ",
  "Button_bob__3_pUe": "blog-module__WDTRSq__Button_bob__3_pUe",
  "Button_button__T6zT9": "blog-module__WDTRSq__Button_button__T6zT9",
  "Button_darkmode__ozqJQ": "blog-module__WDTRSq__Button_darkmode__ozqJQ",
  "Button_goldLight__ZvTNn": "blog-module__WDTRSq__Button_goldLight__ZvTNn",
  "Button_iconButton__fsKFn": "blog-module__WDTRSq__Button_iconButton__fsKFn",
  "Button_icon__Rt_Hz": "blog-module__WDTRSq__Button_icon__Rt_Hz",
  "Button_primary__b__QL": "blog-module__WDTRSq__Button_primary__b__QL",
  "Button_titleWrapper__Glw9g": "blog-module__WDTRSq__Button_titleWrapper__Glw9g",
  "Icon_icon___Kgo7": "blog-module__WDTRSq__Icon_icon___Kgo7",
  "darkmode": "blog-module__WDTRSq__darkmode",
  "gold": "blog-module__WDTRSq__gold",
  "icon": "blog-module__WDTRSq__icon",
});
}}),
"[project]/src/app/components/Home/Blog/blog.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/Blog/blog.module.css [app-client] (css module)"); // Import the CSS module
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const Blog = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Function to handle the "Next" button click
    const handleNext = ()=>{
        if (currentIndex < 5 - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    // Function to handle the "Previous" button click
    const handlePrev = ()=>{
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    // Calculate the translateX value for the slider
    const cardWidth = 100; // Assuming each card takes up 100% width of the container
    const translateX = -(currentIndex * cardWidth);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogBlock_section__rcDP8,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogBlock_container__uZmM4,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogBlock_contentContainer__cKm_G,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogBlock_textContent__JN2ro,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogBlock_titleSmall__VvSfo,
                                children: "Blog"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogBlock_titleLarge__wPU7i,
                                children: "What’s New at MPL"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_primary__b__QL} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_darkmode__ozqJQ} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_goldLight__ZvTNn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogBlock_button__8zJky}`,
                                "aria-label": "All Articles",
                                href: "/blog",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g,
                                        children: "All Articles"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconwrapper}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon}`,
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
                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                        lineNumber: 41,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fill: "currentColor",
                                                        fillRule: "evenodd",
                                                        d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                        lineNumber: 42,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                lineNumber: 40,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                            lineNumber: 39,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                        lineNumber: 38,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                lineNumber: 36,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogBlock_blogWrapper__Jvbdh,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carouselWrapper__ulveD,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carouselButtonWrapper__i4KNb,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_emblabutton__t5aLE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_prev__vAE6w}`,
                                            "aria-label": "carouselbutton previous",
                                            onClick: handlePrev,
                                            disabled: currentIndex === 0,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} icon`,
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
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 58,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "currentColor",
                                                            fillRule: "evenodd",
                                                            d: "M23.85 12a.6.6 0 0 0-.6-.6H1.85a.6.6 0 0 0 0 1.2h21.5a.6.6 0 0 0 .6-.6Z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 59,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                    lineNumber: 57,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                lineNumber: 56,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                            lineNumber: 51,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_emblabutton__t5aLE,
                                            "aria-label": "carouselbutton next",
                                            onClick: handleNext,
                                            disabled: currentIndex === 2 - 1,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} icon`,
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
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 71,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "currentColor",
                                                            fillRule: "evenodd",
                                                            d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 72,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                    lineNumber: 70,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                lineNumber: 69,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                            lineNumber: 64,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carousel__Hv9rA,
                                    style: {
                                        transform: `translateX(${translateX}%)`,
                                        transition: 'transform 0.5s ease-in-out'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carousel__container__CdeDd} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carousel__container}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carousel__item__X2F2P} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_items_3__STurY}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCard__7OcFE,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCardImage__vIK8k} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_category__kyHao,
                                                                    children: "expertises"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 88,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    alt: "Manuport logistics",
                                                                    loading: "lazy",
                                                                    width: "424",
                                                                    height: "290",
                                                                    decoding: "async",
                                                                    "data-nimg": "1",
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_image__sKQlk} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                                                                    style: {
                                                                        color: 'transparent',
                                                                        backgroundSize: 'cover',
                                                                        backgroundPosition: '50% 50%',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")'
                                                                    },
                                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw",
                                                                    srcSet: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w",
                                                                    src: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 89,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 87,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_textWrapper__DaUK1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_title__az94E,
                                                                    children: "Market situation – container flows – December '24"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 92,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_info__qswUS,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                        lineNumber: 94,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 93,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_articleMeta__cxC2L,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                            fill: "currentColor",
                                                                                            fillRule: "evenodd",
                                                                                            clipRule: "evenodd",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 101,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 102,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                            lineNumber: 100,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 99,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 98,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "11/12/2024"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 97,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 111,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 112,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 113,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 110,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 109,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "9 Min."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 108,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 96,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 91,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_link__jtBXR,
                                                            href: "/blog/market-situation-container-flows-december-24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 120,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                    lineNumber: 86,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                lineNumber: 85,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carousel__item__X2F2P} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_items_3__STurY}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCard__7OcFE,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCardImage__vIK8k} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_category__kyHao,
                                                                    children: "expertises"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 127,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    alt: "Manuport logistics",
                                                                    loading: "lazy",
                                                                    width: "424",
                                                                    height: "290",
                                                                    decoding: "async",
                                                                    "data-nimg": "1",
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_image__sKQlk} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                                                                    style: {
                                                                        color: 'transparent',
                                                                        backgroundSize: 'cover',
                                                                        backgroundPosition: '50% 50%',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")'
                                                                    },
                                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw",
                                                                    srcSet: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w",
                                                                    src: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 128,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 126,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_textWrapper__DaUK1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_title__az94E,
                                                                    children: "Market situation – container flows – December '24"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 131,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_info__qswUS,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                        lineNumber: 133,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 132,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_articleMeta__cxC2L,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                            fill: "currentColor",
                                                                                            fillRule: "evenodd",
                                                                                            clipRule: "evenodd",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 140,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 141,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                            lineNumber: 139,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 138,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 137,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "11/12/2024"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 136,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 150,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 151,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 152,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 149,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 148,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "9 Min."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 147,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 135,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 130,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_link__jtBXR,
                                                            href: "/blog/market-situation-container-flows-december-24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 159,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                    lineNumber: 125,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                lineNumber: 124,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carousel__item__X2F2P} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_items_3__STurY}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCard__7OcFE,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCardImage__vIK8k} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_category__kyHao,
                                                                    children: "expertises"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 166,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    alt: "Manuport logistics",
                                                                    loading: "lazy",
                                                                    width: "424",
                                                                    height: "290",
                                                                    decoding: "async",
                                                                    "data-nimg": "1",
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_image__sKQlk} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                                                                    style: {
                                                                        color: 'transparent',
                                                                        backgroundSize: 'cover',
                                                                        backgroundPosition: '50% 50%',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")'
                                                                    },
                                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw",
                                                                    srcSet: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w",
                                                                    src: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 167,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 165,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_textWrapper__DaUK1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_title__az94E,
                                                                    children: "Market situation – container flows – December '24"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 170,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_info__qswUS,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                        lineNumber: 172,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 171,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_articleMeta__cxC2L,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                            fill: "currentColor",
                                                                                            fillRule: "evenodd",
                                                                                            clipRule: "evenodd",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 179,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 180,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                            lineNumber: 178,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 177,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 176,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "11/12/2024"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 175,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 189,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 190,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 191,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 188,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 187,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "9 Min."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 186,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 174,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 169,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_link__jtBXR,
                                                            href: "/blog/market-situation-container-flows-december-24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 198,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                    lineNumber: 164,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                lineNumber: 163,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carousel__item__X2F2P} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_items_3__STurY}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCard__7OcFE,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCardImage__vIK8k} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_category__kyHao,
                                                                    children: "expertises"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 205,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    alt: "Manuport logistics",
                                                                    loading: "lazy",
                                                                    width: "424",
                                                                    height: "290",
                                                                    decoding: "async",
                                                                    "data-nimg": "1",
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_image__sKQlk} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                                                                    style: {
                                                                        color: 'transparent',
                                                                        backgroundSize: 'cover',
                                                                        backgroundPosition: '50% 50%',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")'
                                                                    },
                                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw",
                                                                    srcSet: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w",
                                                                    src: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 206,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 204,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_textWrapper__DaUK1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_title__az94E,
                                                                    children: "Market situation – container flows – December '24"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 209,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_info__qswUS,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                        lineNumber: 211,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 210,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_articleMeta__cxC2L,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                            fill: "currentColor",
                                                                                            fillRule: "evenodd",
                                                                                            clipRule: "evenodd",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 218,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 219,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                            lineNumber: 217,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 216,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 215,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "11/12/2024"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 214,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 228,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 229,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 230,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 227,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 226,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "9 Min."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 225,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 213,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 208,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_link__jtBXR,
                                                            href: "/blog/market-situation-container-flows-december-24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 237,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                    lineNumber: 203,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                lineNumber: 202,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carousel__item__X2F2P} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_items_3__STurY}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCard__7OcFE,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCardImage__vIK8k} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_category__kyHao,
                                                                    children: "expertises"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 244,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    alt: "Manuport logistics",
                                                                    loading: "lazy",
                                                                    width: "424",
                                                                    height: "290",
                                                                    decoding: "async",
                                                                    "data-nimg": "1",
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_image__sKQlk} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                                                                    style: {
                                                                        color: 'transparent',
                                                                        backgroundSize: 'cover',
                                                                        backgroundPosition: '50% 50%',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")'
                                                                    },
                                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw",
                                                                    srcSet: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w",
                                                                    src: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 245,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 243,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_textWrapper__DaUK1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_title__az94E,
                                                                    children: "Market situation – container flows – December '24"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 248,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_info__qswUS,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                        lineNumber: 250,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 249,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_articleMeta__cxC2L,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                            fill: "currentColor",
                                                                                            fillRule: "evenodd",
                                                                                            clipRule: "evenodd",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 257,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 258,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                            lineNumber: 256,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 255,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 254,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "11/12/2024"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 253,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 267,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 268,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 269,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 266,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 265,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "9 Min."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 264,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 252,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 247,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_link__jtBXR,
                                                            href: "/blog/market-situation-container-flows-december-24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 276,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                    lineNumber: 242,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                lineNumber: 241,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carousel__item__X2F2P} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_items_3__STurY}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCard__7OcFE,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCardImage__vIK8k} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_category__kyHao,
                                                                    children: "expertises"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 283,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    alt: "Manuport logistics",
                                                                    loading: "lazy",
                                                                    width: "424",
                                                                    height: "290",
                                                                    decoding: "async",
                                                                    "data-nimg": "1",
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_image__sKQlk} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                                                                    style: {
                                                                        color: 'transparent',
                                                                        backgroundSize: 'cover',
                                                                        backgroundPosition: '50% 50%',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")'
                                                                    },
                                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw",
                                                                    srcSet: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w",
                                                                    src: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 284,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 282,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_textWrapper__DaUK1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_title__az94E,
                                                                    children: "Market situation – container flows – December '24"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 287,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_info__qswUS,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                        lineNumber: 289,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 288,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_articleMeta__cxC2L,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                            fill: "currentColor",
                                                                                            fillRule: "evenodd",
                                                                                            clipRule: "evenodd",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 296,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 297,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                            lineNumber: 295,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 294,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 293,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "11/12/2024"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 292,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 306,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 307,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 308,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 305,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 304,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "9 Min."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 303,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 291,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 286,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_link__jtBXR,
                                                            href: "/blog/market-situation-container-flows-december-24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 315,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                    lineNumber: 281,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                lineNumber: 280,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_carousel__item__X2F2P} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_items_3__STurY}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCard__7OcFE,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_blogCardImage__vIK8k} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_category__kyHao,
                                                                    children: "expertises"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 321,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    alt: "Manuport logistics",
                                                                    loading: "lazy",
                                                                    width: "424",
                                                                    height: "290",
                                                                    decoding: "async",
                                                                    "data-nimg": "1",
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_image__sKQlk} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                                                                    style: {
                                                                        color: 'transparent',
                                                                        backgroundSize: 'cover',
                                                                        backgroundPosition: '50% 50%',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 424 290\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3CfeColorMatrix values=\'1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1\' result=\'s\'/%3E%3CfeFlood x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\'/%3E%3CfeComposite operator=\'out\' in=\'s\'/%3E%3CfeComposite in2=\'SourceGraphic\'/%3E%3CfeGaussianBlur stdDeviation=\'20\'/%3E%3C/filter%3E%3Cimage width=\'100%25\' height=\'100%25\' x=\'0\' y=\'0\' preserveAspectRatio=\'none\' style=\'filter: url(%23b);\' href=\'https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/50x0/filters:blur(10):focal(${focus})\'/%3E%3C/svg%3E")'
                                                                    },
                                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw",
                                                                    srcSet: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/96x66/filters:quality(95):focal() 96w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/128x88/filters:quality(95):focal() 128w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/256x175/filters:quality(95):focal() 256w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/320x219/filters:quality(95):focal() 320w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/384x263/filters:quality(95):focal() 384w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/450x308/filters:quality(95):focal() 450w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/600x410/filters:quality(95):focal() 600w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/768x525/filters:quality(95):focal() 768w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1024x700/filters:quality(95):focal() 1024w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1360x930/filters:quality(95):focal() 1360w, https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal() 1720w",
                                                                    src: "https://a.storyblok.com/f/240783/1279x578/dfef7a0bc2/containers.jpeg/m/1720x1176/filters:quality(95):focal()"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 322,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 320,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_textWrapper__DaUK1} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textWrapper}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_title__az94E,
                                                                    children: "Market situation – container flows – December '24"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 325,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_info__qswUS,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: "As part of our commitment to our partners, we share information and try to provide you with some context with periodic reports like the following, with relevant information on the logistics industry. To keep some overview, we have broken this report down into geographical regions and into bullets. Although not all trades are in the report, similar trends apply. If you require more detailed info on a specific trade or topic you can always reach out to your usual Manuport contact."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                        lineNumber: 327,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 326,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_articleMeta__cxC2L,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                            fill: "currentColor",
                                                                                            fillRule: "evenodd",
                                                                                            clipRule: "evenodd",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M22.38 5.23H1.6a.675.675 0 0 0-.176.02c-.027.007-.037.013-.039.014 0 0-.016.01-.04.056a.647.647 0 0 0-.065.238v16.904c0 .089.011.142.02.17a.129.129 0 0 0 .015.036s.01.016.057.039a.715.715 0 0 0 .249.062H22.4a.675.675 0 0 0 .177-.018.139.139 0 0 0 .038-.015s.016-.01.04-.056a.646.646 0 0 0 .065-.238V5.538a.604.604 0 0 0-.02-.17c-.007-.025-.014-.035-.015-.036 0 0-.01-.016-.057-.039a.714.714 0 0 0-.249-.062ZM22.4 4H1.6C0 4 0 5.538 0 5.538v16.924C0 24 1.6 24 1.6 24h20.8c1.6 0 1.6-1.538 1.6-1.538V5.538C24 4 22.4 4 22.4 4Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 334,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M.152 9.75a.6.6 0 0 1 .6-.6h22.5a.6.6 0 1 1 0 1.2H.752a.6.6 0 0 1-.6-.6ZM6.752.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6ZM17.252.15a.6.6 0 0 1 .6.6V6a.6.6 0 1 1-1.2 0V.75a.6.6 0 0 1 .6-.6Z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                    lineNumber: 335,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                            lineNumber: 333,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 332,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 331,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "11/12/2024"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 330,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_meta__kiRaW,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_icon___0PpG}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        fill: "none",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M.9 12C.9 5.87 5.87.9 12 .9S23.1 5.87 23.1 12 18.13 23.1 12 23.1.9 18.13.9 12ZM12 2.1c-5.468 0-9.9 4.432-9.9 9.9s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9-4.432-9.9-9.9-9.9Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 344,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M12 7.65a.6.6 0 0 1 .6.6V12a.6.6 0 1 1-1.2 0V8.25a.6.6 0 0 1 .6-.6Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 345,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                fill: "currentColor",
                                                                                                fillRule: "evenodd",
                                                                                                d: "M11.576 11.576a.6.6 0 0 1 .848 0l4.687 4.688a.6.6 0 1 1-.848.848l-4.687-4.688a.6.6 0 0 1 0-.848Z",
                                                                                                clipRule: "evenodd"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                                lineNumber: 346,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                        lineNumber: 343,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                                    lineNumber: 342,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "9 Min."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                            lineNumber: 341,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                                    lineNumber: 329,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 324,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCard_link__jtBXR,
                                                            href: "/blog/market-situation-container-flows-december-24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                            lineNumber: 353,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                    lineNumber: 319,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                                lineNumber: 318,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                        lineNumber: 83,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                    lineNumber: 77,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].BlogCarousel_dotWrapper__jjI04
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/Blog/blog.js",
                                    lineNumber: 358,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/Blog/blog.js",
                            lineNumber: 49,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/Blog/blog.js",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Home/Blog/blog.js",
                lineNumber: 32,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Home/Blog/blog.js",
            lineNumber: 31,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/Blog/blog.js",
        lineNumber: 30,
        columnNumber: 9
    }, this);
};
_s(Blog, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c = Blog;
const __TURBOPACK__default__export__ = Blog;
var _c;
__turbopack_refresh__.register(_c, "Blog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Home/contact/contactBlock.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "ContactBlock_button__Rk_de": "contactBlock-module__FbXiFW__ContactBlock_button__Rk_de",
  "ContactBlock_checkboxWrapper__IkIre": "contactBlock-module__FbXiFW__ContactBlock_checkboxWrapper__IkIre",
  "ContactBlock_checkbox__8J8ke": "contactBlock-module__FbXiFW__ContactBlock_checkbox__8J8ke",
  "ContactBlock_closeIcon__0CFv_": "contactBlock-module__FbXiFW__ContactBlock_closeIcon__0CFv_",
  "ContactBlock_closeWrapper__8sHiY": "contactBlock-module__FbXiFW__ContactBlock_closeWrapper__8sHiY",
  "ContactBlock_container___Ldf3": "contactBlock-module__FbXiFW__ContactBlock_container___Ldf3",
  "ContactBlock_content__J6k54": "contactBlock-module__FbXiFW__ContactBlock_content__J6k54",
  "ContactBlock_darkContent__S8Zjx": "contactBlock-module__FbXiFW__ContactBlock_darkContent__S8Zjx",
  "ContactBlock_darkMask__o5kt7": "contactBlock-module__FbXiFW__ContactBlock_darkMask__o5kt7",
  "ContactBlock_darkRect__QGI_A": "contactBlock-module__FbXiFW__ContactBlock_darkRect__QGI_A",
  "ContactBlock_formItem__KgmyI": "contactBlock-module__FbXiFW__ContactBlock_formItem__KgmyI",
  "ContactBlock_formRow__WBmyD": "contactBlock-module__FbXiFW__ContactBlock_formRow__WBmyD",
  "ContactBlock_formTitle__V_RKO": "contactBlock-module__FbXiFW__ContactBlock_formTitle__V_RKO",
  "ContactBlock_form__buwDw": "contactBlock-module__FbXiFW__ContactBlock_form__buwDw",
  "ContactBlock_formbutton__kAcUo": "contactBlock-module__FbXiFW__ContactBlock_formbutton__kAcUo",
  "ContactBlock_getInTouchWrapper__5VNpf": "contactBlock-module__FbXiFW__ContactBlock_getInTouchWrapper__5VNpf",
  "ContactBlock_iconWrapper__qtipG": "contactBlock-module__FbXiFW__ContactBlock_iconWrapper__qtipG",
  "ContactBlock_imageMove__RoRh_": "contactBlock-module__FbXiFW__ContactBlock_imageMove__RoRh_",
  "ContactBlock_imageWrapper__nfNkK": "contactBlock-module__FbXiFW__ContactBlock_imageWrapper__nfNkK",
  "ContactBlock_image___vvh_": "contactBlock-module__FbXiFW__ContactBlock_image___vvh_",
  "ContactBlock_input__GY0Gm": "contactBlock-module__FbXiFW__ContactBlock_input__GY0Gm",
  "ContactBlock_introWrapper__m1k2B": "contactBlock-module__FbXiFW__ContactBlock_introWrapper__m1k2B",
  "ContactBlock_intro__3dwEj": "contactBlock-module__FbXiFW__ContactBlock_intro__3dwEj",
  "ContactBlock_label__9ONp4": "contactBlock-module__FbXiFW__ContactBlock_label__9ONp4",
  "ContactBlock_lightContent__OrbOU": "contactBlock-module__FbXiFW__ContactBlock_lightContent__OrbOU",
  "ContactBlock_lightMask___CChp": "contactBlock-module__FbXiFW__ContactBlock_lightMask___CChp",
  "ContactBlock_maskRect__60K8r": "contactBlock-module__FbXiFW__ContactBlock_maskRect__60K8r",
  "ContactBlock_modalBackground__fgVWc": "contactBlock-module__FbXiFW__ContactBlock_modalBackground__fgVWc",
  "ContactBlock_modal__pVZlq": "contactBlock-module__FbXiFW__ContactBlock_modal__pVZlq",
  "ContactBlock_o-site-container__WO25_": "contactBlock-module__FbXiFW__ContactBlock_o-site-container__WO25_",
  "ContactBlock_section__gp2Lw": "contactBlock-module__FbXiFW__ContactBlock_section__gp2Lw",
  "ContactBlock_textWrapper__MJDxU": "contactBlock-module__FbXiFW__ContactBlock_textWrapper__MJDxU",
  "ContactBlock_textarea__Lmhia": "contactBlock-module__FbXiFW__ContactBlock_textarea__Lmhia",
  "ContactBlock_titleIcon__4LFGI": "contactBlock-module__FbXiFW__ContactBlock_titleIcon__4LFGI",
  "ContactBlock_title__7ZvTW": "contactBlock-module__FbXiFW__ContactBlock_title__7ZvTW",
  "Icon_icon___Kgo7": "contactBlock-module__FbXiFW__Icon_icon___Kgo7",
  "gold": "contactBlock-module__FbXiFW__gold",
  "outline": "contactBlock-module__FbXiFW__outline",
});
}}),
"[project]/src/app/components/Home/contact/contactBlock.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/contact/contactBlock.module.css [app-client] (css module)");
;
;
;
const ContactBlock = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_section__gp2Lw,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_darkMask__o5kt7,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "darkContactMask",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_darkRect__QGI_A
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                        lineNumber: 9,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                    lineNumber: 8,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_lightMask___CChp,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "lightContactMask",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_maskRect__60K8r
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                        lineNumber: 14,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                    lineNumber: 13,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_imageWrapper__nfNkK,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_imageMove__RoRh_,
                    style: {
                        transform: 'none'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        alt: "Manuport logistics",
                        loading: "lazy",
                        width: "744",
                        height: "576",
                        decoding: "async",
                        "data-nimg": "1",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_image___vvh_} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                        style: {
                            color: 'transparent',
                            backgroundSize: 'cover',
                            backgroundPosition: '50% 50%',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: 'url("https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg")'
                        },
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw",
                        src: "https://a.storyblok.com/f/240783/3699x5625/cf26c4631b/5-1-8.jpg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                    lineNumber: 18,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_getInTouchWrapper__5VNpf,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/contact",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_lightContent__OrbOU,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_container___Ldf3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_introWrapper__m1k2B,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_title__7ZvTW,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "get in touch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                    lineNumber: 45,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_iconWrapper__qtipG,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_titleIcon__4LFGI}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                        lineNumber: 47,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                    lineNumber: 46,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                            lineNumber: 44,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_intro__3dwEj,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Get local advice for your global request. Contact us now."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                lineNumber: 51,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                            lineNumber: 50,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_darkContent__S8Zjx,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_container___Ldf3,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_introWrapper__m1k2B,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_title__7ZvTW,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "get in touch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                    lineNumber: 60,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tertiary} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_button__T6zT9} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_tertiary__JUfBS} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_iconButton__fsKFn} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE}`,
                                                    "aria-label": "",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                            lineNumber: 65,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz} iconwrapper`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                                lineNumber: 67,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                            lineNumber: 66,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                    lineNumber: 61,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                            lineNumber: 59,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactBlock_intro__3dwEj,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Get local advice for your global request. Contact us now."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                lineNumber: 72,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                            lineNumber: 71,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                    lineNumber: 58,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                lineNumber: 57,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
_c = ContactBlock;
const __TURBOPACK__default__export__ = ContactBlock;
var _c;
__turbopack_refresh__.register(_c, "ContactBlock");
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
        "#00358d",
        "#fff"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_section__LjJPm,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crosslink$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CrosslinkBlock_container__HKHjr,
            children: [
                {
                    title: "COMMODITIES",
                    subtitle: "What we Move",
                    buttonLabel: "Commodities",
                    link: "/commodities"
                },
                {
                    title: "OUR SERVICES",
                    subtitle: "How we Move",
                    buttonLabel: "Services",
                    link: "/services"
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
"[project]/src/app/components/Home/location_slider/location.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "LocationBlock_locations__jqljX": "location-module__AAaMba__LocationBlock_locations__jqljX",
  "LocationsSlider_hasImage__pdKoo": "location-module__AAaMba__LocationsSlider_hasImage__pdKoo",
  "LocationsSlider_imageWrapper__noqux": "location-module__AAaMba__LocationsSlider_imageWrapper__noqux",
  "LocationsSlider_image__F7MqP": "location-module__AAaMba__LocationsSlider_image__F7MqP",
  "LocationsSlider_location__x6NQX": "location-module__AAaMba__LocationsSlider_location__x6NQX",
  "LocationsSlider_o-site-container__Xsp6v": "location-module__AAaMba__LocationsSlider_o-site-container__Xsp6v",
  "LocationsSlider_sliderWrapper___jN5Z": "location-module__AAaMba__LocationsSlider_sliderWrapper___jN5Z",
  "LocationsSlider_slider__Aaqu7": "location-module__AAaMba__LocationsSlider_slider__Aaqu7",
  "LocationsSlider_svg__6TBtR": "location-module__AAaMba__LocationsSlider_svg__6TBtR",
  "LocationsSlider_title__vKaO_": "location-module__AAaMba__LocationsSlider_title__vKaO_",
  "gold": "location-module__AAaMba__gold",
});
}}),
"[project]/src/app/components/Home/location_slider/locationSlider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/location_slider/location.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const LocationSlider = ()=>{
    _s();
    const sliderRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocationSlider.useEffect": ()=>{
            const handleScroll = {
                "LocationSlider.useEffect.handleScroll": ()=>{
                    sliderRefs.current.forEach({
                        "LocationSlider.useEffect.handleScroll": (slider, index)=>{
                            if (slider) {
                                const speed = index % 2 === 0 ? 0.3 : -0.4;
                                const totalWidth = slider.scrollWidth;
                                const viewportWidth = window.innerWidth;
                                // Calculate the maximum scroll position to avoid gaps
                                const maxScroll = totalWidth - viewportWidth;
                                // Apply scroll transformation, limiting it to avoid gaps
                                let translateX = window.scrollY * speed;
                                translateX = Math.max(-maxScroll, Math.min(0, translateX)); // Keep within bounds
                                slider.style.transform = `translateX(${translateX}px)`;
                            }
                        }
                    }["LocationSlider.useEffect.handleScroll"]);
                }
            }["LocationSlider.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "LocationSlider.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["LocationSlider.useEffect"];
        }
    }["LocationSlider.useEffect"], []);
    const locations = [
        "Spain",
        "France",
        "Germany",
        "Canada",
        "Italy",
        "Japan",
        "USA",
        "Australia"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Wrapper,
        style: {
            width: '100vw',
            overflow: 'hidden'
        },
        children: [
            ...Array(4)
        ].map((_, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationBlock_locations__jqljX,
                ref: (el)=>sliderRefs.current[rowIndex] = el,
                style: {
                    display: 'flex',
                    width: 'max-content',
                    gap: '4em',
                    whiteSpace: 'nowrap',
                    marginBottom: '4rem'
                },
                children: [
                    ...locations,
                    ...locations,
                    ...locations,
                    ...locations
                ].map((location, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationsSlider_location__x6NQX,
                        style: {
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationsSlider_imageWrapper__noqux} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationsSlider_hasImage__pdKoo}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: location,
                                    loading: "lazy",
                                    width: "100",
                                    height: "100",
                                    decoding: "async",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationsSlider_image__F7MqP} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                                    style: {
                                        color: 'transparent',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundImage: "url('/images/Project/Cargo-Business.png-2.png')"
                                    },
                                    srcSet: "/images/Project/Cargo-Business.png-2.png 1x, /images/Project/Cargo-Business.png-2.png 2x",
                                    src: "/images/Project/Cargo-Business.png-2.png"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationsSlider_title__vKaO_,
                                style: {
                                    fontSize: '2.4rem',
                                    fontWeight: 'bold'
                                },
                                children: location
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this))
            }, rowIndex, false, {
                fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
                lineNumber: 38,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
_s(LocationSlider, "wHUzNgvlkiAapBoI2Agb4QjWBeI=");
_c = LocationSlider;
const __TURBOPACK__default__export__ = LocationSlider;
var _c;
__turbopack_refresh__.register(_c, "LocationSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/LoadingScreen/loadingScreen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/hero/hero.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/header/header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/UpsBlock/upsBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/location/location.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/footer/footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/ctaBlock/ctaBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/Section/section.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/imagewrap/imagewrap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/About/about.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/Job/job.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/Blog/blog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/contact/contactBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crossLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/CrossLink/crossLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$locationSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/location_slider/locationSlider.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>setLoading(false)
            }["Home.useEffect.timer"], 3000); // Adjust duration as needed
            return ({
                "Home.useEffect": ()=>clearTimeout(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 31,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    color: "#333"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 34,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 35,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 36,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 37,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$locationSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 38,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 39,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 40,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$imagewrap$2f$imagewrap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 41,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 42,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Job$2f$job$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 43,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Blog$2f$blog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crossLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 45,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 46,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false);
}
_s(Home, "J7PPXooW06IQ11rfabbvgk72KFw=");
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_f24ac7._.js.map