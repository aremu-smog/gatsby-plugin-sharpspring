"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

var _templateObject;

var generateSS = function generateSS(trackingId, domainId) {
  return (0, _commonTags.stripIndent)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n\n\nvar _ss = _ss || [];\n_ss.push([\n  \"_setDomain\",\n  \"https://", ".marketingautomation.services/net\",\n]);\n_ss.push([\"_setAccount\", \"", "\"]);\n_ss.push([\"_trackPageView\"]);\nwindow._pa = window._pa || {};\n// _pa.orderId = \"myOrderId\"; // OPTIONAL: attach unique conversion identifier to conversions\n// _pa.revenue = \"19.99\"; // OPTIONAL: attach dynamic purchase values to conversions\n// _pa.productId = \"myProductId\"; // OPTIONAL: Include product ID for use with dynamic ads\n\n(function () {\n  var ss = document.createElement(\"script\");\n  ss.type = \"text/javascript\";\n  ss.async = true;\n  ss.src =\n    (\"https:\" == document.location.protocol ? \"https://\" : \"http://\") +\n    \"", ".marketingautomation.services/client/ss.js?ver=2.4.0\";\n  var scr = document.getElementsByTagName(\"script\")[0];\n  scr.parentNode.insertBefore(ss, scr);\n})();\n  "])), domainId, trackingId, domainId);
};

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  setPostBodyComponents([/*#__PURE__*/_react.default.createElement("script", {
    key: "gatsby-plugin-sharpspring",
    dangerouslySetInnerHTML: {
      __html: generateSS(pluginOptions.trackingId, pluginOptions.domainId)
    }
  })]);
};