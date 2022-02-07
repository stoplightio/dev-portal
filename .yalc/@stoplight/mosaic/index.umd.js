(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('twind'), require('react/jsx-runtime'), require('clsx'), require('react'), require('nano-memoize'), require('react-fast-compare'), require('chroma-js'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/react-fontawesome'), require('zustand'), require('copy-to-clipboard'), require('react-dom'), require('@react-hook/size'), require('dom-helpers/ownerDocument'), require('dom-helpers/query/offset'), require('dom-helpers/query/scrollLeft'), require('dom-helpers/query/scrollTop'), require('jotai'), require('jotai/utils'), require('dom-helpers/query/position'), require('dom-helpers/style'), require('@react-hook/window-size'), require('zustand/shallow'), require('ts-keycode-enum')) :
	typeof define === 'function' && define.amd ? define(['exports', 'twind', 'react/jsx-runtime', 'clsx', 'react', 'nano-memoize', 'react-fast-compare', 'chroma-js', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome', 'zustand', 'copy-to-clipboard', 'react-dom', '@react-hook/size', 'dom-helpers/ownerDocument', 'dom-helpers/query/offset', 'dom-helpers/query/scrollLeft', 'dom-helpers/query/scrollTop', 'jotai', 'jotai/utils', 'dom-helpers/query/position', 'dom-helpers/style', '@react-hook/window-size', 'zustand/shallow', 'ts-keycode-enum'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Core = {}, global.twind, global.jsxRuntime, global.cn, global.React, global.memoize, global.equals, global.chroma, global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.reactFontawesome, global.create$3, global.copy, global.ReactDOM, global.useSize, global._domHelpersOwnerDocument, global._domHelpersQueryOffset, global._domHelpersQueryScrollLeft, global._domHelpersQueryScrollTop, global.jotai, global.utils, global._domHelpersQueryPosition, global._domHelpersStyle, global.windowSize, global.shallow, global.tsKeycodeEnum));
})(this, (function (exports, twind, jsxRuntime, cn, _react, memoize, equals, chroma, fontawesomeSvgCore, freeSolidSvgIcons, reactFontawesome, create$3, copy, _reactDom, useSize, _domHelpersOwnerDocument, _domHelpersQueryOffset, _domHelpersQueryScrollLeft, _domHelpersQueryScrollTop, jotai, utils, _domHelpersQueryPosition, _domHelpersStyle, windowSize, shallow, tsKeycodeEnum) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n["default"] = e;
		return Object.freeze(n);
	}

	var cn__default = /*#__PURE__*/_interopDefaultLegacy(cn);
	var _react__default = /*#__PURE__*/_interopDefaultLegacy(_react);
	var _react__namespace = /*#__PURE__*/_interopNamespace(_react);
	var memoize__default = /*#__PURE__*/_interopDefaultLegacy(memoize);
	var equals__default = /*#__PURE__*/_interopDefaultLegacy(equals);
	var chroma__default = /*#__PURE__*/_interopDefaultLegacy(chroma);
	var create__default = /*#__PURE__*/_interopDefaultLegacy(create$3);
	var copy__default = /*#__PURE__*/_interopDefaultLegacy(copy);
	var _reactDom__default = /*#__PURE__*/_interopDefaultLegacy(_reactDom);
	var useSize__default = /*#__PURE__*/_interopDefaultLegacy(useSize);
	var _domHelpersOwnerDocument__default = /*#__PURE__*/_interopDefaultLegacy(_domHelpersOwnerDocument);
	var _domHelpersQueryOffset__default = /*#__PURE__*/_interopDefaultLegacy(_domHelpersQueryOffset);
	var _domHelpersQueryScrollLeft__default = /*#__PURE__*/_interopDefaultLegacy(_domHelpersQueryScrollLeft);
	var _domHelpersQueryScrollTop__default = /*#__PURE__*/_interopDefaultLegacy(_domHelpersQueryScrollTop);
	var _domHelpersQueryPosition__default = /*#__PURE__*/_interopDefaultLegacy(_domHelpersQueryPosition);
	var _domHelpersStyle__default = /*#__PURE__*/_interopDefaultLegacy(_domHelpersStyle);
	var shallow__default = /*#__PURE__*/_interopDefaultLegacy(shallow);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var i=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);function r(r){return i.get(r)}function a(i){var r=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(i);return r?r[1]?1:r[2]?2:r[3]?3:5:0}function t(i,r){var a=/^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(i);return a?a[1]?/^sti/i.test(r)?1:0:a[2]?/^pat/i.test(r)?1:0:a[3]?/^image-/i.test(r)?1:0:a[4]?"-"===r[3]?2:0:/^(?:inline-)?grid$/i.test(r)?4:0:0}

	const CSSPrefixFlags = [
	    [
	        '-webkit-',
	        1 << 0
	    ],
	    [
	        '-moz-',
	        1 << 1
	    ],
	    [
	        '-ms-',
	        1 << 2
	    ]
	];
	function presetAutoprefix() {
	    return ({ stringify  })=>({
	            stringify (property, value, context) {
	                let cssText = '';
	                // Resolve aliases, e.g. `gap` -> `grid-gap`
	                const propertyAlias = r(property);
	                if (propertyAlias) cssText += stringify(propertyAlias, value, context) + ';';
	                // Prefix properties, e.g. `backdrop-filter` -> `-webkit-backdrop-filter`
	                const propertyFlags = a(property);
	                const valueFlags = t(property, value);
	                for (const prefix of CSSPrefixFlags){
	                    if (propertyFlags & prefix[1]) {
	                        cssText += stringify(prefix[0] + property, value, context) + ';';
	                    }
	                    if (valueFlags & prefix[1]) {
	                        cssText += stringify(property, prefix[0] + value, context) + ';';
	                    }
	                }
	                /* Include the standardized declaration last */ /* https://css-tricks.com/ordering-css3-properties/ */ return cssText + stringify(property, value, context);
	            }
	        })
	    ;
	}

	// Source from https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
	const inherit = 'inherit';
	const current = 'currentColor';
	const transparent = 'transparent';
	const black = '#000';
	const white = '#fff';
	const slate = {
	    50: '#f8fafc',
	    100: '#f1f5f9',
	    200: '#e2e8f0',
	    300: '#cbd5e1',
	    400: '#94a3b8',
	    500: '#64748b',
	    600: '#475569',
	    700: '#334155',
	    800: '#1e293b',
	    900: '#0f172a'
	};
	const gray = {
	    50: '#f9fafb',
	    100: '#f3f4f6',
	    200: '#e5e7eb',
	    300: '#d1d5db',
	    400: '#9ca3af',
	    500: '#6b7280',
	    600: '#4b5563',
	    700: '#374151',
	    800: '#1f2937',
	    900: '#111827'
	};
	const zinc = {
	    50: '#fafafa',
	    100: '#f4f4f5',
	    200: '#e4e4e7',
	    300: '#d4d4d8',
	    400: '#a1a1aa',
	    500: '#71717a',
	    600: '#52525b',
	    700: '#3f3f46',
	    800: '#27272a',
	    900: '#18181b'
	};
	const neutral = {
	    50: '#fafafa',
	    100: '#f5f5f5',
	    200: '#e5e5e5',
	    300: '#d4d4d4',
	    400: '#a3a3a3',
	    500: '#737373',
	    600: '#525252',
	    700: '#404040',
	    800: '#262626',
	    900: '#171717'
	};
	const stone = {
	    50: '#fafaf9',
	    100: '#f5f5f4',
	    200: '#e7e5e4',
	    300: '#d6d3d1',
	    400: '#a8a29e',
	    500: '#78716c',
	    600: '#57534e',
	    700: '#44403c',
	    800: '#292524',
	    900: '#1c1917'
	};
	const red = {
	    50: '#fef2f2',
	    100: '#fee2e2',
	    200: '#fecaca',
	    300: '#fca5a5',
	    400: '#f87171',
	    500: '#ef4444',
	    600: '#dc2626',
	    700: '#b91c1c',
	    800: '#991b1b',
	    900: '#7f1d1d'
	};
	const orange = {
	    50: '#fff7ed',
	    100: '#ffedd5',
	    200: '#fed7aa',
	    300: '#fdba74',
	    400: '#fb923c',
	    500: '#f97316',
	    600: '#ea580c',
	    700: '#c2410c',
	    800: '#9a3412',
	    900: '#7c2d12'
	};
	const amber = {
	    50: '#fffbeb',
	    100: '#fef3c7',
	    200: '#fde68a',
	    300: '#fcd34d',
	    400: '#fbbf24',
	    500: '#f59e0b',
	    600: '#d97706',
	    700: '#b45309',
	    800: '#92400e',
	    900: '#78350f'
	};
	const yellow = {
	    50: '#fefce8',
	    100: '#fef9c3',
	    200: '#fef08a',
	    300: '#fde047',
	    400: '#facc15',
	    500: '#eab308',
	    600: '#ca8a04',
	    700: '#a16207',
	    800: '#854d0e',
	    900: '#713f12'
	};
	const lime = {
	    50: '#f7fee7',
	    100: '#ecfccb',
	    200: '#d9f99d',
	    300: '#bef264',
	    400: '#a3e635',
	    500: '#84cc16',
	    600: '#65a30d',
	    700: '#4d7c0f',
	    800: '#3f6212',
	    900: '#365314'
	};
	const green = {
	    50: '#f0fdf4',
	    100: '#dcfce7',
	    200: '#bbf7d0',
	    300: '#86efac',
	    400: '#4ade80',
	    500: '#22c55e',
	    600: '#16a34a',
	    700: '#15803d',
	    800: '#166534',
	    900: '#14532d'
	};
	const emerald = {
	    50: '#ecfdf5',
	    100: '#d1fae5',
	    200: '#a7f3d0',
	    300: '#6ee7b7',
	    400: '#34d399',
	    500: '#10b981',
	    600: '#059669',
	    700: '#047857',
	    800: '#065f46',
	    900: '#064e3b'
	};
	const teal = {
	    50: '#f0fdfa',
	    100: '#ccfbf1',
	    200: '#99f6e4',
	    300: '#5eead4',
	    400: '#2dd4bf',
	    500: '#14b8a6',
	    600: '#0d9488',
	    700: '#0f766e',
	    800: '#115e59',
	    900: '#134e4a'
	};
	const cyan = {
	    50: '#ecfeff',
	    100: '#cffafe',
	    200: '#a5f3fc',
	    300: '#67e8f9',
	    400: '#22d3ee',
	    500: '#06b6d4',
	    600: '#0891b2',
	    700: '#0e7490',
	    800: '#155e75',
	    900: '#164e63'
	};
	const sky = {
	    50: '#f0f9ff',
	    100: '#e0f2fe',
	    200: '#bae6fd',
	    300: '#7dd3fc',
	    400: '#38bdf8',
	    500: '#0ea5e9',
	    600: '#0284c7',
	    700: '#0369a1',
	    800: '#075985',
	    900: '#0c4a6e'
	};
	const blue = {
	    50: '#eff6ff',
	    100: '#dbeafe',
	    200: '#bfdbfe',
	    300: '#93c5fd',
	    400: '#60a5fa',
	    500: '#3b82f6',
	    600: '#2563eb',
	    700: '#1d4ed8',
	    800: '#1e40af',
	    900: '#1e3a8a'
	};
	const indigo = {
	    50: '#eef2ff',
	    100: '#e0e7ff',
	    200: '#c7d2fe',
	    300: '#a5b4fc',
	    400: '#818cf8',
	    500: '#6366f1',
	    600: '#4f46e5',
	    700: '#4338ca',
	    800: '#3730a3',
	    900: '#312e81'
	};
	const violet = {
	    50: '#f5f3ff',
	    100: '#ede9fe',
	    200: '#ddd6fe',
	    300: '#c4b5fd',
	    400: '#a78bfa',
	    500: '#8b5cf6',
	    600: '#7c3aed',
	    700: '#6d28d9',
	    800: '#5b21b6',
	    900: '#4c1d95'
	};
	const purple = {
	    50: '#faf5ff',
	    100: '#f3e8ff',
	    200: '#e9d5ff',
	    300: '#d8b4fe',
	    400: '#c084fc',
	    500: '#a855f7',
	    600: '#9333ea',
	    700: '#7e22ce',
	    800: '#6b21a8',
	    900: '#581c87'
	};
	const fuchsia = {
	    50: '#fdf4ff',
	    100: '#fae8ff',
	    200: '#f5d0fe',
	    300: '#f0abfc',
	    400: '#e879f9',
	    500: '#d946ef',
	    600: '#c026d3',
	    700: '#a21caf',
	    800: '#86198f',
	    900: '#701a75'
	};
	const pink = {
	    50: '#fdf2f8',
	    100: '#fce7f3',
	    200: '#fbcfe8',
	    300: '#f9a8d4',
	    400: '#f472b6',
	    500: '#ec4899',
	    600: '#db2777',
	    700: '#be185d',
	    800: '#9d174d',
	    900: '#831843'
	};
	const rose = {
	    50: '#fff1f2',
	    100: '#ffe4e6',
	    200: '#fecdd3',
	    300: '#fda4af',
	    400: '#fb7185',
	    500: '#f43f5e',
	    600: '#e11d48',
	    700: '#be123c',
	    800: '#9f1239',
	    900: '#881337'
	}// get lightBlue() {
	//   warn({ version: 'v2.2', from: 'lightBlue', to: 'sky' })
	//   return this.sky
	// }
	// get warmGray() {
	//   warn({ version: 'v3.0', from: 'warmGray', to: 'stone' })
	//   return this.stone
	// }
	// get trueGray() {
	//   warn({ version: 'v3.0', from: 'trueGray', to: 'neutral' })
	//   return this.neutral
	// }
	// get coolGray() {
	//   warn({ version: 'v3.0', from: 'coolGray', to: 'gray' })
	//   return this.gray
	// }
	// get blueGray() {
	//   warn({ version: 'v3.0', from: 'blueGray', to: 'slate' })
	//   return this.slate
	// }
	;

	const colors$1 = {
	  __proto__: null,
	  inherit,
	  current,
	  transparent,
	  black,
	  white,
	  slate,
	  gray,
	  zinc,
	  neutral,
	  stone,
	  red,
	  orange,
	  amber,
	  yellow,
	  lime,
	  green,
	  emerald,
	  teal,
	  cyan,
	  sky,
	  blue,
	  indigo,
	  violet,
	  purple,
	  fuchsia,
	  pink,
	  rose
	};

	// TODO use named exports
	const theme$1 = {
	    screens: {
	        sm: '640px',
	        md: '768px',
	        lg: '1024px',
	        xl: '1280px',
	        '2xl': '1536px'
	    },
	    colors: colors$1,
	    columns: {
	        auto: 'auto',
	        // Handled by plugin,
	        // 1: '1',
	        // 2: '2',
	        // 3: '3',
	        // 4: '4',
	        // 5: '5',
	        // 6: '6',
	        // 7: '7',
	        // 8: '8',
	        // 9: '9',
	        // 10: '10',
	        // 11: '11',
	        // 12: '12',
	        '3xs': '16rem',
	        '2xs': '18rem',
	        xs: '20rem',
	        sm: '24rem',
	        md: '28rem',
	        lg: '32rem',
	        xl: '36rem',
	        '2xl': '42rem',
	        '3xl': '48rem',
	        '4xl': '56rem',
	        '5xl': '64rem',
	        '6xl': '72rem',
	        '7xl': '80rem'
	    },
	    spacing: {
	        px: '1px',
	        0: '0px',
	        .../* #__PURE__ */ linear(4, 'rem', 4, 0.5, 0.5),
	        // 0.5: '0.125rem',
	        // 1: '0.25rem',
	        // 1.5: '0.375rem',
	        // 2: '0.5rem',
	        // 2.5: '0.625rem',
	        // 3: '0.75rem',
	        // 3.5: '0.875rem',
	        // 4: '1rem',
	        .../* #__PURE__ */ linear(12, 'rem', 4, 5),
	        // 5: '1.25rem',
	        // 6: '1.5rem',
	        // 7: '1.75rem',
	        // 8: '2rem',
	        // 9: '2.25rem',
	        // 10: '2.5rem',
	        // 11: '2.75rem',
	        // 12: '3rem',
	        14: '3.5rem',
	        .../* #__PURE__ */ linear(64, 'rem', 4, 16, 4),
	        // 16: '4rem',
	        // 20: '5rem',
	        // 24: '6rem',
	        // 28: '7rem',
	        // 32: '8rem',
	        // 36: '9rem',
	        // 40: '10rem',
	        // 44: '11rem',
	        // 48: '12rem',
	        // 52: '13rem',
	        // 56: '14rem',
	        // 60: '15rem',
	        // 64: '16rem',
	        72: '18rem',
	        80: '20rem',
	        96: '24rem'
	    },
	    durations: {
	        75: '75ms',
	        100: '100ms',
	        150: '150ms',
	        200: '200ms',
	        300: '300ms',
	        500: '500ms',
	        700: '700ms',
	        1000: '1000ms'
	    },
	    animation: {
	        none: 'none',
	        spin: 'spin 1s linear infinite',
	        ping: 'ping 1s cubic-bezier(0,0,0.2,1) infinite',
	        pulse: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
	        bounce: 'bounce 1s infinite'
	    },
	    aspectRatio: {
	        auto: 'auto',
	        square: '1/1',
	        video: '16/9'
	    },
	    backdropBlur: /* #__PURE__ */ alias('blur'),
	    backdropBrightness: /* #__PURE__ */ alias('brightness'),
	    backdropContrast: /* #__PURE__ */ alias('contrast'),
	    backdropGrayscale: /* #__PURE__ */ alias('grayscale'),
	    backdropHueRotate: /* #__PURE__ */ alias('hueRotate'),
	    backdropInvert: /* #__PURE__ */ alias('invert'),
	    backdropOpacity: /* #__PURE__ */ alias('opacity'),
	    backdropSaturate: /* #__PURE__ */ alias('saturate'),
	    backdropSepia: /* #__PURE__ */ alias('sepia'),
	    backgroundColor: /* #__PURE__ */ alias('colors'),
	    backgroundImage: {
	        none: 'none'
	    },
	    backgroundOpacity: /* #__PURE__ */ alias('opacity'),
	    // backgroundPosition: {
	    //   // The following are already handled by the plugin:
	    //   // center, right, left, bottom, top
	    //   // 'bottom-10px-right-20px' -> bottom 10px right 20px
	    // },
	    backgroundSize: {
	        auto: 'auto',
	        cover: 'cover',
	        contain: 'contain'
	    },
	    blur: {
	        0: '0',
	        sm: '4px',
	        DEFAULT: '8px',
	        md: '12px',
	        lg: '16px',
	        xl: '24px',
	        '2xl': '40px',
	        '3xl': '64px'
	    },
	    brightness: {
	        .../* #__PURE__ */ linear(200, '', 100, 0, 50),
	        // 0: '0',
	        // 50: '.5',
	        // 150: '1.5',
	        // 200: '2',
	        .../* #__PURE__ */ linear(110, '', 100, 90, 5),
	        // 90: '.9',
	        // 95: '.95',
	        // 100: '1',
	        // 105: '1.05',
	        // 110: '1.1',
	        75: '0.75',
	        125: '1.25'
	    },
	    borderColor: ({ theme: theme1  })=>({
	            ...theme1('colors'),
	            DEFAULT: theme1('colors.gray.200', 'currentColor')
	        })
	    ,
	    borderOpacity: /* #__PURE__ */ alias('opacity'),
	    borderRadius: {
	        none: '0px',
	        sm: '0.125rem',
	        DEFAULT: '0.25rem',
	        md: '0.375rem',
	        lg: '0.5rem',
	        xl: '0.75rem',
	        '2xl': '1rem',
	        '3xl': '1.5rem',
	        '1/2': '50%',
	        full: '9999px'
	    },
	    borderWidth: {
	        .../* #__PURE__ */ exponential(8, 'px'),
	        // 0: '0px',
	        // 2: '2px',
	        // 4: '4px',
	        // 8: '8px',
	        DEFAULT: '1px'
	    },
	    boxShadow: {
	        sm: '0 1px 2px 0 rgba(0,0,0,0.05)',
	        DEFAULT: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
	        md: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
	        lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
	        xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
	        '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
	        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.05)',
	        none: '0 0 #0000'
	    },
	    boxShadowColor: alias('colors'),
	    // container: {},
	    // cursor: {
	    //   // Default values are handled by plugin
	    // },
	    caretColor: /* #__PURE__ */ alias('colors'),
	    accentColor: ({ theme: theme2  })=>({
	            ...theme2('colors'),
	            auto: 'auto'
	        })
	    ,
	    contrast: {
	        .../* #__PURE__ */ linear(200, '', 100, 0, 50),
	        // 0: '0',
	        // 50: '.5',
	        // 150: '1.5',
	        // 200: '2',
	        75: '0.75',
	        125: '1.25'
	    },
	    content: {
	        none: 'none'
	    },
	    divideColor: /* #__PURE__ */ alias('borderColor'),
	    divideOpacity: /* #__PURE__ */ alias('borderOpacity'),
	    divideWidth: /* #__PURE__ */ alias('borderWidth'),
	    dropShadow: {
	        sm: '0 1px 1px rgba(0,0,0,0.05)',
	        DEFAULT: [
	            '0 1px 2px rgba(0,0,0,0.1)',
	            '0 1px 1px rgba(0,0,0,0.06)'
	        ],
	        md: [
	            '0 4px 3px rgba(0,0,0,0.07)',
	            '0 2px 2px rgba(0,0,0,0.06)'
	        ],
	        lg: [
	            '0 10px 8px rgba(0,0,0,0.04)',
	            '0 4px 3px rgba(0,0,0,0.1)'
	        ],
	        xl: [
	            '0 20px 13px rgba(0,0,0,0.03)',
	            '0 8px 5px rgba(0,0,0,0.08)'
	        ],
	        '2xl': '0 25px 25px rgba(0,0,0,0.15)',
	        none: '0 0 #0000'
	    },
	    fill: /* #__PURE__ */ alias('colors'),
	    grayscale: {
	        0: '0',
	        DEFAULT: '100%'
	    },
	    hueRotate: {
	        0: '0deg',
	        15: '15deg',
	        30: '30deg',
	        60: '60deg',
	        90: '90deg',
	        180: '180deg'
	    },
	    invert: {
	        0: '0',
	        DEFAULT: '100%'
	    },
	    flex: {
	        1: '1 1 0%',
	        auto: '1 1 auto',
	        initial: '0 1 auto',
	        none: 'none'
	    },
	    flexBasis: ({ theme: theme3  })=>({
	            ...theme3('spacing'),
	            ...ratios(2, 6),
	            // '1/2': '50%',
	            // '1/3': '33.333333%',
	            // '2/3': '66.666667%',
	            // '1/4': '25%',
	            // '2/4': '50%',
	            // '3/4': '75%',
	            // '1/5': '20%',
	            // '2/5': '40%',
	            // '3/5': '60%',
	            // '4/5': '80%',
	            // '1/6': '16.666667%',
	            // '2/6': '33.333333%',
	            // '3/6': '50%',
	            // '4/6': '66.666667%',
	            // '5/6': '83.333333%',
	            ...ratios(12, 12),
	            // '1/12': '8.333333%',
	            // '2/12': '16.666667%',
	            // '3/12': '25%',
	            // '4/12': '33.333333%',
	            // '5/12': '41.666667%',
	            // '6/12': '50%',
	            // '7/12': '58.333333%',
	            // '8/12': '66.666667%',
	            // '9/12': '75%',
	            // '10/12': '83.333333%',
	            // '11/12': '91.666667%',
	            auto: 'auto',
	            full: '100%'
	        })
	    ,
	    flexGrow: {
	        0: 0,
	        DEFAULT: 1
	    },
	    flexShrink: {
	        0: 0,
	        DEFAULT: 1
	    },
	    fontFamily: {
	        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(','),
	        serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(','),
	        mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(',')
	    },
	    fontSize: {
	        xs: [
	            '0.75rem',
	            '1rem'
	        ],
	        sm: [
	            '0.875rem',
	            '1.25rem'
	        ],
	        base: [
	            '1rem',
	            '1.5rem'
	        ],
	        lg: [
	            '1.125rem',
	            '1.75rem'
	        ],
	        xl: [
	            '1.25rem',
	            '1.75rem'
	        ],
	        '2xl': [
	            '1.5rem',
	            '2rem'
	        ],
	        '3xl': [
	            '1.875rem',
	            '2.25rem'
	        ],
	        '4xl': [
	            '2.25rem',
	            '2.5rem'
	        ],
	        '5xl': [
	            '3rem',
	            '1'
	        ],
	        '6xl': [
	            '3.75rem',
	            '1'
	        ],
	        '7xl': [
	            '4.5rem',
	            '1'
	        ],
	        '8xl': [
	            '6rem',
	            '1'
	        ],
	        '9xl': [
	            '8rem',
	            '1'
	        ]
	    },
	    fontWeight: {
	        thin: '100',
	        extralight: '200',
	        light: '300',
	        normal: '400',
	        medium: '500',
	        semibold: '600',
	        bold: '700',
	        extrabold: '800',
	        black: '900'
	    },
	    gap: /* #__PURE__ */ alias('spacing'),
	    gradientColorStops: /* #__PURE__ */ alias('colors'),
	    gridAutoColumns: {
	        auto: 'auto',
	        min: 'min-content',
	        max: 'max-content',
	        fr: 'minmax(0,1fr)'
	    },
	    gridAutoRows: {
	        auto: 'auto',
	        min: 'min-content',
	        max: 'max-content',
	        fr: 'minmax(0,1fr)'
	    },
	    gridColumn: {
	        // span-X is handled by the plugin: span-1 -> span 1 / span 1
	        auto: 'auto',
	        'span-full': '1 / -1'
	    },
	    // gridColumnEnd: {
	    //   // Defaults handled by plugin
	    // },
	    // gridColumnStart: {
	    //   // Defaults handled by plugin
	    // },
	    gridRow: {
	        // span-X is handled by the plugin: span-1 -> span 1 / span 1
	        auto: 'auto',
	        'span-full': '1 / -1'
	    },
	    // gridRowStart: {
	    //   // Defaults handled by plugin
	    // },
	    // gridRowEnd: {
	    //   // Defaults handled by plugin
	    // },
	    gridTemplateColumns: {
	        // numbers are handled by the plugin: 1 -> repeat(1, minmax(0, 1fr))
	        none: 'none'
	    },
	    gridTemplateRows: {
	        // numbers are handled by the plugin: 1 -> repeat(1, minmax(0, 1fr))
	        none: 'none'
	    },
	    height: ({ theme: theme4  })=>({
	            ...theme4('spacing'),
	            ...ratios(2, 6),
	            // '1/2': '50%',
	            // '1/3': '33.333333%',
	            // '2/3': '66.666667%',
	            // '1/4': '25%',
	            // '2/4': '50%',
	            // '3/4': '75%',
	            // '1/5': '20%',
	            // '2/5': '40%',
	            // '3/5': '60%',
	            // '4/5': '80%',
	            // '1/6': '16.666667%',
	            // '2/6': '33.333333%',
	            // '3/6': '50%',
	            // '4/6': '66.666667%',
	            // '5/6': '83.333333%',
	            auto: 'auto',
	            full: '100%',
	            screen: '100vh'
	        })
	    ,
	    inset: ({ theme: theme5  })=>({
	            ...theme5('spacing'),
	            ...ratios(2, 4),
	            // '1/2': '50%',
	            // '1/3': '33.333333%',
	            // '2/3': '66.666667%',
	            // '1/4': '25%',
	            // '2/4': '50%',
	            // '3/4': '75%',
	            auto: 'auto',
	            full: '100%'
	        })
	    ,
	    keyframes: {
	        spin: {
	            from: {
	                transform: 'rotate(0deg)'
	            },
	            to: {
	                transform: 'rotate(360deg)'
	            }
	        },
	        ping: {
	            '0%': {
	                transform: 'scale(1)',
	                opacity: '1'
	            },
	            '75%,100%': {
	                transform: 'scale(2)',
	                opacity: '0'
	            }
	        },
	        pulse: {
	            '0%,100%': {
	                opacity: '1'
	            },
	            '50%': {
	                opacity: '.5'
	            }
	        },
	        bounce: {
	            '0%, 100%': {
	                transform: 'translateY(-25%)',
	                animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
	            },
	            '50%': {
	                transform: 'none',
	                animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
	            }
	        }
	    },
	    letterSpacing: {
	        tighter: '-0.05em',
	        tight: '-0.025em',
	        normal: '0em',
	        wide: '0.025em',
	        wider: '0.05em',
	        widest: '0.1em'
	    },
	    lineHeight: {
	        .../* #__PURE__ */ linear(10, 'rem', 4, 3),
	        // 3: '.75rem',
	        // 4: '1rem',
	        // 5: '1.25rem',
	        // 6: '1.5rem',
	        // 7: '1.75rem',
	        // 8: '2rem',
	        // 9: '2.25rem',
	        // 10: '2.5rem',
	        none: '1',
	        tight: '1.25',
	        snug: '1.375',
	        normal: '1.5',
	        relaxed: '1.625',
	        loose: '2'
	    },
	    // listStyleType: {
	    //   // Defaults handled by plugin
	    // },
	    margin: ({ theme: theme6  })=>({
	            ...theme6('spacing'),
	            auto: 'auto'
	        })
	    ,
	    maxHeight: ({ theme: theme7  })=>({
	            ...theme7('spacing'),
	            full: '100%',
	            min: 'min-content',
	            max: 'max-content',
	            fit: 'fit-content',
	            screen: '100vh'
	        })
	    ,
	    maxWidth: ({ theme: theme8 , breakpoints  })=>({
	            ...breakpoints(theme8('screens')),
	            none: 'none',
	            0: '0rem',
	            xs: '20rem',
	            sm: '24rem',
	            md: '28rem',
	            lg: '32rem',
	            xl: '36rem',
	            '2xl': '42rem',
	            '3xl': '48rem',
	            '4xl': '56rem',
	            '5xl': '64rem',
	            '6xl': '72rem',
	            '7xl': '80rem',
	            full: '100%',
	            min: 'min-content',
	            max: 'max-content',
	            fit: 'fit-content',
	            prose: '65ch'
	        })
	    ,
	    minHeight: {
	        0: '0px',
	        full: '100%',
	        min: 'min-content',
	        max: 'max-content',
	        fit: 'fit-content',
	        screen: '100vh'
	    },
	    minWidth: {
	        0: '0px',
	        full: '100%',
	        min: 'min-content',
	        max: 'max-content',
	        fit: 'fit-content'
	    },
	    // objectPosition: {
	    //   // The plugins joins all arguments by default
	    // },
	    opacity: {
	        .../* #__PURE__ */ linear(100, '', 100, 0, 10),
	        // 0: '0',
	        // 10: '0.1',
	        // 20: '0.2',
	        // 30: '0.3',
	        // 40: '0.4',
	        // 60: '0.6',
	        // 70: '0.7',
	        // 80: '0.8',
	        // 90: '0.9',
	        // 100: '1',
	        5: '0.05',
	        25: '0.25',
	        75: '0.75',
	        95: '0.95'
	    },
	    order: {
	        // Handled by plugin
	        // 1: '1',
	        // 2: '2',
	        // 3: '3',
	        // 4: '4',
	        // 5: '5',
	        // 6: '6',
	        // 7: '7',
	        // 8: '8',
	        // 9: '9',
	        // 10: '10',
	        // 11: '11',
	        // 12: '12',
	        first: '-9999',
	        last: '9999',
	        none: '0'
	    },
	    padding: /* #__PURE__ */ alias('spacing'),
	    placeholderColor: /* #__PURE__ */ alias('colors'),
	    placeholderOpacity: /* #__PURE__ */ alias('opacity'),
	    outlineColor: /* #__PURE__ */ alias('colors'),
	    outlineOffset: /* #__PURE__ */ exponential(8, 'px'),
	    // 0: '0px',
	    // 1: '1px',
	    // 2: '2px',
	    // 4: '4px',
	    // 8: '8px',,
	    outlineWidth: /* #__PURE__ */ exponential(8, 'px'),
	    // 0: '0px',
	    // 1: '1px',
	    // 2: '2px',
	    // 4: '4px',
	    // 8: '8px',,
	    ringColor: ({ theme: theme9  })=>({
	            ...theme9('colors'),
	            DEFAULT: theme9('colors.blue.500', '#3b82f6')
	        })
	    ,
	    ringOffsetColor: /* #__PURE__ */ alias('colors'),
	    ringOffsetWidth: /* #__PURE__ */ exponential(8, 'px'),
	    // 0: '0px',
	    // 1: '1px',
	    // 2: '2px',
	    // 4: '4px',
	    // 8: '8px',,
	    ringOpacity: ({ theme: theme10  })=>({
	            ...theme10('opacity'),
	            DEFAULT: '0.5'
	        })
	    ,
	    ringWidth: {
	        .../* #__PURE__ */ exponential(8, 'px'),
	        // 0: '0px',
	        // 1: '1px',
	        // 2: '2px',
	        // 4: '4px',
	        // 8: '8px',
	        DEFAULT: '3px'
	    },
	    rotate: {
	        .../* #__PURE__ */ exponential(2, 'deg'),
	        // 0: '0deg',
	        // 1: '1deg',
	        // 2: '2deg',
	        .../* #__PURE__ */ exponential(12, 'deg', 3),
	        // 3: '3deg',
	        // 6: '6deg',
	        // 12: '12deg',
	        .../* #__PURE__ */ exponential(180, 'deg', 45)
	    },
	    saturate: /* #__PURE__ */ linear(200, '', 100, 0, 50),
	    // 0: '0',
	    // 50: '.5',
	    // 100: '1',
	    // 150: '1.5',
	    // 200: '2',
	    scale: {
	        .../* #__PURE__ */ linear(150, '', 100, 0, 50),
	        // 0: '0',
	        // 50: '.5',
	        // 150: '1.5',
	        .../* #__PURE__ */ linear(110, '', 100, 90, 5),
	        // 90: '.9',
	        // 95: '.95',
	        // 100: '1',
	        // 105: '1.05',
	        // 110: '1.1',
	        75: '0.75',
	        125: '1.25'
	    },
	    scrollMargin: /* #__PURE__ */ alias('spacing'),
	    scrollPadding: /* #__PURE__ */ alias('spacing'),
	    sepia: {
	        0: '0',
	        DEFAULT: '100%'
	    },
	    skew: {
	        .../* #__PURE__ */ exponential(2, 'deg'),
	        // 0: '0deg',
	        // 1: '1deg',
	        // 2: '2deg',
	        .../* #__PURE__ */ exponential(12, 'deg', 3)
	    },
	    space: /* #__PURE__ */ alias('spacing'),
	    stroke: /* #__PURE__ */ alias('colors'),
	    strokeWidth: /* #__PURE__ */ linear(2),
	    // 0: '0',
	    // 1: '1',
	    // 2: '2',,
	    textColor: /* #__PURE__ */ alias('colors'),
	    textDecorationColor: /* #__PURE__ */ alias('colors'),
	    textDecorationThickness: {
	        'from-font': 'from-font',
	        auto: 'auto',
	        .../* #__PURE__ */ exponential(8, 'px')
	    },
	    textUnderlineOffset: {
	        auto: 'auto',
	        .../* #__PURE__ */ exponential(8, 'px')
	    },
	    textIndent: /* #__PURE__ */ alias('spacing'),
	    textOpacity: /* #__PURE__ */ alias('opacity'),
	    // transformOrigin: {
	    //   // The following are already handled by the plugin:
	    //   // center, right, left, bottom, top
	    //   // 'bottom-10px-right-20px' -> bottom 10px right 20px
	    // },
	    transitionDuration: ({ theme: theme11  })=>({
	            ...theme11('durations'),
	            DEFAULT: '150ms'
	        })
	    ,
	    transitionDelay: /* #__PURE__ */ alias('durations'),
	    transitionProperty: {
	        none: 'none',
	        all: 'all',
	        DEFAULT: 'color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter',
	        colors: 'color,background-color,border-color,text-decoration-color,fill,stroke',
	        opacity: 'opacity',
	        shadow: 'box-shadow',
	        transform: 'transform'
	    },
	    transitionTimingFunction: {
	        DEFAULT: 'cubic-bezier(0.4,0,0.2,1)',
	        linear: 'linear',
	        in: 'cubic-bezier(0.4,0,1,1)',
	        out: 'cubic-bezier(0,0,0.2,1)',
	        'in-out': 'cubic-bezier(0.4,0,0.2,1)'
	    },
	    translate: ({ theme: theme12  })=>({
	            ...theme12('spacing'),
	            ...ratios(2, 4),
	            // '1/2': '50%',
	            // '1/3': '33.333333%',
	            // '2/3': '66.666667%',
	            // '1/4': '25%',
	            // '2/4': '50%',
	            // '3/4': '75%',
	            full: '100%'
	        })
	    ,
	    width: ({ theme: theme13  })=>({
	            ...theme13('flexBasis'),
	            min: 'min-content',
	            max: 'max-content',
	            fit: 'fit-content',
	            screen: '100vw'
	        })
	    ,
	    // willChange: {
	    //   // handled by plugin
	    //   auto: 'auto',
	    //   scroll: 'scroll-position',
	    //   contents: 'contents',
	    //   transform: 'transform',
	    // },
	    zIndex: {
	        .../* #__PURE__ */ linear(50, '', 1, 0, 10),
	        // 0: '0',
	        // 10: '10',
	        // 20: '20',
	        // 30: '30',
	        // 40: '40',
	        // 50: '50',
	        auto: 'auto'
	    }
	};
	// '1/2': '50%',
	// '1/3': '33.333333%',
	// '2/3': '66.666667%',
	// '1/4': '25%',
	// '2/4': '50%',
	// '3/4': '75%',
	// '1/5': '20%',
	// '2/5': '40%',
	// '3/5': '60%',
	// '4/5': '80%',
	// '1/6': '16.666667%',
	// '2/6': '33.333333%',
	// '3/6': '50%',
	// '4/6': '66.666667%',
	// '5/6': '83.333333%',
	function ratios(start, end) {
	    const result = {};
	    do {
	        // XXX: using var to avoid strange bug when generating cjs where `= 1` is removed
	        // eslint-disable-next-line no-var
	        for(var dividend = 1; dividend < start; dividend++){
	            result[`${dividend}/${start}`] = Number((dividend / start * 100).toFixed(6)) + '%';
	        }
	    }while (++start <= end)
	    return result;
	}
	// 0: '0px',
	// 2: '2px',
	// 4: '4px',
	// 8: '8px',
	function exponential(stop, unit, start = 0) {
	    const result = {};
	    for(; start <= stop; start = start * 2 || 1){
	        result[start] = start + unit;
	    }
	    return result;
	}
	// 3: '.75rem',
	// 4: '1rem',
	// 5: '1.25rem',
	// 6: '1.5rem',
	// 7: '1.75rem',
	// 8: '2rem',
	// 9: '2.25rem',
	// 10: '2.5rem',
	function linear(stop, unit = '', divideBy = 1, start = 0, step = 1, result = {}) {
	    for(; start <= stop; start += step){
	        result[start] = start / divideBy + unit;
	    }
	    return result;
	}
	function alias(section) {
	    return ({ theme: theme14  })=>theme14(section)
	    ;
	}

	const preflight = {
	    /*
	    1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
	    2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
	    */ '*,::before,::after': {
	        boxSizing: 'border-box' /* 1 */ ,
	        borderWidth: '0' /* 2 */ ,
	        borderStyle: 'solid' /* 2 */ ,
	        borderColor: 'theme(borderColor.DEFAULT, currentColor)' /* 2 */ 
	    },
	    '::before,::after': {
	        '--tw-content': "''"
	    },
	    /*
	    1. Use a consistent sensible line-height in all browsers.
	    2. Prevent adjustments of font size after orientation changes in iOS.
	    3. Use a more readable tab size.
	    4. Use the user's configured `sans` font-family by default.
	    */ html: {
	        lineHeight: 1.5 /* 1 */ ,
	        WebkitTextSizeAdjust: '100%' /* 2 */ ,
	        MozTabSize: '4' /* 3 */ ,
	        tabSize: 4 /* 3 */ ,
	        fontFamily: `theme(fontFamily.sans, ${theme$1.fontFamily.sans})`
	    },
	    /*
	    1. Remove the margin in all browsers.
	    2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
	    */ body: {
	        margin: '0' /* 1 */ ,
	        lineHeight: 'inherit' /* 2 */ 
	    },
	    /*
	    1. Add the correct height in Firefox.
	    2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
	    3. Ensure horizontal rules are visible by default.
	    */ hr: {
	        height: '0' /* 1 */ ,
	        color: 'inherit',
	        /* 2 */ borderTopWidth: '1px' /* 3 */ 
	    },
	    /*
	    Add the correct text decoration in Chrome, Edge, and Safari.
	    */ 'abbr:where([title])': {
	        textDecoration: 'underline dotted'
	    },
	    /*
	    Remove the default font size and weight for headings.
	    */ 'h1,h2,h3,h4,h5,h6': {
	        fontSize: 'inherit',
	        fontWeight: 'inherit'
	    },
	    /*
	    Reset links to optimize for opt-in styling instead of opt-out.
	    */ a: {
	        color: 'inherit',
	        textDecoration: 'inherit'
	    },
	    /*
	    Add the correct font weight in Edge and Safari.
	    */ 'b,strong': {
	        fontWeight: 'bolder'
	    },
	    /*
	    1. Use the user's configured `mono` font family by default.
	    2. Correct the odd `em` font sizing in all browsers.
	    */ 'code,kbd,samp,pre': {
	        fontFamily: `theme(fontFamily.mono, ${theme$1.fontFamily.mono})`,
	        fontSize: '1em'
	    },
	    /*
	    Add the correct font size in all browsers.
	    */ small: {
	        fontSize: '80%'
	    },
	    /*
	    Prevent `sub` and `sup` elements from affecting the line height in all browsers.
	    */ 'sub,sup': {
	        fontSize: '75%',
	        lineHeight: 0,
	        position: 'relative',
	        verticalAlign: 'baseline'
	    },
	    sub: {
	        bottom: '-0.25em'
	    },
	    sup: {
	        top: '-0.5em'
	    },
	    /*
	    1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
	    2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
	    3. Remove gaps between table borders by default.
	    */ table: {
	        textIndent: '0' /* 1 */ ,
	        borderColor: 'inherit' /* 2 */ ,
	        borderCollapse: 'collapse' /* 3 */ 
	    },
	    /*
	    1. Change the font styles in all browsers.
	    2. Remove the margin in Firefox and Safari.
	    3. Remove default padding in all browsers.
	    */ 'button,input,optgroup,select,textarea': {
	        fontFamily: 'inherit' /* 1 */ ,
	        fontSize: '100%' /* 1 */ ,
	        lineHeight: 'inherit' /* 1 */ ,
	        color: 'inherit' /* 1 */ ,
	        margin: '0' /* 2 */ ,
	        padding: '0' /* 3 */ 
	    },
	    /*
	    Remove the inheritance of text transform in Edge and Firefox.
	    */ 'button,select': {
	        textTransform: 'none'
	    },
	    /*
	    1. Correct the inability to style clickable types in iOS and Safari.
	    2. Remove default button styles.
	    */ "button,[type='button'],[type='reset'],[type='submit']": {
	        WebkitAppearance: 'button' /* 1 */ ,
	        backgroundColor: 'transparent' /* 2 */ ,
	        backgroundImage: 'none' /* 4 */ 
	    },
	    /*
	    Use the modern Firefox focus style for all focusable elements.
	    */ ':-moz-focusring': {
	        outline: 'auto'
	    },
	    /*
	    Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
	    */ ':-moz-ui-invalid': {
	        boxShadow: 'none'
	    },
	    /*
	    Add the correct vertical alignment in Chrome and Firefox.
	    */ progress: {
	        verticalAlign: 'baseline'
	    },
	    /*
	    Correct the cursor style of increment and decrement buttons in Safari.
	    */ '::-webkit-inner-spin-button,::-webkit-outer-spin-button': {
	        height: 'auto'
	    },
	    /*
	    1. Correct the odd appearance in Chrome and Safari.
	    2. Correct the outline style in Safari.
	    */ "[type='search']": {
	        WebkitAppearance: 'textfield' /* 1 */ ,
	        outlineOffset: '-2px' /* 2 */ 
	    },
	    /*
	    Remove the inner padding in Chrome and Safari on macOS.
	    */ '::-webkit-search-decoration': {
	        WebkitAppearance: 'none'
	    },
	    /*
	    1. Correct the inability to style clickable types in iOS and Safari.
	    2. Change font properties to `inherit` in Safari.
	    */ '::-webkit-file-upload-button': {
	        WebkitAppearance: 'button' /* 1 */ ,
	        font: 'inherit' /* 2 */ 
	    },
	    /*
	    Add the correct display in Chrome and Safari.
	    */ summary: {
	        display: 'list-item'
	    },
	    /*
	    Removes the default spacing and border for appropriate elements.
	    */ 'blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre': {
	        margin: '0'
	    },
	    fieldset: {
	        margin: '0',
	        padding: '0'
	    },
	    legend: {
	        padding: '0'
	    },
	    'ol,ul,menu': {
	        listStyle: 'none',
	        margin: '0',
	        padding: '0'
	    },
	    /*
	    Prevent resizing textareas horizontally by default.
	    */ textarea: {
	        resize: 'vertical'
	    },
	    /*
	    1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
	    2. Set the default placeholder color to the user's configured gray 400 color.
	    */ 'input::placeholder,textarea::placeholder': {
	        opacity: 1 /* 1 */ ,
	        color: 'theme(colors.gray.400, #9ca3af)' /* 2 */ 
	    },
	    /*
	    Set the default cursor for buttons.
	    */ 'button,[role="button"]': {
	        cursor: 'pointer'
	    },
	    /*
	    Make sure disabled buttons don't get the pointer cursor.
	    */ ':disabled': {
	        cursor: 'default'
	    },
	    /*
	    1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
	    2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
	      This can trigger a poorly considered lint error in some tools but is included by design.
	    */ 'img,svg,video,canvas,audio,iframe,embed,object': {
	        display: 'block' /* 1 */ ,
	        verticalAlign: 'middle' /* 2 */ 
	    },
	    /*
	    Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
	    */ 'img,video': {
	        maxWidth: '100%',
	        height: 'auto'
	    },
	    /*
	    Ensure the default browser behavior of the `hidden` attribute.
	    */ '[hidden]': {
	        display: 'none'
	    }
	};

	const rules = [
	    /* arbitrary properties: [paint-order:markers] */ [
	        '\\[([-\\w]+):(.+)]',
	        ({ 1: $1 , 2: $2  }, context)=>({
	                '@layer overrides': {
	                    '&': {
	                        [$1]: twind.arbitrary(`[${$2}]`, $1, context)
	                    }
	                }
	            })
	        , 
	    ],
	    /* Styling based on parent and peer state */ [
	        '(group|peer)(~[^-[]+)?',
	        ({ input  }, { h  })=>[
	                {
	                    c: h(input)
	                }
	            ]
	    ],
	    /* LAYOUT */ [
	        'aspect-',
	        twind.fromTheme('aspectRatio')
	    ],
	    [
	        'container',
	        (_, { theme  })=>{
	            const { screens =theme('screens') , center , padding  } = theme('container');
	            const rules1 = {
	                width: '100%',
	                marginRight: center && 'auto',
	                marginLeft: center && 'auto',
	                ...paddingFor('xs')
	            };
	            for(const screen1 in screens){
	                const value = screens[screen1];
	                if (typeof value == 'string') {
	                    rules1[twind.mql(value)] = {
	                        '&': {
	                            maxWidth: value,
	                            ...paddingFor(screen1)
	                        }
	                    };
	                }
	            }
	            return rules1;
	            function paddingFor(screen) {
	                const value = padding && (typeof padding == 'string' ? padding : padding[screen] || padding.DEFAULT);
	                if (value) {
	                    return {
	                        paddingRight: value,
	                        paddingLeft: value
	                    };
	                }
	            }
	        }, 
	    ],
	    // Content
	    [
	        'content-',
	        twind.fromTheme('content', ({ _  })=>({
	                '--tw-content': _,
	                content: 'var(--tw-content)'
	            })
	        ), 
	    ],
	    // Box Decoration Break
	    [
	        '(?:box-)?decoration-(slice|clone)',
	        'boxDecorationBreak'
	    ],
	    // Box Sizing
	    [
	        'box-(border|content)',
	        'boxSizing',
	        ({ 1: $1  })=>$1 + '-box'
	    ],
	    // Display
	    [
	        'hidden',
	        {
	            display: 'none'
	        }
	    ],
	    // Table Layout
	    [
	        'table-(auto|fixed)',
	        'tableLayout'
	    ],
	    [
	        [
	            '(block|flex|table|grid|inline|contents|flow-root|list-item)',
	            '(inline-(block|flex|table|grid))',
	            '(table-(caption|cell|column|row|(column|row|footer|header)-group))', 
	        ],
	        'display', 
	    ],
	    // Floats
	    '(float)-(left|right|none)',
	    // Clear
	    '(clear)-(left|right|none|both)',
	    // Overflow
	    '(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)',
	    // Isolation
	    '(isolation)-(auto)',
	    // Isolation
	    [
	        'isolate',
	        'isolation'
	    ],
	    // Object Fit
	    [
	        'object-(contain|cover|fill|none|scale-down)',
	        'objectFit'
	    ],
	    // Object Position
	    [
	        'object-',
	        twind.fromTheme('objectPosition')
	    ],
	    [
	        'object-(top|bottom|center|(left|right)(-(top|bottom))?)',
	        'objectPosition',
	        spacify
	    ],
	    // Overscroll Behavior
	    [
	        'overscroll(-[xy])?-(auto|contain|none)',
	        ({ 1: $1 = '' , 2: $2  })=>({
	                ['overscroll-behavior' + $1]: $2
	            })
	        , 
	    ],
	    // Position
	    [
	        '(static|fixed|absolute|relative|sticky)',
	        'position'
	    ],
	    // Top / Right / Bottom / Left
	    [
	        '-?inset(-[xy])?(?:-|$)',
	        twind.fromTheme('inset', ({ 1: $1 , _  })=>({
	                top: $1 != '-x' && _,
	                right: $1 != '-y' && _,
	                bottom: $1 != '-x' && _,
	                left: $1 != '-y' && _
	            })
	        ), 
	    ],
	    [
	        '-?(top|bottom|left|right)(?:-|$)',
	        twind.fromTheme('inset')
	    ],
	    // Visibility
	    [
	        'visible',
	        'visibility'
	    ],
	    [
	        'invisible',
	        {
	            visibility: 'hidden'
	        }
	    ],
	    // Z-Index
	    [
	        '-?z-',
	        twind.fromTheme('zIndex')
	    ],
	    /* FLEXBOX */ // Flex Direction
	    [
	        'flex-((row|col)(-reverse)?)',
	        'flexDirection',
	        columnify
	    ],
	    [
	        'flex-(wrap|wrap-reverse|nowrap)',
	        'flexWrap'
	    ],
	    [
	        '(flex-(?:grow|shrink))(?:-|$)',
	        twind.fromTheme()
	    ],
	    [
	        '(flex)-',
	        twind.fromTheme()
	    ],
	    [
	        'grow(?:-|$)',
	        twind.fromTheme('flexGrow')
	    ],
	    [
	        'shrink(?:-|$)',
	        twind.fromTheme('flexShrink')
	    ],
	    [
	        'basis-',
	        twind.fromTheme('flexBasis')
	    ],
	    [
	        '-?(order)-',
	        twind.fromTheme()
	    ],
	    '-?(order)-(\\d+)',
	    /* GRID */ // Grid Template Columns
	    [
	        'grid-cols-',
	        twind.fromTheme('gridTemplateColumns')
	    ],
	    [
	        'grid-cols-(\\d+)',
	        'gridTemplateColumns',
	        gridTemplate
	    ],
	    // Grid Column Start / End
	    [
	        'col-',
	        twind.fromTheme('gridColumn')
	    ],
	    [
	        'col-(span)-(\\d+)',
	        'gridColumn',
	        span
	    ],
	    [
	        'col-start-',
	        twind.fromTheme('gridColumnStart')
	    ],
	    [
	        'col-start-(\\d+|auto)',
	        'gridColumnStart'
	    ],
	    [
	        'col-end-',
	        twind.fromTheme('gridColumnEnd')
	    ],
	    [
	        'col-end-(\\d+|auto)',
	        'gridColumnEnd'
	    ],
	    // Grid Template Rows
	    [
	        'grid-rows-',
	        twind.fromTheme('gridTemplateRows')
	    ],
	    [
	        'grid-rows-(\\d+)',
	        'gridTemplateRows',
	        gridTemplate
	    ],
	    // Grid Row Start / End
	    [
	        'row-',
	        twind.fromTheme('gridRow')
	    ],
	    [
	        'row-(span)-(\\d+)',
	        'gridRow',
	        span
	    ],
	    [
	        'row-start-',
	        twind.fromTheme('gridRowStart')
	    ],
	    [
	        'row-start-(\\d+|auto)',
	        'gridRowStart'
	    ],
	    [
	        'row-end-',
	        twind.fromTheme('gridRowEnd')
	    ],
	    [
	        'row-end-(\\d+|auto)',
	        'gridRowEnd'
	    ],
	    // Grid Auto Flow
	    [
	        'grid-flow-((row|col)(-dense)?)',
	        'gridAutoFlow',
	        (match)=>spacify(columnify(match))
	    ],
	    // Grid Auto Columns
	    [
	        'auto-cols-',
	        twind.fromTheme('gridAutoColumns')
	    ],
	    // Grid Auto Rows
	    [
	        'auto-rows-',
	        twind.fromTheme('gridAutoRows')
	    ],
	    // Gap
	    [
	        'gap-x(?:-|$)',
	        twind.fromTheme('gap', 'columnGap')
	    ],
	    [
	        'gap-y(?:-|$)',
	        twind.fromTheme('gap', 'rowGap')
	    ],
	    [
	        'gap(?:-|$)',
	        twind.fromTheme('gap')
	    ],
	    /* BOX ALIGNMENT */ // Justify Items
	    // Justify Self
	    '(justify-(?:items|self))-',
	    // Justify Content
	    [
	        'justify-',
	        'justifyContent',
	        convertContentValue
	    ],
	    // Align Content
	    // Align Items
	    // Align Self
	    [
	        '(content|items|self)-',
	        (match)=>({
	                ['align-' + match[1]]: convertContentValue(match)
	            })
	        , 
	    ],
	    // Place Content
	    // Place Items
	    // Place Self
	    [
	        '(place-(content|items|self))-',
	        ({ 1: $1 , $$  })=>({
	                [$1]: ('wun'.includes($$[3]) ? 'space-' : '') + $$
	            })
	        , 
	    ],
	    /* SPACING */ // Padding
	    [
	        'p([xytrbl])?(?:-|$)',
	        twind.fromTheme('padding', edge('padding'))
	    ],
	    // Margin
	    [
	        '-?m([xytrbl])?(?:-|$)',
	        twind.fromTheme('margin', edge('margin'))
	    ],
	    // Space Between
	    [
	        '-?space-(x|y)(?:-|$)',
	        twind.fromTheme('space', ({ 1: $1 , _  })=>({
	                '&>:not([hidden])~:not([hidden])': {
	                    [`--tw-space-${$1}-reverse`]: '0',
	                    ['margin-' + ({
	                        y: 'top',
	                        x: 'left'
	                    })[$1]]: `calc(${_} * calc(1 - var(--tw-space-${$1}-reverse)))`,
	                    ['margin-' + ({
	                        y: 'bottom',
	                        x: 'right'
	                    })[$1]]: `calc(${_} * var(--tw-space-${$1}-reverse))`
	                }
	            })
	        ), 
	    ],
	    [
	        'space-(x|y)-reverse',
	        ({ 1: $1  })=>({
	                '&>:not([hidden])~:not([hidden])': {
	                    [`--tw-space-${$1}-reverse`]: '1'
	                }
	            })
	        , 
	    ],
	    /* SIZING */ // Width
	    [
	        'w-',
	        twind.fromTheme('width')
	    ],
	    // Min-Width
	    [
	        'min-w-',
	        twind.fromTheme('minWidth')
	    ],
	    // Max-Width
	    [
	        'max-w-',
	        twind.fromTheme('maxWidth')
	    ],
	    // Height
	    [
	        'h-',
	        twind.fromTheme('height')
	    ],
	    // Min-Height
	    [
	        'min-h-',
	        twind.fromTheme('minHeight')
	    ],
	    // Max-Height
	    [
	        'max-h-',
	        twind.fromTheme('maxHeight')
	    ],
	    /* TYPOGRAPHY */ // Font Weight
	    [
	        'font-',
	        twind.fromTheme('fontWeight')
	    ],
	    // Font Family
	    [
	        'font-',
	        twind.fromTheme('fontFamily', 'fontFamily', join)
	    ],
	    // Font Smoothing
	    [
	        'antialiased',
	        {
	            WebkitFontSmoothing: 'antialiased',
	            MozOsxFontSmoothing: 'grayscale'
	        }, 
	    ],
	    [
	        'subpixel-antialiased',
	        {
	            WebkitFontSmoothing: 'auto',
	            MozOsxFontSmoothing: 'auto'
	        }, 
	    ],
	    // Font Style
	    [
	        'italic',
	        'fontStyle'
	    ],
	    [
	        'not-italic',
	        {
	            fontStyle: 'normal'
	        }
	    ],
	    // Font Variant Numeric
	    [
	        '(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)',
	        ({ 1: $1 , 2: $2 = '' , 3: $3  })=>// normal-nums
	            $2 == 'normal' ? {
	                fontVariantNumeric: 'normal'
	            } : {
	                ['--tw-' + ($3 // diagonal-fractions, stacked-fractions
	                 ? 'numeric-fraction' : 'pt'.includes($2[0]) // proportional-nums, tabular-nums
	                 ? 'numeric-spacing' : $2 // lining-nums, oldstyle-nums
	                 ? 'numeric-figure' : $1)]: $1,
	                fontVariantNumeric: 'var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)',
	                '@layer defaults': {
	                    '*,::before,::after': {
	                        '--tw-ordinal': 'var(--tw-empty,/*!*/ /*!*/)',
	                        '--tw-slashed-zero': 'var(--tw-empty,/*!*/ /*!*/)',
	                        '--tw-numeric-figure': 'var(--tw-empty,/*!*/ /*!*/)',
	                        '--tw-numeric-spacing': 'var(--tw-empty,/*!*/ /*!*/)',
	                        '--tw-numeric-fraction': 'var(--tw-empty,/*!*/ /*!*/)'
	                    }
	                }
	            }
	        , 
	    ],
	    // Letter Spacing
	    [
	        'tracking-',
	        twind.fromTheme('letterSpacing')
	    ],
	    // Line Height
	    [
	        'leading-',
	        twind.fromTheme('lineHeight')
	    ],
	    // List Style Position
	    [
	        'list-(inside|outside)',
	        'listStylePosition'
	    ],
	    // List Style Type
	    [
	        'list-',
	        twind.fromTheme('listStyleType')
	    ],
	    // fallback for list style type
	    [
	        'list-',
	        'listStyleType'
	    ],
	    // Placeholder Opacity
	    [
	        'placeholder-opacity-',
	        twind.fromTheme('placeholderOpacity', ({ _  })=>({
	                ['&::placeholder']: {
	                    '--tw-placeholder-opacity': _
	                }
	            })
	        ), 
	    ],
	    // Placeholder Color
	    [
	        'placeholder-',
	        twind.colorFromTheme({
	            property: 'color',
	            selector: '&::placeholder'
	        })
	    ],
	    // Text Alignment
	    [
	        'text-(left|center|right|justify)',
	        'textAlign'
	    ],
	    // Text Opacity
	    [
	        'text-opacity-',
	        twind.fromTheme('textOpacity', '--tw-text-opacity')
	    ],
	    // Text Color
	    [
	        'text-',
	        twind.colorFromTheme({
	            property: 'color'
	        })
	    ],
	    // Font Size
	    [
	        'text-',
	        twind.fromTheme('fontSize', ({ _  })=>typeof _ == 'string' ? {
	                fontSize: _
	            } : {
	                fontSize: _[0],
	                ...typeof _[1] == 'string' ? {
	                    lineHeight: _[1]
	                } : _[1]
	            }
	        ), 
	    ],
	    // Text Indent
	    [
	        'indent-',
	        twind.fromTheme('textIndent')
	    ],
	    // Text Decoration
	    [
	        '(overline|underline|line-through)',
	        'textDecoration'
	    ],
	    [
	        'no-underline',
	        {
	            textDecoration: 'none'
	        }
	    ],
	    // Text Underline offset
	    [
	        'underline-',
	        twind.fromTheme('textUnderlineOffset')
	    ],
	    // Text Decoration Color
	    [
	        'decoration-',
	        twind.colorFromTheme({
	            section: 'textDecorationColor',
	            opacityVariable: false,
	            opacitySection: 'opacity'
	        }), 
	    ],
	    // Text Decoration Thickness
	    [
	        'decoration-',
	        twind.fromTheme('textDecorationThickness')
	    ],
	    // Text Decoration Style
	    [
	        'decoration-',
	        'textDecorationStyle'
	    ],
	    // Text Transform
	    [
	        '(uppercase|lowercase|capitalize)',
	        'textTransform'
	    ],
	    [
	        'normal-case',
	        {
	            textTransform: 'none'
	        }
	    ],
	    // Text Overflow
	    [
	        'truncate',
	        {
	            overflow: 'hidden',
	            whiteSpace: 'nowrap',
	            textOverflow: 'ellipsis'
	        }, 
	    ],
	    [
	        'text-(ellipsis|clip)',
	        'textOverflow'
	    ],
	    [
	        'overflow-(ellipsis)',
	        'textOverflow'
	    ],
	    // Vertical Alignment
	    [
	        'align-',
	        'verticalAlign'
	    ],
	    // Whitespace
	    [
	        'whitespace-',
	        'whiteSpace'
	    ],
	    // Word Break
	    [
	        'break-normal',
	        {
	            wordBreak: 'normal',
	            overflowWrap: 'normal'
	        }
	    ],
	    [
	        'break-words',
	        {
	            overflowWrap: 'break-word'
	        }
	    ],
	    [
	        'break-all',
	        {
	            wordBreak: 'break-all'
	        }
	    ],
	    // Caret Color
	    [
	        'caret-',
	        twind.colorFromTheme({
	            section: 'caretColor',
	            opacityVariable: false,
	            opacitySection: 'opacity'
	        }), 
	    ],
	    // Accent Color
	    [
	        'accent-',
	        twind.colorFromTheme({
	            section: 'accentColor',
	            opacityVariable: false,
	            opacitySection: 'opacity'
	        }), 
	    ],
	    // Gradient Color Stops
	    [
	        'bg-gradient-to-([trbl]{1,2})',
	        'backgroundImage',
	        ({ 1: $1  })=>`linear-gradient(to ${position($1, ' ')},var(--tw-gradient-stops))`
	        , 
	    ],
	    [
	        'from-',
	        twind.colorFromTheme({
	            section: 'gradientColorStops',
	            opacityVariable: false,
	            opacitySection: 'opacity'
	        }, ({ _  })=>({
	                '--tw-gradient-from': _.value,
	                '--tw-gradient-to': _.color({
	                    opacityValue: '0'
	                }),
	                '--tw-gradient-stops': `var(--tw-gradient-from),var(--tw-gradient-to)`
	            })
	        ), 
	    ],
	    [
	        'via-',
	        twind.colorFromTheme({
	            section: 'gradientColorStops',
	            opacityVariable: false,
	            opacitySection: 'opacity'
	        }, ({ _  })=>({
	                '--tw-gradient-to': _.color({
	                    opacityValue: '0'
	                }),
	                '--tw-gradient-stops': `var(--tw-gradient-from),${_.value},var(--tw-gradient-to)`
	            })
	        ), 
	    ],
	    [
	        'to-',
	        twind.colorFromTheme({
	            section: 'gradientColorStops',
	            property: '--tw-gradient-to',
	            opacityVariable: false,
	            opacitySection: 'opacity'
	        }), 
	    ],
	    /* BACKGROUNDS */ // Background Attachment
	    [
	        'bg-(fixed|local|scroll)',
	        'backgroundAttachment'
	    ],
	    // Background Origin
	    [
	        'bg-origin-(border|padding|content)',
	        'backgroundOrigin',
	        ({ 1: $1  })=>$1 + '-box'
	    ],
	    // Background Repeat
	    [
	        [
	            'bg-(no-repeat|repeat(-[xy])?)',
	            'bg-repeat-(round|space)'
	        ],
	        'backgroundRepeat'
	    ],
	    // Background Blend Mode
	    [
	        'bg-blend-',
	        'backgroundBlendMode'
	    ],
	    // Background Clip
	    [
	        'bg-clip-(border|padding|content|text)',
	        'backgroundClip',
	        ({ 1: $1  })=>$1 + ($1 == 'text' ? '' : '-box')
	        , 
	    ],
	    // Background Opacity
	    [
	        'bg-opacity-',
	        twind.fromTheme('backgroundOpacity', '--tw-bg-opacity')
	    ],
	    // Background Color
	    // bg-${backgroundColor}/${backgroundOpacity}
	    [
	        'bg-',
	        twind.colorFromTheme({
	            section: 'backgroundColor'
	        })
	    ],
	    // Background Image
	    // supported arbitrary types are: length, color, angle, list
	    [
	        'bg-',
	        twind.fromTheme('backgroundImage')
	    ],
	    // Background Size
	    [
	        'bg-',
	        twind.fromTheme('backgroundSize')
	    ],
	    // Background Position
	    [
	        'bg-',
	        twind.fromTheme('backgroundPosition')
	    ],
	    [
	        'bg-(top|bottom|center|(left|right)(-(top|bottom))?)',
	        'backgroundPosition',
	        spacify
	    ],
	    /* BORDERS */ // Border Radius
	    [
	        'rounded(?:-|$)',
	        twind.fromTheme('borderRadius')
	    ],
	    [
	        'rounded-([trbl]{1,2})(?:-|$)',
	        twind.fromTheme('borderRadius', ({ 1: $1 , _  })=>{
	            const corners = {
	                t: [
	                    'tl',
	                    'tr'
	                ],
	                r: [
	                    'tr',
	                    'br'
	                ],
	                b: [
	                    'bl',
	                    'br'
	                ],
	                l: [
	                    'bl',
	                    'tl'
	                ]
	            }[$1] || [
	                $1,
	                $1
	            ];
	            return {
	                [`border-${position(corners[0])}-radius`]: _,
	                [`border-${position(corners[1])}-radius`]: _
	            };
	        }), 
	    ],
	    // Border Collapse
	    [
	        'border-(collapse|separate)',
	        'borderCollapse'
	    ],
	    // Border Opacity
	    [
	        'border-opacity(?:-|$)',
	        twind.fromTheme('borderOpacity', '--tw-border-opacity')
	    ],
	    // Border Style
	    [
	        'border-(solid|dashed|dotted|double|none)',
	        'borderStyle'
	    ],
	    // Border Color
	    [
	        'border-',
	        twind.colorFromTheme()
	    ],
	    // Border Width
	    [
	        'border-([xytrbl])(?:-|$)',
	        twind.fromTheme('borderWidth', edge('border', 'Width'))
	    ],
	    [
	        'border(?:-|$)',
	        twind.fromTheme('borderWidth')
	    ],
	    // Divide Opacity
	    [
	        'divide-opacity(?:-|$)',
	        twind.fromTheme('divideOpacity', ({ _  })=>({
	                '&>:not([hidden])~:not([hidden])': {
	                    '--tw-divide-opacity': _
	                }
	            })
	        ), 
	    ],
	    // Divide Style
	    [
	        'divide-(solid|dashed|dotted|double|none)',
	        ({ 1: $1  })=>({
	                '&>:not([hidden])~:not([hidden])': {
	                    borderStyle: $1
	                }
	            })
	        , 
	    ],
	    // Divide Width
	    [
	        'divide-([xy]-reverse)',
	        ({ 1: $1  })=>({
	                '&>:not([hidden])~:not([hidden])': {
	                    ['--tw-divide-' + $1]: '1'
	                }
	            })
	        , 
	    ],
	    [
	        'divide-([xy])(?:-|$)',
	        twind.fromTheme('divideWidth', ({ 1: $1 , _  })=>{
	            const edges = {
	                x: 'lr',
	                y: 'tb'
	            }[$1];
	            return {
	                '&>:not([hidden])~:not([hidden])': {
	                    [`--tw-divide-${$1}-reverse`]: '0',
	                    [`border-${position(edges[0])}Width`]: `calc(${_} * calc(1 - var(--tw-divide-${$1}-reverse)))`,
	                    [`border-${position(edges[1])}Width`]: `calc(${_} * var(--tw-divide-${$1}-reverse))`
	                }
	            };
	        }), 
	    ],
	    // Divide Color
	    [
	        'divide-',
	        twind.colorFromTheme({
	            // section: $0.replace('-', 'Color') -> 'divideColor'
	            property: 'borderColor',
	            // opacityVariable: '--tw-border-opacity',
	            // opacitySection: section.replace('Color', 'Opacity') -> 'divideOpacity'
	            selector: '&>:not([hidden])~:not([hidden])'
	        }), 
	    ],
	    // Ring Offset Opacity
	    [
	        'ring-opacity(?:-|$)',
	        twind.fromTheme('ringOpacity', '--tw-ring-opacity')
	    ],
	    // Ring Offset Color
	    [
	        'ring-offset(?:-|$)',
	        twind.colorFromTheme({
	            // section: 'ringOffsetColor',
	            property: '--tw-ring-offset-color',
	            opacityVariable: false
	        }), 
	    ],
	    // Ring Offset Width
	    [
	        'ring-offset(?:-|$)',
	        twind.fromTheme('ringOffsetWidth', '--tw-ring-offset-width')
	    ],
	    // Ring Inset
	    [
	        'ring-inset',
	        {
	            '--tw-ring-inset': 'inset'
	        }
	    ],
	    // Ring Color
	    [
	        'ring-',
	        twind.colorFromTheme({
	            // section: 'ringColor',
	            property: '--tw-ring-color'
	        }), 
	    ],
	    // Ring Width
	    [
	        'ring(?:-|$)',
	        twind.fromTheme('ringWidth', ({ _  }, { theme  })=>({
	                '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
	                '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(${_} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
	                boxShadow: `var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)`,
	                '@layer defaults': {
	                    '*,::before,::after': {
	                        '--tw-ring-offset-shadow': '0 0 #0000',
	                        '--tw-ring-shadow': '0 0 #0000',
	                        '--tw-shadow': '0 0 #0000',
	                        '--tw-shadow-colored': '0 0 #0000',
	                        // Within own declaration to have the defaults above to be merged with defaults from shadow
	                        '&': {
	                            '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
	                            '--tw-ring-offset-width': theme('ringOffsetWidth', '', '0px'),
	                            '--tw-ring-offset-color': twind.toColorValue(theme('ringOffsetColor', '', '#fff')),
	                            '--tw-ring-color': twind.toColorValue(theme('ringColor', '', '#93c5fd'), {
	                                opacityVariable: '--tw-ring-opacity'
	                            }),
	                            '--tw-ring-opacity': theme('ringOpacity', '', '0.5')
	                        }
	                    }
	                }
	            })
	        ), 
	    ],
	    /* EFFECTS */ // Box Shadow Color
	    [
	        'shadow(?:-|$)',
	        twind.colorFromTheme({
	            section: 'boxShadowColor',
	            opacityVariable: false,
	            opacitySection: 'opacity'
	        }, ({ _  })=>({
	                '--tw-shadow-color': _.value,
	                '--tw-shadow': 'var(--tw-shadow-colored)'
	            })
	        ), 
	    ],
	    // Box Shadow
	    [
	        'shadow(?:-|$)',
	        twind.fromTheme('boxShadow', ({ _  })=>({
	                '--tw-shadow': join(_),
	                // replace all colors with reference to --tw-shadow-colored
	                // this matches colors after non-comma char (keyword, offset) before comma or the end
	                '--tw-shadow-colored': join(_).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, '$1var(--tw-shadow-color)$2'),
	                boxShadow: `var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)`,
	                '@layer defaults': {
	                    '*,::before,::after': {
	                        '--tw-ring-offset-shadow': '0 0 #0000',
	                        '--tw-ring-shadow': '0 0 #0000',
	                        '--tw-shadow': '0 0 #0000',
	                        '--tw-shadow-colored': '0 0 #0000'
	                    }
	                }
	            })
	        ), 
	    ],
	    // Opacity
	    [
	        '(opacity)-',
	        twind.fromTheme()
	    ],
	    // Mix Blend Mode
	    [
	        'mix-blend-',
	        'mixBlendMode'
	    ],
	    /* FILTERS */ ...filter(),
	    ...filter('backdrop-'),
	    /* TRANSITIONS AND ANIMATION */ // Transition Property
	    [
	        'transition(?:-|$)',
	        twind.fromTheme('transitionProperty', (match, { theme  })=>({
	                transitionProperty: join(match),
	                transitionTimingFunction: match._ == 'none' ? undefined : join(theme('transitionTimingFunction', '')),
	                transitionDuration: match._ == 'none' ? undefined : join(theme('transitionDuration', ''))
	            })
	        ), 
	    ],
	    // Transition Duration
	    [
	        'duration(?:-|$)',
	        twind.fromTheme('transitionDuration', 'transitionDuration', join)
	    ],
	    // Transition Timing Function
	    [
	        'ease(?:-|$)',
	        twind.fromTheme('transitionTimingFunction', 'transitionTimingFunction', join)
	    ],
	    // Transition Delay
	    [
	        'delay(?:-|$)',
	        twind.fromTheme('transitionDelay', 'transitionDelay', join)
	    ],
	    [
	        'animate(?:-|$)',
	        twind.fromTheme('animation', (match, { theme , h  })=>{
	            const animation = join(match);
	            // Try to auto inject keyframes
	            const parts = animation.split(' ');
	            const keyframeValues = theme('keyframes', parts[0]);
	            if (keyframeValues) {
	                return {
	                    ['@keyframes ' + (parts[0] = h(parts[0]))]: keyframeValues,
	                    animation: parts.join(' ')
	                };
	            }
	            return {
	                animation
	            };
	        }), 
	    ],
	    /* TRANSFORMS */ // Transform
	    '(transform)-(none)',
	    [
	        'transform',
	        tranformDefaults
	    ],
	    [
	        'transform-(cpu|gpu)',
	        ({ 1: $1  })=>({
	                '--tw-transform': transformValue($1 == 'gpu')
	            })
	        , 
	    ],
	    // Scale
	    [
	        'scale(-[xy])?-',
	        twind.fromTheme('scale', ({ 1: $1 , _  })=>({
	                ['--tw-scale' + ($1 || '-x')]: _,
	                ['--tw-scale' + ($1 || '-y')]: _,
	                ...tranformDefaults()
	            })
	        ), 
	    ],
	    // Rotate
	    [
	        '-?(rotate)-',
	        twind.fromTheme('rotate', transform)
	    ],
	    // Translate
	    [
	        '-?(translate-[xy])-',
	        twind.fromTheme('translate', transform)
	    ],
	    // Skew
	    [
	        '-?(skew-[xy])-',
	        twind.fromTheme('skew', transform)
	    ],
	    // Transform Origin
	    [
	        'origin(-center|(-top|-bottom)?(-(left|right))?)',
	        'transformOrigin',
	        spacify
	    ],
	    /* INTERACTIVITY */ // Appearance
	    '(appearance)-',
	    // Columns
	    [
	        '(columns)-',
	        twind.fromTheme()
	    ],
	    '(columns)-(\\d+)',
	    // Break Before, After and Inside
	    '(break-(?:before|after|inside))-',
	    // Cursor
	    [
	        '(cursor)-',
	        twind.fromTheme()
	    ],
	    '(cursor)-',
	    // Scroll Snap Type
	    [
	        'snap-(none)',
	        'scroll-snap-type'
	    ],
	    [
	        'snap-(x|y|both)',
	        ({ 1: $1  })=>({
	                'scroll-snap-type': $1 + ' var(--tw-scroll-snap-strictness)',
	                '@layer defaults': {
	                    '*,::before,::after': {
	                        '--tw-scroll-snap-strictness': 'proximity'
	                    }
	                }
	            })
	        , 
	    ],
	    [
	        'snap-(mandatory|proximity)',
	        '--tw-scroll-snap-strictness'
	    ],
	    // Scroll Snap Align
	    [
	        'snap-(?:(start|end|center)|align-(none))',
	        'scroll-snap-align'
	    ],
	    // Scroll Snap Stop
	    [
	        'snap-(normal|always)',
	        'scroll-snap-stop'
	    ],
	    [
	        'scroll-(auto|smooth)',
	        'scroll-behavior'
	    ],
	    // Scroll Margin
	    // Padding
	    [
	        'scroll-p([xytrbl])?(?:-|$)',
	        twind.fromTheme('padding', edge('scroll-padding'))
	    ],
	    // Margin
	    [
	        '-?scroll-m([xytrbl])?(?:-|$)',
	        twind.fromTheme('scroll-margin', edge('scroll-margin')), 
	    ],
	    // Touch Action
	    [
	        'touch-(auto|none|manipulation)',
	        'touch-action'
	    ],
	    [
	        'touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))',
	        ({ 1: $1 , 2: $2 , 3: $3  })=>({
	                // x, left, right -> pan-x
	                // y, up, down -> pan-y
	                // -> pinch-zoom
	                [`--tw-${$2 ? 'pan-x' : $3 ? 'pan-y' : $1}`]: $1,
	                'touch-action': 'var(--tw-touch-action)',
	                '@layer defaults': {
	                    '*,::before,::after': {
	                        '--tw-pan-x': 'var(--tw-empty,/*!*/ /*!*/)',
	                        '--tw-pan-y': 'var(--tw-empty,/*!*/ /*!*/)',
	                        '--tw-pinch-zoom': 'var(--tw-empty,/*!*/ /*!*/)',
	                        '--tw-touch-action': 'var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)'
	                    }
	                }
	            })
	        , 
	    ],
	    // Outline Style
	    [
	        'outline-none',
	        {
	            outline: '2px solid transparent',
	            'outline-offset': '2px'
	        }, 
	    ],
	    [
	        'outline',
	        {
	            outlineStyle: 'solid'
	        }
	    ],
	    [
	        'outline-(dashed|dotted|double|hidden)',
	        'outlineStyle'
	    ],
	    // Outline Offset
	    [
	        '(outline-offset)-',
	        twind.fromTheme()
	    ],
	    // Outline Color
	    [
	        'outline-',
	        twind.colorFromTheme({
	            section: 'outlineColor',
	            opacityVariable: false,
	            opacitySection: 'opacity'
	        }), 
	    ],
	    // Outline Width
	    [
	        'outline-',
	        twind.fromTheme('outlineWidth')
	    ],
	    // Pointer Events
	    '(pointer-events)-',
	    // Will Change
	    [
	        '(will-change)-',
	        twind.fromTheme()
	    ],
	    '(will-change)-',
	    // Resize
	    [
	        'resize(?:-(none|x|y))?',
	        'resize',
	        ({ 1: $1  })=>({
	                x: 'horizontal',
	                y: 'vertical'
	            })[$1] || $1 || 'both'
	        , 
	    ],
	    // User Select
	    [
	        'select-(none|text|all|auto)',
	        'userSelect'
	    ],
	    /* SVG */ // Fill, Stroke
	    [
	        '(fill|stroke)-',
	        twind.fromTheme()
	    ],
	    // Stroke Width
	    [
	        'stroke-',
	        twind.fromTheme('strokeWidth')
	    ],
	    /* ACCESSIBILITY */ // Screen Readers
	    [
	        'sr-only',
	        {
	            position: 'absolute',
	            width: '1px',
	            height: '1px',
	            padding: '0',
	            margin: '-1px',
	            overflow: 'hidden',
	            whiteSpace: 'nowrap',
	            clip: 'rect(0,0,0,0)',
	            borderWidth: '0'
	        }, 
	    ],
	    [
	        'not-sr-only',
	        {
	            position: 'static',
	            width: 'auto',
	            height: 'auto',
	            padding: '0',
	            margin: '0',
	            overflow: 'visible',
	            whiteSpace: 'normal',
	            clip: 'auto'
	        }, 
	    ], 
	];
	function spacify(value) {
	    return (typeof value == 'string' ? value : value[1]).replace(/-/g, ' ').trim();
	}
	function columnify(value) {
	    return (typeof value == 'string' ? value : value[1]).replace('col', 'column');
	}
	function position(shorthand, separator = '-') {
	    const longhand = [];
	    for (const short of shorthand){
	        longhand.push({
	            t: 'top',
	            r: 'right',
	            b: 'bottom',
	            l: 'left'
	        }[short]);
	    }
	    return longhand.join(separator);
	}
	function join(value) {
	    return value && '' + (value._ || value);
	}
	function convertContentValue({ $$  }) {
	    return (({
	        // /* aut*/ o: '',
	        /* sta*/ r: 'flex-',
	        /* end*/ '': 'flex-',
	        // /* cen*/ t /*er*/: '',
	        /* bet*/ w: 'space-',
	        /* aro*/ u: 'space-',
	        /* eve*/ n: 'space-'
	    })[$$[3] || ''] || '') + $$;
	}
	function edge(propertyPrefix, propertySuffix = '') {
	    return ({ 1: $1 , _  })=>{
	        const edges = {
	            x: 'lr',
	            y: 'tb'
	        }[$1] || $1 + $1;
	        return edges ? {
	            [propertyPrefix + '-' + position(edges[0]) + propertySuffix]: _,
	            [propertyPrefix + '-' + position(edges[1]) + propertySuffix]: _
	        } : {
	            [propertyPrefix + propertySuffix]: _
	        };
	    };
	}
	function filter(prefix = '') {
	    const filters = [
	        'blur',
	        'brightness',
	        'contrast',
	        'grayscale',
	        'hue-rotate',
	        'invert',
	        prefix && 'opacity',
	        'saturate',
	        'sepia',
	        !prefix && 'drop-shadow', 
	    ].filter(Boolean);
	    let defaults = {};
	    // first create properties defaults
	    for (const key1 of filters){
	        defaults[`--tw-${prefix}${key1}`] = 'var(--tw-empty,/*!*/ /*!*/)';
	    }
	    defaults = {
	        // add default filter which allows standalone usage
	        [`${prefix}filter`]: filters.map((key)=>`var(--tw-${prefix}${key})`
	        ).join(' '),
	        // move defaults
	        '@layer defaults': {
	            '*,::before,::after': defaults
	        }
	    };
	    return [
	        `(${prefix}filter)-(none)`,
	        [
	            `${prefix}filter`,
	            defaults
	        ],
	        ...filters.map((key)=>[
	                // hue-rotate can be negated
	                `${key[0] == 'h' ? '-?' : ''}(${prefix}${key})(?:-|$)`,
	                twind.fromTheme(key, ({ 1: $1 , _  })=>({
	                        [`--tw-${$1}`]: twind.asArray(_).map((value)=>`${key}(${value})`
	                        ).join(' '),
	                        ...defaults
	                    })
	                ), 
	            ]
	        ), 
	    ];
	}
	function transform({ 1: $1 , _  }) {
	    return {
	        ['--tw-' + $1]: _,
	        ...tranformDefaults()
	    };
	}
	function tranformDefaults() {
	    return {
	        transform: 'var(--tw-transform)',
	        '@layer defaults': {
	            '*,::before,::after': {
	                '--tw-translate-x': '0',
	                '--tw-translate-y': '0',
	                '--tw-rotate': '0',
	                '--tw-skew-x': '0',
	                '--tw-skew-y': '0',
	                '--tw-scale-x': '1',
	                '--tw-scale-y': '1',
	                '--tw-transform': transformValue()
	            }
	        }
	    };
	}
	function transformValue(gpu) {
	    return [
	        gpu // -gpu
	         ? 'translate3d(var(--tw-translate-x),var(--tw-translate-y),0)' : 'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))',
	        'rotate(var(--tw-rotate))',
	        'skewX(var(--tw-skew-x))',
	        'skewY(var(--tw-skew-y))',
	        'scaleX(var(--tw-scale-x))',
	        'scaleY(var(--tw-scale-y))', 
	    ].join(' ');
	}
	function span({ 1: $1 , 2: $2  }) {
	    return `${$1} ${$2} / ${$1} ${$2}`;
	}
	function gridTemplate({ 1: $1  }) {
	    return `repeat(${$1},minmax(0,1fr))`;
	}

	const variants$7 = [
	    [
	        'sticky',
	        '@supports ((position: -webkit-sticky) or (position:sticky))'
	    ],
	    [
	        'motion-reduce',
	        '@media (prefers-reduced-motion:reduce)'
	    ],
	    [
	        'motion-safe',
	        '@media (prefers-reduced-motion:no-preference)'
	    ],
	    [
	        'print',
	        '@media print'
	    ],
	    [
	        'portrait',
	        '@media (orientation:portrait)'
	    ],
	    [
	        'landscape',
	        '@media (orientation:landscape)'
	    ],
	    [
	        'first-letter',
	        '&::first-letter'
	    ],
	    [
	        'first-line',
	        '&::first-line'
	    ],
	    [
	        'marker',
	        '& *::marker,&::marker'
	    ],
	    [
	        'selection',
	        '& *::selection,&::selection'
	    ],
	    [
	        'file',
	        '&::file-selector-button'
	    ],
	    [
	        'placeholder',
	        '&::placeholder'
	    ],
	    [
	        'first',
	        '&:first-child'
	    ],
	    [
	        'last',
	        '&:last-child'
	    ],
	    [
	        'even',
	        '&:nth-child(2n)'
	    ],
	    [
	        'odd',
	        '&:nth-child(odd)'
	    ],
	    [
	        'open',
	        '[open]'
	    ],
	    // All other pseudo classes are already supported by twind
	    /* Styling based on parent and peer state */ // Groups classes like: group-focus and group-hover
	    // these need to add a marker selector with the pseudo class
	    // => '.group:focus .group-focus:selector'
	    [
	        '((group|peer)(~[^-[]+)?)(-[a-z-]+|\\[.+])',
	        ({ 1: $1 , 4: $4  }, { e , h  })=>`:merge(.${e(h($1))})${$4[0] == '[' ? $4 : ':' + $4.slice(1)}${$1[0] == 'p' ? '~' : ' '}&`
	        , 
	    ],
	    // direction variants
	    [
	        '(ltr|rtl)',
	        ({ 1: $1  })=>`[dir="${$1}"] &`
	    ], 
	];

	function presetTailwind({ disablePreflight  } = {}) {
	    return ({ stringify  })=>({
	            // allow other preflight to run
	            preflight: disablePreflight ? undefined : preflight,
	            theme: theme$1,
	            variants: variants$7,
	            rules,
	            // Hash/Tag tailwind custom properties during serialization
	            stringify (property, value, context) {
	                return stringify(hashVars(property, context), hashVars(value, context), context);
	            }
	        })
	    ;
	}function hashVars(value, { h  }) {
	    // PERF: check for --tw before running the regexp
	    // if (value.includes('--tw')) {
	    return value.replace(/--(tw-[\w-]+)\b/g, (_, property)=>'--' + h(property).replace('#', '')
	    );
	// }
	// return value
	}

	function defineConfig$1({ disablePreflight , ...config } = {}) {
	    return twind.defineConfig({
	        ...config,
	        presets: [
	            presetAutoprefix(),
	            presetTailwind({
	                disablePreflight
	            }),
	            ...twind.asArray(config.presets), 
	        ]
	    });
	}
	function setup(config, sheet, target) {
	    return twind.setup(defineConfig$1(config), sheet, target);
	}
	// If we run in the browser as `<script src="..."></script>` patch twind to use our setup and defineConfig
	if (typeof document != 'undefined' && document.currentScript && self.twind) {
	    self.twind.setup = setup;
	    self.twind.defineConfig = defineConfig$1;
	}

	var tailwind = /*#__PURE__*/Object.freeze({
		__proto__: null,
		defineConfig: defineConfig$1,
		setup: setup
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(tailwind);

	const borderRadius = {
	  none: '0px',
	  sm: '1px',
	  DEFAULT: '2px',
	  lg: '5px',
	  xl: '7px',
	  full: '9999px',
	};

	const colors = {
	  current: 'currentColor',

	  transparent: 'transparent',

	  'lighten-100': 'var(--color-lighten-100)',

	  'darken-100': 'var(--color-darken-100)',

	  code: 'var(--color-code)',

	  primary: 'var(--color-primary)',
	  'primary-tint': 'var(--color-primary-tint)',
	  'primary-light': 'var(--color-primary-light)',
	  'primary-dark': 'var(--color-primary-dark)',
	  'primary-darker': 'var(--color-primary-darker)',

	  secondary: 'var(--color-secondary)',
	  'secondary-tint': 'var(--color-secondary-tint)',
	  'secondary-light': 'var(--color-secondary-light)',
	  'secondary-dark': 'var(--color-secondary-dark)',
	  'secondary-darker': 'var(--color-secondary-darker)',

	  success: 'var(--color-success)',
	  'success-tint': 'var(--color-success-tint)',
	  'success-light': 'var(--color-success-light)',
	  'success-dark': 'var(--color-success-dark)',
	  'success-darker': 'var(--color-success-darker)',

	  warning: 'var(--color-warning)',
	  'warning-tint': 'var(--color-warning-tint)',
	  'warning-light': 'var(--color-warning-light)',
	  'warning-dark': 'var(--color-warning-dark)',
	  'warning-darker': 'var(--color-warning-darker)',

	  danger: 'var(--color-danger)',
	  'danger-tint': 'var(--color-danger-tint)',
	  'danger-light': 'var(--color-danger-light)',
	  'danger-dark': 'var(--color-danger-dark)',
	  'danger-darker': 'var(--color-danger-darker)',

	  'on-code': 'var(--color-on-code)',
	  'on-primary': 'var(--color-on-primary)',
	  'on-success': 'var(--color-on-success)',
	  'on-warning': 'var(--color-on-warning)',
	  'on-danger': 'var(--color-on-danger)',
	};

	const boxShadow = {
	  sm: 'var(--shadow-sm)',
	  DEFAULT: 'var(--shadow-md)',
	  md: 'var(--shadow-md)',
	  lg: 'var(--shadow-lg)',
	  xl: 'var(--shadow-xl)',
	  '2xl': 'var(--shadow-2xl)',
	};

	const dropShadow = {
	  DEFAULT: ['var(--drop-shadow-default1)', 'var(--drop-shadow-default2)'],
	};

	const fontFamily = {
	  sans: 'var(--font-ui)',
	  ui: 'var(--font-ui)',
	  prose: 'var(--font-prose)',
	  mono: 'var(--font-mono)',
	};

	const fontSize = {
	  '2xs': ['0.5625rem', '0.75rem'], // 9px
	  xs: ['0.625rem', '0.75rem'], // 10px
	  sm: ['0.6875rem', '0.75rem'], // 11px
	  base: ['0.75rem', '1rem'], // 12px
	  lg: ['0.875rem', '1.25rem'], // 14px
	  xl: ['1rem', '1.5rem'], // 16px
	  '2xl': ['1.125rem', '1.75rem'], // 18px
	  '3xl': ['1.25rem', '1.75rem'], // 20px
	  '4xl': ['1.5rem', '2rem'],
	  '5xl': ['1.875rem', '2.25rem'],
	  '6xl': ['2.25rem', '2.5rem'],
	  '7xl': ['3rem', '1'],
	  '8xl': ['3.75rem', '1'],
	  '9xl': ['4.5rem', '1'],
	  'paragraph-leading': 'var(--fs-paragraph-leading)',
	  paragraph: 'var(--fs-paragraph)',
	  'paragraph-small': 'var(--fs-paragraph-small)',
	  'paragraph-tiny': 'var(--fs-paragraph-tiny)',
	};

	const fontWeight = {
	  light: '300',
	  normal: '400',
	  medium: '500',
	  semibold: '600',
	  bold: '700',
	};

	const backgroundColor = {
	  ...colors,

	  'canvas-pure': 'var(--color-canvas-pure)',
	  canvas: 'var(--color-canvas)',
	  'canvas-tint': 'var(--color-canvas-tint)',
	  'canvas-tint-more': 'var(--color-canvas-tint-more)',
	  'canvas-50': 'var(--color-canvas-50)',
	  'canvas-100': 'var(--color-canvas-100)',
	  'canvas-200': 'var(--color-canvas-200)',
	  'canvas-300': 'var(--color-canvas-300)',
	  'canvas-400': 'var(--color-canvas-400)',
	  'canvas-500': 'var(--color-canvas-500)',
	  'canvas-600': 'var(--color-canvas-600)',
	  'canvas-700': 'var(--color-canvas-700)',
	  'canvas-800': 'var(--color-canvas-800)',
	  'canvas-900': 'var(--color-canvas-900)',
	  'canvas-1000': 'var(--color-canvas-1000)',
	  'canvas-dialog': 'var(--color-canvas-dialog)',

	  body: 'var(--color-text)',
	  'body-muted': 'var(--color-text-muted)',
	  'body-light': 'var(--color-text-light)',
	};

	const borderColor = {
	  ...colors,

	  DEFAULT: 'var(--color-border, currentColor)',
	  light: 'var(--color-border-light)',
	  dark: 'var(--color-border-dark)',
	  button: 'var(--color-border-button)',
	  input: 'var(--color-border-input)',
	  body: 'var(--color-text)',
	};

	const extendHeight = {
	  xs: '20px',
	  sm: '24px',
	  md: '32px',
	  lg: '36px',
	  xl: '44px',
	  '2xl': '52px',
	  '3xl': '60px',
	};

	const extendLineHeight = {
	  zero: '0',
	  'paragraph-leading': 'var(--lh-paragraph-leading)',
	  paragraph: 'var(--lh-paragraph)',
	  'paragraph-small': 'var(--lh-paragraph-small)',
	  'paragraph-tiny': 'var(--lh-paragraph-tiny)',
	};

	const stroke = {
	  ...colors,

	  text: 'var(--color-text)',
	};

	const textColor = {
	  ...colors,

	  body: 'var(--color-text)',
	  muted: 'var(--color-text-muted)',
	  light: 'var(--color-text-light)',
	  heading: 'var(--color-text-heading)',
	  paragraph: 'var(--color-text-paragraph)',

	  primary: 'var(--color-text-primary)',
	  success: 'var(--color-text-success)',
	  warning: 'var(--color-text-warning)',
	  danger: 'var(--color-text-danger)',

	  'canvas-pure': 'var(--color-canvas-pure)',
	  canvas: 'var(--color-canvas)',
	  'canvas-50': 'var(--color-canvas-50)',
	  'canvas-100': 'var(--color-canvas-100)',
	  'canvas-200': 'var(--color-canvas-200)',
	  'canvas-300': 'var(--color-canvas-300)',
	  'canvas-dialog': 'var(--color-canvas-dialog)',

	  link: 'var(--color-link)',
	  'link-dark': 'var(--color-link-dark)',
	};

	const extendWidth = {
	  xs: '20px',
	  sm: '24px',
	  md: '32px',
	  lg: '36px',
	  xl: '44px',
	  '2xl': '52px',
	  '3xl': '60px',
	};

	const extendzIndex = {
	  '-1': '-1',
	};

	const extendPlacecholderColor = {
	  DEFAULT: 'var(--color-text-muted)',
	};

	const themeObj$1 = {
	  screens: {
	    lg: { min: '1280px' },
	    md: { max: '1279px' },
	    sm: { max: '767px' },
	  },

	  borderRadius,
	  colors,
	  boxShadow,
	  dropShadow,
	  fontFamily,
	  fontSize,
	  fontWeight,
	  backgroundColor,
	  borderColor,
	  stroke,
	  textColor,

	  extend: {
	    height: extendHeight,
	    lineHeight: extendLineHeight,
	    width: extendWidth,
	    zIndex: extendzIndex,
	    placeholderColor: extendPlacecholderColor,
	  },
	};

	var twind_customTheme = { themeObj: themeObj$1 };

	const { defineConfig } = require$$0;

	const { themeObj } = twind_customTheme;

	const PREFIX = 'sl';

	const theme = defineConfig({
	  preflight: [
	    // General global preflight is opt in by consumer, this just adds some global utilities
	    () => ({
	      [`.${PREFIX}-focus-ring`]: {
	        '@apply': 'ring ring-primary ring-opacity-50 rounded',
	      },
	    }),
	  ],

	  // TODO: re-enable once SSR issue is fixed
	  // hash: (className, defaultHash) => {
	  //   // a shortcut like `~(...)`
	  //   // an apply like `@(...)`
	  //   if (/^[~@]\(/.test(className)) {
	  //     return defaultHash(className);
	  //   }

	  //   if (className.includes('#')) {
	  //     return className;
	  //   }

	  //   let s = className;
	  //   if (s.startsWith('tw-')) {
	  //     s = s.slice(3);
	  //     return `${PREFIX}-` + s;
	  //   } else if (!s.startsWith('sl-')) {
	  //     return `${PREFIX}-` + s;
	  //   }

	  //   return className;
	  // },

	  variants: [
	    ['dark', '[data-theme="dark"] &'],
	    ['inverted', '[data-theme="inverted"] &'],
	  ],

	  theme: themeObj,
	});

	var twind_config = theme;

	function _objectWithoutPropertiesLoose$1(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$K =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$i = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$h = fails$i;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$h(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var call$e = Function.prototype.call;

	var functionCall = call$e.bind ? call$e.bind(call$e) : function () {
	  return call$e.apply(call$e, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$3(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$4 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var FunctionPrototype$2 = Function.prototype;
	var bind$6 = FunctionPrototype$2.bind;
	var call$d = FunctionPrototype$2.call;
	var callBind = bind$6 && bind$6.bind(call$d);

	var functionUncurryThis = bind$6 ? function (fn) {
	  return fn && callBind(call$d, fn);
	} : function (fn) {
	  return fn && function () {
	    return call$d.apply(fn, arguments);
	  };
	};

	var uncurryThis$m = functionUncurryThis;

	var toString$a = uncurryThis$m({}.toString);
	var stringSlice$5 = uncurryThis$m(''.slice);

	var classofRaw$1 = function (it) {
	  return stringSlice$5(toString$a(it), 8, -1);
	};

	var global$J = global$K;
	var uncurryThis$l = functionUncurryThis;
	var fails$g = fails$i;
	var classof$7 = classofRaw$1;

	var Object$5 = global$J.Object;
	var split = uncurryThis$l(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$g(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object$5('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$7(it) == 'String' ? split(it, '') : Object$5(it);
	} : Object$5;

	var global$I = global$K;

	var TypeError$g = global$I.TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$7 = function (it) {
	  if (it == undefined) throw TypeError$g("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$2 = indexedObject;
	var requireObjectCoercible$6 = requireObjectCoercible$7;

	var toIndexedObject$5 = function (it) {
	  return IndexedObject$2(requireObjectCoercible$6(it));
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable$j = function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$i = isCallable$j;

	var isObject$9 = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$i(it);
	};

	var global$H = global$K;
	var isCallable$h = isCallable$j;

	var aFunction = function (argument) {
	  return isCallable$h(argument) ? argument : undefined;
	};

	var getBuiltIn$7 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$H[namespace]) : global$H[namespace] && global$H[namespace][method];
	};

	var uncurryThis$k = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$k({}.isPrototypeOf);

	var getBuiltIn$6 = getBuiltIn$7;

	var engineUserAgent = getBuiltIn$6('navigator', 'userAgent') || '';

	var global$G = global$K;
	var userAgent$3 = engineUserAgent;

	var process$4 = global$G.process;
	var Deno = global$G.Deno;
	var versions = process$4 && process$4.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && userAgent$3) {
	  match = userAgent$3.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent$3.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	/* eslint-disable es/no-symbol -- required for testing */

	var V8_VERSION$1 = engineV8Version;
	var fails$f = fails$i;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$f(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */

	var NATIVE_SYMBOL$2 = nativeSymbol;

	var useSymbolAsUid = NATIVE_SYMBOL$2
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var global$F = global$K;
	var getBuiltIn$5 = getBuiltIn$7;
	var isCallable$g = isCallable$j;
	var isPrototypeOf$3 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var Object$4 = global$F.Object;

	var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$5('Symbol');
	  return isCallable$g($Symbol) && isPrototypeOf$3($Symbol.prototype, Object$4(it));
	};

	var global$E = global$K;

	var String$5 = global$E.String;

	var tryToString$4 = function (argument) {
	  try {
	    return String$5(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var global$D = global$K;
	var isCallable$f = isCallable$j;
	var tryToString$3 = tryToString$4;

	var TypeError$f = global$D.TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$6 = function (argument) {
	  if (isCallable$f(argument)) return argument;
	  throw TypeError$f(tryToString$3(argument) + ' is not a function');
	};

	var aCallable$5 = aCallable$6;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$4 = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable$5(func);
	};

	var global$C = global$K;
	var call$c = functionCall;
	var isCallable$e = isCallable$j;
	var isObject$8 = isObject$9;

	var TypeError$e = global$C.TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$8(val = call$c(fn, input))) return val;
	  if (isCallable$e(fn = input.valueOf) && !isObject$8(val = call$c(fn, input))) return val;
	  if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$8(val = call$c(fn, input))) return val;
	  throw TypeError$e("Can't convert object to primitive value");
	};

	var shared$4 = {exports: {}};

	var global$B = global$K;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$3 = Object.defineProperty;

	var setGlobal$3 = function (key, value) {
	  try {
	    defineProperty$3(global$B, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$B[key] = value;
	  } return value;
	};

	var global$A = global$K;
	var setGlobal$2 = setGlobal$3;

	var SHARED = '__core-js_shared__';
	var store$3 = global$A[SHARED] || setGlobal$2(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	(shared$4.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.19.2',
	  mode: 'global',
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});

	var global$z = global$K;
	var requireObjectCoercible$5 = requireObjectCoercible$7;

	var Object$3 = global$z.Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$4 = function (argument) {
	  return Object$3(requireObjectCoercible$5(argument));
	};

	var uncurryThis$j = functionUncurryThis;
	var toObject$3 = toObject$4;

	var hasOwnProperty = uncurryThis$j({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$3(it), key);
	};

	var uncurryThis$i = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$9 = uncurryThis$i(1.0.toString);

	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$9(++id + postfix, 36);
	};

	var global$y = global$K;
	var shared$3 = shared$4.exports;
	var hasOwn$a = hasOwnProperty_1;
	var uid$1 = uid$2;
	var NATIVE_SYMBOL$1 = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var WellKnownSymbolsStore = shared$3('wks');
	var Symbol$2 = global$y.Symbol;
	var symbolFor = Symbol$2 && Symbol$2['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

	var wellKnownSymbol$h = function (name) {
	  if (!hasOwn$a(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL$1 && hasOwn$a(Symbol$2, name)) {
	      WellKnownSymbolsStore[name] = Symbol$2[name];
	    } else if (USE_SYMBOL_AS_UID && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var global$x = global$K;
	var call$b = functionCall;
	var isObject$7 = isObject$9;
	var isSymbol$1 = isSymbol$2;
	var getMethod$3 = getMethod$4;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$g = wellKnownSymbol$h;

	var TypeError$d = global$x.TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$g('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$7(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$b(exoticToPrim, input, pref);
	    if (!isObject$7(result) || isSymbol$1(result)) return result;
	    throw TypeError$d("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol = isSymbol$2;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$3 = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var global$w = global$K;
	var isObject$6 = isObject$9;

	var document$3 = global$w.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$6(document$3) && isObject$6(document$3.createElement);

	var documentCreateElement$2 = function (it) {
	  return EXISTS$1 ? document$3.createElement(it) : {};
	};

	var DESCRIPTORS$8 = descriptors;
	var fails$e = fails$i;
	var createElement$1 = documentCreateElement$2;

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$8 && !fails$e(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
	  return Object.defineProperty(createElement$1('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$7 = descriptors;
	var call$a = functionCall;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$3 = createPropertyDescriptor$4;
	var toIndexedObject$4 = toIndexedObject$5;
	var toPropertyKey$2 = toPropertyKey$3;
	var hasOwn$9 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$4(O);
	  P = toPropertyKey$2(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$9(O, P)) return createPropertyDescriptor$3(!call$a(propertyIsEnumerableModule$1.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var global$v = global$K;
	var isObject$5 = isObject$9;

	var String$4 = global$v.String;
	var TypeError$c = global$v.TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$d = function (argument) {
	  if (isObject$5(argument)) return argument;
	  throw TypeError$c(String$4(argument) + ' is not an object');
	};

	var global$u = global$K;
	var DESCRIPTORS$6 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var anObject$c = anObject$d;
	var toPropertyKey$1 = toPropertyKey$3;

	var TypeError$b = global$u.TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$6 ? $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$c(O);
	  P = toPropertyKey$1(P);
	  anObject$c(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError$b('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$5 = descriptors;
	var definePropertyModule$5 = objectDefineProperty;
	var createPropertyDescriptor$2 = createPropertyDescriptor$4;

	var createNonEnumerableProperty$6 = DESCRIPTORS$5 ? function (object, key, value) {
	  return definePropertyModule$5.f(object, key, createPropertyDescriptor$2(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var redefine$6 = {exports: {}};

	var uncurryThis$h = functionUncurryThis;
	var isCallable$d = isCallable$j;
	var store$1 = sharedStore;

	var functionToString = uncurryThis$h(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$d(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$4 = store$1.inspectSource;

	var global$t = global$K;
	var isCallable$c = isCallable$j;
	var inspectSource$3 = inspectSource$4;

	var WeakMap$2 = global$t.WeakMap;

	var nativeWeakMap = isCallable$c(WeakMap$2) && /native code/.test(inspectSource$3(WeakMap$2));

	var shared$2 = shared$4.exports;
	var uid = uid$2;

	var keys = shared$2('keys');

	var sharedKey$3 = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys$4 = {};

	var NATIVE_WEAK_MAP = nativeWeakMap;
	var global$s = global$K;
	var uncurryThis$g = functionUncurryThis;
	var isObject$4 = isObject$9;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
	var hasOwn$8 = hasOwnProperty_1;
	var shared$1 = sharedStore;
	var sharedKey$2 = sharedKey$3;
	var hiddenKeys$3 = hiddenKeys$4;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$a = global$s.TypeError;
	var WeakMap$1 = global$s.WeakMap;
	var set$1, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set$1(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$a('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared$1.state) {
	  var store = shared$1.state || (shared$1.state = new WeakMap$1());
	  var wmget = uncurryThis$g(store.get);
	  var wmhas = uncurryThis$g(store.has);
	  var wmset = uncurryThis$g(store.set);
	  set$1 = function (it, metadata) {
	    if (wmhas(store, it)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey$2('state');
	  hiddenKeys$3[STATE] = true;
	  set$1 = function (it, metadata) {
	    if (hasOwn$8(it, STATE)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$5(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwn$8(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn$8(it, STATE);
	  };
	}

	var internalState = {
	  set: set$1,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var DESCRIPTORS$4 = descriptors;
	var hasOwn$7 = hasOwnProperty_1;

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || (DESCRIPTORS$4 && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var global$r = global$K;
	var isCallable$b = isCallable$j;
	var hasOwn$6 = hasOwnProperty_1;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
	var setGlobal$1 = setGlobal$3;
	var inspectSource$2 = inspectSource$4;
	var InternalStateModule$2 = internalState;
	var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;

	var getInternalState$3 = InternalStateModule$2.get;
	var enforceInternalState = InternalStateModule$2.enforce;
	var TEMPLATE = String(String).split('String');

	(redefine$6.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var name = options && options.name !== undefined ? options.name : key;
	  var state;
	  if (isCallable$b(value)) {
	    if (String(name).slice(0, 7) === 'Symbol(') {
	      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
	    }
	    if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
	      createNonEnumerableProperty$4(value, 'name', name);
	    }
	    state = enforceInternalState(value);
	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
	    }
	  }
	  if (O === global$r) {
	    if (simple) O[key] = value;
	    else setGlobal$1(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty$4(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return isCallable$b(this) && getInternalState$3(this).source || inspectSource$2(this);
	});

	var objectGetOwnPropertyNames = {};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$3 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- safe
	  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
	};

	var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

	var max$1 = Math.max;
	var min$3 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$2 = function (index, length) {
	  var integer = toIntegerOrInfinity$2(index);
	  return integer < 0 ? max$1(integer + length, 0) : min$3(integer, length);
	};

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

	var min$2 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$3 = function (argument) {
	  return argument > 0 ? min$2(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength$2 = toLength$3;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$4 = function (obj) {
	  return toLength$2(obj.length);
	};

	var toIndexedObject$3 = toIndexedObject$5;
	var toAbsoluteIndex$1 = toAbsoluteIndex$2;
	var lengthOfArrayLike$3 = lengthOfArrayLike$4;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$3 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$3($this);
	    var length = lengthOfArrayLike$3(O);
	    var index = toAbsoluteIndex$1(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$3(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$3(false)
	};

	var uncurryThis$f = functionUncurryThis;
	var hasOwn$5 = hasOwnProperty_1;
	var toIndexedObject$2 = toIndexedObject$5;
	var indexOf$1 = arrayIncludes.indexOf;
	var hiddenKeys$2 = hiddenKeys$4;

	var push$1 = uncurryThis$f([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$2(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$5(hiddenKeys$2, key) && hasOwn$5(O, key) && push$1(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
	    ~indexOf$1(result, key) || push$1(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$3 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;

	var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys$1);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$4 = getBuiltIn$7;
	var uncurryThis$e = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var anObject$b = anObject$d;

	var concat$1 = uncurryThis$e([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject$b(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$4 = hasOwnProperty_1;
	var ownKeys = ownKeys$1;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var definePropertyModule$4 = objectDefineProperty;

	var copyConstructorProperties$2 = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule$4.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$4(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var fails$d = fails$i;
	var isCallable$a = isCallable$j;

	var replacement = /#|\.prototype\./;

	var isForced$2 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$a(detection) ? fails$d(detection)
	    : !!detection;
	};

	var normalize = isForced$2.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$2.data = {};
	var NATIVE = isForced$2.NATIVE = 'N';
	var POLYFILL = isForced$2.POLYFILL = 'P';

	var isForced_1 = isForced$2;

	var global$q = global$K;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
	var redefine$5 = redefine$6.exports;
	var setGlobal = setGlobal$3;
	var copyConstructorProperties$1 = copyConstructorProperties$2;
	var isForced$1 = isForced_1;

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	  options.name        - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$q;
	  } else if (STATIC) {
	    target = global$q[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$q[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$2(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties$1(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine$5(target, key, sourceProperty, options);
	  }
	};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$3;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$2 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS$3 = descriptors;
	var uncurryThis$d = functionUncurryThis;
	var call$9 = functionCall;
	var fails$c = fails$i;
	var objectKeys$1 = objectKeys$2;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$2 = toObject$4;
	var IndexedObject$1 = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty$2 = Object.defineProperty;
	var concat = uncurryThis$d([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails$c(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS$3 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$2(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line es/no-symbol -- safe
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject$2(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject$1(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$3 || call$9(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	var $$9 = _export;
	var assign = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$9({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
	  assign: assign
	});

	var global$p = global$K;
	var aCallable$4 = aCallable$6;
	var toObject$1 = toObject$4;
	var IndexedObject = indexedObject;
	var lengthOfArrayLike$2 = lengthOfArrayLike$4;

	var TypeError$9 = global$p.TypeError;

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$2 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aCallable$4(callbackfn);
	    var O = toObject$1(that);
	    var self = IndexedObject(O);
	    var length = lengthOfArrayLike$2(O);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError$9('Reduce of empty array with no initial value');
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduce
	  left: createMethod$2(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$2(true)
	};

	var fails$b = fails$i;

	var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$b(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var classof$6 = classofRaw$1;
	var global$o = global$K;

	var engineIsNode = classof$6(global$o.process) == 'process';

	var $$8 = _export;
	var $reduce = arrayReduce.left;
	var arrayMethodIsStrict = arrayMethodIsStrict$1;
	var CHROME_VERSION = engineV8Version;
	var IS_NODE$3 = engineIsNode;

	var STRICT_METHOD = arrayMethodIsStrict('reduce');
	// Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
	var CHROME_BUG = !IS_NODE$3 && CHROME_VERSION > 79 && CHROME_VERSION < 83;

	// `Array.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-array.prototype.reduce
	$$8({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    var length = arguments.length;
	    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
	  }
	});

	var wellKnownSymbol$f = wellKnownSymbol$h;

	var TO_STRING_TAG$3 = wellKnownSymbol$f('toStringTag');
	var test = {};

	test[TO_STRING_TAG$3] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var global$n = global$K;
	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var isCallable$9 = isCallable$j;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$e = wellKnownSymbol$h;

	var TO_STRING_TAG$2 = wellKnownSymbol$e('toStringTag');
	var Object$2 = global$n.Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$5 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object$2(it), TO_STRING_TAG$2)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
	};

	var global$m = global$K;
	var classof$4 = classof$5;

	var String$3 = global$m.String;

	var toString$8 = function (argument) {
	  if (classof$4(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return String$3(argument);
	};

	// a string of all valid unicode whitespaces
	var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$c = functionUncurryThis;
	var requireObjectCoercible$4 = requireObjectCoercible$7;
	var toString$7 = toString$8;
	var whitespaces$2 = whitespaces$3;

	var replace$2 = uncurryThis$c(''.replace);
	var whitespace = '[' + whitespaces$2 + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$1 = function (TYPE) {
	  return function ($this) {
	    var string = toString$7(requireObjectCoercible$4($this));
	    if (TYPE & 1) string = replace$2(string, ltrim, '');
	    if (TYPE & 2) string = replace$2(string, rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$1(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$1(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$1(3)
	};

	var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
	var fails$a = fails$i;
	var whitespaces$1 = whitespaces$3;

	var non = '\u200B\u0085\u180E';

	// check that a method works with the correct list
	// of whitespaces and has a correct name
	var stringTrimForced = function (METHOD_NAME) {
	  return fails$a(function () {
	    return !!whitespaces$1[METHOD_NAME]()
	      || non[METHOD_NAME]() !== non
	      || (PROPER_FUNCTION_NAME$1 && whitespaces$1[METHOD_NAME].name !== METHOD_NAME);
	  });
	};

	var $$7 = _export;
	var $trim = stringTrim.trim;
	var forcedStringTrimMethod = stringTrimForced;

	// `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim
	$$7({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var anObject$a = anObject$d;

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags$1 = function () {
	  var that = anObject$a(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var fails$9 = fails$i;
	var global$l = global$K;

	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	var $RegExp$2 = global$l.RegExp;

	var UNSUPPORTED_Y$2 = fails$9(function () {
	  var re = $RegExp$2('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});

	// UC Browser bug
	// https://github.com/zloirock/core-js/issues/1008
	var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$9(function () {
	  return !$RegExp$2('a', 'y').sticky;
	});

	var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$9(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = $RegExp$2('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') != null;
	});

	var regexpStickyHelpers = {
	  BROKEN_CARET: BROKEN_CARET,
	  MISSED_STICKY: MISSED_STICKY,
	  UNSUPPORTED_Y: UNSUPPORTED_Y$2
	};

	var DESCRIPTORS$2 = descriptors;
	var definePropertyModule$3 = objectDefineProperty;
	var anObject$9 = anObject$d;
	var toIndexedObject$1 = toIndexedObject$5;
	var objectKeys = objectKeys$2;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	var objectDefineProperties = DESCRIPTORS$2 ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$9(O);
	  var props = toIndexedObject$1(Properties);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$3 = getBuiltIn$7;

	var html$2 = getBuiltIn$3('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */

	var anObject$8 = anObject$d;
	var defineProperties = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys = hiddenKeys$4;
	var html$1 = html$2;
	var documentCreateElement$1 = documentCreateElement$2;
	var sharedKey$1 = sharedKey$3;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$1('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement$1('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html$1.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject$8(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : defineProperties(result, Properties);
	};

	var fails$8 = fails$i;
	var global$k = global$K;

	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
	var $RegExp$1 = global$k.RegExp;

	var regexpUnsupportedDotAll = fails$8(function () {
	  var re = $RegExp$1('.', 's');
	  return !(re.dotAll && re.exec('\n') && re.flags === 's');
	});

	var fails$7 = fails$i;
	var global$j = global$K;

	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
	var $RegExp = global$j.RegExp;

	var regexpUnsupportedNcg = fails$7(function () {
	  var re = $RegExp('(?<a>b)', 'g');
	  return re.exec('b').groups.a !== 'b' ||
	    'b'.replace(re, '$<a>c') !== 'bc';
	});

	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
	/* eslint-disable regexp/no-useless-quantifier -- testing */
	var call$8 = functionCall;
	var uncurryThis$b = functionUncurryThis;
	var toString$6 = toString$8;
	var regexpFlags = regexpFlags$1;
	var stickyHelpers$1 = regexpStickyHelpers;
	var shared = shared$4.exports;
	var create$2 = objectCreate;
	var getInternalState$2 = internalState.get;
	var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
	var UNSUPPORTED_NCG = regexpUnsupportedNcg;

	var nativeReplace = shared('native-string-replace', String.prototype.replace);
	var nativeExec = RegExp.prototype.exec;
	var patchedExec = nativeExec;
	var charAt$3 = uncurryThis$b(''.charAt);
	var indexOf = uncurryThis$b(''.indexOf);
	var replace$1 = uncurryThis$b(''.replace);
	var stringSlice$4 = uncurryThis$b(''.slice);

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  call$8(nativeExec, re1, 'a');
	  call$8(nativeExec, re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

	if (PATCH) {
	  patchedExec = function exec(string) {
	    var re = this;
	    var state = getInternalState$2(re);
	    var str = toString$6(string);
	    var raw = state.raw;
	    var result, reCopy, lastIndex, match, i, object, group;

	    if (raw) {
	      raw.lastIndex = re.lastIndex;
	      result = call$8(patchedExec, raw, str);
	      re.lastIndex = raw.lastIndex;
	      return result;
	    }

	    var groups = state.groups;
	    var sticky = UNSUPPORTED_Y$1 && re.sticky;
	    var flags = call$8(regexpFlags, re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = replace$1(flags, 'y', '');
	      if (indexOf(flags, 'g') === -1) {
	        flags += 'g';
	      }

	      strCopy = stringSlice$4(str, re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = call$8(nativeExec, sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = stringSlice$4(match.input, charsAdded);
	        match[0] = stringSlice$4(match[0], charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      call$8(nativeReplace, match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    if (match && groups) {
	      match.groups = object = create$2(null);
	      for (i = 0; i < groups.length; i++) {
	        group = groups[i];
	        object[group[0]] = match[group[1]];
	      }
	    }

	    return match;
	  };
	}

	var regexpExec$3 = patchedExec;

	var $$6 = _export;
	var exec$2 = regexpExec$3;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	$$6({ target: 'RegExp', proto: true, forced: /./.exec !== exec$2 }, {
	  exec: exec$2
	});

	var FunctionPrototype = Function.prototype;
	var apply$2 = FunctionPrototype.apply;
	var bind$5 = FunctionPrototype.bind;
	var call$7 = FunctionPrototype.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind$5 ? call$7.bind(apply$2) : function () {
	  return call$7.apply(apply$2, arguments);
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points

	var uncurryThis$a = functionUncurryThis;
	var redefine$4 = redefine$6.exports;
	var regexpExec$2 = regexpExec$3;
	var fails$6 = fails$i;
	var wellKnownSymbol$d = wellKnownSymbol$h;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;

	var SPECIES$3 = wellKnownSymbol$d('species');
	var RegExpPrototype = RegExp.prototype;

	var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
	  var SYMBOL = wellKnownSymbol$d(KEY);

	  var DELEGATES_TO_SYMBOL = !fails$6(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$6(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$3] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () { execCalled = true; return null; };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    FORCED
	  ) {
	    var uncurriedNativeRegExpMethod = uncurryThis$a(/./[SYMBOL]);
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      var uncurriedNativeMethod = uncurryThis$a(nativeMethod);
	      var $exec = regexp.exec;
	      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
	        }
	        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
	      }
	      return { done: false };
	    });

	    redefine$4(String.prototype, KEY, methods[0]);
	    redefine$4(RegExpPrototype, SYMBOL, methods[1]);
	  }

	  if (SHAM) createNonEnumerableProperty$2(RegExpPrototype[SYMBOL], 'sham', true);
	};

	var isObject$3 = isObject$9;
	var classof$3 = classofRaw$1;
	var wellKnownSymbol$c = wellKnownSymbol$h;

	var MATCH$1 = wellKnownSymbol$c('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject$3(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$3(it) == 'RegExp');
	};

	var uncurryThis$9 = functionUncurryThis;
	var fails$5 = fails$i;
	var isCallable$8 = isCallable$j;
	var classof$2 = classof$5;
	var getBuiltIn$2 = getBuiltIn$7;
	var inspectSource$1 = inspectSource$4;

	var noop$1 = function () { /* empty */ };
	var empty = [];
	var construct = getBuiltIn$2('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$1 = uncurryThis$9(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop$1);

	var isConstructorModern = function (argument) {
	  if (!isCallable$8(argument)) return false;
	  try {
	    construct(noop$1, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function (argument) {
	  if (!isCallable$8(argument)) return false;
	  switch (classof$2(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	    // we can't check .prototype since constructors produced by .bind haven't it
	  } return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
	};

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$1 = !construct || fails$5(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var global$i = global$K;
	var isConstructor = isConstructor$1;
	var tryToString$2 = tryToString$4;

	var TypeError$8 = global$i.TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor$1 = function (argument) {
	  if (isConstructor(argument)) return argument;
	  throw TypeError$8(tryToString$2(argument) + ' is not a constructor');
	};

	var anObject$7 = anObject$d;
	var aConstructor = aConstructor$1;
	var wellKnownSymbol$b = wellKnownSymbol$h;

	var SPECIES$2 = wellKnownSymbol$b('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor$2 = function (O, defaultConstructor) {
	  var C = anObject$7(O).constructor;
	  var S;
	  return C === undefined || (S = anObject$7(C)[SPECIES$2]) == undefined ? defaultConstructor : aConstructor(S);
	};

	var uncurryThis$8 = functionUncurryThis;
	var toIntegerOrInfinity = toIntegerOrInfinity$3;
	var toString$5 = toString$8;
	var requireObjectCoercible$3 = requireObjectCoercible$7;

	var charAt$2 = uncurryThis$8(''.charAt);
	var charCodeAt = uncurryThis$8(''.charCodeAt);
	var stringSlice$3 = uncurryThis$8(''.slice);

	var createMethod = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$5(requireObjectCoercible$3($this));
	    var position = toIntegerOrInfinity(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$2(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice$3(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};

	var charAt$1 = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.es/ecma262/#sec-advancestringindex
	var advanceStringIndex$1 = function (S, index, unicode) {
	  return index + (unicode ? charAt$1(S, index).length : 1);
	};

	var toPropertyKey = toPropertyKey$3;
	var definePropertyModule$2 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$4;

	var createProperty$1 = function (object, key, value) {
	  var propertyKey = toPropertyKey(key);
	  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$1(0, value));
	  else object[propertyKey] = value;
	};

	var global$h = global$K;
	var toAbsoluteIndex = toAbsoluteIndex$2;
	var lengthOfArrayLike$1 = lengthOfArrayLike$4;
	var createProperty = createProperty$1;

	var Array$1 = global$h.Array;
	var max = Math.max;

	var arraySliceSimple = function (O, start, end) {
	  var length = lengthOfArrayLike$1(O);
	  var k = toAbsoluteIndex(start, length);
	  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	  var result = Array$1(max(fin - k, 0));
	  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
	  result.length = n;
	  return result;
	};

	var global$g = global$K;
	var call$6 = functionCall;
	var anObject$6 = anObject$d;
	var isCallable$7 = isCallable$j;
	var classof$1 = classofRaw$1;
	var regexpExec$1 = regexpExec$3;

	var TypeError$7 = global$g.TypeError;

	// `RegExpExec` abstract operation
	// https://tc39.es/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (isCallable$7(exec)) {
	    var result = call$6(exec, R, S);
	    if (result !== null) anObject$6(result);
	    return result;
	  }
	  if (classof$1(R) === 'RegExp') return call$6(regexpExec$1, R, S);
	  throw TypeError$7('RegExp#exec called on incompatible receiver');
	};

	var apply$1 = functionApply;
	var call$5 = functionCall;
	var uncurryThis$7 = functionUncurryThis;
	var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
	var isRegExp$1 = isRegexp;
	var anObject$5 = anObject$d;
	var requireObjectCoercible$2 = requireObjectCoercible$7;
	var speciesConstructor$1 = speciesConstructor$2;
	var advanceStringIndex = advanceStringIndex$1;
	var toLength$1 = toLength$3;
	var toString$4 = toString$8;
	var getMethod$2 = getMethod$4;
	var arraySlice$2 = arraySliceSimple;
	var callRegExpExec = regexpExecAbstract;
	var regexpExec = regexpExec$3;
	var stickyHelpers = regexpStickyHelpers;
	var fails$4 = fails$i;

	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
	var MAX_UINT32 = 0xFFFFFFFF;
	var min$1 = Math.min;
	var $push = [].push;
	var exec = uncurryThis$7(/./.exec);
	var push = uncurryThis$7($push);
	var stringSlice$2 = uncurryThis$7(''.slice);

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$4(function () {
	  // eslint-disable-next-line regexp/no-empty-group -- required for testing
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	// @@split logic
	fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'.split(/(b)*/)[1] == 'c' ||
	    // eslint-disable-next-line regexp/no-empty-group -- required for testing
	    'test'.split(/(?:)/, -1).length != 4 ||
	    'ab'.split(/(?:ab)*/).length != 2 ||
	    '.'.split(/(.?)(.?)/).length != 4 ||
	    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
	    '.'.split(/()()/).length > 1 ||
	    ''.split(/.?/).length
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = toString$4(requireObjectCoercible$2(this));
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (separator === undefined) return [string];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp$1(separator)) {
	        return call$5(nativeSplit, string, separator, lim);
	      }
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = call$5(regexpExec, separatorCopy, string)) {
	        lastIndex = separatorCopy.lastIndex;
	        if (lastIndex > lastLastIndex) {
	          push(output, stringSlice$2(string, lastLastIndex, match.index));
	          if (match.length > 1 && match.index < string.length) apply$1($push, output, arraySlice$2(match, 1));
	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;
	          if (output.length >= lim) break;
	        }
	        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string.length) {
	        if (lastLength || !exec(separatorCopy, '')) push(output, '');
	      } else push(output, stringSlice$2(string, lastLastIndex));
	      return output.length > lim ? arraySlice$2(output, 0, lim) : output;
	    };
	  // Chakra, V8
	  } else if ('0'.split(undefined, 0).length) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : call$5(nativeSplit, this, separator, limit);
	    };
	  } else internalSplit = nativeSplit;

	  return [
	    // `String.prototype.split` method
	    // https://tc39.es/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = requireObjectCoercible$2(this);
	      var splitter = separator == undefined ? undefined : getMethod$2(separator, SPLIT);
	      return splitter
	        ? call$5(splitter, separator, O, limit)
	        : call$5(internalSplit, toString$4(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (string, limit) {
	      var rx = anObject$5(this);
	      var S = toString$4(string);
	      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

	      if (res.done) return res.value;

	      var C = speciesConstructor$1(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (UNSUPPORTED_Y ? 'g' : 'y');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
	        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice$2(S, q) : S);
	        var e;
	        if (
	          z === null ||
	          (e = min$1(toLength$1(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          push(A, stringSlice$2(S, p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            push(A, z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      push(A, stringSlice$2(S, p));
	      return A;
	    }
	  ];
	}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

	var wellKnownSymbol$a = wellKnownSymbol$h;
	var create$1 = objectCreate;
	var definePropertyModule$1 = objectDefineProperty;

	var UNSCOPABLES = wellKnownSymbol$a('unscopables');
	var ArrayPrototype$1 = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
	  definePropertyModule$1.f(ArrayPrototype$1, UNSCOPABLES, {
	    configurable: true,
	    value: create$1(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables$1 = function (key) {
	  ArrayPrototype$1[UNSCOPABLES][key] = true;
	};

	var iterators = {};

	var fails$3 = fails$i;

	var correctPrototypeGetter = !fails$3(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var global$f = global$K;
	var hasOwn$3 = hasOwnProperty_1;
	var isCallable$6 = isCallable$j;
	var toObject = toObject$4;
	var sharedKey = sharedKey$3;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var IE_PROTO = sharedKey('IE_PROTO');
	var Object$1 = global$f.Object;
	var ObjectPrototype = Object$1.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$1.getPrototypeOf : function (O) {
	  var object = toObject(O);
	  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$6(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof Object$1 ? ObjectPrototype : null;
	};

	var fails$2 = fails$i;
	var isCallable$5 = isCallable$j;
	var getPrototypeOf$1 = objectGetPrototypeOf;
	var redefine$3 = redefine$6.exports;
	var wellKnownSymbol$9 = wellKnownSymbol$h;

	var ITERATOR$6 = wellKnownSymbol$9('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$2(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$2[ITERATOR$6].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$5(IteratorPrototype$2[ITERATOR$6])) {
	  redefine$3(IteratorPrototype$2, ITERATOR$6, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$2,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var defineProperty$1 = objectDefineProperty.f;
	var hasOwn$2 = hasOwnProperty_1;
	var wellKnownSymbol$8 = wellKnownSymbol$h;

	var TO_STRING_TAG$1 = wellKnownSymbol$8('toStringTag');

	var setToStringTag$3 = function (it, TAG, STATIC) {
	  if (it && !hasOwn$2(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
	    defineProperty$1(it, TO_STRING_TAG$1, { configurable: true, value: TAG });
	  }
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
	var create = objectCreate;
	var createPropertyDescriptor = createPropertyDescriptor$4;
	var setToStringTag$2 = setToStringTag$3;
	var Iterators$4 = iterators;

	var returnThis$1 = function () { return this; };

	var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
	  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
	  Iterators$4[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var global$e = global$K;
	var isCallable$4 = isCallable$j;

	var String$2 = global$e.String;
	var TypeError$6 = global$e.TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$4(argument)) return argument;
	  throw TypeError$6("Can't set " + String$2(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */

	var uncurryThis$6 = functionUncurryThis;
	var anObject$4 = anObject$d;
	var aPossiblePrototype = aPossiblePrototype$1;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    setter = uncurryThis$6(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject$4(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var $$5 = _export;
	var call$4 = functionCall;
	var FunctionName = functionName;
	var isCallable$3 = isCallable$j;
	var createIteratorConstructor = createIteratorConstructor$1;
	var getPrototypeOf = objectGetPrototypeOf;
	var setPrototypeOf$1 = objectSetPrototypeOf;
	var setToStringTag$1 = setToStringTag$3;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
	var redefine$2 = redefine$6.exports;
	var wellKnownSymbol$7 = wellKnownSymbol$h;
	var Iterators$3 = iterators;
	var IteratorsCore = iteratorsCore;

	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$5 = wellKnownSymbol$7('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var defineIterator$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$5]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf$1) {
	          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (!isCallable$3(CurrentIteratorPrototype[ITERATOR$5])) {
	          redefine$2(CurrentIteratorPrototype, ITERATOR$5, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (CONFIGURABLE_FUNCTION_NAME) {
	      createNonEnumerableProperty$1(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call$4(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine$2(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$5({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
	    redefine$2(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$3[NAME] = defaultIterator;

	  return methods;
	};

	var toIndexedObject = toIndexedObject$5;
	var addToUnscopables = addToUnscopables$1;
	var Iterators$2 = iterators;
	var InternalStateModule$1 = internalState;
	var defineIterator = defineIterator$1;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState$1(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$1(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	Iterators$2.Arguments = Iterators$2.Array;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
	var documentCreateElement = documentCreateElement$2;

	var classList = documentCreateElement('span').classList;
	var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

	var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

	var global$d = global$K;
	var DOMIterables = domIterables;
	var DOMTokenListPrototype = domTokenListPrototype;
	var ArrayIteratorMethods = es_array_iterator;
	var createNonEnumerableProperty = createNonEnumerableProperty$6;
	var wellKnownSymbol$6 = wellKnownSymbol$h;

	var ITERATOR$4 = wellKnownSymbol$6('iterator');
	var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');
	var ArrayValues = ArrayIteratorMethods.values;

	var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR$4] !== ArrayValues) try {
	      createNonEnumerableProperty(CollectionPrototype, ITERATOR$4, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR$4] = ArrayValues;
	    }
	    if (!CollectionPrototype[TO_STRING_TAG]) {
	      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	    }
	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	};

	for (var COLLECTION_NAME in DOMIterables) {
	  handlePrototype(global$d[COLLECTION_NAME] && global$d[COLLECTION_NAME].prototype, COLLECTION_NAME);
	}

	handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

	const _excluded$X = ["sm", "md", "lg", "dark", "inverted"];
	const computePseudoClasses = (prop, val) => {
	  let classes = {};

	  if (isPseudoObject(val)) {
	    const {
	      sm,
	      md,
	      lg,
	      dark,
	      inverted
	    } = val,
	          rest = _objectWithoutPropertiesLoose$1(val, _excluded$X);

	    classes = Object.assign({}, computeVariantClasses(prop, rest), computeVariantClasses(prop, dark, 'dark'), computeVariantClasses(prop, inverted, 'inverted'), computeVariantClasses(prop, sm, 'sm'), computeVariantClasses(prop, md, 'md'), computeVariantClasses(prop, lg, 'lg'));
	  } else {
	    if (val || val === 0) {
	      classes[buildClassname(prop, val)] = true;
	    }
	  }

	  return cn__default["default"](classes);
	};
	const MosaicToTwindPseudoMap = {
	  active: 'active',
	  after: 'after',
	  before: 'before',
	  checked: 'checked',
	  disabled: 'disabled',
	  even: 'even',
	  first: 'first',
	  firstOfType: 'first-of-type',
	  focus: 'focus',
	  focusWithin: 'focus-within',
	  group: 'group',
	  groupFocus: 'group-focus',
	  groupHover: 'group-hover',
	  hover: 'hover',
	  invalid: 'invalid',
	  last: 'last',
	  lastOfType: 'last-of-type',
	  odd: 'odd',
	  only: 'only',
	  onlyOfType: 'only-of-type',
	  placeholder: 'placeholder',
	  required: 'required',
	  valid: 'valid',
	  visited: 'visited'
	};
	const MosaicToTwindPsuedoEntries = Object.entries(MosaicToTwindPseudoMap);

	const isPseudoMappingObject = obj => obj && typeof obj === 'object';

	const isPseudoObject = obj => obj && typeof obj === 'object';

	const isNegative = v => {
	  return v < 0 || v === '-px';
	};

	const buildClassname = (p, v) => {
	  if (v === true) return `${p}`;
	  const isNeg = isNegative(v);
	  return `${isNeg ? '-' : ''}${p}${!p || isNeg ? '' : '-'}${v}`;
	};

	const computeVariantClasses = (prop, val, variant) => {
	  let classes = {};
	  const prefix = variant ? `${variant}:` : ''; // if val is literal true value, then we're trying to use default and do not need to append a value
	  // val can be 0, account for this

	  if (isPseudoMappingObject(val)) {
	    if (val.default || val.default === 0) {
	      classes[buildClassname(prop, val.default)] = true;
	    }

	    for (const [mosaicKey, twindKey] of MosaicToTwindPsuedoEntries) {
	      if (val[mosaicKey] || val[mosaicKey] === 0) {
	        classes[`${prefix}${twindKey}:${buildClassname(prop, val[mosaicKey])}`] = true;
	      }
	    }
	  } else {
	    if (val || val === 0) {
	      classes[`${prefix}${buildClassname(prop, val)}`] = true;
	    }
	  }

	  return classes;
	};

	const _excluded$W = ["backdropBlur"];
	const backdropPropNames = ['backdropBlur'];
	const backdropProps = props => {
	  const {
	    backdropBlur
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$W);

	  return {
	    props: rest,
	    className: _backdropProps(backdropBlur)
	  };
	};

	const _backdropProps = memoize__default["default"](backdropBlur => {
	  return cn__default["default"](computePseudoClasses('backdrop-blur', backdropBlur));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const _excluded$V = ["outline", "rounded", "roundedB", "roundedT", "roundedR", "roundedL", "roundedBL", "roundedBR", "roundedTL", "roundedTR", "borderColor", "border", "borderT", "borderR", "borderL", "borderB"],
	      _excluded2$d = ["ring", "ringColor", "ringOpacity"];
	const borderPropNames = ['borderColor', 'border', 'borderT', 'borderR', 'borderL', 'borderB', 'rounded', 'roundedT', 'roundedR', 'roundedL', 'roundedB', 'roundedTL', 'roundedTR', 'roundedBL', 'roundedBR'];
	const borderProps = props => {
	  const {
	    outline,
	    rounded,
	    roundedB,
	    roundedT,
	    roundedR,
	    roundedL,
	    roundedBL,
	    roundedBR,
	    roundedTL,
	    roundedTR,
	    borderColor,
	    border,
	    borderT,
	    borderR,
	    borderL,
	    borderB
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$V);

	  return {
	    props: rest,
	    className: _borderProps(outline, rounded, roundedB, roundedT, roundedR, roundedL, roundedBL, roundedBR, roundedTL, roundedTR, borderColor, border, borderT, borderR, borderL, borderB)
	  };
	};

	const _borderProps = memoize__default["default"]((outline, rounded, roundedB, roundedT, roundedR, roundedL, roundedBL, roundedBR, roundedTL, roundedTR, borderColor, border, borderT, borderR, borderL, borderB) => {
	  return cn__default["default"](computePseudoClasses('outline', outline), computePseudoClasses('rounded', rounded), computePseudoClasses('rounded-b', roundedB), computePseudoClasses('rounded-t', roundedT), computePseudoClasses('rounded-r', roundedR), computePseudoClasses('rounded-l', roundedL), computePseudoClasses('rounded-bl', roundedBL), computePseudoClasses('rounded-br', roundedBR), computePseudoClasses('rounded-tl', roundedTL), computePseudoClasses('rounded-tr', roundedTR), computePseudoClasses('border', borderColor), computePseudoClasses('border', border), computePseudoClasses('border-t', borderT), computePseudoClasses('border-r', borderR), computePseudoClasses('border-l', borderL), computePseudoClasses('border-b', borderB));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const ringPropNames = ['ring', 'ringColor'];
	const ringProps = props => {
	  const {
	    ring,
	    ringColor,
	    ringOpacity
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded2$d);

	  return {
	    props: rest,
	    className: _ringProps(ring, ringColor, ringOpacity)
	  };
	};

	const _ringProps = memoize__default["default"]((ring, ringColor, ringOpacity) => {
	  return cn__default["default"](computePseudoClasses('ring', ring), computePseudoClasses('ring', ringColor), computePseudoClasses('ring-opacity', ringOpacity));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	var global$c = global$K;
	var isRegExp = isRegexp;

	var TypeError$5 = global$c.TypeError;

	var notARegexp = function (it) {
	  if (isRegExp(it)) {
	    throw TypeError$5("The method doesn't accept regular expressions");
	  } return it;
	};

	var wellKnownSymbol$5 = wellKnownSymbol$h;

	var MATCH = wellKnownSymbol$5('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) { /* empty */ }
	  } return false;
	};

	var $$4 = _export;
	var uncurryThis$5 = functionUncurryThis;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var toLength = toLength$3;
	var toString$3 = toString$8;
	var notARegExp$1 = notARegexp;
	var requireObjectCoercible$1 = requireObjectCoercible$7;
	var correctIsRegExpLogic$1 = correctIsRegexpLogic;

	// eslint-disable-next-line es/no-string-prototype-startswith -- safe
	var un$StartsWith = uncurryThis$5(''.startsWith);
	var stringSlice$1 = uncurryThis$5(''.slice);
	var min = Math.min;

	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic$1('startsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
	  var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'startsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.startsWith` method
	// https://tc39.es/ecma262/#sec-string.prototype.startswith
	$$4({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = toString$3(requireObjectCoercible$1(this));
	    notARegExp$1(searchString);
	    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = toString$3(searchString);
	    return un$StartsWith
	      ? un$StartsWith(that, search, index)
	      : stringSlice$1(that, index, index + search.length) === search;
	  }
	});

	const _excluded$U = ["color", "bg", "placeholderColor"];
	const colorPropNames = ['bg', 'color' // 'placeholderColor' // not a standard box prop, this always goes on the input
	];
	const colorProps = props => {
	  const {
	    color,
	    bg,
	    placeholderColor
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$U);

	  let skipBg = false;
	  let skipColor = false; // Support hex bg values - not in the typings because adding string to typings clobbers them.. annoying typescript

	  if (typeof bg === 'string' && bg.startsWith('#')) {
	    // @ts-expect-error
	    rest.style = Object.assign({}, rest.style || {}, {
	      backgroundColor: bg
	    });
	    skipBg = true;
	  } // Support hex color values


	  if (typeof color === 'string' && color.startsWith('#')) {
	    // @ts-expect-error
	    rest.style = Object.assign({}, rest.style || {}, {
	      color
	    });
	    skipColor = true;
	  }

	  return {
	    props: rest,
	    className: _colorProps(skipColor ? undefined : color, skipBg ? undefined : bg, placeholderColor)
	  };
	};

	const _colorProps = memoize__default["default"]((color, bg, placeholderColor) => {
	  return cn__default["default"](computePseudoClasses('bg', bg), computePseudoClasses('text', color), computePseudoClasses('placeholder', placeholderColor));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const _excluded$T = ["flex", "flexDirection", "flexWrap", "flexGrow", "flexShrink", "justifyContent", "justifyItems", "justifySelf", "alignContent", "alignItems", "alignSelf"];
	const flexPropNames = ['flex', 'flexDirection', 'flexWrap', 'flexGrow', 'flexShrink', 'justifyContent', 'justifyItems', 'justifySelf', 'alignContent', 'alignItems', 'alignSelf'];
	const flexProps = props => {
	  const {
	    flex,
	    flexDirection,
	    flexWrap,
	    flexGrow,
	    flexShrink,
	    justifyContent,
	    justifyItems,
	    justifySelf,
	    alignContent,
	    alignItems,
	    alignSelf
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$T);

	  return {
	    props: rest,
	    className: _flexProps(flex, flexDirection, flexWrap, flexGrow, flexShrink, justifyContent, justifyItems, justifySelf, alignContent, alignItems, alignSelf)
	  };
	};

	const _flexProps = memoize__default["default"]((flex, flexDirection, flexWrap, flexGrow, flexShrink, justifyContent, justifyItems, justifySelf, alignContent, alignItems, alignSelf) => {
	  return cn__default["default"](computePseudoClasses('flex', flex), computePseudoClasses('flex', flexDirection), computePseudoClasses('flex', flexWrap), computePseudoClasses('flex-grow', flexGrow), computePseudoClasses('flex-shrink', flexShrink), computePseudoClasses('justify', justifyContent), computePseudoClasses('justify-items', justifyItems), computePseudoClasses('justify-self', justifySelf), computePseudoClasses('content', alignContent), computePseudoClasses('items', alignItems), computePseudoClasses('self', alignSelf));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const _excluded$S = ["cursor", "userSelect", "pointerEvents", "opacity", "resize", "visibility"];
	const interactivityPropNames = ['cursor', 'opacity', 'pointerEvents', 'resize', 'userSelect', 'visibility'];
	const interactivityProps = props => {
	  const {
	    cursor,
	    userSelect,
	    pointerEvents,
	    opacity,
	    resize,
	    visibility
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$S);

	  return {
	    props: rest,
	    className: _interactivityProps(cursor, userSelect, pointerEvents, opacity, resize, visibility)
	  };
	};

	const _interactivityProps = memoize__default["default"]((cursor, userSelect, pointerEvents, opacity, resize, visibility) => {
	  return cn__default["default"](computePseudoClasses('cursor', cursor), computePseudoClasses('select', userSelect), computePseudoClasses('pointer-events', pointerEvents), computePseudoClasses('resize', resize), // the visibility value itself is the class, no need to pass name
	  computePseudoClasses('', visibility), computePseudoClasses('opacity', opacity));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const _excluded$R = ["display", "overflowX", "overflowY", "objectFit", "objectPosition"];
	const layoutPropNames = ['display', 'overflowX', 'overflowY', 'objectFit', 'objectPosition'];
	const layoutProps = props => {
	  const {
	    display,
	    overflowX,
	    overflowY,
	    objectFit,
	    objectPosition
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$R);

	  return {
	    props: rest,
	    className: _layoutProps(display, overflowX, overflowY, objectFit, objectPosition)
	  };
	};

	const _layoutProps = memoize__default["default"]((display, overflowX, overflowY, objectFit, objectPosition) => {
	  return cn__default["default"]( // the display value itself is the class, no need to pass name
	  computePseudoClasses('', display), computePseudoClasses('overflow-x', overflowX), computePseudoClasses('overflow-y', overflowY), computePseudoClasses('object', objectFit), computePseudoClasses('object', objectPosition));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const _excluded$Q = ["pos", "pin", "pinY", "pinX", "top", "left", "right", "bottom", "zIndex"];
	const positionPropNames = ['bottom', 'pin', 'pinX', 'pinY', 'left', 'pos', 'right', 'top', 'zIndex'];
	const positionProps = props => {
	  const {
	    pos,
	    pin,
	    pinY,
	    pinX,
	    top,
	    left,
	    right,
	    bottom,
	    zIndex
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$Q);

	  return {
	    props: rest,
	    className: _positionProps(pos, pin, pinY, pinX, top, left, right, bottom, zIndex)
	  };
	};

	const _positionProps = memoize__default["default"]((pos, pin, pinY, pinX, top, left, right, bottom, zIndex) => {
	  return cn__default["default"](computePseudoClasses('', pos), computePseudoClasses('inset', pin === true ? '0' : pin), computePseudoClasses('inset-y', pinY === true ? '0' : pinY), computePseudoClasses('inset-x', pinX === true ? '0' : pinX), computePseudoClasses('top', top), computePseudoClasses('left', left), computePseudoClasses('right', right), computePseudoClasses('bottom', bottom), computePseudoClasses('z', zIndex));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const _excluded$P = ["boxShadow"];
	const shadowPropNames = ['boxShadow'];
	const shadowProps = props => {
	  const {
	    boxShadow
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$P);

	  return {
	    props: rest,
	    className: _shadowProps(boxShadow)
	  };
	};

	const _shadowProps = memoize__default["default"](boxShadow => {
	  return cn__default["default"](computePseudoClasses('shadow', boxShadow));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const _excluded$O = ["h", "maxH", "minH", "w", "maxW", "minW"];
	const sizePropNames = ['h', 'maxH', 'minH', 'maxW', 'minW', 'w'];
	const sizeProps = props => {
	  const {
	    h,
	    maxH,
	    minH,
	    w,
	    maxW,
	    minW
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$O);

	  return {
	    props: rest,
	    className: _sizeProps(h, maxH, minH, w, maxW, minW)
	  };
	};

	const _sizeProps = memoize__default["default"]((h, maxH, minH, w, maxW, minW) => {
	  return cn__default["default"](computePseudoClasses('w', w), computePseudoClasses('max-w', maxW), computePseudoClasses('min-w', minW), computePseudoClasses('h', h), computePseudoClasses('max-h', maxH), computePseudoClasses('min-h', minH));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const _excluded$N = ["m", "mx", "my", "mt", "mr", "mb", "ml"],
	      _excluded2$c = ["p", "px", "py", "pt", "pr", "pb", "pl"];
	const spacingPropNames = ['m', 'mb', 'ml', 'mr', 'mt', 'mx', 'my', 'p', 'pb', 'pl', 'pr', 'pt', 'px', 'py'];
	const marginProps = props => {
	  const {
	    m,
	    mx,
	    my,
	    mt,
	    mr,
	    mb,
	    ml
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$N);

	  return {
	    props: rest,
	    className: _marginProps(m, mx, my, mt, mr, mb, ml)
	  };
	};

	const _marginProps = memoize__default["default"]((m, mx, my, mt, mr, mb, ml) => {
	  return cn__default["default"](computePseudoClasses('m', m), computePseudoClasses('mx', mx), computePseudoClasses('my', my), computePseudoClasses('mt', mt), computePseudoClasses('mr', mr), computePseudoClasses('mb', mb), computePseudoClasses('ml', ml));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const paddingProps = props => {
	  const {
	    p,
	    px,
	    py,
	    pt,
	    pr,
	    pb,
	    pl
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded2$c);

	  return {
	    props: rest,
	    className: _paddingProps(p, px, py, pt, pr, pb, pl)
	  };
	};

	const _paddingProps = memoize__default["default"]((p, px, py, pt, pr, pb, pl) => {
	  return cn__default["default"](computePseudoClasses('p', p), computePseudoClasses('px', px), computePseudoClasses('py', py), computePseudoClasses('pt', pt), computePseudoClasses('pr', pr), computePseudoClasses('pb', pb), computePseudoClasses('pl', pl));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const _excluded$M = ["transform", "transition", "transitionDelay", "transitionDuration", "translateX", "translateY"];
	const transformPropNames = ['transform', 'transition', 'transitionDelay', 'transitionDuration', 'translateX', 'translateY'];
	const transformProps = props => {
	  const {
	    transform,
	    transition,
	    transitionDelay,
	    transitionDuration,
	    translateX,
	    translateY
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$M);

	  return {
	    props: rest,
	    className: _transformProps(transform, transition, transitionDelay, transitionDuration, translateX, translateY)
	  };
	};

	const _transformProps = memoize__default["default"]((transform, transition, transitionDelay, transitionDuration, translateX, translateY) => {
	  return cn__default["default"]({
	    [`transform`]: transform,
	    [`transition`]: transition,
	    [`delay-${transitionDelay}`]: transitionDelay,
	    [`duration-${transitionDuration}`]: transitionDuration
	  }, computePseudoClasses('translate-x', translateX), computePseudoClasses('translate-y', translateY));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	const _excluded$L = ["fontSize", "lineHeight", "letterSpacing", "fontFamily", "fontWeight", "fontStyle", "textAlign", "textDecoration", "textTransform", "textOverflow", "verticalAlign", "whitespace", "wordBreak"];
	const typographyPropNames = ['fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'textAlign', 'textDecoration', 'textOverflow', 'textTransform', 'verticalAlign', 'whitespace', 'wordBreak'];
	const typographyProps = props => {
	  const {
	    fontSize,
	    lineHeight,
	    letterSpacing,
	    fontFamily,
	    fontWeight,
	    fontStyle,
	    textAlign,
	    textDecoration,
	    textTransform,
	    textOverflow,
	    verticalAlign,
	    whitespace,
	    wordBreak
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$L);

	  return {
	    props: rest,
	    className: _typographyProps(fontSize, lineHeight, letterSpacing, fontFamily, fontWeight, fontStyle, textAlign, textDecoration, textTransform, textOverflow, verticalAlign, whitespace, wordBreak)
	  };
	};

	const _typographyProps = memoize__default["default"]((fontSize, lineHeight, letterSpacing, fontFamily, fontWeight, fontStyle, textAlign, textDecoration, textTransform, textOverflow, verticalAlign, whitespace, wordBreak) => {
	  return cn__default["default"](computePseudoClasses('text', fontSize), computePseudoClasses('leading', lineHeight), computePseudoClasses('tracking', letterSpacing), computePseudoClasses('font', fontFamily), computePseudoClasses('font', fontWeight), computePseudoClasses('text', textAlign), // the props below have a value that itself is the class, no need to pass name
	  computePseudoClasses('', fontStyle), computePseudoClasses('', textDecoration), computePseudoClasses('', textTransform), computePseudoClasses('', textOverflow), computePseudoClasses('align', verticalAlign), computePseudoClasses('whitespace', whitespace), computePseudoClasses('break', wordBreak));
	}, {
	  maxAge: Infinity,
	  equals: equals__default["default"]
	});

	var global$b = global$K;
	var fails$1 = fails$i;
	var uncurryThis$4 = functionUncurryThis;
	var toString$2 = toString$8;
	var trim = stringTrim.trim;
	var whitespaces = whitespaces$3;

	var charAt = uncurryThis$4(''.charAt);
	var n$ParseFloat = global$b.parseFloat;
	var Symbol$1 = global$b.Symbol;
	var ITERATOR$3 = Symbol$1 && Symbol$1.iterator;
	var FORCED$1 = 1 / n$ParseFloat(whitespaces + '-0') !== -Infinity
	  // MS Edge 18- broken with boxed symbols
	  || (ITERATOR$3 && !fails$1(function () { n$ParseFloat(Object(ITERATOR$3)); }));

	// `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string
	var numberParseFloat = FORCED$1 ? function parseFloat(string) {
	  var trimmedString = trim(toString$2(string));
	  var result = n$ParseFloat(trimmedString);
	  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
	} : n$ParseFloat;

	var $$3 = _export;
	var $parseFloat = numberParseFloat;

	// `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string
	$$3({ global: true, forced: parseFloat != $parseFloat }, {
	  parseFloat: $parseFloat
	});

	// Number assertions
	function isNumber(value) {
	  return typeof value === 'number';
	}
	const isNotNumber = value => typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value);
	function isNumeric(value) {
	  return value != null && value - parseFloat(value) + 1 >= 0;
	} // Array assertions

	function isArray(value) {
	  return Array.isArray(value);
	}
	const isEmptyArray = value => isArray(value) && value.length === 0; // Function assertions

	function isFunction(value) {
	  return typeof value === 'function';
	} // Generic assertions

	const isDefined = value => typeof value !== 'undefined' && value !== undefined;
	const isUndefined = value => typeof value === 'undefined' || value === undefined; // Object assertions

	const isObject$2 = value => {
	  const type = typeof value;
	  return value != null && (type === 'object' || type === 'function') && !isArray(value);
	};
	const isEmptyObject = value => isObject$2(value) && Object.keys(value).length === 0;
	function isNotEmptyObject(value) {
	  return value && !isEmptyObject(value);
	}
	const isNull = value => value == null; // String assertions

	function isString(value) {
	  return Object.prototype.toString.call(value) === '[object String]';
	} // Event assertions

	function isInputEvent(value) {
	  return value && isObject$2(value) && isObject$2(value.target);
	} // Empty assertions

	const isEmpty = value => {
	  if (isArray(value)) return isEmptyArray(value);
	  if (isObject$2(value)) return isEmptyObject(value);
	  if (value == null || value === '') return true;
	  return false;
	}; // eslint-disable-next-line @typescript-eslint/naming-convention

	const __DEV__ = process.env.NODE_ENV !== 'production';

	const accumulateCollectionKeysByProp = (targetProp, targetValue) => {
	  let keysHash = '[]';
	  let keys = [];

	  const accumulate = (nodes, newKeys) => {
	    for (const node of nodes) {
	      if (node.props && node.props[targetProp] === targetValue) {
	        newKeys.push(node.key);
	      }

	      if (node.hasChildNodes) {
	        accumulate(node.childNodes, newKeys);
	      }
	    }
	  };

	  const accumulator = nodes => {
	    let newKeys = [];
	    accumulate(nodes, newKeys);
	    let newKeysHash = JSON.stringify(newKeys);

	    if (keysHash !== newKeysHash) {
	      keysHash = newKeysHash;
	      keys = newKeys;
	    }

	    return keys;
	  };

	  return accumulator;
	};

	const readableColor = (bg, preferred, fallback) => {
	  const preferredChroma = chroma__default["default"](preferred);
	  const preferredContrast = chroma__default["default"].contrast(bg, preferredChroma);
	  const fallbackChroma = chroma__default["default"](fallback);
	  const fallbackContrast = chroma__default["default"].contrast(bg, fallbackChroma);
	  const howMuchBetterIsFallbackContrast = fallbackContrast - preferredContrast;
	  if (preferredContrast >= 3.5) return preferredChroma;
	  return howMuchBetterIsFallbackContrast >= 1 ? fallbackChroma : preferredChroma;
	};

	function runIfFn(valueOrFn, ...args) {
	  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
	}
	function once(fn) {
	  let result;
	  return function func(...args) {
	    if (fn) {
	      result = fn.apply(this, args); // eslint-disable-next-line no-param-reassign

	      fn = null;
	    }

	    return result;
	  };
	}
	const noop = () => {};
	const warn = once(options => {
	  const {
	    condition,
	    message
	  } = options;

	  if (condition && __DEV__) {
	    console.warn(message);
	  }
	});
	const error = once(options => {
	  const {
	    condition,
	    message
	  } = options;

	  if (condition && __DEV__) {
	    console.error(message);
	  }
	});

	const IS_PROD = process.env.NODE_ENV == 'production';
	const tw = twind.twind(twind_config, twind.getSheet(!IS_PROD));
	const twStyle = twind.style;
	const twApply = twind.apply;
	const twCss = twind.css;
	const twShortcut = twind.shortcut;
	const UNSAFE_cx = twind.cx;
	const tx = twind.tx.bind(tw);
	const injectGlobal = twind.injectGlobal.bind(tw);
	const keyframes = twind.keyframes.bind(tw); // @ts-expect-error

	const CX = UNSAFE_cx;

	CX.$combine = (...args) => args.join(' ');

	CX.sm = UNSAFE_cx;
	CX.md = UNSAFE_cx;
	CX.lg = UNSAFE_cx;
	CX.dark = UNSAFE_cx;
	CX.inverted = UNSAFE_cx;
	CX.first = UNSAFE_cx;
	CX.last = UNSAFE_cx;
	CX.odd = UNSAFE_cx;
	CX.even = UNSAFE_cx;
	CX.visited = UNSAFE_cx;
	CX.checked = UNSAFE_cx;
	CX.group = UNSAFE_cx;
	CX.groupHover = UNSAFE_cx;
	CX.groupFocus = UNSAFE_cx;
	CX.focusWithin = UNSAFE_cx;
	CX.hover = UNSAFE_cx;
	CX.focus = UNSAFE_cx;
	CX.active = UNSAFE_cx;
	CX.disabled = UNSAFE_cx;
	CX.only = UNSAFE_cx;
	CX.firstOfType = UNSAFE_cx;
	CX.lastOfType = UNSAFE_cx;
	CX.onlyOfType = UNSAFE_cx;
	CX.required = UNSAFE_cx;
	CX.valid = UNSAFE_cx;
	CX.invalid = UNSAFE_cx;
	CX.selection = UNSAFE_cx;
	CX.before = UNSAFE_cx;
	CX.after = UNSAFE_cx;
	CX.placeholder = UNSAFE_cx;

	// export const preflightCss = twCss({});

	const preflightCss = twCss({
	  /**
	   * Use a more readable tab size (opinionated).
	   */
	  ':root': {
	    tabSize: 4
	  },

	  /**
	   * Removes the default spacing and border for appropriate elements.
	   */
	  'body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul': {
	    margin: '0'
	  },
	  button: {
	    backgroundColor: 'transparent',
	    backgroundImage: 'none'
	  },

	  /**
	   * Correct the inability to style clickable types in iOS and Safari.
	   */
	  'button,[type="button"],[type="reset"],[type="submit"]': {
	    WebkitAppearance: 'button'
	  },

	  /**
	   * Work around a Firefox/IE bug where the transparent `button` background
	   * results in a loss of the default `button` focus styles.
	   */
	  // 'button:focus': { outline: ['1px dotted', '5px auto -webkit-focus-ring-color'] },
	  ':focus': {
	    outline: 'none'
	  },

	  /**
	   * Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
	   */
	  'fieldset,ol,ul,legend': {
	    padding: '0'
	  },
	  'ol,ul': {
	    listStyle: 'none'
	  },

	  /**
	   * 1. Use Tailwind's default "normal" line-height so the user isn't forced
	   *    to override it to ensure consistency even when using the default theme.
	   * 2. Prevent adjustments of font size after orientation changes in iOS.
	   * 3. Use the user's configured `sans` font-family (with Tailwind's default
	   *    sans-serif font stack as a fallback) as a sane default.
	   */
	  html: {
	    lineHeight: '1.5',
	    WebkitTextSizeAdjust: '100%',
	    fontFamily: tw.theme('fontFamily.ui', 'ui-sans-serif,system-ui,sans-serif')
	  },

	  /**
	   * 1. Remove the margin in all browsers.
	   * 2. Inherit font-family and line-height from `html` so users can set them as
	   * a class directly on the `html` element.
	   */
	  body: {
	    fontFamily: 'inherit',
	    lineHeight: 'inherit',
	    minHeight: '100vh',
	    textRendering: 'optimizeSpeed'
	  },

	  /**
	   * 1. Prevent padding and border from affecting element width.
	   *
	   *    We used to set this in the html element and inherit from
	   *    the parent element for everything else. This caused issues
	   *    in shadow-dom-enhanced elements like <details> where the content
	   *    is wrapped by a div with box-sizing set to `content-box`.
	   *
	   *    https://github.com/mozdevs/cssremedy/issues/4
	   *
	   *
	   * 2. Allow adding a border to an element by just adding a border-width.
	   *
	   *    By default, the way the browser specifies that an element should have no
	   *    border is by setting it's border-style to `none` in the user-agent
	   *    stylesheet.
	   *
	   *    In order to easily add borders to elements by just setting the `border-width`
	   *    property, we change the default border-style for all elements to `solid`, and
	   *    use border-width to hide them instead. This way our `border` utilities only
	   *    need to set the `border-width` property instead of the entire `border`
	   *    shorthand, making our border utilities much more straightforward to compose.
	   *
	   *    https://github.com/tailwindcss/tailwindcss/pull/116
	   */
	  '*,::before,::after': {
	    boxSizing: 'border-box'
	    /* 1 */
	    ,
	    borderWidth: '0'
	    /* 2 */
	    ,
	    borderStyle: 'solid'
	    /* 2 */
	    ,
	    // @ts-expect-error
	    borderColor: tw.theme('borderColor.DEFAULT', 'currentColor')
	    /* 2 */

	  },

	  /*
	   * 1. Add the correct height in Firefox.
	   * 2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
	   * 3. Ensure horizontal rules are visible by default
	   */
	  hr: {
	    height: '0',
	    color: 'inherit',
	    borderTopWidth: '1px'
	  },

	  /**
	   * Undo the `border-style: none` reset that Normalize applies to images so that
	   * our `border-<width>` utilities have the expected effect.
	   *
	   * The Normalize reset is unnecessary for us since we default the border-width
	   * to 0 on all elements.
	   *
	   * https://github.com/tailwindcss/tailwindcss/issues/362
	   */
	  img: {
	    borderStyle: 'solid'
	  },
	  textarea: {
	    resize: 'vertical'
	  },
	  'input::placeholder,textarea::placeholder': {
	    opacity: 1,
	    // @ts-expect-error
	    color: tw.theme('placeholderColor.DEFAULT', tw.theme('colors.gray.400', '#a1a1aa'))
	  },
	  'button,[role="button"]': {
	    cursor: 'pointer'
	  },

	  /**
	   * 1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
	   * 2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
	   */
	  table: {
	    textIndent: '0',
	    borderColor: 'inherit',
	    borderCollapse: 'collapse'
	  },
	  'h1,h2,h3,h4,h5,h6': {
	    fontSize: 'inherit',
	    fontWeight: 'inherit'
	  },

	  /**
	   * Reset links to optimize for opt-in styling instead of
	   * opt-out.
	   */
	  a: {
	    color: 'inherit',
	    textDecoration: 'inherit'
	  },

	  /**
	   * 1. Change the font styles in all browsers.
	   * 2. Remove the margin in Firefox and Safari.
	   * Reset form element properties that are easy to forget to
	   * style explicitly so you don't inadvertently introduce
	   * styles that deviate from your design system. These styles
	   * supplement a partial reset that is already applied by
	   * normalize.css.
	   */
	  'button,input,optgroup,select,textarea': {
	    fontFamily: 'inherit',
	    fontSize: '100%',
	    margin: '0',
	    padding: '0',
	    lineHeight: 'inherit',
	    color: 'inherit'
	  },

	  /**
	   * Remove the inheritance of text transform in Edge and Firefox.
	   * 1. Remove the inheritance of text transform in Firefox.
	   */
	  'button,select': {
	    textTransform: 'none'
	  },

	  /**
	   * Remove the inner border and padding in Firefox.
	   */
	  '::-moz-focus-inner': {
	    borderStyle: 'none',
	    padding: '0'
	  },

	  /**
	   * Restore the focus styles unset by the previous rule.
	   */
	  ':-moz-focusring': {
	    outline: '1px dotted ButtonText'
	  },

	  /**
	   * Remove the additional ':invalid' styles in Firefox.
	   * See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
	   */
	  ':-moz-ui-invalid': {
	    boxShadow: 'none'
	  },

	  /**
	   * Add the correct vertical alignment in Chrome and Firefox.
	   */
	  progress: {
	    verticalAlign: 'baseline'
	  },

	  /**
	   * Correct the cursor style of increment and decrement buttons in Safari.
	   */
	  '::-webkit-inner-spin-button,::-webkit-outer-spin-button': {
	    height: 'auto'
	  },

	  /**
	   * 1. Correct the odd appearance in Chrome and Safari.
	   * 2. Correct the outline style in Safari.
	   */
	  '[type="search"]': {
	    WebkitAppearance: 'textfield',
	    outlineOffset: '-2px'
	  },

	  /**
	   * Remove the inner padding in Chrome and Safari on macOS.
	   */
	  '::-webkit-search-decoration': {
	    WebkitAppearance: 'none'
	  },

	  /**
	   * 1. Correct the inability to style clickable types in iOS and Safari.
	   * 2. Change font properties to 'inherit' in Safari.
	   */
	  '::-webkit-file-upload-button': {
	    WebkitAppearance: 'button',
	    font: 'inherit'
	  },

	  /*
	   * Add the correct display in Chrome and Safari.
	   */
	  summary: {
	    display: 'list-item'
	  },

	  /**
	   * Add the correct text decoration in Chrome, Edge, and Safari.
	   */
	  'abbr[title]': {
	    textDecoration: 'underline dotted'
	  },

	  /**
	   * Add the correct font weight in Edge and Safari.
	   */
	  'b,strong': {
	    fontWeight: 'bolder'
	  },

	  /**
	   * 1. Use the configured 'mono' font family for elements that
	   * are expected to be rendered with a monospace font, falling
	   * back to the system monospace stack if there is no configured
	   * 'mono' font family.
	   * 2. Correct the odd 'em' font sizing in all browsers.
	   */
	  'pre,code,kbd,samp': {
	    fontFamily: tw.theme('fontFamily', 'mono', 'ui-monospace,monospace'),
	    fontSize: '1em'
	  },

	  /**
	   * Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
	   */
	  'sub,sup': {
	    fontSize: '75%',
	    lineHeight: '0',
	    position: 'relative',
	    verticalAlign: 'baseline'
	  },
	  sub: {
	    bottom: '-0.25em'
	  },
	  sup: {
	    top: '-0.5em'
	  },

	  /**
	   * Make replaced elements `display: block` by default as that's
	   * the behavior you want almost all of the time. Inspired by
	   * CSS Remedy, with `svg` added as well.
	   *
	   * https://github.com/mozdevs/cssremedy/issues/14
	   */
	  'img,svg,video,canvas,audio,iframe,embed,object': {
	    display: 'block',
	    verticalAlign: 'middle'
	  },

	  /**
	   * Constrain images and videos to the parent width and preserve
	   * their instrinsic aspect ratio.
	   *
	   * https://github.com/mozdevs/cssremedy/issues/14
	   */
	  'img,video': {
	    maxWidth: '100%',
	    height: 'auto'
	  }
	});

	var $$2 = _export;
	var uncurryThis$3 = functionUncurryThis;
	var notARegExp = notARegexp;
	var requireObjectCoercible = requireObjectCoercible$7;
	var toString$1 = toString$8;
	var correctIsRegExpLogic = correctIsRegexpLogic;

	var stringIndexOf = uncurryThis$3(''.indexOf);

	// `String.prototype.includes` method
	// https://tc39.es/ecma262/#sec-string.prototype.includes
	$$2({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~stringIndexOf(
	      toString$1(requireObjectCoercible(this)),
	      toString$1(notARegExp(searchString)),
	      arguments.length > 1 ? arguments[1] : undefined
	    );
	  }
	});

	const propNames = ['as', ...backdropPropNames, ...borderPropNames, ...colorPropNames, ...flexPropNames, ...interactivityPropNames, ...layoutPropNames, ...positionPropNames, ...shadowPropNames, ...sizePropNames, ...spacingPropNames, ...typographyPropNames, ...transformPropNames];
	/**
	 * Convenience method to split the Box props.
	 *
	 * Useful for when you want to pass all of the Box props to the root Box and
	 * pass the remaining props to a child element (e.g: disabled, readOnly, required, etc).
	 */

	function splitBoxProps(props) {
	  return splitProps(props, propNames);
	}
	/**
	 * Utility to split props based on an array of keys
	 */

	function splitProps(props, keys) {
	  const matchedProps = {};
	  const remainingProps = {};
	  const propKeys = Object.keys(props);

	  for (let i = 0; i < propKeys.length; i++) {
	    const propKey = propKeys[i];
	    const propValue = props[propKey];

	    if (keys.includes(propKey)) {
	      matchedProps[propKey] = propValue;
	    } else {
	      remainingProps[propKey] = propValue;
	    }
	  }

	  return {
	    matchedProps,
	    remainingProps
	  };
	}

	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
				return target.propertyIsEnumerable(symbol)
			})
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function propertyIsOnObject(object, property) {
		try {
			return property in object
		} catch(_) {
			return false
		}
	}

	// Protects from prototype poisoning and unexpected merging up the prototype chain.
	function propertyIsUnsafe(target, key) {
		return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		getKeys(source).forEach(function(key) {
			if (propertyIsUnsafe(target, key)) {
				return
			}

			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			} else {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
		// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
		// implementations can use it. The caller may not replace it.
		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	var cjs = deepmerge_1;

	const getCssVariable = (name, element) => {
	  if (typeof document === void 0) return null;
	  return getComputedStyle(element || document.body).getPropertyValue(name);
	}; // so that lines don't wrap so much, hard to read
	// const r = Math.round;

	const prefersDarkMode = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
	/**
	 * Handles figuring out what 'system' mode resolves to if user has that picked. Always returns light | dark.
	 */

	const getResolvedThemeMode = userMode => {
	  if (userMode === 'system') {
	    return prefersDarkMode() ? 'dark' : 'light';
	  }

	  return userMode;
	};

	const _computeTheme = (baseThemeId, customTheme = {
	  colors: {}
	}) => {
	  const theme = cjs(PREBUILT_THEMES[baseThemeId], customTheme);
	  const bgColor = chroma__default["default"](theme.colors.background);
	  const textColor = readableColor(bgColor, theme.colors.text, '#FFF');
	  const isDark = theme.isDark || textColor.luminance() > bgColor.luminance();
	  const vars = computeCssVariables(theme, isDark);
	  return {
	    theme: Object.assign({}, theme, {
	      isDark
	    }),
	    vars,
	    css: Object.assign({
	      color: vars['color-text'],
	      backgroundColor: vars['color-canvas']
	    }, cssVariablesToStyleObj(vars))
	  };
	};

	const computeTheme = memoize__default["default"](_computeTheme, {
	  equals: equals__default["default"],
	  maxAge: Infinity
	});

	const cssVariablesToStyleObj = vars => {
	  let styles = {};

	  for (const k in vars) {
	    styles[`--${k}`] = vars[k];
	  }

	  return styles;
	};

	const intentColorBuilder = (isDark, docBgColor, docTextColor) => {
	  return targetColor => {
	    let color = chroma__default["default"](targetColor);
	    let onColor;

	    if (chroma__default["default"].contrast(color, docBgColor) > 2) {
	      onColor = readableColor(color, '#fff', docBgColor);
	    } else {
	      color = docTextColor;
	      onColor = readableColor(color, targetColor, '#fff');
	    }

	    const textColor = readableColor(docBgColor, isDark ? color.brighten(0.7) : color.darken(0.5), '#fff');
	    return [color, onColor, textColor];
	  };
	};

	const computeCssVariables = (theme, isDark) => {
	  const bgColor = chroma__default["default"](theme.colors.background);
	  const bgColorLum = bgColor.luminance();
	  const tintMulti = isDark ? Math.max(1 / (1 - bgColorLum * 1.5), 3) : 1;
	  const textColor = readableColor(bgColor, theme.colors.text, '#fff');
	  const computeItentColor = intentColorBuilder(isDark, bgColor, textColor);
	  const [primaryColor, onPrimary, primaryTextColor] = computeItentColor(theme.colors.primary);
	  const [secondaryColor, onSecondary, secondaryTextColor] = computeItentColor(theme.colors.secondary);
	  const [successColor, onSuccess, successTextColor] = computeItentColor(theme.colors.success);
	  const [warningColor, onWarning, warningTextColor] = computeItentColor(theme.colors.warning);
	  const [dangerColor, onDanger, dangerTextColor] = computeItentColor(theme.colors.danger);
	  const canvasColor = theme.colors.muted || chroma__default["default"].hsl(primaryColor.hsl()[0] || 0, 0.35, 0.69);
	  const canvasColors = createScale(canvasColor, isDark);
	  let shadows = {
	    sm: '0px 0px 1px rgba(67, 90, 111, 0.3)',
	    md: '0px 2px 4px -2px rgba(0, 0, 0, 0.25), 0px 0px 1px rgba(67, 90, 111, 0.3)',
	    lg: '0 4px 17px rgba(67, 90, 111, .2), 0 2px 3px rgba(0, 0, 0, .1), inset 0 0 0 .5px var(--color-canvas-pure), 0 0 0 .5px rgba(0, 0, 0, 0.2)',
	    xl: '0px 0px 1px rgba(67, 90, 111, 0.3), 0px 8px 10px -4px rgba(67, 90, 111, 0.45)',
	    '2xl': '0px 0px 1px rgba(67, 90, 111, 0.3), 0px 16px 24px -8px rgba(67, 90, 111, 0.45)'
	  };
	  let dropShadows = {
	    default1: '0 0 0.5px rgba(0, 0, 0, 0.6)',
	    default2: '0 2px 5px rgba(67, 90, 111, 0.3)'
	  };

	  if (isDark) {
	    // darker shadows on dark canvas
	    shadows = {
	      sm: '0px 0px 1px rgba(11, 13, 19, 0.5)',
	      md: '0px 2px 4px -2px rgba(0, 0, 0, 0.35), 0px 0px 1px rgba(11, 13, 19, 0.4)',
	      lg: '0 2px 14px rgba(0,0,0,.55), 0 0 0 0.5px rgba(255,255,255,.2)',
	      xl: '0px 0px 1px rgba(11, 13, 19, 0.4), 0px 8px 10px -4px rgba(11, 13, 19, 0.55)',
	      '2xl': '0px 0px 1px rgba(11, 13, 19, 0.4), 0px 16px 24px -8px rgba(11, 13, 19, 0.55)'
	    };
	    dropShadows = {
	      default1: '0 0 0.5px rgba(255, 255, 255, .5)',
	      default2: '0 3px 8px rgba(0, 0, 0, 0.6)'
	    };
	  }

	  return {
	    'shadow-sm': shadows.sm,
	    'shadow-md': shadows.md,
	    'shadow-lg': shadows.lg,
	    'shadow-xl': shadows.xl,
	    'shadow-2xl': shadows['2xl'],
	    'drop-shadow-default1': dropShadows.default1,
	    'drop-shadow-default2': dropShadows.default2,
	    'color-text': textColor.css(),
	    'color-text-heading': textColor.css(),
	    'color-text-paragraph': textColor.alpha(0.9).css(),
	    'color-text-muted': textColor.alpha(0.7).css(),
	    'color-text-light': textColor.alpha(0.55).css(),
	    'color-text-disabled': textColor.alpha(0.3).css(),
	    'color-canvas': bgColor.css(),
	    'color-canvas-pure': bgColor.css(),
	    'color-canvas-tint': isDark ? textColor.alpha(0.01 * (tintMulti * 1.2)).css() : canvasColors(150).saturate(0.4).alpha(0.15).css(),
	    'color-canvas-tint-more': isDark ? textColor.alpha(0.035 * (tintMulti * 1.1)).css() : canvasColors(225).saturate(0.4).alpha(0.25).css(),
	    'color-canvas-50': isDark ? textColor.alpha(0.01 * tintMulti).css() : canvasColors(75).saturate(0.2).alpha(0.35).css(),
	    'color-canvas-100': isDark ? textColor.alpha(0.04 * tintMulti).css() : canvasColors(125).saturate(0.2).alpha(0.7).css(),
	    'color-canvas-200': isDark ? textColor.alpha(0.08 * (tintMulti * 0.9)).css() : canvasColors(200).saturate(0.2).alpha(0.8).css(),
	    'color-canvas-300': isDark ? textColor.alpha(0.1 * (tintMulti * 0.9)).css() : canvasColors(300).saturate(0.2).css(),
	    'color-canvas-400': isDark ? textColor.alpha(0.14 * (tintMulti * 0.8)).css() : canvasColors(400).saturate(0.2).css(),
	    'color-canvas-500': isDark ? textColor.alpha(0.18 * (tintMulti * 0.75)).css() : canvasColors(500).saturate(0.2).css(),
	    'color-canvas-600': isDark ? textColor.alpha(0.24 * (tintMulti * 0.7)).css() : canvasColors(600).saturate(0.2).css(),
	    'color-canvas-700': isDark ? textColor.alpha(0.3 * (tintMulti * 0.65)).css() : canvasColors(700).saturate(0.2).css(),
	    'color-canvas-800': isDark ? textColor.alpha(0.36 * (tintMulti * 0.6)).css() : canvasColors(800).saturate(0.25).css(),
	    'color-canvas-900': isDark ? textColor.alpha(0.42 * (tintMulti * 0.55)).css() : canvasColors(900).saturate(0.3).css(),
	    'color-canvas-1000': isDark ? textColor.alpha(0.5 * (tintMulti * 0.5)).css() : canvasColors(1050).saturate(0.3).css(),
	    'color-canvas-dialog': isDark ? bgColor.brighten(0.2).css() : bgColor.css(),
	    'color-border-dark': 'var(--color-canvas-300)',
	    'color-border': 'var(--color-canvas-100)',
	    'color-border-light': 'var(--color-canvas-50)',
	    'color-border-input': 'var(--color-canvas-300)',
	    'color-border-button': 'var(--color-canvas-600)',
	    'color-text-primary': primaryTextColor.css(),
	    'color-primary-darker': primaryColor.darken(0.8).css(),
	    'color-primary-dark': primaryColor.darken(0.5).css(),
	    'color-primary': primaryColor.css(),
	    'color-primary-light': primaryColor.brighten(0.2).css(),
	    'color-primary-tint': primaryColor.saturate(0.2).alpha(0.13).css(),
	    'color-on-primary': onPrimary.css(),
	    'color-text-secondary': secondaryTextColor.css(),
	    'color-secondary-darker': secondaryColor.darken(0.8).css(),
	    'color-secondary-dark': secondaryColor.darken(0.5).css(),
	    'color-secondary': secondaryColor.css(),
	    'color-secondary-light': secondaryColor.brighten(0.2).css(),
	    'color-secondary-tint': secondaryColor.saturate(0.2).alpha(0.13).css(),
	    'color-on-secondary': onSecondary.css(),
	    'color-text-success': successTextColor.css(),
	    'color-success-darker': successColor.darken(0.8).css(),
	    'color-success-dark': successColor.darken(0.5).css(),
	    'color-success': successColor.css(),
	    'color-success-light': successColor.brighten(0.2).css(),
	    'color-success-tint': successColor.saturate(0.2).alpha(0.13).css(),
	    'color-on-success': onSuccess.css(),
	    'color-text-warning': warningTextColor.css(),
	    'color-warning-darker': warningColor.darken(0.8).css(),
	    'color-warning-dark': warningColor.darken(0.5).css(),
	    'color-warning': warningColor.css(),
	    'color-warning-light': warningColor.brighten(0.2).css(),
	    'color-warning-tint': warningColor.saturate(0.2).alpha(0.13).css(),
	    'color-on-warning': onWarning.css(),
	    'color-text-danger': dangerTextColor.css(),
	    'color-danger-darker': dangerColor.darken(0.8).css(),
	    'color-danger-dark': dangerColor.darken(0.5).css(),
	    'color-danger': dangerColor.css(),
	    'color-danger-light': dangerColor.brighten(0.2).css(),
	    'color-danger-tint': dangerColor.saturate(0.2).alpha(0.13).css(),
	    'color-on-danger': onDanger.css(),
	    'color-link': primaryTextColor.css(),
	    'color-link-dark': isDark ? primaryTextColor.alpha(0.8).css() : primaryTextColor.darken(0.3).css()
	  };
	};

	function createScale(color, darkMode) {
	  let c = chroma__default["default"](color);
	  return chroma__default["default"].scale(darkMode ? ['black', c, 'white'] : ['white', c, 'black']).domain([0, 1100]).padding(darkMode ? [0.06, 0] : [0, 0.1]).correctLightness();
	}

	const THEME_STORAGE_KEY = 'mosaic-theme';
	const DEFAULT_THEME_MODE = 'light';
	const defaultThemeMode = () => {
	  if (typeof localStorage === 'undefined') return DEFAULT_THEME_MODE;

	  try {
	    return JSON.parse(localStorage.getItem(THEME_STORAGE_KEY)).mode;
	  } catch (_a) {}

	  const dataTheme = document.documentElement.getAttribute('data-theme');
	  if (dataTheme) return dataTheme;
	  return DEFAULT_THEME_MODE;
	};
	const PREBUILT_THEMES = {
	  default: {
	    name: 'Stoplight Light',
	    colors: {
	      text: 'hsl(222, 36%, 11%)',
	      background: '#fff',
	      primary: 'hsl(202, 100%, 55%)',
	      secondary: 'hsl(222, 36%, 11%)',
	      muted: 'hsl(215, 35%, 69%)',
	      success: 'hsl(156, 95%, 37%)',
	      warning: 'hsl(20, 90%, 56%)',
	      danger: 'hsl(0, 84%, 63%)'
	    }
	  },
	  default_dark: {
	    name: 'Stoplight Dark',
	    isDark: true,
	    colors: {
	      text: 'hsl(274, 50%, 93%)',
	      background: 'hsl(260, 23%, 10%)',
	      primary: 'hsl(265, 50%, 60%)',
	      secondary: 'hsl(202, 100%, 55%)',
	      muted: 'hsl(274, 60%, 80%)',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  dracula: {
	    name: 'Dracula',
	    isDark: true,
	    colors: {
	      text: 'hsl(60, 30%, 96%)',
	      background: 'hsl(231, 15%, 18%)',
	      primary: '#ff79c6',
	      secondary: '#50fa7b',
	      muted: '#353842',
	      success: 'hsl(135, 94%, 65%)',
	      warning: 'hsl(31, 100%, 71%)',
	      danger: 'hsl(0, 100%, 67%)'
	    }
	  },
	  duotone_light: {
	    name: 'Duotone Light',
	    colors: {
	      text: '#2d1f03',
	      background: '#faf8f5',
	      primary: '#8a681c',
	      secondary: '#8c6b20',
	      muted: '#e1ddd3',
	      success: 'hsl(156, 95%, 37%)',
	      warning: 'hsl(20, 90%, 56%)',
	      danger: 'hsl(0, 84%, 63%)'
	    }
	  },
	  duotone_dark: {
	    name: 'Duotone Dark',
	    isDark: true,
	    colors: {
	      text: '#d4d0e8',
	      background: '#2a2734',
	      primary: '#ffcc99',
	      secondary: '#9a86fd',
	      muted: '#373440',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  black: {
	    name: 'Black',
	    isDark: true,
	    colors: {
	      text: '#fff',
	      background: '#000',
	      primary: '#2F6EEB',
	      secondary: '#FFCB6B',
	      muted: '#333e45',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  material: {
	    name: 'Material',
	    isDark: true,
	    colors: {
	      text: 'rgba(233,237,237,1)',
	      background: '#263238',
	      primary: 'rgba(199,146,234,1)',
	      secondary: '#FFCB6B',
	      muted: '#333e45',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  monokai: {
	    name: 'Monokai',
	    isDark: true,
	    colors: {
	      text: '#f8f8f2',
	      background: '#272822',
	      primary: '#f92672',
	      secondary: '#a6e22e',
	      muted: '#333330',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  night_owl: {
	    name: 'Night Owl',
	    isDark: true,
	    colors: {
	      text: '#c8cfdc',
	      background: '#011627',
	      primary: '#c792ea',
	      secondary: '#F78C6C',
	      muted: '#03243e',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  nord: {
	    name: 'Nord',
	    isDark: true,
	    colors: {
	      text: '#d8dee9',
	      background: '#2F343F',
	      primary: '#81A1C1',
	      secondary: '#8FBCBB',
	      muted: '#3c414b',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  one_light: {
	    name: 'One Light',
	    colors: {
	      text: '#383a42',
	      background: '#FAFAFA',
	      primary: '#a626a4',
	      secondary: '#d19a66',
	      muted: '#dbdbdc',
	      success: 'hsl(156, 95%, 37%)',
	      warning: 'hsl(20, 90%, 56%)',
	      danger: 'hsl(0, 84%, 63%)'
	    }
	  },
	  one_dark: {
	    name: 'One Dark',
	    isDark: true,
	    colors: {
	      text: '#cad3e5',
	      background: '#282c34',
	      primary: '#c678dd',
	      secondary: '#d19a66',
	      muted: '#363940',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  solarized_light: {
	    name: 'Solarized Light',
	    colors: {
	      text: '#073642',
	      background: '#fdf6e3',
	      primary: '#cb4b16',
	      secondary: '#2aa198',
	      muted: '#eee8d5',
	      success: 'hsl(156, 95%, 37%)',
	      warning: 'hsl(20, 90%, 56%)',
	      danger: 'hsl(0, 84%, 63%)'
	    }
	  },
	  solarized_dark: {
	    name: 'Solarized Dark',
	    isDark: true,
	    colors: {
	      text: '#9fb2b5',
	      background: '#002b36',
	      primary: '#cb4b16',
	      secondary: '#2aa198',
	      muted: '#013e4e',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  vscode: {
	    name: 'VSCode',
	    isDark: true,
	    colors: {
	      text: '#D4D4D4',
	      background: '#1E1E1E',
	      primary: '#C586C0',
	      secondary: '#d19a66',
	      muted: '#2b2b2b',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  winter_light: {
	    name: 'Winter Light',
	    colors: {
	      text: '#012339',
	      background: '#fff',
	      primary: '#236ebf',
	      secondary: '#a44185',
	      muted: '#e0ecf1',
	      success: 'hsl(156, 95%, 37%)',
	      warning: 'hsl(20, 90%, 56%)',
	      danger: 'hsl(0, 84%, 63%)'
	    }
	  },
	  winter_dark: {
	    name: 'Winter Dark',
	    isDark: true,
	    colors: {
	      text: '#d5deeb',
	      background: '#001627',
	      primary: '#00bff8',
	      secondary: '#c792eb',
	      muted: '#02243f',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  },
	  funky: {
	    name: 'Funky',
	    isDark: true,
	    colors: {
	      text: '#fff',
	      background: '#6638f0',
	      primary: '#fff',
	      secondary: '#F174FB',
	      muted: '#02243f',
	      success: 'hsl(156, 60%, 35%)',
	      warning: 'hsl(20, 60%, 52%)',
	      danger: 'hsl(0, 65%, 60%)'
	    }
	  }
	};

	function useControlledState(value, defaultValue, onChange) {
	  let [stateValue, setStateValue] = _react.useState(value || defaultValue);
	  let ref = _react.useRef(value !== undefined);
	  let wasControlled = ref.current;
	  let isControlled = value !== undefined; // Internal state reference for useCallback

	  let stateRef = _react.useRef(stateValue);

	  if (wasControlled !== isControlled) {
	    console.warn("WARN: A component changed from " + (wasControlled ? 'controlled' : 'uncontrolled') + " to " + (isControlled ? 'controlled' : 'uncontrolled') + ".");
	  }

	  ref.current = isControlled;
	  let setValue = _react.useCallback(function (value) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    let onChangeCaller = function onChangeCaller(value) {
	      if (onChange) {
	        if (!Object.is(stateRef.current, value)) {
	          for (var _len2 = arguments.length, onChangeArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            onChangeArgs[_key2 - 1] = arguments[_key2];
	          }

	          onChange(value, ...onChangeArgs);
	        }
	      }

	      if (!isControlled) {
	        stateRef.current = value;
	      }
	    };

	    if (typeof value === 'function') {
	      // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
	      // when someone using useControlledState calls setControlledState(myFunc)
	      // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
	      // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
	      // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
	      let updateFunction = function updateFunction(oldValue) {
	        for (var _len3 = arguments.length, functionArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	          functionArgs[_key3 - 1] = arguments[_key3];
	        }

	        let interceptedValue = value(isControlled ? stateRef.current : oldValue, ...functionArgs);
	        onChangeCaller(interceptedValue, ...args);

	        if (!isControlled) {
	          return interceptedValue;
	        }

	        return oldValue;
	      };

	      setStateValue(updateFunction);
	    } else {
	      if (!isControlled) {
	        setStateValue(value);
	      }

	      onChangeCaller(value, ...args);
	    }
	  }, [isControlled, onChange]); // If a controlled component's value prop changes, we need to update stateRef

	  if (isControlled) {
	    stateRef.current = value;
	  } else {
	    value = stateValue;
	  }

	  return [value, setValue];
	}

	// Default context value to use in case there is no SSRProvider. This is fine for
	// client-only apps. In order to support multiple copies of React Aria potentially
	// being on the page at once, the prefix is set to a random number. SSRProvider
	// will reset this to zero for consistency between server and client, so in the
	// SSR case multiple copies of React Aria is not supported.
	const $f01a183cc7bdff77849e49ad26eb904$var$defaultContext = {
	  prefix: Math.round(Math.random() * 10000000000),
	  current: 0
	};

	const $f01a183cc7bdff77849e49ad26eb904$var$SSRContext = /*#__PURE__*/_react__default["default"].createContext($f01a183cc7bdff77849e49ad26eb904$var$defaultContext);

	/**
	 * When using SSR with React Aria, applications must be wrapped in an SSRProvider.
	 * This ensures that auto generated ids are consistent between the client and server.
	 */
	function SSRProvider(props) {
	  let cur = _react.useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
	  let value = _react.useMemo(() => ({
	    // If this is the first SSRProvider, set to zero, otherwise increment.
	    prefix: cur === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext ? 0 : ++cur.prefix,
	    current: 0
	  }), [cur]);
	  return /*#__PURE__*/_react__default["default"].createElement($f01a183cc7bdff77849e49ad26eb904$var$SSRContext.Provider, {
	    value: value
	  }, props.children);
	}
	let $f01a183cc7bdff77849e49ad26eb904$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
	/** @private */

	function useSSRSafeId(defaultId) {
	  let ctx = _react.useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext); // If we are rendering in a non-DOM environment, and there's no SSRProvider,
	  // provide a warning to hint to the developer to add one.

	  if (ctx === $f01a183cc7bdff77849e49ad26eb904$var$defaultContext && !$f01a183cc7bdff77849e49ad26eb904$var$canUseDOM) {
	    console.warn('When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.');
	  }

	  return _react.useMemo(() => defaultId || "react-aria-" + ctx.prefix + "-" + ++ctx.current, [defaultId]);
	}
	/**
	 * Returns whether the component is currently being server side rendered or
	 * hydrated on the client. Can be used to delay browser-specific rendering
	 * until after hydration.
	 */

	function useIsSSR() {
	  let cur = _react.useContext($f01a183cc7bdff77849e49ad26eb904$var$SSRContext);
	  let isInSSRContext = cur !== $f01a183cc7bdff77849e49ad26eb904$var$defaultContext;
	  let [isSSR, setIsSSR] = _react.useState(isInSSRContext); // If on the client, and the component was initially server rendered,
	  // then schedule a layout effect to update the component after hydration.

	  if (typeof window !== 'undefined' && isInSSRContext) {
	    // This if statement technically breaks the rules of hooks, but is safe
	    // because the condition never changes after mounting.
	    // eslint-disable-next-line react-hooks/rules-of-hooks
	    _react.useLayoutEffect(() => {
	      setIsSSR(false);
	    }, []);
	  }

	  return isSSR;
	}

	// During SSR, React emits a warning when calling useLayoutEffect.
	// Since neither useLayoutEffect nor useEffect run on the server,
	// we can suppress this by replace it with a noop on the server.
	const useLayoutEffect = typeof window !== 'undefined' ? _react__default["default"].useLayoutEffect : () => {};
	let $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap = new Map();
	/**
	 * If a default is not provided, generate an id.
	 * @param defaultId - Default component id.
	 */

	function useId(defaultId) {
	  let isRendering = _react.useRef(true);
	  isRendering.current = true;
	  let [value, setValue] = _react.useState(defaultId);
	  let nextId = _react.useRef(null); // don't memo this, we want it new each render so that the Effects always run

	  let updateValue = val => {
	    if (!isRendering.current) {
	      setValue(val);
	    } else {
	      nextId.current = val;
	    }
	  };

	  useLayoutEffect(() => {
	    isRendering.current = false;
	  }, [updateValue]);
	  _react.useEffect(() => {
	    let newId = nextId.current;

	    if (newId) {
	      setValue(newId);
	      nextId.current = null;
	    }
	  }, [setValue, updateValue]);
	  let res = useSSRSafeId(value);
	  $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.set(res, updateValue);
	  return res;
	}
	/**
	 * Merges two ids.
	 * Different ids will trigger a side-effect and re-render components hooked up with `useId`.
	 */

	function mergeIds(idA, idB) {
	  if (idA === idB) {
	    return idA;
	  }

	  let setIdA = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(idA);

	  if (setIdA) {
	    setIdA(idB);
	    return idB;
	  }

	  let setIdB = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(idB);

	  if (setIdB) {
	    setIdB(idA);
	    return idA;
	  }

	  return idB;
	}
	/**
	 * Used to generate an id, and after render, check if that id is rendered so we know
	 * if we can use it in places such as labelledby.
	 */

	function useSlotId() {
	  let [id, setId] = _react.useState(useId());
	  useLayoutEffect(() => {
	    let setCurr = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(id);

	    if (setCurr && !document.getElementById(id)) {
	      setId(null);
	    }
	  }, [id]);
	  return id;
	}

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */

	/**
	 * Calls all functions in the order they were chained with the same arguments.
	 */
	function chain() {
	  for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
	    callbacks[_key] = arguments[_key];
	  }

	  return function () {
	    for (let callback of callbacks) {
	      if (typeof callback === 'function') {
	        callback(...arguments);
	      }
	    }
	  };
	}

	/**
	 * Merges multiple props objects together. Event handlers are chained,
	 * classNames are combined, and ids are deduplicated - different ids
	 * will trigger a side-effect and re-render components hooked up with `useId`.
	 * For all other props, the last prop object overrides all previous ones.
	 * @param args - Multiple sets of props to merge together.
	 */
	function mergeProps() {
	  let result = {};

	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  for (let props of args) {
	    for (let key in result) {
	      // Chain events
	      if (/^on[A-Z]/.test(key) && typeof result[key] === 'function' && typeof props[key] === 'function') {
	        result[key] = chain(result[key], props[key]); // Merge classnames, sometimes classNames are empty string which eval to false, so we just need to do a type check
	      } else if (key === 'className' && typeof result.className === 'string' && typeof props.className === 'string') {
	        result[key] = cn__default["default"](result.className, props.className);
	      } else if (key === 'UNSAFE_className' && typeof result.UNSAFE_className === 'string' && typeof props.UNSAFE_className === 'string') {
	        result[key] = cn__default["default"](result.UNSAFE_className, props.UNSAFE_className);
	      } else if (key === 'id' && result.id && props.id) {
	        result.id = mergeIds(result.id, props.id); // Override others
	      } else {
	        result[key] = props[key] !== undefined ? props[key] : result[key];
	      }
	    } // Add props from b that are not in a


	    for (let key in props) {
	      if (result[key] === undefined) {
	        result[key] = props[key];
	      }
	    }
	  }

	  return result;
	}
	const $f6a965352cabf1a7c37e8c1337e5eab$var$DOMPropNames = new Set(['id']);
	const $f6a965352cabf1a7c37e8c1337e5eab$var$labelablePropNames = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']);
	const $f6a965352cabf1a7c37e8c1337e5eab$var$propRe = /^(data-.*)$/;
	/**
	 * Filters out all props that aren't valid DOM props or defined via override prop obj.
	 * @param props - The component props to be filtered.
	 * @param opts - Props to override.
	 */

	function filterDOMProps(props, opts) {
	  if (opts === void 0) {
	    opts = {};
	  }

	  let {
	    labelable,
	    propNames
	  } = opts;
	  let filteredProps = {};

	  for (const prop in props) {
	    if (Object.prototype.hasOwnProperty.call(props, prop) && ($f6a965352cabf1a7c37e8c1337e5eab$var$DOMPropNames.has(prop) || labelable && $f6a965352cabf1a7c37e8c1337e5eab$var$labelablePropNames.has(prop) || propNames != null && propNames.has(prop) || $f6a965352cabf1a7c37e8c1337e5eab$var$propRe.test(prop))) {
	      filteredProps[prop] = props[prop];
	    }
	  }

	  return filteredProps;
	}
	// Currently necessary for Safari and old Edge:
	// https://caniuse.com/#feat=mdn-api_htmlelement_focus_preventscroll_option
	// See https://bugs.webkit.org/show_bug.cgi?id=178583
	//
	// Original licensing for the following methods can be found in the
	// NOTICE file in the root directory of this source tree.
	// See https://github.com/calvellido/focus-options-polyfill
	function focusWithoutScrolling(element) {
	  if ($bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll()) {
	    element.focus({
	      preventScroll: true
	    });
	  } else {
	    let scrollableElements = $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(element);
	    element.focus();
	    $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(scrollableElements);
	  }
	}
	let $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = null;

	function $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll() {
	  if ($bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached == null) {
	    $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = false;

	    try {
	      var focusElem = document.createElement('div');
	      focusElem.focus({
	        get preventScroll() {
	          $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = true;
	          return true;
	        }

	      });
	    } catch (e) {// Ignore
	    }
	  }

	  return $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached;
	}

	function $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(element) {
	  var parent = element.parentNode;
	  var scrollableElements = [];
	  var rootScrollingElement = document.scrollingElement || document.documentElement;

	  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
	    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
	      scrollableElements.push({
	        element: parent,
	        scrollTop: parent.scrollTop,
	        scrollLeft: parent.scrollLeft
	      });
	    }

	    parent = parent.parentNode;
	  }

	  if (rootScrollingElement instanceof HTMLElement) {
	    scrollableElements.push({
	      element: rootScrollingElement,
	      scrollTop: rootScrollingElement.scrollTop,
	      scrollLeft: rootScrollingElement.scrollLeft
	    });
	  }

	  return scrollableElements;
	}

	function $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(scrollableElements) {
	  for (let {
	    element,
	    scrollTop,
	    scrollLeft
	  } of scrollableElements) {
	    element.scrollTop = scrollTop;
	    element.scrollLeft = scrollLeft;
	  }
	}
	// mapped to a set of CSS properties that are transitioning for that element.
	// This is necessary rather than a simple count of transitions because of browser
	// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
	// than one or the other. So we need to track what's actually transitioning so that
	// we can ignore these duplicate events.
	let $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement = new Map(); // A list of callbacks to call once there are no transitioning elements.

	let $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks = new Set();

	function $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents() {
	  if (typeof window === 'undefined') {
	    return;
	  }

	  let onTransitionStart = e => {
	    // Add the transitioning property to the list for this element.
	    let transitions = $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.get(e.target);

	    if (!transitions) {
	      transitions = new Set();
	      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.set(e.target, transitions); // The transitioncancel event must be registered on the element itself, rather than as a global
	      // event. This enables us to handle when the node is deleted from the document while it is transitioning.
	      // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.

	      e.target.addEventListener('transitioncancel', onTransitionEnd);
	    }

	    transitions.add(e.propertyName);
	  };

	  let onTransitionEnd = e => {
	    // Remove property from list of transitioning properties.
	    let properties = $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.get(e.target);

	    if (!properties) {
	      return;
	    }

	    properties.delete(e.propertyName); // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.

	    if (properties.size === 0) {
	      e.target.removeEventListener('transitioncancel', onTransitionEnd);
	      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.delete(e.target);
	    } // If no transitioning elements, call all of the queued callbacks.


	    if ($b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.size === 0) {
	      for (let cb of $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks) {
	        cb();
	      }

	      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks.clear();
	    }
	  };

	  document.body.addEventListener('transitionrun', onTransitionStart);
	  document.body.addEventListener('transitionend', onTransitionEnd);
	}

	if (typeof document !== 'undefined') {
	  if (document.readyState !== 'loading') {
	    $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents();
	  } else {
	    document.addEventListener('DOMContentLoaded', $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents);
	  }
	}

	function runAfterTransition(fn) {
	  // Wait one frame to see if an animation starts, e.g. a transition on mount.
	  requestAnimationFrame(() => {
	    // If no transitions are running, call the function immediately.
	    // Otherwise, add it to a list of callbacks to run at the end of the animation.
	    if ($b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.size === 0) {
	      fn();
	    } else {
	      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks.add(fn);
	    }
	  });
	}
	function useGlobalListeners() {
	  let globalListeners = _react.useRef(new Map());
	  let addGlobalListener = _react.useCallback((eventTarget, type, listener, options) => {
	    globalListeners.current.set(listener, {
	      type,
	      eventTarget,
	      options
	    });
	    eventTarget.addEventListener(type, listener, options);
	  }, []);
	  let removeGlobalListener = _react.useCallback((eventTarget, type, listener, options) => {
	    eventTarget.removeEventListener(type, listener, options);
	    globalListeners.current.delete(listener);
	  }, []);
	  let removeAllGlobalListeners = _react.useCallback(() => {
	    globalListeners.current.forEach((value, key) => {
	      removeGlobalListener(value.eventTarget, value.type, key, value.options);
	    });
	  }, [removeGlobalListener]); // eslint-disable-next-line arrow-body-style

	  _react.useEffect(() => {
	    return removeAllGlobalListeners;
	  }, [removeAllGlobalListeners]);
	  return {
	    addGlobalListener,
	    removeGlobalListener,
	    removeAllGlobalListeners
	  };
	}

	/**
	 * Merges aria-label and aria-labelledby into aria-labelledby when both exist.
	 * @param props - Aria label props.
	 * @param defaultLabel - Default value for aria-label when not present.
	 */
	function useLabels(props, defaultLabel) {
	  let {
	    id,
	    'aria-label': label,
	    'aria-labelledby': labelledBy
	  } = props; // If there is both an aria-label and aria-labelledby,
	  // combine them by pointing to the element itself.

	  id = useId(id);

	  if (labelledBy && label) {
	    let ids = new Set([...labelledBy.trim().split(/\s+/), id]);
	    labelledBy = [...ids].join(' ');
	  } else if (labelledBy) {
	    labelledBy = labelledBy.trim().split(/\s+/).join(' ');
	  } // If no labels are provided, use the default


	  if (!label && !labelledBy && defaultLabel) {
	    label = defaultLabel;
	  }

	  return {
	    id,
	    'aria-label': label,
	    'aria-labelledby': labelledBy
	  };
	}
	// Syncs ref from context with ref passed to hook
	function useSyncRef(context, ref) {
	  useLayoutEffect(() => {
	    if (context && context.ref && ref) {
	      context.ref.current = ref.current;
	      return () => {
	        context.ref.current = null;
	      };
	    }
	  }, [context, ref]);
	}
	function getScrollParent(node) {
	  while (node && !$a164c39662575b65a0b01a73e313e5$var$isScrollable(node)) {
	    node = node.parentElement;
	  }

	  return node || document.scrollingElement || document.documentElement;
	}

	function $a164c39662575b65a0b01a73e313e5$var$isScrollable(node) {
	  let style = window.getComputedStyle(node);
	  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
	}

	function $b0986c1243f71db8e992f67117a1ed9$var$testUserAgent(re) {
	  return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.userAgent) : false;
	}

	function $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(re) {
	  return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.platform) : false;
	}

	function isMac() {
	  return $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(/^Mac/);
	}
	function isIPhone() {
	  return $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(/^iPhone/);
	}
	function isIPad() {
	  return $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
	  isMac() && navigator.maxTouchPoints > 1;
	}
	function isIOS() {
	  return isIPhone() || isIPad();
	}
	function isWebKit() {
	  return $b0986c1243f71db8e992f67117a1ed9$var$testUserAgent(/AppleWebKit/) && !isChrome();
	}
	function isChrome() {
	  return $b0986c1243f71db8e992f67117a1ed9$var$testUserAgent(/Chrome/);
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	// https://en.wikipedia.org/wiki/Right-to-left
	const $d26e725ad56fbcb2c25f52b7de27$var$RTL_SCRIPTS = new Set(['Arab', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']);
	const $d26e725ad56fbcb2c25f52b7de27$var$RTL_LANGS = new Set(['ae', 'ar', 'arc', 'bcc', 'bqi', 'ckb', 'dv', 'fa', 'glk', 'he', 'ku', 'mzn', 'nqo', 'pnb', 'ps', 'sd', 'ug', 'ur', 'yi']);
	/**
	 * Determines if a locale is read right to left using [Intl.Locale]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale}.
	 */

	function $d26e725ad56fbcb2c25f52b7de27$export$isRTL(locale) {
	  // If the Intl.Locale API is available, use it to get the script for the locale.
	  // This is more accurate than guessing by language, since languages can be written in multiple scripts.
	  // @ts-ignore
	  if (Intl.Locale) {
	    // @ts-ignore
	    let script = new Intl.Locale(locale).maximize().script;
	    return $d26e725ad56fbcb2c25f52b7de27$var$RTL_SCRIPTS.has(script);
	  } // If not, just guess by the language (first part of the locale)


	  let lang = locale.split('-')[0];
	  return $d26e725ad56fbcb2c25f52b7de27$var$RTL_LANGS.has(lang);
	}

	/**
	 * Gets the locale setting of the browser.
	 */
	function $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale() {
	  // @ts-ignore
	  let locale = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
	  return {
	    locale,
	    direction: $d26e725ad56fbcb2c25f52b7de27$export$isRTL(locale) ? 'rtl' : 'ltr'
	  };
	}

	let $e851d0b81d46abd5f971c8e95c27f1$var$currentLocale = $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale();
	let $e851d0b81d46abd5f971c8e95c27f1$var$listeners = new Set();

	function $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale() {
	  $e851d0b81d46abd5f971c8e95c27f1$var$currentLocale = $e851d0b81d46abd5f971c8e95c27f1$export$getDefaultLocale();

	  for (let listener of $e851d0b81d46abd5f971c8e95c27f1$var$listeners) {
	    listener($e851d0b81d46abd5f971c8e95c27f1$var$currentLocale);
	  }
	}
	/**
	 * Returns the current browser/system language, and updates when it changes.
	 */


	function $e851d0b81d46abd5f971c8e95c27f1$export$useDefaultLocale() {
	  let isSSR = useIsSSR();
	  let [defaultLocale, setDefaultLocale] = _react.useState($e851d0b81d46abd5f971c8e95c27f1$var$currentLocale);
	  _react.useEffect(() => {
	    if ($e851d0b81d46abd5f971c8e95c27f1$var$listeners.size === 0) {
	      window.addEventListener('languagechange', $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale);
	    }

	    $e851d0b81d46abd5f971c8e95c27f1$var$listeners.add(setDefaultLocale);
	    return () => {
	      $e851d0b81d46abd5f971c8e95c27f1$var$listeners.delete(setDefaultLocale);

	      if ($e851d0b81d46abd5f971c8e95c27f1$var$listeners.size === 0) {
	        window.removeEventListener('languagechange', $e851d0b81d46abd5f971c8e95c27f1$var$updateLocale);
	      }
	    };
	  }, []); // We cannot determine the browser's language on the server, so default to
	  // en-US. This will be updated after hydration on the client to the correct value.

	  if (isSSR) {
	    return {
	      locale: 'en-US',
	      direction: 'ltr'
	    };
	  }

	  return defaultLocale;
	}

	const $cff8541df3b5c83067b2ab3ee0d20$var$I18nContext = /*#__PURE__*/_react__default["default"].createContext(null);
	/**
	 * Returns the current locale and layout direction.
	 */

	function useLocale() {
	  let defaultLocale = $e851d0b81d46abd5f971c8e95c27f1$export$useDefaultLocale();
	  let context = _react.useContext($cff8541df3b5c83067b2ab3ee0d20$var$I18nContext);
	  return context || defaultLocale;
	}
	let $a4045a18d7252bf6de9312e613c4e$var$cache = new Map();
	/**
	 * Provides localized string collation for the current locale. Automatically updates when the locale changes,
	 * and handles caching of the collator for performance.
	 * @param options - Collator options.
	 */

	function useCollator(options) {
	  let {
	    locale
	  } = useLocale();
	  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : '');

	  if ($a4045a18d7252bf6de9312e613c4e$var$cache.has(cacheKey)) {
	    return $a4045a18d7252bf6de9312e613c4e$var$cache.get(cacheKey);
	  }

	  let formatter = new Intl.Collator(locale, options);
	  $a4045a18d7252bf6de9312e613c4e$var$cache.set(cacheKey, formatter);
	  return formatter;
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function createDOMRef(ref) {
	  return {
	    UNSAFE_getDOMNode() {
	      return ref.current;
	    }

	  };
	}
	function createFocusableRef(domRef, focusableRef) {
	  if (focusableRef === void 0) {
	    focusableRef = domRef;
	  }

	  return _extends({}, createDOMRef(domRef), {
	    focus() {
	      if (focusableRef.current) {
	        focusableRef.current.focus();
	      }
	    }

	  });
	}
	function useDOMRef(ref) {
	  let domRef = _react.useRef(null);
	  _react.useImperativeHandle(ref, () => createDOMRef(domRef));
	  return domRef;
	}
	function useFocusableRef(ref, focusableRef) {
	  let domRef = _react.useRef(null);
	  _react.useImperativeHandle(ref, () => createFocusableRef(domRef, focusableRef));
	  return domRef;
	}
	function unwrapDOMRef(ref) {
	  return {
	    get current() {
	      return ref.current && ref.current.UNSAFE_getDOMNode();
	    }

	  };
	}
	function useUnwrapDOMRef(ref) {
	  return _react.useMemo(() => unwrapDOMRef(ref), [ref]);
	}

	const $f838b598b03ac1d3fd85d427f7d189$var$Context = /*#__PURE__*/_react__default["default"].createContext(null);

	$f838b598b03ac1d3fd85d427f7d189$var$Context.displayName = 'BreakpointContext';
	const baseStyleProps = {
	  margin: ['margin', dimensionValue],
	  marginStart: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('marginLeft', 'marginRight'), dimensionValue],
	  marginEnd: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('marginRight', 'marginLeft'), dimensionValue],
	  // marginLeft: ['marginLeft', dimensionValue],
	  // marginRight: ['marginRight', dimensionValue],
	  marginTop: ['marginTop', dimensionValue],
	  marginBottom: ['marginBottom', dimensionValue],
	  marginX: [['marginLeft', 'marginRight'], dimensionValue],
	  marginY: [['marginTop', 'marginBottom'], dimensionValue],
	  width: ['width', dimensionValue],
	  height: ['height', dimensionValue],
	  minWidth: ['minWidth', dimensionValue],
	  minHeight: ['minHeight', dimensionValue],
	  maxWidth: ['maxWidth', dimensionValue],
	  maxHeight: ['maxHeight', dimensionValue],
	  isHidden: ['display', $e8ff0135e78060c4cd2a3148981a7a3$var$hiddenValue],
	  alignSelf: ['alignSelf', passthroughStyle],
	  justifySelf: ['justifySelf', passthroughStyle],
	  position: ['position', $e8ff0135e78060c4cd2a3148981a7a3$var$anyValue],
	  zIndex: ['zIndex', $e8ff0135e78060c4cd2a3148981a7a3$var$anyValue],
	  top: ['top', dimensionValue],
	  bottom: ['bottom', dimensionValue],
	  start: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('left', 'right'), dimensionValue],
	  end: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('right', 'left'), dimensionValue],
	  left: ['left', dimensionValue],
	  right: ['right', dimensionValue],
	  order: ['order', $e8ff0135e78060c4cd2a3148981a7a3$var$anyValue],
	  flex: ['flex', $e8ff0135e78060c4cd2a3148981a7a3$var$flexValue],
	  flexGrow: ['flexGrow', passthroughStyle],
	  flexShrink: ['flexShrink', passthroughStyle],
	  flexBasis: ['flexBasis', passthroughStyle],
	  gridArea: ['gridArea', passthroughStyle],
	  gridColumn: ['gridColumn', passthroughStyle],
	  gridColumnEnd: ['gridColumnEnd', passthroughStyle],
	  gridColumnStart: ['gridColumnStart', passthroughStyle],
	  gridRow: ['gridRow', passthroughStyle],
	  gridRowEnd: ['gridRowEnd', passthroughStyle],
	  gridRowStart: ['gridRowStart', passthroughStyle]
	};
	_extends({}, baseStyleProps, {
	  backgroundColor: ['backgroundColor', $e8ff0135e78060c4cd2a3148981a7a3$var$backgroundColorValue],
	  borderWidth: ['borderWidth', $e8ff0135e78060c4cd2a3148981a7a3$var$borderSizeValue],
	  borderStartWidth: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('borderLeftWidth', 'borderRightWidth'), $e8ff0135e78060c4cd2a3148981a7a3$var$borderSizeValue],
	  borderEndWidth: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('borderRightWidth', 'borderLeftWidth'), $e8ff0135e78060c4cd2a3148981a7a3$var$borderSizeValue],
	  borderLeftWidth: ['borderLeftWidth', $e8ff0135e78060c4cd2a3148981a7a3$var$borderSizeValue],
	  borderRightWidth: ['borderRightWidth', $e8ff0135e78060c4cd2a3148981a7a3$var$borderSizeValue],
	  borderTopWidth: ['borderTopWidth', $e8ff0135e78060c4cd2a3148981a7a3$var$borderSizeValue],
	  borderBottomWidth: ['borderBottomWidth', $e8ff0135e78060c4cd2a3148981a7a3$var$borderSizeValue],
	  borderXWidth: [['borderLeftWidth', 'borderRightWidth'], $e8ff0135e78060c4cd2a3148981a7a3$var$borderSizeValue],
	  borderYWidth: [['borderTopWidth', 'borderBottomWidth'], $e8ff0135e78060c4cd2a3148981a7a3$var$borderSizeValue],
	  borderColor: ['borderColor', $e8ff0135e78060c4cd2a3148981a7a3$var$borderColorValue],
	  borderStartColor: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('borderLeftColor', 'borderRightColor'), $e8ff0135e78060c4cd2a3148981a7a3$var$borderColorValue],
	  borderEndColor: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('borderRightColor', 'borderLeftColor'), $e8ff0135e78060c4cd2a3148981a7a3$var$borderColorValue],
	  borderLeftColor: ['borderLeftColor', $e8ff0135e78060c4cd2a3148981a7a3$var$borderColorValue],
	  borderRightColor: ['borderRightColor', $e8ff0135e78060c4cd2a3148981a7a3$var$borderColorValue],
	  borderTopColor: ['borderTopColor', $e8ff0135e78060c4cd2a3148981a7a3$var$borderColorValue],
	  borderBottomColor: ['borderBottomColor', $e8ff0135e78060c4cd2a3148981a7a3$var$borderColorValue],
	  borderXColor: [['borderLeftColor', 'borderRightColor'], $e8ff0135e78060c4cd2a3148981a7a3$var$borderColorValue],
	  borderYColor: [['borderTopColor', 'borderBottomColor'], $e8ff0135e78060c4cd2a3148981a7a3$var$borderColorValue],
	  borderRadius: ['borderRadius', $e8ff0135e78060c4cd2a3148981a7a3$var$borderRadiusValue],
	  borderTopStartRadius: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('borderTopLeftRadius', 'borderTopRightRadius'), $e8ff0135e78060c4cd2a3148981a7a3$var$borderRadiusValue],
	  borderTopEndRadius: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('borderTopRightRadius', 'borderTopLeftRadius'), $e8ff0135e78060c4cd2a3148981a7a3$var$borderRadiusValue],
	  borderBottomStartRadius: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('borderBottomLeftRadius', 'borderBottomRightRadius'), $e8ff0135e78060c4cd2a3148981a7a3$var$borderRadiusValue],
	  borderBottomEndRadius: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('borderBottomRightRadius', 'borderBottomLeftRadius'), $e8ff0135e78060c4cd2a3148981a7a3$var$borderRadiusValue],
	  borderTopLeftRadius: ['borderTopLeftRadius', $e8ff0135e78060c4cd2a3148981a7a3$var$borderRadiusValue],
	  borderTopRightRadius: ['borderTopRightRadius', $e8ff0135e78060c4cd2a3148981a7a3$var$borderRadiusValue],
	  borderBottomLeftRadius: ['borderBottomLeftRadius', $e8ff0135e78060c4cd2a3148981a7a3$var$borderRadiusValue],
	  borderBottomRightRadius: ['borderBottomRightRadius', $e8ff0135e78060c4cd2a3148981a7a3$var$borderRadiusValue],
	  padding: ['padding', dimensionValue],
	  paddingStart: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('paddingLeft', 'paddingRight'), dimensionValue],
	  paddingEnd: [$e8ff0135e78060c4cd2a3148981a7a3$var$rtl('paddingRight', 'paddingLeft'), dimensionValue],
	  paddingLeft: ['paddingLeft', dimensionValue],
	  paddingRight: ['paddingRight', dimensionValue],
	  paddingTop: ['paddingTop', dimensionValue],
	  paddingBottom: ['paddingBottom', dimensionValue],
	  paddingX: [['paddingLeft', 'paddingRight'], dimensionValue],
	  paddingY: [['paddingTop', 'paddingBottom'], dimensionValue],
	  overflow: ['overflow', passthroughStyle]
	});

	function $e8ff0135e78060c4cd2a3148981a7a3$var$rtl(ltr, rtl) {
	  return direction => direction === 'rtl' ? rtl : ltr;
	}

	const $e8ff0135e78060c4cd2a3148981a7a3$var$UNIT_RE = /(%|px|em|rem|vw|vh|auto|cm|mm|in|pt|pc|ex|ch|rem|vmin|vmax|fr)$/;
	const $e8ff0135e78060c4cd2a3148981a7a3$var$FUNC_RE = /^\s*\w+\(/;
	const $e8ff0135e78060c4cd2a3148981a7a3$var$SPECTRUM_VARIABLE_RE = /(static-)?size-\d+|single-line-(height|width)/g;
	function dimensionValue(value) {
	  if (typeof value === 'number') {
	    return value + 'px';
	  }

	  if ($e8ff0135e78060c4cd2a3148981a7a3$var$UNIT_RE.test(value)) {
	    return value;
	  }

	  if ($e8ff0135e78060c4cd2a3148981a7a3$var$FUNC_RE.test(value)) {
	    return value.replace($e8ff0135e78060c4cd2a3148981a7a3$var$SPECTRUM_VARIABLE_RE, 'var(--spectrum-global-dimension-$&, var(--spectrum-alias-$&))');
	  }

	  return "var(--spectrum-global-dimension-" + value + ", var(--spectrum-alias-" + value + "))";
	}

	function $e8ff0135e78060c4cd2a3148981a7a3$var$colorValue(value, type) {
	  if (type === void 0) {
	    type = 'default';
	  }

	  return "var(--spectrum-global-color-" + value + ", var(--spectrum-semantic-" + value + "-color-" + type + "))";
	}

	function $e8ff0135e78060c4cd2a3148981a7a3$var$backgroundColorValue(value) {
	  return "var(--spectrum-alias-background-color-" + value + ", " + $e8ff0135e78060c4cd2a3148981a7a3$var$colorValue(value, 'background') + ")";
	}

	function $e8ff0135e78060c4cd2a3148981a7a3$var$borderColorValue(value) {
	  if (value === 'default') {
	    return 'var(--spectrum-alias-border-color)';
	  }

	  return "var(--spectrum-alias-border-color-" + value + ", " + $e8ff0135e78060c4cd2a3148981a7a3$var$colorValue(value, 'border') + ")";
	}

	function $e8ff0135e78060c4cd2a3148981a7a3$var$borderSizeValue(value) {
	  return "var(--spectrum-alias-border-size-" + value + ")";
	}

	function $e8ff0135e78060c4cd2a3148981a7a3$var$borderRadiusValue(value) {
	  return "var(--spectrum-alias-border-radius-" + value + ")";
	}

	function $e8ff0135e78060c4cd2a3148981a7a3$var$hiddenValue(value) {
	  return value ? 'none' : undefined;
	}

	function $e8ff0135e78060c4cd2a3148981a7a3$var$anyValue(value) {
	  return value;
	}

	function $e8ff0135e78060c4cd2a3148981a7a3$var$flexValue(value) {
	  if (typeof value === 'boolean') {
	    return value ? '1' : undefined;
	  }

	  return '' + value;
	}
	function passthroughStyle(value) {
	  return value;
	}
	// This hook works like `useState`, but when setting the value, you pass a generator function
	// that can yield multiple values. Each yielded value updates the state and waits for the next
	// layout effect, then continues the generator. This allows sequential updates to state to be
	// written linearly.
	function useValueEffect(defaultValue) {
	  let [value, setValue] = _react.useState(defaultValue);
	  let effect = _react.useRef(null); // Store the function in a ref so we can always access the current version
	  // which has the proper `value` in scope.

	  let nextRef = _react.useRef(null);

	  nextRef.current = () => {
	    // Run the generator to the next yield.
	    let newValue = effect.current.next(); // If the generator is done, reset the effect.

	    if (newValue.done) {
	      effect.current = null;
	      return;
	    } // If the value is the same as the current value,
	    // then continue to the next yield. Otherwise,
	    // set the value in state and wait for the next layout effect.


	    if (value === newValue.value) {
	      nextRef.current();
	    } else {
	      setValue(newValue.value);
	    }
	  };

	  useLayoutEffect(() => {
	    // If there is an effect currently running, continue to the next yield.
	    if (effect.current) {
	      nextRef.current();
	    }
	  });
	  let queue = _react.useCallback(fn => {
	    effect.current = fn();
	    nextRef.current();
	  }, [effect, nextRef]);
	  return [value, queue];
	}

	const WithDomRef = /*#__PURE__*/_react.forwardRef(function WithDomRef({
	  children
	}, ref) {
	  return /*#__PURE__*/_react__namespace.cloneElement(children, {
	    ref: useDOMRef(ref)
	  });
	});

	const _excluded$K = ["as", "className", "UNSAFE_className", "role", "noFocusRing", "styled", "css"];
	const defaultElement$c = 'div';
	const Box = /*#__PURE__*/_react.forwardRef(function Box(_ref, ref) {
	  let {
	    as,
	    className,
	    UNSAFE_className,
	    role,
	    noFocusRing,
	    styled,
	    css
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$K);

	  let classNames = ''; // custom pipe to just make accumulating the generated classNames, and pulling out props, easier

	  const pipe = (...fns) => x => fns.reduce((v, f) => {
	    const {
	      props,
	      className
	    } = f(v);
	    classNames += ` ${className}`;
	    return props;
	  }, x); // run the props through all the enhancers - what we're left with is the extra props that we're not specifically handling
	  // these get passed on to the underlying Element as is


	  const restProps = pipe(backdropProps, layoutProps, flexProps, positionProps, sizeProps, typographyProps, marginProps, paddingProps, colorProps, borderProps, ringProps, shadowProps, interactivityProps, transformProps)(props);

	  if (css) {
	    twCss(css);
	  }

	  const cleansedClassnames = cleanClassnames(classNames);
	  const propClassNames = cleansedClassnames.trim();
	  const Element = as || defaultElement$c;
	  return jsxRuntime.jsx(Element, Object.assign({
	    ref: ref
	  }, restProps, {
	    role: role,
	    className: tx(styled, className, UNSAFE_className, propClassNames, {
	      'sl-group': role === 'group',
	      'sl-no-focus-ring': noFocusRing
	    }) || undefined
	  }), void 0);
	}); // @ts-ignore

	Box.displayName = 'Box'; // @ts-ignore

	Box.defaultProps = {
	  as: defaultElement$c
	};
	const cleanClassnames = memoize__default["default"](classNames => {
	  return classNames.split('\n').filter(v => {
	    const value = v.trim();
	    return !(value === 'false' || value === 'null' || value === 'undefined');
	  }).join(' ');
	});

	const _excluded$J = ["size", "className", "style"];
	const containerSizes = {
	  xs: {
	    maxWidth: 300,
	    p: 3
	  },
	  sm: {
	    maxWidth: 640,
	    p: 3
	  },
	  md: {
	    maxWidth: 950,
	    p: 3
	  },
	  lg: {
	    maxWidth: 1280,
	    p: 5
	  },
	  xl: {
	    maxWidth: 1450,
	    p: 5
	  },
	  full: {
	    p: 5
	  }
	};
	const Container = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef(function Container(_ref, ref) {
	  let {
	    size = 'full',
	    className,
	    style = {}
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$J);

	  return jsxRuntime.jsx(Box, Object.assign({
	    ref: ref,
	    px: containerSizes[size].p,
	    mx: "auto",
	    w: "full",
	    style: Object.assign({
	      maxWidth: containerSizes[size].maxWidth
	    }, style),
	    className: cn__default["default"]('Container', className)
	  }, props), void 0);
	}));

	const _excluded$I = ["className", "children"];
	const Article = /*#__PURE__*/_react.memo(function Article(_ref) {
	  let {
	    className,
	    children
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$I);

	  return jsxRuntime.jsx(Container, Object.assign({
	    as: "article",
	    className: cn__default["default"]('sl-article', className),
	    size: "md",
	    py: 20
	  }, props, {
	    children: children
	  }), void 0);
	});

	/* well known padding hack: https://css-tricks.com/aspect-ratio-boxes/ */

	const aspectRatioCSS = twCss({
	  '&::before': {
	    '@apply': CX('block', 'h-0'),
	    content: '""',
	    'padding-bottom': 'calc(1 / var(--ratio) * 100%)'
	  },
	  '& > *:not(style)': {
	    '@apply': CX('overflow-hidden', 'absolute', 'inset-0', 'flex', 'justify-center', 'items-center', 'w-full', 'h-full')
	  },
	  '& > img, & > video': {
	    '@apply': CX('object-cover')
	  }
	});

	const _excluded$H = ["ratio", "className", "children", "style"];
	function AspectRatio(_ref) {
	  let {
	    ratio = 4 / 3,
	    className,
	    children,
	    style = {}
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$H);

	  // enforce single child
	  const child = _react__namespace.Children.only(children);
	  return jsxRuntime.jsx(Box, Object.assign({}, props, {
	    pos: "relative",
	    className: cn__default["default"]('sl-aspect-ratio', className),
	    css: aspectRatioCSS,
	    style: Object.assign({}, style, {
	      // @ts-expect-error react css typings intentionally don't include index type, this is expected
	      '--ratio': ratio
	    }),
	    children: child
	  }), void 0);
	}

	const _excluded$G = ["align", "justify", "wrap", "direction", "grow", "shrink", "inline"];
	const defaultElement$b = 'div';
	const Flex = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    align,
	    justify,
	    wrap,
	    direction,
	    grow,
	    shrink,
	    inline
	  } = _ref,
	      restProps = _objectWithoutPropertiesLoose$1(_ref, _excluded$G);

	  const remapped = {
	    alignItems: align,
	    justifyContent: justify,
	    flexWrap: wrap,
	    flexDirection: direction,
	    flexGrow: grow,
	    flexShrink: shrink
	  };
	  return jsxRuntime.jsx(Box, Object.assign({
	    as: defaultElement$b,
	    ref: ref,
	    display: inline ? 'inline-flex' : 'flex'
	  }, remapped, restProps), void 0);
	}));

	const _excluded$F = ["className", "icon"];
	const useIconStore = create__default["default"](set => ({
	  defaultStyle: 'fas',
	  setDefaultStyle: style => set(state => Object.assign({}, state, {
	    defaultStyle: style
	  }))
	}));
	const _className = 'sl-icon';
	let addedToLibrary = false;

	const initLibrary = () => {
	  fontawesomeSvgCore.library.add(freeSolidSvgIcons.faCaretDown, freeSolidSvgIcons.faCaretLeft, freeSolidSvgIcons.faCaretRight, freeSolidSvgIcons.faCaretUp, freeSolidSvgIcons.faCheck, freeSolidSvgIcons.faChevronDown, freeSolidSvgIcons.faChevronLeft, freeSolidSvgIcons.faChevronRight, freeSolidSvgIcons.faChevronUp, freeSolidSvgIcons.faCopy, freeSolidSvgIcons.faExclamationCircle, freeSolidSvgIcons.faExclamationTriangle, freeSolidSvgIcons.faExpandArrowsAlt, freeSolidSvgIcons.faExternalLinkAlt, freeSolidSvgIcons.faInfoCircle, freeSolidSvgIcons.faLink, freeSolidSvgIcons.faSort);
	  addedToLibrary = true;
	};

	const Icon = /*#__PURE__*/_react.memo(function Icon(_ref) {
	  let {
	    className,
	    icon
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$F);

	  const style = useIconStore(state => state.defaultStyle);
	  const iconProp = normalizeIconArgs(icon, style);
	  /**
	   * So that if Icon is imported, the library stuff is not tree-shaken out. If `library.add` was hoisted out of this
	   * function then it would be shaken out at consumer build time.
	   */

	  if (!addedToLibrary) initLibrary();

	  if (isIconDefinition(iconProp) || fontawesomeSvgCore.findIconDefinition(iconProp)) {
	    return jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, Object.assign({
	      className: cn__default["default"](_className, className),
	      icon: iconProp
	    }, props), void 0);
	  } // if the icon is not bundled with the mosaic core (via library in Icon/index.ts), then render fallback <i> in
	  // case font awesome kit or css is loaded on page


	  return jsxRuntime.jsx("i", {
	    role: "img",
	    "aria-hidden": "true",
	    className: cn__default["default"](_className, className, iconProp.prefix, `fa-${iconProp.iconName}`, {
	      'fa-spin': props.spin,
	      'fa-pulse': props.pulse,
	      'fa-fw': props.fixedWidth,
	      [`fa-${props.size}`]: props.size
	    }),
	    style: props.style
	  }, void 0);
	});
	function isIconDefinition(prop) {
	  if (prop && typeof prop === 'object' && prop.hasOwnProperty('icon')) return true;
	  return false;
	}
	function isIconProp(prop) {
	  if (prop && typeof prop === 'string' || Array.isArray(prop)) return true;
	  if (prop && typeof prop === 'object' && prop.hasOwnProperty('iconName')) return true;
	  return false;
	} // Adapted from https://github.com/FortAwesome/react-fontawesome/blob/master/src/utils/normalize-icon-args.js
	// Adds defaultPrefix and adjusts to fix some typings issues

	function normalizeIconArgs(icon, defaultPrefix = 'fas') {
	  // if the icon is null, there's nothing to do
	  if (icon === null) {
	    return null;
	  }

	  if (Array.isArray(icon)) {
	    // use the first item as prefix, second as icon name
	    return {
	      prefix: icon[0],
	      iconName: icon[1]
	    };
	  } // if the icon is an object and has a prefix and an icon name, return it


	  if (typeof icon === 'object' && icon.iconName) {
	    return icon;
	  } // if it's a string, use it as the icon name


	  if (typeof icon === 'string') {
	    return {
	      prefix: defaultPrefix,
	      iconName: icon
	    };
	  }
	}

	const _excluded$E = ["size"];
	const defaultElement$a = 'span';
	const Text = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    size
	  } = _ref,
	      restProps = _objectWithoutPropertiesLoose$1(_ref, _excluded$E);

	  return jsxRuntime.jsx(Box, Object.assign({
	    as: defaultElement$a,
	    ref: ref,
	    fontSize: size
	  }, restProps), void 0);
	}));

	const _excluded$D = ["className", "size", "bg", "icon", "letter", "blank"];
	const sizes$9 = {
	  lg: ['md', 8],
	  md: ['sm', 6],
	  sm: ['xs', 5]
	};
	const Avatar = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef(function Avatar(props, ref) {
	  // TODO: the union types make spreading out rest and passing through to box difficult, since we can't
	  // easily pull out letter, blank, etc. they're getting sent to box right now...
	  // @ts-expect-error
	  let {
	    className,
	    size = 'md',
	    bg,
	    icon,
	    letter
	  } = props,
	      rest = _objectWithoutPropertiesLoose$1(props, _excluded$D);

	  let extraProps = {};

	  if (bg) {
	    extraProps.style = {
	      color: 'white',
	      backgroundColor: bg
	    };
	  }

	  let innerElem;

	  if (icon) {
	    innerElem = jsxRuntime.jsx(Icon, {
	      icon: icon
	    }, void 0);
	  } else if (letter) {
	    innerElem = jsxRuntime.jsx(Text, {
	      children: letter
	    }, void 0);
	  }

	  return jsxRuntime.jsx(Flex, Object.assign({
	    ref: ref,
	    className: cn__default["default"]('sl-avatar', className),
	    align: "center",
	    justify: "center",
	    h: sizes$9[size][0],
	    w: sizes$9[size][1],
	    rounded: "full"
	  }, rest, extraProps, {
	    children: innerElem
	  }), void 0);
	}));

	const badgeStyle = twStyle({
	  base: twCss({
	    '@apply': CX('inline-flex', 'items-center', 'outline-none', 'border'),
	    '& a': {
	      '@apply': CX.$combine(CX('text-muted'), CX.hover('hover:text-body', 'hover:cursor-pointer'))
	    }
	  })
	});

	const sizes$8 = {
	  lg: {
	    h: 'md',
	    px: 3,
	    py: 0.5,
	    fontSize: 'lg',
	    rounded: 'full',
	    leftIconMx: -2,
	    leftIconMr: 2,
	    rightIconMl: 1,
	    rightIconMr: -0.5,
	    iconSize: '15px'
	  },
	  md: {
	    h: 'sm',
	    px: 2,
	    py: 0.5,
	    fontSize: 'base',
	    rounded: 'full',
	    leftIconMx: -1,
	    leftIconMr: 1.5,
	    rightIconMl: 0.5,
	    rightIconMr: -0.5,
	    iconSize: '13px'
	  },
	  sm: {
	    h: 'xs',
	    px: 1.5,
	    py: 0.5,
	    fontSize: 'sm',
	    rounded: 'full',
	    leftIconMx: -1,
	    leftIconMr: 1,
	    rightIconMl: 0.5,
	    rightIconMr: -0.5,
	    iconSize: '13px'
	  }
	};
	const variants$6 = {
	  solid: {
	    default: {
	      border: 0,
	      color: 'paragraph',
	      fontSize: 'paragraph-tiny',
	      bg: {
	        default: 'canvas-100'
	      },
	      borderColor: {
	        default: 'input'
	      }
	    },
	    success: {
	      color: 'on-success',
	      borderColor: 'success',
	      bg: {
	        default: 'success'
	      }
	    },
	    warning: {
	      color: 'on-warning',
	      borderColor: 'warning',
	      bg: {
	        default: 'warning'
	      }
	    },
	    danger: {
	      color: 'on-danger',
	      borderColor: 'danger',
	      bg: {
	        default: 'danger'
	      }
	    }
	  },
	  minimal: {
	    default: {
	      color: 'paragraph',
	      fontSize: 'paragraph-tiny',
	      bg: {
	        default: 'transparent'
	      },
	      borderColor: 'transparent'
	    },
	    success: {
	      color: 'success'
	    },
	    warning: {
	      color: 'warning'
	    },
	    danger: {
	      color: 'danger'
	    }
	  },
	  outline: {
	    default: {
	      color: 'paragraph',
	      fontSize: 'paragraph-tiny',
	      bg: {
	        default: 'canvas'
	      },
	      borderColor: {
	        default: 'input'
	      },
	      ring: false
	    },
	    success: {
	      borderColor: 'success',
	      color: 'success'
	    },
	    warning: {
	      borderColor: 'warning',
	      color: 'warning'
	    },
	    danger: {
	      borderColor: 'danger',
	      color: 'danger'
	    }
	  }
	};

	const _excluded$C = ["appearance", "size", "as", "className", "intent", "icon", "iconRight", "onRemove", "children"];
	const defaultElement$9 = 'span';
	const Badge = /*#__PURE__*/_react__namespace.memo( /*#__PURE__*/_react.forwardRef(function Input(_ref, ref) {
	  let {
	    appearance = 'solid',
	    size = 'md',
	    as = defaultElement$9,
	    className,
	    intent,
	    icon,
	    iconRight,
	    onRemove,
	    children
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$C);

	  const {
	    remainingProps
	  } = splitBoxProps(props);
	  const stateProps = Object.assign({}, variants$6[appearance].default, variants$6[appearance][intent]);
	  return jsxRuntime.jsx(Box, Object.assign({
	    ref: ref,
	    as: as,
	    h: sizes$8[size].h,
	    px: sizes$8[size].px,
	    py: sizes$8[size].py,
	    fontSize: sizes$8[size].fontSize,
	    rounded: sizes$8[size].rounded,
	    borderColor: "on-primary",
	    className: cn__default["default"]('sl-badge', className, {
	      'sl-badge--remove': !!onRemove
	    })
	  }, stateProps, remainingProps, {
	    styled: badgeStyle(),
	    children: jsxRuntime.jsxs(Flex, {
	      justifyItems: "start",
	      alignItems: "center",
	      children: [icon ? jsxRuntime.jsx(BadgeIcon, {
	        icon: icon,
	        size: size,
	        hasContent: !!children
	      }, void 0) : null, jsxRuntime.jsx(Flex, {
	        children: children
	      }, void 0), iconRight && !onRemove ? jsxRuntime.jsx(BadgeRightIcon, {
	        icon: iconRight,
	        size: size
	      }, void 0) : null, onRemove ? jsxRuntime.jsx(Box, {
	        as: 'a',
	        onClick: onRemove,
	        ml: 0.5,
	        children: jsxRuntime.jsx(BadgeRightIcon, {
	          icon: ['fas', 'times-circle'],
	          size: size
	        }, void 0)
	      }, void 0) : null]
	    }, void 0)
	  }), void 0);
	}));

	const BadgeIcon = ({
	  icon,
	  size,
	  hasContent,
	  pulse
	}) => {
	  let elem = icon;

	  if (isIconProp(icon)) {
	    elem = jsxRuntime.jsx(Icon, {
	      icon: icon,
	      style: {
	        fontSize: sizes$8[size].iconSize
	      },
	      pulse: pulse,
	      fixedWidth: true
	    }, void 0);
	  }

	  return jsxRuntime.jsx(Box, {
	    "data-testid": "icon",
	    mr: hasContent ? sizes$8[size].leftIconMr : undefined,
	    mx: hasContent ? undefined : sizes$8[size].leftIconMx,
	    children: elem
	  }, void 0);
	};

	const BadgeRightIcon = ({
	  icon,
	  size
	}) => {
	  let elem = icon;

	  if (isIconProp(icon)) {
	    elem = jsxRuntime.jsx(Icon, {
	      icon: icon,
	      style: {
	        fontSize: sizes$8[size].iconSize
	      },
	      fixedWidth: true
	    }, void 0);
	  }

	  return jsxRuntime.jsx(Box, {
	    "data-testid": "iconright",
	    ml: sizes$8[size].rightIconMl,
	    mr: sizes$8[size].rightIconMr,
	    children: elem
	  }, void 0);
	};

	let $e17c9db826984f8ab8e5d837bf0b8$var$state = 'default';
	let $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = '';

	function $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection() {
	  if ($e17c9db826984f8ab8e5d837bf0b8$var$state === 'default') {
	    $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
	    document.documentElement.style.webkitUserSelect = 'none';
	  }

	  $e17c9db826984f8ab8e5d837bf0b8$var$state = 'disabled';
	}

	function $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection() {
	  // If the state is already default, there's nothing to do.
	  // If it is restoring, then there's no need to queue a second restore.
	  if ($e17c9db826984f8ab8e5d837bf0b8$var$state !== 'disabled') {
	    return;
	  }

	  $e17c9db826984f8ab8e5d837bf0b8$var$state = 'restoring'; // There appears to be a delay on iOS where selection still might occur
	  // after pointer up, so wait a bit before removing user-select.

	  setTimeout(() => {
	    // Wait for any CSS transitions to complete so we don't recompute style
	    // for the whole page in the middle of the animation and cause jank.
	    runAfterTransition(() => {
	      // Avoid race conditions
	      if ($e17c9db826984f8ab8e5d837bf0b8$var$state === 'restoring') {
	        if (document.documentElement.style.webkitUserSelect === 'none') {
	          document.documentElement.style.webkitUserSelect = $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect || '';
	        }

	        $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = '';
	        $e17c9db826984f8ab8e5d837bf0b8$var$state = 'default';
	      }
	    });
	  }, 300);
	}

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	// Original licensing for the following method can be found in the
	// NOTICE file in the root directory of this source tree.
	// See https://github.com/facebook/react/blob/3c713d513195a53788b3f8bb4b70279d68b15bcc/packages/react-interactions/events/src/dom/shared/index.js#L74-L87
	// Keyboards, Assistive Technologies, and element.click() all produce a "virtual"
	// click event. This is a method of inferring such clicks. Every browser except
	// IE 11 only sets a zero value of "detail" for click events that are "virtual".
	// However, IE 11 uses a zero value for all click events. For IE 11 we rely on
	// the quirk that it produces click events that are of type PointerEvent, and
	// where only the "virtual" click lacks a pointerType field.
	function $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(event) {
	  // JAWS/NVDA with Firefox.
	  if (event.mozInputSource === 0 && event.isTrusted) {
	    return true;
	  }

	  return event.detail === 0 && !event.pointerType;
	}

	const $a3ff51240de6f955c79cf17a88e349$export$PressResponderContext = /*#__PURE__*/_react__default["default"].createContext(null);

	$a3ff51240de6f955c79cf17a88e349$export$PressResponderContext.displayName = 'PressResponderContext';

	function $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(props) {
	  // Consume context from <PressResponder> and merge with props.
	  let context = _react.useContext($a3ff51240de6f955c79cf17a88e349$export$PressResponderContext);

	  if (context) {
	    let {
	      register
	    } = context,
	        contextProps = _objectWithoutPropertiesLoose(context, ["register"]);

	    props = mergeProps(contextProps, props);
	    register();
	  }

	  useSyncRef(context, props.ref);
	  return props;
	}
	/**
	 * Handles press interactions across mouse, touch, keyboard, and screen readers.
	 * It normalizes behavior across browsers and platforms, and handles many nuances
	 * of dealing with pointer and keyboard events.
	 */


	function usePress(props) {
	  let _usePressResponderCon = $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(props),
	      {
	    onPress,
	    onPressChange,
	    onPressStart,
	    onPressEnd,
	    onPressUp,
	    isDisabled,
	    isPressed: isPressedProp,
	    preventFocusOnPress
	  } = _usePressResponderCon,
	      domProps = _objectWithoutPropertiesLoose(_usePressResponderCon, ["onPress", "onPressChange", "onPressStart", "onPressEnd", "onPressUp", "isDisabled", "isPressed", "preventFocusOnPress", "ref"]);

	  let propsRef = _react.useRef(null);
	  propsRef.current = {
	    onPress,
	    onPressChange,
	    onPressStart,
	    onPressEnd,
	    onPressUp,
	    isDisabled
	  };
	  let [isPressed, setPressed] = _react.useState(false);
	  let ref = _react.useRef({
	    isPressed: false,
	    ignoreEmulatedMouseEvents: false,
	    ignoreClickAfterPress: false,
	    didFirePressStart: false,
	    activePointerId: null,
	    target: null,
	    isOverTarget: false,
	    pointerType: null
	  });
	  let {
	    addGlobalListener,
	    removeAllGlobalListeners
	  } = useGlobalListeners();
	  let pressProps = _react.useMemo(() => {
	    let state = ref.current;

	    let triggerPressStart = (originalEvent, pointerType) => {
	      let {
	        onPressStart,
	        onPressChange,
	        isDisabled
	      } = propsRef.current;

	      if (isDisabled || state.didFirePressStart) {
	        return;
	      }

	      if (onPressStart) {
	        onPressStart({
	          type: 'pressstart',
	          pointerType,
	          target: originalEvent.currentTarget,
	          shiftKey: originalEvent.shiftKey,
	          metaKey: originalEvent.metaKey,
	          ctrlKey: originalEvent.ctrlKey
	        });
	      }

	      if (onPressChange) {
	        onPressChange(true);
	      }

	      state.didFirePressStart = true;
	      setPressed(true);
	    };

	    let triggerPressEnd = function triggerPressEnd(originalEvent, pointerType, wasPressed) {
	      if (wasPressed === void 0) {
	        wasPressed = true;
	      }

	      let {
	        onPressEnd,
	        onPressChange,
	        onPress,
	        isDisabled
	      } = propsRef.current;

	      if (!state.didFirePressStart) {
	        return;
	      }

	      state.ignoreClickAfterPress = true;
	      state.didFirePressStart = false;

	      if (onPressEnd) {
	        onPressEnd({
	          type: 'pressend',
	          pointerType,
	          target: originalEvent.currentTarget,
	          shiftKey: originalEvent.shiftKey,
	          metaKey: originalEvent.metaKey,
	          ctrlKey: originalEvent.ctrlKey
	        });
	      }

	      if (onPressChange) {
	        onPressChange(false);
	      }

	      setPressed(false);

	      if (onPress && wasPressed && !isDisabled) {
	        onPress({
	          type: 'press',
	          pointerType,
	          target: originalEvent.currentTarget,
	          shiftKey: originalEvent.shiftKey,
	          metaKey: originalEvent.metaKey,
	          ctrlKey: originalEvent.ctrlKey
	        });
	      }
	    };

	    let triggerPressUp = (originalEvent, pointerType) => {
	      let {
	        onPressUp,
	        isDisabled
	      } = propsRef.current;

	      if (isDisabled) {
	        return;
	      }

	      if (onPressUp) {
	        onPressUp({
	          type: 'pressup',
	          pointerType,
	          target: originalEvent.currentTarget,
	          shiftKey: originalEvent.shiftKey,
	          metaKey: originalEvent.metaKey,
	          ctrlKey: originalEvent.ctrlKey
	        });
	      }
	    };

	    let cancel = e => {
	      if (state.isPressed) {
	        if (state.isOverTarget) {
	          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
	        }

	        state.isPressed = false;
	        state.isOverTarget = false;
	        state.activePointerId = null;
	        state.pointerType = null;
	        removeAllGlobalListeners();
	        $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
	      }
	    };

	    let pressProps = {
	      onKeyDown(e) {
	        if ($ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e.nativeEvent) && e.currentTarget.contains(e.target)) {
	          e.preventDefault();
	          e.stopPropagation(); // If the event is repeating, it may have started on a different element
	          // after which focus moved to the current element. Ignore these events and
	          // only handle the first key down event.

	          if (!state.isPressed && !e.repeat) {
	            state.target = e.currentTarget;
	            state.isPressed = true;
	            triggerPressStart(e, 'keyboard'); // Focus may move before the key up event, so register the event on the document
	            // instead of the same element where the key down event occurred.

	            addGlobalListener(document, 'keyup', onKeyUp, false);
	          }
	        }
	      },

	      onKeyUp(e) {
	        if ($ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e.nativeEvent) && !e.repeat && e.currentTarget.contains(e.target)) {
	          triggerPressUp($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), 'keyboard');
	        }
	      },

	      onClick(e) {
	        if (e && !e.currentTarget.contains(e.target)) {
	          return;
	        }

	        if (e && e.button === 0) {
	          e.stopPropagation();

	          if (isDisabled) {
	            e.preventDefault();
	          } // If triggered from a screen reader or by using element.click(),
	          // trigger as if it were a keyboard click.


	          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e.nativeEvent)) {
	            // Ensure the element receives focus (VoiceOver on iOS does not do this)
	            if (!isDisabled && !preventFocusOnPress) {
	              focusWithoutScrolling(e.currentTarget);
	            }

	            triggerPressStart(e, 'virtual');
	            triggerPressUp(e, 'virtual');
	            triggerPressEnd(e, 'virtual');
	          }

	          state.ignoreEmulatedMouseEvents = false;
	          state.ignoreClickAfterPress = false;
	        }
	      }

	    };

	    let onKeyUp = e => {
	      if (state.isPressed && $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e)) {
	        e.preventDefault();
	        e.stopPropagation();
	        state.isPressed = false;
	        triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), 'keyboard', e.target === state.target);
	        removeAllGlobalListeners(); // If the target is a link, trigger the click method to open the URL,
	        // but defer triggering pressEnd until onClick event handler.

	        if (e.target === state.target && $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(state.target) || state.target.getAttribute('role') === 'link') {
	          state.target.click();
	        }
	      }
	    };

	    if (typeof PointerEvent !== 'undefined') {
	      pressProps.onPointerDown = e => {
	        // Only handle left clicks, and ignore events that bubbled through portals.
	        if (e.button !== 0 || !e.currentTarget.contains(e.target)) {
	          return;
	        } // Due to browser inconsistencies, especially on mobile browsers, we prevent
	        // default on pointer down and handle focusing the pressable element ourselves.


	        if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
	          e.preventDefault();
	        } // iOS safari fires pointer events from VoiceOver (but only when outside an iframe...)
	        // https://bugs.webkit.org/show_bug.cgi?id=222627


	        state.pointerType = $ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(e.nativeEvent) ? 'virtual' : e.pointerType;
	        e.stopPropagation();

	        if (!state.isPressed) {
	          state.isPressed = true;
	          state.isOverTarget = true;
	          state.activePointerId = e.pointerId;
	          state.target = e.currentTarget;

	          if (!isDisabled && !preventFocusOnPress) {
	            focusWithoutScrolling(e.currentTarget);
	          }

	          $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
	          triggerPressStart(e, state.pointerType);
	          addGlobalListener(document, 'pointermove', onPointerMove, false);
	          addGlobalListener(document, 'pointerup', onPointerUp, false);
	          addGlobalListener(document, 'pointercancel', onPointerCancel, false);
	        }
	      };

	      pressProps.onMouseDown = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        }

	        if (e.button === 0) {
	          // Chrome and Firefox on touch Windows devices require mouse down events
	          // to be canceled in addition to pointer events, or an extra asynchronous
	          // focus event will be fired.
	          if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
	            e.preventDefault();
	          }

	          e.stopPropagation();
	        }
	      };

	      pressProps.onPointerUp = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        } // Only handle left clicks
	        // Safari on iOS sometimes fires pointerup events, even
	        // when the touch isn't over the target, so double check.


	        if (e.button === 0 && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, e.currentTarget)) {
	          triggerPressUp(e, state.pointerType);
	        }
	      }; // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
	      // Use pointer move events instead to implement our own hit testing.
	      // See https://bugs.webkit.org/show_bug.cgi?id=199803


	      let onPointerMove = e => {
	        if (e.pointerId !== state.activePointerId) {
	          return;
	        }

	        if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
	          if (!state.isOverTarget) {
	            state.isOverTarget = true;
	            triggerPressStart($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
	          }
	        } else if (state.isOverTarget) {
	          state.isOverTarget = false;
	          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
	        }
	      };

	      let onPointerUp = e => {
	        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
	          if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
	            triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
	          } else if (state.isOverTarget) {
	            triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
	          }

	          state.isPressed = false;
	          state.isOverTarget = false;
	          state.activePointerId = null;
	          state.pointerType = null;
	          removeAllGlobalListeners();
	          $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
	        }
	      };

	      let onPointerCancel = e => {
	        cancel(e);
	      };

	      pressProps.onDragStart = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        } // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.


	        cancel(e);
	      };
	    } else {
	      pressProps.onMouseDown = e => {
	        // Only handle left clicks
	        if (e.button !== 0 || !e.currentTarget.contains(e.target)) {
	          return;
	        } // Due to browser inconsistencies, especially on mobile browsers, we prevent
	        // default on mouse down and handle focusing the pressable element ourselves.


	        if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
	          e.preventDefault();
	        }

	        e.stopPropagation();

	        if (state.ignoreEmulatedMouseEvents) {
	          return;
	        }

	        state.isPressed = true;
	        state.isOverTarget = true;
	        state.target = e.currentTarget;
	        state.pointerType = $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e.nativeEvent) ? 'virtual' : 'mouse';

	        if (!isDisabled && !preventFocusOnPress) {
	          focusWithoutScrolling(e.currentTarget);
	        }

	        triggerPressStart(e, state.pointerType);
	        addGlobalListener(document, 'mouseup', onMouseUp, false);
	      };

	      pressProps.onMouseEnter = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        }

	        e.stopPropagation();

	        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
	          state.isOverTarget = true;
	          triggerPressStart(e, state.pointerType);
	        }
	      };

	      pressProps.onMouseLeave = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        }

	        e.stopPropagation();

	        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
	          state.isOverTarget = false;
	          triggerPressEnd(e, state.pointerType, false);
	        }
	      };

	      pressProps.onMouseUp = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        }

	        if (!state.ignoreEmulatedMouseEvents && e.button === 0) {
	          triggerPressUp(e, state.pointerType);
	        }
	      };

	      let onMouseUp = e => {
	        // Only handle left clicks
	        if (e.button !== 0) {
	          return;
	        }

	        state.isPressed = false;
	        removeAllGlobalListeners();

	        if (state.ignoreEmulatedMouseEvents) {
	          state.ignoreEmulatedMouseEvents = false;
	          return;
	        }

	        if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
	          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
	        } else if (state.isOverTarget) {
	          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
	        }

	        state.isOverTarget = false;
	      };

	      pressProps.onTouchStart = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        }

	        e.stopPropagation();
	        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(e.nativeEvent);

	        if (!touch) {
	          return;
	        }

	        state.activePointerId = touch.identifier;
	        state.ignoreEmulatedMouseEvents = true;
	        state.isOverTarget = true;
	        state.isPressed = true;
	        state.target = e.currentTarget;
	        state.pointerType = 'touch'; // Due to browser inconsistencies, especially on mobile browsers, we prevent default
	        // on the emulated mouse event and handle focusing the pressable element ourselves.

	        if (!isDisabled && !preventFocusOnPress) {
	          focusWithoutScrolling(e.currentTarget);
	        }

	        $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
	        triggerPressStart(e, state.pointerType);
	        addGlobalListener(window, 'scroll', onScroll, true);
	      };

	      pressProps.onTouchMove = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        }

	        e.stopPropagation();

	        if (!state.isPressed) {
	          return;
	        }

	        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e.nativeEvent, state.activePointerId);

	        if (touch && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(touch, e.currentTarget)) {
	          if (!state.isOverTarget) {
	            state.isOverTarget = true;
	            triggerPressStart(e, state.pointerType);
	          }
	        } else if (state.isOverTarget) {
	          state.isOverTarget = false;
	          triggerPressEnd(e, state.pointerType, false);
	        }
	      };

	      pressProps.onTouchEnd = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        }

	        e.stopPropagation();

	        if (!state.isPressed) {
	          return;
	        }

	        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e.nativeEvent, state.activePointerId);

	        if (touch && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(touch, e.currentTarget)) {
	          triggerPressUp(e, state.pointerType);
	          triggerPressEnd(e, state.pointerType);
	        } else if (state.isOverTarget) {
	          triggerPressEnd(e, state.pointerType, false);
	        }

	        state.isPressed = false;
	        state.activePointerId = null;
	        state.isOverTarget = false;
	        state.ignoreEmulatedMouseEvents = true;
	        $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
	        removeAllGlobalListeners();
	      };

	      pressProps.onTouchCancel = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        }

	        e.stopPropagation();

	        if (state.isPressed) {
	          cancel(e);
	        }
	      };

	      let onScroll = e => {
	        if (state.isPressed && e.target.contains(state.target)) {
	          cancel({
	            currentTarget: state.target,
	            shiftKey: false,
	            ctrlKey: false,
	            metaKey: false
	          });
	        }
	      };

	      pressProps.onDragStart = e => {
	        if (!e.currentTarget.contains(e.target)) {
	          return;
	        }

	        cancel(e);
	      };
	    }

	    return pressProps;
	  }, [addGlobalListener, isDisabled, preventFocusOnPress, removeAllGlobalListeners]); // Remove user-select: none in case component unmounts immediately after pressStart
	  // eslint-disable-next-line arrow-body-style

	  _react.useEffect(() => {
	    return () => $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
	  }, []);
	  return {
	    isPressed: isPressedProp || isPressed,
	    pressProps: mergeProps(domProps, pressProps)
	  };
	}

	function $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(target) {
	  return target.tagName === 'A' && target.hasAttribute('href');
	}

	function $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(event) {
	  const {
	    key,
	    target
	  } = event;
	  const element = target;
	  const {
	    tagName,
	    isContentEditable
	  } = element;
	  const role = element.getAttribute('role'); // Accessibility for keyboards. Space and Enter only.
	  // "Spacebar" is for IE 11

	  return (key === 'Enter' || key === ' ' || key === 'Spacebar') && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && isContentEditable !== true && ( // A link with a valid href should be handled natively,
	  // unless it also has role='button' and was triggered using Space.
	  !$ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(element) || role === 'button' && key !== 'Enter') && // An element with role='link' should only trigger with Enter key
	  !(role === 'link' && key !== 'Enter');
	}

	function $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(event) {
	  const {
	    targetTouches
	  } = event;

	  if (targetTouches.length > 0) {
	    return targetTouches[0];
	  }

	  return null;
	}

	function $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(event, pointerId) {
	  const changedTouches = event.changedTouches;

	  for (let i = 0; i < changedTouches.length; i++) {
	    const touch = changedTouches[i];

	    if (touch.identifier === pointerId) {
	      return touch;
	    }
	  }

	  return null;
	}

	function $ffc54430b1dbeee65879852feaaff07d$var$createEvent(target, e) {
	  return {
	    currentTarget: target,
	    shiftKey: e.shiftKey,
	    ctrlKey: e.ctrlKey,
	    metaKey: e.metaKey
	  };
	}

	function $ffc54430b1dbeee65879852feaaff07d$var$getPointClientRect(point) {
	  let offsetX = point.width / 2 || point.radiusX || 0;
	  let offsetY = point.height / 2 || point.radiusY || 0;
	  return {
	    top: point.clientY - offsetY,
	    right: point.clientX + offsetX,
	    bottom: point.clientY + offsetY,
	    left: point.clientX - offsetX
	  };
	}

	function $ffc54430b1dbeee65879852feaaff07d$var$areRectanglesOverlapping(a, b) {
	  // check if they cannot overlap on x axis
	  if (a.left > b.right || b.left > a.right) {
	    return false;
	  } // check if they cannot overlap on y axis


	  if (a.top > b.bottom || b.top > a.bottom) {
	    return false;
	  }

	  return true;
	}

	function $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(point, target) {
	  let rect = target.getBoundingClientRect();
	  let pointRect = $ffc54430b1dbeee65879852feaaff07d$var$getPointClientRect(point);
	  return $ffc54430b1dbeee65879852feaaff07d$var$areRectanglesOverlapping(rect, pointRect);
	}

	function $ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(target) {
	  // We cannot prevent default if the target is inside a draggable element.
	  return !target.closest('[draggable="true"]');
	}

	function $ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(event) {
	  // If the pointer size is zero, then we assume it's from a screen reader.
	  return event.width === 0 && event.height === 0;
	}

	const Pressable = /*#__PURE__*/_react__default["default"].forwardRef((_ref, ref) => {
	  var _ref2;

	  let {
	    children
	  } = _ref,
	      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

	  let newRef = _react.useRef();
	  ref = (_ref2 = ref) != null ? _ref2 : newRef;
	  let {
	    pressProps
	  } = usePress(_extends({}, props, {
	    ref
	  }));

	  let child = _react__default["default"].Children.only(children);

	  return /*#__PURE__*/_react__default["default"].cloneElement(child, // @ts-ignore
	  _extends({
	    ref
	  }, mergeProps(child.props, pressProps)));
	});
	const PressResponder = /*#__PURE__*/_react__default["default"].forwardRef((_ref, ref) => {
	  let {
	    children
	  } = _ref,
	      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

	  let isRegistered = _react.useRef(false);
	  let prevContext = _react.useContext($a3ff51240de6f955c79cf17a88e349$export$PressResponderContext);
	  let context = mergeProps(prevContext || {}, _extends({}, props, {
	    ref: ref || (prevContext == null ? void 0 : prevContext.ref),

	    register() {
	      isRegistered.current = true;

	      if (prevContext) {
	        prevContext.register();
	      }
	    }

	  }));
	  useSyncRef(prevContext, ref);
	  _react.useEffect(() => {
	    if (!isRegistered.current) {
	      console.warn('A PressResponder was rendered without a pressable child. ' + 'Either call the usePress hook, or wrap your DOM node with <Pressable> component.');
	    }
	  }, []);
	  return /*#__PURE__*/_react__default["default"].createElement($a3ff51240de6f955c79cf17a88e349$export$PressResponderContext.Provider, {
	    value: context
	  }, children);
	});
	// NOTICE file in the root directory of this source tree.
	// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

	/**
	 * Handles focus events for the immediate target.
	 * Focus events on child elements will be ignored.
	 */
	function useFocus(props) {
	  if (props.isDisabled) {
	    return {
	      focusProps: {}
	    };
	  }

	  let onFocus, onBlur;

	  if (props.onFocus || props.onFocusChange) {
	    onFocus = e => {
	      if (e.target === e.currentTarget) {
	        if (props.onFocus) {
	          props.onFocus(e);
	        }

	        if (props.onFocusChange) {
	          props.onFocusChange(true);
	        }
	      }
	    };
	  }

	  if (props.onBlur || props.onFocusChange) {
	    onBlur = e => {
	      if (e.target === e.currentTarget) {
	        if (props.onBlur) {
	          props.onBlur(e);
	        }

	        if (props.onFocusChange) {
	          props.onFocusChange(false);
	        }
	      }
	    };
	  }

	  return {
	    focusProps: {
	      onFocus,
	      onBlur
	    }
	  };
	}
	let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = null;
	let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers = new Set();
	let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners = false;
	let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
	let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = false; // Only Tab or Esc keys will make focus visible on text input elements

	const $d01f69bb2ab5f70dfd0005370a2a2cbc$var$FOCUS_VISIBLE_INPUT_KEYS = {
	  Tab: true,
	  Escape: true
	};

	function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers(modality, e) {
	  for (let handler of $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers) {
	    handler(modality, e);
	  }
	}
	/**
	 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
	 */


	function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$isValidKey(e) {
	  // Control and Shift keys trigger when navigating back to the tab with keyboard.
	  return !(e.metaKey || !isMac() && e.altKey || e.ctrlKey || e.type === 'keyup' && (e.key === 'Control' || e.key === 'Shift'));
	}

	function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent(e) {
	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;

	  if ($d01f69bb2ab5f70dfd0005370a2a2cbc$var$isValidKey(e)) {
	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'keyboard';
	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('keyboard', e);
	  }
	}

	function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent(e) {
	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'pointer';

	  if (e.type === 'mousedown' || e.type === 'pointerdown') {
	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('pointer', e);
	  }
	}

	function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleClickEvent(e) {
	  if ($f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e)) {
	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'virtual';
	  }
	}

	function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleFocusEvent(e) {
	  // Firefox fires two extra focus events when the user first clicks into an iframe:
	  // first on the window, then on the document. We ignore these events so they don't
	  // cause keyboard focus rings to appear.
	  if (e.target === window || e.target === document) {
	    return;
	  } // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
	  // This occurs, for example, when navigating a form with the next/previous buttons on iOS.


	  if (!$d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus && !$d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently) {
	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = 'virtual';
	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('virtual', e);
	  }

	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = false;
	}

	function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleWindowBlur() {
	  // When the window is blurred, reset state. This is necessary when tabbing out of the window,
	  // for example, since a subsequent focus event won't be fired.
	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasBlurredWindowRecently = true;
	}
	/**
	 * Setup global event listeners to control when keyboard focus style should be visible.
	 */


	function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents() {
	  if (typeof window === 'undefined' || $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners) {
	    return;
	  } // Programmatic focus() calls shouldn't affect the current input modality.
	  // However, we need to detect other cases when a focus event occurs without
	  // a preceding user event (e.g. screen reader focus). Overriding the focus
	  // method on HTMLElement.prototype is a bit hacky, but works.


	  let focus = HTMLElement.prototype.focus;

	  HTMLElement.prototype.focus = function () {
	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
	    focus.apply(this, arguments);
	  };

	  document.addEventListener('keydown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent, true);
	  document.addEventListener('keyup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent, true);
	  document.addEventListener('click', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleClickEvent, true); // Register focus events on the window so they are sure to happen
	  // before React's event listeners (registered on the document).

	  window.addEventListener('focus', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleFocusEvent, true);
	  window.addEventListener('blur', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleWindowBlur, false);

	  if (typeof PointerEvent !== 'undefined') {
	    document.addEventListener('pointerdown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
	    document.addEventListener('pointermove', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
	    document.addEventListener('pointerup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
	  } else {
	    document.addEventListener('mousedown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
	    document.addEventListener('mousemove', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
	    document.addEventListener('mouseup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
	  }

	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners = true;
	}

	if (typeof document !== 'undefined') {
	  if (document.readyState !== 'loading') {
	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents();
	  } else {
	    document.addEventListener('DOMContentLoaded', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents);
	  }
	}
	/**
	 * If true, keyboard focus is visible.
	 */


	function isFocusVisible() {
	  return $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality !== 'pointer';
	}
	function getInteractionModality$1() {
	  return $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality;
	}
	function setInteractionModality(modality) {
	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality = modality;
	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers(modality, null);
	}
	/**
	 * Keeps state of the current modality.
	 */

	function useInteractionModality$1() {
	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents();
	  let [modality, setModality] = _react.useState($d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality);
	  _react.useEffect(() => {
	    let handler = () => {
	      setModality($d01f69bb2ab5f70dfd0005370a2a2cbc$var$currentModality);
	    };

	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers.add(handler);
	    return () => {
	      $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers.delete(handler);
	    };
	  }, []);
	  return modality;
	}
	/**
	 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
	 * focus visible style can be properly set.
	 */

	function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$isKeyboardFocusEvent(isTextInput, modality, e) {
	  return !(isTextInput && modality === 'keyboard' && e instanceof KeyboardEvent && !$d01f69bb2ab5f70dfd0005370a2a2cbc$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
	}
	/**
	 * Listens for trigger change and reports if focus is visible (i.e., modality is not pointer).
	 */

	function useFocusVisibleListener(fn, deps, opts) {
	  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents();
	  _react.useEffect(() => {
	    let handler = (modality, e) => {
	      if (!$d01f69bb2ab5f70dfd0005370a2a2cbc$var$isKeyboardFocusEvent(opts == null ? void 0 : opts.isTextInput, modality, e)) {
	        return;
	      }

	      fn(isFocusVisible());
	    };

	    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers.add(handler);
	    return () => $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers.delete(handler);
	  }, deps);
	}

	/**
	 * Handles focus events for the target and its descendants.
	 */
	function useFocusWithin(props) {
	  let state = _react.useRef({
	    isFocusWithin: false
	  }).current;

	  if (props.isDisabled) {
	    return {
	      focusWithinProps: {}
	    };
	  }

	  let onFocus = e => {
	    if (!state.isFocusWithin) {
	      if (props.onFocusWithin) {
	        props.onFocusWithin(e);
	      }

	      if (props.onFocusWithinChange) {
	        props.onFocusWithinChange(true);
	      }

	      state.isFocusWithin = true;
	    }
	  };

	  let onBlur = e => {
	    // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
	    // when moving focus inside the element. Only trigger if the currentTarget doesn't
	    // include the relatedTarget (where focus is moving).
	    if (state.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
	      if (props.onBlurWithin) {
	        props.onBlurWithin(e);
	      }

	      if (props.onFocusWithinChange) {
	        props.onFocusWithinChange(false);
	      }

	      state.isFocusWithin = false;
	    }
	  };

	  return {
	    focusWithinProps: {
	      onFocus: onFocus,
	      onBlur: onBlur
	    }
	  };
	}
	// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
	// We want to ignore these emulated events so they do not trigger hover behavior.
	// See https://bugs.webkit.org/show_bug.cgi?id=214609.
	let $b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents = false;
	let $b1a784c66b81d90efa4f74e05b$var$hoverCount = 0;

	function $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents() {
	  $b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents = true; // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
	  // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
	  // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
	  // the distant future because a user previously touched the element.

	  setTimeout(() => {
	    $b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents = false;
	  }, 50);
	}

	function $b1a784c66b81d90efa4f74e05b$var$handleGlobalPointerEvent(e) {
	  if (e.pointerType === 'touch') {
	    $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents();
	  }
	}

	function $b1a784c66b81d90efa4f74e05b$var$setupGlobalTouchEvents() {
	  if (typeof document === 'undefined') {
	    return;
	  }

	  if (typeof PointerEvent !== 'undefined') {
	    document.addEventListener('pointerup', $b1a784c66b81d90efa4f74e05b$var$handleGlobalPointerEvent);
	  } else {
	    document.addEventListener('touchend', $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents);
	  }

	  $b1a784c66b81d90efa4f74e05b$var$hoverCount++;
	  return () => {
	    $b1a784c66b81d90efa4f74e05b$var$hoverCount--;

	    if ($b1a784c66b81d90efa4f74e05b$var$hoverCount > 0) {
	      return;
	    }

	    if (typeof PointerEvent !== 'undefined') {
	      document.removeEventListener('pointerup', $b1a784c66b81d90efa4f74e05b$var$handleGlobalPointerEvent);
	    } else {
	      document.removeEventListener('touchend', $b1a784c66b81d90efa4f74e05b$var$setGlobalIgnoreEmulatedMouseEvents);
	    }
	  };
	}
	/**
	 * Handles pointer hover interactions for an element. Normalizes behavior
	 * across browsers and platforms, and ignores emulated mouse events on touch devices.
	 */


	function useHover(props) {
	  let {
	    onHoverStart,
	    onHoverChange,
	    onHoverEnd,
	    isDisabled
	  } = props;
	  let [isHovered, setHovered] = _react.useState(false);
	  let state = _react.useRef({
	    isHovered: false,
	    ignoreEmulatedMouseEvents: false,
	    pointerType: '',
	    target: null
	  }).current;
	  _react.useEffect($b1a784c66b81d90efa4f74e05b$var$setupGlobalTouchEvents, []);
	  let {
	    hoverProps,
	    triggerHoverEnd
	  } = _react.useMemo(() => {
	    let triggerHoverStart = (event, pointerType) => {
	      state.pointerType = pointerType;

	      if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) {
	        return;
	      }

	      state.isHovered = true;
	      let target = event.target;
	      state.target = target;

	      if (onHoverStart) {
	        onHoverStart({
	          type: 'hoverstart',
	          target,
	          pointerType
	        });
	      }

	      if (onHoverChange) {
	        onHoverChange(true);
	      }

	      setHovered(true);
	    };

	    let triggerHoverEnd = (event, pointerType) => {
	      state.pointerType = '';
	      state.target = null;

	      if (pointerType === 'touch' || !state.isHovered) {
	        return;
	      }

	      state.isHovered = false;
	      let target = event.target;

	      if (onHoverEnd) {
	        onHoverEnd({
	          type: 'hoverend',
	          target,
	          pointerType
	        });
	      }

	      if (onHoverChange) {
	        onHoverChange(false);
	      }

	      setHovered(false);
	    };

	    let hoverProps = {};

	    if (typeof PointerEvent !== 'undefined') {
	      hoverProps.onPointerEnter = e => {
	        if ($b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') {
	          return;
	        }

	        triggerHoverStart(e, e.pointerType);
	      };

	      hoverProps.onPointerLeave = e => {
	        if (!isDisabled && e.currentTarget.contains(e.target)) {
	          triggerHoverEnd(e, e.pointerType);
	        }
	      };
	    } else {
	      hoverProps.onTouchStart = () => {
	        state.ignoreEmulatedMouseEvents = true;
	      };

	      hoverProps.onMouseEnter = e => {
	        if (!state.ignoreEmulatedMouseEvents && !$b1a784c66b81d90efa4f74e05b$var$globalIgnoreEmulatedMouseEvents) {
	          triggerHoverStart(e, 'mouse');
	        }

	        state.ignoreEmulatedMouseEvents = false;
	      };

	      hoverProps.onMouseLeave = e => {
	        if (!isDisabled && e.currentTarget.contains(e.target)) {
	          triggerHoverEnd(e, 'mouse');
	        }
	      };
	    }

	    return {
	      hoverProps,
	      triggerHoverEnd
	    };
	  }, [onHoverStart, onHoverChange, onHoverEnd, isDisabled, state]);
	  _react.useEffect(() => {
	    // Call the triggerHoverEnd as soon as isDisabled changes to true
	    // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
	    if (isDisabled) {
	      triggerHoverEnd({
	        target: state.target
	      }, state.pointerType);
	    }
	  }, [isDisabled]);
	  return {
	    hoverProps,
	    isHovered
	  };
	}

	/**
	 * Example, used in components like Dialogs and Popovers so they can close
	 * when a user clicks outside them.
	 */
	function useInteractOutside(props) {
	  let {
	    ref,
	    onInteractOutside,
	    isDisabled,
	    onInteractOutsideStart
	  } = props;
	  let stateRef = _react.useRef({
	    isPointerDown: false,
	    ignoreEmulatedMouseEvents: false
	  });
	  let state = stateRef.current;
	  _react.useEffect(() => {
	    let onPointerDown = e => {
	      if (isDisabled) {
	        return;
	      }

	      if ($e415bb64ab27cb8fbfac2f417412022f$var$isValidEvent(e, ref) && onInteractOutside) {
	        if (onInteractOutsideStart) {
	          onInteractOutsideStart(e);
	        }

	        state.isPointerDown = true;
	      }
	    }; // Use pointer events if available. Otherwise, fall back to mouse and touch events.


	    if (typeof PointerEvent !== 'undefined') {
	      let onPointerUp = e => {
	        if (isDisabled) {
	          return;
	        }

	        if (state.isPointerDown && onInteractOutside && $e415bb64ab27cb8fbfac2f417412022f$var$isValidEvent(e, ref)) {
	          state.isPointerDown = false;
	          onInteractOutside(e);
	        }
	      }; // changing these to capture phase fixed combobox


	      document.addEventListener('pointerdown', onPointerDown, true);
	      document.addEventListener('pointerup', onPointerUp, true);
	      return () => {
	        document.removeEventListener('pointerdown', onPointerDown, true);
	        document.removeEventListener('pointerup', onPointerUp, true);
	      };
	    } else {
	      let onMouseUp = e => {
	        if (isDisabled) {
	          return;
	        }

	        if (state.ignoreEmulatedMouseEvents) {
	          state.ignoreEmulatedMouseEvents = false;
	        } else if (state.isPointerDown && onInteractOutside && $e415bb64ab27cb8fbfac2f417412022f$var$isValidEvent(e, ref)) {
	          state.isPointerDown = false;
	          onInteractOutside(e);
	        }
	      };

	      let onTouchEnd = e => {
	        if (isDisabled) {
	          return;
	        }

	        state.ignoreEmulatedMouseEvents = true;

	        if (onInteractOutside && state.isPointerDown && $e415bb64ab27cb8fbfac2f417412022f$var$isValidEvent(e, ref)) {
	          state.isPointerDown = false;
	          onInteractOutside(e);
	        }
	      };

	      document.addEventListener('mousedown', onPointerDown, true);
	      document.addEventListener('mouseup', onMouseUp, true);
	      document.addEventListener('touchstart', onPointerDown, true);
	      document.addEventListener('touchend', onTouchEnd, true);
	      return () => {
	        document.removeEventListener('mousedown', onPointerDown, true);
	        document.removeEventListener('mouseup', onMouseUp, true);
	        document.removeEventListener('touchstart', onPointerDown, true);
	        document.removeEventListener('touchend', onTouchEnd, true);
	      };
	    }
	  }, [onInteractOutside, ref, state.ignoreEmulatedMouseEvents, state.isPointerDown, isDisabled]);
	}

	function $e415bb64ab27cb8fbfac2f417412022f$var$isValidEvent(event, ref) {
	  if (event.button > 0) {
	    return false;
	  } // if the event target is no longer in the document


	  if (event.target) {
	    const ownerDocument = event.target.ownerDocument;

	    if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) {
	      return false;
	    }
	  }

	  return ref.current && !ref.current.contains(event.target);
	}

	/**
	 * This function wraps a React event handler to make stopPropagation the default, and support continuePropagation instead.
	 */
	function $dc0d75166de722fbf58eb6c3552$export$createEventHandler(handler) {
	  if (!handler) {
	    return;
	  }

	  let shouldStopPropagation = true;
	  return e => {
	    let event = _extends({}, e, {
	      preventDefault() {
	        e.preventDefault();
	      },

	      isDefaultPrevented() {
	        return e.isDefaultPrevented();
	      },

	      stopPropagation() {
	        console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
	      },

	      continuePropagation() {
	        shouldStopPropagation = false;
	      }

	    });

	    handler(event);

	    if (shouldStopPropagation) {
	      e.stopPropagation();
	    }
	  };
	}

	/**
	 * Handles keyboard interactions for a focusable element.
	 */
	function useKeyboard(props) {
	  return {
	    keyboardProps: props.isDisabled ? {} : {
	      onKeyDown: $dc0d75166de722fbf58eb6c3552$export$createEventHandler(props.onKeyDown),
	      onKeyUp: $dc0d75166de722fbf58eb6c3552$export$createEventHandler(props.onKeyUp)
	    }
	  };
	}

	/**
	 * Handles move interactions across mouse, touch, and keyboard, including dragging with
	 * the mouse or touch, and using the arrow keys. Normalizes behavior across browsers and
	 * platforms, and ignores emulated mouse events on touch devices.
	 */
	function useMove(props) {
	  let {
	    onMoveStart,
	    onMove,
	    onMoveEnd
	  } = props;
	  let state = _react.useRef({
	    didMove: false,
	    lastPosition: null,
	    id: null
	  });
	  let {
	    addGlobalListener,
	    removeGlobalListener
	  } = useGlobalListeners();
	  let moveProps = _react.useMemo(() => {
	    let moveProps = {};

	    let start = () => {
	      $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
	      state.current.didMove = false;
	    };

	    let move = (pointerType, deltaX, deltaY) => {
	      if (deltaX === 0 && deltaY === 0) {
	        return;
	      }

	      if (!state.current.didMove) {
	        state.current.didMove = true;
	        onMoveStart == null ? void 0 : onMoveStart({
	          type: 'movestart',
	          pointerType
	        });
	      }

	      onMove({
	        type: 'move',
	        pointerType,
	        deltaX: deltaX,
	        deltaY: deltaY
	      });
	    };

	    let end = pointerType => {
	      $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();

	      if (state.current.didMove) {
	        onMoveEnd == null ? void 0 : onMoveEnd({
	          type: 'moveend',
	          pointerType
	        });
	      }
	    };

	    if (typeof PointerEvent === 'undefined') {
	      let onMouseMove = e => {
	        if (e.button === 0) {
	          move('mouse', e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
	          state.current.lastPosition = {
	            pageX: e.pageX,
	            pageY: e.pageY
	          };
	        }
	      };

	      let onMouseUp = e => {
	        if (e.button === 0) {
	          end('mouse');
	          removeGlobalListener(window, 'mousemove', onMouseMove, false);
	          removeGlobalListener(window, 'mouseup', onMouseUp, false);
	        }
	      };

	      moveProps.onMouseDown = e => {
	        if (e.button === 0) {
	          start();
	          e.stopPropagation();
	          e.preventDefault();
	          state.current.lastPosition = {
	            pageX: e.pageX,
	            pageY: e.pageY
	          };
	          addGlobalListener(window, 'mousemove', onMouseMove, false);
	          addGlobalListener(window, 'mouseup', onMouseUp, false);
	        }
	      };

	      let onTouchMove = e => {
	        // @ts-ignore
	        let touch = [...e.changedTouches].findIndex((_ref) => {
	          let {
	            identifier
	          } = _ref;
	          return identifier === state.current.id;
	        });

	        if (touch >= 0) {
	          let {
	            pageX,
	            pageY
	          } = e.changedTouches[touch];
	          move('touch', pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
	          state.current.lastPosition = {
	            pageX,
	            pageY
	          };
	        }
	      };

	      let onTouchEnd = e => {
	        // @ts-ignore
	        let touch = [...e.changedTouches].findIndex((_ref2) => {
	          let {
	            identifier
	          } = _ref2;
	          return identifier === state.current.id;
	        });

	        if (touch >= 0) {
	          end('touch');
	          state.current.id = null;
	          removeGlobalListener(window, 'touchmove', onTouchMove);
	          removeGlobalListener(window, 'touchend', onTouchEnd);
	          removeGlobalListener(window, 'touchcancel', onTouchEnd);
	        }
	      };

	      moveProps.onTouchStart = e => {
	        if (e.changedTouches.length === 0 || state.current.id != null) {
	          return;
	        }

	        let {
	          pageX,
	          pageY,
	          identifier
	        } = e.changedTouches[0];
	        start();
	        e.stopPropagation();
	        e.preventDefault();
	        state.current.lastPosition = {
	          pageX,
	          pageY
	        };
	        state.current.id = identifier;
	        addGlobalListener(window, 'touchmove', onTouchMove, false);
	        addGlobalListener(window, 'touchend', onTouchEnd, false);
	        addGlobalListener(window, 'touchcancel', onTouchEnd, false);
	      };
	    } else {
	      let onPointerMove = e => {
	        if (e.pointerId === state.current.id) {
	          // @ts-ignore
	          let pointerType = e.pointerType || 'mouse'; // Problems with PointerEvent#movementX/movementY:
	          // 1. it is always 0 on macOS Safari.
	          // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS

	          move(pointerType, e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
	          state.current.lastPosition = {
	            pageX: e.pageX,
	            pageY: e.pageY
	          };
	        }
	      };

	      let onPointerUp = e => {
	        if (e.pointerId === state.current.id) {
	          // @ts-ignore
	          let pointerType = e.pointerType || 'mouse';
	          end(pointerType);
	          state.current.id = null;
	          removeGlobalListener(window, 'pointermove', onPointerMove, false);
	          removeGlobalListener(window, 'pointerup', onPointerUp, false);
	          removeGlobalListener(window, 'pointercancel', onPointerUp, false);
	        }
	      };

	      moveProps.onPointerDown = e => {
	        if (e.button === 0 && state.current.id == null) {
	          start();
	          e.stopPropagation();
	          e.preventDefault();
	          state.current.lastPosition = {
	            pageX: e.pageX,
	            pageY: e.pageY
	          };
	          state.current.id = e.pointerId;
	          addGlobalListener(window, 'pointermove', onPointerMove, false);
	          addGlobalListener(window, 'pointerup', onPointerUp, false);
	          addGlobalListener(window, 'pointercancel', onPointerUp, false);
	        }
	      };
	    }

	    let triggerKeyboardMove = (deltaX, deltaY) => {
	      start();
	      move('keyboard', deltaX, deltaY);
	      end('keyboard');
	    };

	    moveProps.onKeyDown = e => {
	      switch (e.key) {
	        case 'Left':
	        case 'ArrowLeft':
	          e.preventDefault();
	          e.stopPropagation();
	          triggerKeyboardMove(-1, 0);
	          break;

	        case 'Right':
	        case 'ArrowRight':
	          e.preventDefault();
	          e.stopPropagation();
	          triggerKeyboardMove(1, 0);
	          break;

	        case 'Up':
	        case 'ArrowUp':
	          e.preventDefault();
	          e.stopPropagation();
	          triggerKeyboardMove(0, -1);
	          break;

	        case 'Down':
	        case 'ArrowDown':
	          e.preventDefault();
	          e.stopPropagation();
	          triggerKeyboardMove(0, 1);
	          break;
	      }
	    };

	    return moveProps;
	  }, [state, onMoveStart, onMove, onMoveEnd, addGlobalListener, removeGlobalListener]);
	  return {
	    moveProps
	  };
	}

	/**
	 * A utility function that focuses an element while avoiding undesired side effects such
	 * as page scrolling and screen reader issues with CSS transitions.
	 */
	function focusSafely(element) {
	  // If the user is interacting with a virtual cursor, e.g. screen reader, then
	  // wait until after any animated transitions that are currently occurring on
	  // the page before shifting focus. This avoids issues with VoiceOver on iOS
	  // causing the page to scroll when moving focus if the element is transitioning
	  // from off the screen.
	  if (getInteractionModality$1() === 'virtual') {
	    let lastFocusedElement = document.activeElement;
	    runAfterTransition(() => {
	      // If focus did not move and the element is still in the document, focus it.
	      if (document.activeElement === lastFocusedElement && document.contains(element)) {
	        focusWithoutScrolling(element);
	      }
	    });
	  } else {
	    focusWithoutScrolling(element);
	  }
	}

	/*
	 * Copyright 2021 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	function $ee5e90cbb4a22466973155c14222fa1$var$isStyleVisible(element) {
	  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
	    return false;
	  }

	  let {
	    display,
	    visibility
	  } = element.style;
	  let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';

	  if (isVisible) {
	    const {
	      getComputedStyle
	    } = element.ownerDocument.defaultView;
	    let {
	      display: computedDisplay,
	      visibility: computedVisibility
	    } = getComputedStyle(element);
	    isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
	  }

	  return isVisible;
	}

	function $ee5e90cbb4a22466973155c14222fa1$var$isAttributeVisible(element, childElement) {
	  return !element.hasAttribute('hidden') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
	}
	/**
	 * Adapted from https://github.com/testing-library/jest-dom and 
	 * https://github.com/vuejs/vue-test-utils-next/.
	 * Licensed under the MIT License.
	 * @param element - Element to evaluate for display or visibility.
	 */


	function $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(element, childElement) {
	  return element.nodeName !== '#comment' && $ee5e90cbb4a22466973155c14222fa1$var$isStyleVisible(element) && $ee5e90cbb4a22466973155c14222fa1$var$isAttributeVisible(element, childElement) && (!element.parentElement || $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(element.parentElement, element));
	}

	const $c9e8f80f5bb1841844f54e4ad30b$var$FocusContext = /*#__PURE__*/_react__default["default"].createContext(null);

	let $c9e8f80f5bb1841844f54e4ad30b$var$activeScope = null;
	let $c9e8f80f5bb1841844f54e4ad30b$var$scopes = new Set(); // This is a hacky DOM-based implementation of a FocusScope until this RFC lands in React:
	// https://github.com/reactjs/rfcs/pull/109
	// For now, it relies on the DOM tree order rather than the React tree order, and is probably
	// less optimized for performance.

	/**
	 * A FocusScope manages focus for its descendants. It supports containing focus inside
	 * the scope, restoring focus to the previously focused element on unmount, and auto
	 * focusing children on mount. It also acts as a container for a programmatic focus
	 * management interface that can be used to move focus forward and back in response
	 * to user events.
	 */

	function FocusScope(props) {
	  let {
	    children,
	    contain,
	    restoreFocus,
	    autoFocus
	  } = props;
	  let startRef = _react.useRef();
	  let endRef = _react.useRef();
	  let scopeRef = _react.useRef([]);
	  useLayoutEffect(() => {
	    // Find all rendered nodes between the sentinels and add them to the scope.
	    let node = startRef.current.nextSibling;
	    let nodes = [];

	    while (node && node !== endRef.current) {
	      nodes.push(node);
	      node = node.nextSibling;
	    }

	    scopeRef.current = nodes;
	    $c9e8f80f5bb1841844f54e4ad30b$var$scopes.add(scopeRef);
	    return () => {
	      $c9e8f80f5bb1841844f54e4ad30b$var$scopes.delete(scopeRef);
	    };
	  }, [children]);
	  $c9e8f80f5bb1841844f54e4ad30b$var$useFocusContainment(scopeRef, contain);
	  $c9e8f80f5bb1841844f54e4ad30b$var$useRestoreFocus(scopeRef, restoreFocus, contain);
	  $c9e8f80f5bb1841844f54e4ad30b$var$useAutoFocus(scopeRef, autoFocus);
	  let focusManager = $c9e8f80f5bb1841844f54e4ad30b$var$createFocusManagerForScope(scopeRef);
	  return /*#__PURE__*/_react__default["default"].createElement($c9e8f80f5bb1841844f54e4ad30b$var$FocusContext.Provider, {
	    value: focusManager
	  }, /*#__PURE__*/_react__default["default"].createElement("span", {
	    hidden: true,
	    ref: startRef
	  }), children, /*#__PURE__*/_react__default["default"].createElement("span", {
	    hidden: true,
	    ref: endRef
	  }));
	}

	function $c9e8f80f5bb1841844f54e4ad30b$var$createFocusManagerForScope(scopeRef) {
	  return {
	    focusNext(opts) {
	      if (opts === void 0) {
	        opts = {};
	      }

	      let scope = scopeRef.current;
	      let {
	        from,
	        tabbable,
	        wrap
	      } = opts;
	      let node = from || document.activeElement;
	      let sentinel = scope[0].previousElementSibling;
	      let walker = getFocusableTreeWalker($c9e8f80f5bb1841844f54e4ad30b$var$getScopeRoot(scope), {
	        tabbable
	      }, scope);
	      walker.currentNode = $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(node, scope) ? node : sentinel;
	      let nextNode = walker.nextNode();

	      if (!nextNode && wrap) {
	        walker.currentNode = sentinel;
	        nextNode = walker.nextNode();
	      }

	      if (nextNode) {
	        $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(nextNode, true);
	      }

	      return nextNode;
	    },

	    focusPrevious(opts) {
	      if (opts === void 0) {
	        opts = {};
	      }

	      let scope = scopeRef.current;
	      let {
	        from,
	        tabbable,
	        wrap
	      } = opts;
	      let node = from || document.activeElement;
	      let sentinel = scope[scope.length - 1].nextElementSibling;
	      let walker = getFocusableTreeWalker($c9e8f80f5bb1841844f54e4ad30b$var$getScopeRoot(scope), {
	        tabbable
	      }, scope);
	      walker.currentNode = $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(node, scope) ? node : sentinel;
	      let previousNode = walker.previousNode();

	      if (!previousNode && wrap) {
	        walker.currentNode = sentinel;
	        previousNode = walker.previousNode();
	      }

	      if (previousNode) {
	        $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(previousNode, true);
	      }

	      return previousNode;
	    }

	  };
	}

	const $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements = ['input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'a[href]', 'area[href]', 'summary', 'iframe', 'object', 'embed', 'audio[controls]', 'video[controls]', '[contenteditable]'];
	const $c9e8f80f5bb1841844f54e4ad30b$var$FOCUSABLE_ELEMENT_SELECTOR = $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
	$c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
	const $c9e8f80f5bb1841844f54e4ad30b$var$TABBABLE_ELEMENT_SELECTOR = $c9e8f80f5bb1841844f54e4ad30b$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');

	function $c9e8f80f5bb1841844f54e4ad30b$var$getScopeRoot(scope) {
	  return scope[0].parentElement;
	}

	function $c9e8f80f5bb1841844f54e4ad30b$var$useFocusContainment(scopeRef, contain) {
	  let focusedNode = _react.useRef();
	  let raf = _react.useRef(null);
	  _react.useEffect(() => {
	    let scope = scopeRef.current;

	    if (!contain) {
	      return;
	    } // Handle the Tab key to contain focus within the scope


	    let onKeyDown = e => {
	      if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) {
	        return;
	      }

	      let focusedElement = document.activeElement;

	      if (!$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(focusedElement, scope)) {
	        return;
	      }

	      let walker = getFocusableTreeWalker($c9e8f80f5bb1841844f54e4ad30b$var$getScopeRoot(scope), {
	        tabbable: true
	      }, scope);
	      walker.currentNode = focusedElement;
	      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();

	      if (!nextElement) {
	        walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
	        nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
	      }

	      e.preventDefault();

	      if (nextElement) {
	        $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(nextElement, true);
	      }
	    };

	    let onFocus = e => {
	      // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
	      // restore focus to the previously focused node or the first tabbable element in the active scope.
	      let isInAnyScope = $c9e8f80f5bb1841844f54e4ad30b$var$isElementInAnyScope(e.target, $c9e8f80f5bb1841844f54e4ad30b$var$scopes);

	      if (!isInAnyScope) {
	        if (focusedNode.current) {
	          focusedNode.current.focus();
	        } else if ($c9e8f80f5bb1841844f54e4ad30b$var$activeScope) {
	          $c9e8f80f5bb1841844f54e4ad30b$var$focusFirstInScope($c9e8f80f5bb1841844f54e4ad30b$var$activeScope.current);
	        }
	      } else {
	        $c9e8f80f5bb1841844f54e4ad30b$var$activeScope = scopeRef;
	        focusedNode.current = e.target;
	      }
	    };

	    let onBlur = e => {
	      // Firefox doesn't shift focus back to the Dialog properly without this
	      raf.current = requestAnimationFrame(() => {
	        // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
	        let isInAnyScope = $c9e8f80f5bb1841844f54e4ad30b$var$isElementInAnyScope(document.activeElement, $c9e8f80f5bb1841844f54e4ad30b$var$scopes);

	        if (!isInAnyScope) {
	          $c9e8f80f5bb1841844f54e4ad30b$var$activeScope = scopeRef;
	          focusedNode.current = e.target;
	          focusedNode.current.focus();
	        }
	      });
	    };

	    document.addEventListener('keydown', onKeyDown, false);
	    document.addEventListener('focusin', onFocus, false);
	    scope.forEach(element => element.addEventListener('focusin', onFocus, false));
	    scope.forEach(element => element.addEventListener('focusout', onBlur, false));
	    return () => {
	      document.removeEventListener('keydown', onKeyDown, false);
	      document.removeEventListener('focusin', onFocus, false);
	      scope.forEach(element => element.removeEventListener('focusin', onFocus, false));
	      scope.forEach(element => element.removeEventListener('focusout', onBlur, false));
	    };
	  }, [scopeRef, contain]); // eslint-disable-next-line arrow-body-style

	  _react.useEffect(() => {
	    return () => cancelAnimationFrame(raf.current);
	  }, [raf]);
	}

	function $c9e8f80f5bb1841844f54e4ad30b$var$isElementInAnyScope(element, scopes) {
	  for (let scope of scopes.values()) {
	    if ($c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(element, scope.current)) {
	      return true;
	    }
	  }

	  return false;
	}

	function $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(element, scope) {
	  return scope.some(node => node.contains(element));
	}

	function $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(element, scroll) {
	  if (scroll === void 0) {
	    scroll = false;
	  }

	  if (element != null && !scroll) {
	    try {
	      focusSafely(element);
	    } catch (err) {// ignore
	    }
	  } else if (element != null) {
	    try {
	      element.focus();
	    } catch (err) {// ignore
	    }
	  }
	}

	function $c9e8f80f5bb1841844f54e4ad30b$var$focusFirstInScope(scope) {
	  let sentinel = scope[0].previousElementSibling;
	  let walker = getFocusableTreeWalker($c9e8f80f5bb1841844f54e4ad30b$var$getScopeRoot(scope), {
	    tabbable: true
	  }, scope);
	  walker.currentNode = sentinel;
	  $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(walker.nextNode());
	}

	function $c9e8f80f5bb1841844f54e4ad30b$var$useAutoFocus(scopeRef, autoFocus) {
	  _react.useEffect(() => {
	    if (autoFocus) {
	      $c9e8f80f5bb1841844f54e4ad30b$var$activeScope = scopeRef;

	      if (!$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(document.activeElement, $c9e8f80f5bb1841844f54e4ad30b$var$activeScope.current)) {
	        $c9e8f80f5bb1841844f54e4ad30b$var$focusFirstInScope(scopeRef.current);
	      }
	    }
	  }, [scopeRef, autoFocus]);
	}

	function $c9e8f80f5bb1841844f54e4ad30b$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
	  // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
	  useLayoutEffect(() => {
	    let scope = scopeRef.current;
	    let nodeToRestore = document.activeElement; // Handle the Tab key so that tabbing out of the scope goes to the next element
	    // after the node that had focus when the scope mounted. This is important when
	    // using portals for overlays, so that focus goes to the expected element when
	    // tabbing out of the overlay.

	    let onKeyDown = e => {
	      if (e.key !== 'Tab' || e.altKey || e.ctrlKey || e.metaKey) {
	        return;
	      }

	      let focusedElement = document.activeElement;

	      if (!$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(focusedElement, scope)) {
	        return;
	      } // Create a DOM tree walker that matches all tabbable elements


	      let walker = getFocusableTreeWalker(document.body, {
	        tabbable: true
	      }); // Find the next tabbable element after the currently focused element

	      walker.currentNode = focusedElement;
	      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();

	      if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body) {
	        nodeToRestore = null;
	      } // If there is no next element, or it is outside the current scope, move focus to the
	      // next element after the node to restore to instead.


	      if ((!nextElement || !$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(nextElement, scope)) && nodeToRestore) {
	        walker.currentNode = nodeToRestore; // Skip over elements within the scope, in case the scope immediately follows the node to restore.

	        do {
	          nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
	        } while ($c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(nextElement, scope));

	        e.preventDefault();
	        e.stopPropagation();

	        if (nextElement) {
	          $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(nextElement, true);
	        } else {
	          // If there is no next element, blur the focused element to move focus to the body.
	          focusedElement.blur();
	        }
	      }
	    };

	    if (!contain) {
	      document.addEventListener('keydown', onKeyDown, true);
	    }

	    return () => {
	      if (!contain) {
	        document.removeEventListener('keydown', onKeyDown, true);
	      }

	      if (restoreFocus && nodeToRestore && $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(document.activeElement, scope)) {
	        requestAnimationFrame(() => {
	          if (document.body.contains(nodeToRestore)) {
	            $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(nodeToRestore);
	          }
	        });
	      }
	    };
	  }, [scopeRef, restoreFocus, contain]);
	}
	/**
	 * Create a [TreeWalker]{@link https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker}
	 * that matches all focusable/tabbable elements.
	 */


	function getFocusableTreeWalker(root, opts, scope) {
	  let selector = opts != null && opts.tabbable ? $c9e8f80f5bb1841844f54e4ad30b$var$TABBABLE_ELEMENT_SELECTOR : $c9e8f80f5bb1841844f54e4ad30b$var$FOCUSABLE_ELEMENT_SELECTOR;
	  let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
	    acceptNode(node) {
	      var _opts$from;

	      // Skip nodes inside the starting node.
	      if (opts != null && (_opts$from = opts.from) != null && _opts$from.contains(node)) {
	        return NodeFilter.FILTER_REJECT;
	      }

	      if (node.matches(selector) && $ee5e90cbb4a22466973155c14222fa1$export$isElementVisible(node) && (!scope || $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(node, scope))) {
	        return NodeFilter.FILTER_ACCEPT;
	      }

	      return NodeFilter.FILTER_SKIP;
	    }

	  });

	  if (opts != null && opts.from) {
	    walker.currentNode = opts.from;
	  }

	  return walker;
	}

	/**
	 * Determines whether a focus ring should be shown to indicate keyboard focus.
	 * Focus rings are visible only when the user is interacting with a keyboard,
	 * not with a mouse, touch, or other input methods.
	 */
	function useFocusRing(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  let {
	    autoFocus = false,
	    isTextInput,
	    within
	  } = props;
	  let state = _react.useRef({
	    isFocused: false,
	    isFocusVisible: autoFocus || isFocusVisible()
	  }).current;
	  let [isFocusVisibleState, setFocusVisible] = _react.useState(() => state.isFocused && state.isFocusVisible);

	  let updateState = () => setFocusVisible(state.isFocused && state.isFocusVisible);

	  let onFocusChange = isFocused => {
	    state.isFocused = isFocused;
	    updateState();
	  };

	  useFocusVisibleListener(isFocusVisible => {
	    state.isFocusVisible = isFocusVisible;
	    updateState();
	  }, [], {
	    isTextInput
	  });
	  let {
	    focusProps
	  } = useFocus({
	    isDisabled: within,
	    onFocusChange
	  });
	  let {
	    focusWithinProps
	  } = useFocusWithin({
	    isDisabled: !within,
	    onFocusWithinChange: onFocusChange
	  });
	  return {
	    isFocused: state.isFocused,
	    isFocusVisible: state.isFocused && isFocusVisibleState,
	    focusProps: within ? focusWithinProps : focusProps
	  };
	}

	/**
	 * A utility component that applies a CSS class when an element has keyboard focus.
	 * Focus rings are visible only when the user is interacting with a keyboard,
	 * not with a mouse, touch, or other input methods.
	 */
	function FocusRing(props) {
	  let {
	    children,
	    focusClass,
	    focusRingClass
	  } = props;
	  let {
	    isFocused,
	    isFocusVisible,
	    focusProps
	  } = useFocusRing(props);

	  let child = _react__default["default"].Children.only(children);

	  return /*#__PURE__*/_react__default["default"].cloneElement(child, mergeProps(child.props, _extends({}, focusProps, {
	    className: cn__default["default"]({
	      [focusClass || '']: isFocused,
	      [focusRingClass || '']: isFocusVisible
	    })
	  })));
	}

	let $e11539c8317b2d21639df611cb5658f$var$FocusableContext = /*#__PURE__*/_react__default["default"].createContext(null);

	function $e11539c8317b2d21639df611cb5658f$var$useFocusableContext(ref) {
	  let context = _react.useContext($e11539c8317b2d21639df611cb5658f$var$FocusableContext) || {};
	  useSyncRef(context, ref);
	  return context;
	}
	/**
	 * Provides DOM props to the nearest focusable child.
	 */


	function $e11539c8317b2d21639df611cb5658f$var$FocusableProvider(props, ref) {
	  let {
	    children
	  } = props,
	      otherProps = _objectWithoutPropertiesLoose(props, ["children"]);

	  let context = _extends({}, otherProps, {
	    ref
	  });

	  return /*#__PURE__*/_react__default["default"].createElement($e11539c8317b2d21639df611cb5658f$var$FocusableContext.Provider, {
	    value: context
	  }, children);
	}

	let FocusableProvider = /*#__PURE__*/_react__default["default"].forwardRef($e11539c8317b2d21639df611cb5658f$var$FocusableProvider);

	/**
	 * Used to make an element focusable and capable of auto focus.
	 */
	function useFocusable(props, domRef) {
	  let {
	    focusProps
	  } = useFocus(props);
	  let {
	    keyboardProps
	  } = useKeyboard(props);
	  let interactions = mergeProps(focusProps, keyboardProps);
	  let domProps = $e11539c8317b2d21639df611cb5658f$var$useFocusableContext(domRef);
	  let interactionProps = props.isDisabled ? {} : domProps;
	  _react.useEffect(() => {
	    if (props.autoFocus && domRef.current) {
	      domRef.current.focus();
	    }
	  }, [props.autoFocus, domRef]);
	  return {
	    focusableProps: mergeProps(_extends({}, interactions, {
	      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
	    }), interactionProps)
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for a button component. Handles mouse, keyboard, and touch interactions,
	 * focus behavior, and ARIA props for both native button elements and custom element types.
	 * @param props - Props to be applied to the button.
	 * @param ref - A ref to a DOM element for the button.
	 */
	function useButton(props, ref) {
	  /* eslint-enable no-redeclare */
	  let {
	    elementType = 'button',
	    isDisabled,
	    onPress,
	    onPressStart,
	    onPressEnd,
	    onPressChange,
	    // @ts-ignore - undocumented
	    preventFocusOnPress,
	    // @ts-ignore
	    onClick: deprecatedOnClick,
	    href,
	    target,
	    rel,
	    type = 'button'
	  } = props;
	  let additionalProps;

	  if (elementType === 'button') {
	    additionalProps = {
	      type,
	      disabled: isDisabled
	    };
	  } else {
	    additionalProps = {
	      role: 'button',
	      tabIndex: isDisabled ? undefined : 0,
	      href: elementType === 'a' && isDisabled ? undefined : href,
	      target: elementType === 'a' ? target : undefined,
	      type: elementType === 'input' ? type : undefined,
	      disabled: elementType === 'input' ? isDisabled : undefined,
	      'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
	      rel: elementType === 'a' ? rel : undefined
	    };
	  }

	  let {
	    pressProps,
	    isPressed
	  } = usePress({
	    onPressStart,
	    onPressEnd,
	    onPressChange,
	    onPress,
	    isDisabled,
	    preventFocusOnPress,
	    ref
	  });
	  let {
	    focusableProps
	  } = useFocusable(props, ref);
	  let buttonProps = mergeProps(focusableProps, pressProps);
	  buttonProps = mergeProps(buttonProps, filterDOMProps(props, {
	    labelable: true
	  }));
	  return {
	    isPressed,
	    // Used to indicate press state for visual
	    buttonProps: mergeProps(additionalProps, buttonProps, {
	      'aria-haspopup': props['aria-haspopup'],
	      'aria-expanded': props['aria-expanded'],
	      'aria-controls': props['aria-controls'],
	      'aria-pressed': props['aria-pressed'],
	      onClick: e => {
	        if (deprecatedOnClick) {
	          deprecatedOnClick(e);
	          console.warn('onClick is deprecated, please use onPress');
	        }
	      }
	    })
	  };
	}

	const buttonStyle = twStyle({
	  base: CX('leading-zero', 'inline-flex', 'items-center', 'outline-none', 'truncate')
	});
	const buttonGroupStyle = twStyle({
	  base: twCss({
	    [`& > ${buttonStyle.selector}:not(:first-child):not(:last-child)`]: {
	      borderRight: '0px',
	      borderRadius: '0px'
	    },
	    // The first button (unless it's an only button)
	    [`& > ${buttonStyle.selector}:first-child:not(:last-child)`]: {
	      borderTopRightRadius: '0px',
	      borderBottomRightRadius: '0px',
	      borderRight: '0px'
	    },
	    // The last button (unless it's an only button)
	    [`& > ${buttonStyle.selector}:last-child:not(:first-child)`]: {
	      borderTopLeftRadius: '0px',
	      borderBottomLeftRadius: '0px'
	    }
	  })
	});

	const sizes$7 = {
	  md: {
	    px: 3,
	    fontSize: 'base',
	    rounded: true,
	    iconSize: 'xs',
	    leftIconMx: -1,
	    leftIconMr: 1.5,
	    rightIconMl: 1.5,
	    rightIconMr: -0.5
	  },
	  sm: {
	    px: 1.5,
	    fontSize: 'base',
	    rounded: true,
	    iconSize: 'xs',
	    leftIconMx: 0,
	    leftIconMr: 1,
	    rightIconMl: 1,
	    rightIconMr: -0.5
	  }
	};
	const variants$5 = {
	  default: {
	    default: {
	      borderColor: 'button',
	      bg: {
	        default: 'canvas',
	        hover: 'canvas-tint-more',
	        active: 'canvas-100'
	      },
	      opacity: {
	        disabled: 60
	      }
	    },
	    success: {
	      borderColor: 'success',
	      ringColor: 'success'
	    },
	    warning: {
	      borderColor: 'warning',
	      ringColor: 'warning'
	    },
	    danger: {
	      borderColor: 'danger',
	      ringColor: 'danger'
	    }
	  },
	  minimal: {
	    default: {
	      color: {
	        default: 'body',
	        hover: 'body',
	        focus: 'body'
	      },
	      bg: {
	        hover: 'canvas-100',
	        active: 'canvas-200'
	      },
	      borderColor: 'transparent',
	      opacity: {
	        disabled: 70
	      }
	    },
	    success: {
	      color: 'success'
	    },
	    warning: {
	      color: 'warning'
	    },
	    danger: {
	      color: 'danger'
	    }
	  },
	  primary: {
	    default: {
	      color: {
	        default: 'on-primary',
	        disabled: 'body'
	      },
	      bg: {
	        default: 'primary',
	        hover: 'primary-dark',
	        active: 'primary-darker',
	        disabled: 'canvas-100'
	      },
	      borderColor: 'transparent',
	      opacity: {
	        disabled: 70
	      }
	    },
	    success: {
	      color: {
	        default: 'on-success',
	        disabled: 'body'
	      },
	      bg: {
	        default: 'success',
	        hover: 'success-dark',
	        active: 'success-darker',
	        disabled: 'canvas-100'
	      }
	    },
	    warning: {
	      color: {
	        default: 'on-warning',
	        disabled: 'body'
	      },
	      bg: {
	        default: 'warning',
	        hover: 'warning-dark',
	        active: 'warning-darker'
	      }
	    },
	    danger: {
	      color: {
	        default: 'on-danger',
	        disabled: 'body'
	      },
	      bg: {
	        default: 'danger',
	        hover: 'danger-dark',
	        active: 'danger-darker'
	      }
	    }
	  }
	};
	const fieldButtonVariants = {
	  minimal: {
	    default: {
	      fontWeight: 'normal',
	      color: {
	        default: 'body'
	      },
	      ring: false,
	      bg: {
	        default: 'transparent'
	      },
	      borderColor: {
	        default: 'transparent',
	        hover: 'input',
	        focus: 'primary',
	        active: 'primary'
	      }
	    },
	    success: {
	      color: 'success',
	      borderColor: {
	        default: 'transparent',
	        hover: 'success',
	        focus: 'success'
	      }
	    },
	    warning: {
	      color: 'warning',
	      borderColor: {
	        default: 'transparent',
	        hover: 'warning',
	        focus: 'warning'
	      }
	    },
	    danger: {
	      color: 'danger',
	      borderColor: {
	        default: 'transparent',
	        hover: 'danger',
	        focus: 'danger'
	      }
	    }
	  },
	  outlined: {
	    default: {
	      borderColor: {
	        default: 'input',
	        hover: 'input',
	        focus: 'primary',
	        active: 'primary'
	      }
	    },
	    success: {
	      borderColor: {
	        default: 'success',
	        hover: 'success',
	        focus: 'success'
	      }
	    },
	    warning: {
	      borderColor: {
	        default: 'warning',
	        hover: 'warning',
	        focus: 'warning'
	      }
	    },
	    danger: {
	      borderColor: {
	        default: 'danger',
	        hover: 'danger',
	        focus: 'danger'
	      }
	    }
	  }
	};

	const _excluded$B = ["appearance", "intent", "size", "disabled", "loading", "className", "icon", "iconRight", "label", "children", "active", "autoFocus", "onPress", "onPressChange", "onPressEnd", "onPressStart", "onPressUp", "noFocusRing", "fullWidth"],
	      _excluded2$b = ["hover"],
	      _excluded3$4 = ["active", "hover"],
	      _excluded4$3 = ["color"];
	const defaultElement$8 = 'button';

	function Button(_ref, ref) {
	  let {
	    appearance = 'default',
	    intent = 'default',
	    size = 'md',
	    disabled,
	    loading,
	    className,
	    icon,
	    iconRight,
	    children,
	    active,
	    autoFocus,
	    onPress,
	    onPressChange,
	    onPressEnd,
	    onPressStart,
	    onPressUp,
	    noFocusRing,
	    fullWidth
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$B);

	  var _a, _b, _c, _d, _e;

	  const domRef = useFocusableRef(ref);
	  const {
	    buttonProps
	  } = useButton(Object.assign({
	    isDisabled: disabled,
	    onPress,
	    onPressChange,
	    onPressEnd,
	    onPressStart,
	    onPressUp
	  }, props), domRef);
	  const {
	    hoverProps
	  } = useHover(Object.assign({
	    isDisabled: disabled
	  }, props));
	  const {
	    matchedProps,
	    remainingProps
	  } = splitBoxProps(props);
	  const stateProps = Object.assign({}, variants$5.default.default, variants$5.default[intent], (_a = variants$5[appearance]) === null || _a === void 0 ? void 0 : _a.default, (_b = variants$5[appearance]) === null || _b === void 0 ? void 0 : _b[intent]);
	  /**
	   * If active, remove other state effects
	   */

	  if (active) {
	    for (const i in stateProps) {
	      const prop = stateProps[i];

	      if (prop && typeof prop === 'object') {
	        if (prop.hasOwnProperty('active')) {
	          stateProps[i] = prop.active;
	        } else if (prop.hasOwnProperty('hover')) {
	          // remove props immutably
	          const _stateProps$i = stateProps[i],
	                newProps = _objectWithoutPropertiesLoose$1(_stateProps$i, _excluded2$b);

	          stateProps[i] = newProps;
	        }
	      }
	    }
	  }
	  /**
	   * If in loading or disabled states, remove other ui effects like hover
	   */


	  if (loading || disabled) {
	    for (const i in stateProps) {
	      const prop = stateProps[i];

	      if (prop && typeof prop === 'object') {
	        // remove props immutably
	        const _stateProps$i2 = stateProps[i],
	              newProps = _objectWithoutPropertiesLoose$1(_stateProps$i2, _excluded3$4);

	        stateProps[i] = newProps;
	      }
	    }
	  }

	  const _mergeProps = mergeProps(matchedProps, buttonProps, hoverProps),
	        propsWithoutColor = _objectWithoutPropertiesLoose$1(_mergeProps, _excluded4$3);

	  const elem = jsxRuntime.jsxs(Box, Object.assign({
	    as: defaultElement$8,
	    px: (_c = sizes$7[size]) === null || _c === void 0 ? void 0 : _c.px,
	    fontSize: (_d = sizes$7[size]) === null || _d === void 0 ? void 0 : _d.fontSize,
	    fontWeight: "medium",
	    rounded: (_e = sizes$7[size]) === null || _e === void 0 ? void 0 : _e.rounded,
	    h: size,
	    borderColor: "button",
	    className: cn__default["default"]('sl-button', className),
	    disabled: loading || disabled,
	    cursor: loading ? 'wait' : disabled ? 'not-allowed' : undefined,
	    border: true,
	    opacity: loading ? 70 : undefined,
	    w: fullWidth ? 'full' : undefined,
	    justifyContent: fullWidth ? 'center' : undefined
	  }, remainingProps, stateProps, propsWithoutColor, {
	    styled: buttonStyle(),
	    ref: domRef,
	    children: [loading ? jsxRuntime.jsx(ButtonIcon, {
	      icon: "spinner",
	      pulse: true,
	      size: size,
	      hasContent: !!children
	    }, void 0) : null, icon && !loading ? jsxRuntime.jsx(ButtonIcon, {
	      icon: icon,
	      size: size,
	      hasContent: !!children
	    }, void 0) : null, children, iconRight ? jsxRuntime.jsx(ButtonRightIcon, {
	      icon: iconRight,
	      size: size
	    }, void 0) : null]
	  }), void 0);

	  if (noFocusRing) {
	    return elem;
	  }

	  return jsxRuntime.jsx(FocusRing, {
	    focusRingClass: "sl-focus-ring",
	    autoFocus: autoFocus,
	    children: elem
	  }, void 0);
	}

	const _Button = /*#__PURE__*/_react.forwardRef(Button);

	const ButtonIcon = ({
	  icon,
	  size,
	  hasContent,
	  pulse
	}) => {
	  var _a, _b;

	  let elem = icon;

	  if (isIconProp(icon)) {
	    elem = jsxRuntime.jsx(Icon, {
	      icon: icon,
	      size: size === 'sm' ? 'sm' : undefined,
	      pulse: pulse,
	      fixedWidth: true
	    }, void 0);
	  }

	  return jsxRuntime.jsx(Box, {
	    mr: hasContent ? (_a = sizes$7[size]) === null || _a === void 0 ? void 0 : _a.leftIconMr : undefined,
	    mx: hasContent ? undefined : (_b = sizes$7[size]) === null || _b === void 0 ? void 0 : _b.leftIconMx,
	    children: elem
	  }, void 0);
	};

	const ButtonRightIcon = ({
	  icon,
	  size
	}) => {
	  var _a, _b, _c;

	  let elem = icon;

	  if (isIconProp(icon)) {
	    elem = jsxRuntime.jsx(Icon, {
	      icon: icon,
	      fixedWidth: true
	    }, void 0);
	  }

	  return jsxRuntime.jsx(Box, {
	    ml: (_a = sizes$7[size]) === null || _a === void 0 ? void 0 : _a.rightIconMl,
	    mr: (_b = sizes$7[size]) === null || _b === void 0 ? void 0 : _b.rightIconMr,
	    fontSize: (_c = sizes$7[size]) === null || _c === void 0 ? void 0 : _c.iconSize,
	    children: elem
	  }, void 0);
	};

	const _excluded$A = ["children", "className"];
	const defaultElement$7 = 'div';
	const ButtonGroup = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    children,
	    className
	  } = _ref,
	      rest = _objectWithoutPropertiesLoose$1(_ref, _excluded$A);

	  return jsxRuntime.jsx(Flex, Object.assign({
	    as: defaultElement$7
	  }, rest, {
	    justifyItems: "start",
	    alignItems: "center",
	    className: cn__default["default"]('sl-button-group', className),
	    ref: ref,
	    styled: buttonGroupStyle(),
	    children: children
	  }), void 0);
	}));

	function useClipboard(text, timeout = 1500) {
	  const [hasCopied, setHasCopied] = _react.useState(false);
	  const onCopy = _react.useCallback(() => {
	    const didCopy = copy__default["default"](text);
	    setHasCopied(didCopy);
	  }, [text]);
	  _react.useEffect(() => {
	    if (hasCopied) {
	      const id = setTimeout(() => {
	        setHasCopied(false);
	      }, timeout);
	      return () => clearTimeout(id);
	    }
	  }, [timeout, hasCopied]);
	  return {
	    value: text,
	    onCopy,
	    hasCopied
	  };
	}

	function useCollectionKeyAccumulator(nodes, targetProp, targetValue) {
	  const accumulator = _react.useRef(accumulateCollectionKeysByProp(targetProp, targetValue));
	  return accumulator.current(nodes);
	}

	function useControllableProp(prop, state) {
	  const {
	    current: isControlled
	  } = _react__namespace.useRef(prop !== undefined);
	  const value = isControlled && typeof prop !== 'undefined' ? prop : state;
	  return [isControlled, value];
	}
	const defaultPropsMap = {
	  value: 'value',
	  defaultValue: 'defaultValue',
	  onChange: 'onChange'
	};
	/**
	 * React hook for using controlling component state.
	 * @param props
	 */

	function useControllableState(props) {
	  const {
	    value: valueProp,
	    defaultValue,
	    onChange,
	    name = 'Component',
	    propsMap = defaultPropsMap
	  } = props;
	  const [valueState, setValue] = _react__namespace.useState(defaultValue);
	  const {
	    current: isControlled
	  } = _react__namespace.useRef(valueProp !== undefined); // don't switch from controlled to uncontrolled

	  _react__namespace.useEffect(() => {
	    const nextIsControlled = valueProp !== undefined;
	    const nextMode = nextIsControlled ? 'a controlled' : 'an uncontrolled';
	    const mode = isControlled ? 'a controlled' : 'an uncontrolled';
	    warn({
	      condition: isControlled !== nextIsControlled,
	      message: `Warning: ${name} is changing from ${mode} to ${nextMode} component. ` + `Components should not switch from controlled to uncontrolled (or vice versa). ` + `Use the '${propsMap.value}' with an '${propsMap.onChange}' handler. ` + `If you want an uncontrolled component, remove the ${propsMap.value} prop and use '${propsMap.defaultValue}' instead. "` + `More info: https://fb.me/react-controlled-components`
	    });
	  }, [valueProp, isControlled, name]);
	  const {
	    current: initialDefaultValue
	  } = _react__namespace.useRef(defaultValue);
	  _react__namespace.useEffect(() => {
	    warn({
	      condition: initialDefaultValue !== defaultValue,
	      message: `Warning: A component is changing the default value of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`
	    });
	  }, [JSON.stringify(defaultValue)]);
	  const value = isControlled ? valueProp : valueState;
	  const updateValue = _react__namespace.useCallback(next => {
	    const nextValue = runIfFn(next, value);
	    if (!isControlled) setValue(nextValue);
	    onChange === null || onChange === void 0 ? void 0 : onChange(nextValue);
	  }, [onChange]);
	  return [value, updateValue];
	}

	const useModalityStore = create__default["default"](set => ({
	  currentModality: null,
	  setInteractionModality: modality => set(state => {
	    return Object.assign({}, state, {
	      currentModality: modality
	    });
	  })
	}));
	function useInteractionModality() {
	  return useModalityStore(state => state.currentModality);
	}
	function getInteractionModality() {
	  return useModalityStore.getState().currentModality;
	}
	/**
	 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
	 */

	function isValidKey(e) {
	  // Control and Shift keys trigger when navigating back to the tab with keyboard.
	  return !(e.metaKey || !isMac() && e.altKey || e.ctrlKey || e.type === 'keyup' && (e.key === 'Control' || e.key === 'Shift'));
	}

	function handleKeyboardEvent(e) {
	  if (isValidKey(e)) {
	    const {
	      currentModality
	    } = useModalityStore.getState();

	    if (currentModality !== 'keyboard') {
	      _reactDom.unstable_batchedUpdates(() => {
	        useModalityStore.getState().setInteractionModality('keyboard');
	      });
	    }
	  }
	}

	function handlePointerEvent() {
	  const state = useModalityStore.getState();

	  if (state.currentModality !== 'pointer') {
	    _reactDom.unstable_batchedUpdates(() => {
	      useModalityStore.getState().setInteractionModality('pointer');
	    });
	  }
	}

	function isVirtualClick(event) {
	  // JAWS/NVDA with Firefox.
	  if (event.mozInputSource === 0 && event.isTrusted) {
	    return true;
	  }

	  return event.detail === 0 && !event.pointerType;
	}

	function handleClickEvent(e) {
	  if (isVirtualClick(e)) {
	    const state = useModalityStore.getState();

	    if (state.currentModality !== 'virtual') {
	      _reactDom.unstable_batchedUpdates(() => {
	        useModalityStore.getState().setInteractionModality('virtual');
	      });
	    }
	  }
	}

	let hasSetupGlobalListeners = false;

	function setupGlobalFocusEvents() {
	  if (typeof window === 'undefined' || hasSetupGlobalListeners) {
	    return;
	  }

	  document.addEventListener('keydown', handleKeyboardEvent, true);
	  document.addEventListener('keyup', handleKeyboardEvent, true);
	  document.addEventListener('click', handleClickEvent, true);

	  if (typeof PointerEvent !== 'undefined') {
	    document.addEventListener('pointerdown', handlePointerEvent, true);
	    document.addEventListener('pointermove', handlePointerEvent, true);
	    document.addEventListener('pointerup', handlePointerEvent, true);
	  } else {
	    document.addEventListener('mousedown', handlePointerEvent, true);
	    document.addEventListener('mousemove', handlePointerEvent, true);
	    document.addEventListener('mouseup', handlePointerEvent, true);
	  }

	  hasSetupGlobalListeners = true;
	}

	if (typeof document !== 'undefined') {
	  if (document.readyState !== 'loading') {
	    setupGlobalFocusEvents();
	  } else {
	    document.addEventListener('DOMContentLoaded', setupGlobalFocusEvents);
	  }
	}

	const DEFAULT_CONTEXT = {
	  componentOverrides: {}
	};
	const defaultMosaicContext = {
	  componentOverrides: {}
	};
	const MosaicContext = /*#__PURE__*/_react.createContext(undefined);
	const useMosaicContext = () => {
	  return _react.useContext(MosaicContext) || DEFAULT_CONTEXT;
	};

	const visibleOverlays = [];
	/**
	 * Provides the behavior for overlays such as dialogs, popovers, and menus.
	 * Hides the overlay when the user interacts outside it, when the Escape key is pressed,
	 * or optionally, on blur. Only the top-most overlay will close at once.
	 */

	function useOverlay(props, ref) {
	  let {
	    onClose,
	    shouldCloseOnBlur,
	    isOpen,
	    isDismissable = false,
	    isKeyboardDismissDisabled = false,
	    shouldCloseOnInteractOutside
	  } = props; // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.

	  _react.useEffect(() => {
	    if (isOpen) {
	      visibleOverlays.push(ref);
	    }

	    return () => {
	      let index = visibleOverlays.indexOf(ref);

	      if (index >= 0) {
	        visibleOverlays.splice(index, 1);
	      }
	    };
	  }, [isOpen, ref]); // Only hide the overlay when it is the topmost visible overlay in the stack.

	  let onHide = () => {
	    if (visibleOverlays[visibleOverlays.length - 1] === ref && onClose) {
	      onClose();
	    }
	  };

	  let onInteractOutsideStart = e => {
	    if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
	      const modality = getInteractionModality$1();

	      if (modality !== 'pointer' && visibleOverlays[visibleOverlays.length - 1] === ref) {
	        e.stopPropagation();
	        e.preventDefault();
	      }
	    }
	  };

	  let onInteractOutside = e => {
	    if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
	      const modality = getInteractionModality$1();

	      if (modality !== 'pointer' && visibleOverlays[visibleOverlays.length - 1] === ref) {
	        e.stopPropagation();
	        e.preventDefault();
	      }

	      onHide();
	    }
	  }; // Handle the escape key


	  let onKeyDown = e => {
	    if (e.key === 'Escape' && !isKeyboardDismissDisabled) {
	      e.preventDefault();
	      onHide();
	    }
	  }; // Handle clicking outside the overlay to close it


	  useInteractOutside({
	    ref,
	    onInteractOutside: isDismissable ? onInteractOutside : null,
	    onInteractOutsideStart
	  });
	  let {
	    focusWithinProps
	  } = useFocusWithin({
	    isDisabled: !shouldCloseOnBlur,
	    onBlurWithin: () => {
	      if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(document.activeElement)) {
	        onClose();
	      }
	    }
	  });

	  let onPointerDownUnderlay = e => {
	    // fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
	    if (e.target === e.currentTarget) {
	      e.preventDefault();
	    }
	  };

	  return {
	    overlayProps: Object.assign({
	      onKeyDown
	    }, focusWithinProps),
	    underlayProps: {
	      onPointerDown: onPointerDownUnderlay
	    }
	  };
	}

	const $f431c2c11cc559fa3c5864caafbcfd19$var$styles = {
	  border: 0,
	  clip: 'rect(0 0 0 0)',
	  clipPath: 'inset(50%)',
	  height: 1,
	  margin: '0 -1px -1px 0',
	  overflow: 'hidden',
	  padding: 0,
	  position: 'absolute',
	  width: 1,
	  whiteSpace: 'nowrap'
	};

	/**
	 * Provides props for an element that hides its children visually
	 * but keeps content visible to assistive technology.
	 */
	function useVisuallyHidden$1(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  let {
	    style,
	    isFocusable
	  } = props;
	  let [isFocused, setFocused] = _react.useState(false);
	  let {
	    focusProps
	  } = useFocus({
	    isDisabled: !isFocusable,
	    onFocusChange: setFocused
	  }); // If focused, don't hide the element.

	  let combinedStyles = _react.useMemo(() => {
	    if (isFocused) {
	      return style;
	    } else if (style) {
	      return _extends({}, $f431c2c11cc559fa3c5864caafbcfd19$var$styles, style);
	    } else {
	      return $f431c2c11cc559fa3c5864caafbcfd19$var$styles;
	    }
	  }, [isFocused]);
	  return {
	    visuallyHiddenProps: _extends({}, focusProps, {
	      style: combinedStyles
	    })
	  };
	}

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	}

	const $d45e305fb90d49e7c81f49bb4afe323b$var$AXIS = {
	  top: 'top',
	  bottom: 'top',
	  left: 'left',
	  right: 'left'
	};
	const $d45e305fb90d49e7c81f49bb4afe323b$var$FLIPPED_DIRECTION = {
	  top: 'bottom',
	  bottom: 'top',
	  left: 'right',
	  right: 'left'
	};
	const $d45e305fb90d49e7c81f49bb4afe323b$var$CROSS_AXIS = {
	  top: 'left',
	  left: 'top'
	};
	const $d45e305fb90d49e7c81f49bb4afe323b$var$AXIS_SIZE = {
	  top: 'height',
	  left: 'width'
	};
	const $d45e305fb90d49e7c81f49bb4afe323b$var$PARSED_PLACEMENT_CACHE = {}; // @ts-ignore

	let $d45e305fb90d49e7c81f49bb4afe323b$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;

	function $d45e305fb90d49e7c81f49bb4afe323b$var$getContainerDimensions(containerNode) {
	  let width = 0,
	      height = 0,
	      top = 0,
	      left = 0;
	  let scroll = {};

	  if (containerNode.tagName === 'BODY') {
	    var _visualViewport$width, _visualViewport$heigh;

	    width = (_visualViewport$width = $d45e305fb90d49e7c81f49bb4afe323b$var$visualViewport == null ? void 0 : $d45e305fb90d49e7c81f49bb4afe323b$var$visualViewport.width) != null ? _visualViewport$width : document.documentElement.clientWidth;
	    height = (_visualViewport$heigh = $d45e305fb90d49e7c81f49bb4afe323b$var$visualViewport == null ? void 0 : $d45e305fb90d49e7c81f49bb4afe323b$var$visualViewport.height) != null ? _visualViewport$heigh : document.documentElement.clientHeight;
	    scroll.top = _domHelpersQueryScrollTop__default["default"](_domHelpersOwnerDocument__default["default"](containerNode).documentElement) || _domHelpersQueryScrollTop__default["default"](containerNode);
	    scroll.left = _domHelpersQueryScrollLeft__default["default"](_domHelpersOwnerDocument__default["default"](containerNode).documentElement) || _domHelpersQueryScrollLeft__default["default"](containerNode);
	  } else {
	    ({
	      width,
	      height,
	      top,
	      left
	    } = _domHelpersQueryOffset__default["default"](containerNode));
	    scroll.top = _domHelpersQueryScrollTop__default["default"](containerNode);
	    scroll.left = _domHelpersQueryScrollLeft__default["default"](containerNode);
	  }

	  return {
	    width,
	    height,
	    scroll,
	    top,
	    left
	  };
	}

	function $d45e305fb90d49e7c81f49bb4afe323b$var$getScroll(node) {
	  return {
	    top: node.scrollTop,
	    left: node.scrollLeft,
	    width: node.scrollWidth,
	    height: node.scrollHeight
	  };
	}

	function $d45e305fb90d49e7c81f49bb4afe323b$var$getDelta(axis, offset, size, containerDimensions, padding) {
	  let containerScroll = containerDimensions.scroll[axis];
	  let containerHeight = containerDimensions[$d45e305fb90d49e7c81f49bb4afe323b$var$AXIS_SIZE[axis]];
	  let startEdgeOffset = offset - padding - containerScroll;
	  let endEdgeOffset = offset + padding - containerScroll + size;

	  if (startEdgeOffset < 0) {
	    return -startEdgeOffset;
	  } else if (endEdgeOffset > containerHeight) {
	    return Math.max(containerHeight - endEdgeOffset, -startEdgeOffset);
	  } else {
	    return 0;
	  }
	}

	function $d45e305fb90d49e7c81f49bb4afe323b$var$getMargins(node) {
	  let style = window.getComputedStyle(node);
	  return {
	    top: parseInt(style.marginTop, 10) || 0,
	    bottom: parseInt(style.marginBottom, 10) || 0,
	    left: parseInt(style.marginLeft, 10) || 0,
	    right: parseInt(style.marginRight, 10) || 0
	  };
	}

	function $d45e305fb90d49e7c81f49bb4afe323b$var$parsePlacement(input) {
	  if ($d45e305fb90d49e7c81f49bb4afe323b$var$PARSED_PLACEMENT_CACHE[input]) {
	    return $d45e305fb90d49e7c81f49bb4afe323b$var$PARSED_PLACEMENT_CACHE[input];
	  }

	  let [placement, crossPlacement] = input.split(' ');
	  let axis = $d45e305fb90d49e7c81f49bb4afe323b$var$AXIS[placement] || 'right';
	  let crossAxis = $d45e305fb90d49e7c81f49bb4afe323b$var$CROSS_AXIS[axis];

	  if (!$d45e305fb90d49e7c81f49bb4afe323b$var$AXIS[crossPlacement]) {
	    crossPlacement = 'center';
	  }

	  let size = $d45e305fb90d49e7c81f49bb4afe323b$var$AXIS_SIZE[axis];
	  let crossSize = $d45e305fb90d49e7c81f49bb4afe323b$var$AXIS_SIZE[crossAxis];
	  $d45e305fb90d49e7c81f49bb4afe323b$var$PARSED_PLACEMENT_CACHE[input] = {
	    placement,
	    crossPlacement,
	    axis,
	    crossAxis,
	    size,
	    crossSize
	  };
	  return $d45e305fb90d49e7c81f49bb4afe323b$var$PARSED_PLACEMENT_CACHE[input];
	}

	function $d45e305fb90d49e7c81f49bb4afe323b$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned) {
	  let {
	    placement,
	    crossPlacement,
	    axis,
	    crossAxis,
	    size,
	    crossSize
	  } = placementInfo;
	  let position = {}; // button position

	  position[crossAxis] = childOffset[crossAxis];

	  if (crossPlacement === 'center') {
	    //  + (button size / 2) - (overlay size / 2)
	    // at this point the overlay center should match the button center
	    position[crossAxis] += (childOffset[crossSize] - overlaySize[crossSize]) / 2;
	  } else if (crossPlacement !== crossAxis) {
	    //  + (button size) - (overlay size)
	    // at this point the overlay bottom should match the button bottom
	    position[crossAxis] += childOffset[crossSize] - overlaySize[crossSize];
	  }
	  /* else {
	   the overlay top should match the button top
	  } */
	  // add the crossOffset from props


	  position[crossAxis] += crossOffset; // this is button center position - the overlay size + half of the button to align bottom of overlay with button center

	  let minViablePosition = childOffset[crossAxis] + childOffset[crossSize] / 2 - overlaySize[crossSize]; // this is button position of center, aligns top of overlay with button center

	  let maxViablePosition = childOffset[crossAxis] + childOffset[crossSize] / 2; // clamp it into the range of the min/max positions

	  position[crossAxis] = Math.min(Math.max(minViablePosition, position[crossAxis]), maxViablePosition); // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.

	  if (placement === axis) {
	    // If the container is positioned (non-static), then we use the container's actual
	    // height, as `bottom` will be relative to this height.  But if the container is static,
	    // then it can only be the `document.body`, and `bottom` will be relative to _its_
	    // container, which should be as large as boundaryDimensions.
	    const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[size];
	    position[$d45e305fb90d49e7c81f49bb4afe323b$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
	  } else {
	    position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
	  }

	  return position;
	}

	function $d45e305fb90d49e7c81f49bb4afe323b$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding) {
	  return position.top != null // We want the distance between the top of the overlay to the bottom of the boundary
	  ? Math.max(0, boundaryDimensions.height + boundaryDimensions.top + boundaryDimensions.scroll.top - ( // this is the bottom of the boundary
	  containerOffsetWithBoundary.top + position.top) // this is the top of the overlay
	  - (margins.top + margins.bottom + padding) // save additional space for margin and padding
	  ) // We want the distance between the top of the trigger to the top of the boundary
	  : Math.max(0, childOffset.top + containerOffsetWithBoundary.top - ( // this is the top of the trigger
	  boundaryDimensions.top + boundaryDimensions.scroll.top) // this is the top of the boundary
	  - (margins.top + margins.bottom + padding) // save additional space for margin and padding
	  );
	}

	function $d45e305fb90d49e7c81f49bb4afe323b$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
	  let {
	    placement,
	    axis,
	    size
	  } = placementInfo;

	  if (placement === axis) {
	    return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - boundaryDimensions.scroll[axis] + containerOffsetWithBoundary[axis] - margins[axis] - margins[$d45e305fb90d49e7c81f49bb4afe323b$var$FLIPPED_DIRECTION[axis]] - padding);
	  }

	  return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - margins[axis] - margins[$d45e305fb90d49e7c81f49bb4afe323b$var$FLIPPED_DIRECTION[axis]] - padding);
	}

	function $d45e305fb90d49e7c81f49bb4afe323b$export$calculatePositionInternal(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned) {
	  let placementInfo = $d45e305fb90d49e7c81f49bb4afe323b$var$parsePlacement(placementInput);
	  let {
	    size,
	    crossAxis,
	    crossSize,
	    placement,
	    crossPlacement
	  } = placementInfo;
	  let position = $d45e305fb90d49e7c81f49bb4afe323b$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
	  let normalizedOffset = offset;
	  let space = $d45e305fb90d49e7c81f49bb4afe323b$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo); // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip

	  if (flip && scrollSize[size] > space) {
	    let flippedPlacementInfo = $d45e305fb90d49e7c81f49bb4afe323b$var$parsePlacement($d45e305fb90d49e7c81f49bb4afe323b$var$FLIPPED_DIRECTION[placement] + " " + crossPlacement);
	    let flippedPosition = $d45e305fb90d49e7c81f49bb4afe323b$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
	    let flippedSpace = $d45e305fb90d49e7c81f49bb4afe323b$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo); // If the available space for the flipped position is greater than the original available space, flip.

	    if (flippedSpace > space) {
	      placementInfo = flippedPlacementInfo;
	      position = flippedPosition;
	      normalizedOffset = offset;
	    }
	  }

	  let delta = $d45e305fb90d49e7c81f49bb4afe323b$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
	  position[crossAxis] += delta;
	  let maxHeight = $d45e305fb90d49e7c81f49bb4afe323b$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding);
	  overlaySize.height = Math.min(overlaySize.height, maxHeight);
	  position = $d45e305fb90d49e7c81f49bb4afe323b$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned);
	  delta = $d45e305fb90d49e7c81f49bb4afe323b$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
	  position[crossAxis] += delta;
	  let arrowPosition = {};
	  arrowPosition[crossAxis] = childOffset[crossAxis] - position[crossAxis] + childOffset[crossSize] / 2;
	  return {
	    position,
	    maxHeight: maxHeight,
	    arrowOffsetLeft: arrowPosition.left,
	    arrowOffsetTop: arrowPosition.top,
	    placement: placementInfo.placement
	  };
	}
	/**
	 * Determines where to place the overlay with regards to the target and the position of an optional indicator.
	 */


	function $d45e305fb90d49e7c81f49bb4afe323b$export$calculatePosition(opts) {
	  let {
	    placement,
	    targetNode,
	    overlayNode,
	    scrollNode,
	    padding,
	    shouldFlip,
	    boundaryElement,
	    offset,
	    crossOffset
	  } = opts;
	  let container = overlayNode.offsetParent || document.body;
	  let isBodyContainer = container.tagName === 'BODY';
	  const containerPositionStyle = window.getComputedStyle(container).position;
	  let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== 'static';
	  let childOffset = isBodyContainer ? _domHelpersQueryOffset__default["default"](targetNode) : _domHelpersQueryPosition__default["default"](targetNode, container);

	  if (!isBodyContainer) {
	    childOffset.top += parseInt(_domHelpersStyle__default["default"](targetNode, 'marginTop'), 10) || 0;
	    childOffset.left += parseInt(_domHelpersStyle__default["default"](targetNode, 'marginLeft'), 10) || 0;
	  }

	  let overlaySize = _domHelpersQueryOffset__default["default"](overlayNode);

	  let margins = $d45e305fb90d49e7c81f49bb4afe323b$var$getMargins(overlayNode);
	  overlaySize.width += margins.left + margins.right;
	  overlaySize.height += margins.top + margins.bottom;
	  let scrollSize = $d45e305fb90d49e7c81f49bb4afe323b$var$getScroll(scrollNode);
	  let boundaryDimensions = $d45e305fb90d49e7c81f49bb4afe323b$var$getContainerDimensions(boundaryElement);
	  let containerOffsetWithBoundary = boundaryElement.tagName === 'BODY' ? _domHelpersQueryOffset__default["default"](container) : _domHelpersQueryPosition__default["default"](container, boundaryElement);
	  return $d45e305fb90d49e7c81f49bb4afe323b$export$calculatePositionInternal(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned);
	}

	// This behavior moved from useOverlayTrigger to useOverlayPosition.
	// For backward compatibility, where useOverlayTrigger handled hiding the popover on close,
	// it sets a close function here mapped from the trigger element. This way we can avoid
	// forcing users to pass an onClose function to useOverlayPosition which could be considered
	// a breaking change.
	const $df1b2f080f58bf9e74aeb666b8c96ba$export$onCloseMap = new WeakMap();

	/** @private */
	function $df1b2f080f58bf9e74aeb666b8c96ba$export$useCloseOnScroll(opts) {
	  let {
	    triggerRef,
	    isOpen,
	    onClose
	  } = opts;
	  _react.useEffect(() => {
	    if (!isOpen) {
	      return;
	    }

	    let onScroll = e => {
	      // Ignore if scrolling an scrollable region outside the trigger's tree.
	      let target = e.target;

	      if (!triggerRef.current || !target.contains(triggerRef.current)) {
	        return;
	      }

	      let onCloseHandler = onClose || $df1b2f080f58bf9e74aeb666b8c96ba$export$onCloseMap.get(triggerRef.current);

	      if (onCloseHandler) {
	        onCloseHandler();
	      }
	    };

	    window.addEventListener('scroll', onScroll, true);
	    return () => {
	      window.removeEventListener('scroll', onScroll, true);
	    };
	  }, [isOpen, onClose, triggerRef]);
	}

	// @ts-ignore
	let $ae841ee9d3f76b31663cf0594adb0fc$var$visualViewport = typeof window !== 'undefined' && window.visualViewport;
	/**
	 * Handles positioning overlays like popovers and menus relative to a trigger
	 * element, and updating the position when the window resizes.
	 */

	function useOverlayPosition$1(props) {
	  let {
	    direction
	  } = useLocale();
	  let {
	    targetRef,
	    overlayRef,
	    scrollRef = overlayRef,
	    placement = 'bottom',
	    containerPadding = 12,
	    shouldFlip = true,
	    boundaryElement = typeof document !== 'undefined' ? document.body : null,
	    offset = 0,
	    crossOffset = 0,
	    shouldUpdatePosition = true,
	    isOpen = true,
	    onClose
	  } = props;
	  let [position, setPosition] = _react.useState({
	    position: {},
	    arrowOffsetLeft: undefined,
	    arrowOffsetTop: undefined,
	    maxHeight: undefined,
	    placement: undefined
	  });
	  let deps = [shouldUpdatePosition, placement, overlayRef.current, targetRef.current, scrollRef.current, containerPadding, shouldFlip, boundaryElement, offset, crossOffset, isOpen, direction];
	  let updatePosition = _react.useCallback(() => {
	    if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !scrollRef.current || !boundaryElement) {
	      return;
	    }

	    setPosition($d45e305fb90d49e7c81f49bb4afe323b$export$calculatePosition({
	      placement: $ae841ee9d3f76b31663cf0594adb0fc$var$translateRTL(placement, direction),
	      overlayNode: overlayRef.current,
	      targetNode: targetRef.current,
	      scrollNode: scrollRef.current,
	      padding: containerPadding,
	      shouldFlip,
	      boundaryElement,
	      offset,
	      crossOffset
	    }));
	  }, deps); // Update position when anything changes

	  useLayoutEffect(updatePosition, deps); // Update position on window resize

	  $ae841ee9d3f76b31663cf0594adb0fc$var$useResize(updatePosition); // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
	  // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.

	  let isResizing = _react.useRef(false);
	  useLayoutEffect(() => {
	    let timeout;

	    let onResize = () => {
	      isResizing.current = true;
	      clearTimeout(timeout);
	      timeout = setTimeout(() => {
	        isResizing.current = false;
	      }, 500);
	      updatePosition();
	    };

	    $ae841ee9d3f76b31663cf0594adb0fc$var$visualViewport == null ? void 0 : $ae841ee9d3f76b31663cf0594adb0fc$var$visualViewport.addEventListener('resize', onResize);
	    return () => {
	      $ae841ee9d3f76b31663cf0594adb0fc$var$visualViewport == null ? void 0 : $ae841ee9d3f76b31663cf0594adb0fc$var$visualViewport.removeEventListener('resize', onResize);
	    };
	  }, [updatePosition]);
	  let close = _react.useCallback(() => {
	    if (!isResizing.current) {
	      onClose();
	    }
	  }, [onClose, isResizing]); // When scrolling a parent scrollable region of the trigger (other than the body),
	  // we hide the popover. Otherwise, its position would be incorrect.

	  $df1b2f080f58bf9e74aeb666b8c96ba$export$useCloseOnScroll({
	    triggerRef: targetRef,
	    isOpen,
	    onClose: onClose ? close : undefined
	  });
	  return {
	    overlayProps: {
	      style: _extends({
	        position: 'absolute',
	        zIndex: 100000
	      }, position.position, {
	        maxHeight: position.maxHeight
	      })
	    },
	    placement: position.placement,
	    arrowProps: {
	      style: {
	        left: position.arrowOffsetLeft,
	        top: position.arrowOffsetTop
	      }
	    },
	    updatePosition
	  };
	}

	function $ae841ee9d3f76b31663cf0594adb0fc$var$useResize(onResize) {
	  useLayoutEffect(() => {
	    window.addEventListener('resize', onResize, false);
	    return () => {
	      window.removeEventListener('resize', onResize, false);
	    };
	  }, [onResize]);
	}

	function $ae841ee9d3f76b31663cf0594adb0fc$var$translateRTL(position, direction) {
	  if (direction === 'rtl') {
	    return position.replace('start', 'right').replace('end', 'left');
	  }

	  return position.replace('start', 'left').replace('end', 'right');
	}

	/**
	 * Handles the behavior and accessibility for an overlay trigger, e.g. a button
	 * that opens a popover, menu, or other overlay that is positioned relative to the trigger.
	 */
	function useOverlayTrigger(props, state, ref) {
	  let {
	    type
	  } = props;
	  let {
	    isOpen
	  } = state; // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
	  // without forcing users to pass onClose.

	  _react.useEffect(() => {
	    if (ref.current) {
	      $df1b2f080f58bf9e74aeb666b8c96ba$export$onCloseMap.set(ref.current, state.close);
	    }
	  }); // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
	  // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
	  // However, we only add it for menus for now because screen readers often
	  // announce it as a menu even for other values.

	  let ariaHasPopup = undefined;

	  if (type === 'menu') {
	    ariaHasPopup = true;
	  } else if (type === 'listbox') {
	    ariaHasPopup = 'listbox';
	  }

	  let overlayId = useId();
	  return {
	    triggerProps: {
	      'aria-haspopup': ariaHasPopup,
	      'aria-expanded': isOpen,
	      'aria-controls': isOpen ? overlayId : null
	    },
	    overlayProps: {
	      id: overlayId
	    }
	  };
	}
	// @ts-ignore
	const $ece0076f06e8a828c60ba0c94f22f89$var$visualViewport = typeof window !== 'undefined' && window.visualViewport; // HTML input types that do not cause the software keyboard to appear.

	const $ece0076f06e8a828c60ba0c94f22f89$var$nonTextInputTypes = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']);
	/**
	 * Prevents scrolling on the document body on mount, and
	 * restores it on unmount. Also ensures that content does not
	 * shift due to the scrollbars disappearing.
	 */

	function usePreventScroll(options) {
	  if (options === void 0) {
	    options = {};
	  }

	  let {
	    isDisabled
	  } = options;
	  useLayoutEffect(() => {
	    if (isDisabled) {
	      return;
	    }

	    if (isIOS()) {
	      return $ece0076f06e8a828c60ba0c94f22f89$var$preventScrollMobileSafari();
	    } else {
	      return $ece0076f06e8a828c60ba0c94f22f89$var$preventScrollStandard();
	    }
	  }, [isDisabled]);
	} // For most browsers, all we need to do is set `overflow: hidden` on the root element, and
	// add some padding to prevent the page from shifting when the scrollbar is hidden.

	function $ece0076f06e8a828c60ba0c94f22f89$var$preventScrollStandard() {
	  return chain($ece0076f06e8a828c60ba0c94f22f89$var$setStyle(document.documentElement, 'paddingRight', window.innerWidth - document.documentElement.clientWidth + "px"), $ece0076f06e8a828c60ba0c94f22f89$var$setStyle(document.documentElement, 'overflow', 'hidden'));
	} // Mobile Safari is a whole different beast. Even with overflow: hidden,
	// it still scrolls the page in many situations:
	//
	// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
	// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
	//    it, so it becomes scrollable.
	// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
	//    This may cause even fixed position elements to scroll off the screen.
	// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
	//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
	//
	// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
	//
	// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
	//    on the window.
	// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
	//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
	// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
	// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
	//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
	//    into view ourselves, without scrolling the whole page.
	// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
	//    same visually, but makes the actual scroll position always zero. This is required to make all of the
	//    above work or Safari will still try to scroll the page when focusing an input.
	// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
	//    to navigate to an input with the next/previous buttons that's outside a modal.


	function $ece0076f06e8a828c60ba0c94f22f89$var$preventScrollMobileSafari() {
	  let scrollable;
	  let lastY = 0;

	  let onTouchStart = e => {
	    // Store the nearest scrollable parent element from the element that the user touched.
	    scrollable = getScrollParent(e.target);

	    if (scrollable === document.documentElement && scrollable === document.body) {
	      return;
	    }

	    lastY = e.changedTouches[0].pageY;
	  };

	  let onTouchMove = e => {
	    // Prevent scrolling the window.
	    if (scrollable === document.documentElement || scrollable === document.body) {
	      e.preventDefault();
	      return;
	    } // Prevent scrolling up when at the top and scrolling down when at the bottom
	    // of a nested scrollable area, otherwise mobile Safari will start scrolling
	    // the window instead. Unfortunately, this disables bounce scrolling when at
	    // the top but it's the best we can do.


	    let y = e.changedTouches[0].pageY;
	    let scrollTop = scrollable.scrollTop;
	    let bottom = scrollable.scrollHeight - scrollable.clientHeight;

	    if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) {
	      e.preventDefault();
	    }

	    lastY = y;
	  };

	  let onTouchEnd = e => {
	    let target = e.target;

	    if (target instanceof HTMLInputElement && !$ece0076f06e8a828c60ba0c94f22f89$var$nonTextInputTypes.has(target.type)) {
	      e.preventDefault(); // Apply a transform to trick Safari into thinking the input is at the top of the page
	      // so it doesn't try to scroll it into view. When tapping on an input, this needs to
	      // be done before the "focus" event, so we have to focus the element ourselves.

	      target.style.transform = 'translateY(-2000px)';
	      target.focus();
	      requestAnimationFrame(() => {
	        target.style.transform = '';
	      });
	    }
	  };

	  let onFocus = e => {
	    let target = e.target;

	    if (target instanceof HTMLInputElement && !$ece0076f06e8a828c60ba0c94f22f89$var$nonTextInputTypes.has(target.type)) {
	      // Transform also needs to be applied in the focus event in cases where focus moves
	      // software keyboard. In these cases, it seems applying the transform in the focus event
	      // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
	      target.style.transform = 'translateY(-2000px)';
	      requestAnimationFrame(() => {
	        target.style.transform = ''; // This will have prevented the browser from scrolling the focused element into view,
	        // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.

	        if ($ece0076f06e8a828c60ba0c94f22f89$var$visualViewport) {
	          if ($ece0076f06e8a828c60ba0c94f22f89$var$visualViewport.height < window.innerHeight) {
	            // If the keyboard is already visible, do this after one additional frame
	            // to wait for the transform to be removed.
	            requestAnimationFrame(() => {
	              $ece0076f06e8a828c60ba0c94f22f89$var$scrollIntoView(target);
	            });
	          } else {
	            // Otherwise, wait for the visual viewport to resize before scrolling so we can
	            // measure the correct position to scroll to.
	            $ece0076f06e8a828c60ba0c94f22f89$var$visualViewport.addEventListener('resize', () => $ece0076f06e8a828c60ba0c94f22f89$var$scrollIntoView(target), {
	              once: true
	            });
	          }
	        }
	      });
	    }
	  };

	  let onWindowScroll = () => {
	    // Last resort. If the window scrolled, scroll it back to the top.
	    // It should always be at the top because the body will have a negative margin (see below).
	    window.scrollTo(0, 0);
	  }; // Record the original scroll position so we can restore it.
	  // Then apply a negative margin to the body to offset it by the scroll position. This will
	  // enable us to scroll the window to the top, which is required for the rest of this to work.


	  let scrollX = window.pageXOffset;
	  let scrollY = window.pageYOffset;
	  let restoreStyles = chain($ece0076f06e8a828c60ba0c94f22f89$var$setStyle(document.documentElement, 'paddingRight', window.innerWidth - document.documentElement.clientWidth + "px"), $ece0076f06e8a828c60ba0c94f22f89$var$setStyle(document.documentElement, 'overflow', 'hidden'), $ece0076f06e8a828c60ba0c94f22f89$var$setStyle(document.body, 'marginTop', "-" + scrollY + "px")); // Scroll to the top. The negative margin on the body will make this appear the same.

	  window.scrollTo(0, 0);
	  let removeEvents = chain($ece0076f06e8a828c60ba0c94f22f89$var$addEvent(document, 'touchstart', onTouchStart, {
	    passive: false,
	    capture: true
	  }), $ece0076f06e8a828c60ba0c94f22f89$var$addEvent(document, 'touchmove', onTouchMove, {
	    passive: false,
	    capture: true
	  }), $ece0076f06e8a828c60ba0c94f22f89$var$addEvent(document, 'touchend', onTouchEnd, {
	    passive: false,
	    capture: true
	  }), $ece0076f06e8a828c60ba0c94f22f89$var$addEvent(document, 'focus', onFocus, true), $ece0076f06e8a828c60ba0c94f22f89$var$addEvent(window, 'scroll', onWindowScroll));
	  return () => {
	    // Restore styles and scroll the page back to where it was.
	    restoreStyles();
	    removeEvents();
	    window.scrollTo(scrollX, scrollY);
	  };
	} // Sets a CSS property on an element, and returns a function to revert it to the previous value.


	function $ece0076f06e8a828c60ba0c94f22f89$var$setStyle(element, style, value) {
	  let cur = element.style[style];
	  element.style[style] = value;
	  return () => {
	    element.style[style] = cur;
	  };
	} // Adds an event listener to an element, and returns a function to remove it.


	function $ece0076f06e8a828c60ba0c94f22f89$var$addEvent(target, event, handler, options) {
	  target.addEventListener(event, handler, options);
	  return () => {
	    target.removeEventListener(event, handler, options);
	  };
	}

	function $ece0076f06e8a828c60ba0c94f22f89$var$scrollIntoView(target) {
	  // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
	  let scrollable = getScrollParent(target);

	  if (scrollable !== document.documentElement && scrollable !== document.body) {
	    let scrollableTop = scrollable.getBoundingClientRect().top;
	    let targetTop = target.getBoundingClientRect().top;

	    if (targetTop > scrollableTop + target.clientHeight) {
	      scrollable.scrollTop += targetTop - scrollableTop;
	    }
	  }
	}

	const $b876e5ac9c98db373bf726bce3d604e$var$Context = /*#__PURE__*/_react__default["default"].createContext(null);
	/**
	 * Each ModalProvider tracks how many modals are open in its subtree. On mount, the modals
	 * trigger `addModal` to increment the count, and trigger `removeModal` on unmount to decrement it.
	 * This is done recursively so that all parent providers are incremented and decremented.
	 * If the modal count is greater than zero, we add `aria-hidden` to this provider to hide its
	 * subtree from screen readers. This is done using React context in order to account for things
	 * like portals, which can cause the React tree and the DOM tree to differ significantly in structure.
	 */


	function ModalProvider(props) {
	  let {
	    children
	  } = props;
	  let parent = _react.useContext($b876e5ac9c98db373bf726bce3d604e$var$Context);
	  let [modalCount, setModalCount] = _react.useState(0);
	  let context = _react.useMemo(() => ({
	    parent,
	    modalCount,

	    addModal() {
	      setModalCount(count => count + 1);

	      if (parent) {
	        parent.addModal();
	      }
	    },

	    removeModal() {
	      setModalCount(count => count - 1);

	      if (parent) {
	        parent.removeModal();
	      }
	    }

	  }), [parent, modalCount]);
	  return /*#__PURE__*/_react__default["default"].createElement($b876e5ac9c98db373bf726bce3d604e$var$Context.Provider, {
	    value: context
	  }, children);
	}

	/**
	 * Used to determine if the tree should be aria-hidden based on how many
	 * modals are open.
	 */
	function useModalProvider() {
	  let context = _react.useContext($b876e5ac9c98db373bf726bce3d604e$var$Context);
	  return {
	    modalProviderProps: {
	      'aria-hidden': context && context.modalCount > 0 ? true : null
	    }
	  };
	}
	/**
	 * Creates a root node that will be aria-hidden if there are other modals open.
	 */

	function $b876e5ac9c98db373bf726bce3d604e$var$OverlayContainerDOM(props) {
	  let {
	    modalProviderProps
	  } = useModalProvider();
	  return /*#__PURE__*/_react__default["default"].createElement("div", _extends({
	    "data-overlay-container": true
	  }, props, modalProviderProps));
	}
	/**
	 * An OverlayProvider acts as a container for the top-level application.
	 * Any application that uses modal dialogs or other overlays should
	 * be wrapped in a `<OverlayProvider>`. This is used to ensure that
	 * the main content of the application is hidden from screen readers
	 * if a modal or other overlay is opened. Only the top-most modal or
	 * overlay should be accessible at once.
	 */


	function OverlayProvider(props) {
	  return /*#__PURE__*/_react__default["default"].createElement(ModalProvider, null, /*#__PURE__*/_react__default["default"].createElement($b876e5ac9c98db373bf726bce3d604e$var$OverlayContainerDOM, props));
	}

	/**
	 * Hides content outside the current `<OverlayContainer>` from screen readers
	 * on mount and restores it on unmount. Typically used by modal dialogs and
	 * other types of overlays to ensure that only the top-most modal is
	 * accessible at once.
	 */
	function useModal(options) {
	  // Add aria-hidden to all parent providers on mount, and restore on unmount.
	  let context = _react.useContext($b876e5ac9c98db373bf726bce3d604e$var$Context);

	  if (!context) {
	    throw new Error('Modal is not contained within a provider');
	  }

	  _react.useEffect(() => {
	    if (options != null && options.isDisabled || !context || !context.parent) {
	      return;
	    } // The immediate context is from the provider containing this modal, so we only
	    // want to trigger aria-hidden on its parents not on the modal provider itself.


	    context.parent.addModal();
	    return () => {
	      if (context && context.parent) {
	        context.parent.removeModal();
	      }
	    };
	  }, [context, context.parent, options == null ? void 0 : options.isDisabled]);
	  return {
	    modalProps: {
	      'data-ismodal': !(options != null && options.isDisabled)
	    }
	  };
	}
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/ar-AE.json
	var $e325a364098e05bf51160d06dcffdbe$exports = {};
	$e325a364098e05bf51160d06dcffdbe$exports = JSON.parse("{\"dismiss\":\"تجاهل\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/bg-BG.json
	var $ab088cc547d59c1be83369f8351a064$exports = {};
	$ab088cc547d59c1be83369f8351a064$exports = JSON.parse("{\"dismiss\":\"Отхвърляне\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/cs-CZ.json
	var $cec67ea16ca47059e10ca5e77187d8c2$exports = {};
	$cec67ea16ca47059e10ca5e77187d8c2$exports = JSON.parse("{\"dismiss\":\"Odstranit\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/da-DK.json
	var $d962fe1ed718c5ca37da1414136036f8$exports = {};
	$d962fe1ed718c5ca37da1414136036f8$exports = JSON.parse("{\"dismiss\":\"Luk\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/de-DE.json
	var $c5167dda40dde69038848f007e5$exports = {};
	$c5167dda40dde69038848f007e5$exports = JSON.parse("{\"dismiss\":\"Schließen\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/el-GR.json
	var $ecdd1ac0020e47f58a9ed51b5fb$exports = {};
	$ecdd1ac0020e47f58a9ed51b5fb$exports = JSON.parse("{\"dismiss\":\"Απόρριψη\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/en-US.json
	var $f33e30a89f4dff807f90ebe8c$exports = {};
	$f33e30a89f4dff807f90ebe8c$exports = JSON.parse("{\"dismiss\":\"Dismiss\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/es-ES.json
	var $ba353e2c61dcc5141af4537eeb3ef85c$exports = {};
	$ba353e2c61dcc5141af4537eeb3ef85c$exports = JSON.parse("{\"dismiss\":\"Descartar\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/et-EE.json
	var $dd3e8aaecbf1f2c2c0f9d51aacfd$exports = {};
	$dd3e8aaecbf1f2c2c0f9d51aacfd$exports = JSON.parse("{\"dismiss\":\"Lõpeta\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/fi-FI.json
	var $f730aaed9f4652842b2a8f94a4a$exports = {};
	$f730aaed9f4652842b2a8f94a4a$exports = JSON.parse("{\"dismiss\":\"Hylkää\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/fr-FR.json
	var $e76b22aab4e46b7806205b4af9ca3$exports = {};
	$e76b22aab4e46b7806205b4af9ca3$exports = JSON.parse("{\"dismiss\":\"Rejeter\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/he-IL.json
	var $c33ffdd5a9931bfc82c1c9b55e98de2f$exports = {};
	$c33ffdd5a9931bfc82c1c9b55e98de2f$exports = JSON.parse("{\"dismiss\":\"התעלם\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/hr-HR.json
	var $d64cb70d4ce170f599f4df5adf4e9898$exports = {};
	$d64cb70d4ce170f599f4df5adf4e9898$exports = JSON.parse("{\"dismiss\":\"Odbaci\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/hu-HU.json
	var $c05270a6513a8b6d8a6552a35a162$exports = {};
	$c05270a6513a8b6d8a6552a35a162$exports = JSON.parse("{\"dismiss\":\"Elutasítás\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/it-IT.json
	var $df915df637af1f3c14c8376c69dfd$exports = {};
	$df915df637af1f3c14c8376c69dfd$exports = JSON.parse("{\"dismiss\":\"Ignora\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/ja-JP.json
	var $e8bf1e6480d2c65d558c3537ec0d59ce$exports = {};
	$e8bf1e6480d2c65d558c3537ec0d59ce$exports = JSON.parse("{\"dismiss\":\"閉じる\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/ko-KR.json
	var $e06e93e1c9472a7e2fc5b26a87ea7$exports = {};
	$e06e93e1c9472a7e2fc5b26a87ea7$exports = JSON.parse("{\"dismiss\":\"무시\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/lt-LT.json
	var $fef82498418eab30c69349263b64e050$exports = {};
	$fef82498418eab30c69349263b64e050$exports = JSON.parse("{\"dismiss\":\"Atmesti\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/lv-LV.json
	var $c4df2502cb7b65c6578bcb8a165f6fc$exports = {};
	$c4df2502cb7b65c6578bcb8a165f6fc$exports = JSON.parse("{\"dismiss\":\"Nerādīt\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/nb-NO.json
	var $b50f4e499c19f4d55113139bba$exports = {};
	$b50f4e499c19f4d55113139bba$exports = JSON.parse("{\"dismiss\":\"Lukk\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/nl-NL.json
	var $e45d2f0079f29e4f5c6469cca7c$exports = {};
	$e45d2f0079f29e4f5c6469cca7c$exports = JSON.parse("{\"dismiss\":\"Negeren\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/pl-PL.json
	var $fcb5bfa87b2378a249bd7fb591ec22c2$exports = {};
	$fcb5bfa87b2378a249bd7fb591ec22c2$exports = JSON.parse("{\"dismiss\":\"Zignoruj\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/pt-BR.json
	var $edae5c6f18c937cf0015f2aa266d9fea$exports = {};
	$edae5c6f18c937cf0015f2aa266d9fea$exports = JSON.parse("{\"dismiss\":\"Descartar\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/pt-PT.json
	var $c016edcd88f37a017208da7518133d$exports = {};
	$c016edcd88f37a017208da7518133d$exports = JSON.parse("{\"dismiss\":\"Dispensar\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/ro-RO.json
	var $df1162b231d383d942e0fdb2bbf$exports = {};
	$df1162b231d383d942e0fdb2bbf$exports = JSON.parse("{\"dismiss\":\"Revocare\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/ru-RU.json
	var $fa17537bfd201c57fa41fd31dbd9f074$exports = {};
	$fa17537bfd201c57fa41fd31dbd9f074$exports = JSON.parse("{\"dismiss\":\"Пропустить\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/sk-SK.json
	var $c30db5bcff54a9e266ee7379a6cb8$exports = {};
	$c30db5bcff54a9e266ee7379a6cb8$exports = JSON.parse("{\"dismiss\":\"Zrušiť\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/sl-SI.json
	var $c86d8cad7c0045ad51a1fea185411a61$exports = {};
	$c86d8cad7c0045ad51a1fea185411a61$exports = JSON.parse("{\"dismiss\":\"Opusti\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/sr-SP.json
	var $c610b0b50ebc0061e6c42c420a2e1be$exports = {};
	$c610b0b50ebc0061e6c42c420a2e1be$exports = JSON.parse("{\"dismiss\":\"Odbaci\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/sv-SE.json
	var $c298c5c92c55ce8d8289d8cc18ea512$exports = {};
	$c298c5c92c55ce8d8289d8cc18ea512$exports = JSON.parse("{\"dismiss\":\"Avvisa\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/tr-TR.json
	var $f438196d9674b9d180ea6e74d7$exports = {};
	$f438196d9674b9d180ea6e74d7$exports = JSON.parse("{\"dismiss\":\"Kapat\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/uk-UA.json
	var $fa842ebaf07187d5bc74e0fa6c4679b$exports = {};
	$fa842ebaf07187d5bc74e0fa6c4679b$exports = JSON.parse("{\"dismiss\":\"Скасувати\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/zh-CN.json
	var $cdcbe39f22ae1814551e7f30dcfc8$exports = {};
	$cdcbe39f22ae1814551e7f30dcfc8$exports = JSON.parse("{\"dismiss\":\"取消\"}");
	// ASSET: /Users/govett/dev/react-spectrum-v3/packages/@react-aria/overlays/intl/zh-TW.json
	var $a8c729d90cde82a4eb34bebfb46a6$exports = {};
	$a8c729d90cde82a4eb34bebfb46a6$exports = JSON.parse("{\"dismiss\":\"關閉\"}");

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	// @ts-ignore
	({
	  "ar-AE": _interopRequireDefault($e325a364098e05bf51160d06dcffdbe$exports).default,
	  "bg-BG": _interopRequireDefault($ab088cc547d59c1be83369f8351a064$exports).default,
	  "cs-CZ": _interopRequireDefault($cec67ea16ca47059e10ca5e77187d8c2$exports).default,
	  "da-DK": _interopRequireDefault($d962fe1ed718c5ca37da1414136036f8$exports).default,
	  "de-DE": _interopRequireDefault($c5167dda40dde69038848f007e5$exports).default,
	  "el-GR": _interopRequireDefault($ecdd1ac0020e47f58a9ed51b5fb$exports).default,
	  "en-US": _interopRequireDefault($f33e30a89f4dff807f90ebe8c$exports).default,
	  "es-ES": _interopRequireDefault($ba353e2c61dcc5141af4537eeb3ef85c$exports).default,
	  "et-EE": _interopRequireDefault($dd3e8aaecbf1f2c2c0f9d51aacfd$exports).default,
	  "fi-FI": _interopRequireDefault($f730aaed9f4652842b2a8f94a4a$exports).default,
	  "fr-FR": _interopRequireDefault($e76b22aab4e46b7806205b4af9ca3$exports).default,
	  "he-IL": _interopRequireDefault($c33ffdd5a9931bfc82c1c9b55e98de2f$exports).default,
	  "hr-HR": _interopRequireDefault($d64cb70d4ce170f599f4df5adf4e9898$exports).default,
	  "hu-HU": _interopRequireDefault($c05270a6513a8b6d8a6552a35a162$exports).default,
	  "it-IT": _interopRequireDefault($df915df637af1f3c14c8376c69dfd$exports).default,
	  "ja-JP": _interopRequireDefault($e8bf1e6480d2c65d558c3537ec0d59ce$exports).default,
	  "ko-KR": _interopRequireDefault($e06e93e1c9472a7e2fc5b26a87ea7$exports).default,
	  "lt-LT": _interopRequireDefault($fef82498418eab30c69349263b64e050$exports).default,
	  "lv-LV": _interopRequireDefault($c4df2502cb7b65c6578bcb8a165f6fc$exports).default,
	  "nb-NO": _interopRequireDefault($b50f4e499c19f4d55113139bba$exports).default,
	  "nl-NL": _interopRequireDefault($e45d2f0079f29e4f5c6469cca7c$exports).default,
	  "pl-PL": _interopRequireDefault($fcb5bfa87b2378a249bd7fb591ec22c2$exports).default,
	  "pt-BR": _interopRequireDefault($edae5c6f18c937cf0015f2aa266d9fea$exports).default,
	  "pt-PT": _interopRequireDefault($c016edcd88f37a017208da7518133d$exports).default,
	  "ro-RO": _interopRequireDefault($df1162b231d383d942e0fdb2bbf$exports).default,
	  "ru-RU": _interopRequireDefault($fa17537bfd201c57fa41fd31dbd9f074$exports).default,
	  "sk-SK": _interopRequireDefault($c30db5bcff54a9e266ee7379a6cb8$exports).default,
	  "sl-SI": _interopRequireDefault($c86d8cad7c0045ad51a1fea185411a61$exports).default,
	  "sr-SP": _interopRequireDefault($c610b0b50ebc0061e6c42c420a2e1be$exports).default,
	  "sv-SE": _interopRequireDefault($c298c5c92c55ce8d8289d8cc18ea512$exports).default,
	  "tr-TR": _interopRequireDefault($f438196d9674b9d180ea6e74d7$exports).default,
	  "uk-UA": _interopRequireDefault($fa842ebaf07187d5bc74e0fa6c4679b$exports).default,
	  "zh-CN": _interopRequireDefault($cdcbe39f22ae1814551e7f30dcfc8$exports).default,
	  "zh-TW": _interopRequireDefault($a8c729d90cde82a4eb34bebfb46a6$exports).default
	});

	const _excluded$z = ["matchTriggerWidth"];

	const getContainerDimensions = containerNode => {
	  var _a, _b;

	  const scroll = {};
	  const visualViewport = typeof window !== 'undefined' && window.visualViewport;
	  let dimensions = {};

	  if (containerNode.tagName === 'BODY') {
	    dimensions.width = (_a = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.width) !== null && _a !== void 0 ? _a : typeof document !== 'undefined' ? document.documentElement.clientWidth : 0;
	    dimensions.height = (_b = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.height) !== null && _b !== void 0 ? _b : typeof document !== 'undefined' ? document.documentElement.clientHeight : 0;
	    scroll.top = _domHelpersQueryScrollTop__default["default"](_domHelpersOwnerDocument__default["default"](containerNode).documentElement) || _domHelpersQueryScrollTop__default["default"](containerNode);
	    scroll.left = _domHelpersQueryScrollLeft__default["default"](_domHelpersOwnerDocument__default["default"](containerNode).documentElement) || _domHelpersQueryScrollLeft__default["default"](containerNode);
	  } else {
	    dimensions = _domHelpersQueryOffset__default["default"](containerNode);
	    scroll.top = _domHelpersQueryScrollTop__default["default"](containerNode);
	    scroll.left = _domHelpersQueryScrollLeft__default["default"](containerNode);
	  }

	  return Object.assign({}, dimensions, {
	    scroll
	  });
	};

	function useOverlayPosition(_ref) {
	  let {
	    matchTriggerWidth
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$z);

	  var _a;

	  const [triggerWidth] = useSize__default["default"](props.targetRef);
	  const {
	    overlayProps,
	    placement = 'bottom',
	    updatePosition,
	    arrowProps
	  } = useOverlayPosition$1(props);
	  const style = Object.assign({}, arrowProps.style, {
	    fontSize: 16,
	    lineHeight: 0
	  });
	  let arrowIcon = 'caret-up';

	  switch (placement) {
	    case 'bottom':
	      style.top = -10;
	      style.marginLeft = -5;
	      break;

	    case 'top':
	      style.bottom = -10;
	      style.marginLeft = -5;
	      arrowIcon = 'caret-down';
	      break;

	    case 'left':
	      style.right = -6;
	      style.marginTop = -8;
	      arrowIcon = 'caret-right';
	      break;

	    case 'right':
	      style.left = -5;
	      style.marginTop = -8;
	      arrowIcon = 'caret-left';
	      break;

	    default:
	      console.warn("Hey, you're using an invalid placement prop! Check out the docs for appropriate usage, or remove it.");
	  }

	  arrowProps.style = style;
	  const overlayStyle = overlayProps.style || {};

	  if (matchTriggerWidth) {
	    overlayStyle.width = triggerWidth;
	  }

	  if (props.shouldFlip && props.offset) {
	    // invert axis to get correct CSS property
	    const axisMap = {
	      top: 'bottom',
	      bottom: 'top'
	    };
	    const axis = axisMap[placement];
	    let disableOffset = false;

	    if (!props.placement.includes(placement)) {
	      // direction is flipped, disable main axis offset
	      disableOffset = true;
	    } else if ((_a = props.targetRef.current) === null || _a === void 0 ? void 0 : _a.nodeType) {
	      const boundaryElement = props.boundaryElement || (typeof document !== 'undefined' ? document.body : null);
	      const boundaryDimensions = getContainerDimensions(boundaryElement);
	      const triggerDimensions = getContainerDimensions(props.targetRef.current);
	      const overlayTopPost = triggerDimensions.top + props.offset;

	      if (boundaryDimensions.scroll.top >= overlayTopPost) {
	        disableOffset = true;
	      }
	    }

	    if (disableOffset && typeof overlayStyle[axis] === 'number') {
	      overlayStyle[axis] -= props.offset;
	    }
	  }

	  overlayProps.style = overlayStyle;
	  return {
	    overlayProps,
	    placement,
	    updatePosition,
	    arrowProps,
	    arrowIcon: ['fas', arrowIcon]
	  };
	}

	const usePrevious = value => {
	  // The ref object is a generic container whose current property is mutable ...
	  // ... and can hold any value, similar to an instance property on a class
	  const ref = _react.useRef(); // Store current value in ref

	  _react.useEffect(() => {
	    ref.current = value;
	  }, [value]); // Only re-run if value changes
	  // Return previous value (happens before update in useEffect above)

	  return ref.current;
	};

	const ThemeProviderContext = /*#__PURE__*/_react.createContext(null);
	/**
	 * Resolved theme
	 */

	const themeMode = jotai.atom(defaultThemeMode());
	const resolvedThemeModeAtom = jotai.atom(get => {
	  return getResolvedThemeMode(get(themeMode));
	});
	const currentThemeIdAtom = jotai.atom(get => {
	  const mode = get(resolvedThemeModeAtom);
	  return mode === 'light' ? get(lightThemeIdAtom) : get(darkThemeIdAtom);
	});
	const customThemeAtom = jotai.atom(get => {
	  const mode = get(resolvedThemeModeAtom);
	  return mode === 'light' ? get(customLightThemeAtom) : get(customDarkThemeAtom);
	});
	const computedThemeAtom = jotai.atom(get => {
	  return computeTheme(get(currentThemeIdAtom), get(customLightThemeAtom));
	});
	const useThemeId = scope => useThemeAtomValue(currentThemeIdAtom, scope);
	const useThemeIdAtom = scope => {
	  const mode = useResolvedThemeMode(scope);
	  return mode === 'light' ? lightThemeIdAtom : darkThemeIdAtom;
	};
	const useThemeMode = scope => useThemeAtomValue(themeMode, scope);
	const useResolvedThemeMode = scope => useThemeAtomValue(resolvedThemeModeAtom, scope);
	const useUpdateThemeMode = scope => useUpdateThemeAtom(themeMode, scope);
	const useCustomTheme = scope => useThemeAtomValue(customThemeAtom, scope);
	const useCustomThemeAtom = scope => {
	  const mode = useResolvedThemeMode(scope);
	  return mode === 'light' ? customLightThemeAtom : customDarkThemeAtom;
	};
	const useComputedTheme = scope => useThemeAtomValue(computedThemeAtom, scope);
	const useThemeIsDark = scope => {
	  const {
	    theme
	  } = useComputedTheme(scope);
	  return !!theme.isDark;
	};
	const useUpdateTheme = scope => {
	  const customThemeAtom = useCustomThemeAtom(scope);
	  return useUpdateThemeAtom(customThemeAtom, scope);
	};
	/**
	 * Light specific
	 */

	const lightThemeIdAtom = jotai.atom('default');
	const customLightThemeAtom = jotai.atom({
	  colors: {}
	});
	const useLightTheme = scope => useThemeAtomValue(customLightThemeAtom, scope);
	const useLightThemeId = scope => useThemeAtomValue(lightThemeIdAtom, scope);
	const useUpdateLightThemeId = scope => useUpdateThemeAtom(lightThemeIdAtom, scope);
	const useUpdateLightTheme = scope => useUpdateThemeAtom(customLightThemeAtom, scope);
	/**
	 * Dark specific
	 */

	const darkThemeIdAtom = jotai.atom('default_dark');
	const customDarkThemeAtom = jotai.atom({
	  colors: {}
	});
	const useDarkTheme = scope => useThemeAtomValue(customDarkThemeAtom, scope);
	const useDarkThemeId = scope => useThemeAtomValue(darkThemeIdAtom, scope);
	const useUpdateDarkThemeId = scope => useUpdateThemeAtom(darkThemeIdAtom, scope);
	const useUpdateDarkTheme = scope => useUpdateThemeAtom(customDarkThemeAtom, scope);
	/**
	 * Internal helpers
	 */

	const useThemeAtomValue = (atom, scope) => {
	  const currentScope = _react.useContext(ThemeProviderContext);
	  const targetScope = scope || currentScope;
	  return utils.useAtomValue(atom, targetScope);
	};

	const useUpdateThemeAtom = (atom, scope) => {
	  const currentScope = _react.useContext(ThemeProviderContext);
	  const targetScope = scope || currentScope;
	  return utils.useUpdateAtom(atom, targetScope);
	};

	const _excluded$y = ["copyValue"];

	function CopyButton(_ref, ref) {
	  let {
	    copyValue
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$y);

	  const {
	    hasCopied,
	    onCopy
	  } = useClipboard(copyValue);
	  return jsxRuntime.jsx(_Button, Object.assign({
	    appearance: "minimal",
	    size: "sm",
	    onPress: onCopy,
	    icon: hasCopied ? undefined : 'copy',
	    label: "Copy"
	  }, props, {
	    // @ts-expect-error
	    ref: ref,
	    children: hasCopied ? 'Copied' : null
	  }), void 0);
	}

	const _CopyButton = /*#__PURE__*/_react.forwardRef(CopyButton);

	const _excluded$x = ["children", "placeholder", "onClear", "appearance", "intent", "active", "loading", "disabled"],
	      _excluded2$a = ["hover"],
	      _excluded3$3 = ["active", "hover"];

	function FieldButton(_ref, ref) {
	  let {
	    children,
	    placeholder,
	    onClear,
	    appearance = 'minimal',
	    intent,
	    active,
	    loading,
	    disabled
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$x);

	  var _a, _b;

	  const showClearButton = !!(onClear && children);
	  const stateProps = Object.assign({}, fieldButtonVariants.minimal.default, fieldButtonVariants.minimal[intent], (_a = fieldButtonVariants[appearance]) === null || _a === void 0 ? void 0 : _a.default, (_b = fieldButtonVariants[appearance]) === null || _b === void 0 ? void 0 : _b[intent]);
	  let disabledProps = null;

	  if (disabled) {
	    disabledProps = {
	      cursor: 'not-allowed'
	    };

	    if (appearance === 'outlined') {
	      disabledProps.bg = 'canvas-100';
	    }
	  }
	  /**
	   * If active, remove other state effects
	   */


	  if (active) {
	    for (const i in stateProps) {
	      const prop = stateProps[i];

	      if (prop && typeof prop === 'object') {
	        if (prop.hasOwnProperty('active')) {
	          stateProps[i] = prop.active;
	        } else if (prop.hasOwnProperty('hover')) {
	          // remove props immutably
	          const _stateProps$i = stateProps[i],
	                newProps = _objectWithoutPropertiesLoose$1(_stateProps$i, _excluded2$a);

	          stateProps[i] = newProps;
	        }
	      }
	    }
	  }
	  /**
	   * If in loading or disabled states, remove other ui effects like hover
	   */


	  if (loading || disabled) {
	    for (const i in stateProps) {
	      const prop = stateProps[i];

	      if (prop && typeof prop === 'object') {
	        // remove props immutably
	        const _stateProps$i2 = stateProps[i],
	              newProps = _objectWithoutPropertiesLoose$1(_stateProps$i2, _excluded3$3);

	        stateProps[i] = newProps;
	      }
	    }
	  }

	  return jsxRuntime.jsxs(Box, Object.assign({
	    pos: "relative"
	  }, disabledProps, {
	    children: [jsxRuntime.jsx(_Button, Object.assign({
	      iconRight: jsxRuntime.jsx(Box, {
	        pt: 0.5,
	        pr: 0.5,
	        children: jsxRuntime.jsx(Icon, {
	          icon: "chevron-down",
	          size: "xs"
	        }, void 0)
	      }, void 0),
	      noFocusRing: true,
	      active: active,
	      loading: loading,
	      disabled: disabled
	    }, props, stateProps, {
	      ref: ref,
	      children: jsxRuntime.jsxs(Flex, {
	        flex: 1,
	        justifyItems: "start",
	        alignItems: "center",
	        children: [jsxRuntime.jsx(Box, {
	          pr: 1,
	          color: !children ? 'light' : undefined,
	          children: children || placeholder || ''
	        }, void 0), showClearButton && jsxRuntime.jsx("div", {
	          style: {
	            width: props.size === 'sm' ? 24 : 28
	          }
	        }, void 0)]
	      }, void 0)
	    }), void 0), showClearButton && jsxRuntime.jsx(FieldButtonClear, {
	      triggerRef: ref,
	      onClear: onClear,
	      size: props.size
	    }, void 0)]
	  }), void 0);
	}

	const _FieldButton = /*#__PURE__*/_react.forwardRef(FieldButton);

	const FieldButtonClear = ({
	  triggerRef,
	  size,
	  onClear
	}) => {
	  const {
	    pressProps
	  } = usePress({
	    onPress: () => {
	      var _a;

	      onClear(); // move focus back to the field button

	      (_a = triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
	    }
	  });
	  return jsxRuntime.jsx(FocusRing, {
	    focusRingClass: "sl-focus-ring",
	    children: jsxRuntime.jsx(Flex, Object.assign({
	      as: "button"
	    }, pressProps, {
	      borderR: true,
	      borderColor: "input",
	      fontSize: "base",
	      px: size === 'sm' ? 1.5 : 2,
	      alignItems: "center",
	      color: {
	        hover: 'danger',
	        focus: 'danger'
	      },
	      pos: "absolute",
	      cursor: "pointer",
	      style: {
	        top: '50%',
	        right: size === 'sm' ? 20 : 24,
	        height: 13,
	        marginTop: -6,
	        lineHeight: 0
	      },
	      "aria-label": "Clear selected value",
	      children: jsxRuntime.jsx(Icon, {
	        icon: "times",
	        size: "xs"
	      }, void 0)
	    }), void 0)
	  }, void 0);
	};

	const _excluded$w = ["size"];
	const sizes$6 = {
	  1: {
	    as: 'h1',
	    fontSize: '5xl',
	    fontWeight: 'bold',
	    lineHeight: 'tight'
	  },
	  2: {
	    as: 'h2',
	    fontSize: '4xl',
	    fontWeight: 'bold',
	    lineHeight: 'tight'
	  },
	  3: {
	    as: 'h3',
	    fontSize: '2xl',
	    fontWeight: 'semibold',
	    lineHeight: 'snug'
	  },
	  4: {
	    as: 'h4',
	    fontSize: 'paragraph',
	    fontWeight: 'semibold',
	    lineHeight: 'snug'
	  }
	};
	const Heading = /*#__PURE__*/_react.memo(function Heading(_ref) {
	  let {
	    size
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$w);

	  return jsxRuntime.jsx(Box, Object.assign({
	    fontFamily: "prose",
	    fontWeight: "bold",
	    color: "heading"
	  }, sizes$6[size], props), void 0);
	});

	var global$a = global$K;

	var nativePromiseConstructor = global$a.Promise;

	var redefine$1 = redefine$6.exports;

	var redefineAll$1 = function (target, src, options) {
	  for (var key in src) redefine$1(target, key, src[key], options);
	  return target;
	};

	var getBuiltIn$1 = getBuiltIn$7;
	var definePropertyModule = objectDefineProperty;
	var wellKnownSymbol$4 = wellKnownSymbol$h;
	var DESCRIPTORS$1 = descriptors;

	var SPECIES$1 = wellKnownSymbol$4('species');

	var setSpecies$1 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$1(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule.f;

	  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES$1]) {
	    defineProperty(Constructor, SPECIES$1, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var global$9 = global$K;
	var isPrototypeOf$2 = objectIsPrototypeOf;

	var TypeError$4 = global$9.TypeError;

	var anInstance$1 = function (it, Prototype) {
	  if (isPrototypeOf$2(Prototype, it)) return it;
	  throw TypeError$4('Incorrect invocation');
	};

	var uncurryThis$2 = functionUncurryThis;
	var aCallable$3 = aCallable$6;

	var bind$4 = uncurryThis$2(uncurryThis$2.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable$3(fn);
	  return that === undefined ? fn : bind$4 ? bind$4(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var wellKnownSymbol$3 = wellKnownSymbol$h;
	var Iterators$1 = iterators;

	var ITERATOR$2 = wellKnownSymbol$3('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$1 = function (it) {
	  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
	};

	var classof = classof$5;
	var getMethod$1 = getMethod$4;
	var Iterators = iterators;
	var wellKnownSymbol$2 = wellKnownSymbol$h;

	var ITERATOR$1 = wellKnownSymbol$2('iterator');

	var getIteratorMethod$2 = function (it) {
	  if (it != undefined) return getMethod$1(it, ITERATOR$1)
	    || getMethod$1(it, '@@iterator')
	    || Iterators[classof(it)];
	};

	var global$8 = global$K;
	var call$3 = functionCall;
	var aCallable$2 = aCallable$6;
	var anObject$3 = anObject$d;
	var tryToString$1 = tryToString$4;
	var getIteratorMethod$1 = getIteratorMethod$2;

	var TypeError$3 = global$8.TypeError;

	var getIterator$1 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
	  if (aCallable$2(iteratorMethod)) return anObject$3(call$3(iteratorMethod, argument));
	  throw TypeError$3(tryToString$1(argument) + ' is not iterable');
	};

	var call$2 = functionCall;
	var anObject$2 = anObject$d;
	var getMethod = getMethod$4;

	var iteratorClose$1 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$2(iterator);
	  try {
	    innerResult = getMethod(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$2(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$2(innerResult);
	  return value;
	};

	var global$7 = global$K;
	var bind$3 = functionBindContext;
	var call$1 = functionCall;
	var anObject$1 = anObject$d;
	var tryToString = tryToString$4;
	var isArrayIteratorMethod = isArrayIteratorMethod$1;
	var lengthOfArrayLike = lengthOfArrayLike$4;
	var isPrototypeOf$1 = objectIsPrototypeOf;
	var getIterator = getIterator$1;
	var getIteratorMethod = getIteratorMethod$2;
	var iteratorClose = iteratorClose$1;

	var TypeError$2 = global$7.TypeError;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var ResultPrototype = Result.prototype;

	var iterate$1 = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind$3(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject$1(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (!iterFn) throw TypeError$2(tryToString(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator(iterable, iterFn);
	  }

	  next = iterator.next;
	  while (!(step = call$1(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var wellKnownSymbol$1 = wellKnownSymbol$h;

	var ITERATOR = wellKnownSymbol$1('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var uncurryThis$1 = functionUncurryThis;

	var arraySlice$1 = uncurryThis$1([].slice);

	var userAgent$2 = engineUserAgent;

	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

	var global$6 = global$K;
	var apply = functionApply;
	var bind$2 = functionBindContext;
	var isCallable$2 = isCallable$j;
	var hasOwn$1 = hasOwnProperty_1;
	var fails = fails$i;
	var html = html$2;
	var arraySlice = arraySlice$1;
	var createElement = documentCreateElement$2;
	var IS_IOS$1 = engineIsIos;
	var IS_NODE$2 = engineIsNode;

	var set = global$6.setImmediate;
	var clear = global$6.clearImmediate;
	var process$3 = global$6.process;
	var Dispatch = global$6.Dispatch;
	var Function$1 = global$6.Function;
	var MessageChannel = global$6.MessageChannel;
	var String$1 = global$6.String;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var location, defer, channel, port;

	try {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  location = global$6.location;
	} catch (error) { /* empty */ }

	var run = function (id) {
	  if (hasOwn$1(queue, id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function (event) {
	  run(event.data);
	};

	var post = function (id) {
	  // old engines have not location.origin
	  global$6.postMessage(String$1(id), location.protocol + '//' + location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set || !clear) {
	  set = function setImmediate(fn) {
	    var args = arraySlice(arguments, 1);
	    queue[++counter] = function () {
	      apply(isCallable$2(fn) ? fn : Function$1(fn), undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (IS_NODE$2) {
	    defer = function (id) {
	      process$3.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !IS_IOS$1) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = bind$2(port.postMessage, port);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    global$6.addEventListener &&
	    isCallable$2(global$6.postMessage) &&
	    !global$6.importScripts &&
	    location && location.protocol !== 'file:' &&
	    !fails(post)
	  ) {
	    defer = post;
	    global$6.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in createElement('script')) {
	    defer = function (id) {
	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task$1 = {
	  set: set,
	  clear: clear
	};

	var userAgent$1 = engineUserAgent;
	var global$5 = global$K;

	var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$5.Pebble !== undefined;

	var userAgent = engineUserAgent;

	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

	var global$4 = global$K;
	var bind$1 = functionBindContext;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var macrotask = task$1.set;
	var IS_IOS = engineIsIos;
	var IS_IOS_PEBBLE = engineIsIosPebble;
	var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
	var IS_NODE$1 = engineIsNode;

	var MutationObserver$1 = global$4.MutationObserver || global$4.WebKitMutationObserver;
	var document$2 = global$4.document;
	var process$2 = global$4.process;
	var Promise$1 = global$4.Promise;
	// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$4, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

	var flush, head, last, notify$1, toggle, node, promise, then;

	// modern engines have queueMicrotask method
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (IS_NODE$1 && (parent = process$2.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (error) {
	        if (head) notify$1();
	        else last = undefined;
	        throw error;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
	  if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver$1 && document$2) {
	    toggle = true;
	    node = document$2.createTextNode('');
	    new MutationObserver$1(flush).observe(node, { characterData: true });
	    notify$1 = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise = Promise$1.resolve(undefined);
	    // workaround of WebKit ~ iOS Safari 10.1 bug
	    promise.constructor = Promise$1;
	    then = bind$1(promise.then, promise);
	    notify$1 = function () {
	      then(flush);
	    };
	  // Node.js without promises
	  } else if (IS_NODE$1) {
	    notify$1 = function () {
	      process$2.nextTick(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    // strange IE + webpack dev server bug - use .bind(global)
	    macrotask = bind$1(macrotask, global$4);
	    notify$1 = function () {
	      macrotask(flush);
	    };
	  }
	}

	var microtask$1 = queueMicrotask || function (fn) {
	  var task = { fn: fn, next: undefined };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify$1();
	  } last = task;
	};

	var newPromiseCapability$2 = {};

	var aCallable$1 = aCallable$6;

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable$1(resolve);
	  this.reject = aCallable$1(reject);
	};

	// `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability
	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var anObject = anObject$d;
	var isObject$1 = isObject$9;
	var newPromiseCapability$1 = newPromiseCapability$2;

	var promiseResolve$1 = function (C, x) {
	  anObject(C);
	  if (isObject$1(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability$1.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var global$3 = global$K;

	var hostReportErrors$1 = function (a, b) {
	  var console = global$3.console;
	  if (console && console.error) {
	    arguments.length == 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform$1 = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var engineIsBrowser = typeof window == 'object';

	var $$1 = _export;
	var global$2 = global$K;
	var getBuiltIn = getBuiltIn$7;
	var call = functionCall;
	var NativePromise = nativePromiseConstructor;
	var redefine = redefine$6.exports;
	var redefineAll = redefineAll$1;
	var setPrototypeOf = objectSetPrototypeOf;
	var setToStringTag = setToStringTag$3;
	var setSpecies = setSpecies$1;
	var aCallable = aCallable$6;
	var isCallable$1 = isCallable$j;
	var isObject = isObject$9;
	var anInstance = anInstance$1;
	var inspectSource = inspectSource$4;
	var iterate = iterate$1;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
	var speciesConstructor = speciesConstructor$2;
	var task = task$1.set;
	var microtask = microtask$1;
	var promiseResolve = promiseResolve$1;
	var hostReportErrors = hostReportErrors$1;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var perform = perform$1;
	var InternalStateModule = internalState;
	var isForced = isForced_1;
	var wellKnownSymbol = wellKnownSymbol$h;
	var IS_BROWSER = engineIsBrowser;
	var IS_NODE = engineIsNode;
	var V8_VERSION = engineV8Version;

	var SPECIES = wellKnownSymbol('species');
	var PROMISE = 'Promise';

	var getInternalState = InternalStateModule.get;
	var setInternalState = InternalStateModule.set;
	var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
	var NativePromisePrototype = NativePromise && NativePromise.prototype;
	var PromiseConstructor = NativePromise;
	var PromisePrototype = NativePromisePrototype;
	var TypeError$1 = global$2.TypeError;
	var document$1 = global$2.document;
	var process$1 = global$2.process;
	var newPromiseCapability = newPromiseCapabilityModule.f;
	var newGenericPromiseCapability = newPromiseCapability;

	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$2.dispatchEvent);
	var NATIVE_REJECTION_EVENT = isCallable$1(global$2.PromiseRejectionEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var SUBCLASSING = false;

	var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

	var FORCED = isForced(PROMISE, function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
	  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	  // We can't detect it synchronously, so just check versions
	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
	  // Detect correctness of subclassing with @@species support
	  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
	  var FakePromise = function (exec) {
	    exec(function () { /* empty */ }, function () { /* empty */ });
	  };
	  var constructor = promise.constructor = {};
	  constructor[SPECIES] = FakePromise;
	  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
	  if (!SUBCLASSING) return true;
	  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
	});

	var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
	  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
	});

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && isCallable$1(then = it.then) ? then : false;
	};

	var notify = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  var chain = state.reactions;
	  microtask(function () {
	    var value = state.value;
	    var ok = state.state == FULFILLED;
	    var index = 0;
	    // variable length - can't use forEach
	    while (chain.length > index) {
	      var reaction = chain[index++];
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	            state.rejection = HANDLED;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // can throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            call(then, result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (error) {
	        if (domain && !exited) domain.exit();
	        reject(error);
	      }
	    }
	    state.reactions = [];
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$1.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global$2.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_REJECTION_EVENT && (handler = global$2['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (state) {
	  call(task, global$2, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform(function () {
	        if (IS_NODE) {
	          process$1.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (state) {
	  call(task, global$2, function () {
	    var promise = state.facade;
	    if (IS_NODE) {
	      process$1.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind = function (fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};

	var internalReject = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};

	var internalResolve = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          call(then, value,
	            bind(internalResolve, wrapper, state),
	            bind(internalReject, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({ done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromisePrototype);
	    aCallable(executor);
	    call(Internal, this);
	    var state = getInternalState(this);
	    try {
	      executor(bind(internalResolve, state), bind(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };
	  PromisePrototype = PromiseConstructor.prototype;
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  Internal = function Promise(executor) {
	    setInternalState(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: [],
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = redefineAll(PromisePrototype, {
	    // `Promise.prototype.then` method
	    // https://tc39.es/ecma262/#sec-promise.prototype.then
	    then: function then(onFulfilled, onRejected) {
	      var state = getInternalPromiseState(this);
	      var reactions = state.reactions;
	      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
	      reaction.ok = isCallable$1(onFulfilled) ? onFulfilled : true;
	      reaction.fail = isCallable$1(onRejected) && onRejected;
	      reaction.domain = IS_NODE ? process$1.domain : undefined;
	      state.parent = true;
	      reactions[reactions.length] = reaction;
	      if (state.state != PENDING) notify(state, false);
	      return reaction.promise;
	    },
	    // `Promise.prototype.catch` method
	    // https://tc39.es/ecma262/#sec-promise.prototype.catch
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalState(promise);
	    this.promise = promise;
	    this.resolve = bind(internalResolve, state);
	    this.reject = bind(internalReject, state);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };

	  if (isCallable$1(NativePromise) && NativePromisePrototype !== Object.prototype) {
	    nativeThen = NativePromisePrototype.then;

	    if (!SUBCLASSING) {
	      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
	      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
	        var that = this;
	        return new PromiseConstructor(function (resolve, reject) {
	          call(nativeThen, that, resolve, reject);
	        }).then(onFulfilled, onRejected);
	      // https://github.com/zloirock/core-js/issues/640
	      }, { unsafe: true });

	      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
	      redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], { unsafe: true });
	    }

	    // make `.constructor === Promise` work for native promise-based APIs
	    try {
	      delete NativePromisePrototype.constructor;
	    } catch (error) { /* empty */ }

	    // make `instanceof Promise` work for native promise-based APIs
	    if (setPrototypeOf) {
	      setPrototypeOf(NativePromisePrototype, PromisePrototype);
	    }
	  }
	}

	$$1({ global: true, wrap: true, forced: FORCED }, {
	  Promise: PromiseConstructor
	});

	setToStringTag(PromiseConstructor, PROMISE, false);
	setSpecies(PROMISE);

	PromiseWrapper = getBuiltIn(PROMISE);

	// statics
	$$1({ target: PROMISE, stat: true, forced: FORCED }, {
	  // `Promise.reject` method
	  // https://tc39.es/ecma262/#sec-promise.reject
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    call(capability.reject, undefined, r);
	    return capability.promise;
	  }
	});

	$$1({ target: PROMISE, stat: true, forced: FORCED }, {
	  // `Promise.resolve` method
	  // https://tc39.es/ecma262/#sec-promise.resolve
	  resolve: function resolve(x) {
	    return promiseResolve(this, x);
	  }
	});

	$$1({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
	  // `Promise.all` method
	  // https://tc39.es/ecma262/#sec-promise.all
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aCallable(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call($promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  },
	  // `Promise.race` method
	  // https://tc39.es/ecma262/#sec-promise.race
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aCallable(C.resolve);
	      iterate(iterable, function (promise) {
	        call($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	const _excluded$v = ["className", "spacing", "direction", "divider", "children"];
	const defaultElement$6 = 'div';
	const directionToFlex = {
	  vertical: 'col',
	  horizontal: 'row'
	};
	const Stack = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    className,
	    spacing = 0,
	    direction = 'vertical',
	    divider,
	    children
	  } = _ref,
	      restProps = _objectWithoutPropertiesLoose$1(_ref, _excluded$v);

	  const hasDivider = !!divider;
	  let clones = children;
	  const childrenWithoutNulls = _react__namespace.Children.toArray(children).filter(Boolean);

	  if (childrenWithoutNulls && hasDivider) {
	    const childCount = childrenWithoutNulls.length;
	    clones = _react__namespace.Children.map(childrenWithoutNulls, (child, index) => {
	      const isLast = index + 1 === childCount;
	      const clonedDivider = typeof divider === 'boolean' ? jsxRuntime.jsx(Box, {
	        borderT: direction === 'vertical' ? true : undefined,
	        borderL: direction === 'horizontal' ? true : undefined,
	        alignSelf: "stretch"
	      }, "d") : /*#__PURE__*/_react__namespace.cloneElement(divider, {
	        key: 'd'
	      });

	      const _divider = isLast ? null : clonedDivider;

	      return jsxRuntime.jsx(_react__namespace.Fragment, {
	        children: [child, _divider]
	      }, index);
	    });
	  }

	  return jsxRuntime.jsx(Flex, Object.assign({
	    as: defaultElement$6,
	    ref: ref,
	    className: cn__default["default"]('sl-stack', className),
	    direction: directionToFlex[direction],
	    styled: `gap-${spacing}`
	  }, restProps, {
	    children: clones
	  }), void 0);
	}));
	const HStack = /*#__PURE__*/_react.forwardRef((props, ref) => {
	  return jsxRuntime.jsx(Stack, Object.assign({
	    align: "center"
	  }, props, {
	    ref: ref,
	    direction: "horizontal"
	  }), void 0);
	});
	const VStack = /*#__PURE__*/_react.forwardRef((props, ref) => {
	  return jsxRuntime.jsx(Stack, Object.assign({
	    align: "stretch"
	  }, props, {
	    ref: ref,
	    direction: "vertical"
	  }), void 0);
	});

	const iconVariants$1 = {
	  intent: {
	    default: 'info-circle',
	    success: 'check-circle',
	    warning: 'exclamation-circle',
	    danger: 'exclamation-circle'
	  }
	};
	const variants$4 = {
	  default: {
	    default: {
	      border: 2,
	      borderColor: 'transparent',
	      rounded: 'lg',
	      bg: {
	        default: 'primary-tint'
	      }
	    },
	    success: {
	      bg: {
	        default: 'success-tint'
	      }
	    },
	    warning: {
	      bg: {
	        default: 'warning-tint'
	      }
	    },
	    danger: {
	      bg: {
	        default: 'danger-tint'
	      }
	    }
	  },
	  outline: {
	    default: {
	      border: 2,
	      rounded: 'xl',
	      borderColor: 'primary'
	    },
	    success: {
	      borderColor: 'success'
	    },
	    warning: {
	      borderColor: 'warning'
	    },
	    danger: {
	      borderColor: 'danger'
	    }
	  }
	};

	const _excluded$u = ["intent", "appearance", "heading", "className", "icon", "actions", "children"];
	const Callout = /*#__PURE__*/_react.memo(function Callout(_ref) {
	  let {
	    intent = 'default',
	    appearance = 'default',
	    heading,
	    className,
	    icon,
	    actions,
	    children
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$u);

	  const color = intent === 'default' || intent === 'info' ? 'primary' : intent;
	  const {
	    vars
	  } = useComputedTheme();
	  const value = vars[`color-${color}`];
	  const stateProps = Object.assign({}, variants$4[appearance].default, variants$4[appearance][intent]);
	  return jsxRuntime.jsx(Box, Object.assign({
	    className: cn__default["default"]('sl-callout', className),
	    rounded: "xl",
	    w: "full",
	    pb: appearance === 'default' ? undefined : 1,
	    bg: appearance === 'default' ? undefined : stateProps.borderColor,
	    role: "alert"
	  }, props, {
	    children: jsxRuntime.jsxs(HStack, Object.assign({
	      spacing: 3,
	      pl: 4,
	      pr: actions ? 4 : 10,
	      py: 4,
	      alignItems: "start",
	      rounded: "xl",
	      bg: appearance === 'default' ? undefined : 'canvas-pure'
	    }, stateProps, {
	      children: [icon !== null ? jsxRuntime.jsx(Box, {
	        mt: "px",
	        children: jsxRuntime.jsx(HeadingIcon, {
	          icon: icon,
	          intent: intent,
	          intentColorValue: value
	        }, void 0)
	      }, void 0) : null, jsxRuntime.jsxs(VStack, {
	        flex: 1,
	        children: [heading ? jsxRuntime.jsx(Heading, {
	          size: 4,
	          mb: 1.5,
	          children: heading
	        }, void 0) : null, children]
	      }, void 0), actions]
	    }), void 0)
	  }), void 0);
	});

	const HeadingIcon = ({
	  icon,
	  intent,
	  intentColorValue
	}) => {
	  let elem = null;

	  if (intent && !icon) {
	    const intentIcon = iconVariants$1.intent[intent];

	    if (intentIcon) {
	      elem = jsxRuntime.jsx(Icon, {
	        icon: intentIcon,
	        style: {
	          color: intentColorValue
	        },
	        size: "lg"
	      }, void 0);
	    }
	  } else if (icon && isIconProp(icon)) {
	    elem = jsxRuntime.jsx(Icon, {
	      icon: icon,
	      style: {
	        color: intentColorValue
	      },
	      size: "lg"
	    }, void 0);
	  }

	  return elem ? jsxRuntime.jsx(Box, {
	    "data-testid": "icon",
	    children: elem
	  }, void 0) : null;
	};

	var $ = _export;
	var DESCRIPTORS = descriptors;
	var global$1 = global$K;
	var uncurryThis = functionUncurryThis;
	var hasOwn = hasOwnProperty_1;
	var isCallable = isCallable$j;
	var isPrototypeOf = objectIsPrototypeOf;
	var toString = toString$8;
	var defineProperty = objectDefineProperty.f;
	var copyConstructorProperties = copyConstructorProperties$2;

	var NativeSymbol = global$1.Symbol;
	var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

	if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
	  // Safari 12 bug
	  NativeSymbol().description !== undefined
	)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
	    var result = isPrototypeOf(SymbolPrototype, this)
	      ? new NativeSymbol(description)
	      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	      : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };

	  copyConstructorProperties(SymbolWrapper, NativeSymbol);
	  SymbolWrapper.prototype = SymbolPrototype;
	  SymbolPrototype.constructor = SymbolWrapper;

	  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
	  var symbolToString = uncurryThis(SymbolPrototype.toString);
	  var symbolValueOf = uncurryThis(SymbolPrototype.valueOf);
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  var replace = uncurryThis(''.replace);
	  var stringSlice = uncurryThis(''.slice);

	  defineProperty(SymbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = symbolValueOf(this);
	      var string = symbolToString(symbol);
	      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
	      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });

	  $({ global: true, forced: true }, {
	    Symbol: SymbolWrapper
	  });
	}

	const Card = ({
	  title,
	  description,
	  logoIcon: _logoIcon = freeSolidSvgIcons.faRobot,
	  logoIconColor: _logoIconColor = '#A0AEC0',
	  logoBackgroundColor: _logoBackgroundColor = 'canvas-100',
	  actionBar,
	  badge,
	  isActive: _isActive = false,
	  activeHighlightColor: _activeHighlightColor = 'success'
	}) => {
	  const mode = useThemeMode();
	  return jsxRuntime.jsx(Box, {
	    w: "full",
	    boxShadow: "xl",
	    rounded: "lg",
	    display: "inline-block",
	    cursor: "pointer",
	    children: jsxRuntime.jsxs(Box, {
	      border: 2,
	      borderColor: {
	        default: _isActive ? _activeHighlightColor : 'transparent',
	        hover: !_isActive ? 'dark' : undefined
	      },
	      m: -1,
	      rounded: "lg",
	      overflowX: "hidden",
	      overflowY: "hidden",
	      children: [jsxRuntime.jsxs(Flex, {
	        bg: _logoBackgroundColor,
	        pos: "relative",
	        alignItems: "center",
	        justifyContent: "center",
	        h: 24,
	        children: [jsxRuntime.jsx(Box, {
	          pos: "absolute",
	          right: 0,
	          top: 0,
	          textAlign: "right",
	          px: 2,
	          py: 1,
	          color: "success",
	          children: badge
	        }, void 0), jsxRuntime.jsx(Icon, {
	          icon: _logoIcon,
	          color: _logoIconColor,
	          size: "3x"
	        }, void 0)]
	      }, void 0), jsxRuntime.jsxs(Box, {
	        style: {
	          backgroundColor: mode === 'dark' ? 'var(--color-canvas-50)' : 'var(--color-canvas)'
	        },
	        bg: "canvas",
	        border: 0,
	        borderColor: "transparent",
	        p: 4,
	        children: [jsxRuntime.jsx(Text, {
	          fontSize: "base",
	          color: "body",
	          fontWeight: "semibold",
	          children: title
	        }, void 0), jsxRuntime.jsx(Text, {
	          fontSize: "sm",
	          color: "muted",
	          overflowX: "hidden",
	          overflowY: "hidden",
	          style: {
	            display: '-webkit-box',
	            WebkitLineClamp: 2,
	            WebkitBoxOrient: 'vertical'
	          },
	          children: description
	        }, void 0)]
	      }, void 0), actionBar && jsxRuntime.jsx(Box, {
	        bg: "canvas",
	        w: "full",
	        overflowY: "hidden",
	        overflowX: "hidden",
	        borderT: true,
	        children: actionBar
	      }, void 0)]
	    }, void 0)
	  }, void 0);
	};

	const _excluded$t = ["className"];
	function Code(_ref) {
	  let {
	    className
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$t);

	  return jsxRuntime.jsx(Box, Object.assign({
	    as: "code",
	    className: cn__default["default"](className),
	    fontWeight: "medium",
	    fontFamily: "mono",
	    bg: "code",
	    color: "on-code",
	    border: true,
	    py: 0.5,
	    px: 1,
	    mx: 0.5,
	    rounded: true,
	    style: {
	      fontSize: '0.8125em'
	    }
	  }, props), void 0);
	}

	const Divider$2 = props => {
	  return jsxRuntime.jsx("div", Object.assign({}, props), void 0);
	};

	const _excluded$s = ["className", "name", "isHeading", "size", "avatar"];
	const sizes$5 = {
	  lg: {
	    avatarSize: 'md',
	    fontSize: 'lg'
	  },
	  md: {
	    avatarSize: 'sm'
	  }
	};
	const EntityName = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef(function EntityName(props, ref) {
	  const {
	    className,
	    name,
	    isHeading,
	    size = 'md',
	    avatar
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$s);

	  let leftElem;

	  if (isIconEntityName(props)) {
	    leftElem = jsxRuntime.jsx(Box, {
	      mx: "auto",
	      children: jsxRuntime.jsx(Icon, {
	        icon: props.icon
	      }, void 0)
	    }, void 0);
	  } else if (isAvatarEntityName(props)) {
	    leftElem = jsxRuntime.jsx(Avatar, Object.assign({
	      size: sizes$5[size].avatarSize,
	      mx: "auto"
	    }, avatar), void 0);
	  }

	  return jsxRuntime.jsxs(Flex, Object.assign({}, rest, {
	    ref: ref,
	    align: "center",
	    className: cn__default["default"]('sl-entity-name', className),
	    children: [leftElem ? jsxRuntime.jsx(Box, {
	      w: 12,
	      ml: -3,
	      children: leftElem
	    }, void 0) : null, jsxRuntime.jsx(Text, {
	      fontWeight: isHeading ? 'semibold' : 'normal',
	      size: sizes$5[size].fontSize,
	      children: name
	    }, void 0)]
	  }), void 0);
	}));

	function isIconEntityName(props) {
	  return props.icon !== undefined;
	}

	function isAvatarEntityName(props) {
	  return props.avatar !== undefined;
	}

	const Grid = props => {
	  return jsxRuntime.jsx("div", Object.assign({}, props), void 0);
	};

	const imageStyle = twStyle({
	  props: {
	    /* only apply these pointer styles when user is interacting with a mouse */
	    isInverted: {
	      true: CX('mix-blend-screen', 'invert', 'hue-rotate-180')
	    }
	  }
	});

	const _excluded$r = ["className", "invertOnDark"];
	const defaultElement$5 = 'img';
	function Image(_ref) {
	  let {
	    className,
	    invertOnDark
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$r);

	  const {
	    componentOverrides: {
	      Image: ImageOverride
	    }
	  } = useMosaicContext();
	  const isDark = useThemeIsDark();
	  const isInverted = invertOnDark && isDark;
	  return jsxRuntime.jsx(Box, Object.assign({
	    as: ImageOverride || defaultElement$5,
	    className: cn__default["default"]('sl-image', className),
	    styled: imageStyle({
	      isInverted
	    })
	  }, props), void 0);
	}

	/**
	 * Provides the behavior and accessibility implementation for a dialog component.
	 * A dialog is an overlay shown above other content in an application.
	 */
	function useDialog(props, ref) {
	  let {
	    role = 'dialog'
	  } = props;
	  let titleId = useSlotId();
	  titleId = props['aria-label'] ? undefined : titleId; // Focus the dialog itself on mount, unless a child element is already focused.

	  _react.useEffect(() => {
	    if (ref.current && !ref.current.contains(document.activeElement)) {
	      focusSafely(ref.current); // Safari on iOS does not move the VoiceOver cursor to the dialog
	      // or announce that it has opened until it has rendered. A workaround
	      // is to wait for half a second, then blur and re-focus the dialog.

	      let timeout = setTimeout(() => {
	        if (document.activeElement === ref.current) {
	          ref.current.blur();
	          focusSafely(ref.current);
	        }
	      }, 500);
	      return () => {
	        clearTimeout(timeout);
	      };
	    }
	  }, [ref]); // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
	  // on mount when inside an iframe, no matter which element we programmatically focus.
	  // See https://bugs.webkit.org/show_bug.cgi?id=211934.
	  // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
	  // even without aria-modal on the dialog itself.

	  return {
	    dialogProps: _extends({}, filterDOMProps(props, {
	      labelable: true
	    }), {
	      role,
	      tabIndex: -1,
	      'aria-labelledby': props['aria-labelledby'] || titleId
	    }),
	    titleProps: {
	      id: titleId
	    }
	  };
	}

	/**
	 * Manages state for an overlay trigger. Tracks whether the overlay is open, and provides
	 * methods to toggle this state.
	 */
	function useOverlayTriggerState(props) {
	  let [isOpen, setOpen] = useControlledState(props.isOpen, props.defaultOpen || false, props.onOpenChange);
	  return {
	    isOpen,

	    open() {
	      setOpen(true);
	    },

	    close() {
	      setOpen(false);
	    },

	    toggle() {
	      setOpen(!isOpen);
	    }

	  };
	}

	const _excluded$q = ["children", "elementType", "isFocusable", "style"];
	const styles$2 = {
	  border: 0,
	  clip: 'rect(0 0 0 0)',
	  height: 1,
	  margin: '-1px',
	  overflow: 'hidden',
	  padding: 0,
	  position: 'absolute',
	  width: 1,
	  whiteSpace: 'nowrap'
	};
	/**
	 * Provides props for an element that hides its children visually
	 * but keeps content visible to assistive technology.
	 */

	function useVisuallyHidden(props = {}) {
	  let {
	    style,
	    isFocusable
	  } = props;
	  let [isFocused, setFocused] = _react__namespace.useState(false);
	  let {
	    focusProps
	  } = useFocus({
	    isDisabled: !isFocusable,
	    onFocusChange: setFocused
	  }); // If focused, don't hide the element.

	  let combinedStyles = _react__namespace.useMemo(() => {
	    if (isFocused) {
	      return style;
	    } else if (style) {
	      return Object.assign({}, styles$2, style);
	    } else {
	      return styles$2;
	    }
	  }, [isFocused, style]);
	  return {
	    visuallyHiddenProps: Object.assign({}, focusProps, {
	      style: combinedStyles
	    })
	  };
	}
	/**
	 * VisuallyHidden hides its children visually, while keeping content visible
	 * to screen readers.
	 */

	function VisuallyHidden(props) {
	  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	  let {
	    children,
	    elementType: Element = 'div'
	  } = props,
	      otherProps = _objectWithoutPropertiesLoose$1(props, _excluded$q);

	  let {
	    visuallyHiddenProps
	  } = useVisuallyHidden(props);
	  return jsxRuntime.jsx(Element, Object.assign({}, mergeProps(otherProps, visuallyHiddenProps), {
	    children: children
	  }), void 0);
	}

	/**
	 * A visually hidden button that can be used to allow screen reader
	 * users to dismiss a modal or popup when there is no visual
	 * affordance to do so.
	 */

	function DismissButton(props) {
	  let {
	    onDismiss
	  } = props;

	  let onClick = () => {
	    if (onDismiss) {
	      onDismiss();
	    }
	  };

	  return jsxRuntime.jsx(VisuallyHidden, {
	    children: jsxRuntime.jsx("button", {
	      tabIndex: -1,
	      "aria-label": "Dismiss",
	      onClick: onClick
	    }, void 0)
	  }, void 0);
	}

	function Overlay(props, ref) {
	  let {
	    children,
	    isOpen,
	    container
	  } = props;
	  const {
	    providerRef
	  } = useMosaicContext();
	  let mountOverlay = isOpen;

	  if (!mountOverlay || typeof window === 'undefined') {
	    // Don't bother showing anything if we don't have to.
	    return null;
	  }

	  let contents = jsxRuntime.jsx(WithDomRef, {
	    ref: ref,
	    children: jsxRuntime.jsx(Box, {
	      bg: "transparent",
	      children: children
	    }, void 0)
	  }, void 0);

	  const portalContainer = container || (providerRef === null || providerRef === void 0 ? void 0 : providerRef.current) || document.body;
	  return /*#__PURE__*/_reactDom__default["default"].createPortal(contents, portalContainer);
	}

	let _Overlay = /*#__PURE__*/_react__namespace.forwardRef(Overlay);

	const _excluded$p = ["children", "footer", "isOpen", "onClose", "isDraggable", "isNotDismissable"],
	      _excluded2$9 = ["children", "footer", "isOpen", "onClose", "isDraggable", "isNotDismissable"],
	      _excluded3$2 = ["color"],
	      _excluded4$2 = ["color"],
	      _excluded5$2 = ["color"],
	      _excluded6$1 = ["isDraggable", "moveProps", "containerProps", "dialogProps", "titleProps", "onClose", "children", "footer", "position", "isHidden", "isNotDismissable", "size"];
	const modalSizeVariants = {
	  sm: {
	    width: '100%',
	    maxWidth: 400
	  },
	  md: {
	    width: '100%',
	    maxWidth: 600
	  },
	  lg: {
	    width: '100%',
	    maxWidth: 900
	  },
	  full: {
	    width: '100%',
	    maxWidth: '90%'
	  },
	  grow: {
	    maxWidth: '90%'
	  }
	};
	const useModalState = () => {
	  const state = useOverlayTriggerState({});
	  return {
	    isOpen: state.isOpen,
	    open: state.open,
	    close: state.close
	  };
	};
	const Modal = props => {
	  const {
	    children,
	    footer,
	    isOpen,
	    onClose,
	    isDraggable,
	    isNotDismissable
	  } = props,
	        rest = _objectWithoutPropertiesLoose$1(props, _excluded$p);

	  return jsxRuntime.jsx(_Overlay, {
	    isOpen: isOpen,
	    children: jsxRuntime.jsx(ModalWrapper, Object.assign({}, rest, {
	      footer: footer,
	      isOpen: isOpen,
	      onClose: onClose,
	      isDraggable: isDraggable,
	      isNotDismissable: isNotDismissable,
	      children: children
	    }), void 0)
	  }, void 0);
	};

	function isElementAllowedToBeInteractedOutside(element) {
	  const popoverParent = element.closest('[data-ispopover="true"]');
	  return !!popoverParent;
	} // returns implementation of shouldCloseOnInteractOutside for making sure that clicking elements outside the modal
	// but triggered by modal itself (like select, menu) will not close the modal
	// see https://github.com/stoplightio/mosaic/issues/303 for details


	function preventClosingForShortTime() {
	  let shouldPrevent = false;
	  return function shouldCloseOnInteractionOutside(element) {
	    if (isElementAllowedToBeInteractedOutside(element)) {
	      shouldPrevent = true;
	      setTimeout(() => {
	        shouldPrevent = false;
	      }, 400);
	      return false;
	    } else if (shouldPrevent) {
	      return false;
	    }

	    return true;
	  };
	}

	const ModalWrapper = _ref => {
	  let {
	    children,
	    footer,
	    isOpen,
	    onClose,
	    isDraggable,
	    isNotDismissable
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded2$9);

	  const ref = _react.useRef();
	  const preventClosingFunction = _react__namespace.useMemo(preventClosingForShortTime, [isOpen]); // Handle interacting outside the dialog and pressing
	  // the Escape key to close the modal.

	  const {
	    overlayProps
	  } = useOverlay({
	    onClose,
	    isOpen,
	    isDismissable: !isDraggable && !isNotDismissable,
	    shouldCloseOnInteractOutside: preventClosingFunction
	  }, ref); // Hide content outside the modal from screen readers.

	  const {
	    modalProps
	  } = useModal(); // Get props for the dialog

	  const {
	    dialogProps,
	    titleProps
	  } = useDialog({}, ref); // TODO: having to pull out color for the typings is so annoying...

	  const _mergeProps = mergeProps(overlayProps, modalProps),
	        containerProps = _objectWithoutPropertiesLoose$1(_mergeProps, _excluded3$2);

	  const dialogPropsWithoutColor = _objectWithoutPropertiesLoose$1(dialogProps, _excluded4$2);

	  const dialogTitlePropsWithoutColor = _objectWithoutPropertiesLoose$1(titleProps, _excluded5$2);

	  if (isDraggable) {
	    return jsxRuntime.jsx(DraggableModalBox, Object.assign({}, props, {
	      ref: ref,
	      onClose: onClose,
	      containerProps: containerProps,
	      dialogProps: dialogPropsWithoutColor,
	      titleProps: dialogTitlePropsWithoutColor,
	      footer: footer,
	      isNotDismissable: isNotDismissable,
	      children: children
	    }), void 0);
	  }

	  return jsxRuntime.jsx(StaticModalBox, Object.assign({}, props, {
	    ref: ref,
	    onClose: onClose,
	    containerProps: containerProps,
	    dialogProps: dialogPropsWithoutColor,
	    titleProps: dialogTitlePropsWithoutColor,
	    footer: footer,
	    isNotDismissable: isNotDismissable,
	    children: children
	  }), void 0);
	};

	const ModalBox = /*#__PURE__*/_react.forwardRef((_ref2, ref) => {
	  let {
	    isDraggable,
	    moveProps = {},
	    containerProps,
	    dialogProps,
	    titleProps,
	    onClose,
	    children,
	    footer,
	    position,
	    isHidden,
	    isNotDismissable,
	    size = 'md'
	  } = _ref2,
	      props = _objectWithoutPropertiesLoose$1(_ref2, _excluded6$1);

	  const isDark = useThemeIsDark();
	  const style = Object.assign({}, modalSizeVariants[size] || {});

	  if (position) {
	    style.position = 'fixed';
	    style.top = position.y;
	    style.left = position.x;
	  }

	  if (size === 'full') {
	    style.height = '100%';
	    style.maxHeight = '90%';
	  }

	  let headerElem;

	  if ('renderHeader' in props && props.renderHeader) {
	    headerElem = props.renderHeader({
	      containerProps: moveProps,
	      titleProps,
	      onClose
	    });
	  } else if ('title' in props && props.title) {
	    headerElem = jsxRuntime.jsxs(Flex, Object.assign({}, moveProps, {
	      borderB: true,
	      borderColor: isDark ? 'input' : undefined,
	      alignItems: "center",
	      pl: 5,
	      pr: 3,
	      cursor: !!position ? 'move' : undefined,
	      h: "3xl",
	      children: [typeof props.title === 'string' ? jsxRuntime.jsx(Heading, Object.assign({
	        size: 3,
	        fontSize: "xl",
	        flex: 1,
	        fontWeight: "medium"
	      }, titleProps, {
	        children: props.title
	      }), void 0) : jsxRuntime.jsx(Box, Object.assign({}, titleProps, {
	        flex: 1,
	        as: "header",
	        children: props.title
	      }), void 0), !isNotDismissable && jsxRuntime.jsx(_Button, {
	        appearance: "minimal",
	        icon: jsxRuntime.jsx(Icon, {
	          icon: "times",
	          size: "2x"
	        }, void 0),
	        onPress: onClose,
	        "aria-label": "dismiss"
	      }, void 0)]
	    }), void 0);
	  }

	  let footerElem;

	  if (footer) {
	    footerElem = jsxRuntime.jsx(Box, {
	      borderT: true,
	      borderColor: isDark ? 'input' : undefined,
	      alignItems: "center",
	      pl: 5,
	      pr: 3,
	      py: 3,
	      children: footer
	    }, void 0);
	  }

	  return jsxRuntime.jsx(Box, Object.assign({}, containerProps, {
	    bg: "canvas-dialog",
	    boxShadow: "lg",
	    rounded: "lg",
	    pos: "relative",
	    zIndex: 20,
	    style: style,
	    visibility: isHidden ? 'invisible' : undefined,
	    children: jsxRuntime.jsx(FocusScope, {
	      restoreFocus: !isDraggable,
	      contain: !isDraggable,
	      children: jsxRuntime.jsxs(Flex, Object.assign({}, dialogProps, {
	        ref: ref,
	        "aria-describedby": `${dialogProps['aria-labelledby']}-body`,
	        "aria-modal": "true",
	        "data-testid": "modal",
	        h: size === 'full' ? 'full' : undefined,
	        flexDirection: "col",
	        children: [headerElem, jsxRuntime.jsx(ModalContent, {
	          id: `${dialogProps['aria-labelledby']}-body`,
	          p: headerElem || footerElem ? 5 : undefined,
	          h: size === 'full' ? 'full' : undefined,
	          overflowY: size === 'full' ? 'auto' : undefined,
	          children: children
	        }, void 0), footerElem]
	      }), void 0)
	    }, void 0)
	  }), void 0);
	});
	/**
	 * Memo modal content so that it does not re-render constantly in draggable modals
	 */

	const ModalContent = /*#__PURE__*/_react.memo(({
	  children,
	  id,
	  p,
	  h,
	  overflowY
	}) => {
	  return jsxRuntime.jsx(Box, {
	    p: p,
	    id: id,
	    h: h,
	    overflowY: overflowY,
	    children: children
	  }, void 0);
	});
	const StaticModalBox = /*#__PURE__*/_react.forwardRef((props, ref) => {
	  // Prevent scrolling while the modal is open
	  usePreventScroll();
	  return jsxRuntime.jsxs(Flex, {
	    pos: "fixed",
	    alignItems: "center",
	    justifyContent: "center",
	    zIndex: 40,
	    pin: true,
	    overflowY: "auto",
	    children: [jsxRuntime.jsx(Underlay, {}, void 0), jsxRuntime.jsx(ModalBox, Object.assign({}, props, {
	      ref: ref
	    }), void 0)]
	  }, void 0);
	});
	const DraggableModalBox = /*#__PURE__*/_react.forwardRef((props, ref) => {
	  const [position, setPosition] = _react__namespace.useState({
	    x: 0,
	    y: 0
	  }); // get the width of the button trigger so that we can set the menu min width

	  const [modalWidth, modalHeight] = useSize__default["default"](ref);
	  const [windowWidth, windowHeight] = windowSize.useWindowSize();
	  _react__namespace.useEffect(() => {
	    if (modalWidth && windowWidth) {
	      const y = windowHeight / 2 - modalHeight / 2;
	      setPosition({
	        x: windowWidth / 2 - modalWidth / 2,
	        y: y - y * 0.7
	      });
	    }
	  }, [modalWidth, windowWidth, setPosition, windowHeight, modalHeight]);

	  const clamp = (pos, containerSize, componentSize) => Math.min(Math.max(pos, 0), containerSize - componentSize);

	  const {
	    moveProps
	  } = useMove({
	    onMove(e) {
	      setPosition(({
	        x,
	        y
	      }) => {
	        // Normally, we want to allow the user to continue
	        // dragging outside the box such that they need to
	        // drag back over the ball again before it moves.
	        // This is handled below by clamping during render.
	        // If using the keyboard, however, we need to clamp
	        // here so that dragging outside the container and
	        // then using the arrow keys works as expected.
	        if (e.pointerType === 'keyboard') {
	          // eslint-disable-next-line no-param-reassign
	          x = clamp(x, windowWidth, modalWidth); // eslint-disable-next-line no-param-reassign

	          y = clamp(y, windowHeight, modalHeight);
	        } // eslint-disable-next-line no-param-reassign


	        x += e.deltaX; // eslint-disable-next-line no-param-reassign

	        y += e.deltaY;
	        return {
	          x: clamp(x, windowWidth + modalWidth * 0.5, modalWidth),
	          y: clamp(y, windowHeight + 50, modalHeight)
	        };
	      });
	    }

	  });
	  return jsxRuntime.jsx(ModalBox, Object.assign({}, props, {
	    moveProps: moveProps,
	    position: position,
	    ref: ref,
	    isHidden: !modalWidth
	  }), void 0);
	});

	const Underlay = () => {
	  return jsxRuntime.jsx(Box, {
	    pos: "fixed",
	    zIndex: 10,
	    pin: true,
	    style: {
	      backgroundColor: 'rgba(0, 0 , 0, .3)'
	    }
	  }, void 0);
	};

	const _excluded$o = ["className", "children", "focus", "caption", "bg"];
	function ProductImage(_ref) {
	  let {
	    className,
	    children,
	    focus,
	    caption,
	    bg = 'success'
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$o);

	  var _a, _b, _c, _d;

	  const {
	    isOpen,
	    open,
	    close
	  } = useModalState(); // enforce single child

	  const child = _react__namespace.Children.only(children);
	  const focusContainerProps = ((_a = FocusVariants[focus]) === null || _a === void 0 ? void 0 : _a.container) || {};
	  const focusAspectProps = ((_b = FocusVariants[focus]) === null || _b === void 0 ? void 0 : _b.aspect) || {};
	  const focusImageProps = ((_c = FocusVariants[focus]) === null || _c === void 0 ? void 0 : _c.image) || {};
	  const focusCaptionProps = ((_d = FocusVariants[focus]) === null || _d === void 0 ? void 0 : _d.caption) || {};
	  const imageElem = /*#__PURE__*/_react__namespace.cloneElement(child, Object.assign({
	    bg: 'canvas-pure',
	    borderColor: 'body',
	    overflowX: 'hidden',
	    overflowY: 'hidden',
	    mx: 'auto'
	  }, focusImageProps, {
	    style: Object.assign(focusImageProps.style || {}, child.props.style || {})
	  }));
	  let elem = imageElem;

	  if (focusAspectProps.ratio) {
	    elem = jsxRuntime.jsx(AspectRatio, Object.assign({
	      mx: "auto",
	      ratio: 1
	    }, focusAspectProps, {
	      children: imageElem
	    }), void 0);
	  }

	  const resolvedCaption = caption || child.props.title;
	  let captionElem;

	  if (resolvedCaption) {
	    if (focus) {
	      captionElem = jsxRuntime.jsx(Box, Object.assign({
	        as: "figcaption",
	        display: "block",
	        style: {
	          color: 'white'
	        },
	        pb: 8,
	        mt: -8,
	        mx: "auto",
	        px: 20,
	        fontWeight: "semibold",
	        fontSize: "paragraph",
	        textAlign: "center"
	      }, focusCaptionProps, {
	        children: resolvedCaption
	      }), void 0);
	    } else {
	      captionElem = jsxRuntime.jsx(Box, {
	        as: "figcaption",
	        children: resolvedCaption
	      }, void 0);
	    }
	  }

	  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
	    children: [jsxRuntime.jsx(Pressable, {
	      onPress: open,
	      children: jsxRuntime.jsxs(Box, {
	        as: "figure",
	        children: [jsxRuntime.jsxs(Box, Object.assign({
	          className: cn__default["default"]('sl-product-image', className),
	          border: 2,
	          borderColor: "body",
	          rounded: "xl",
	          bg: focus ? bg : undefined,
	          overflowX: "hidden",
	          overflowY: "hidden",
	          transform: true,
	          cursor: "zoom-in",
	          transitionDuration: 300,
	          translateX: {
	            hover: 2
	          },
	          translateY: {
	            hover: -2
	          },
	          style: {
	            // @ts-expect-error
	            '--shadow-md': '-8px 8px 0 0 var(--color-text)'
	          },
	          boxShadow: {
	            hover: true
	          }
	        }, props, focusContainerProps, {
	          children: [focus && focus !== 'bottom' ? captionElem : null, elem, focus && focus === 'bottom' ? captionElem : null]
	        }), void 0), !focus ? captionElem : null]
	      }, void 0)
	    }, void 0), jsxRuntime.jsx(Modal, {
	      isOpen: isOpen,
	      onClose: close,
	      size: "grow",
	      children: jsxRuntime.jsx(Box, {
	        as: Pressable,
	        onPress: close,
	        cursor: "zoom-out",
	        overflowX: "hidden",
	        overflowY: "hidden",
	        rounded: "lg",
	        children: jsxRuntime.jsx(Box, {
	          children: /*#__PURE__*/_react__namespace.cloneElement(child, {
	            style: Object.assign({
	              maxHeight: 800
	            }, child.props.style || {})
	          })
	        }, void 0)
	      }, void 0)
	    }, void 0)]
	  }, void 0);
	}
	const FocusVariants = {
	  center: {
	    container: {
	      p: 16
	    },
	    image: {
	      border: 2,
	      rounded: 'xl',
	      boxShadow: 'lg',
	      style: {
	        maxHeight: 500
	      }
	    }
	  },
	  bottom: {
	    container: {
	      pb: 16
	    },
	    aspect: {
	      ratio: 16 / 9,
	      mx: 16
	    },
	    image: {
	      borderB: 2,
	      borderL: 2,
	      borderR: 2,
	      rounded: 'b-lg',
	      objectFit: 'scale-down',
	      objectPosition: 'bottom'
	    },
	    caption: {
	      pb: 0,
	      mt: 0,
	      pt: 8,
	      mb: -8
	    }
	  },
	  top: {
	    container: {
	      pt: 16
	    },
	    aspect: {
	      ratio: 16 / 9,
	      mx: 16
	    },
	    image: {
	      borderT: 2,
	      borderL: 2,
	      borderR: 2,
	      rounded: 't-lg',
	      objectFit: 'scale-down',
	      objectPosition: 'top'
	    }
	  },
	  'top-right': {
	    container: {
	      pt: 16
	    },
	    aspect: {
	      ratio: 16 / 9,
	      mr: 16
	    },
	    image: {
	      borderT: 2,
	      borderR: 2,
	      rounded: 'tr-lg',
	      objectFit: 'scale-down',
	      objectPosition: 'left-top'
	    }
	  },
	  'top-left': {
	    container: {
	      pt: 16
	    },
	    aspect: {
	      ratio: 16 / 9,
	      ml: 16
	    },
	    image: {
	      borderT: 2,
	      borderL: 2,
	      rounded: 'tl-lg',
	      objectFit: 'scale-down',
	      objectPosition: 'right-top'
	    }
	  }
	};

	/**
	 * Provides the accessibility implementation for labels and their associated elements.
	 * Labels provide context for user inputs.
	 * @param props - The props for labels and fields.
	 */
	function useLabel(props) {
	  let {
	    id,
	    label,
	    'aria-labelledby': ariaLabelledby,
	    'aria-label': ariaLabel,
	    labelElementType = 'label'
	  } = props;
	  id = useId(id);
	  let labelId = useId();
	  let labelProps = {};

	  if (label) {
	    ariaLabelledby = ariaLabelledby ? ariaLabelledby + " " + labelId : labelId;
	    labelProps = {
	      id: labelId,
	      htmlFor: labelElementType === 'label' ? id : undefined
	    };
	  } else if (!ariaLabelledby && !ariaLabel) {
	    console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility');
	  }

	  let fieldProps = useLabels({
	    id,
	    'aria-label': ariaLabel,
	    'aria-labelledby': ariaLabelledby
	  });
	  return {
	    labelProps,
	    fieldProps
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for a text field.
	 * @param props - Props for the text field.
	 * @param ref - Ref to the HTML input or textarea element.
	 */
	function useTextField(props, ref) {
	  let {
	    inputElementType = 'input',
	    isDisabled = false,
	    isRequired = false,
	    isReadOnly = false,
	    validationState,
	    type = 'text',
	    onChange: _onChange = () => {}
	  } = props;
	  let {
	    focusableProps
	  } = useFocusable(props, ref);
	  let {
	    labelProps,
	    fieldProps
	  } = useLabel(props);
	  let domProps = filterDOMProps(props, {
	    labelable: true
	  });
	  const inputOnlyProps = {
	    type,
	    pattern: props.pattern
	  };
	  return {
	    labelProps,
	    inputProps: mergeProps(domProps, inputElementType === 'input' && inputOnlyProps, _extends({
	      disabled: isDisabled,
	      readOnly: isReadOnly,
	      'aria-required': isRequired || undefined,
	      'aria-invalid': validationState === 'invalid' || undefined,
	      'aria-errormessage': props['aria-errormessage'],
	      'aria-activedescendant': props['aria-activedescendant'],
	      'aria-autocomplete': props['aria-autocomplete'],
	      'aria-haspopup': props['aria-haspopup'],
	      value: props.value,
	      defaultValue: props.value ? undefined : props.defaultValue,
	      onChange: e => _onChange(e.target.value),
	      autoComplete: props.autoComplete,
	      maxLength: props.maxLength,
	      minLength: props.minLength,
	      name: props.name,
	      placeholder: props.placeholder,
	      inputMode: props.inputMode,
	      // Clipboard events
	      onCopy: props.onCopy,
	      onCut: props.onCut,
	      onPaste: props.onPaste,
	      // Composition events
	      onCompositionEnd: props.onCompositionEnd,
	      onCompositionStart: props.onCompositionStart,
	      onCompositionUpdate: props.onCompositionUpdate,
	      // Selection events
	      onSelect: props.onSelect,
	      // Input events
	      onBeforeInput: props.onBeforeInput,
	      onInput: props.onInput
	    }, focusableProps, fieldProps))
	  };
	}

	const variants$3 = {
	  default: {
	    default: {
	      borderColor: {
	        default: 'input',
	        // TODO: when have more sophisticated theme val system, slightly darker color on hover as in ui designs
	        // hover: 'input',
	        focus: 'primary'
	      }
	    },
	    success: {
	      borderColor: {
	        default: 'success',
	        focus: 'success-dark'
	      }
	    },
	    warning: {
	      borderColor: {
	        default: 'warning',
	        focus: 'warning-dark'
	      }
	    },
	    danger: {
	      borderColor: {
	        default: 'danger',
	        focus: 'danger-dark'
	      }
	    }
	  },
	  minimal: {
	    default: {
	      borderColor: {
	        default: 'transparent',
	        hover: 'input',
	        focus: 'primary'
	      }
	    },
	    success: {
	      borderColor: {
	        default: 'transparent',
	        hover: 'success',
	        focus: 'success-dark'
	      }
	    },
	    warning: {
	      borderColor: {
	        default: 'transparent',
	        hover: 'warning',
	        focus: 'warning-dark'
	      }
	    },
	    danger: {
	      borderColor: {
	        default: 'transparent',
	        hover: 'danger',
	        focus: 'danger-dark'
	      }
	    }
	  }
	};

	const _excluded$n = ["appearance", "intent", "size", "readOnly", "disabled", "className", "icon", "required", "value", "defaultValue", "onChange"],
	      _excluded2$8 = ["color"];
	const sizes$4 = {
	  lg: {
	    px: 3
	  },
	  md: {
	    px: 2.5
	  },
	  sm: {
	    px: 1.5
	  }
	};
	const fontSizes$1 = {
	  lg: 'lg',
	  md: 'base',
	  sm: 'base'
	};
	const Input = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef(function Input(_ref, ref) {
	  let {
	    appearance = 'default',
	    intent = 'default',
	    size = 'md',
	    readOnly,
	    disabled,
	    className,
	    icon,
	    required,
	    value,
	    defaultValue,
	    onChange
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$n);

	  const {
	    matchedProps,
	    remainingProps
	  } = splitBoxProps(props);
	  const fallbackRef = _react.useRef();
	  const inputRef = ref || fallbackRef;

	  const _useTextField = useTextField(Object.assign({}, remainingProps, {
	    value: typeof value !== 'undefined' ? String(value) : value,
	    defaultValue: typeof defaultValue !== 'undefined' ? String(defaultValue) : defaultValue,
	    onInput: onChange,
	    isDisabled: disabled,
	    isReadOnly: readOnly,
	    isRequired: required
	  }), inputRef),
	        inputProps = _objectWithoutPropertiesLoose$1(_useTextField.inputProps, _excluded2$8);

	  const stateProps = Object.assign({}, variants$3.default.default, variants$3.default[intent], variants$3[appearance].default, variants$3[appearance][intent]);
	  let disabledProps = {};
	  let disabledInputProps = {};

	  if (disabled) {
	    disabledProps = {
	      bg: 'canvas-100',
	      color: 'muted'
	    };
	    disabledInputProps = {
	      cursor: 'not-allowed'
	    };
	  }

	  let readOnlyProps = {};

	  if (readOnly) {
	    readOnlyProps.tabIndex = -1;

	    if (appearance === 'minimal') {
	      readOnlyProps.borderColor = 'transparent';
	    }
	  }

	  return jsxRuntime.jsxs(Box, Object.assign({
	    className: cn__default["default"]('sl-input', className),
	    pos: "relative"
	  }, matchedProps, disabledProps, {
	    children: [icon ? jsxRuntime.jsx(InputIcon, {
	      icon: icon
	    }, void 0) : null, jsxRuntime.jsx(Box, Object.assign({
	      as: "input",
	      ref: inputRef,
	      pl: icon ? 8 : sizes$4[size].px,
	      pr: sizes$4[size].px,
	      fontSize: fontSizes$1[size],
	      rounded: true,
	      h: size,
	      border: true,
	      w: "full",
	      disabled: disabled,
	      readOnly: readOnly,
	      bg: "transparent",
	      pos: "relative",
	      zIndex: 10
	    }, disabledInputProps, remainingProps, stateProps, readOnlyProps, inputProps), void 0)]
	  }), void 0);
	}));

	const InputIcon = ({
	  icon
	}) => {
	  let elem = icon;

	  if (isIconProp(icon)) {
	    elem = jsxRuntime.jsx(Icon, {
	      icon: icon,
	      size: "sm",
	      fixedWidth: true
	    }, void 0);
	  }

	  return jsxRuntime.jsx(Flex, {
	    pos: "absolute",
	    align: "center",
	    zIndex: 0,
	    style: {
	      top: 0,
	      bottom: 0,
	      left: 0,
	      lineHeight: 0
	    },
	    pl: 2,
	    children: elem
	  }, void 0);
	};

	const _excluded$m = ["baseThemeId", "theme", "scope"];
	const ThemeProvider = /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    baseThemeId,
	    theme,
	    scope
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$m);

	  const parentThemeId = useThemeId();
	  const parentTheme = useCustomTheme();
	  const themeIdAtom = useThemeIdAtom();
	  const customThemeAtom = useCustomThemeAtom();
	  return jsxRuntime.jsx(ThemeProviderContext.Provider, {
	    value: scope,
	    children: jsxRuntime.jsx(jotai.Provider, {
	      scope: scope,
	      initialValues: [[themeIdAtom, baseThemeId || parentThemeId], [customThemeAtom, theme || parentTheme]],
	      children: jsxRuntime.jsx(ThemeProviderInner, Object.assign({}, props, {
	        theme: theme,
	        scope: scope,
	        ref: ref
	      }), void 0)
	    }, void 0)
	  }, void 0);
	});
	const ThemeProviderInner = /*#__PURE__*/_react.forwardRef(({
	  children,
	  scope,
	  theme,
	  isInverted
	}, ref) => {
	  const computed = useComputedTheme(scope);
	  const updateTheme = useUpdateTheme(scope);

	  const _className = cn__default["default"](children.props.className, themeClassFn(computed.css));
	  /**
	   * If a new theme was passed in, update it.
	   */


	  const prevTheme = usePrevious(theme);
	  _react.useEffect(() => {
	    if (!equals__default["default"](theme, prevTheme)) {
	      updateTheme(theme);
	    }
	  }, [prevTheme, theme, updateTheme]);
	  return /*#__PURE__*/_react__default["default"].cloneElement(children, {
	    className: _className || undefined,
	    ref,
	    'data-theme': isInverted ? 'inverted' : computed.theme.isDark ? 'dark' : 'light'
	  });
	});
	const IS_SERVER = typeof document === 'undefined';

	const computeThemeClass = css => tw(twCss(css));

	const memoizedComputeThemeClass = memoize__default["default"](computeThemeClass, {
	  maxAge: Infinity
	});
	const themeClassFn = IS_SERVER ? computeThemeClass : memoizedComputeThemeClass;

	const InvertTheme = ({
	  children,
	  inverted,
	  propsOnDark: _propsOnDark = {}
	}) => {
	  const {
	    theme,
	    vars
	  } = useComputedTheme();

	  if (inverted === false) {
	    return children;
	  }

	  const willInvert = !theme.isDark;

	  if (willInvert) {
	    return jsxRuntime.jsx(ThemeProvider, {
	      theme: {
	        colors: {
	          background: vars['color-canvas-1000']
	        }
	      },
	      isInverted: true,
	      children: children
	    }, void 0);
	  }

	  return /*#__PURE__*/_react__namespace.cloneElement(children, Object.assign({}, _propsOnDark, {
	    style: Object.assign({
	      '--color-canvas': 'var(--color-canvas-tint)'
	    }, children.props.style || {}, _propsOnDark.style || {})
	  }));
	};

	const linkStyle = twStyle({
	  base: twCss({
	    '@apply': CX.$combine(CX('text-link'), CX.hover('hover:text-link-dark')),
	    '& > code': {
	      '@apply': CX('text-link')
	    },
	    '&:hover > code': {
	      '@apply': CX('text-link-dark')
	    }
	  })
	});

	const _excluded$l = ["className"];
	const defaultElement$4 = 'a';
	const Link = /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    className
	  } = _ref,
	      restProps = _objectWithoutPropertiesLoose$1(_ref, _excluded$l);

	  const {
	    componentOverrides: {
	      Link: LinkOverride
	    }
	  } = useMosaicContext();
	  return jsxRuntime.jsx(Box, Object.assign({
	    as: LinkOverride || defaultElement$4,
	    ref: ref,
	    UNSAFE_className: "sl-link",
	    className: className,
	    styled: linkStyle()
	  }, restProps), void 0);
	});

	let _ = t => t,
	    _t;
	const iconStyles = twApply(_t || (_t = _`opacity-0 ml-4 text-base text-muted`));
	const linkHeadingStyle = twStyle({
	  base: twCss({
	    '&:hover': {
	      '& .sl-link-heading__icon': {
	        '@apply': CX('opacity-100')
	      }
	    },
	    [`& ${linkStyle.selector}`]: {
	      '@apply': CX.$combine(CX('text-heading', 'items-center', 'inline-flex'), CX.hover('hover:text-heading'))
	    }
	  })
	});

	const _excluded$k = ["id", "children", "className"];
	const LinkHeading = /*#__PURE__*/_react.memo(function LinkHeading(_ref) {
	  let {
	    id,
	    children,
	    className
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$k);

	  // Just in case browser doesn't scroll correctly - handle it
	  _react__namespace.useEffect(() => {
	    if (document.location.hash === `#${id}`) {
	      const timer = setTimeout(() => {
	        document.querySelector(`#${id}`).scrollIntoView({
	          behavior: 'smooth',
	          block: 'start'
	        });
	      }, 300);
	      return () => clearTimeout(timer);
	    } // eslint-disable-next-line react-hooks/exhaustive-deps

	  }, []);
	  return jsxRuntime.jsx(Box, Object.assign({
	    as: Heading,
	    styled: ['sl-link-heading', className, linkHeadingStyle()],
	    id: id
	  }, props, {
	    children: jsxRuntime.jsx(FocusRing, {
	      focusRingClass: "sl-focus-ring",
	      focusClass: "sl-focus-ring",
	      children: jsxRuntime.jsxs(Link, {
	        href: `#${id}`,
	        children: [jsxRuntime.jsx(Box, {
	          children: children
	        }, void 0), jsxRuntime.jsx(Box, {
	          styled: iconStyles,
	          className: "sl-link-heading__icon",
	          children: jsxRuntime.jsx(Icon, {
	            icon: "link"
	          }, void 0)
	        }, void 0)]
	      }, void 0)
	    }, void 0)
	  }), void 0);
	});

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	const $c10674539d06c96e1a2fbb6a54340$var$cache$1 = new WeakMap();
	function getItemCount$1(collection) {
	  let count = $c10674539d06c96e1a2fbb6a54340$var$cache$1.get(collection);

	  if (count != null) {
	    return count;
	  }

	  count = 0;

	  for (let item of collection) {
	    if (item.type === 'section') {
	      count += getItemCount$1(item.childNodes);
	    } else {
	      count++;
	    }
	  }

	  $c10674539d06c96e1a2fbb6a54340$var$cache$1.set(collection, count);
	  return count;
	}

	/**
	 * Handles typeahead interactions with collections.
	 */
	function useTypeSelect(options) {
	  let {
	    keyboardDelegate,
	    selectionManager,
	    onTypeSelect
	  } = options;
	  let state = _react.useRef({
	    search: '',
	    timeout: null
	  }).current;

	  let onKeyDown = e => {
	    let character = $c78d7fa5f7d5832f9b4f97b33a679865$var$getStringForKey(e.key);

	    if (!character || e.ctrlKey || e.metaKey) {
	      return;
	    } // Do not propagate the Spacebar event if it's meant to be part of the search.
	    // When we time out, the search term becomes empty, hence the check on length.
	    // Trimming is to account for the case of pressing the Spacebar more than once,
	    // which should cycle through the selection/deselection of the focused item.


	    if (character === ' ' && state.search.trim().length > 0) {
	      e.preventDefault();

	      if (!('continuePropagation' in e)) {
	        e.stopPropagation();
	      }
	    }

	    state.search += character; // Use the delegate to find a key to focus.
	    // Prioritize items after the currently focused item, falling back to searching the whole list.

	    let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey); // If no key found, search from the top.

	    if (key == null) {
	      key = keyboardDelegate.getKeyForSearch(state.search);
	    }

	    if (key != null) {
	      selectionManager.setFocusedKey(key);

	      if (onTypeSelect) {
	        onTypeSelect(key);
	      }
	    }

	    clearTimeout(state.timeout);
	    state.timeout = setTimeout(() => {
	      state.search = '';
	    }, 500);
	  };

	  return {
	    typeSelectProps: {
	      // Using a capturing listener to catch the keydown event before
	      // other hooks in order to handle the Spacebar event.
	      onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : null
	    }
	  };
	}

	function $c78d7fa5f7d5832f9b4f97b33a679865$var$getStringForKey(key) {
	  // If the key is of length 1, it is an ASCII value.
	  // Otherwise, if there are no ASCII characters in the key name,
	  // it is a Unicode character.
	  // See https://www.w3.org/TR/uievents-key/
	  if (key.length === 1 || !/^[A-Z]/i.test(key)) {
	    return key;
	  }

	  return '';
	}

	function $a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e) {
	  if (isMac()) {
	    return e.metaKey;
	  }

	  return e.ctrlKey;
	}

	/**
	 * Handles interactions with selectable collections.
	 */
	function useSelectableCollection(options) {
	  let {
	    selectionManager: manager,
	    keyboardDelegate: delegate,
	    ref,
	    autoFocus = false,
	    shouldFocusWrap = false,
	    disallowEmptySelection = false,
	    disallowSelectAll = false,
	    selectOnFocus = false,
	    disallowTypeAhead = false,
	    shouldUseVirtualFocus,
	    allowsTabNavigation = false
	  } = options;
	  let {
	    direction
	  } = useLocale();

	  let onKeyDown = e => {
	    // Let child element (e.g. menu button) handle the event if the Alt key is pressed.
	    // Keyboard events bubble through portals. Don't handle keyboard events
	    // for elements outside the collection (e.g. menus).
	    if (e.altKey || !ref.current.contains(e.target)) {
	      return;
	    }

	    const navigateToKey = (key, childFocus) => {
	      if (key != null) {
	        manager.setFocusedKey(key, childFocus);

	        if (e.shiftKey && manager.selectionMode === 'multiple') {
	          manager.extendSelection(key);
	        } else if (selectOnFocus) {
	          manager.replaceSelection(key);
	        }
	      }
	    };

	    switch (e.key) {
	      case 'ArrowDown':
	        {
	          if (delegate.getKeyBelow) {
	            e.preventDefault();
	            let nextKey = manager.focusedKey != null ? delegate.getKeyBelow(manager.focusedKey) : delegate.getFirstKey == null ? void 0 : delegate.getFirstKey();

	            if (nextKey == null && shouldFocusWrap) {
	              nextKey = delegate.getFirstKey == null ? void 0 : delegate.getFirstKey(manager.focusedKey);
	            }

	            navigateToKey(nextKey);
	          }

	          break;
	        }

	      case 'ArrowUp':
	        {
	          if (delegate.getKeyAbove) {
	            e.preventDefault();
	            let nextKey = manager.focusedKey != null ? delegate.getKeyAbove(manager.focusedKey) : delegate.getLastKey == null ? void 0 : delegate.getLastKey();

	            if (nextKey == null && shouldFocusWrap) {
	              nextKey = delegate.getLastKey == null ? void 0 : delegate.getLastKey(manager.focusedKey);
	            }

	            navigateToKey(nextKey);
	          }

	          break;
	        }

	      case 'ArrowLeft':
	        {
	          if (delegate.getKeyLeftOf) {
	            e.preventDefault();
	            let nextKey = delegate.getKeyLeftOf(manager.focusedKey);
	            navigateToKey(nextKey, direction === 'rtl' ? 'first' : 'last');
	          }

	          break;
	        }

	      case 'ArrowRight':
	        {
	          if (delegate.getKeyRightOf) {
	            e.preventDefault();
	            let nextKey = delegate.getKeyRightOf(manager.focusedKey);
	            navigateToKey(nextKey, direction === 'rtl' ? 'last' : 'first');
	          }

	          break;
	        }

	      case 'Home':
	        if (delegate.getFirstKey) {
	          e.preventDefault();
	          let firstKey = delegate.getFirstKey(manager.focusedKey, $a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e));
	          manager.setFocusedKey(firstKey);

	          if ($a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode === 'multiple') {
	            manager.extendSelection(firstKey);
	          } else if (selectOnFocus) {
	            manager.replaceSelection(firstKey);
	          }
	        }

	        break;

	      case 'End':
	        if (delegate.getLastKey) {
	          e.preventDefault();
	          let lastKey = delegate.getLastKey(manager.focusedKey, $a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e));
	          manager.setFocusedKey(lastKey);

	          if ($a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode === 'multiple') {
	            manager.extendSelection(lastKey);
	          } else if (selectOnFocus) {
	            manager.replaceSelection(lastKey);
	          }
	        }

	        break;

	      case 'PageDown':
	        if (delegate.getKeyPageBelow) {
	          e.preventDefault();
	          let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
	          navigateToKey(nextKey);
	        }

	        break;

	      case 'PageUp':
	        if (delegate.getKeyPageAbove) {
	          e.preventDefault();
	          let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
	          navigateToKey(nextKey);
	        }

	        break;

	      case 'a':
	        if ($a9b9aa71af07c56ab1d89ca45381f4b$var$isCtrlKeyPressed(e) && manager.selectionMode === 'multiple' && disallowSelectAll !== true) {
	          e.preventDefault();
	          manager.selectAll();
	        }

	        break;

	      case 'Escape':
	        e.preventDefault();

	        if (!disallowEmptySelection) {
	          manager.clearSelection();
	        }

	        break;

	      case 'Tab':
	        {
	          if (!allowsTabNavigation) {
	            // There may be elements that are "tabbable" inside a collection (e.g. in a grid cell).
	            // However, collections should be treated as a single tab stop, with arrow key navigation internally.
	            // We don't control the rendering of these, so we can't override the tabIndex to prevent tabbing.
	            // Instead, we handle the Tab key, and move focus manually to the first/last tabbable element
	            // in the collection, so that the browser default behavior will apply starting from that element
	            // rather than the currently focused one.
	            if (e.shiftKey) {
	              ref.current.focus();
	            } else {
	              let walker = getFocusableTreeWalker(ref.current, {
	                tabbable: true
	              });
	              let next;
	              let last;

	              do {
	                last = walker.lastChild();

	                if (last) {
	                  next = last;
	                }
	              } while (last);

	              if (next && !next.contains(document.activeElement)) {
	                focusWithoutScrolling(next);
	              }
	            }

	            break;
	          }
	        }
	    }
	  };

	  let onFocus = e => {
	    if (manager.isFocused) {
	      // If a focus event bubbled through a portal, reset focus state.
	      if (!e.currentTarget.contains(e.target)) {
	        manager.setFocused(false);
	      }

	      return;
	    } // Focus events can bubble through portals. Ignore these events.


	    if (!e.currentTarget.contains(e.target)) {
	      return;
	    }

	    manager.setFocused(true);

	    if (manager.focusedKey == null) {
	      // If the user hasn't yet interacted with the collection, there will be no focusedKey set.
	      // Attempt to detect whether the user is tabbing forward or backward into the collection
	      // and either focus the first or last item accordingly.
	      let relatedTarget = e.relatedTarget;

	      if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) {
	        var _manager$lastSelected;

	        manager.setFocusedKey((_manager$lastSelected = manager.lastSelectedKey) != null ? _manager$lastSelected : delegate.getLastKey());
	      } else {
	        var _manager$firstSelecte;

	        manager.setFocusedKey((_manager$firstSelecte = manager.firstSelectedKey) != null ? _manager$firstSelecte : delegate.getFirstKey());
	      }
	    }
	  };

	  let onBlur = e => {
	    // Don't set blurred and then focused again if moving focus within the collection.
	    if (!e.currentTarget.contains(e.relatedTarget)) {
	      manager.setFocused(false);
	    }
	  };

	  _react.useEffect(() => {
	    if (autoFocus) {
	      let focusedKey = null; // Check focus strategy to determine which item to focus

	      if (autoFocus === 'first') {
	        focusedKey = delegate.getFirstKey();
	      }

	      if (autoFocus === 'last') {
	        focusedKey = delegate.getLastKey();
	      } // If there are any selected keys, make the first one the new focus target


	      let selectedKeys = manager.selectedKeys;

	      if (selectedKeys.size) {
	        focusedKey = selectedKeys.values().next().value;
	      }

	      manager.setFocused(true);
	      manager.setFocusedKey(focusedKey); // If no default focus key is selected, focus the collection itself.

	      if (focusedKey == null && !shouldUseVirtualFocus) {
	        focusSafely(ref.current);
	      }
	    } // eslint-disable-next-line react-hooks/exhaustive-deps

	  }, []);
	  let handlers = {
	    onKeyDown,
	    onFocus,
	    onBlur,

	    onMouseDown(e) {
	      // Ignore events that bubbled through portals.
	      if (e.currentTarget.contains(e.target)) {
	        // Prevent focus going to the collection when clicking on the scrollbar.
	        e.preventDefault();
	      }
	    }

	  };
	  let {
	    typeSelectProps
	  } = useTypeSelect({
	    keyboardDelegate: delegate,
	    selectionManager: manager
	  });

	  if (!disallowTypeAhead) {
	    handlers = mergeProps(typeSelectProps, handlers);
	  } // If nothing is focused within the collection, make the collection itself tabbable.
	  // This will be marshalled to either the first or last item depending on where focus came from.
	  // If using virtual focus, don't set a tabIndex at all so that VoiceOver on iOS 14 doesn't try
	  // to move real DOM focus to the element anyway.


	  let tabIndex;

	  if (!shouldUseVirtualFocus) {
	    tabIndex = manager.focusedKey == null ? 0 : -1;
	  }

	  return {
	    collectionProps: _extends({}, handlers, {
	      tabIndex
	    })
	  };
	}

	/**
	 * Handles interactions with an item in a selectable collection.
	 */
	function useSelectableItem(options) {
	  let {
	    selectionManager: manager,
	    key,
	    ref,
	    shouldSelectOnPressUp,
	    isVirtualized,
	    shouldUseVirtualFocus,
	    focus
	  } = options;

	  let onSelect = e => manager.select(key, e); // Focus the associated DOM node when this item becomes the focusedKey


	  let isFocused = key === manager.focusedKey;
	  _react.useEffect(() => {
	    if (isFocused && manager.isFocused && !shouldUseVirtualFocus && document.activeElement !== ref.current) {
	      if (focus) {
	        focus();
	      } else {
	        focusSafely(ref.current);
	      }
	    }
	  }, [ref, isFocused, manager.focusedKey, manager.childFocusStrategy, manager.isFocused, shouldUseVirtualFocus]); // Set tabIndex to 0 if the element is focused, or -1 otherwise so that only the last focused
	  // item is tabbable.  If using virtual focus, don't set a tabIndex at all so that VoiceOver
	  // on iOS 14 doesn't try to move real DOM focus to the item anyway.

	  let itemProps = {};

	  if (!shouldUseVirtualFocus) {
	    itemProps = {
	      tabIndex: isFocused ? 0 : -1,

	      onFocus(e) {
	        if (e.target === ref.current) {
	          manager.setFocusedKey(key);
	        }
	      }

	    };
	  } // By default, selection occurs on pointer down. This can be strange if selecting an
	  // item causes the UI to disappear immediately (e.g. menus).
	  // If shouldSelectOnPressUp is true, we use onPressUp instead of onPressStart.
	  // onPress requires a pointer down event on the same element as pointer up. For menus,
	  // we want to be able to have the pointer down on the trigger that opens the menu and
	  // the pointer up on the menu item rather than requiring a separate press.
	  // For keyboard events, selection still occurs on key down.


	  if (shouldSelectOnPressUp) {
	    itemProps.onPressStart = e => {
	      if (e.pointerType === 'keyboard') {
	        onSelect(e);
	      }
	    };

	    itemProps.onPressUp = e => {
	      if (e.pointerType !== 'keyboard') {
	        onSelect(e);
	      }
	    };
	  } else {
	    // On touch, it feels strange to select on touch down, so we special case this.
	    itemProps.onPressStart = e => {
	      if (e.pointerType !== 'touch') {
	        onSelect(e);
	      }
	    };

	    itemProps.onPress = e => {
	      if (e.pointerType === 'touch') {
	        onSelect(e);
	      }
	    };
	  }

	  if (!isVirtualized) {
	    itemProps['data-key'] = key;
	  }

	  return {
	    itemProps
	  };
	}

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	class ListKeyboardDelegate {
	  constructor(collection, disabledKeys, ref, collator) {
	    this.collection = void 0;
	    this.disabledKeys = void 0;
	    this.ref = void 0;
	    this.collator = void 0;
	    this.collection = collection;
	    this.disabledKeys = disabledKeys;
	    this.ref = ref;
	    this.collator = collator;
	  }

	  getKeyBelow(key) {
	    key = this.collection.getKeyAfter(key);

	    while (key != null) {
	      let item = this.collection.getItem(key);

	      if (item.type === 'item' && !this.disabledKeys.has(key)) {
	        return key;
	      }

	      key = this.collection.getKeyAfter(key);
	    }
	  }

	  getKeyAbove(key) {
	    key = this.collection.getKeyBefore(key);

	    while (key != null) {
	      let item = this.collection.getItem(key);

	      if (item.type === 'item' && !this.disabledKeys.has(key)) {
	        return key;
	      }

	      key = this.collection.getKeyBefore(key);
	    }
	  }

	  getFirstKey() {
	    let key = this.collection.getFirstKey();

	    while (key != null) {
	      let item = this.collection.getItem(key);

	      if (item.type === 'item' && !this.disabledKeys.has(key)) {
	        return key;
	      }

	      key = this.collection.getKeyAfter(key);
	    }
	  }

	  getLastKey() {
	    let key = this.collection.getLastKey();

	    while (key != null) {
	      let item = this.collection.getItem(key);

	      if (item.type === 'item' && !this.disabledKeys.has(key)) {
	        return key;
	      }

	      key = this.collection.getKeyBefore(key);
	    }
	  }

	  getItem(key) {
	    return this.ref.current.querySelector("[data-key=\"" + key + "\"]");
	  }

	  getKeyPageAbove(key) {
	    let menu = this.ref.current;
	    let item = this.getItem(key);

	    if (!item) {
	      return null;
	    }

	    let pageY = Math.max(0, item.offsetTop + item.offsetHeight - menu.offsetHeight);

	    while (item && item.offsetTop > pageY) {
	      key = this.getKeyAbove(key);
	      item = this.getItem(key);
	    }

	    return key;
	  }

	  getKeyPageBelow(key) {
	    let menu = this.ref.current;
	    let item = this.getItem(key);

	    if (!item) {
	      return null;
	    }

	    let pageY = Math.min(menu.scrollHeight, item.offsetTop - item.offsetHeight + menu.offsetHeight);

	    while (item && item.offsetTop < pageY) {
	      key = this.getKeyBelow(key);
	      item = this.getItem(key);
	    }

	    return key;
	  }

	  getKeyForSearch(search, fromKey) {
	    if (!this.collator) {
	      return null;
	    }

	    let collection = this.collection;
	    let key = fromKey || this.getFirstKey();

	    while (key != null) {
	      let item = collection.getItem(key);
	      let substring = item.textValue.slice(0, search.length);

	      if (item.textValue && this.collator.compare(substring, search) === 0) {
	        return key;
	      }

	      key = this.getKeyBelow(key);
	    }

	    return null;
	  }

	}

	/**
	 * Handles interactions with a selectable list.
	 */
	function useSelectableList(props) {
	  let {
	    selectionManager,
	    collection,
	    disabledKeys,
	    ref,
	    keyboardDelegate,
	    autoFocus,
	    shouldFocusWrap,
	    isVirtualized,
	    disallowEmptySelection,
	    selectOnFocus = false,
	    disallowTypeAhead,
	    shouldUseVirtualFocus,
	    allowsTabNavigation
	  } = props; // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
	  // When virtualized, the layout object will be passed in as a prop and override this.

	  let collator = useCollator({
	    usage: 'search',
	    sensitivity: 'base'
	  });
	  let delegate = _react.useMemo(() => keyboardDelegate || new ListKeyboardDelegate(collection, disabledKeys, ref, collator), [keyboardDelegate, collection, disabledKeys, ref, collator]); // If not virtualized, scroll the focused element into view when the focusedKey changes.
	  // When virtualized, Virtualizer handles this internally.

	  _react.useEffect(() => {
	    if (!isVirtualized && selectionManager.focusedKey && ref != null && ref.current) {
	      let element = ref.current.querySelector("[data-key=\"" + selectionManager.focusedKey + "\"]");

	      if (element) {
	        $a09ba753e08b703267f2392f7fc8e96$var$scrollIntoView(ref.current, element);
	      }
	    }
	  }, [isVirtualized, ref, selectionManager.focusedKey]);
	  let {
	    collectionProps
	  } = useSelectableCollection({
	    ref,
	    selectionManager,
	    keyboardDelegate: delegate,
	    autoFocus,
	    shouldFocusWrap,
	    disallowEmptySelection,
	    selectOnFocus,
	    disallowTypeAhead,
	    shouldUseVirtualFocus,
	    allowsTabNavigation
	  });
	  return {
	    listProps: collectionProps
	  };
	}
	/**
	 * Scrolls `scrollView` so that `element` is visible.
	 * Similar to `element.scrollIntoView({block: 'nearest'})` (not supported in Edge),
	 * but doesn't affect parents above `scrollView`.
	 */

	function $a09ba753e08b703267f2392f7fc8e96$var$scrollIntoView(scrollView, element) {
	  let offsetX = $a09ba753e08b703267f2392f7fc8e96$var$relativeOffset(scrollView, element, 'left');
	  let offsetY = $a09ba753e08b703267f2392f7fc8e96$var$relativeOffset(scrollView, element, 'top');
	  let width = element.offsetWidth;
	  let height = element.offsetHeight;
	  let x = scrollView.scrollLeft;
	  let y = scrollView.scrollTop;
	  let maxX = x + scrollView.offsetWidth;
	  let maxY = y + scrollView.offsetHeight;

	  if (offsetX <= x) {
	    x = offsetX;
	  } else if (offsetX + width > maxX) {
	    x += offsetX + width - maxX;
	  }

	  if (offsetY <= y) {
	    y = offsetY;
	  } else if (offsetY + height > maxY) {
	    y += offsetY + height - maxY;
	  }

	  scrollView.scrollLeft = x;
	  scrollView.scrollTop = y;
	}
	/**
	 * Computes the offset left or top from child to ancestor by accumulating
	 * offsetLeft or offsetTop through intervening offsetParents.
	 */


	function $a09ba753e08b703267f2392f7fc8e96$var$relativeOffset(ancestor, child, axis) {
	  const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
	  let sum = 0;

	  while (child.offsetParent) {
	    sum += child[prop];

	    if (child.offsetParent === ancestor) {
	      // Stop once we have found the ancestor we are interested in.
	      break;
	    } else if (child.offsetParent.contains(ancestor)) {
	      // If the ancestor is not `position:relative`, then we stop at 
	      // _its_ offset parent, and we subtract off _its_ offset, so that
	      // we end up with the proper offset from child to ancestor.
	      sum -= ancestor[prop];
	      break;
	    }

	    child = child.offsetParent;
	  }

	  return sum;
	}

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 * 
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	const listIds = new WeakMap();

	function $d7356e622fdc32e5aea4e1e7cc2e6e6b$var$normalizeKey(key) {
	  if (typeof key === 'string') {
	    return key.replace(/\s*/g, '');
	  }

	  return '' + key;
	}

	function getItemId(state, itemKey) {
	  let listId = listIds.get(state);

	  if (!listId) {
	    throw new Error('Unknown list');
	  }

	  return listId + "-option-" + $d7356e622fdc32e5aea4e1e7cc2e6e6b$var$normalizeKey(itemKey);
	}

	/**
	 * Provides the behavior and accessibility implementation for a listbox component.
	 * A listbox displays a list of options and allows a user to select one or more of them.
	 * @param props - Props for the listbox.
	 * @param state - State for the listbox, as returned by `useListState`.
	 */
	function useListBox(props, state, ref) {
	  let domProps = filterDOMProps(props, {
	    labelable: true
	  });
	  let {
	    listProps
	  } = useSelectableList(_extends({}, props, {
	    ref,
	    selectionManager: state.selectionManager,
	    collection: state.collection,
	    disabledKeys: state.disabledKeys
	  }));
	  let id = useId(props.id);
	  listIds.set(state, id);
	  let {
	    labelProps,
	    fieldProps
	  } = useLabel(_extends({}, props, {
	    id,
	    // listbox is not an HTML input element so it
	    // shouldn't be labeled by a <label> element.
	    labelElementType: 'span'
	  }));
	  return {
	    labelProps,
	    listBoxProps: mergeProps(domProps, state.selectionManager.selectionMode === 'multiple' ? {
	      'aria-multiselectable': 'true'
	    } : {}, _extends({
	      role: 'listbox'
	    }, mergeProps(fieldProps, listProps)))
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for an option in a listbox.
	 * See `useListBox` for more details about listboxes.
	 * @param props - Props for the option.
	 * @param state - State for the listbox, as returned by `useListState`.
	 */
	function useOption(props, state, ref) {
	  let {
	    isSelected,
	    isDisabled,
	    key,
	    shouldSelectOnPressUp,
	    shouldFocusOnHover,
	    isVirtualized,
	    shouldUseVirtualFocus
	  } = props;
	  let labelId = useSlotId();
	  let descriptionId = useSlotId();
	  let optionProps = {
	    role: 'option',
	    'aria-disabled': isDisabled,
	    'aria-selected': isSelected
	  }; // Safari with VoiceOver on macOS misreads options with aria-labelledby or aria-label as simply "text".
	  // We should not map slots to the label and description on Safari and instead just have VoiceOver read the textContent.
	  // https://bugs.webkit.org/show_bug.cgi?id=209279

	  if (!(isMac() && isWebKit())) {
	    optionProps['aria-label'] = props['aria-label'];
	    optionProps['aria-labelledby'] = labelId;
	    optionProps['aria-describedby'] = descriptionId;
	  }

	  if (isVirtualized) {
	    optionProps['aria-posinset'] = state.collection.getItem(key).index + 1;
	    optionProps['aria-setsize'] = getItemCount$1(state.collection);
	  }

	  let {
	    itemProps
	  } = useSelectableItem({
	    selectionManager: state.selectionManager,
	    key,
	    ref,
	    shouldSelectOnPressUp,
	    isVirtualized,
	    shouldUseVirtualFocus
	  });
	  let {
	    pressProps
	  } = usePress(_extends({}, itemProps, {
	    isDisabled,
	    preventFocusOnPress: shouldUseVirtualFocus
	  }));
	  let {
	    hoverProps
	  } = useHover({
	    isDisabled: isDisabled || !shouldFocusOnHover,

	    onHoverStart() {
	      if (!isFocusVisible()) {
	        state.selectionManager.setFocused(true);
	        state.selectionManager.setFocusedKey(key);
	      }
	    }

	  });
	  return {
	    optionProps: _extends({}, optionProps, mergeProps(pressProps, hoverProps), {
	      id: getItemId(state, key)
	    }),
	    labelProps: {
	      id: labelId
	    },
	    descriptionProps: {
	      id: descriptionId
	    }
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for a section in a listbox.
	 * See `useListBox` for more details about listboxes.
	 * @param props - Props for the section.
	 */
	function useListBoxSection(props) {
	  let {
	    heading,
	    'aria-label': ariaLabel
	  } = props;
	  let headingId = useId();
	  return {
	    itemProps: {
	      role: 'presentation'
	    },
	    headingProps: heading ? {
	      // Techincally, listbox cannot contain headings according to ARIA.
	      // We hide the heading from assistive technology, and only use it
	      // as a label for the nested group.
	      id: headingId,
	      'aria-hidden': true
	    } : {},
	    groupProps: {
	      role: 'group',
	      'aria-label': ariaLabel,
	      'aria-labelledby': heading ? headingId : undefined
	    }
	  };
	}

	class $f8429209754fda4b9142d514065f4$export$CollectionBuilder$1 {
	  constructor() {
	    this.context = void 0;
	    this.cache = new WeakMap();
	  }

	  build(props, context) {
	    this.context = context;
	    return $f8429209754fda4b9142d514065f4$var$iterable$1(() => this.iterateCollection(props));
	  }

	  *iterateCollection(props) {
	    let {
	      children,
	      items
	    } = props;

	    if (typeof children === 'function') {
	      if (!items) {
	        throw new Error('props.children was a function but props.items is missing');
	      }

	      for (let item of props.items) {
	        yield* this.getFullNode({
	          value: item
	        }, {
	          renderer: children
	        });
	      }
	    } else {
	      let items = [];

	      _react__default["default"].Children.forEach(children, child => {
	        items.push(child);
	      });

	      let index = 0;

	      for (let item of items) {
	        let nodes = this.getFullNode({
	          element: item,
	          index: index
	        }, {});

	        for (let node of nodes) {
	          index++;
	          yield node;
	        }
	      }
	    }
	  }

	  getKey(item, partialNode, state, parentKey) {
	    if (item.key != null) {
	      return item.key;
	    }

	    if (partialNode.type === 'cell' && partialNode.key != null) {
	      return "" + parentKey + partialNode.key;
	    }

	    let v = partialNode.value;

	    if (v != null) {
	      var _v$key;

	      let key = (_v$key = v.key) != null ? _v$key : v.id;

	      if (key == null) {
	        throw new Error('No key found for item');
	      }

	      return key;
	    }

	    return parentKey ? parentKey + "." + partialNode.index : "$." + partialNode.index;
	  }

	  getChildState(state, partialNode) {
	    return {
	      renderer: partialNode.renderer || state.renderer
	    };
	  }

	  *getFullNode(partialNode, state, parentKey, parentNode) {
	    // If there's a value instead of an element on the node, and a parent renderer function is available,
	    // use it to render an element for the value.
	    let element = partialNode.element;

	    if (!element && partialNode.value && state && state.renderer) {
	      let cached = this.cache.get(partialNode.value);

	      if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
	        cached.index = partialNode.index;
	        cached.parentKey = parentNode ? parentNode.key : null;
	        yield cached;
	        return;
	      }

	      element = state.renderer(partialNode.value);
	    } // If there's an element with a getCollectionNode function on its type, then it's a supported component.
	    // Call this function to get a partial node, and recursively build a full node from there.


	    if ( /*#__PURE__*/_react__default["default"].isValidElement(element)) {
	      let type = element.type;

	      if (typeof type !== 'function' && typeof type.getCollectionNode !== 'function') {
	        let name = typeof element.type === 'function' ? element.type.name : element.type;
	        throw new Error("Unknown element <" + name + "> in collection.");
	      }

	      let childNodes = type.getCollectionNode(element.props, this.context);
	      let index = partialNode.index;
	      let result = childNodes.next();

	      while (!result.done && result.value) {
	        let childNode = result.value;
	        partialNode.index = index;
	        let nodeKey = childNode.key;

	        if (!nodeKey) {
	          nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
	        }

	        let nodes = this.getFullNode(_extends({}, childNode, {
	          key: nodeKey,
	          index,
	          wrapper: $f8429209754fda4b9142d514065f4$var$compose$1(partialNode.wrapper, childNode.wrapper)
	        }), this.getChildState(state, childNode), parentKey ? "" + parentKey + element.key : element.key, parentNode);
	        let children = [...nodes];

	        for (let node of children) {
	          // Cache the node based on its value
	          node.value = childNode.value || partialNode.value;

	          if (node.value) {
	            this.cache.set(node.value, node);
	          } // The partial node may have specified a type for the child in order to specify a constraint.
	          // Verify that the full node that was built recursively matches this type.


	          if (partialNode.type && node.type !== partialNode.type) {
	            throw new Error("Unsupported type <" + $f8429209754fda4b9142d514065f4$var$capitalize$1(node.type) + "> in <" + $f8429209754fda4b9142d514065f4$var$capitalize$1(parentNode.type) + ">. Only <" + $f8429209754fda4b9142d514065f4$var$capitalize$1(partialNode.type) + "> is supported.");
	          }

	          index++;
	          yield node;
	        }

	        result = childNodes.next(children);
	      }

	      return;
	    } // Ignore invalid elements


	    if (partialNode.key == null) {
	      return;
	    } // Create full node


	    let builder = this;
	    let node = {
	      type: partialNode.type,
	      props: partialNode.props,
	      key: partialNode.key,
	      parentKey: parentNode ? parentNode.key : null,
	      value: partialNode.value,
	      level: parentNode ? parentNode.level + 1 : 0,
	      index: partialNode.index,
	      rendered: partialNode.rendered,
	      textValue: partialNode.textValue,
	      'aria-label': partialNode['aria-label'],
	      wrapper: partialNode.wrapper,
	      shouldInvalidate: partialNode.shouldInvalidate,
	      hasChildNodes: partialNode.hasChildNodes,
	      childNodes: $f8429209754fda4b9142d514065f4$var$iterable$1(function* () {
	        if (!partialNode.hasChildNodes) {
	          return;
	        }

	        let index = 0;

	        for (let child of partialNode.childNodes()) {
	          // Ensure child keys are globally unique by prepending the parent node's key
	          if (child.key != null) {
	            child.key = "" + node.key + child.key;
	          }

	          child.index = index;
	          let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);

	          for (let node of nodes) {
	            index++;
	            yield node;
	          }
	        }
	      })
	    };
	    yield node;
	  }

	} // Wraps an iterator function as an iterable object, and caches the results.


	function $f8429209754fda4b9142d514065f4$var$iterable$1(iterator) {
	  let cache = [];
	  let iterable = null;
	  return {
	    *[Symbol.iterator]() {
	      for (let item of cache) {
	        yield item;
	      }

	      if (!iterable) {
	        iterable = iterator();
	      }

	      for (let item of iterable) {
	        cache.push(item);
	        yield item;
	      }
	    }

	  };
	}

	function $f8429209754fda4b9142d514065f4$var$compose$1(outer, inner) {
	  if (outer && inner) {
	    return element => outer(inner(element));
	  }

	  if (outer) {
	    return outer;
	  }

	  if (inner) {
	    return inner;
	  }
	}

	function $f8429209754fda4b9142d514065f4$var$capitalize$1(str) {
	  return str[0].toUpperCase() + str.slice(1);
	}

	function useCollection$1(props, factory, context, invalidators) {
	  if (invalidators === void 0) {
	    invalidators = [];
	  }

	  let builder = _react.useMemo(() => new $f8429209754fda4b9142d514065f4$export$CollectionBuilder$1(), []);
	  let prev = _react.useRef(null);
	  return _react.useMemo(() => {
	    let nodes = builder.build(props, context);
	    prev.current = factory(nodes, prev.current);
	    return prev.current; // Don't invalidate when any prop changes, just the two we care about.
	    // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [builder, props.children, props.items, context, ...invalidators]);
	}

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */

	/**
	 * A Selection is a special Set containing Keys, which also has an anchor
	 * and current selected key for use when range selecting.
	 */
	class $c91e86e24f2dc9a2182dcc2674c58c$export$Selection extends Set {
	  constructor(keys, anchorKey, currentKey) {
	    super(keys);
	    this.anchorKey = void 0;
	    this.currentKey = void 0;

	    if (keys instanceof $c91e86e24f2dc9a2182dcc2674c58c$export$Selection) {
	      this.anchorKey = anchorKey || keys.anchorKey;
	      this.currentKey = currentKey || keys.currentKey;
	    } else {
	      this.anchorKey = anchorKey;
	      this.currentKey = currentKey;
	    }
	  }

	}

	/**
	 * Manages state for multiple selection and focus in a collection.
	 */
	function useMultipleSelectionState$1(props) {
	  let {
	    selectionMode = 'none',
	    disallowEmptySelection
	  } = props; // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
	  // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).

	  let isFocusedRef = _react.useRef(false);
	  let [, setFocused] = _react.useState(false);
	  let focusedKeyRef = _react.useRef(null);
	  let childFocusStrategyRef = _react.useRef(null);
	  let [, setFocusedKey] = _react.useState(null);
	  let selectedKeysProp = _react.useMemo(() => $c86d35e876e048ac11515eee40c7$var$convertSelection(props.selectedKeys), [props.selectedKeys]);
	  let defaultSelectedKeys = _react.useMemo(() => $c86d35e876e048ac11515eee40c7$var$convertSelection(props.defaultSelectedKeys, new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection()), [props.defaultSelectedKeys]);
	  let [selectedKeys, setSelectedKeys] = useControlledState(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
	  let disabledKeysProp = _react.useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [props.disabledKeys]);
	  return {
	    selectionMode,
	    disallowEmptySelection,

	    get isFocused() {
	      return isFocusedRef.current;
	    },

	    setFocused(f) {
	      isFocusedRef.current = f;
	      setFocused(f);
	    },

	    get focusedKey() {
	      return focusedKeyRef.current;
	    },

	    get childFocusStrategy() {
	      return childFocusStrategyRef.current;
	    },

	    setFocusedKey(k, childFocusStrategy) {
	      if (childFocusStrategy === void 0) {
	        childFocusStrategy = 'first';
	      }

	      focusedKeyRef.current = k;
	      childFocusStrategyRef.current = childFocusStrategy;
	      setFocusedKey(k);
	    },

	    selectedKeys,
	    setSelectedKeys,
	    disabledKeys: disabledKeysProp
	  };
	}

	function $c86d35e876e048ac11515eee40c7$var$convertSelection(selection, defaultValue) {
	  if (!selection) {
	    return defaultValue;
	  }

	  return selection === 'all' ? 'all' : new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection(selection);
	}

	/**
	 * An interface for reading and updating multiple selection state.
	 */
	class SelectionManager {
	  constructor(collection, state, options) {
	    var _options$allowsCellSe;

	    this.collection = void 0;
	    this.state = void 0;
	    this.allowsCellSelection = void 0;
	    this._isSelectAll = void 0;
	    this.collection = collection;
	    this.state = state;
	    this.allowsCellSelection = (_options$allowsCellSe = options == null ? void 0 : options.allowsCellSelection) != null ? _options$allowsCellSe : false;
	    this._isSelectAll = null;
	  }
	  /**
	   * The type of selection that is allowed in the collection.
	   */


	  get selectionMode() {
	    return this.state.selectionMode;
	  }
	  /**
	   * Whether the collection allows empty selection.
	   */


	  get disallowEmptySelection() {
	    return this.state.disallowEmptySelection;
	  }
	  /**
	   * Whether the collection is currently focused.
	   */


	  get isFocused() {
	    return this.state.isFocused;
	  }
	  /**
	   * Sets whether the collection is focused.
	   */


	  setFocused(isFocused) {
	    this.state.setFocused(isFocused);
	  }
	  /**
	   * The current focused key in the collection.
	   */


	  get focusedKey() {
	    return this.state.focusedKey;
	  }
	  /** Whether the first or last child of the focused key should receive focus. */


	  get childFocusStrategy() {
	    return this.state.childFocusStrategy;
	  }
	  /**
	   * Sets the focused key.
	   */


	  setFocusedKey(key, childFocusStrategy) {
	    this.state.setFocusedKey(key, childFocusStrategy);
	  }
	  /**
	   * The currently selected keys in the collection.
	   */


	  get selectedKeys() {
	    return this.state.selectedKeys === 'all' ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
	  }
	  /**
	   * The raw selection value for the collection.
	   * Either 'all' for select all, or a set of keys.
	   */


	  get rawSelection() {
	    return this.state.selectedKeys;
	  }
	  /**
	   * Returns whether a key is selected.
	   */


	  isSelected(key) {
	    if (this.state.selectionMode === 'none') {
	      return false;
	    }

	    key = this.getKey(key);
	    return this.state.selectedKeys === 'all' ? !this.state.disabledKeys.has(key) : this.state.selectedKeys.has(key);
	  }
	  /**
	   * Whether the selection is empty.
	   */


	  get isEmpty() {
	    return this.state.selectedKeys !== 'all' && this.state.selectedKeys.size === 0;
	  }
	  /**
	   * Whether all items in the collection are selected.
	   */


	  get isSelectAll() {
	    if (this.isEmpty) {
	      return false;
	    }

	    if (this.state.selectedKeys === 'all') {
	      return true;
	    }

	    if (this._isSelectAll != null) {
	      return this._isSelectAll;
	    }

	    let allKeys = this.getSelectAllKeys();
	    let selectedKeys = this.state.selectedKeys;
	    this._isSelectAll = allKeys.every(k => selectedKeys.has(k));
	    return this._isSelectAll;
	  }

	  get firstSelectedKey() {
	    var _first;

	    let first = null;

	    for (let key of this.state.selectedKeys) {
	      let item = this.collection.getItem(key);

	      if (!first || (item == null ? void 0 : item.index) < first.index) {
	        first = item;
	      }
	    }

	    return (_first = first) == null ? void 0 : _first.key;
	  }

	  get lastSelectedKey() {
	    var _last;

	    let last = null;

	    for (let key of this.state.selectedKeys) {
	      let item = this.collection.getItem(key);

	      if (!last || (item == null ? void 0 : item.index) > last.index) {
	        last = item;
	      }
	    }

	    return (_last = last) == null ? void 0 : _last.key;
	  }
	  /**
	   * Extends the selection to the given key.
	   */


	  extendSelection(toKey) {
	    toKey = this.getKey(toKey);
	    let selection; // Only select the one key if coming from a select all.

	    if (this.state.selectedKeys === 'all') {
	      selection = new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection([toKey], toKey, toKey);
	    } else {
	      let selectedKeys = this.state.selectedKeys;
	      let anchorKey = selectedKeys.anchorKey || toKey;
	      selection = new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection(selectedKeys, anchorKey, toKey);

	      for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey || toKey)) {
	        selection.delete(key);
	      }

	      for (let key of this.getKeyRange(toKey, anchorKey)) {
	        if (!this.state.disabledKeys.has(key)) {
	          selection.add(key);
	        }
	      }
	    }

	    this.state.setSelectedKeys(selection);
	  }

	  getKeyRange(from, to) {
	    let fromItem = this.collection.getItem(from);
	    let toItem = this.collection.getItem(to);

	    if (fromItem && toItem) {
	      if (fromItem.index <= toItem.index) {
	        return this.getKeyRangeInternal(from, to);
	      }

	      return this.getKeyRangeInternal(to, from);
	    }

	    return [];
	  }

	  getKeyRangeInternal(from, to) {
	    let keys = [];
	    let key = from;

	    while (key) {
	      let item = this.collection.getItem(key);

	      if (item && item.type === 'item' || item.type === 'cell' && this.allowsCellSelection) {
	        keys.push(key);
	      }

	      if (key === to) {
	        return keys;
	      }

	      key = this.collection.getKeyAfter(key);
	    }

	    return [];
	  }

	  getKey(key) {
	    let item = this.collection.getItem(key);

	    if (!item) {
	      // ¯\_(ツ)_/¯
	      return key;
	    } // If cell selection is allowed, just return the key.


	    if (item.type === 'cell' && this.allowsCellSelection) {
	      return key;
	    } // Find a parent item to select


	    while (item.type !== 'item' && item.parentKey) {
	      item = this.collection.getItem(item.parentKey);
	    }

	    if (!item || item.type !== 'item') {
	      return null;
	    }

	    return item.key;
	  }
	  /**
	   * Toggles whether the given key is selected.
	   */


	  toggleSelection(key) {
	    key = this.getKey(key);

	    if (key == null) {
	      return;
	    }

	    let keys = new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection(this.state.selectedKeys === 'all' ? this.getSelectAllKeys() : this.state.selectedKeys);

	    if (keys.has(key)) {
	      keys.delete(key); // TODO: move anchor to last selected key...
	      // Does `current` need to move here too?
	    } else {
	      keys.add(key);
	      keys.anchorKey = key;
	      keys.currentKey = key;
	    }

	    if (this.disallowEmptySelection && keys.size === 0) {
	      return;
	    }

	    this.state.setSelectedKeys(keys);
	  }
	  /**
	   * Replaces the selection with only the given key.
	   */


	  replaceSelection(key) {
	    key = this.getKey(key);

	    if (key == null) {
	      return;
	    }

	    this.state.setSelectedKeys(new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection([key], key, key));
	  }
	  /**
	   * Replaces the selection with the given keys.
	   */


	  setSelectedKeys(keys) {
	    if (this.selectionMode === 'none') {
	      return;
	    }

	    let selection = new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection();

	    for (let key of keys) {
	      key = this.getKey(key);

	      if (key != null) {
	        selection.add(key);

	        if (this.selectionMode === 'single') {
	          break;
	        }
	      }
	    }

	    this.state.setSelectedKeys(selection);
	  }

	  getSelectAllKeys() {
	    let keys = [];

	    let addKeys = key => {
	      while (key) {
	        if (!this.state.disabledKeys.has(key)) {
	          let item = this.collection.getItem(key);

	          if (item.type === 'item') {
	            keys.push(key);
	          } // Add child keys. If cell selection is allowed, then include item children too.


	          if (item.hasChildNodes && (this.allowsCellSelection || item.type !== 'item')) {
	            addKeys([...item.childNodes][0].key);
	          }
	        }

	        key = this.collection.getKeyAfter(key);
	      }
	    };

	    addKeys(this.collection.getFirstKey());
	    return keys;
	  }
	  /**
	   * Selects all items in the collection.
	   */


	  selectAll() {
	    if (this.selectionMode === 'multiple') {
	      this.state.setSelectedKeys('all');
	    }
	  }
	  /**
	   * Removes all keys from the selection.
	   */


	  clearSelection() {
	    if (!this.disallowEmptySelection && (this.state.selectedKeys === 'all' || this.state.selectedKeys.size > 0)) {
	      this.state.setSelectedKeys(new $c91e86e24f2dc9a2182dcc2674c58c$export$Selection());
	    }
	  }
	  /**
	   * Toggles between select all and an empty selection.
	   */


	  toggleSelectAll() {
	    if (this.isSelectAll) {
	      this.clearSelection();
	    } else {
	      this.selectAll();
	    }
	  }

	  select(key, e) {
	    if (this.selectionMode === 'none') {
	      return;
	    }

	    if (this.selectionMode === 'single') {
	      if (this.isSelected(key) && !this.disallowEmptySelection) {
	        this.toggleSelection(key);
	      } else {
	        this.replaceSelection(key);
	      }
	    } else if (e && e.shiftKey) {
	      this.extendSelection(key);
	    } else {
	      this.toggleSelection(key);
	    }
	  }
	  /**
	   * Returns whether the current selection is equal to the given selection.
	   */


	  isSelectionEqual(selection) {
	    if (selection === this.state.selectedKeys) {
	      return true;
	    } // Check if the set of keys match.


	    let selectedKeys = this.selectedKeys;

	    if (selection.size !== selectedKeys.size) {
	      return false;
	    }

	    for (let key of selection) {
	      if (!selectedKeys.has(key)) {
	        return false;
	      }
	    }

	    for (let key of selectedKeys) {
	      if (!selection.has(key)) {
	        return false;
	      }
	    }

	    return true;
	  }

	}

	let $ed5d55e571caf578a4f08babbaa26be$var$_Symbol$iterator;
	$ed5d55e571caf578a4f08babbaa26be$var$_Symbol$iterator = Symbol.iterator;

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	class ListCollection {
	  constructor(nodes) {
	    var _last;

	    this.keyMap = new Map();
	    this.iterable = void 0;
	    this.firstKey = void 0;
	    this.lastKey = void 0;
	    this.iterable = nodes;

	    let visit = node => {
	      this.keyMap.set(node.key, node);

	      if (node.childNodes && node.type === 'section') {
	        for (let child of node.childNodes) {
	          visit(child);
	        }
	      }
	    };

	    for (let node of nodes) {
	      visit(node);
	    }

	    let last;
	    let index = 0;

	    for (let [key, node] of this.keyMap) {
	      if (last) {
	        last.nextKey = key;
	        node.prevKey = last.key;
	      } else {
	        this.firstKey = key;
	        node.prevKey = undefined;
	      }

	      if (node.type === 'item') {
	        node.index = index++;
	      }

	      last = node; // Set nextKey as undefined since this might be the last node
	      // If it isn't the last node, last.nextKey will properly set at start of new loop

	      last.nextKey = undefined;
	    }

	    this.lastKey = (_last = last) == null ? void 0 : _last.key;
	  }

	  *[$ed5d55e571caf578a4f08babbaa26be$var$_Symbol$iterator]() {
	    yield* this.iterable;
	  }

	  get size() {
	    return this.keyMap.size;
	  }

	  getKeys() {
	    return this.keyMap.keys();
	  }

	  getKeyBefore(key) {
	    let node = this.keyMap.get(key);
	    return node ? node.prevKey : null;
	  }

	  getKeyAfter(key) {
	    let node = this.keyMap.get(key);
	    return node ? node.nextKey : null;
	  }

	  getFirstKey() {
	    return this.firstKey;
	  }

	  getLastKey() {
	    return this.lastKey;
	  }

	  getItem(key) {
	    return this.keyMap.get(key);
	  }

	  at(idx) {
	    const keys = [...this.getKeys()];
	    return this.getItem(keys[idx]);
	  }

	}

	/**
	 * Provides state management for list-like components. Handles building a collection
	 * of items from props, and manages multiple selection state.
	 */
	function useListState(props) {
	  let {
	    filter
	  } = props;
	  let selectionState = useMultipleSelectionState$1(props);
	  let disabledKeys = _react.useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [props.disabledKeys]);

	  let factory = nodes => filter ? new ListCollection(filter(nodes)) : new ListCollection(nodes);

	  let context = _react.useMemo(() => ({
	    suppressTextValueWarning: props.suppressTextValueWarning
	  }), [props.suppressTextValueWarning]);
	  let collection = useCollection$1(props, factory, context, [filter]); // Reset focused key if that item is deleted from the collection.

	  _react.useEffect(() => {
	    if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) {
	      selectionState.setFocusedKey(null);
	    }
	  }, [collection, selectionState.focusedKey]);
	  return {
	    collection,
	    disabledKeys,
	    selectionManager: new SelectionManager(collection, selectionState)
	  };
	}

	/**
	 * Provides state management for list-like components with single selection.
	 * Handles building a collection of items from props, and manages selection state.
	 */
	function useSingleSelectListState(props) {
	  var _props$defaultSelecte;

	  let [selectedKey, setSelectedKey] = useControlledState(props.selectedKey, (_props$defaultSelecte = props.defaultSelectedKey) != null ? _props$defaultSelecte : null, props.onSelectionChange);
	  let selectedKeys = _react.useMemo(() => selectedKey != null ? [selectedKey] : [], [selectedKey]);
	  let {
	    collection,
	    disabledKeys,
	    selectionManager
	  } = useListState(_extends({}, props, {
	    selectionMode: 'single',
	    disallowEmptySelection: true,
	    selectedKeys,
	    onSelectionChange: keys => {
	      let key = keys.values().next().value; // Always fire onSelectionChange, even if the key is the same
	      // as the current key (useControlledState does not).

	      if (key === selectedKey && props.onSelectionChange) {
	        props.onSelectionChange(key);
	      }

	      setSelectedKey(key);
	    }
	  }));
	  let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
	  return {
	    collection,
	    disabledKeys,
	    selectionManager,
	    selectedKey,
	    setSelectedKey,
	    selectedItem
	  };
	}

	let idCounter$1 = 1;
	const cache = new WeakMap();
	function generateKey(items) {
	  const cached = cache.get(items);
	  if (cached) return cached;
	  const id = idCounter$1++;
	  if (items) cache.set(items, id);
	  return id;
	}

	/**
	 * Pulled from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Item.ts
	 * with some minor adjustments.
	 */

	function Item(props) {
	  return null;
	} // See examples of getCollectionNode https://github.com/adobe/react-spectrum/search?q=getCollectionNode

	Item.getCollectionNode = function* getCollectionNode(props, context) {
	  let {
	    childItems,
	    title,
	    children
	  } = props;
	  let rendered = props.title || props.children;
	  let textValue = props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';
	  yield {
	    key: props.id,
	    type: 'item',
	    props,
	    rendered,
	    textValue,
	    'aria-label': props['aria-label'],
	    hasChildNodes: hasChildItems(props),

	    *childNodes() {
	      if (childItems) {
	        for (let child of childItems) {
	          if (child && typeof child === 'object') {
	            yield {
	              value: Object.assign({
	                // generate a key for groups/sections nested inside of items (for menus mostly)
	                // @ts-expect-error
	                id: typeof child.id !== 'undefined' ? child.id : `${generateKey(child.children)}-subitem`
	              }, child)
	            };
	          } else {
	            yield {
	              value: child
	            };
	          }
	        }
	      } else if (title) {
	        let items = [];
	        _react__namespace.Children.forEach(children, child => {
	          items.push({
	            // type: 'item', // do not constrain to just item children - sections etc are ok
	            element: child
	          });
	        });
	        yield* items;
	      }
	    }

	  };
	};

	function hasChildItems(props) {
	  if (props.hasChildItems !== null) {
	    return props.hasChildItems;
	  }

	  if (props.childItems) {
	    return true;
	  }

	  if (props.title && _react__namespace.Children.count(props.children) > 0) {
	    return true;
	  }

	  return false;
	}

	function ListBoxBase(props, forwardRef) {
	  const {
	    matchedProps,
	    remainingProps
	  } = splitBoxProps(props);
	  const domRef = _react__namespace.useRef();
	  const ref = forwardRef || domRef;
	  const state = useListState(props);
	  const {
	    listBoxProps
	  } = useListBox(remainingProps, state, ref);
	  return jsxRuntime.jsx(Box, Object.assign({}, listBoxProps, matchedProps, {
	    color: matchedProps.color,
	    ref: ref,
	    children: [...state.collection].map(item => jsxRuntime.jsx(ListBoxOption, {
	      item: item,
	      state: state
	    }, item.key))
	  }), void 0);
	} // forwardRef doesn't support generic parameters, so cast the result to the correct type
	// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref


	const ListBox = /*#__PURE__*/_react__namespace.forwardRef(ListBoxBase);

	function ListBoxOption({
	  item,
	  state
	}) {
	  const {
	    rendered,
	    key
	  } = item;
	  const isDisabled = state.disabledKeys.has(key);
	  const ref = _react__namespace.useRef();
	  const {
	    optionProps
	  } = useOption({
	    key,
	    isDisabled
	  }, state, ref);
	  const {
	    isFocusVisible,
	    focusProps
	  } = useFocusRing();
	  return jsxRuntime.jsx(Box, Object.assign({}, mergeProps(optionProps, focusProps), {
	    bg: {
	      default: isFocusVisible ? 'canvas-200' : 'transparent',
	      hover: 'canvas-200'
	    },
	    color: "body",
	    cursor: "pointer",
	    ref: ref,
	    children: rendered
	  }), void 0);
	}

	const ListBoxItem = Item;

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	const $c10674539d06c96e1a2fbb6a54340$var$cache = new WeakMap();
	function getItemCount(collection) {
	  let count = $c10674539d06c96e1a2fbb6a54340$var$cache.get(collection);

	  if (count != null) {
	    return count;
	  }

	  count = 0;

	  for (let item of collection) {
	    if (item.type === 'section') {
	      count += getItemCount(item.childNodes);
	    } else {
	      count++;
	    }
	  }

	  $c10674539d06c96e1a2fbb6a54340$var$cache.set(collection, count);
	  return count;
	}

	/**
	 * Provides the behavior and accessibility implementation for a menu trigger.
	 * @param props - Props for the menu trigger.
	 * @param state - State for the menu trigger.
	 */
	function useMenuTrigger(props, state, ref) {
	  let {
	    type = 'menu',
	    isDisabled
	  } = props;
	  let menuTriggerId = useId();
	  let {
	    triggerProps,
	    overlayProps
	  } = useOverlayTrigger({
	    type
	  }, state, ref);

	  let onKeyDown = e => {
	    if (typeof e.isDefaultPrevented === 'function' && e.isDefaultPrevented() || e.defaultPrevented || isDisabled) {
	      return;
	    }

	    if (ref && ref.current) {
	      switch (e.key) {
	        case 'ArrowDown':
	        case 'Enter':
	        case ' ':
	          e.preventDefault();
	          e.stopPropagation();
	          state.toggle('first');
	          break;

	        case 'ArrowUp':
	          e.preventDefault();
	          e.stopPropagation();
	          state.toggle('last');
	          break;
	      }
	    }
	  };

	  return {
	    menuTriggerProps: _extends({}, triggerProps, {
	      id: menuTriggerId,

	      onPressStart(e) {
	        // For consistency with native, open the menu on mouse/key down, but touch up.
	        if (e.pointerType !== 'touch' && e.pointerType !== 'keyboard') {
	          // If opened with a screen reader, auto focus the first item.
	          // Otherwise, the menu itself will be focused.
	          state.toggle(e.pointerType === 'virtual' ? 'first' : null);
	        }
	      },

	      onPress(e) {
	        if (e.pointerType === 'touch') {
	          state.toggle();
	        }
	      },

	      onKeyDown
	    }),
	    menuProps: _extends({}, overlayProps, {
	      'aria-labelledby': menuTriggerId
	    })
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for a menu component.
	 * A menu displays a list of actions or options that a user can choose.
	 * @param props - Props for the menu.
	 * @param state - State for the menu, as returned by `useListState`.
	 */
	function useMenu(props, state, ref) {
	  let {
	    shouldFocusWrap = true
	  } = props,
	      otherProps = _objectWithoutPropertiesLoose(props, ["shouldFocusWrap"]);

	  if (!props['aria-label'] && !props['aria-labelledby']) {
	    console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
	  }

	  let domProps = filterDOMProps(props, {
	    labelable: true
	  });
	  let {
	    listProps
	  } = useSelectableList(_extends({}, otherProps, {
	    ref,
	    selectionManager: state.selectionManager,
	    collection: state.collection,
	    disabledKeys: state.disabledKeys,
	    shouldFocusWrap
	  }));
	  return {
	    menuProps: mergeProps(domProps, _extends({
	      role: 'menu'
	    }, listProps))
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for an item in a menu.
	 * See `useMenu` for more details about menus.
	 * @param props - Props for the item.
	 * @param state - State for the menu, as returned by `useTreeState`.
	 */
	function useMenuItem(props, state, ref) {
	  let {
	    isSelected,
	    isDisabled,
	    key,
	    onClose,
	    closeOnSelect,
	    isVirtualized,
	    onAction
	  } = props;
	  let role = 'menuitem';

	  if (state.selectionManager.selectionMode === 'single') {
	    role = 'menuitemradio';
	  } else if (state.selectionManager.selectionMode === 'multiple') {
	    role = 'menuitemcheckbox';
	  }

	  let labelId = useSlotId();
	  let descriptionId = useSlotId();
	  let keyboardId = useSlotId();
	  let ariaProps = {
	    'aria-disabled': isDisabled,
	    role,
	    'aria-label': props['aria-label'],
	    'aria-labelledby': labelId,
	    'aria-describedby': [descriptionId, keyboardId].filter(Boolean).join(' ') || undefined
	  };

	  if (state.selectionManager.selectionMode !== 'none') {
	    ariaProps['aria-checked'] = isSelected;
	  }

	  if (isVirtualized) {
	    ariaProps['aria-posinset'] = state.collection.getItem(key).index;
	    ariaProps['aria-setsize'] = getItemCount(state.collection);
	  }

	  let onKeyDown = e => {
	    // Ignore repeating events, which may have started on the menu trigger before moving
	    // focus to the menu item. We want to wait for a second complete key press sequence.
	    if (e.repeat) {
	      return;
	    }

	    switch (e.key) {
	      case ' ':
	        if (!isDisabled && state.selectionManager.selectionMode === 'none' && closeOnSelect !== false && onClose) {
	          onClose();
	        }

	        break;

	      case 'Enter':
	        // The Enter key should always close on select, except if overridden.
	        if (!isDisabled && closeOnSelect !== false && onClose) {
	          onClose();
	        }

	        break;
	    }
	  };

	  let onPressStart = e => {
	    if (e.pointerType === 'keyboard' && onAction) {
	      onAction(key);
	    }
	  };

	  let onPressUp = e => {
	    if (e.pointerType !== 'keyboard') {
	      if (onAction) {
	        onAction(key);
	      } // Pressing a menu item should close by default in single selection mode but not multiple
	      // selection mode, except if overridden by the closeOnSelect prop.


	      if (onClose && (closeOnSelect != null ? closeOnSelect : state.selectionManager.selectionMode !== 'multiple')) {
	        onClose();
	      }
	    }
	  };

	  let {
	    itemProps
	  } = useSelectableItem({
	    selectionManager: state.selectionManager,
	    key,
	    ref,
	    shouldSelectOnPressUp: true
	  });
	  let {
	    pressProps
	  } = usePress(mergeProps({
	    onPressStart,
	    onPressUp,
	    onKeyDown,
	    isDisabled
	  }, itemProps));
	  let {
	    hoverProps
	  } = useHover({
	    isDisabled,

	    onHoverStart() {
	      if (!isFocusVisible()) {
	        state.selectionManager.setFocused(true);
	        state.selectionManager.setFocusedKey(key);
	      }
	    }

	  });
	  return {
	    menuItemProps: _extends({}, ariaProps, mergeProps(pressProps, hoverProps)),
	    labelProps: {
	      id: labelId
	    },
	    descriptionProps: {
	      id: descriptionId
	    },
	    keyboardShortcutProps: {
	      id: keyboardId
	    }
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for a section in a menu.
	 * See `useMenu` for more details about menus.
	 * @param props - Props for the section.
	 */
	function useMenuSection(props) {
	  let {
	    heading,
	    'aria-label': ariaLabel
	  } = props;
	  let headingId = useId();
	  return {
	    itemProps: {
	      role: 'presentation'
	    },
	    headingProps: heading ? {
	      // Techincally, menus cannot contain headings according to ARIA.
	      // We hide the heading from assistive technology, and only use it
	      // as a label for the nested group.
	      id: headingId,
	      'aria-hidden': true
	    } : {},
	    groupProps: {
	      role: 'group',
	      'aria-label': ariaLabel,
	      'aria-labelledby': heading ? headingId : undefined
	    }
	  };
	}

	/**
	 * Manages state for a menu trigger. Tracks whether the menu is currently open,
	 * and controls which item will receive focus when it opens.
	 */
	function useMenuTriggerState(props) {
	  let overlayTriggerState = useOverlayTriggerState(props);
	  let [focusStrategy, setFocusStrategy] = _react.useState(null);
	  return _extends({
	    focusStrategy
	  }, overlayTriggerState, {
	    open(focusStrategy) {
	      if (focusStrategy === void 0) {
	        focusStrategy = null;
	      }

	      setFocusStrategy(focusStrategy);
	      overlayTriggerState.open();
	    },

	    toggle(focusStrategy) {
	      if (focusStrategy === void 0) {
	        focusStrategy = null;
	      }

	      setFocusStrategy(focusStrategy);
	      overlayTriggerState.toggle();
	    }

	  });
	}

	const popoverCss = twCss({
	  '@apply': CX('rounded', 'filter', 'drop-shadow'),
	  '& > *:not(.sl-popover__tip)': {
	    '@apply': CX('rounded', 'z-10', 'relative')
	  }
	});

	const _excluded$j = ["children", "isOpen", "onClose", "contain", "autoFocus", "restoreFocus", "appearance", "isNonModal", "type"],
	      _excluded2$7 = ["color"];
	const Popover = /*#__PURE__*/_react.forwardRef((props, ref) => {
	  const {
	    renderTrigger,
	    children,
	    isOpen,
	    defaultOpen,
	    placement = 'bottom',
	    scrollRef,
	    onOpen,
	    onClose,
	    contain = true,
	    autoFocus = true,
	    restoreFocus = true,
	    offset = props.showArrow ? 10 : 8,
	    crossOffset = 0,
	    shouldFlip = true,
	    p,
	    appearance = 'default',
	    showArrow,
	    type = 'dialog',
	    isNonModal,
	    matchTriggerWidth,
	    boundaryElement
	  } = props;
	  const onOpenChange = _react.useCallback($isOpen => {
	    if ($isOpen && onOpen) onOpen();
	    if (!$isOpen && onClose) onClose();
	  }, [onClose, onOpen]);
	  let state = useOverlayTriggerState({
	    isOpen,
	    defaultOpen,
	    onOpenChange
	  });
	  const triggerRef = _react.useRef();
	  const consumerProvidedRef = !!props.triggerRef;
	  const popoverRef = _react.useRef();
	  let unwrappedPopoverRef = useUnwrapDOMRef(popoverRef); // Get props for the trigger and overlay. This also handles
	  // hiding the overlay when a parent element of the trigger scrolls
	  // (which invalidates the popover positioning).

	  let {
	    triggerProps,
	    overlayProps
	  } = useOverlayTrigger({
	    type
	  }, state, triggerRef); // Get popover positioning props relative to the trigger

	  let {
	    overlayProps: positionProps,
	    arrowProps,
	    arrowIcon
	  } = useOverlayPosition({
	    targetRef: props.triggerRef || triggerRef,
	    overlayRef: unwrappedPopoverRef,
	    placement,
	    offset,
	    scrollRef,
	    crossOffset,
	    boundaryElement,
	    shouldFlip,
	    isOpen: state.isOpen,
	    onClose,
	    matchTriggerWidth
	  });
	  const triggerPropsWithRef = Object.assign({}, triggerProps, {
	    ref: consumerProvidedRef ? undefined : triggerRef
	  }); // if isOpen is provided (controlled mode), do not use our own onPress handler

	  const onPress = isOpen === void 0 ? state.toggle : undefined;
	  const triggerElem = renderTrigger ? runIfFn(renderTrigger, {
	    isOpen: state.isOpen
	  }) : null;
	  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
	    children: [triggerElem && jsxRuntime.jsx(PressResponder, Object.assign({}, triggerPropsWithRef, {
	      onPress: onPress,
	      isPressed: state.isOpen,
	      children: triggerElem
	    }), void 0), jsxRuntime.jsx(_Overlay, {
	      isOpen: state.isOpen,
	      children: jsxRuntime.jsxs(PopoverWrapper, Object.assign({}, overlayProps, positionProps, {
	        ref: popoverRef,
	        isOpen: state.isOpen,
	        onClose: state.close,
	        p: p,
	        contain: contain,
	        autoFocus: autoFocus,
	        restoreFocus: restoreFocus,
	        appearance: appearance,
	        isNonModal: isNonModal,
	        type: type,
	        children: [runIfFn(children, {
	          close: state.close
	        }), showArrow && jsxRuntime.jsx(TooltipArrow$1, {
	          icon: arrowIcon,
	          style: arrowProps.style
	        }, void 0)]
	      }), void 0)
	    }, void 0)]
	  }, void 0);
	});
	const popoverVariants = {
	  default: {
	    p: 4,
	    bg: 'canvas-dialog'
	  },
	  minimal: {}
	};
	const PopoverWrapper = /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    children,
	    isOpen,
	    onClose,
	    contain,
	    autoFocus,
	    restoreFocus,
	    appearance,
	    isNonModal,
	    type
	  } = _ref,
	      otherProps = _objectWithoutPropertiesLoose$1(_ref, _excluded$j);

	  let domRef = useDOMRef(ref); // Handle interacting outside the dialog and pressing
	  // the Escape key to close the modal.

	  let {
	    overlayProps
	  } = useOverlay({
	    onClose,
	    isOpen,
	    isDismissable: true,
	    shouldCloseOnBlur: type === 'listbox'
	  }, domRef); // Hide content outside the modal from screen readers.

	  let {
	    modalProps
	  } = useModal({
	    isDisabled: isNonModal
	  });

	  const _mergeProps = mergeProps(overlayProps, otherProps, modalProps),
	        containerProps = _objectWithoutPropertiesLoose$1(_mergeProps, _excluded2$7);

	  const variantProps = popoverVariants[appearance] || {}; // Focus the popover itself on mount, unless a child element is already focused.

	  _react.useEffect(() => {
	    // without the requestAnimationFrame, interactions with popover in cypress testing environment fail
	    requestAnimationFrame(() => {
	      if (domRef.current && !domRef.current.contains(document.activeElement)) {
	        focusSafely(domRef.current);
	      }
	    });
	  }, [domRef]);
	  return jsxRuntime.jsxs(FocusScope, {
	    contain: contain,
	    restoreFocus: restoreFocus,
	    autoFocus: autoFocus,
	    children: [jsxRuntime.jsx(DismissButton, {
	      onDismiss: onClose
	    }, void 0), jsxRuntime.jsx(Box, Object.assign({}, containerProps, variantProps, {
	      className: "sl-popover",
	      ref: domRef,
	      role: "presentation",
	      tabIndex: -1,
	      display: "inline-flex",
	      "data-testid": "popover",
	      styled: popoverCss,
	      "data-ispopover": "true",
	      children: children
	    }), void 0), jsxRuntime.jsx(DismissButton, {
	      onDismiss: onClose
	    }, void 0)]
	  }, void 0);
	});

	function TooltipArrow$1({
	  icon,
	  style
	}) {
	  return jsxRuntime.jsx(Box, {
	    className: "sl-popover__tip",
	    zIndex: 0,
	    pos: "absolute",
	    color: "canvas-dialog",
	    style: style,
	    children: jsxRuntime.jsx(Icon, {
	      icon: icon
	    }, void 0)
	  }, void 0);
	}

	/**
	 * Pulled from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Section.ts
	 * with some minor adjustments.
	 */

	function Section$1(props) {
	  return null;
	} // See examples of getCollectionNode https://github.com/adobe/react-spectrum/search?q=getCollectionNode

	Section$1.getCollectionNode = function* getCollectionNode(props, context) {
	  let {
	    children,
	    id,
	    title,
	    items
	  } = props;
	  yield {
	    key: typeof id !== 'undefined' ? id : `${generateKey(items)}-section`,
	    type: 'section',
	    hasChildNodes: true,
	    props,
	    rendered: title,
	    'aria-label': props['aria-label'],

	    *childNodes() {
	      if (typeof children === 'function') {
	        if (!items) {
	          throw new Error('props.children was a function but props.items is missing');
	        }

	        for (let item of items) {
	          yield {
	            value: item,
	            renderer: children
	          };
	        }
	      } else {
	        let items = [];
	        _react__namespace.Children.forEach(children, child => {
	          items.push({
	            element: child
	          });
	        });
	        yield* items;
	      }
	    }

	  };
	};

	const useEnhancedEffect = typeof window !== 'undefined' && !process.env.TEST_SSR ? _react__namespace.useLayoutEffect : _react__namespace.useEffect;
	/**
	 * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
	 *
	 * This component can be useful in a variety of situations:
	 * - Escape hatch for broken dependencies not supporting SSR.
	 * - Improve the time-to-first paint on the client by only rendering above the fold.
	 * - Reduce the rendering time on the server.
	 * - Under too heavy server load, you can turn on service degradation.
	 */

	const NoSsr = props => {
	  const {
	    children,
	    defer = false,
	    fallback = null
	  } = props;
	  const [mountedState, setMountedState] = _react__namespace.useState(false);
	  useEnhancedEffect(() => {
	    if (!defer && !process.env.TEST_SSR) {
	      setMountedState(true);
	    }
	  }, [defer]);
	  _react__namespace.useEffect(() => {
	    if (defer && !process.env.TEST_SSR) {
	      setMountedState(true);
	    }
	  }, [defer]);
	  return jsxRuntime.jsx(jsxRuntime.Fragment, {
	    children: mountedState ? children : fallback
	  }, void 0);
	};

	const isMenuGroup = node => {
	  return node && typeof node === 'object' && node['type'] === 'group';
	};
	const isMenuOptionGroup = node => {
	  return node && typeof node === 'object' && node['type'] === 'option_group';
	};
	const isMenuOption = node => {
	  return node && typeof node === 'object' && node.hasOwnProperty('value') && !node['type'];
	};
	const isMenuDivider = node => {
	  return node && typeof node === 'object' && node['type'] === 'divider';
	};

	const MenuContext = /*#__PURE__*/_react__namespace.createContext(null);

	class MenuKeyboardDelegate {
	  constructor(state) {
	    this.expandedKeys = state.expandedKeys;
	    this.collection = state.collection;
	    this.selectionManager = state.selectionManager;
	    this.toggleKey = state.toggleKey;
	    this.collapseKey = state.collapseKey;
	  }

	  getKeyRightOf(key) {
	    const {
	      selectionManager,
	      collection,
	      toggleKey
	    } = this;
	    const item = collection.getItem(key);
	    if (!item || !item.hasChildNodes) return;
	    toggleKey(key);
	    selectionManager.setFocused(true); // return the first key in the nested menu

	    const rightKey = this.getFirstKey();
	    return rightKey;
	  }

	  getKeyLeftOf(key) {
	    const {
	      selectionManager,
	      collection,
	      collapseKey
	    } = this;
	    const item = collection.getItem(key);
	    if (!item) return;
	    let parent = collection.getItem(item.parentKey);
	    let parentKey = null;

	    while (parentKey === null) {
	      if (!parent) return null;

	      if (parent.menuLevel === item.menuLevel - 1) {
	        parentKey = parent.key;
	      } else {
	        parent = collection.getItem(parent.parentKey);
	      }
	    }

	    if (parentKey) {
	      collapseKey(parentKey);
	    }

	    selectionManager.setFocusedKey(parentKey);
	    selectionManager.setFocused(true); // return the parent key

	    return parentKey;
	  }

	  getKeyAbove(key) {
	    const {
	      collection
	    } = this;
	    const deepestExpandedKey = this.getDeepestExpandedKey();
	    let keyBefore = collection.getKeyBefore(key);

	    while (keyBefore !== null) {
	      let item = collection.getItem(keyBefore);

	      if ((item === null || item === void 0 ? void 0 : item.type) === 'item' && !item.isDisabled && // only navigate up/down through items in this menu (not nested or parent menus)
	      item.parentMenuItemKey === deepestExpandedKey) {
	        return keyBefore;
	      }

	      keyBefore = collection.getKeyBefore(keyBefore);
	    }

	    return null;
	  }

	  getKeyBelow(key) {
	    const {
	      collection
	    } = this;
	    const deepestExpandedKey = this.getDeepestExpandedKey();
	    let keyBelow = collection.getKeyAfter(key);

	    while (keyBelow !== null) {
	      const item = collection.getItem(keyBelow);

	      if ((item === null || item === void 0 ? void 0 : item.type) === 'item' && !item.isDisabled && // only navigate up/down through items in this menu (not nested or parent menus)
	      item.parentMenuItemKey === deepestExpandedKey) {
	        return keyBelow;
	      }

	      keyBelow = collection.getKeyAfter(keyBelow);
	    }

	    return null;
	  }

	  getFirstKey() {
	    const {
	      collection
	    } = this;
	    const deepestExpandedKey = this.getDeepestExpandedKey();
	    let key = collection.getFirstKey();

	    while (key !== null) {
	      const item = collection.getItem(key);

	      if ((item === null || item === void 0 ? void 0 : item.type) === 'item' && !item.isDisabled && item.parentMenuItemKey === deepestExpandedKey) {
	        return key;
	      }

	      key = collection.getKeyAfter(key);
	    }

	    return null;
	  }

	  getLastKey() {
	    const {
	      collection
	    } = this;
	    const deepestExpandedKey = this.getDeepestExpandedKey();
	    let key = collection.getLastKey();

	    while (key !== null) {
	      const item = collection.getItem(key);

	      if ((item === null || item === void 0 ? void 0 : item.type) === 'item' && !item.isDisabled && item.parentMenuItemKey === deepestExpandedKey) {
	        return key;
	      }

	      key = collection.getKeyBefore(key);
	    }

	    return null;
	  }

	  getDeepestExpandedKey() {
	    const {
	      expandedKeys
	    } = this;
	    const keyArray = Array.from(expandedKeys.keys());
	    return keyArray[keyArray.length - 1] || null;
	  }

	}

	/**
	 * Provides the accessibility implementation for a separator.
	 * A separator is a visual divider between two groups of content,
	 * e.g. groups of menu items or sections of a page.
	 */
	function useSeparator(props) {
	  let domProps = filterDOMProps(props, {
	    labelable: true
	  });
	  let ariaOrientation; // if orientation is horizontal, aria-orientation default is horizontal, so we leave it undefined
	  // if it's vertical, we need to specify it

	  if (props.orientation === 'vertical') {
	    ariaOrientation = 'vertical';
	  } // hr elements implicitly have role = separator and a horizontal orientation


	  if (props.elementType !== 'hr') {
	    return {
	      separatorProps: _extends({}, domProps, {
	        role: 'separator',
	        'aria-orientation': ariaOrientation
	      })
	    };
	  }

	  return {
	    separatorProps: domProps
	  };
	}

	const menuStyle = twStyle({
	  base: `select-none`,
	  props: {
	    /* only apply these pointer styles when user is interacting with a mouse */
	    withInteractions: {
	      true: twCss({
	        '.sl-menu-item:not(.sl-menu-item--disabled):hover': {
	          '@apply': CX('bg-primary', 'text-on-primary'),
	          '& .sl-menu-item__icon': {
	            // @ts-expect-error
	            '@apply': CX('text-on-primary!')
	          },
	          '& .sl-menu-item__description': {
	            // @ts-expect-error
	            '@apply': CX('text-on-primary!')
	          }
	        }
	      })
	    }
	  }
	});
	const menuItemStyle = twStyle({
	  base: twCss({
	    '.sl-menu-item__title-wrapper': {
	      'max-width': '250px'
	    },
	    '.sl-menu-item__description': {
	      display: '-webkit-box',
	      '-webkit-line-clamp': 2,
	      '-webkit-box-orient': 'vertical',
	      overflow: 'hidden'
	    }
	  }),
	  props: {
	    isFocused: {
	      true: twCss({
	        '@apply': CX('bg-primary', 'text-on-primary'),
	        '.sl-menu-item__link-icon, .sl-menu-item__meta': {
	          '@apply': CX('opacity-100')
	        },
	        '.sl-menu-item__icon': {
	          // @ts-expect-error
	          '@apply': CX('text-on-primary!')
	        },
	        '.sl-menu-item__description': {
	          // @ts-expect-error
	          '@apply': CX('text-on-primary!')
	        }
	      })
	    },
	    submenuActive: {
	      true: CX('bg-primary-tint')
	    }
	  }
	});

	const _excluded$i = ["title", "isFocused", "isActive", "isDisabled", "isSelected", "hasSubmenu", "isIndented", "icon", "iconColor", "meta", "href", "description", "size", "cursor"];
	const MENU_ITEM_IDENT_WIDTHS = {
	  default: '28px',
	  lg: '40px'
	};
	const Internal_MenuItemRow = /*#__PURE__*/_react.forwardRef(function MenuItem(_ref, ref) {
	  let {
	    title,
	    isFocused,
	    isActive,
	    isDisabled,
	    isSelected,
	    hasSubmenu,
	    isIndented,
	    icon,
	    iconColor,
	    meta,
	    href,
	    description,
	    size = 'default',
	    cursor = true
	  } = _ref,
	      restProps = _objectWithoutPropertiesLoose$1(_ref, _excluded$i);

	  const isCheckableItem = typeof isSelected !== 'undefined';
	  const shouldIndent = isIndented || isCheckableItem || typeof icon !== 'undefined';
	  const modality = useInteractionModality();
	  const pointerInteraction = modality === 'pointer';
	  const isLink = !!href;
	  const isExternalLink = isLink && !href.startsWith('/');

	  const rowChildren = jsxRuntime.jsxs(jsxRuntime.Fragment, {
	    children: [shouldIndent && jsxRuntime.jsx(Box, {
	      style: {
	        width: MENU_ITEM_IDENT_WIDTHS[size],
	        fontSize: isCheckableItem ? size === 'lg' ? 12 : 10 : undefined
	      },
	      flexShrink: 0,
	      textAlign: "center",
	      "data-testid": "icon",
	      children: (isSelected || icon) && jsxRuntime.jsx(Icon, {
	        className: "sl-menu-item__icon",
	        icon: isSelected ? 'check' : icon,
	        style: {
	          color: iconColor
	        }
	      }, void 0)
	    }, void 0), jsxRuntime.jsxs(Box, {
	      flex: 1,
	      w: "full",
	      pr: 8,
	      className: "sl-menu-item__title-wrapper",
	      children: [jsxRuntime.jsx(Box, {
	        lineHeight: size === 'lg' ? 'relaxed' : undefined,
	        textOverflow: "truncate",
	        children: title
	      }, void 0), description && jsxRuntime.jsx(Box, {
	        className: "sl-menu-item__description",
	        lineHeight: size === 'lg' ? 'relaxed' : undefined,
	        color: "light",
	        fontSize: size === 'lg' ? 'base' : 'sm',
	        whitespace: "normal",
	        children: description
	      }, void 0)]
	    }, void 0), isExternalLink ? jsxRuntime.jsx(Box, {
	      className: "sl-menu-item__link-icon",
	      opacity: 60,
	      children: jsxRuntime.jsx(Icon, {
	        icon: "external-link-alt",
	        size: "sm"
	      }, void 0)
	    }, void 0) : null, (meta || meta === 0) && jsxRuntime.jsx(Box, {
	      className: "sl-menu-item__meta",
	      opacity: 60,
	      children: meta
	    }, void 0), hasSubmenu && jsxRuntime.jsx(Box, {
	      children: jsxRuntime.jsx(Icon, {
	        icon: ['fas', 'caret-right']
	      }, void 0)
	    }, void 0)]
	  }, void 0);

	  const rowProps = Object.assign({}, restProps, {
	    pl: size === 'lg' ? shouldIndent ? 2 : 5 : shouldIndent ? 1 : 3,
	    pr: size === 'lg' ? 4 : 3,
	    pt: size === 'lg' ? 2 : 1,
	    pb: size === 'lg' ? 2 : 1,
	    alignItems: 'center',
	    whitespace: 'nowrap',
	    fontSize: size === 'lg' ? 'lg' : 'base',
	    opacity: isDisabled ? 50 : undefined,
	    styled: menuItemStyle({
	      isFocused: (!pointerInteraction || hasSubmenu) && isFocused,
	      submenuActive: !isFocused && isActive
	    }),
	    className: cn__default["default"]('sl-menu-item', {
	      'sl-menu-item--disabled': isDisabled
	    })
	  });

	  if (isLink && !isDisabled) {
	    return jsxRuntime.jsx(Link, Object.assign({
	      ref: ref,
	      href: href,
	      target: href && !href.startsWith('/') ? '_blank' : undefined,
	      display: "flex",
	      cursor: cursor
	    }, rowProps, {
	      children: rowChildren
	    }), void 0);
	  }

	  return jsxRuntime.jsx(Flex, Object.assign({
	    ref: ref,
	    cursor: isDisabled ? 'not-allowed' : cursor
	  }, rowProps, {
	    children: rowChildren
	  }), void 0);
	});

	const _excluded$h = ["items", "autoFocus", "className"],
	      _excluded2$6 = ["color", "onBlur", "onFocus"],
	      _excluded3$1 = ["color"],
	      _excluded4$1 = ["color"],
	      _excluded5$1 = ["isChecked", "title", "value", "onPress", "label", "isActive", "closeOnPress", "afterRestoreFocus"],
	      _excluded6 = ["color"];
	function MenuNodes(_ref) {
	  let {
	    items,
	    autoFocus,
	    className
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$h);

	  const ref = _react.useRef();
	  const {
	    state,
	    keyboardDelegate,
	    size
	  } = _react.useContext(MenuContext);

	  const _useMenu = useMenu( // @ts-expect-error children is not needed
	  Object.assign({}, props, {
	    autoFocus,
	    keyboardDelegate
	  }), state, ref),
	        menuProps = _objectWithoutPropertiesLoose$1(_useMenu.menuProps, _excluded2$6);

	  const modality = useInteractionModality();
	  const pointerInteraction = modality === 'pointer';
	  return jsxRuntime.jsx(Box, Object.assign({
	    ref: ref,
	    bg: "canvas-dialog",
	    w: "full",
	    style: {
	      minWidth: 150,
	      maxWidth: 400
	    },
	    py: size === 'lg' ? 3 : 2,
	    className: className,
	    styled: menuStyle({
	      withInteractions: pointerInteraction
	    }),
	    cursor: true,
	    overflowY: "auto",
	    display: "inline-block",
	    noFocusRing: true
	  }, menuProps, {
	    children: Array.from(items).map((item, i) => {
	      if (isMenuGroup(item.value) || isMenuOptionGroup(item.value)) {
	        return jsxRuntime.jsx(MenuSectionWrapper, {
	          section: item,
	          state: state
	        }, item.key || i);
	      }

	      if (isMenuDivider(item.value)) {
	        return jsxRuntime.jsx(Divider$1, {}, item.key || i);
	      }

	      return jsxRuntime.jsx(MenuItemWrapper, {
	        item: item,
	        state: state
	      }, item.key || i);
	    })
	  }), void 0);
	}

	function Divider$1() {
	  const _useSeparator = useSeparator({
	    elementType: 'div'
	  }),
	        separatorProps = _objectWithoutPropertiesLoose$1(_useSeparator.separatorProps, _excluded3$1);

	  const {
	    size
	  } = _react.useContext(MenuContext);
	  return jsxRuntime.jsx(Box, Object.assign({
	    my: size === 'lg' ? 2.5 : 2,
	    borderT: true
	  }, separatorProps), void 0);
	}

	function MenuSectionWrapper({
	  section,
	  state
	}) {
	  const _useMenuSection = useMenuSection({
	    heading: section.rendered,
	    'aria-label': section['aria-label']
	  }),
	        {
	    itemProps,
	    groupProps
	  } = _useMenuSection,
	        headingProps = _objectWithoutPropertiesLoose$1(_useMenuSection.headingProps, _excluded4$1);

	  const {
	    size,
	    closeOnPress
	  } = _react.useContext(MenuContext);
	  let value;
	  let onChange;

	  if (isMenuOptionGroup(section.value)) {
	    value = section.value.value;
	    onChange = section.value.onChange;
	  }

	  const childNodes = Array.from(section.childNodes); // do not render the section if it has no children

	  if (!childNodes.length) return null;
	  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
	    children: [!section.firstInMenu && jsxRuntime.jsx(Divider$1, {}, void 0), jsxRuntime.jsxs("div", Object.assign({}, itemProps, {
	      children: [section.rendered && jsxRuntime.jsx(Box, Object.assign({}, headingProps, {
	        pl: size === 'lg' ? 5 : 3,
	        pt: size === 'lg' ? 1 : 0.5,
	        pb: size === 'lg' ? 1.5 : 1,
	        pr: 8,
	        textTransform: "uppercase",
	        color: "light",
	        cursor: true,
	        fontSize: size === 'lg' ? 'base' : 'sm',
	        children: section.rendered
	      }), void 0), jsxRuntime.jsx("div", Object.assign({}, groupProps, {
	        children: childNodes.map((node, i) => {
	          if (isMenuDivider(node.value)) {
	            return jsxRuntime.jsx(Divider$1, {}, node.key || i);
	          }

	          if (isMenuOption(node.value) && isMenuOptionGroup(section.value)) {
	            node.value = Object.assign({
	              closeOnPress: typeof closeOnPress !== 'undefined' ? closeOnPress : false
	            }, node.value, {
	              isChecked: value === node.value.value,
	              onPress: () => {
	                if (isMenuOption(node.value)) {
	                  onChange(node.value.value);
	                }
	              }
	            });
	          } // @ts-expect-error


	          return jsxRuntime.jsx(MenuItemWrapper, {
	            item: node,
	            state: state,
	            isRadio: !!onChange
	          }, node.key || i);
	        })
	      }), void 0)]
	    }), void 0)]
	  }, void 0);
	}

	function MenuItemWrapper({
	  item,
	  state,
	  isRadio
	}) {
	  const ref = _react.useRef();
	  const {
	    key,
	    hasChildNodes,
	    isDisabled
	  } = item;
	  const {
	    useIsFocusedKey,
	    useIsExpandedKey,
	    toggleKey
	  } = state;
	  const {
	    onClose,
	    closeOnPress: globalCloseOnPress,
	    size,
	    cursor
	  } = _react.useContext(MenuContext);
	  const hasSubmenu = hasChildNodes;

	  const _item$value = item.value,
	        {
	    isChecked: isSelected,
	    title,
	    value,
	    onPress,
	    label,
	    isActive,
	    closeOnPress,
	    afterRestoreFocus
	  } = _item$value,
	        restItemProps = _objectWithoutPropertiesLoose$1(_item$value, _excluded5$1);

	  const isExpanded = useIsExpandedKey(key);
	  const isFocused = useIsFocusedKey(key);
	  let closeOnSelect = false; // priority to the value set on the item itself, if one is set

	  if (typeof closeOnPress !== 'undefined') {
	    closeOnSelect = closeOnPress;
	  } else {
	    // else default to true when NOT in checked/radio context and NOT a submenu, otherwise the global default
	    closeOnSelect = typeof isSelected !== 'undefined' ? globalCloseOnPress : !hasSubmenu;
	  } // links use `onClick` handlers, while most of menu works off of `onmouseup`. This dynamic causes the onClose()
	  // logic to teardown the menu before link `onClick` event is triggered, causing the link to not work
	  // disable closeOnSelect for links to prevent this - we call onClose in the onAction handler below for links.


	  const isLink = !!item.value.href;

	  if (isLink) {
	    closeOnSelect = false;
	  }

	  const onAction = _react.useCallback(() => {
	    if (onPress) {
	      if (afterRestoreFocus) {
	        requestAnimationFrame(() => setTimeout(() => onPress(key), 10));
	      } else {
	        onPress(key);
	      }
	    }

	    if (isLink && onClose) {
	      setTimeout(onClose, 0);
	    }
	  }, [onPress, isLink, onClose, afterRestoreFocus, key]);
	  const handleHoverChange = _react__namespace.useCallback(() => {
	    toggleKey(key);
	  }, [key, toggleKey]);
	  const {
	    hoverProps
	  } = useHover({
	    onHoverStart: handleHoverChange,
	    isDisabled
	  });
	  const {
	    menuItemProps
	  } = useMenuItem({
	    key,
	    isSelected,
	    isDisabled,
	    onAction,
	    closeOnSelect,
	    onClose
	  }, state, ref);
	  let role = 'menuitem';

	  if (isRadio) {
	    role = 'menuitemradio';
	  } else if (typeof isSelected !== 'undefined') {
	    role = 'menuitemcheckbox';
	  }

	  const ariaProps = {
	    role
	  };

	  if (typeof isSelected !== 'undefined') {
	    ariaProps['aria-checked'] = isSelected;
	  }

	  const _mergeProps = mergeProps(restItemProps, menuItemProps, hoverProps),
	        restProps = _objectWithoutPropertiesLoose$1(_mergeProps, _excluded6);

	  const menuItemRowProps = Object.assign({}, restProps, ariaProps, {
	    title: title || value,
	    isFocused,
	    isActive: isActive || isExpanded,
	    isSelected,
	    isDisabled,
	    size,
	    cursor
	  });

	  if (!hasSubmenu) {
	    return jsxRuntime.jsx(Internal_MenuItemRow, Object.assign({}, menuItemRowProps, {
	      ref: ref
	    }), void 0);
	  }

	  return jsxRuntime.jsx(SubmenuItem, {
	    item: item,
	    menuItemRowProps: menuItemRowProps,
	    menuItemRef: ref,
	    isExpanded: isExpanded,
	    label: label,
	    onClose: onClose
	  }, void 0);
	}

	function SubmenuItem({
	  item,
	  menuItemRowProps,
	  menuItemRef,
	  isExpanded,
	  label,
	  onClose
	}) {
	  const triggerId = useId();
	  const submenuId = useId();
	  const {
	    providerRef
	  } = useMosaicContext();
	  const ariaTriggerProps = {
	    'aria-haspopup': true,
	    'aria-expanded': isExpanded ? 'true' : 'false'
	  };

	  if (isExpanded) {
	    ariaTriggerProps['aria-controls'] = submenuId;
	  }

	  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
	    children: [jsxRuntime.jsx(Internal_MenuItemRow, Object.assign({}, menuItemRowProps, ariaTriggerProps, {
	      id: triggerId,
	      hasSubmenu: true,
	      ref: menuItemRef
	    }), void 0), isExpanded ? jsxRuntime.jsx(Popover, {
	      isOpen: true,
	      placement: "right top",
	      triggerRef: menuItemRef,
	      boundaryElement: providerRef.current,
	      contain: false,
	      autoFocus: false,
	      restoreFocus: false,
	      appearance: "minimal",
	      offset: 0,
	      crossOffset: menuItemRowProps.size === 'lg' ? -12 : -8,
	      onClose: onClose,
	      type: "menu",
	      isNonModal: true,
	      children: jsxRuntime.jsx(MenuNodes, {
	        id: submenuId,
	        className: "sl-menu",
	        "aria-label": label || `${menuItemRowProps.title} submenu`,
	        items: item.childNodes,
	        "aria-labelledby": triggerId
	      }, void 0)
	    }, void 0) : null]
	  }, void 0);
	}

	class $f8429209754fda4b9142d514065f4$export$CollectionBuilder {
	  constructor() {
	    this.context = void 0;
	    this.cache = new WeakMap();
	  }

	  build(props, context) {
	    this.context = context;
	    return $f8429209754fda4b9142d514065f4$var$iterable(() => this.iterateCollection(props));
	  }

	  *iterateCollection(props) {
	    let {
	      children,
	      items
	    } = props;

	    if (typeof children === 'function') {
	      if (!items) {
	        throw new Error('props.children was a function but props.items is missing');
	      }

	      for (let item of props.items) {
	        yield* this.getFullNode({
	          value: item
	        }, {
	          renderer: children
	        });
	      }
	    } else {
	      let items = [];

	      _react__default["default"].Children.forEach(children, child => {
	        items.push(child);
	      });

	      let index = 0;

	      for (let item of items) {
	        let nodes = this.getFullNode({
	          element: item,
	          index: index
	        }, {});

	        for (let node of nodes) {
	          index++;
	          yield node;
	        }
	      }
	    }
	  }

	  getKey(item, partialNode, state, parentKey) {
	    if (item.key != null) {
	      return item.key;
	    }

	    if (partialNode.type === 'cell' && partialNode.key != null) {
	      return "" + parentKey + partialNode.key;
	    }

	    let v = partialNode.value;

	    if (v != null) {
	      var _v$key;

	      let key = (_v$key = v.key) != null ? _v$key : v.id;

	      if (key == null) {
	        throw new Error('No key found for item');
	      }

	      return key;
	    }

	    return parentKey ? parentKey + "." + partialNode.index : "$." + partialNode.index;
	  }

	  getChildState(state, partialNode) {
	    return {
	      renderer: partialNode.renderer || state.renderer
	    };
	  }

	  *getFullNode(partialNode, state, parentKey, parentNode) {
	    // If there's a value instead of an element on the node, and a parent renderer function is available,
	    // use it to render an element for the value.
	    let element = partialNode.element;

	    if (!element && partialNode.value && state && state.renderer) {
	      let cached = this.cache.get(partialNode.value);

	      if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
	        cached.index = partialNode.index;
	        yield cached;
	        return;
	      }

	      element = state.renderer(partialNode.value);
	    } // If there's an element with a getCollectionNode function on its type, then it's a supported component.
	    // Call this function to get a partial node, and recursively build a full node from there.


	    if ( /*#__PURE__*/_react__default["default"].isValidElement(element)) {
	      let type = element.type;

	      if (typeof type !== 'function' || typeof type.getCollectionNode !== 'function') {
	        let name = typeof element.type === 'function' ? element.type.name : element.type;
	        throw new Error("Unknown element <" + name + "> in collection.");
	      }

	      let childNodes = type.getCollectionNode(element.props, this.context);
	      let index = partialNode.index;
	      let result = childNodes.next();

	      while (!result.done && result.value) {
	        let childNode = result.value;
	        partialNode.index = index;
	        let nodeKey = childNode.key;

	        if (!nodeKey) {
	          nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
	        }

	        let nodes = this.getFullNode(_extends({}, childNode, {
	          key: nodeKey,
	          index,
	          wrapper: $f8429209754fda4b9142d514065f4$var$compose(partialNode.wrapper, childNode.wrapper)
	        }), this.getChildState(state, childNode), parentKey ? "" + parentKey + element.key : element.key, parentNode);
	        let children = [...nodes];

	        for (let node of children) {
	          // Cache the node based on its value
	          node.value = childNode.value || partialNode.value;

	          if (node.value) {
	            this.cache.set(node.value, node);
	          } // The partial node may have specified a type for the child in order to specify a constraint.
	          // Verify that the full node that was built recursively matches this type.


	          if (partialNode.type && node.type !== partialNode.type) {
	            throw new Error("Unsupported type <" + $f8429209754fda4b9142d514065f4$var$capitalize(node.type) + "> in <" + $f8429209754fda4b9142d514065f4$var$capitalize(parentNode.type) + ">. Only <" + $f8429209754fda4b9142d514065f4$var$capitalize(partialNode.type) + "> is supported.");
	          }

	          index++;
	          yield node;
	        }

	        result = childNodes.next(children);
	      }

	      return;
	    } // Ignore invalid elements


	    if (partialNode.key == null) {
	      return;
	    } // Create full node


	    let builder = this;
	    let node = {
	      type: partialNode.type,
	      props: partialNode.props,
	      key: partialNode.key,
	      parentKey: parentNode ? parentNode.key : null,
	      value: partialNode.value,
	      level: parentNode ? parentNode.level + 1 : 0,
	      index: partialNode.index,
	      rendered: partialNode.rendered,
	      textValue: partialNode.textValue,
	      'aria-label': partialNode['aria-label'],
	      wrapper: partialNode.wrapper,
	      shouldInvalidate: partialNode.shouldInvalidate,
	      hasChildNodes: partialNode.hasChildNodes,
	      childNodes: $f8429209754fda4b9142d514065f4$var$iterable(function* () {
	        if (!partialNode.hasChildNodes) {
	          return;
	        }

	        let index = 0;

	        for (let child of partialNode.childNodes()) {
	          // Ensure child keys are globally unique by prepending the parent node's key
	          if (child.key != null) {
	            child.key = "" + node.key + child.key;
	          }

	          child.index = index;
	          let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);

	          for (let node of nodes) {
	            index++;
	            yield node;
	          }
	        }
	      })
	    };
	    yield node;
	  }

	} // Wraps an iterator function as an iterable object, and caches the results.


	function $f8429209754fda4b9142d514065f4$var$iterable(iterator) {
	  let cache = [];
	  let iterable = null;
	  return {
	    *[Symbol.iterator]() {
	      for (let item of cache) {
	        yield item;
	      }

	      if (!iterable) {
	        iterable = iterator();
	      }

	      for (let item of iterable) {
	        cache.push(item);
	        yield item;
	      }
	    }

	  };
	}

	function $f8429209754fda4b9142d514065f4$var$compose(outer, inner) {
	  if (outer && inner) {
	    return element => outer(inner(element));
	  }

	  if (outer) {
	    return outer;
	  }

	  if (inner) {
	    return inner;
	  }
	}

	function $f8429209754fda4b9142d514065f4$var$capitalize(str) {
	  return str[0].toUpperCase() + str.slice(1);
	}

	function useCollection(props, factory, context, invalidators) {
	  if (invalidators === void 0) {
	    invalidators = [];
	  }

	  let builder = _react.useMemo(() => new $f8429209754fda4b9142d514065f4$export$CollectionBuilder(), []);
	  let prev = _react.useRef(null);
	  return _react.useMemo(() => {
	    let nodes = builder.build(props, context);
	    prev.current = factory(nodes, prev.current);
	    return prev.current; // Don't invalidate when any prop changes, just the two we care about.
	    // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [builder, props.children, props.items, context, ...invalidators]);
	}

	// Adapted from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/tree/src/TreeCollection.ts
	class MenuCollection {
	  constructor(nodes) {
	    this.keyMap = new Map();
	    this.iterable = nodes;

	    let visit = (node, firstInMenu, menuLevel, parentMenuItemKey) => {
	      node.firstInMenu = firstInMenu;
	      node.menuLevel = menuLevel;
	      node.parentMenuItemKey = parentMenuItemKey;
	      node.isDisabled = node.value.isDisabled || node.value.type === 'divider';
	      this.keyMap.set(node.key, node);

	      if (node.childNodes) {
	        let first = true;

	        for (let child of node.childNodes) {
	          visit(child, first, node.type === 'item' ? menuLevel + 1 : menuLevel, node.type === 'item' ? node.key : parentMenuItemKey);
	          first = false;
	        }
	      }
	    };

	    let first = true;

	    for (let node of nodes) {
	      visit(node, first, 1, null);
	      first = false;
	    }

	    let last;
	    let index = 0;

	    for (let [key, node] of this.keyMap) {
	      if (last) {
	        last.nextKey = key;
	        node.prevKey = last.key;
	      } else {
	        this.firstKey = key;
	        node.prevKey = undefined;
	      }

	      if (node.type === 'item') {
	        node.index = index++;
	      }

	      last = node; // Set nextKey as undefined since this might be the last node
	      // If it isn't the last node, last.nextKey will properly set at start of new loop

	      last.nextKey = undefined;
	    }

	    this.lastKey = last === null || last === void 0 ? void 0 : last.key;
	  }

	  *[Symbol.iterator]() {
	    yield* this.iterable;
	  }

	  get size() {
	    return this.keyMap.size;
	  }

	  at(pos) {
	    let i = 0;

	    for (const item of this) {
	      if (i++ === pos) {
	        return item;
	      }
	    }

	    return;
	  }

	  getKeys() {
	    return this.keyMap.keys();
	  }

	  getKeyBefore(key) {
	    let node = this.keyMap.get(key);
	    return node ? node.prevKey : null;
	  }

	  getKeyAfter(key) {
	    let node = this.keyMap.get(key);
	    return node ? node.nextKey : null;
	  }

	  getFirstKey() {
	    return this.firstKey;
	  }

	  getLastKey() {
	    return this.lastKey;
	  }

	  getItem(key) {
	    return this.keyMap.get(key);
	  }

	}

	// Originally adapated from https://github.com/adobe/react-spectrum/tree/main/packages/%40react-stately/selection

	/**
	 * A Selection is a special Set containing Keys, which also has an anchor
	 * and current selected key for use when range selecting.
	 */
	class Selection extends Set {
	  constructor(keys, anchorKey, currentKey) {
	    super(keys);

	    if (keys instanceof Selection) {
	      this.anchorKey = anchorKey || keys.anchorKey;
	      this.currentKey = currentKey || keys.currentKey;
	    } else {
	      this.anchorKey = anchorKey;
	      this.currentKey = currentKey;
	    }
	  }

	}

	/**
	 * Manages state for multiple selection and focus in a collection.
	 */

	function useMultipleSelectionState(props) {
	  let {
	    selectionMode = 'none',
	    disallowEmptySelection
	  } = props; // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
	  // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).

	  const isFocusedRef = _react.useRef(false);
	  const focusedKeyRef = _react.useRef(null);
	  const childFocusStrategyRef = _react.useRef(null);
	  const selectedKeysProp = _react.useMemo(() => convertSelection(props.selectedKeys), [props.selectedKeys]);
	  const defaultSelectedKeys = _react.useMemo(() => convertSelection(props.defaultSelectedKeys, new Selection()), [props.defaultSelectedKeys]);
	  const [selectedKeys, setSelectedKeys] = useControlledState(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
	  const disabledKeysProp = _react.useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [props.disabledKeys]);
	  const useStore = _react.useRef(create__default["default"](set => ({
	    isFocused: false,
	    focusedKey: null,
	    setFocused: f => set(state => {
	      isFocusedRef.current = f;
	      return Object.assign({}, state, {
	        isFocusedRef: f
	      });
	    }),
	    setFocusedKey: (k, childFocusStrategy = 'first') => set(state => {
	      focusedKeyRef.current = k;
	      childFocusStrategyRef.current = childFocusStrategy;
	      return Object.assign({}, state, {
	        focusedKey: k
	      });
	    })
	  })));
	  const [setFocused, setFocusedKey] = useStore.current(state => [state.setFocused, state.setFocusedKey], shallow__default["default"]);

	  function useIsFocusedKey(key) {
	    const cb = _react.useCallback(state => state.focusedKey === key, [key]);
	    if (!useStore.current) return false;
	    return useStore.current(cb);
	  }

	  function useFocusedKey() {
	    const cb = _react.useCallback(state => state.focusedKey, []);
	    if (!useStore.current) return false;
	    return useStore.current(cb);
	  }

	  return {
	    useIsFocusedKey,
	    useFocusedKey,
	    selectionMode,
	    disallowEmptySelection,

	    get isFocused() {
	      return isFocusedRef.current;
	    },

	    setFocused,

	    get focusedKey() {
	      return focusedKeyRef.current;
	    },

	    get childFocusStrategy() {
	      return childFocusStrategyRef.current;
	    },

	    setFocusedKey,
	    selectedKeys,
	    setSelectedKeys,
	    disabledKeys: disabledKeysProp
	  };
	}

	function convertSelection(selection, defaultValue) {
	  if (!selection) {
	    return defaultValue;
	  }

	  return selection === 'all' ? 'all' : new Selection(selection);
	}

	const disabledKeys = new Set();
	/**
	 * Provides state management for tree-like components. Handles building a collection
	 * of items from props, item expanded state, and manages multiple selection state.
	 */

	function useMenuState(props) {
	  // stable expandedKeys set for use in keyboard delegate, etc
	  const expandedKeysRef = _react.useRef(new Set());
	  const selectionState = useMultipleSelectionState(props);
	  const tree = useCollection(props, nodes => new MenuCollection(nodes), null, []);
	  const selectionManager = _react.useMemo(() => new SelectionManager(tree, selectionState), [selectionState, tree]);
	  const useStore = _react.useRef(create__default["default"](set => ({
	    // mirrored expanded keys set for use in observers in components etc
	    expandedKeys: new Set(),
	    toggleKey: k => {
	      const newSet = new Set(toggleKey(tree, expandedKeysRef.current, k));
	      return set(state => Object.assign({}, state, {
	        expandedKeys: newSet
	      }));
	    },
	    collapseKey: k => {
	      const newSet = new Set(collapseKey(expandedKeysRef.current, k));
	      return set(state => Object.assign({}, state, {
	        expandedKeys: newSet
	      }));
	    },
	    collapseAllKeys: () => {
	      expandedKeysRef.current = new Set();
	      return set(state => Object.assign({}, state, {
	        expandedKeys: expandedKeysRef.current
	      }));
	    }
	  })));
	  const [onToggle, onCollapse, onCollapseAllKeys] = useStore.current(state => [state.toggleKey, state.collapseKey, state.collapseAllKeys], shallow__default["default"]);

	  function useIsExpandedKey(key) {
	    const cb = _react.useCallback(state => state.expandedKeys.has(key), [key]);
	    if (!useStore.current) return false;
	    return useStore.current(cb);
	  } // Reset focused key if that item is deleted from the collection.


	  _react.useEffect(() => {
	    if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) {
	      selectionState.setFocusedKey(null);
	    } // eslint-disable-next-line react-hooks/exhaustive-deps

	  }, [tree, selectionState.focusedKey]);
	  return {
	    useIsFocusedKey: selectionState.useIsFocusedKey,
	    useFocusedKey: selectionState.useFocusedKey,
	    useIsExpandedKey,
	    collection: tree,
	    expandedKeys: expandedKeysRef.current,
	    disabledKeys,
	    toggleKey: onToggle,
	    collapseKey: onCollapse,
	    collapseAllKeys: onCollapseAllKeys,
	    selectionManager
	  };
	}

	function toggleKey(tree, set, key) {
	  const parents = [];
	  const item = tree.getItem(key);
	  const hasChildNodes = item === null || item === void 0 ? void 0 : item.hasChildNodes;
	  let parent = (item === null || item === void 0 ? void 0 : item.parentKey) ? tree.getItem(item.parentKey) : null;

	  while (parent) {
	    parents.unshift(parent.key);

	    if (parent.parentKey) {
	      parent = tree.getItem(parent.parentKey);
	    } else {
	      parent = null;
	    }
	  }

	  for (const expandedKey of set) {
	    if (!parents.includes(expandedKey)) {
	      set.delete(expandedKey);
	    }
	  } // if item has child nodes and is not yet expanded, expand!


	  if (hasChildNodes && !set.has(key)) {
	    set.add(key);
	  }

	  return set;
	}

	function collapseKey(set, key) {
	  if (set.has(key)) {
	    set.delete(key);
	  }

	  return set;
	}

	const _excluded$g = ["items", "onClose", "closeOnPress", "size", "cursor"];
	function MenuList(_ref) {
	  let {
	    items,
	    onClose,
	    closeOnPress,
	    size,
	    cursor
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$g);

	  const state = useMenuState({
	    items: items,
	    children: MenuListChildren
	  });
	  const keyboardDelegate = _react.useMemo(() => new MenuKeyboardDelegate(state), [state]);
	  const handleOnClose = _react.useCallback(() => {
	    // make sure to collapse all submenus when menu close is triggered
	    state.collapseAllKeys();
	    if (onClose) onClose();
	  }, [onClose, state]);
	  return jsxRuntime.jsx(NoSsr, {
	    children: jsxRuntime.jsx(MenuContext.Provider, {
	      value: {
	        state,
	        keyboardDelegate,
	        closeOnPress,
	        onClose: handleOnClose,
	        size,
	        cursor
	      },
	      children: jsxRuntime.jsx(MenuNodes, Object.assign({}, props, {
	        className: "sl-menu",
	        autoFocus: true,
	        items: state.collection
	      }), void 0)
	    }, void 0)
	  }, void 0);
	}

	function MenuOption(item) {
	  return jsxRuntime.jsx(Item, {
	    id: item.id || item.value,
	    title: item.value || item.title
	  }, item.id || item.value || item.title);
	}

	let idCounter = 1;

	function MenuListChildren(item) {
	  if (isMenuGroup(item)) {
	    return jsxRuntime.jsx(Section$1, {
	      id: item.id,
	      title: item.title,
	      // @ts-expect-error
	      items: item.children || [],
	      // eslint-disable-next-line react/no-children-prop
	      children: MenuListChildren
	    }, item.id || item.title);
	  }

	  if (isMenuOptionGroup(item)) {
	    return jsxRuntime.jsx(Section$1, {
	      id: item.id,
	      title: item.title,
	      items: item.children || [],
	      // eslint-disable-next-line react/no-children-prop
	      children: MenuOption
	    }, item.id || item.title);
	  }

	  if (isMenuOption(item)) {
	    return MenuOption(item);
	  }

	  if (isMenuDivider(item)) {
	    return jsxRuntime.jsx(Item, {}, idCounter++);
	  }

	  return jsxRuntime.jsx(Item, {
	    id: item.id,
	    title: item.title,
	    childItems: item.children,
	    hasChildItems: !!(item.children && item.children.length),
	    // eslint-disable-next-line react/no-children-prop
	    children: MenuListChildren
	  }, item.id || item.title);
	}

	const _excluded$f = ["renderTrigger", "placement", "hideArrow", "onClose", "closeOnPress", "aria-label", "matchTriggerWidth"];
	const openMenus = {};
	let menuId = 0;
	function Menu(_ref) {
	  let {
	    renderTrigger,
	    placement = 'bottom',
	    hideArrow,
	    onClose,
	    closeOnPress = false,
	    'aria-label': ariaLabel,
	    matchTriggerWidth
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$f);

	  const id = _react.useMemo(() => `${++menuId}`, []);
	  _react.useEffect(() => {
	    // make sure to cleanup on unmount in case the menu is unmounted via a method other than official close handler
	    return () => {
	      if (openMenus[id]) delete openMenus[id];
	    };
	  }, [id]); // only one menu allowed open at a time

	  const closeOpenMenus = _react.useCallback(() => {
	    for (let hideMenuId in openMenus) {
	      if (hideMenuId !== id) {
	        openMenus[hideMenuId](true);
	        delete openMenus[hideMenuId];
	      }
	    }
	  }, [id]);

	  const onOpenChange = isOpen => {
	    if (isOpen) {
	      closeOpenMenus();
	      trackOpenMenu();
	    } else {
	      if (onClose) onClose();
	    }
	  }; // Create state based on the incoming props


	  const state = useMenuTriggerState(Object.assign({}, props, {
	    onOpenChange,
	    closeOnSelect: closeOnPress
	  }));

	  function trackOpenMenu() {
	    openMenus[id] = state.close;
	  } // Get props for the menu trigger and menu elements


	  const ref = _react.useRef();
	  const {
	    menuTriggerProps,
	    menuProps
	  } = useMenuTrigger({
	    type: 'menu'
	  }, state, ref);
	  const triggerElem = runIfFn(renderTrigger, {
	    isOpen: state.isOpen
	  });
	  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
	    children: [jsxRuntime.jsx(PressResponder, Object.assign({
	      "aria-label": ariaLabel
	    }, menuTriggerProps, {
	      ref: ref,
	      isPressed: state.isOpen,
	      children: triggerElem
	    }), void 0), state.isOpen ? jsxRuntime.jsx(Popover, {
	      isOpen: true,
	      placement: placement,
	      triggerRef: ref,
	      appearance: "minimal",
	      onClose: state.close,
	      showArrow: !hideArrow,
	      autoFocus: true,
	      restoreFocus: true,
	      contain: true,
	      type: "menu",
	      isNonModal: true,
	      matchTriggerWidth: matchTriggerWidth,
	      children: jsxRuntime.jsx(MenuList, Object.assign({}, props, menuProps, {
	        "aria-labelleddby": ariaLabel,
	        closeOnPress: closeOnPress,
	        onClose: state.close
	      }), void 0)
	    }, void 0) : null]
	  }, void 0);
	}

	const PanelContext = /*#__PURE__*/_react__namespace.createContext(null);
	const usePanelContext = () => {
	  return _react__namespace.useContext(PanelContext);
	};

	const _excluded$e = ["children"];
	const PanelContent = _ref => {
	  let {
	    children
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$e);

	  const {
	    appearance,
	    hasChildPanels
	  } = usePanelContext();
	  const isMinimal = appearance === 'minimal';
	  const isOutlined = appearance === 'outlined';
	  return jsxRuntime.jsx(Box, Object.assign({
	    p: 4,
	    className: "sl-panel__content",
	    bg: !isMinimal && !isOutlined && !hasChildPanels ? {
	      default: 'canvas-50',
	      inverted: 'transparent'
	    } : undefined
	  }, props, {
	    children: children
	  }), void 0);
	};

	const _excluded$d = ["children", "icon", "appearance", "rightComponent", "onClick", "bg", "tabIndex"];
	const titlebarVariants = {
	  default: {
	    bg: 'canvas-100',
	    borderColor: {
	      default: 'input',
	      focus: 'primary'
	    },
	    color: 'body'
	  },
	  minimal: {
	    pos: 'relative',
	    fontWeight: 'medium'
	  },
	  outlined: {
	    borderColor: {
	      default: 'input',
	      focus: 'primary'
	    }
	  }
	};
	const iconVariants = {
	  default: {
	    mr: 1.5
	  },
	  minimal: {
	    pos: 'absolute',
	    left: -4,
	    color: 'body',
	    fontWeight: 'normal',
	    lineHeight: 'none'
	  },
	  outlined: {
	    mr: 1.5
	  }
	};
	const PanelTitlebar = /*#__PURE__*/_react.memo(_ref => {
	  let {
	    children,
	    icon,
	    appearance = 'default',
	    rightComponent,
	    onClick,
	    bg,
	    tabIndex
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$d);

	  const isPadded = appearance === 'default' || appearance === 'outlined';
	  return jsxRuntime.jsx(FocusRing, {
	    focusRingClass: "sl-focus-ring",
	    children: jsxRuntime.jsxs(Flex, Object.assign({
	      className: "sl-panel__titlebar",
	      pos: "relative",
	      zIndex: {
	        focus: 10
	      },
	      align: "center",
	      fontSize: "base",
	      userSelect: "none",
	      lineHeight: "none",
	      pl: isPadded ? icon ? 3 : 4 : undefined,
	      pr: isPadded ? rightComponent ? 3 : 4 : undefined
	    }, titlebarVariants[appearance], {
	      bg: bg || titlebarVariants[appearance].bg
	    }, props, {
	      tabIndex: tabIndex,
	      children: [jsxRuntime.jsxs(Flex, {
	        flex: 1,
	        align: "center",
	        h: "lg",
	        onClick: onClick,
	        children: [icon && jsxRuntime.jsx(Flex, Object.assign({}, iconVariants[appearance], {
	          align: "center",
	          children: icon
	        }), void 0), children]
	      }, void 0), rightComponent]
	    }), void 0)
	  }, void 0);
	});

	const _excluded$c = ["appearance", "id", "hasChildPanels", "className", "children", "isCollapsible", "isOpen", "defaultIsOpen", "onChange", "rounded"];
	const Panel = _ref => {
	  let {
	    appearance = 'default',
	    id,
	    hasChildPanels,
	    className,
	    children,
	    isCollapsible = true,
	    isOpen: isOpenProp,
	    defaultIsOpen = false,
	    onChange,
	    rounded = appearance === 'outlined' ? true : undefined
	  } = _ref,
	      extraProps = _objectWithoutPropertiesLoose$1(_ref, _excluded$c);

	  const [isOpen, setIsOpen] = useControllableState({
	    value: isOpenProp,
	    defaultValue: defaultIsOpen,
	    onChange,
	    propsMap: {
	      value: 'isOpen',
	      defaultValue: 'defaultIsOpen',
	      onChange: 'onChange'
	    }
	  });
	  const isMinimal = appearance === 'minimal';
	  const isOutlined = appearance === 'outlined';
	  const isPanelOpen = !isCollapsible || isCollapsible && isOpen;
	  const handleChange = _react__namespace.useCallback(() => {
	    if (!isCollapsible) return;
	    setIsOpen(!isOpen);
	  }, [isCollapsible, isOpen, setIsOpen]);
	  const handleKeyDown = _react__namespace.useCallback(e => {
	    if (!isCollapsible) return;

	    if (e.keyCode === tsKeycodeEnum.Key.Space || e.keyCode === tsKeycodeEnum.Key.Enter) {
	      e.preventDefault();
	      handleChange();
	    }
	  }, [handleChange, isCollapsible]);
	  const [titlebarElement, ...contentElements] = _react__namespace.Children.toArray(children);

	  if (! /*#__PURE__*/_react__namespace.isValidElement(titlebarElement) || /*#__PURE__*/_react__namespace.isValidElement(titlebarElement) && titlebarElement.type !== PanelTitlebar) {
	    throw new Error('Panel.Titlebar must be the first child in a Panel');
	  }

	  let icon;

	  if (isCollapsible) {
	    if (isMinimal || isOutlined) {
	      icon = isPanelOpen ? 'chevron-down' : 'chevron-right';
	    } else {
	      icon = ['fas', isPanelOpen ? 'caret-down' : 'caret-right'];
	    }
	  }

	  const titlebarComponent = /*#__PURE__*/_react__namespace.cloneElement(titlebarElement, {
	    icon: icon ? jsxRuntime.jsx(Icon, {
	      icon: icon,
	      fixedWidth: true,
	      size: isMinimal ? 'xs' : isOutlined ? 'sm' : undefined
	    }, void 0) : undefined,
	    role: isCollapsible ? 'button' : undefined,
	    'aria-expanded': isCollapsible ? isPanelOpen : undefined,
	    'aria-controls': isCollapsible ? id : undefined,
	    cursor: isCollapsible ? 'pointer' : undefined,
	    tabIndex: isCollapsible ? 0 : undefined,
	    appearance,
	    onClick: handleChange,
	    onKeyDown: handleKeyDown
	  });
	  return jsxRuntime.jsx(PanelContext.Provider, {
	    value: {
	      appearance,
	      hasChildPanels
	    },
	    children: jsxRuntime.jsxs(Box, Object.assign({
	      w: "full",
	      className: cn__default["default"]('sl-panel', className),
	      outline: "none",
	      overflowX: !isMinimal && rounded ? 'hidden' : undefined,
	      overflowY: !isMinimal && rounded ? 'hidden' : undefined,
	      rounded: rounded ? 'lg' : undefined,
	      border: isOutlined ? true : undefined
	    }, extraProps, {
	      children: [titlebarComponent, isPanelOpen ? jsxRuntime.jsx(Box, {
	        className: "sl-panel__content-wrapper",
	        id: isCollapsible ? id : undefined,
	        role: isCollapsible ? 'region' : undefined,
	        borderT: isOutlined ? true : undefined,
	        children: contentElements
	      }, void 0) : null]
	    }), void 0)
	  }, void 0);
	};
	Panel.Titlebar = PanelTitlebar;
	Panel.Content = PanelContent;

	const _excluded$b = ["size"];
	const defaultElement$3 = 'p';
	const sizes$3 = {
	  leading: {
	    fontSize: 'paragraph-leading',
	    lineHeight: 'paragraph-leading'
	  },
	  default: {
	    fontSize: 'paragraph',
	    lineHeight: 'paragraph'
	  },
	  small: {
	    fontSize: 'paragraph-small',
	    lineHeight: 'paragraph-small'
	  },
	  tiny: {
	    fontSize: 'paragraph-tiny',
	    lineHeight: 'paragraph-tiny'
	  }
	};
	const Paragraph = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    size = 'default'
	  } = _ref,
	      restProps = _objectWithoutPropertiesLoose$1(_ref, _excluded$b);

	  /**
	   * Explicitely do not allow end user to override font and color... Paragraph should only be used for prose, not UI.
	   */
	  return jsxRuntime.jsx(Box, Object.assign({
	    as: defaultElement$3,
	    ref: ref
	  }, sizes$3[size], restProps, {
	    fontFamily: "prose",
	    color: "paragraph"
	  }), void 0);
	}));

	const styles$1 = twCss({
	  '@apply': CX('font-prose', 'leading-paragraph', 'antialiased'),

	  /* set the base font size */
	  'font-size': '16px',
	  '--fs-paragraph': '1em',

	  /* 14px at base 16px */
	  '--fs-paragraph-small': '0.875em',
	  '--fs-code': '0.875em',
	  '& > :first-child': {
	    'margin-top': '0px'
	  },
	  '& > :last-child': {
	    'margin-bottom': '0px'
	  },
	  '& h1': {
	    '@apply': CX.$combine(CX('text-heading'), CX.hover('hover:text-heading')),

	    /* 36px at base 16px */
	    'font-size': '2.25em',
	    '& a': {
	      '@apply': CX.$combine(CX('text-heading'), CX.hover('hover:text-heading'))
	    }
	  },
	  '& > h1': {
	    'margin-top': '0px',
	    'margin-bottom': '1.11em'
	  },
	  '& h2': {
	    '@apply': CX.$combine(CX('text-secondary'), CX.hover('hover:text-secondary')),

	    /* 28px at base 16px */
	    'font-size': '1.75em',
	    'line-height': 1.3333333,
	    '& a': {
	      '@apply': CX.$combine(CX('text-secondary'), CX.hover('hover:text-secondary'))
	    }
	  },
	  '& > h2': {
	    /* 40px at base 28px */
	    'margin-top': '1.428em',

	    /* 28px at base 28px */
	    'margin-bottom': '1em'
	  },
	  '& h3, & h4, & h5, & h6': {
	    '@apply': CX.$combine(CX('text-heading'), CX.hover('hover:text-heading')),
	    '& a': {
	      '@apply': CX.$combine(CX('text-heading'), CX.hover('hover:text-heading'))
	    }
	  },
	  '& h3': {
	    /* 20px at base 16px */
	    'font-size': '1.25em'
	  },
	  '& > h3': {
	    /* 40px at base 20px */
	    'margin-top': '2em',

	    /* 16px at base 20px */
	    'margin-bottom': '0.8em'
	  },
	  '& h4': {
	    /* 16px at base 16px */
	    'font-size': '1em'
	  },
	  '& > h4': {
	    /* 32px at base 16px */
	    'margin-top': '2em',

	    /* 8px at base 16px */
	    'margin-bottom': '0.5em'
	  },
	  '& h2 + *, & h3 + *, & h4 + *': {
	    'margin-top': '0px'
	  },
	  '& strong': {
	    '@apply': CX('font-semibold')
	  },

	  /* If re-work entire unit system around em/rem can remove, but for now need this for some of the components used in SMD */
	  '& .text-lg': {
	    /* 14px at base 16px */
	    'font-size': '0.875em'
	  },
	  '& p': {
	    '@apply': CX('text-paragraph'),

	    /* 16px at base 16px */
	    'margin-top': '1em',
	    'margin-bottom': '1em',
	    '&:first-child': {
	      'margin-top': '0px'
	    },
	    '&:last-child': {
	      'margin-bottom': '0px'
	    }
	  },
	  '& p > a > img': {
	    '@apply': CX('inline')
	  },
	  '& p, & table, & li, & figcaption, & caption': {
	    '& a': {
	      '@apply': CX.$combine(CX('text-link'), CX.hover('hover:text-link'))
	    }
	  },
	  '& hr': {
	    /* 16px at base 16px */
	    'margin-top': '1em',
	    'margin-bottom': '1em'
	  },
	  '& .sl-live-code': {
	    // @ts-expect-error will be flagged by type check for removal once negative val supported in CX
	    '@apply': CX('table-auto', 'w-full', '-mx-1'),

	    /* 20px at base 16px */
	    'margin-top': '1.25em',
	    'margin-bottom': '1.25em'
	  },
	  '& .sl-live-code__inner': {
	    '& > pre': {
	      'margin-top': '0px',
	      'margin-bottom': '0px'
	    }
	  },
	  '& .sl-callout': {
	    /* 24px at base 16px */
	    'margin-top': '1.5em',
	    'margin-bottom': '1.5em'
	  },
	  '& ol, & ul': {
	    '@apply': CX('leading-paragraph'),

	    /* 24px at base 16px */
	    'margin-top': '1.5em',
	    'margin-bottom': '1.5em',
	    '& li': {
	      /* 32px at base 16px */
	      'padding-left': '2em'
	    }
	  },
	  '& ol': {
	    '& li': {
	      position: 'relative',
	      '&::before': {
	        content: "counter(list-item) '.'",
	        position: 'absolute',

	        /* 12px at base 16px */
	        left: '0.75em'
	      }
	    }
	  },
	  '& ul:not(.contains-task-list)': {
	    '& li': {
	      '@apply': CX('relative'),
	      '&::before': {
	        '@apply': CX('bg-body', 'opacity-70', 'absolute'),
	        'border-radius': '50%',
	        content: '""',

	        /* 10px at base 16px */
	        top: '0.625em',

	        /* 12px at base 16px */
	        left: '0.75em',

	        /* 6px at base 16px */
	        height: '0.375em',
	        width: '0.375em'
	      }
	    }
	  },
	  '& li': {
	    '@apply': CX('my-1'),

	    /* 28px at base 16px */
	    'padding-left': '1.75em'
	  },
	  '& li p': {
	    /* 12px at base 16px */
	    'margin-top': '0.75em',
	    'margin-bottom': '0.75em'
	  },
	  '& li > *:first-child': {
	    'margin-top': '0px'
	  },
	  '& > ul p + *:last-child': {
	    /* 12px at base 16px */
	    'margin-bottom': '0.75em'
	  },
	  '& > ol p + *:last-child': {
	    /* 12px at base 16px */
	    'margin-bottom': '0.75em'
	  },
	  '& ul ul, & ul ol, & ol ul, & ol ol': {
	    '@apply': CX('my-0.5')
	  },
	  '& ul.contains-task-list': {
	    '& input': {
	      position: 'relative',
	      top: '1px',

	      /* -30px at base 16px */
	      'margin-left': '-1.875em',

	      /* 10px at base 16px */
	      'margin-right': '0.625em'
	    },
	    '& p': {
	      '@apply': CX('mt-0')
	    }
	  },
	  '& figure': {
	    /* 24px at base 16px */
	    'margin-top': '1.5em',
	    'margin-bottom': '1.5em',
	    '& img, & video, & figure': {
	      '@apply': CX('my-0')
	    },
	    '& > figcaption': {
	      '@apply': CX('text-paragraph-small', 'leading-paragraph-small', 'mt-2', 'text-muted', 'text-center', 'px-4'),
	      '& p': {
	        '@apply': CX('text-paragraph-small', 'leading-paragraph-small', 'mt-2', 'text-muted', 'text-center', 'px-4')
	      }
	    }
	  },
	  '& blockquote': {
	    '& p': {
	      /* 8px at base 16px */
	      'margin-top': '0.5em',
	      'margin-bottom': '0.5em'
	    }
	  },
	  '& table': {
	    // @ts-expect-error will be flagged by type check for removal once negative val supported in CX
	    '@apply': CX('table-auto', 'w-full', 'overflow-x-auto', '-mx-1', 'text-paragraph-small'),

	    /* 24px at base 16px */
	    'margin-bottom': '1.5em'
	  },
	  '& thead': {
	    '& th, & td': {
	      '@apply': CX('px-3', 'font-medium', 'py-2', 'uppercase', 'text-muted'),

	      /* 12px at base 14px */
	      'font-size': '0.857em',
	      '&:first-child': {
	        '@apply': CX('pl-1')
	      }
	    }
	  },
	  '& tbody': {
	    '@apply': CX('rounded-lg'),
	    'box-shadow': '0 0 0 1px var(--color-border, currentColor)',
	    '& tr': {
	      '@apply': CX('border-t'),
	      '&:first-child': {
	        'border-top': '0px'
	      },
	      '&:nth-child(even)': {
	        '@apply': CX('bg-canvas-50')
	      }
	    }
	  },
	  '& td': {
	    '@apply': CX('px-3', 'py-2.5', 'align-top'),

	    /* 12px at base 16px */
	    'margin-left': '0.75em',
	    'margin-right': '0.75em',

	    /* 10px at base 16px */
	    'margin-top': '0.625em',
	    'margin-bottom': '0.625em'
	  },
	  "& th:not([align='center'], [align='right']), & td:not([align='center'], [align='right'])": {
	    '@apply': CX('text-left')
	  },
	  '& .mermaid': {
	    /* 24px at base 16px */
	    'margin-top': '1.5em',
	    'margin-bottom': '1.5em',
	    '& > svg': {
	      '@apply': CX('rounded-lg', 'border'),
	      height: 'auto !important',

	      /* 20px at base 16px */
	      padding: '1.25em'
	    }
	  },
	  '& .sl-code-group': {
	    '& pre, & .mermaid': {
	      '@apply': CX('mt-0')
	    }
	  }
	});

	const _excluded$a = ["className"];
	const Prose = /*#__PURE__*/_react.memo(function Prose(_ref) {
	  let {
	    className
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$a);

	  return jsxRuntime.jsx(Box, Object.assign({
	    className: cn__default["default"]('sl-prose', className),
	    styled: styles$1
	  }, props), void 0);
	});

	twCss({});
	const styles = twCss({
	  '@apply': CX('antialiased'),
	  ':root': {
	    '--font-prose': "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
	    '--font-ui': "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
	    '--font-mono': "'SF Mono', ui-monospace, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
	    '--font-code': 'var(--font-mono)',
	    '--fs-paragraph-leading': '22px',
	    '--fs-paragraph': '16px',
	    '--fs-code': '14px',
	    '--fs-paragraph-small': '14px',
	    '--fs-paragraph-tiny': '12px',
	    '--lh-paragraph-leading': '1.875',
	    '--lh-paragraph': '1.625',
	    '--lh-code': '1.5',
	    '--lh-paragraph-small': '1.625',
	    '--lh-paragraph-tiny': '1.625',
	    '--color-code': 'var(--color-canvas-tint)',
	    '--color-on-code': 'var(--color-text-heading)'
	  }
	});

	const _excluded$9 = ["children"],
	      _excluded2$5 = ["children", "className", "style", "skipPreflight"];
	const rootThemeScope = Symbol('rootTheme');

	function MosaicProvider(_ref) {
	  let {
	    children
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$9);

	  try {
	    // if we're already in a mosaic provider context, we do not need to create a new one
	    // wrap in a fragment so that a JSX.Element typing is returned
	    const ctx = useMosaicContext(); // will have an assigned providerId if already present in the tree

	    if (ctx.providerId) {
	      return jsxRuntime.jsx(jsxRuntime.Fragment, {
	        children: children
	      }, void 0);
	    }
	  } catch (_a) {}

	  return jsxRuntime.jsx(SSRProvider, {
	    children: jsxRuntime.jsx(MosaicInnerProvider, Object.assign({}, props, {
	      children: children
	    }), void 0)
	  }, void 0);
	}

	function MosaicInnerProvider(_ref2) {
	  let {
	    children,
	    className,
	    style,
	    skipPreflight
	  } = _ref2,
	      mosaicContext = _objectWithoutPropertiesLoose$1(_ref2, _excluded2$5);

	  const providerId = `mosaic-provider-${useId()}`;
	  const providerRef = _react.useRef();
	  return jsxRuntime.jsx(ThemeProvider, {
	    ref: providerRef,
	    scope: rootThemeScope,
	    children: jsxRuntime.jsx(Box, {
	      className: className,
	      style: style,
	      styled: [styles, skipPreflight ? undefined : preflightCss],
	      id: providerId,
	      children: jsxRuntime.jsx(OverlayProvider, {
	        className: cn__default["default"](className),
	        style: style,
	        children: jsxRuntime.jsx(MosaicContext.Provider, {
	          value: Object.assign({}, defaultMosaicContext, mosaicContext, {
	            providerId,
	            providerRef
	          }),
	          children: children
	        }, void 0)
	      }, void 0)
	    }, void 0)
	  }, void 0);
	}

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	const $a7d0e5df3871fb1bfdb437cffdabab2a$export$radioGroupNames = new WeakMap();

	/**
	 * Provides the behavior and accessibility implementation for an individual
	 * radio button in a radio group.
	 * @param props - Props for the radio.
	 * @param state - State for the radio group, as returned by `useRadioGroupState`.
	 * @param ref - Ref to the HTML input element.
	 */
	function useRadio(props, state, ref) {
	  let {
	    value,
	    isRequired,
	    children,
	    'aria-label': ariaLabel,
	    'aria-labelledby': ariaLabelledby
	  } = props;
	  const isDisabled = props.isDisabled || state.isDisabled; // Individual radios cannot be readonly

	  const isReadOnly = state.isReadOnly;
	  let hasChildren = children != null;
	  let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;

	  if (!hasChildren && !hasAriaLabel) {
	    console.warn('If you do not provide children, you must specify an aria-label for accessibility');
	  }

	  let checked = state.selectedValue === value;

	  let onChange = e => {
	    e.stopPropagation();
	    state.setSelectedValue(value);
	  };

	  let {
	    pressProps
	  } = usePress({
	    isDisabled
	  });
	  let {
	    focusableProps
	  } = useFocusable(mergeProps(props, {
	    onFocus: () => state.setLastFocusedValue(value)
	  }), ref);
	  let interactions = mergeProps(pressProps, focusableProps);
	  let domProps = filterDOMProps(props, {
	    labelable: true
	  });
	  let tabIndex = state.lastFocusedValue === value || state.lastFocusedValue == null ? 0 : -1;

	  if (isDisabled) {
	    tabIndex = undefined;
	  }

	  return {
	    inputProps: mergeProps(domProps, _extends({}, interactions, {
	      type: 'radio',
	      name: $a7d0e5df3871fb1bfdb437cffdabab2a$export$radioGroupNames.get(state),
	      tabIndex,
	      disabled: isDisabled,
	      'aria-readonly': isReadOnly || undefined,
	      required: isRequired,
	      checked,
	      value,
	      onChange
	    }))
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for a radio group component.
	 * Radio groups allow users to select a single item from a list of mutually exclusive options.
	 * @param props - Props for the radio group.
	 * @param state - State for the radio group, as returned by `useRadioGroupState`.
	 */
	function useRadioGroup(props, state) {
	  let {
	    name,
	    validationState,
	    isReadOnly,
	    isRequired,
	    isDisabled,
	    orientation = 'vertical'
	  } = props;
	  let {
	    direction
	  } = useLocale();
	  let {
	    labelProps,
	    fieldProps
	  } = useLabel(_extends({}, props, {
	    // Radio group is not an HTML input element so it
	    // shouldn't be labeled by a <label> element.
	    labelElementType: 'span'
	  }));
	  let domProps = filterDOMProps(props, {
	    labelable: true
	  }); // When the radio group loses focus, reset the focusable radio to null if
	  // there is no selection. This allows tabbing into the group from either
	  // direction to go to the first or last radio.

	  let {
	    focusWithinProps
	  } = useFocusWithin({
	    onBlurWithin() {
	      if (!state.selectedValue) {
	        state.setLastFocusedValue(null);
	      }
	    }

	  });

	  let onKeyDown = e => {
	    let nextDir;

	    switch (e.key) {
	      case 'ArrowRight':
	        if (direction === 'rtl' && orientation !== 'vertical') {
	          nextDir = 'prev';
	        } else {
	          nextDir = 'next';
	        }

	        break;

	      case 'ArrowLeft':
	        if (direction === 'rtl' && orientation !== 'vertical') {
	          nextDir = 'next';
	        } else {
	          nextDir = 'prev';
	        }

	        break;

	      case 'ArrowDown':
	        nextDir = 'next';
	        break;

	      case 'ArrowUp':
	        nextDir = 'prev';
	        break;

	      default:
	        return;
	    }

	    e.preventDefault();
	    let walker = getFocusableTreeWalker(e.currentTarget, {
	      from: e.target
	    });
	    let nextElem;

	    if (nextDir === 'next') {
	      nextElem = walker.nextNode();

	      if (!nextElem) {
	        walker.currentNode = e.currentTarget;
	        nextElem = walker.firstChild();
	      }
	    } else {
	      nextElem = walker.previousNode();

	      if (!nextElem) {
	        walker.currentNode = e.currentTarget;
	        nextElem = walker.lastChild();
	      }
	    }

	    if (nextElem) {
	      // Call focus on nextElem so that keyboard navigation scrolls the radio into view
	      nextElem.focus();
	      state.setSelectedValue(nextElem.value);
	    }
	  };

	  let groupName = useId(name);
	  $a7d0e5df3871fb1bfdb437cffdabab2a$export$radioGroupNames.set(state, groupName);
	  return {
	    radioGroupProps: mergeProps(domProps, _extends({
	      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
	      role: 'radiogroup',
	      onKeyDown,
	      'aria-invalid': validationState === 'invalid' || undefined,
	      'aria-errormessage': props['aria-errormessage'],
	      'aria-readonly': isReadOnly || undefined,
	      'aria-required': isRequired || undefined,
	      'aria-disabled': isDisabled || undefined,
	      'aria-orientation': orientation
	    }, fieldProps, focusWithinProps)),
	    labelProps
	  };
	}

	const RadioContext = /*#__PURE__*/_react__namespace.createContext(undefined);
	function useRadioContext() {
	  return _react__namespace.useContext(RadioContext);
	}

	const variants$2 = {
	  default: {
	    stroke: 'var(--color-text)',
	    active: {
	      stoke: 'var(--color-primary)'
	    }
	  },
	  success: {
	    stroke: 'var(--color-success)',
	    color: 'success-dark',
	    active: {
	      stoke: 'var(--color-success)'
	    }
	  },
	  warning: {
	    stroke: 'var(--color-warning)',
	    color: 'warning-dark',
	    active: {
	      stoke: 'var(--color-warning)'
	    }
	  },
	  danger: {
	    stroke: 'var(--color-danger)',
	    color: 'danger-dark',
	    active: {
	      stoke: 'var(--color-danger)'
	    }
	  }
	};
	const sizes$2 = {
	  lg: {
	    fontSize: 'xl',
	    svgHeight: 16,
	    svgWidth: 16,
	    svgStrokeWidth: 2
	  },
	  md: {
	    fontSize: 'lg',
	    svgHeight: 14,
	    svgWidth: 14,
	    svgStrokeWidth: 2
	  },
	  sm: {
	    fontSize: 'base',
	    svgHeight: 12,
	    svgWidth: 12,
	    svgStrokeWidth: 2
	  }
	};

	const _excluded$8 = ["disabled"];
	const Radio = /*#__PURE__*/_react.forwardRef(function Radio(_ref, ref) {
	  let {
	    disabled
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$8);

	  const {
	    children
	  } = props;
	  const isDisabled = props.isDisabled !== void 0 ? props.isDisabled : disabled;
	  const state = useRadioContext();
	  const fallbackRef = _react.useRef();
	  const inputRef = ref || fallbackRef;
	  const {
	    inputProps
	  } = useRadio(Object.assign({}, props, {
	    isDisabled
	  }), state, inputRef);
	  const {
	    name,
	    size,
	    intent
	  } = props;
	  const {
	    isFocusVisible,
	    focusProps
	  } = useFocusRing();
	  const isSelected = state.selectedValue === props.value;
	  const strokeWidth = isSelected ? sizes$2[size].svgStrokeWidth * 2 : sizes$2[size].svgStrokeWidth;
	  inputProps.name = name !== null && name !== void 0 ? name : inputProps.name;
	  return jsxRuntime.jsxs(Flex, {
	    as: "label",
	    alignItems: "center",
	    className: cn__default["default"]('sl-radio-group__radio', {
	      'sl-radio-group__radio--disabled': isDisabled
	    }),
	    children: [jsxRuntime.jsx(VisuallyHidden, {
	      children: jsxRuntime.jsx("input", Object.assign({}, inputProps, focusProps, {
	        ref: inputRef
	      }), void 0)
	    }, void 0), jsxRuntime.jsx(Flex, {
	      flexDirection: 'col',
	      justifyContent: 'center',
	      children: jsxRuntime.jsx("svg", {
	        width: sizes$2[size].svgWidth,
	        height: sizes$2[size].svgHeight,
	        "aria-hidden": "true",
	        style: {
	          marginRight: 4
	        },
	        className: isFocusVisible ? 'sl-svg-focus' : '',
	        children: jsxRuntime.jsx("circle", {
	          cx: sizes$2[size].svgWidth / 2,
	          cy: sizes$2[size].svgHeight / 2,
	          r: sizes$2[size].svgHeight / 3 - 1,
	          fill: "var(--color-canvas)",
	          strokeWidth: strokeWidth,
	          stroke: isSelected ? variants$2[intent].active.stoke : variants$2[intent].stroke
	        }, void 0)
	      }, void 0)
	    }, void 0), jsxRuntime.jsx(Box, {
	      fontSize: sizes$2[size].fontSize,
	      fontWeight: 'semibold',
	      children: children
	    }, void 0)]
	  }, void 0);
	});

	let $eaf77ba5e143129c6bb329a6e66020d3$var$instance = Math.round(Math.random() * 10000000000);
	let $eaf77ba5e143129c6bb329a6e66020d3$var$i = 0;
	/**
	 * Provides state management for a radio group component. Provides a name for the group,
	 * and manages selection and focus state.
	 */

	function useRadioGroupState(props) {
	  // Preserved here for backward compatibility. React Aria now generates the name instead of stately.
	  let name = _react.useMemo(() => props.name || "radio-group-" + $eaf77ba5e143129c6bb329a6e66020d3$var$instance + "-" + ++$eaf77ba5e143129c6bb329a6e66020d3$var$i, [props.name]);
	  let [selectedValue, setSelected] = useControlledState(props.value, props.defaultValue, props.onChange);
	  let [lastFocusedValue, setLastFocusedValue] = _react.useState(null);

	  let setSelectedValue = value => {
	    if (!props.isReadOnly && !props.isDisabled) {
	      setSelected(value);
	    }
	  };

	  return {
	    name,
	    selectedValue,
	    setSelectedValue,
	    lastFocusedValue,
	    setLastFocusedValue,
	    isDisabled: props.isDisabled || false,
	    isReadOnly: props.isReadOnly || false
	  };
	}

	const radioGroupCss = twCss({
	  '.sl-svg-focus': {
	    '-webkit-filter': 'drop-shadow(0px 0px 1px hsla(var(--primary-h), 80%, 51%, 0.9))',
	    filter: 'drop-shadow(0px 0px 1px hsla(var(--primary-h), 80%, 51%, 0.9))'
	  },
	  '.sl-radio-group__radio': {
	    '@apply': CX.hover('hover:cursor-pointer')
	  },
	  '.sl-radio-group__radio--disabled': {
	    '@apply': CX.$combine(CX('opacity-60'), CX.hover('hover:cursor-not-allowed'))
	  }
	});

	const _excluded$7 = ["intent", "size", "orientation", "name", "className", "label", "isDisabled", "children"];
	const defaultElement$2 = 'div';
	const RadioGroup = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    intent = 'default',
	    size = 'md',
	    orientation = 'vertical',
	    name,
	    className,
	    label,
	    isDisabled,
	    children
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$7);

	  let state = useRadioGroupState(props);
	  let {
	    radioGroupProps,
	    labelProps
	  } = useRadioGroup({
	    label
	  }, state);
	  const variant = Object.assign({}, variants$2.default, variants$2[intent]);
	  const childrenWithProps = _react__namespace.Children.map(children, child => {
	    if ( /*#__PURE__*/_react__namespace.isValidElement(child)) {
	      return /*#__PURE__*/_react__namespace.cloneElement(child, Object.assign({
	        intent,
	        variant,
	        name,
	        size,
	        isDisabled
	      }, child.props));
	    }

	    return child;
	  });
	  const radioBoxProps = {
	    color: variant.color
	  };
	  return jsxRuntime.jsxs(Stack, Object.assign({
	    as: defaultElement$2,
	    direction: orientation,
	    ref: ref,
	    className: cn__default["default"]('sl-radio-group', className),
	    spacing: 2,
	    styled: radioGroupCss
	  }, radioGroupProps, radioBoxProps, props, {
	    children: [label && jsxRuntime.jsx(Box, {
	      pr: orientation === 'horizontal' ? 3 : undefined,
	      children: jsxRuntime.jsx("span", Object.assign({}, labelProps, {
	        children: label
	      }), void 0)
	    }, void 0), jsxRuntime.jsx(RadioContext.Provider, {
	      value: state,
	      children: childrenWithProps
	    }, void 0)]
	  }), void 0);
	}));

	/**
	 * Provides the behavior and accessibility implementation for a select component.
	 * A select displays a collapsible list of options and allows a user to select one of them.
	 * @param props - Props for the select.
	 * @param state - State for the select, as returned by `useListState`.
	 */
	function useSelect(props, state, ref) {
	  let {
	    keyboardDelegate,
	    isDisabled
	  } = props; // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
	  // When virtualized, the layout object will be passed in as a prop and override this.

	  let collator = useCollator({
	    usage: 'search',
	    sensitivity: 'base'
	  });
	  let delegate = _react.useMemo(() => keyboardDelegate || new ListKeyboardDelegate(state.collection, state.disabledKeys, null, collator), [keyboardDelegate, state.collection, state.disabledKeys, collator]);
	  let {
	    menuTriggerProps,
	    menuProps
	  } = useMenuTrigger({
	    isDisabled,
	    type: 'listbox'
	  }, state, ref);

	  let onKeyDown = e => {
	    switch (e.key) {
	      case 'ArrowLeft':
	        {
	          // prevent scrolling containers
	          e.preventDefault();
	          let key = state.selectedKey != null ? delegate.getKeyAbove(state.selectedKey) : delegate.getFirstKey();

	          if (key) {
	            state.setSelectedKey(key);
	          }

	          break;
	        }

	      case 'ArrowRight':
	        {
	          // prevent scrolling containers
	          e.preventDefault();
	          let key = state.selectedKey != null ? delegate.getKeyBelow(state.selectedKey) : delegate.getFirstKey();

	          if (key) {
	            state.setSelectedKey(key);
	          }

	          break;
	        }
	    }
	  };

	  let {
	    typeSelectProps
	  } = useTypeSelect({
	    keyboardDelegate: delegate,
	    selectionManager: state.selectionManager,

	    onTypeSelect(key) {
	      state.setSelectedKey(key);
	    }

	  });
	  let {
	    labelProps,
	    fieldProps
	  } = useLabel(_extends({}, props, {
	    labelElementType: 'span'
	  }));
	  typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
	  delete typeSelectProps.onKeyDownCapture;
	  let domProps = filterDOMProps(props, {
	    labelable: true
	  });
	  let triggerProps = mergeProps(typeSelectProps, menuTriggerProps, fieldProps);
	  let valueId = useId();
	  return {
	    labelProps: _extends({}, labelProps, {
	      onClick: () => {
	        if (!props.isDisabled) {
	          ref.current.focus(); // Show the focus ring so the user knows where focus went

	          setInteractionModality('keyboard');
	        }
	      }
	    }),
	    triggerProps: mergeProps(domProps, _extends({}, triggerProps, {
	      onKeyDown: chain(triggerProps.onKeyDown, onKeyDown, props.onKeyDown),
	      onKeyUp: props.onKeyUp,
	      'aria-labelledby': [triggerProps['aria-labelledby'], triggerProps['aria-label'] && !triggerProps['aria-labelledby'] ? triggerProps.id : null, valueId].filter(Boolean).join(' '),

	      onFocus(e) {
	        if (state.isFocused) {
	          return;
	        }

	        if (props.onFocus) {
	          props.onFocus(e);
	        }

	        state.setFocused(true);
	      },

	      onBlur(e) {
	        if (state.isOpen) {
	          return;
	        }

	        if (props.onBlur) {
	          props.onBlur(e);
	        }

	        state.setFocused(false);
	      }

	    })),
	    valueProps: {
	      id: valueId
	    },
	    menuProps: _extends({}, menuProps, {
	      onBlur: e => {
	        if (e.currentTarget.contains(e.relatedTarget)) {
	          return;
	        }

	        if (props.onBlur) {
	          props.onBlur(e);
	        }

	        state.setFocused(false);
	      },
	      'aria-labelledby': [fieldProps['aria-labelledby'], triggerProps['aria-label'] && !fieldProps['aria-labelledby'] ? triggerProps.id : null].filter(Boolean).join(' ')
	    })
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for a hidden `<select>` element, which
	 * can be used in combination with `useSelect` to support browser form autofill, mobile form
	 * navigation, and native HTML form submission.
	 */
	function useHiddenSelect(props, state, triggerRef) {
	  var _state$selectedKey;

	  let {
	    name,
	    isDisabled
	  } = props;
	  let modality = useInteractionModality$1();
	  let {
	    visuallyHiddenProps
	  } = useVisuallyHidden$1(); // In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
	  // In Firefox, there must be a <label> to identify the <select> whereas other browsers
	  // seem to identify it just by surrounding text.
	  // The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
	  // 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
	  // non tabbable with tabIndex={-1}.
	  //
	  // In mobile browsers, there are next/previous buttons above the software keyboard for navigating
	  // between fields in a form. These only support native form inputs that are tabbable. In order to
	  // support those, an additional hidden input is used to marshall focus to the button. It is tabbable
	  // except when the button is focused, so that shift tab works properly to go to the actual previous
	  // input in the form. Using the <select> for this also works, but Safari on iOS briefly flashes
	  // the native menu on focus, so this isn't ideal. A font-size of 16px or greater is required to
	  // prevent Safari from zooming in on the input when it is focused.
	  //
	  // If the current interaction modality is null, then the user hasn't interacted with the page yet.
	  // In this case, we set the tabIndex to -1 on the input element so that automated accessibility
	  // checkers don't throw false-positives about focusable elements inside an aria-hidden parent.

	  return {
	    containerProps: _extends({}, visuallyHiddenProps, {
	      'aria-hidden': true
	    }),
	    inputProps: {
	      type: 'text',
	      tabIndex: modality == null || state.isFocused || state.isOpen ? -1 : 0,
	      style: {
	        fontSize: 16
	      },
	      onFocus: () => triggerRef.current.focus(),
	      disabled: isDisabled
	    },
	    selectProps: {
	      tabIndex: -1,
	      disabled: isDisabled,
	      name,
	      size: state.collection.size,
	      value: (_state$selectedKey = state.selectedKey) != null ? _state$selectedKey : '',
	      onChange: e => state.setSelectedKey(e.target.value)
	    }
	  };
	}
	/**
	 * Renders a hidden native `<select>` element, which can be used to support browser
	 * form autofill, mobile form navigation, and native form submission.
	 */

	function HiddenSelect(props) {
	  let {
	    state,
	    triggerRef,
	    label,
	    name,
	    isDisabled
	  } = props;
	  let {
	    containerProps,
	    inputProps,
	    selectProps
	  } = useHiddenSelect(props, state, triggerRef); // If used in a <form>, use a hidden input so the value can be submitted to a server.
	  // If the collection isn't too big, use a hidden <select> element for this so that browser
	  // autofill will work. Otherwise, use an <input type="hidden">.

	  if (state.collection.size <= 300) {
	    return /*#__PURE__*/_react__default["default"].createElement("div", containerProps, /*#__PURE__*/_react__default["default"].createElement("input", inputProps), /*#__PURE__*/_react__default["default"].createElement("label", null, label, /*#__PURE__*/_react__default["default"].createElement("select", selectProps, /*#__PURE__*/_react__default["default"].createElement("option", null), [...state.collection.getKeys()].map(key => {
	      let item = state.collection.getItem(key);

	      if (item.type === 'item') {
	        return /*#__PURE__*/_react__default["default"].createElement("option", {
	          key: item.key,
	          value: item.key
	        }, item.textValue);
	      }
	    }))));
	  } else if (name) {
	    return /*#__PURE__*/_react__default["default"].createElement("input", {
	      type: "hidden",
	      name: name,
	      disabled: isDisabled,
	      value: state.selectedKey
	    });
	  }

	  return null;
	}

	/**
	 * Provides state management for a select component. Handles building a collection
	 * of items from props, handles the open state for the popup menu, and manages
	 * multiple selection state.
	 */
	function useSelectState(props) {
	  let triggerState = useMenuTriggerState(props);
	  let listState = useSingleSelectListState(_extends({}, props, {
	    onSelectionChange: key => {
	      if (props.onSelectionChange != null) {
	        props.onSelectionChange(key);
	      }

	      triggerState.close();
	    }
	  }));
	  let [isFocused, setFocused] = _react.useState(false);
	  return _extends({}, listState, triggerState, {
	    open() {
	      // Don't open if the collection is empty.
	      if (listState.collection.size !== 0) {
	        triggerState.open();
	      }
	    },

	    toggle(focusStrategy) {
	      if (listState.collection.size !== 0) {
	        triggerState.toggle(focusStrategy);
	      }
	    },

	    isFocused,
	    setFocused
	  });
	}

	// See examples of getCollectionNode https://github.com/adobe/react-spectrum/search?q=getCollectionNode
	const SelectAction = _props => {
	  return null;
	};
	const isSelectAction = item => {
	  return item && typeof item === 'object' && item.hasOwnProperty('onPress') ? true : false;
	};

	SelectAction.getCollectionNode = function* getCollectionNode(props) {
	  const {
	    label
	  } = props;
	  const textValue = label || '';
	  yield {
	    type: 'item',
	    key: label,
	    props,
	    rendered: textValue,
	    textValue,
	    'aria-label': props['aria-label'],
	    hasChildNodes: false
	  };
	};

	// See examples of getCollectionNode https://github.com/adobe/react-spectrum/search?q=getCollectionNode
	const SelectOption = _props => {
	  return null;
	};
	const isSelectOption = item => {
	  return item && typeof item === 'object' && item.hasOwnProperty('value') ? true : false;
	};

	SelectOption.getCollectionNode = function* getCollectionNode(props) {
	  const {
	    value,
	    label
	  } = props;
	  const textValue = (typeof label === 'string' ? label : '') || props['aria-label'] || value || '';
	  yield {
	    type: 'item',
	    key: String(value) || label || 'empty',
	    props,
	    rendered: label || value,
	    textValue,
	    'aria-label': props['aria-label'],
	    hasChildNodes: false
	  };
	};

	function SelectSection(props) {
	  return null;
	}
	const isSelectSection = item => {
	  return item && typeof item === 'object' && item.hasOwnProperty('options') ? true : false;
	};

	SelectSection.getCollectionNode = function* getCollectionNode(props) {
	  const {
	    children,
	    options
	  } = props;
	  yield {
	    key: props.id || props.title,
	    type: 'section',
	    hasChildNodes: true,
	    rendered: props.title,
	    props,
	    'aria-label': props['aria-label'],

	    *childNodes() {
	      if (typeof children === 'function') {
	        if (!options) {
	          throw new Error('SelectSection props.options is missing');
	        }

	        for (let item of options) {
	          yield {
	            type: 'item',
	            value: item,
	            renderer: children
	          };
	        }
	      } else {
	        let items = [];
	        _react__namespace.Children.forEach(children, child => {
	          items.push({
	            type: 'item',
	            element: child
	          });
	        });
	        yield* items;
	      }
	    }

	  };
	};

	const _excluded$6 = ["flexGrow", "flex", "w", "size", "triggerTextPrefix", "options", "value", "defaultValue", "onChange", "isClearable", "placeholder", "appearance", "onOpen", "onClose", "isDisabled", "icon"],
	      _excluded2$4 = ["state", "minW", "options"],
	      _excluded3 = ["color"],
	      _excluded4 = ["color"],
	      _excluded5 = ["color"];

	function Select(_ref, ref) {
	  let {
	    flexGrow,
	    flex,
	    w,
	    size,
	    triggerTextPrefix,
	    options,
	    value,
	    defaultValue,
	    onChange,
	    isClearable,
	    placeholder = 'select an option',
	    appearance,
	    onOpen,
	    onClose,
	    isDisabled,
	    icon
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$6);

	  var _a;

	  const listboxRef = _react.useRef();

	  const _triggerRef = _react.useRef();

	  const triggerRef = useFocusableRef(ref) || _triggerRef; // @ts-expect-error these ref typings are wonk


	  const unwrappedTriggerRef = useUnwrapDOMRef(triggerRef);
	  const onOpenChange = _react.useCallback($isOpen => {
	    if ($isOpen && onOpen) onOpen();
	    if (!$isOpen && onClose) onClose();
	  }, [onClose, onOpen]);

	  function onSelectionChange(key) {
	    if (onChange) {
	      const item = state.collection.getItem(key); // here we make sure to pass as null when falsey, so that Select mode does not change from controlled to uncontrolled

	      onChange(item ? item.props.value : null);
	    }
	  }

	  const idAssigner = _react.useMemo(() => createItemIdAssigner(), []);
	  const optionsWithids = _react.useMemo(() => idAssigner(options), [idAssigner, options]);
	  const [disabledKeys, setDisabledKeys] = _react.useState([]); // Create state based on the incoming props

	  const state = useSelectState({
	    selectedKey: value,
	    defaultSelectedKey: defaultValue,
	    onSelectionChange,
	    isDisabled,
	    placeholder,
	    items: optionsWithids,
	    children: generateListChildren,
	    onOpenChange,
	    disabledKeys
	  });
	  const computedDisabledKeys = useCollectionKeyAccumulator(state.collection, 'isDisabled', true);
	  _react__namespace.useEffect(() => {
	    setDisabledKeys(computedDisabledKeys);
	  }, [computedDisabledKeys]);
	  const clearSelection = _react.useCallback(() => {
	    if (isClearable) {
	      state.setSelectedKey(null);
	    }
	  }, [isClearable, state]);
	  const {
	    triggerProps,
	    menuProps
	  } = useSelect({
	    selectedKey: value,
	    defaultSelectedKey: defaultValue,
	    isDisabled,
	    disallowEmptySelection: true,
	    placeholder,
	    items: optionsWithids,
	    children: generateListChildren,
	    'aria-label': props['aria-label']
	  }, state, unwrappedTriggerRef);
	  /**
	   * Menu list items have a fixed height and padding, we can use
	   * this information to adjust menu location so that active item
	   * is focused on center, where the user's mouse is.
	   *
	   * This approach does not take <Section /> into account, or overflow / scrolling. Depending on need, we
	   * might want to put effort into a more robust implementation at a later date.
	   */

	  const [buttonWidth] = useSize__default["default"](unwrappedTriggerRef);
	  const selectedIndex = ((_a = state.selectedItem) === null || _a === void 0 ? void 0 : _a.index) || 0;
	  const offset = _react.useMemo(() => computePopoverOffset(size, options, selectedIndex), [size, options, selectedIndex]);
	  const crossOffset = size === 'sm' ? -21 : -17;

	  const triggerElem = jsxRuntime.jsx(_FieldButton, Object.assign({}, triggerProps, {
	    size: size,
	    disabled: isDisabled,
	    placeholder: placeholder,
	    onClear: !isDisabled && isClearable ? clearSelection : undefined,
	    appearance: appearance,
	    w: "full",
	    // @ts-expect-error these ref typings are wonk
	    ref: triggerRef,
	    icon: icon,
	    children: state.selectedItem ? triggerTextPrefix ? `${triggerTextPrefix}${state.selectedItem.rendered}` : state.selectedItem.rendered : undefined
	  }), void 0);

	  return jsxRuntime.jsxs(Box, {
	    className: "sl-select",
	    pos: "relative",
	    flexGrow: flexGrow,
	    flex: flex,
	    w: w,
	    children: [jsxRuntime.jsx(HiddenSelect, {
	      state: state,
	      triggerRef: unwrappedTriggerRef,
	      name: props.name
	    }, void 0), jsxRuntime.jsx(Popover, {
	      triggerRef: unwrappedTriggerRef,
	      scrollRef: listboxRef,
	      isOpen: state.isOpen,
	      onClose: state.close,
	      offset: offset,
	      crossOffset: crossOffset,
	      placement: "bottom left",
	      shouldFlip: true,
	      renderTrigger: triggerElem,
	      appearance: "minimal",
	      type: "listbox",
	      isNonModal: true,
	      children: jsxRuntime.jsx(ListBoxPopup, Object.assign({}, menuProps, {
	        ref: listboxRef,
	        options: optionsWithids,
	        state: state,
	        minW: buttonWidth + Math.abs(crossOffset) + 4
	      }), void 0)
	    }, void 0)]
	  }, void 0);
	}

	const _Select = /*#__PURE__*/_react.forwardRef(Select);
	const ListBoxPopup = /*#__PURE__*/_react.forwardRef((_ref2, ref) => {
	  let {
	    state,
	    minW,
	    options
	  } = _ref2,
	      otherProps = _objectWithoutPropertiesLoose$1(_ref2, _excluded2$4);

	  // Get props for the listbox
	  const {
	    listBoxProps
	  } = useListBox(Object.assign({
	    autoFocus: 'first',
	    shouldFocusWrap: true,
	    selectionMode: 'single',
	    items: options,
	    disallowEmptySelection: true
	  }, otherProps), state, ref); // pull color out, not needed and conflicting types

	  const _mergeProps = mergeProps(listBoxProps, otherProps),
	        restProps = _objectWithoutPropertiesLoose$1(_mergeProps, _excluded3);

	  const modality = useInteractionModality();
	  const pointerInteraction = modality === 'pointer';
	  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
	    children: [jsxRuntime.jsx(DismissButton, {
	      onDismiss: state.close
	    }, void 0), jsxRuntime.jsx(Box, Object.assign({}, restProps, {
	      ref: ref,
	      bg: "canvas-dialog",
	      style: {
	        minWidth: minW,
	        maxHeight: 'inherit'
	      },
	      py: 2,
	      styled: menuStyle({
	        withInteractions: pointerInteraction
	      }),
	      cursor: true,
	      overflowY: "auto",
	      noFocusRing: true,
	      children: [...state.collection].map(item => {
	        const {
	          type
	        } = item;

	        if (type === 'item') {
	          return jsxRuntime.jsx(SelectItem, {
	            item: item,
	            state: state
	          }, item.key);
	        }

	        if (type === 'section') {
	          return jsxRuntime.jsx(Section, {
	            item: item,
	            state: state
	          }, item.key);
	        }

	        if (type === 'placeholder') {
	          return jsxRuntime.jsx("div", {
	            // aria-selected isn't needed here since this option is not selectable.
	            role: "option",
	            children: "no items to select"
	          }, void 0);
	        }
	      })
	    }), void 0), jsxRuntime.jsx(DismissButton, {
	      onDismiss: state.close
	    }, void 0)]
	  }, void 0);
	});

	function Divider() {
	  const _useSeparator = useSeparator({
	    elementType: 'div'
	  }),
	        separatorProps = _objectWithoutPropertiesLoose$1(_useSeparator.separatorProps, _excluded4);

	  return jsxRuntime.jsx(Box, Object.assign({
	    my: 2,
	    h: "px",
	    bg: "canvas-200"
	  }, separatorProps), void 0);
	}

	function Section({
	  item: section,
	  state
	}) {
	  const _useListBoxSection = useListBoxSection({
	    heading: section.rendered,
	    'aria-label': section['aria-label']
	  }),
	        {
	    itemProps,
	    groupProps
	  } = _useListBoxSection,
	        headingProps = _objectWithoutPropertiesLoose$1(_useListBoxSection.headingProps, _excluded5);

	  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
	    children: [section.key !== state.collection.getFirstKey() && jsxRuntime.jsx(Divider, {}, void 0), jsxRuntime.jsxs("div", Object.assign({}, itemProps, {
	      children: [section.rendered && jsxRuntime.jsx(Box, Object.assign({}, headingProps, {
	        pl: 3,
	        pt: 0.5,
	        pb: 1,
	        textTransform: "uppercase",
	        color: "light",
	        cursor: true,
	        fontSize: "sm",
	        children: section.rendered
	      }), void 0), jsxRuntime.jsx("div", Object.assign({}, groupProps, {
	        children: Array.from(section.childNodes).map(node => {
	          let item;

	          if (node.type === 'item') {
	            item = jsxRuntime.jsx(SelectItem, {
	              item: node,
	              state: state
	            }, node.key);
	          } else {
	            item = null;
	          }

	          if (node.wrapper) {
	            item = node.wrapper(item);
	          }

	          return item;
	        })
	      }), void 0)]
	    }), void 0)]
	  }, void 0);
	}

	function SelectItem({
	  item,
	  state
	}) {
	  const ref = _react.useRef();
	  const {
	    key
	  } = item;
	  const {
	    selectionManager
	  } = state;
	  const isDisabled = state.disabledKeys.has(item.key);
	  const isSelected = selectionManager.isSelected(item.key);
	  const isFocused = selectionManager.focusedKey === key;
	  const {
	    optionProps
	  } = useOption({
	    key: item.key,
	    isDisabled,
	    isSelected,
	    shouldFocusOnHover: true
	  }, state, ref);
	  let props = {};

	  if (item.props.onPress) {
	    props = mergeProps(optionProps, {
	      onClick: () => {
	        if (isDisabled) return;
	        item.props.onPress();
	        state.close();
	      },
	      onKeyUp: e => {
	        if (e.key === 'Enter') {
	          if (isDisabled) return;
	          item.props.onPress();
	          state.close();
	        }
	      },
	      onKeyDown: null,
	      onMouseDown: null,
	      onPointerDown: null,
	      onPointerUp: null
	    });
	  } else {
	    props = mergeProps(optionProps);
	  }

	  return jsxRuntime.jsx(Internal_MenuItemRow, Object.assign({}, props, {
	    ref: ref,
	    title: item.rendered,
	    description: item.props.description,
	    isSelected: !!isSelected,
	    isDisabled: isDisabled,
	    meta: item.props.meta,
	    isFocused: isFocused
	  }), void 0);
	}

	function createItemIdAssigner() {
	  let counter = 0;
	  return function assignItemIds(items) {
	    const itemsWithIds = [];

	    for (const item of items) {
	      if (isSelectSection(item)) {
	        counter++;
	        itemsWithIds.push(Object.assign({
	          id: counter
	        }, item));
	      } else {
	        itemsWithIds.push(item);
	      }
	    }

	    return itemsWithIds;
	  };
	}

	function generateListChildren(item) {
	  if (isSelectSection(item)) {
	    return jsxRuntime.jsx(SelectSection, Object.assign({}, item, {
	      children: item => {
	        if (isSelectOption(item)) {
	          return jsxRuntime.jsx(SelectOption, Object.assign({}, item), void 0);
	        }

	        if (isSelectAction(item)) {
	          return jsxRuntime.jsx(SelectAction, Object.assign({}, item), void 0);
	        }
	      }
	    }), void 0);
	  }

	  if (isSelectOption(item)) {
	    return jsxRuntime.jsx(SelectOption, Object.assign({}, item), void 0);
	  }

	  if (isSelectAction(item)) {
	    return jsxRuntime.jsx(SelectAction, Object.assign({}, item), void 0);
	  }

	  return null;
	}

	function computePopoverOffset(size, options, selectedIndex) {
	  const baseOffset = size === 'sm' ? -32 : -37;

	  if (selectedIndex === 0) {
	    return baseOffset;
	  }

	  let offset = baseOffset;
	  const iterator = options2ElementsIterator(options);
	  let i = 0;

	  for (const element of iterator) {
	    if (element.type == 'separator') {
	      offset -= 17;
	    } else if (element.type === 'section-heading') {
	      offset -= 22;
	    } else {
	      if (i++ === selectedIndex) {
	        return offset;
	      }

	      offset -= estimateOptionHeight(element.option);
	    }
	  }

	  return offset;
	}

	function* options2ElementsIterator(options) {
	  let yieldSeparator = false;

	  for (const option of options) {
	    if (yieldSeparator) {
	      yieldSeparator = false;
	      yield {
	        type: 'separator'
	      };
	    }

	    if ('options' in option) {
	      yield {
	        type: 'section-heading'
	      };
	      yieldSeparator = true;

	      for (const sectionOption of option.options) {
	        yield {
	          type: 'item',
	          option: sectionOption
	        };
	      }
	    } else {
	      yield {
	        type: 'item',
	        option: option
	      };
	    }
	  }
	}

	function estimateOptionHeight(option) {
	  let height = 26;

	  if (option.description) {
	    height += 16;

	    if (option.description.length >= 40) {
	      height += 16;
	    }
	  }

	  return height;
	}

	const Step = ({
	  title,
	  index,
	  isActive,
	  completed,
	  className,
	  isLast
	}) => {
	  return jsxRuntime.jsxs(Flex, {
	    flex: isLast ? 'none' : 'initial',
	    flexGrow: isLast ? 0 : true,
	    alignItems: "center",
	    className: className,
	    children: [jsxRuntime.jsxs(Box, {
	      pos: "relative",
	      style: {
	        color: isActive || completed ? 'var(--color-primary-dark)' : 'var(--color-text-disabled)'
	      },
	      children: [jsxRuntime.jsx(Flex, {
	        bg: isActive ? 'primary-tint' : completed ? 'primary-dark' : 'canvas-100',
	        justifyContent: "center",
	        alignItems: "center",
	        w: 10,
	        h: 10,
	        rounded: "full",
	        color: completed ? 'on-primary' : null,
	        children: completed ? jsxRuntime.jsx(Icon, {
	          icon: "check"
	        }, void 0) : jsxRuntime.jsx("span", {
	          children: index
	        }, void 0)
	      }, void 0), jsxRuntime.jsx(Flex, {
	        pos: "absolute",
	        textAlign: "center",
	        left: -10,
	        top: 10,
	        h: 10,
	        style: {
	          width: 120
	        },
	        alignItems: "center",
	        justifyContent: "center",
	        children: title
	      }, void 0)]
	    }, void 0), jsxRuntime.jsx(Flex, {
	      flexGrow: true,
	      h: 0.5,
	      bg: completed ? 'primary-dark' : 'canvas-100'
	    }, void 0)]
	  }, void 0);
	};
	const Steps = /*#__PURE__*/_react.memo(function Steps(props) {
	  const items = _react__namespace.Children.toArray(props.children);
	  const current = props.current || 0;
	  const childrenWithProps = items.map((child, i) => {
	    if ( /*#__PURE__*/_react__namespace.isValidElement(child)) {
	      return /*#__PURE__*/_react__namespace.cloneElement(child, {
	        index: i + 1,
	        isActive: current === i,
	        completed: i < current,
	        isLast: i === items.length - 1
	      });
	    }

	    return child;
	  });
	  return jsxRuntime.jsx(Flex, {
	    w: "full",
	    fontSize: "base",
	    px: 10,
	    pb: 10,
	    className: props.className,
	    children: childrenWithProps
	  }, void 0);
	});

	/**
	 * Handles interactions for toggle elements, e.g. Checkboxes and Switches.
	 */
	function useToggle(props, state, ref) {
	  let {
	    isDisabled = false,
	    isRequired,
	    isReadOnly,
	    value,
	    name,
	    children,
	    'aria-label': ariaLabel,
	    'aria-labelledby': ariaLabelledby,
	    validationState = 'valid'
	  } = props;

	  let onChange = e => {
	    // since we spread props on label, onChange will end up there as well as in here.
	    // so we have to stop propagation at the lowest level that we care about
	    e.stopPropagation();
	    state.setSelected(e.target.checked);
	  };

	  let hasChildren = children != null;
	  let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;

	  if (!hasChildren && !hasAriaLabel) {
	    console.warn('If you do not provide children, you must specify an aria-label for accessibility');
	  } // This handles focusing the input on pointer down, which Safari does not do by default.


	  let {
	    pressProps
	  } = usePress({
	    isDisabled
	  });
	  let {
	    focusableProps
	  } = useFocusable(props, ref);
	  let interactions = mergeProps(pressProps, focusableProps);
	  let domProps = filterDOMProps(props, {
	    labelable: true
	  });
	  return {
	    inputProps: mergeProps(domProps, _extends({
	      'aria-invalid': validationState === 'invalid' || undefined,
	      'aria-errormessage': props['aria-errormessage'],
	      'aria-controls': props['aria-controls'],
	      'aria-readonly': isReadOnly || undefined,
	      onChange,
	      disabled: isDisabled,
	      required: isRequired,
	      value,
	      name,
	      type: 'checkbox'
	    }, interactions))
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for a switch component.
	 * A switch is similar to a checkbox, but represents on/off values as opposed to selection.
	 * @param props - Props for the switch.
	 * @param state - State for the switch, as returned by `useToggleState`.
	 * @param ref - Ref to the HTML input element.
	 */
	function useSwitch(props, state, ref) {
	  let {
	    inputProps
	  } = useToggle(props, state, ref);
	  let {
	    isSelected
	  } = state;
	  return {
	    inputProps: _extends({}, inputProps, {
	      role: 'switch',
	      checked: isSelected,
	      'aria-checked': isSelected
	    })
	  };
	}

	/**
	 * Provides state management for toggle components like checkboxes and switches.
	 */
	function useToggleState(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  let {
	    isReadOnly,
	    onChange
	  } = props; // have to provide an empty function so useControlledState doesn't throw a fit
	  // can't use useControlledState's prop calling because we need the event object from the change

	  let [isSelected, setSelected] = useControlledState(props.isSelected, props.defaultSelected || false, () => {});

	  function updateSelected(value) {
	    if (!isReadOnly) {
	      setSelected(value);

	      if (onChange) {
	        onChange(value);
	      }
	    }
	  }

	  function toggleState() {
	    if (!isReadOnly) {
	      setSelected(prev => {
	        let newVal = !prev;

	        if (onChange) {
	          onChange(newVal);
	        }

	        return newVal;
	      });
	    }
	  }

	  return {
	    isSelected,
	    setSelected: updateSelected,
	    toggle: toggleState
	  };
	}

	const switchCss = twCss({
	  '@apply': CX('relative', 'block', 'select-none'),
	  '.sl-switch__indicator': {
	    transition: 'background-color 0.1s cubic-bezier(0.4, 1, 0.75, 0.9)',
	    '& .sl-switch__icon': {
	      visibility: 'hidden'
	    },
	    '&::before': {
	      '@apply': CX('bg-canvas'),
	      content: '""',
	      'border-radius': '50%',
	      height: 'calc(100% - 4px)',
	      width: 'calc(50% - 4px)',
	      left: '0px',
	      margin: '2px',
	      position: 'absolute',
	      transition: 'left 0.1s cubic-bezier(0.4, 1, 0.75, 0.9)'
	    }
	  },
	  'input:checked': {
	    '&:disabled': {
	      '& ~ .sl-switch__indicator': {
	        '@apply': CX('bg-primary-light')
	      }
	    },
	    '& ~ .sl-switch__indicator': {
	      '@apply': CX('bg-primary'),
	      '& .sl-switch__icon': {
	        visibility: 'visible'
	      },
	      '&::before': {
	        left: '50%'
	      }
	    }
	  }
	});

	const sizes$1 = {
	  lg: {
	    width: 12,
	    height: 6,
	    fontSize: 'lg'
	  },
	  md: {
	    width: 10,
	    height: 5,
	    fontSize: 'sm'
	  },
	  sm: {
	    width: 8,
	    height: 4,
	    fontSize: '2xs'
	  }
	};

	const _excluded$5 = ["size", "showIcon", "className", "isDisabled", "isSelected", "defaultSelected", "onChange"];
	const defaultElement$1 = 'input';
	const Switch = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    size = 'md',
	    showIcon = false,
	    className,
	    isDisabled,
	    isSelected,
	    defaultSelected,
	    onChange
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$5);

	  const fallbackRef = _react.useRef();
	  const inputRef = ref || fallbackRef;
	  const isDark = useThemeIsDark();
	  const state = useToggleState(Object.assign({
	    onChange,
	    isSelected,
	    defaultSelected
	  }, props));
	  const {
	    inputProps
	  } = useSwitch(Object.assign({
	    isDisabled
	  }, props), state, inputRef);
	  const {
	    matchedProps,
	    remainingProps
	  } = splitBoxProps(props);
	  let disabledProps = {};

	  if (isDisabled) {
	    disabledProps = {
	      bg: isDark ? 'canvas-100' : 'canvas-200',
	      cursor: 'not-allowed'
	    };
	  }

	  const checkboxProps = mergeProps(inputProps, {
	    color: undefined
	  });
	  return jsxRuntime.jsx(Box, Object.assign({
	    className: cn__default["default"]('sl-switch', className),
	    h: sizes$1[size].height,
	    w: sizes$1[size].width,
	    fontSize: sizes$1[size].fontSize,
	    styled: switchCss
	  }, matchedProps, remainingProps, {
	    children: jsxRuntime.jsxs(Box, {
	      as: "label",
	      pos: "absolute",
	      w: "full",
	      h: "full",
	      children: [jsxRuntime.jsx(Box, Object.assign({
	        ref: inputRef,
	        as: defaultElement$1,
	        pos: "absolute",
	        m: 0,
	        zIndex: -1,
	        top: 0,
	        left: 0,
	        opacity: 0,
	        disabled: isDisabled
	      }, checkboxProps), void 0), jsxRuntime.jsx(Box, Object.assign({
	        as: "span",
	        cursor: "pointer",
	        className: "sl-switch__indicator",
	        rounded: "full",
	        w: "full",
	        h: "full",
	        display: "block",
	        bg: isDark ? 'canvas-50' : 'canvas-500'
	      }, disabledProps, {
	        children: showIcon && jsxRuntime.jsx(Flex, {
	          className: "sl-switch__icon",
	          pos: "absolute",
	          align: "center",
	          style: {
	            top: 0,
	            bottom: 0,
	            left: 0,
	            lineHeight: 1
	          },
	          pl: 1,
	          color: isDark ? 'body' : 'canvas-pure',
	          children: jsxRuntime.jsx(Icon, {
	            icon: "check",
	            fixedWidth: true
	          }, void 0)
	        }, void 0)
	      }), void 0)]
	    }, void 0)
	  }), void 0);
	}));

	/*
	 * Copyright 2020 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 */
	const $c5c378b07d37fb3729fd37493414d657$export$tabsIds = new WeakMap();

	function $c5c378b07d37fb3729fd37493414d657$export$generateId(state, key, role) {
	  if (typeof key === 'string') {
	    key = key.replace(/\s+/g, '');
	  }

	  let baseId = $c5c378b07d37fb3729fd37493414d657$export$tabsIds.get(state);
	  return baseId + "-" + role + "-" + key;
	}

	/**
	 * Provides the behavior and accessibility implementation for a tab.
	 * When selected, the associated tab panel is shown.
	 */
	function useTab(props, state, ref) {
	  let {
	    key,
	    isDisabled: propsDisabled
	  } = props;
	  let {
	    selectionManager: manager,
	    selectedKey
	  } = state;
	  let isSelected = key === selectedKey;
	  let {
	    itemProps
	  } = useSelectableItem({
	    selectionManager: manager,
	    key,
	    ref
	  });
	  let isDisabled = propsDisabled || state.disabledKeys.has(key);
	  let {
	    pressProps
	  } = usePress(_extends({}, itemProps, {
	    isDisabled
	  }));
	  let tabId = $c5c378b07d37fb3729fd37493414d657$export$generateId(state, key, 'tab');
	  let tabPanelId = $c5c378b07d37fb3729fd37493414d657$export$generateId(state, key, 'tabpanel');
	  let {
	    tabIndex
	  } = pressProps;
	  return {
	    tabProps: _extends({}, pressProps, {
	      id: tabId,
	      'aria-selected': isSelected,
	      'aria-disabled': isDisabled || undefined,
	      'aria-controls': isSelected ? tabPanelId : undefined,
	      tabIndex: isDisabled ? undefined : tabIndex,
	      role: 'tab'
	    })
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for a tab panel. A tab panel is a container for
	 * the contents of a tab, and is shown when the tab is selected.
	 */
	function useTabPanel(props, state, ref) {
	  let [tabIndex, setTabIndex] = _react.useState(0); // The tabpanel should have tabIndex=0 when there are no tabbable elements within it.
	  // Otherwise, tabbing from the focused tab should go directly to the first tabbable element
	  // within the tabpanel.

	  _react.useLayoutEffect(() => {
	    if (ref != null && ref.current) {
	      let update = () => {
	        // Detect if there are any tabbable elements and update the tabIndex accordingly.
	        let walker = getFocusableTreeWalker(ref.current, {
	          tabbable: true
	        });
	        setTabIndex(walker.nextNode() ? undefined : 0);
	      };

	      update(); // Update when new elements are inserted, or the tabIndex/disabled attribute updates.

	      let observer = new MutationObserver(update);
	      observer.observe(ref.current, {
	        subtree: true,
	        childList: true,
	        attributes: true,
	        attributeFilter: ['tabIndex', 'disabled']
	      });
	      return () => {
	        observer.disconnect();
	      };
	    }
	  }, [ref]);
	  const id = $c5c378b07d37fb3729fd37493414d657$export$generateId(state, state == null ? void 0 : state.selectedKey, 'tabpanel');
	  const tabPanelProps = useLabels(_extends({}, props, {
	    id,
	    'aria-labelledby': $c5c378b07d37fb3729fd37493414d657$export$generateId(state, state == null ? void 0 : state.selectedKey, 'tab')
	  }));
	  return {
	    tabPanelProps: mergeProps(tabPanelProps, {
	      tabIndex,
	      role: 'tabpanel',
	      'aria-describedby': props['aria-describedby'],
	      'aria-details': props['aria-details']
	    })
	  };
	}

	class $ace72fda23df319bd9db38f00073d9$export$TabsKeyboardDelegate {
	  constructor(collection, direction, orientation, disabledKeys) {
	    if (disabledKeys === void 0) {
	      disabledKeys = new Set();
	    }

	    this.collection = void 0;
	    this.flipDirection = void 0;
	    this.disabledKeys = void 0;
	    this.orientation = void 0;
	    this.collection = collection;
	    this.flipDirection = direction === 'rtl' && orientation === 'horizontal';
	    this.orientation = orientation;
	    this.disabledKeys = disabledKeys;
	  }

	  getKeyLeftOf(key) {
	    if (this.flipDirection) {
	      return this.getNextKey(key);
	    } else {
	      if (this.orientation === 'horizontal') {
	        return this.getPreviousKey(key);
	      }

	      return null;
	    }
	  }

	  getKeyRightOf(key) {
	    if (this.flipDirection) {
	      return this.getPreviousKey(key);
	    } else {
	      if (this.orientation === 'horizontal') {
	        return this.getNextKey(key);
	      }

	      return null;
	    }
	  }

	  getKeyAbove(key) {
	    if (this.orientation === 'vertical') {
	      return this.getPreviousKey(key);
	    }

	    return null;
	  }

	  getKeyBelow(key) {
	    if (this.orientation === 'vertical') {
	      return this.getNextKey(key);
	    }

	    return null;
	  }

	  getFirstKey() {
	    let key = this.collection.getFirstKey();

	    if (this.disabledKeys.has(key)) {
	      key = this.getNextKey(key);
	    }

	    return key;
	  }

	  getLastKey() {
	    let key = this.collection.getLastKey();

	    if (this.disabledKeys.has(key)) {
	      key = this.getPreviousKey(key);
	    }

	    return key;
	  }

	  getNextKey(key) {
	    do {
	      key = this.collection.getKeyAfter(key);

	      if (key == null) {
	        key = this.collection.getFirstKey();
	      }
	    } while (this.disabledKeys.has(key));

	    return key;
	  }

	  getPreviousKey(key) {
	    do {
	      key = this.collection.getKeyBefore(key);

	      if (key == null) {
	        key = this.collection.getLastKey();
	      }
	    } while (this.disabledKeys.has(key));

	    return key;
	  }

	}

	/**
	 * Provides the behavior and accessibility implementation for a tab list.
	 * Tabs organize content into multiple sections and allow users to navigate between them.
	 */
	function useTabList(props, state, ref) {
	  let {
	    orientation = 'horizontal',
	    keyboardActivation = 'automatic'
	  } = props;
	  let {
	    collection,
	    selectionManager: manager,
	    disabledKeys
	  } = state;
	  let {
	    direction
	  } = useLocale();
	  let delegate = _react.useMemo(() => new $ace72fda23df319bd9db38f00073d9$export$TabsKeyboardDelegate(collection, direction, orientation, disabledKeys), [collection, disabledKeys, orientation, direction]);
	  let {
	    collectionProps
	  } = useSelectableCollection({
	    ref,
	    selectionManager: manager,
	    keyboardDelegate: delegate,
	    selectOnFocus: keyboardActivation === 'automatic',
	    disallowEmptySelection: true
	  }); // Compute base id for all tabs

	  let tabsId = useId();
	  $c5c378b07d37fb3729fd37493414d657$export$tabsIds.set(state, tabsId);
	  let tabListLabelProps = useLabels(_extends({}, props, {
	    id: tabsId
	  }));
	  return {
	    tabListProps: _extends({}, mergeProps(collectionProps, tabListLabelProps), {
	      role: 'tablist',
	      'aria-orientation': orientation,
	      tabIndex: undefined
	    })
	  };
	}

	const TabsContext = /*#__PURE__*/_react__namespace.createContext(null);

	const variants$1 = {
	  minimal: {
	    horizontal: {
	      regular: {
	        tabList: {},
	        tab: {
	          py: 2,
	          px: 3
	        }
	      },
	      compact: {
	        tabList: {},
	        tab: {
	          py: 1.5,
	          px: 2
	        }
	      }
	    },
	    vertical: {
	      regular: {
	        tabList: {},
	        tab: {
	          py: 1.5,
	          px: 3
	        }
	      },
	      compact: {
	        tabList: {},
	        tab: {
	          py: 1.5,
	          px: 3
	        }
	      }
	    }
	  },
	  line: {
	    horizontal: {
	      regular: {
	        tabList: {
	          borderB: 2
	        },
	        tab: {
	          mb: -0.5,
	          borderB: 2,
	          py: 2,
	          px: 4
	        }
	      },
	      compact: {
	        tabList: {
	          borderB: 2
	        },
	        tab: {
	          mb: -0.5,
	          borderB: 2,
	          py: 1.5,
	          px: 2
	        }
	      }
	    },
	    vertical: {
	      regular: {
	        tabList: {
	          borderR: 2
	        },
	        tab: {
	          mr: -0.5,
	          borderR: 2,
	          py: 2,
	          px: 4
	        }
	      },
	      compact: {
	        tabList: {
	          borderR: 2
	        },
	        tab: {
	          mr: -0.5,
	          borderR: 2,
	          py: 1.5,
	          px: 3
	        }
	      }
	    }
	  },
	  pill: {
	    horizontal: {
	      regular: {
	        tabList: {},
	        tab: {
	          py: 2,
	          px: 3,
	          rounded: 'lg'
	        }
	      },
	      compact: {
	        tabList: {},
	        tab: {
	          py: 1,
	          px: 2,
	          rounded: 'lg'
	        }
	      }
	    },
	    vertical: {
	      regular: {
	        tabList: {},
	        tab: {
	          py: 1.5,
	          px: 3,
	          rounded: 'lg'
	        }
	      },
	      compact: {
	        tabList: {},
	        tab: {
	          py: 1,
	          px: 2,
	          rounded: 'lg'
	        }
	      }
	    }
	  }
	};

	const _excluded$4 = ["color"],
	      _excluded2$3 = ["active", "hover"];
	const Tab = props => jsxRuntime.jsx(Item, Object.assign({}, props), void 0);
	Tab.getCollectionNode = Item.getCollectionNode;
	const IntentColorMap = {
	  default: {
	    color: 'muted',
	    selectedColor: 'primary',
	    bgTint: 'primary-tint',
	    selectedBg: 'primary',
	    selectedBorder: 'primary'
	  },
	  success: {
	    color: 'success',
	    selectedColor: 'success',
	    bgTint: 'success-tint',
	    selectedBg: 'success',
	    selectedBorder: 'success'
	  },
	  warning: {
	    color: 'warning',
	    selectedColor: 'warning',
	    bgTint: 'warning-tint',
	    selectedBg: 'warning',
	    selectedBorder: 'warning'
	  },
	  danger: {
	    color: 'danger',
	    selectedColor: 'danger',
	    bgTint: 'danger-tint',
	    selectedBg: 'danger',
	    selectedBorder: 'danger'
	  }
	};
	function TabImpl(props) {
	  var _a;

	  const {
	    item,
	    state,
	    density,
	    isDisabled: propsDisabled
	  } = props;
	  const {
	    key,
	    rendered,
	    index
	  } = item;
	  const intent = ((_a = item.props) === null || _a === void 0 ? void 0 : _a.intent) || 'default';
	  const isDisabled = propsDisabled || state.disabledKeys.has(key);
	  const tabContext = _react.useContext(TabsContext);
	  const {
	    tabsProps
	  } = tabContext;
	  const {
	    appearance,
	    orientation
	  } = tabsProps;
	  const isPill = appearance === 'pill';
	  const isLine = appearance === 'line';
	  const disabledKeys = state.disabledKeys; // sync `isDisabled` prop with tab list state disabled keys

	  _react__namespace.useEffect(() => {
	    if (propsDisabled && !disabledKeys.has(key)) {
	      disabledKeys.add(key);
	    } else if (!propsDisabled && disabledKeys.has(key)) {
	      disabledKeys.delete(key);
	    }
	  }, [disabledKeys, propsDisabled, key]);
	  const ref = _react.useRef();
	  const {
	    tabProps
	  } = useTab({
	    key,
	    isDisabled
	  }, state, ref);
	  const {
	    hoverProps
	  } = useHover(Object.assign({}, props));
	  const isSelected = state.selectedKey === key;

	  const _mergeProps = mergeProps(tabProps, hoverProps),
	        propsWithoutColor = _objectWithoutPropertiesLoose$1(_mergeProps, _excluded$4);

	  const stateProps = Object.assign({}, variants$1[appearance][orientation][density].tab);

	  if (appearance === 'minimal') {
	    if (orientation === 'vertical') {
	      // @ts-expect-error
	      stateProps.ml = -1 * stateProps.px;

	      if (index === 0) {
	        // @ts-expect-error
	        stateProps.mt = -1 * stateProps.py;
	      }
	    } else {
	      if (index === 0) {
	        // @ts-expect-error
	        stateProps.ml = -1 * stateProps.px;
	      }
	    }
	  } else {
	    if (orientation === 'vertical') {
	      // @ts-expect-error
	      stateProps.ml = -1 * stateProps.px;
	    }
	  }
	  /**
	   * If in loading or disabled states, remove other ui effects like hover
	   */


	  if (isDisabled) {
	    for (const i in stateProps) {
	      const prop = stateProps[i];

	      if (prop && typeof prop === 'object') {
	        // remove props immutably
	        const _stateProps$i = stateProps[i],
	              newProps = _objectWithoutPropertiesLoose$1(_stateProps$i, _excluded2$3);

	        stateProps[i] = newProps;
	      }
	    }
	  }

	  let bg;
	  let color = {
	    default: isPill ? IntentColorMap[intent].color : 'muted',
	    hover: isDisabled ? undefined : 'body'
	  };

	  if (isSelected) {
	    color = isPill ? 'on-primary' : IntentColorMap[intent].selectedColor;
	  }

	  if (isPill) {
	    bg = isSelected ? IntentColorMap[intent].selectedBg : {
	      hover: !isDisabled ? IntentColorMap[intent].bgTint : undefined
	    };
	  }

	  return jsxRuntime.jsx(FocusRing, {
	    focusRingClass: "sl-focus-ring",
	    children: jsxRuntime.jsx(Box, Object.assign({}, propsWithoutColor, {
	      ref: ref
	    }, stateProps, {
	      borderColor: isSelected && isLine ? IntentColorMap[intent].selectedBorder : 'transparent',
	      cursor: isDisabled ? 'not-allowed' : isSelected ? true : 'pointer',
	      fontWeight: "medium",
	      opacity: isDisabled ? 60 : undefined,
	      bg: bg,
	      color: color,
	      children: rendered
	    }), void 0)
	  }, void 0);
	}

	/**
	 * Provides state management for a Tabs component. Tabs include a TabList which tracks
	 * which tab is currently selected and displays the content associated with that Tab in a TabPanel.
	 */
	function useTabListState(props) {
	  let state = useSingleSelectListState(_extends({}, props, {
	    suppressTextValueWarning: true
	  }));
	  _react.useEffect(() => {
	    // Ensure a tab is always selected (in case no selected key was specified or if selected item was deleted from collection)
	    let selectedKey = state.selectedKey;

	    if (state.selectionManager.isEmpty || !state.collection.getItem(selectedKey)) {
	      selectedKey = state.collection.getFirstKey();
	      state.selectionManager.replaceSelection(selectedKey);
	    }

	    if (state.selectionManager.focusedKey == null) {
	      state.selectionManager.setFocusedKey(selectedKey);
	    }
	  }, [state.selectionManager, state.selectedKey, state.collection]);
	  return state;
	}

	const _excluded$3 = ["fontSize", "density"],
	      _excluded2$2 = ["color"];
	/**
	 * A TabList is used within Tabs to group tabs that a user can switch between.
	 * The keys of the items within the <TabList> must match up with a corresponding item inside the <TabPanels>.
	 */

	function TabList(_ref) {
	  let {
	    fontSize = 'lg',
	    density = 'regular'
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$3);

	  const tabContext = _react.useContext(TabsContext);
	  const {
	    refs,
	    tabState,
	    tabsProps
	  } = tabContext;
	  const {
	    orientation,
	    selectedId,
	    onChange,
	    appearance
	  } = tabsProps;
	  const {
	    collapse,
	    setTabListState
	  } = tabState;
	  const {
	    tablistRef
	  } = refs;
	  const isPill = appearance === 'pill'; // Pass original Tab props but override children to create the collection.

	  const state = useTabListState(Object.assign({}, tabsProps, {
	    selectedKey: onChange ? selectedId : undefined,
	    defaultSelectedKey: onChange ? undefined : selectedId,
	    onSelectionChange: onChange,
	    children: props.children
	  }));
	  const {
	    tabListProps
	  } = useTabList(Object.assign({}, tabsProps, props), state, tablistRef);
	  _react.useEffect(() => {
	    // Passing back to root as useTabPanel needs the TabListState
	    setTabListState(state); // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [state.disabledKeys, state.selectedItem, state.selectedKey, props.children]);

	  const tabListPropsWithoutColor = _objectWithoutPropertiesLoose$1(tabListProps, _excluded2$2);

	  const stateProps = Object.assign({}, variants$1[appearance][orientation][density].tabList);

	  const tabContent = jsxRuntime.jsx(Stack, Object.assign({}, tabListPropsWithoutColor, {
	    ref: tablistRef,
	    direction: orientation
	  }, stateProps, {
	    fontSize: fontSize,
	    spacing: isPill ? 2 : undefined,
	    children: [...state.collection].map(item => {
	      var _a;

	      return jsxRuntime.jsx(TabImpl, {
	        item: item,
	        state: state,
	        density: density,
	        isDisabled: (_a = item.props) === null || _a === void 0 ? void 0 : _a.isDisabled
	      }, item.key);
	    })
	  }), void 0);

	  return tabContent; // TODO: auto collapse w Select when overflows
	  // if (orientation === 'vertical') {
	  //   return tabContent;
	  // } else {
	  //   return (
	  //     <div ref={wrapperRef} className={classNames(styles, 'collapseWrapper')}>
	  //       {collapse ? (
	  //         <Select
	  //           {...props}
	  //           {...tabProps}
	  //           id={tabPanelProps['aria-labelledby']}
	  //           state={state}
	  //           className={tabListclassName}
	  //         />
	  //       ) : (
	  //         tabContent
	  //       )}
	  //     </div>
	  //   );
	  // }
	}

	const TabPanel = props => jsxRuntime.jsx(Item, Object.assign({}, props), void 0);
	TabPanel.getCollectionNode = Item.getCollectionNode;

	const _excluded$2 = ["p", "m"],
	      _excluded2$1 = ["color"];
	function TabPanels(_ref) {
	  let {
	    p = 4,
	    m
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$2);

	  const {
	    tabState,
	    tabPanelProps: ctxTabPanelProps,
	    tabsProps
	  } = _react.useContext(TabsContext);
	  const {
	    tabListState
	  } = tabState;
	  const ref = _react.useRef();
	  const {
	    tabPanelProps
	  } = useTabPanel({}, tabListState, ref);

	  if (ctxTabPanelProps['aria-labelledby']) {
	    tabPanelProps['aria-labelledby'] = ctxTabPanelProps['aria-labelledby'];
	  }

	  const factory = nodes => new ListCollection(nodes);

	  const collection = useCollection(props, factory, {
	    suppressTextValueWarning: true
	  });
	  const selectedItem = tabListState ? collection.getItem(tabListState.selectedKey) : null;
	  const {
	    orientation
	  } = tabsProps;

	  const tabPanelPropsWithoutColor = _objectWithoutPropertiesLoose$1(tabPanelProps, _excluded2$1);

	  const py = orientation === 'vertical' ? undefined : p;
	  const px = orientation === 'vertical' ? p : undefined;
	  return jsxRuntime.jsx(FocusRing, {
	    focusRingClass: "sl-focus-ring",
	    children: jsxRuntime.jsx(Box, Object.assign({}, tabPanelPropsWithoutColor, {
	      ref: ref,
	      py: py,
	      px: px,
	      flex: 1,
	      m: m,
	      children: selectedItem && selectedItem.props.children
	    }), void 0)
	  }, void 0);
	}

	const Tabs = /*#__PURE__*/_react__namespace.forwardRef((props, ref) => {
	  const {
	    children,
	    appearance = 'minimal',
	    orientation = 'horizontal'
	  } = props;
	  const domRef = useDOMRef(ref);
	  const tablistRef = _react__namespace.useRef();
	  const wrapperRef = _react__namespace.useRef();
	  const [collapse, setCollapse] = useValueEffect(false);
	  const [selectedTab, setSelectedTab] = _react__namespace.useState();
	  const [tabListState, setTabListState] = _react__namespace.useState(null);
	  _react__namespace.useEffect(() => {
	    if (tablistRef.current) {
	      let selectedTab = tablistRef.current.querySelector(`[data-key="${tabListState === null || tabListState === void 0 ? void 0 : tabListState.selectedKey}"]`);

	      if (selectedTab != null) {
	        setSelectedTab(selectedTab);
	      }
	    } // collapse is in the dep array so selectedTab can be updated for TabLine positioning

	  }, [children, tabListState === null || tabListState === void 0 ? void 0 : tabListState.selectedKey, collapse, tablistRef]); // TODO: when we add logic to collapse overflow tabs
	  // const direction: 'ltr' | 'rtl' = 'ltr';
	  // const checkShouldCollapse = React.useCallback(() => {
	  //   const computeShouldCollapse = () => {
	  //     if (wrapperRef.current) {
	  //       const tabsComponent = wrapperRef.current;
	  //       const tabs = tablistRef.current.querySelectorAll('[role="tab"]');
	  //       const lastTab = tabs[tabs.length - 1];
	  //       // @ts-expect-error
	  //       const end = direction === 'rtl' ? 'left' : 'right';
	  //       const farEdgeTabList = tabsComponent.getBoundingClientRect()[end];
	  //       const farEdgeLastTab = lastTab?.getBoundingClientRect()[end];
	  //       // @ts-expect-error
	  //       const shouldCollapse = direction === 'rtl' ? farEdgeLastTab < farEdgeTabList : farEdgeTabList < farEdgeLastTab;
	  //       return shouldCollapse;
	  //     }
	  //   };
	  //   if (orientation !== 'vertical') {
	  //     setCollapse(function* () {
	  //       // Make Tabs render in non-collapsed state
	  //       yield false;
	  //       // Compute if Tabs should collapse and update
	  //       yield computeShouldCollapse();
	  //     });
	  //   }
	  // }, [tablistRef, wrapperRef, direction, orientation, setCollapse]);
	  // React.useEffect(() => {
	  //   checkShouldCollapse();
	  // }, [children, checkShouldCollapse]);
	  // useResizeObserver({ref: wrapperRef, onResize: checkShouldCollapse});

	  let tabPanelProps = {
	    'aria-labelledby': undefined
	  }; // When the tabs are collapsed, the tabPanel should be labelled by the Picker button element.

	  let collapsibleTabListId = useId();

	  if (collapse && orientation !== 'vertical') {
	    tabPanelProps['aria-labelledby'] = collapsibleTabListId;
	  }

	  return jsxRuntime.jsx(NoSsr, {
	    children: jsxRuntime.jsx(TabsContext.Provider, {
	      value: {
	        tabsProps: Object.assign({}, props, {
	          orientation,
	          appearance
	        }),
	        tabState: {
	          tabListState,
	          setTabListState,
	          selectedTab,
	          collapse
	        },
	        refs: {
	          tablistRef,
	          wrapperRef
	        },
	        tabPanelProps
	      },
	      children: jsxRuntime.jsx(Stack, {
	        ref: domRef,
	        w: "full",
	        direction: orientation === 'vertical' ? 'horizontal' : 'vertical',
	        children: props.children
	      }, void 0)
	    }, void 0)
	  }, void 0);
	});

	const variants = {
	  default: {
	    default: {
	      borderColor: {
	        default: 'input',
	        // TODO: when have more sophisticated theme val system, slightly darker color on hover as in ui designs
	        // hover: 'input',
	        focus: 'primary'
	      }
	    },
	    success: {
	      borderColor: {
	        default: 'success',
	        focus: 'success-dark'
	      }
	    },
	    warning: {
	      borderColor: {
	        default: 'warning',
	        focus: 'warning-dark'
	      }
	    },
	    danger: {
	      borderColor: {
	        default: 'danger',
	        focus: 'danger-dark'
	      }
	    }
	  },
	  minimal: {
	    default: {
	      borderColor: {
	        default: 'transparent',
	        hover: 'input',
	        focus: 'primary'
	      }
	    },
	    success: {
	      borderColor: {
	        default: 'transparent',
	        hover: 'success',
	        focus: 'success-dark'
	      }
	    },
	    warning: {
	      borderColor: {
	        default: 'transparent',
	        hover: 'warning',
	        focus: 'warning-dark'
	      }
	    },
	    danger: {
	      borderColor: {
	        default: 'transparent',
	        hover: 'danger',
	        focus: 'danger-dark'
	      }
	    }
	  }
	};
	const sizes = {
	  lg: {
	    padding: 4,
	    rows: 6
	  },
	  md: {
	    padding: 2.5,
	    rows: 4
	  },
	  sm: {
	    padding: 1.5,
	    rows: 2
	  }
	};
	const fontSizes = {
	  lg: 'lg',
	  md: 'base',
	  sm: 'base'
	};

	const _excluded$1 = ["intent", "size", "resize", "appearance", "className", "disabled", "required", "readOnly"];
	const defaultElement = 'textarea';
	const Textarea = /*#__PURE__*/_react.memo( /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    intent = 'default',
	    size = 'md',
	    resize = 'y',
	    appearance = 'default',
	    className,
	    disabled,
	    required,
	    readOnly
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);

	  const fallbackRef = _react.useRef();
	  const textAreaRef = ref || fallbackRef;
	  const {
	    inputProps
	  } = useTextField(Object.assign({
	    isDisabled: disabled,
	    isRequired: required,
	    isReadOnly: readOnly
	  }, props), textAreaRef);
	  const {
	    matchedProps,
	    remainingProps
	  } = splitBoxProps(props);
	  const stateProps = Object.assign({}, variants.default.default, variants.default[intent], variants[appearance].default, variants[appearance][intent]);
	  let onResizeChange = _react.useCallback(() => {
	    let input = textAreaRef.current;
	    input.style.minHeight = `${input.scrollHeight + 2}px`;
	    input.style.minWidth = `${input.scrollWidth + 2}px`;
	  }, [textAreaRef]);
	  _react.useLayoutEffect(() => {
	    if (textAreaRef.current) {
	      onResizeChange();
	    }
	  }, [onResizeChange, textAreaRef]);
	  let disabledProps = {};

	  if (disabled) {
	    disabledProps = {
	      bg: 'canvas-100',
	      color: 'muted',
	      cursor: 'not-allowed'
	    };
	  }

	  let readOnlyProps = {};

	  if (readOnly) {
	    readOnlyProps.tabIndex = -1;

	    if (appearance === 'minimal') {
	      readOnlyProps.borderColor = 'transparent';
	    }
	  }

	  const textareaProps = mergeProps(inputProps, {
	    color: undefined
	  });
	  return jsxRuntime.jsx(Box, Object.assign({
	    className: cn__default["default"]('sl-textarea', className),
	    pos: "relative"
	  }, matchedProps, {
	    children: jsxRuntime.jsx(Box, Object.assign({
	      ref: textAreaRef,
	      as: defaultElement,
	      pl: sizes[size].padding,
	      pr: sizes[size].padding,
	      pt: 2,
	      fontSize: fontSizes[size],
	      rounded: true,
	      resize: resize,
	      rows: sizes[size].rows,
	      border: true,
	      w: "full",
	      disabled: disabled,
	      readOnly: true,
	      pos: "relative"
	    }, textareaProps, remainingProps, readOnlyProps, stateProps, disabledProps), void 0)
	  }), void 0);
	}));

	/**
	 * Provides the accessibility implementation for a Tooltip component.
	 */
	function useTooltip(props, state) {
	  let domProps = filterDOMProps(props, {
	    labelable: true
	  });
	  let {
	    hoverProps
	  } = useHover({
	    onHoverStart: () => state == null ? void 0 : state.open(true),
	    onHoverEnd: () => state == null ? void 0 : state.close()
	  });
	  return {
	    tooltipProps: mergeProps(domProps, hoverProps, {
	      role: 'tooltip'
	    })
	  };
	}

	/**
	 * Provides the behavior and accessibility implementation for a tooltip trigger, e.g. a button
	 * that shows a description when focused or hovered.
	 */
	function useTooltipTrigger(props, state, ref) {
	  let {
	    isDisabled,
	    trigger
	  } = props;
	  let tooltipId = useId();
	  let isHovered = _react.useRef(false);
	  let isFocused = _react.useRef(false);

	  let handleShow = () => {
	    if (isHovered.current || isFocused.current) {
	      state.open(isFocused.current);
	    }
	  };

	  let handleHide = immediate => {
	    if (!isHovered.current && !isFocused.current) {
	      state.close(immediate);
	    }
	  };

	  _react.useEffect(() => {
	    let onKeyDown = e => {
	      if (ref && ref.current) {
	        // Escape after clicking something can give it keyboard focus
	        // dismiss tooltip on esc key press
	        if (e.key === 'Escape') {
	          state.close(true);
	        }
	      }
	    };

	    if (state.isOpen) {
	      document.addEventListener('keydown', onKeyDown, true);
	      return () => {
	        document.removeEventListener('keydown', onKeyDown, true);
	      };
	    }
	  }, [ref, state]);

	  let onHoverStart = () => {
	    if (trigger === 'focus') {
	      return;
	    } // In chrome, if you hover a trigger, then another element obscures it, due to keyboard
	    // interactions for example, hover will end. When hover is restored after that element disappears,
	    // focus moves on for example, then the tooltip will reopen. We check the modality to know if the hover
	    // is the result of moving the mouse.


	    if (getInteractionModality$1() === 'pointer') {
	      isHovered.current = true;
	    } else {
	      isHovered.current = false;
	    }

	    handleShow();
	  };

	  let onHoverEnd = () => {
	    if (trigger === 'focus') {
	      return;
	    } // no matter how the trigger is left, we should close the tooltip


	    isFocused.current = false;
	    isHovered.current = false;
	    handleHide();
	  };

	  let onPressStart = () => {
	    // no matter how the trigger is pressed, we should close the tooltip
	    isFocused.current = false;
	    isHovered.current = false;
	    handleHide(true);
	  };

	  let onFocus = () => {
	    let isVisible = isFocusVisible();

	    if (isVisible) {
	      isFocused.current = true;
	      handleShow();
	    }
	  };

	  let onBlur = () => {
	    isFocused.current = false;
	    isHovered.current = false;
	    handleHide(true);
	  };

	  let {
	    hoverProps
	  } = useHover({
	    isDisabled,
	    onHoverStart,
	    onHoverEnd
	  });
	  let {
	    pressProps
	  } = usePress({
	    onPressStart
	  });
	  let {
	    focusableProps
	  } = useFocusable({
	    isDisabled,
	    onFocus,
	    onBlur
	  }, ref);
	  return {
	    triggerProps: _extends({
	      'aria-describedby': state.isOpen ? tooltipId : undefined
	    }, mergeProps(focusableProps, hoverProps, pressProps)),
	    tooltipProps: {
	      id: tooltipId
	    }
	  };
	}

	const $af9cde49ea815e766aeca6386e9$var$TOOLTIP_DELAY = 1500; // this seems to be a 1.5 second delay, check with design

	const $af9cde49ea815e766aeca6386e9$var$TOOLTIP_COOLDOWN = 500;
	let $af9cde49ea815e766aeca6386e9$var$tooltips = {};
	let $af9cde49ea815e766aeca6386e9$var$tooltipId = 0;
	let $af9cde49ea815e766aeca6386e9$var$globalWarmedUp = false;
	let $af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout = null;
	let $af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout = null;
	/**
	 * Manages state for a tooltip trigger. Tracks whether the tooltip is open, and provides
	 * methods to toggle this state. Ensures only one tooltip is open at a time and controls
	 * the delay for showing a tooltip.
	 */

	function useTooltipTriggerState(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  let {
	    delay = $af9cde49ea815e766aeca6386e9$var$TOOLTIP_DELAY
	  } = props;
	  let {
	    isOpen,
	    open,
	    close
	  } = useOverlayTriggerState(props);
	  let id = _react.useMemo(() => "" + ++$af9cde49ea815e766aeca6386e9$var$tooltipId, []);
	  let closeTimeout = _react.useRef();

	  let ensureTooltipEntry = () => {
	    $af9cde49ea815e766aeca6386e9$var$tooltips[id] = hideTooltip;
	  };

	  let closeOpenTooltips = () => {
	    for (let hideTooltipId in $af9cde49ea815e766aeca6386e9$var$tooltips) {
	      if (hideTooltipId !== id) {
	        $af9cde49ea815e766aeca6386e9$var$tooltips[hideTooltipId](true);
	        delete $af9cde49ea815e766aeca6386e9$var$tooltips[hideTooltipId];
	      }
	    }
	  };

	  let showTooltip = () => {
	    clearTimeout(closeTimeout.current);
	    closeTimeout.current = null;
	    closeOpenTooltips();
	    ensureTooltipEntry();
	    $af9cde49ea815e766aeca6386e9$var$globalWarmedUp = true;
	    open();

	    if ($af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout) {
	      clearTimeout($af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout);
	      $af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout = null;
	    }

	    if ($af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout) {
	      clearTimeout($af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout);
	      $af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout = null;
	    }
	  };

	  let hideTooltip = immediate => {
	    if (immediate) {
	      clearTimeout(closeTimeout.current);
	      closeTimeout.current = null;
	      close();
	    } else if (!closeTimeout.current) {
	      closeTimeout.current = setTimeout(() => {
	        closeTimeout.current = null;
	        close();
	      }, $af9cde49ea815e766aeca6386e9$var$TOOLTIP_COOLDOWN);
	    }

	    if ($af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout) {
	      clearTimeout($af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout);
	      $af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout = null;
	    }

	    if ($af9cde49ea815e766aeca6386e9$var$globalWarmedUp) {
	      if ($af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout) {
	        clearTimeout($af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout);
	      }

	      $af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout = setTimeout(() => {
	        delete $af9cde49ea815e766aeca6386e9$var$tooltips[id];
	        $af9cde49ea815e766aeca6386e9$var$globalCooldownTimeout = null;
	        $af9cde49ea815e766aeca6386e9$var$globalWarmedUp = false;
	      }, $af9cde49ea815e766aeca6386e9$var$TOOLTIP_COOLDOWN);
	    }
	  };

	  let warmupTooltip = () => {
	    closeOpenTooltips();
	    ensureTooltipEntry();

	    if (!isOpen && !$af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout && !$af9cde49ea815e766aeca6386e9$var$globalWarmedUp) {
	      $af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout = setTimeout(() => {
	        $af9cde49ea815e766aeca6386e9$var$globalWarmUpTimeout = null;
	        $af9cde49ea815e766aeca6386e9$var$globalWarmedUp = true;
	        showTooltip();
	      }, delay);
	    } else if (!isOpen) {
	      showTooltip();
	    }
	  }; // eslint-disable-next-line arrow-body-style


	  _react.useEffect(() => {
	    return () => {
	      clearTimeout(closeTimeout.current);
	      let tooltip = $af9cde49ea815e766aeca6386e9$var$tooltips[id];

	      if (tooltip) {
	        delete $af9cde49ea815e766aeca6386e9$var$tooltips[id];
	      }
	    };
	  }, [id]);
	  return {
	    isOpen,
	    open: immediate => {
	      if (!immediate && delay > 0 && !closeTimeout.current) {
	        warmupTooltip();
	      } else {
	        showTooltip();
	      }
	    },
	    close: hideTooltip
	  };
	}

	const css = twCss({
	  '@apply': CX('rounded', 'text-sm', 'py-1', 'px-1.5', 'filter', 'drop-shadow'),
	  'max-width': '300px',
	  '& > *:not(.sl-tooltip__tip)': {
	    '@apply': CX('z-10', 'relative')
	  }
	});

	const _excluded = ["children", "state"],
	      _excluded2 = ["color"];
	const TOOLTIP_DELAY = 500;
	const TOOLTIP_OFFSET = 10;
	const Tooltip = props => {
	  const {
	    renderTrigger,
	    children,
	    placement = 'bottom',
	    isOpen,
	    defaultOpen,
	    onOpen,
	    onClose,
	    delay = TOOLTIP_DELAY,
	    offset = TOOLTIP_OFFSET,
	    crossOffset,
	    isDisabled,
	    shouldFlip = true,
	    hideArrow
	  } = props;
	  const overlayRef = _react.useRef();

	  const _triggerRef = _react.useRef();

	  const tooltipTriggerRef = props.triggerRef || _triggerRef;
	  const onOpenChange = _react.useCallback($isOpen => {
	    if ($isOpen && onOpen) onOpen();
	    if (!$isOpen && onClose) onClose();
	  }, [onClose, onOpen]);
	  let state = useTooltipTriggerState({
	    isOpen,
	    defaultOpen,
	    delay,
	    isDisabled,
	    onOpenChange
	  }); // Get props for the trigger and overlay. This also handles
	  // hiding the overlay when a parent element of the trigger scrolls
	  // (which invalidates the popover positioning).

	  let {
	    triggerProps,
	    tooltipProps
	  } = useTooltipTrigger({
	    isDisabled
	  }, state, tooltipTriggerRef); // Get popover positioning props relative to the trigger

	  let {
	    overlayProps: positionProps,
	    arrowProps,
	    arrowIcon
	  } = useOverlayPosition({
	    targetRef: tooltipTriggerRef,
	    overlayRef,
	    placement,
	    offset,
	    crossOffset,
	    shouldFlip,
	    isOpen: state.isOpen,
	    onClose
	  });
	  const triggerElem = runIfFn(renderTrigger, {
	    isOpen: state.isOpen
	  });
	  return jsxRuntime.jsxs(FocusableProvider, Object.assign({}, triggerProps, {
	    ref: tooltipTriggerRef,
	    children: [/*#__PURE__*/_react__namespace.cloneElement(triggerElem, Object.assign({}, mergeProps(triggerElem.props, triggerProps), {
	      ref: tooltipTriggerRef
	    })), jsxRuntime.jsx(_Overlay, {
	      isOpen: state.isOpen,
	      children: jsxRuntime.jsxs(TooltipWrapper, Object.assign({}, tooltipProps, positionProps, {
	        ref: overlayRef,
	        state: state,
	        children: [runIfFn(children, {
	          close: state.close
	        }), !hideArrow && jsxRuntime.jsx(TooltipArrow, {
	          icon: arrowIcon,
	          style: arrowProps.style
	        }, void 0)]
	      }), void 0)
	    }, void 0)]
	  }), void 0);
	};
	const TooltipWrapper = /*#__PURE__*/_react.forwardRef((_ref, ref) => {
	  let {
	    children,
	    state
	  } = _ref,
	      otherProps = _objectWithoutPropertiesLoose$1(_ref, _excluded);

	  // Handle interacting outside the dialog and pressing
	  // the Escape key to close the modal. Using expect-error so that we know when to remove this
	  // @ts-expect-error useTooltip typing is incorrect, state is expected
	  let {
	    tooltipProps
	  } = useTooltip({
	    children
	  }, state);

	  const _mergeProps = mergeProps(tooltipProps, otherProps),
	        containerProps = _objectWithoutPropertiesLoose$1(_mergeProps, _excluded2);

	  return jsxRuntime.jsx(Box, Object.assign({}, containerProps, {
	    className: "sl-tooltip",
	    ref: ref,
	    "data-testid": "tooltip",
	    "data-theme": "dark",
	    bg: "canvas-dialog",
	    styled: css,
	    children: children
	  }), void 0);
	});

	function TooltipArrow({
	  icon,
	  style
	}) {
	  return jsxRuntime.jsx(Box, {
	    className: "sl-tooltip__tip",
	    pos: "absolute",
	    color: "canvas-dialog",
	    style: style,
	    children: jsxRuntime.jsx(Icon, {
	      icon: icon
	    }, void 0)
	  }, void 0);
	}

	const TreeItem = props => {
	  return jsxRuntime.jsx("div", Object.assign({}, props), void 0);
	};

	const GLOBAL_CSS_ID = 'mosaic-global';
	const GLOBAL_CSS_THEME_ID = 'mosaic-theme';
	const subscribeTheme = ({
	  mode: initialMode
	} = {}) => {
	  // do not attempt if we are not in a browser environment
	  if (typeof document === 'undefined') return; // eslint-disable-next-line react-hooks/rules-of-hooks

	  const updateThemeMode = useUpdateThemeMode(); // allow user to force a starting theme mode if they so desire

	  if (initialMode) {
	    updateThemeMode(initialMode);
	  } // eslint-disable-next-line react-hooks/rules-of-hooks


	  const themeMode = useThemeMode();
	  /**
	   * If user did not init theme earlier, do so now
	   */

	  const dataTheme = document.documentElement.getAttribute('data-theme');

	  if (!dataTheme) {
	    document.documentElement.setAttribute('data-theme', getResolvedThemeMode(themeMode));
	  }
	};
	/**
	 * Small snippet to set the basics re theme as early as possible during rendering, to avoid major flashes of white etc.
	 */

	const INIT_THEME_JS = `try {
  var query = window.matchMedia("(prefers-color-scheme: dark)");

  var preference = window.localStorage.getItem('${THEME_STORAGE_KEY}');
  preference = preference ? JSON.parse(preference) : { mode: "${DEFAULT_THEME_MODE}" };

  var theme = (preference.mode === "system" && query.matches) || preference.mode === "dark" ? "dark" : "light";
  document.documentElement.setAttribute('data-theme', theme);
} catch (e) {
  console.warn('problem setting initial theme mode', e);
}`;
	const InitTheme = () => {
	  return jsxRuntime.jsx("script", {
	    dangerouslySetInnerHTML: {
	      __html: INIT_THEME_JS
	    }
	  }, void 0);
	};

	exports.Article = Article;
	exports.AspectRatio = AspectRatio;
	exports.Avatar = Avatar;
	exports.Badge = Badge;
	exports.Box = Box;
	exports.Button = _Button;
	exports.ButtonGroup = ButtonGroup;
	exports.CX = CX;
	exports.Callout = Callout;
	exports.Card = Card;
	exports.Code = Code;
	exports.Container = Container;
	exports.CopyButton = _CopyButton;
	exports.DEFAULT_THEME_MODE = DEFAULT_THEME_MODE;
	exports.DismissButton = DismissButton;
	exports.Divider = Divider$2;
	exports.EntityName = EntityName;
	exports.FieldButton = _FieldButton;
	exports.Flex = Flex;
	exports.GLOBAL_CSS_ID = GLOBAL_CSS_ID;
	exports.GLOBAL_CSS_THEME_ID = GLOBAL_CSS_THEME_ID;
	exports.Grid = Grid;
	exports.HStack = HStack;
	exports.Heading = Heading;
	exports.INIT_THEME_JS = INIT_THEME_JS;
	exports.Icon = Icon;
	exports.Image = Image;
	exports.InitTheme = InitTheme;
	exports.Input = Input;
	exports.InvertTheme = InvertTheme;
	exports.Link = Link;
	exports.LinkHeading = LinkHeading;
	exports.ListBox = ListBox;
	exports.ListBoxItem = ListBoxItem;
	exports.Menu = Menu;
	exports.Modal = Modal;
	exports.MosaicContext = MosaicContext;
	exports.NoSsr = NoSsr;
	exports.Overlay = _Overlay;
	exports.PREBUILT_THEMES = PREBUILT_THEMES;
	exports.Panel = Panel;
	exports.Paragraph = Paragraph;
	exports.Popover = Popover;
	exports.PressResponder = PressResponder;
	exports.Pressable = Pressable;
	exports.ProductImage = ProductImage;
	exports.Prose = Prose;
	exports.Provider = MosaicProvider;
	exports.Radio = Radio;
	exports.RadioGroup = RadioGroup;
	exports.Select = _Select;
	exports.Stack = Stack;
	exports.Step = Step;
	exports.Steps = Steps;
	exports.Switch = Switch;
	exports.THEME_STORAGE_KEY = THEME_STORAGE_KEY;
	exports.Tab = Tab;
	exports.TabImpl = TabImpl;
	exports.TabList = TabList;
	exports.TabPanel = TabPanel;
	exports.TabPanels = TabPanels;
	exports.Tabs = Tabs;
	exports.Text = Text;
	exports.Textarea = Textarea;
	exports.ThemeProvider = ThemeProvider;
	exports.Tooltip = Tooltip;
	exports.TreeItem = TreeItem;
	exports.UNSAFE_cx = UNSAFE_cx;
	exports.VStack = VStack;
	exports.WithDomRef = WithDomRef;
	exports.__DEV__ = __DEV__;
	exports.accumulateCollectionKeysByProp = accumulateCollectionKeysByProp;
	exports.backdropPropNames = backdropPropNames;
	exports.backdropProps = backdropProps;
	exports.borderPropNames = borderPropNames;
	exports.borderProps = borderProps;
	exports.colorPropNames = colorPropNames;
	exports.colorProps = colorProps;
	exports.computeTheme = computeTheme;
	exports.containerSizes = containerSizes;
	exports.defaultMosaicContext = defaultMosaicContext;
	exports.defaultThemeMode = defaultThemeMode;
	exports.error = error;
	exports.flexPropNames = flexPropNames;
	exports.flexProps = flexProps;
	exports.getCssVariable = getCssVariable;
	exports.getInteractionModality = getInteractionModality;
	exports.getResolvedThemeMode = getResolvedThemeMode;
	exports.injectGlobal = injectGlobal;
	exports.interactivityPropNames = interactivityPropNames;
	exports.interactivityProps = interactivityProps;
	exports.isArray = isArray;
	exports.isDefined = isDefined;
	exports.isEmpty = isEmpty;
	exports.isEmptyArray = isEmptyArray;
	exports.isEmptyObject = isEmptyObject;
	exports.isFunction = isFunction;
	exports.isIconDefinition = isIconDefinition;
	exports.isIconProp = isIconProp;
	exports.isInputEvent = isInputEvent;
	exports.isNotEmptyObject = isNotEmptyObject;
	exports.isNotNumber = isNotNumber;
	exports.isNull = isNull;
	exports.isNumber = isNumber;
	exports.isNumeric = isNumeric;
	exports.isObject = isObject$2;
	exports.isString = isString;
	exports.isUndefined = isUndefined;
	exports.keyframes = keyframes;
	exports.layoutPropNames = layoutPropNames;
	exports.layoutProps = layoutProps;
	exports.linkStyle = linkStyle;
	exports.marginProps = marginProps;
	exports.noop = noop;
	exports.once = once;
	exports.paddingProps = paddingProps;
	exports.positionPropNames = positionPropNames;
	exports.positionProps = positionProps;
	exports.prefersDarkMode = prefersDarkMode;
	exports.preflightCss = preflightCss;
	exports.readableColor = readableColor;
	exports.ringPropNames = ringPropNames;
	exports.ringProps = ringProps;
	exports.rootThemeScope = rootThemeScope;
	exports.runIfFn = runIfFn;
	exports.shadowPropNames = shadowPropNames;
	exports.shadowProps = shadowProps;
	exports.sizePropNames = sizePropNames;
	exports.sizeProps = sizeProps;
	exports.spacingPropNames = spacingPropNames;
	exports.splitBoxProps = splitBoxProps;
	exports.splitProps = splitProps;
	exports.subscribeTheme = subscribeTheme;
	exports.transformPropNames = transformPropNames;
	exports.transformProps = transformProps;
	exports.tw = tw;
	exports.twApply = twApply;
	exports.twCss = twCss;
	exports.twShortcut = twShortcut;
	exports.twStyle = twStyle;
	exports.twindConfig = twind_config;
	exports.tx = tx;
	exports.typographyPropNames = typographyPropNames;
	exports.typographyProps = typographyProps;
	exports.useClipboard = useClipboard;
	exports.useCollectionKeyAccumulator = useCollectionKeyAccumulator;
	exports.useComputedTheme = useComputedTheme;
	exports.useControllableProp = useControllableProp;
	exports.useControllableState = useControllableState;
	exports.useCustomTheme = useCustomTheme;
	exports.useDarkTheme = useDarkTheme;
	exports.useDarkThemeId = useDarkThemeId;
	exports.useIconStore = useIconStore;
	exports.useId = useId;
	exports.useInteractionModality = useInteractionModality;
	exports.useIsSSR = useIsSSR;
	exports.useLightTheme = useLightTheme;
	exports.useLightThemeId = useLightThemeId;
	exports.useModalState = useModalState;
	exports.useMosaicContext = useMosaicContext;
	exports.useOverlay = useOverlay;
	exports.useOverlayPosition = useOverlayPosition;
	exports.usePrevious = usePrevious;
	exports.useSSRSafeId = useSSRSafeId;
	exports.useThemeId = useThemeId;
	exports.useThemeIsDark = useThemeIsDark;
	exports.useThemeMode = useThemeMode;
	exports.useUpdateDarkTheme = useUpdateDarkTheme;
	exports.useUpdateDarkThemeId = useUpdateDarkThemeId;
	exports.useUpdateLightTheme = useUpdateLightTheme;
	exports.useUpdateLightThemeId = useUpdateLightThemeId;
	exports.useUpdateTheme = useUpdateTheme;
	exports.useUpdateThemeMode = useUpdateThemeMode;
	exports.warn = warn;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
