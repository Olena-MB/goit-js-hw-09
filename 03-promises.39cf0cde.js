!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,n){var t=Math.random()>.3,o={position:e,delay:n};return new Promise((function(e,n){t&&e(o),n(o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(e.currentTarget.delay.value),t=Number(e.currentTarget.step.value),o=Number(e.currentTarget.amount.value),u=1;u<=o;u++)i(u,n).then((function(e){var n=e.position,t=e.delay;setTimeout((function(){r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}),t)})).catch((function(e){var n=e.position,t=e.delay;setTimeout((function(){r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)})),n+=t}))}();
//# sourceMappingURL=03-promises.39cf0cde.js.map
