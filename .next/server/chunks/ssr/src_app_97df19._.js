module.exports = {

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
"[project]/src/app/Contact/page.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_app_97df19._.js.map