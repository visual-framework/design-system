// vf-search-client-side

// To do before this is useuful in vf-core:
// - pass along ooptional words to strip
// - make it more general purpose and extensible

// if you need to import any other components' JS to use here
// import { vfOthercomponent } from 'vf-other-component/vf-other-component';

 /**
  * The global function for this component
  * @example vfcomponentName(firstPassedVar)
  * @param {string} [firstPassedVar]  - An option to be passed
  */
function vfSearchClientSide(firstPassedVar) {
  firstPassedVar = firstPassedVar || 'defaultVal';

  // some tips
  // https://lunrjs.com/guides/customising.html
  // https://davidwalsh.name/adding-search-to-your-site-with-javascript

  var buildSearchIndex = function() {
    
    var customPipeline = function(builder) {
      var pipelineFunction = function(token) {
        var tokenStr = token.toString();
        // if there are no hyphens then skip this logic
        if (tokenStr.indexOf('-') < 0) return token;

    
        // split the token by hyphens, returning a clone of the original token with the split
        // e.g. 'anti-virus' -> 'anti', 'virus'
        var tokens = tokenStr.split('-').map(function(s) {
          return token.clone(function() {
            return s
          })
        });
    
        // var tokens = [];
        // clone the token and replace any hyphens
        // e.g. 'anti-virus' -> 'antivirus'
        // tokens.push(token.clone(function(s) {
        //   return s.replace('-', '');
        // }));
    
        // finally push the original token into the list
        // 'anti-virus' -> 'anti-virus'
        tokens.push(token);
        return tokens;
      };
    
      lunr.Pipeline.registerFunction(pipelineFunction, 'customPipeline');
      builder.pipeline.before(lunr.stemmer, pipelineFunction);
      builder.searchPipeline.before(lunr.stemmer, pipelineFunction);
    
    };

    // set up lunr search
    var idx = lunr(function () {
      this.tokenizer.separator = /[\s]+/;
      this.use(customPipeline);
    
      this.field('title', {boost: 100});
      this.field('text', {boost: 0.1});
      this.field('url');
      this.metadataWhitelist = ['position']

          searchIndex.pages.forEach(function (page) {
        this.add(page);
      }, this);
          
    });

    // to-do pass in a search term
    let searchTerm = 'vf-tabs'

    // strip out searches for `vf-` as it's a junk term
    searchTerm = searchTerm.replace('vf-','')

    // run the earch
    renderResults(idx.search(searchTerm),searchTerm);
  }

  var renderResults = function(results,searchTerm) {

    // where we put the search results
    const searchResultsContainer = document.querySelectorAll('[data-search-results]');

    // map the search hits to the search pages
    let resultPages = results.map(function (match) {
      return searchIndex.pages[match.ref];
    });
    
    // generate the HTML markup for the results
    let renderedResults = '';
    resultPages.forEach(element => {
      if(typeof element !== "undefined") {
        element.text = element.text || '';
        renderedResults +=  "<a class='result' href='../" + element.url + "?q=" + searchTerm + "'><h3>" + element.title + "</h3></a>";
        renderedResults +=  "<p class='snippet'>" + element.text.substring(0, 200) + "</p>";
         renderedResults += '<p><code>' + element.url + '</code></p>';
      }  
    });

    // put the reuslts on the page
    searchResultsContainer[0].innerHTML = renderedResults;
  }

  // default invokation
  buildSearchIndex();
}

export { vfSearchClientSide };

// You should import this js file at ./components/vf-core/scripts.js
// import { vfcomponentName } from '../components/raw/vf-component/vf-component.js';
// And, if needed, invoke it
// vfSearchClientSide();