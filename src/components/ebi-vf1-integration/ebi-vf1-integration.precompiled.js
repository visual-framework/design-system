/**
 * Precompiled Nunjucks template: ebi-vf1-integration.njk
 */
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["ebi-vf1-integration"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<link rel=\"stylesheet\" href=\"https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css\" type=\"text/css\" media=\"all\" />\n<link rel=\"stylesheet\" href=\"https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-embl-petrol.css\" type=\"text/css\" media=\"all\" />\n\n<p>A demonstration of a few fixes. To make an entire page \"VF 2.x-ish\" add `class=\"ebi-vf1-integration\"` to your body element.</p>\n\n<div class=\"ebi-vf1-integration\">\n\n  <h3>With</h3>\n\n  <p>With <code class=\"vf-code-example\">.ebi-vf1-integration</code></p>\n\n  <h1>h1</h1>\n  <h2>h2</h2>\n  <h3>h3</h3>\n\n  <strong>I'm bold</strong>\n\n";
env.getExtension("render")["run"](context,"@embl-logo", function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += runtime.suppressValue(t_1, true && env.opts.autoescape);
output += "\n  <a href=\"#\">A link</a>\n\n</div>\n\n<hr class=\"vf-divider\" />\n\n<div class=\"\">\n\n  <h3>With<em>out</em></h3>\n\n  <p>With<em>out</em> <code class=\"vf-code-example\">.ebi-vf1-integration</code></p>\n\n  <h1>h1</h1>\n  <h2>h2</h2>\n  <h3>h3</h3>\n\n  <strong>I'm bold</strong>\n\n  <a href=\"#\">A link</a>\n\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
