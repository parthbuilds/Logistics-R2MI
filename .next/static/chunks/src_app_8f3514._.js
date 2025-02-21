(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_8f3514._.js", {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
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
    const imagePaths = [
        "/images/micro.png",
        "/images/mixer.png",
        "/images/sandmaker.png",
        "/images/iron.png",
        "/images/fan.png",
        "/images/wires.png",
        "/images/light.png",
        "/images/iron.png",
        "/images/micro.png",
        "/images/mixer.png",
        "/images/sandmaker.png",
        "/images/fan.png"
    ];
    const imageWidth = 70; // Set a variable for image width
    const imageSpacing = 30; // Set a variable for spacing
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
                        duration: 0.3
                    }
                } : {},
                exit: {
                    opacity: 0,
                    transition: {
                        duration: 0.5
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
                            lineNumber: 56,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoadingScreen$2f$loadingScreen$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carSvg,
                            initial: {
                                x: "0%"
                            },
                            animate: {
                                x: "-100%"
                            },
                            transition: {
                                repeat: Infinity,
                                duration: 3,
                                ease: "linear"
                            },
                            children: imagePaths.map((path, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: path,
                                    alt: `Appliance ${i + 1}`,
                                    width: imageWidth,
                                    height: imageWidth,
                                    style: {
                                        position: 'absolute',
                                        left: `${i * (imageWidth + imageSpacing)}px`,
                                        top: 4,
                                        objectFit: 'contain'
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                                    lineNumber: 72,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                            lineNumber: 65,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                    lineNumber: 55,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
                lineNumber: 48,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/LoadingScreen/loadingScreen.js",
        lineNumber: 45,
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
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/hero/hero.js",
                                                lineNumber: 13,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Appliances."
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
                                                    "."
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
                                                    children: "Home"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/hero/hero.js",
                                                    lineNumber: 22,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Appliances."
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: "/video/R2MEx Ad2.mp4",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_image__H7CbZ} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].VideoPrimaryHero_video__550RF}`,
                        playsInline: true,
                        controlsList: "nodownload",
                        autoPlay: true,
                        muted: true,
                        loop: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/hero/hero.js",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
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
"[project]/src/app/utils/swiper/swiper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[80px] h-[80px] overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white via-transparent to-transparent backdrop-blur-md z-10"
            }, void 0, false, {
                fileName: "[project]/src/app/utils/swiper/swiper.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white via-transparent to-transparent backdrop-blur-md z-10"
            }, void 0, false, {
                fileName: "[project]/src/app/utils/swiper/swiper.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                ],
                spaceBetween: 10,
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                className: "w-[100px] h-[100px]",
                children: shuffledImages.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
_c = AutoPlaySwiper;
const __TURBOPACK__default__export__ = AutoPlaySwiper;
var _c;
__turbopack_refresh__.register(_c, "AutoPlaySwiper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
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
"[project]/src/app/components/Home/UpsBlock/loadingline/loadingline.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LoadingLine)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$loadingline$2f$loadingline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/UpsBlock/loadingline/loadingline.module.css [app-client] (css module)");
;
;
;
function LoadingLine({ isLoading, duration = 10000 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$loadingline$2f$loadingline$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = LoadingLine;
;
var _c;
__turbopack_refresh__.register(_c, "LoadingLine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$swiper$2f$swiper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/swiper/swiper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$loadingline$2f$loadingline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/UpsBlock/loadingline/loadingline.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
function UpsBlock() {
    _s();
    const [expandedIndex, setExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingIndex, setLoadingIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoPlayIndex, setAutoPlayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const titles = [
        "We Believe in Accessible Modern Appliances",
        "We Resolve Every Export Challenge",
        "Single Point of Contact",
        "Quick and Adaptive Decision-Making"
    ];
    const titleRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UpsBlock.useEffect": ()=>{
            let timer;
            if (loadingIndex !== null) {
                timer = setTimeout({
                    "UpsBlock.useEffect": ()=>{
                        setLoadingIndex(null);
                    }
                }["UpsBlock.useEffect"], 10000);
            }
            return ({
                "UpsBlock.useEffect": ()=>clearTimeout(timer)
            })["UpsBlock.useEffect"];
        }
    }["UpsBlock.useEffect"], [
        loadingIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UpsBlock.useEffect": ()=>{
            const interval = setInterval({
                "UpsBlock.useEffect.interval": ()=>{
                    handleAutoPlay();
                }
            }["UpsBlock.useEffect.interval"], 10000);
            return ({
                "UpsBlock.useEffect": ()=>clearInterval(interval)
            })["UpsBlock.useEffect"];
        }
    }["UpsBlock.useEffect"], [
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_imageSection__Pe14P,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$swiper$2f$swiper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_uspWrapper__dzsDK,
                    children: titles.map((title, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspBlock_uspWrapperInside__00mFz,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspItem_uspItem__qkMCK,
                                style: {
                                    opacity: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].UspItem_uspItemText__6aUpv,
                                        style: {
                                            opacity: expandedIndex === index ? 1 : 0,
                                            maxHeight: expandedIndex === index ? '1000px' : '0',
                                            height: expandedIndex === index ? 'auto' : '0',
                                            transition: '0.5s ease-in-out'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$loadingline$2f$loadingline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(UpsBlock, "iUtl+YAxeIsMds5lO/LHKduSXac=");
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
                        children: "Comprehensive Export Solutions"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/location/location.js",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationBlock_info__PEoID,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Across the globe, our teams are committed to fulfilling your export requirements. As a member of the RTM Group, we harness group resources to enhance our solutions, offering both financial stability and flexibility, all for your advantage."
                        }, void 0, false, {
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
                            "aria-label": "About Us",
                            href: "/about",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_titleWrapper__Glw9g,
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/location/location.js",
                                    lineNumber: 18,
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
                                                    lineNumber: 22,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    fillRule: "evenodd",
                                                    d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/location/location.js",
                                                    lineNumber: 23,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/location/location.js",
                                            lineNumber: 21,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/location/location.js",
                                        lineNumber: 20,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/location/location.js",
                                    lineNumber: 19,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/location/location.js",
                            lineNumber: 17,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/location/location.js",
                        lineNumber: 16,
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
  "ContactForm_active__8aVDv": "footer-module__u_2CLq__ContactForm_active__8aVDv",
  "ContactForm_formItem__pxEdr": "footer-module__u_2CLq__ContactForm_formItem__pxEdr",
  "ContactForm_formItem__tooltip__S6IwZ": "footer-module__u_2CLq__ContactForm_formItem__tooltip__S6IwZ",
  "ContactForm_formRow__tPm9Z": "footer-module__u_2CLq__ContactForm_formRow__tPm9Z",
  "ContactForm_input__JLtth": "footer-module__u_2CLq__ContactForm_input__JLtth",
  "ContactForm_label__xyhWw": "footer-module__u_2CLq__ContactForm_label__xyhWw",
  "ContactForm_textarea__jyvij": "footer-module__u_2CLq__ContactForm_textarea__jyvij",
  "Footer_address__Cj4AX": "footer-module__u_2CLq__Footer_address__Cj4AX",
  "Footer_blue__Hy8ea": "footer-module__u_2CLq__Footer_blue__Hy8ea",
  "Footer_footerTop__XBqF3": "footer-module__u_2CLq__Footer_footerTop__XBqF3",
  "Footer_footer__EQXzy": "footer-module__u_2CLq__Footer_footer__EQXzy",
  "Footer_grey__qmRgm": "footer-module__u_2CLq__Footer_grey__qmRgm",
  "Footer_logo": "footer-module__u_2CLq__Footer_logo",
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
  "back": "footer-module__u_2CLq__back",
  "blue": "footer-module__u_2CLq__blue",
  "flipContainer": "footer-module__u_2CLq__flipContainer",
  "front": "footer-module__u_2CLq__front",
  "gold": "footer-module__u_2CLq__gold",
  "icon": "footer-module__u_2CLq__icon",
  "logoImage": "footer-module__u_2CLq__logoImage",
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
    const email = 'parthpandey033@gmail.com';
    const telephone = '+91 800232370';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_footer__EQXzy} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_footerTop__XBqF3,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_logoWrapper__P93m7,
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flipContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].front}`,
                                    src: "/images/RouteToMarket Media India Pvt Ltd2.png",
                                    alt: "r2mi logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 15,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].back}`,
                                    src: "/images/RTX Logo white.svg",
                                    alt: "rtx logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 16,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                            lineNumber: 14,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navWrapper__xWSoa,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/About",
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 22,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/Services",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 23,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_navItem__DCCez,
                                href: "/Contact",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactForm_formItem__pxEdr,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "businessmail",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactForm_label__xyhWw,
                                children: "Your business mail*"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "businessmail",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactForm_input__JLtth,
                                type: "email"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactForm_formItem__tooltip__S6IwZ,
                                children: "Make sure to use your business mail"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Home/footer/footer.js",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_socials__9ZNZ_,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_socialLinks__zyHKp,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.facebook.com",
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
                                            lineNumber: 40,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                                        lineNumber: 39,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/company/",
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
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.instagram.com/",
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
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                                        lineNumber: 55,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.twitter.com/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_socialIcon__bQEbt}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "120",
                                        height: "120",
                                        viewBox: "0,0,256,256",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            fill: "currentColor",
                                            fillRule: "evenodd",
                                            stroke: "none",
                                            strokeWidth: "3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6.91992,6l14.2168,20.72656l-14.9082,17.27344h3.17773l13.13867,-15.22266l10.44141,15.22266h10.01367l-14.87695,-21.6875l14.08008,-16.3125h-3.17578l-12.31055,14.26172l-9.7832,-14.26172z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                                lineNumber: 64,
                                                columnNumber: 106
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                                            lineNumber: 64,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                                        lineNumber: 63,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Footer_privacyTerms__sz4zC,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/conditions-disclaimer",
                                children: "Conditions & Disclaimer "
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this),
                            "| ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/privacy-statement",
                                children: "Privacy Statement"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/footer/footer.js",
                                lineNumber: 71,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ContactForm_info,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${telephone}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                                    children: "Call Us: +91 800232370"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${email}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                                    children: "Email : support@rtx.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/footer/footer.js",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/footer/footer.js",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/footer/footer.js",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Home/footer/footer.js",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Home/footer/footer.js",
        lineNumber: 8,
        columnNumber: 9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$swiper$2f$swiper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/swiper/swiper.js [app-client] (ecmascript)");
