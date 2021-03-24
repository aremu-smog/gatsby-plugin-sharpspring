import React from "react";
import { stripIndent } from "common-tags";

const generateSS = (trackingId, domainId) => stripIndent`


var _ss = _ss || [];
_ss.push([
  "_setDomain",
  "https://${domainId}.marketingautomation.services/net",
]);
_ss.push(["_setAccount", "${trackingId}"]);
_ss.push(["_trackPageView"]);
window._pa = window._pa || {};
// _pa.orderId = "myOrderId"; // OPTIONAL: attach unique conversion identifier to conversions
// _pa.revenue = "19.99"; // OPTIONAL: attach dynamic purchase values to conversions
// _pa.productId = "myProductId"; // OPTIONAL: Include product ID for use with dynamic ads

(function () {
  var ss = document.createElement("script");
  ss.type = "text/javascript";
  ss.async = true;
  ss.src =
    ("https:" == document.location.protocol ? "https://" : "http://") +
    "${domainId}.marketingautomation.services/client/ss.js?ver=2.4.0";
  var scr = document.getElementsByTagName("script")[0];
  scr.parentNode.insertBefore(ss, scr);
})();
  `;

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script
      key="gatsby-plugin-sharpspring"
      dangerouslySetInnerHTML={{
        __html: generateSS(pluginOptions.trackingId, pluginOptions.domainId),
      }}
    />,
  ]);
};
