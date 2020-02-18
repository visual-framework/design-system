/**
 * Precompiled Nunjucks template: vf-search-client-side.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["vf-search-client-side"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.js\"></script>\n";
output += "\n<script src=\"";
output += runtime.suppressValue(env.getFilter("url").call(context, "/search_index.js"), env.opts.autoescape);
output += "\"></script>\n\n<div class=\"vf-search-client-side vf-grid | vf-content\">\n  <div class=\"results-container\" data-search-results>\n    Loading...\n  </div>\n</div>\n\n<script type=\"text/javascript\">\n  window.onload = function () {\n    bootstrapSearch();\n  };\n</script>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