;
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
                                children: "Global Export Solutions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                lineNumber: 11,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                            lineNumber: 10,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_info__DVPeC,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "RTX employs a unique approach to exports, fueled by creative thinking. Whether by ship, plane, train, truck, or a combination, we go above and beyond to fulfill your requirements."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                            lineNumber: 16,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                        lineNumber: 15,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                    lineNumber: 14,
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
                                                lineNumber: 21,
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
                                                                lineNumber: 25,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fill: "currentColor",
                                                                fillRule: "evenodd",
                                                                d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                                                lineNumber: 26,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                                        lineNumber: 24,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                                    lineNumber: 23,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                                lineNumber: 22,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                        lineNumber: 20,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                    lineNumber: 19,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                            lineNumber: 13,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                    lineNumber: 9,
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$swiper$2f$swiper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                width: "400px",
                                height: "400px"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                                lineNumber: 37,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                            lineNumber: 36,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/ctaBlock/ctaBlock.js",
        lineNumber: 7,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$swiper$2f$swiper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/utils/swiper/swiper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Home/Section/section.module.css [app-client] (css module)");
'use client';
;
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
                                    children: "Products We Export"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/Section/section.js",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/Section/section.js",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_info__DVPeC,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Behind every export is a world of opportunities. From mixer grinders and blenders to juicers, microwaves, OTGs, irons, sandwich makers, and more, we don’t just export home appliances – we export your aspirations."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Home/Section/section.js",
                                                lineNumber: 18,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/Section/section.js",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/Section/section.js",
                                        lineNumber: 16,
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
                                                    lineNumber: 29,
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
                                                                    lineNumber: 41,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "currentColor",
                                                                    fillRule: "evenodd",
                                                                    d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/Home/Section/section.js",
                                                                    lineNumber: 47,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/Home/Section/section.js",
                                                            lineNumber: 36,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Home/Section/section.js",
                                                        lineNumber: 35,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Home/Section/section.js",
                                                    lineNumber: 32,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Home/Section/section.js",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/Section/section.js",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Home/Section/section.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Home/Section/section.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_videoWrapper__ZHqAx} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_dark__Vqkj3} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_left__m_YMo}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_videoAnimWrapper__MFcyz,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$swiper$2f$swiper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                height: "800px",
                                width: "800px"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Home/Section/section.js",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/Section/section.js",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Home/Section/section.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Home/Section/section.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].CtaBlock_background__Goley
            }, void 0, false, {
                fileName: "[project]/src/app/components/Home/Section/section.js",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Home/Section/section.js",
        lineNumber: 7,
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
  "Image_office": "about-module__aUbYna__Image_office",
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
                            children: "Global Export Reach,"
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
                                    src: "/video/R2MEx Ad2.mp4",
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
                        children: "Driven by Passion and Strong Teamwork"
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
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_office,
                            src: "/images/office.jpg",
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Home/About/about.js",
                            lineNumber: 33,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].AboutBlock_info__jqTAN,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "The RTX family shares a single passion: exports. Our team is skilled, proactive, and dedicated to making exports more efficient and dependable, always prioritizing our customers. Through innovative solutions, we build trust and consistently deliver exceptional satisfaction."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/About/about.js",
                                    lineNumber: 35,
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
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
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
"[project]/src/app/components/Home/contact/contactBlock.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "Button_bob__3_pUe": "contactBlock-module__FbXiFW__Button_bob__3_pUe",
  "Button_button__T6zT9": "contactBlock-module__FbXiFW__Button_button__T6zT9",
  "Button_icon__Rt_Hz": "contactBlock-module__FbXiFW__Button_icon__Rt_Hz",
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
  "icon": "contactBlock-module__FbXiFW__icon",
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
                        src: "/images/getintouch.png"
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
                    href: "/Contact",
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
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_icon__Rt_Hz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Button_back___SPoE} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconwrapper}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Icon_icon___Kgo7} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon}`,
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
                                                                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                                            lineNumber: 69,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fill: "currentColor",
                                                                            fillRule: "evenodd",
                                                                            d: "M12.326 1.076a.6.6 0 0 1 .848 0l10.5 10.5a.6.6 0 0 1 0 .848l-10.5 10.5a.6.6 0 0 1-.848-.848L22.4 12 12.326 1.924a.6.6 0 0 1 0-.848Z",
                                                                            clipRule: "evenodd"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                                            lineNumber: 70,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                                                    lineNumber: 68,
                                                                    columnNumber: 49
                                                                }, this)
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
                                                lineNumber: 77,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Home/contact/contactBlock.js",
                                            lineNumber: 76,
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
        {
            name: "Singapore",
            image: "/images/locations/Singapore.jpg"
        },
        {
            name: "Australia",
            image: "/images/locations/Australia.jpg"
        },
        {
            name: "Malaysia",
            image: "/images/locations/Malaysia.jpg"
        },
        {
            name: "USA",
            image: "/images/locations/USA.jpg"
        },
        {
            name: "Vietnam",
            image: "/images/locations/Vietnam.jpg"
        },
        {
            name: "Nigeria",
            image: "/images/locations/Nigeria.jpg"
        },
        {
            name: "South Africa",
            image: "/images/locations/SouthAfrica.jpg"
        },
        {
            name: "Mauritius",
            image: "/images/locations/Mauritius.jpg"
        },
        {
            name: "Kenya",
            image: "/images/locations/Kenya.jpg"
        },
        {
            name: "Uganda",
            image: "/images/locations/Uganda.jpg"
        },
        {
            name: "Tanzania",
            image: "/images/locations/Tanzania.jpg"
        },
        {
            name: "Belgium",
            image: "/images/locations/Belgium.jpg"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            backgroundColor: '#2086ae',
            paddingTop: '3rem'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        gap: '4rem',
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
                                        alt: location.name,
                                        loading: "lazy",
                                        width: "100",
                                        height: "100",
                                        decoding: "async",
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationsSlider_image__F7MqP} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_storyblok_image__oDocz} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image_is_loaded__RCqPL}`,
                                        style: {
                                            color: 'transparent',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        },
                                        src: location.image
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$location$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].LocationsSlider_title__vKaO_,
                                    style: {
                                        fontSize: '1.7rem',
                                        fontWeight: 'bold',
                                        color: 'white'
                                    },
                                    children: location.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this))
                }, rowIndex, false, {
                    fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
                    lineNumber: 51,
                    columnNumber: 9
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
            lineNumber: 49,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Home/location_slider/locationSlider.js",
        lineNumber: 48,
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
"[project]/src/app/components/Whatsapp/whatsapp.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "whatsappIcon": "whatsapp-module__vYO1RG__whatsappIcon",
  "whatsappImage": "whatsapp-module__vYO1RG__whatsappImage",
});
}}),
"[project]/src/app/components/Whatsapp/whatsapp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Whatsapp$2f$whatsapp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/Whatsapp/whatsapp.module.css [app-client] (css module)");
;
;
;
const WhatsAppIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "https://wa.me/1234567890" // Replace with your phone number
        ,
        target: "_blank",
        rel: "noopener noreferrer",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Whatsapp$2f$whatsapp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].whatsappIcon,
        title: "Chat with us on WhatsApp",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
            alt: "WhatsApp",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Whatsapp$2f$whatsapp$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].whatsappImage
        }, void 0, false, {
            fileName: "[project]/src/app/components/Whatsapp/whatsapp.js",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Whatsapp/whatsapp.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = WhatsAppIcon;
const __TURBOPACK__default__export__ = WhatsAppIcon;
var _c;
__turbopack_refresh__.register(_c, "WhatsAppIcon");
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
// import Imagewrap from "./components/Home/imagewrap/imagewrap";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/About/about.js [app-client] (ecmascript)");
// import Job from "./components/Home/Job/job";
// import Blog from "./components/Home/Blog/blog";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/contact/contactBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crossLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/CrossLink/crossLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$locationSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Home/location_slider/locationSlider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Whatsapp$2f$whatsapp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/Whatsapp/whatsapp.js [app-client] (ecmascript)");
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
            lineNumber: 32,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$header$2f$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    color: "#333"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 35,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$hero$2f$hero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 36,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$UpsBlock$2f$upsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 37,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location$2f$location$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 38,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$location_slider$2f$locationSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 39,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$ctaBlock$2f$ctaBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 40,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$Section$2f$section$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 41,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$About$2f$about$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 43,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$CrossLink$2f$crossLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 46,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$contact$2f$contactBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 47,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Whatsapp$2f$whatsapp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 48,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Home$2f$footer$2f$footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 49,
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

//# sourceMappingURL=src_app_8f3514._.js.map