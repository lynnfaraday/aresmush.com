var ce_baseurl;

const searchHitTemplate = function(hit) {
  let url = `${ce_baseurl}${hit.url}#${hit.anchor}`;

  const title = hit._highlightResult.title.value;

  const content = hit._highlightResult.html.value;

  return `
    <div class="post-item">
      <h2><a class="post-link" href="${url}">${title}</a></h2>
      <div class="post-snippet">${content}</div>
    </div>
  `;
}

const initializeSearch = function(app_id, api_key, index, base_url) {
  const search = instantsearch({
    appId: app_id,
    apiKey: api_key,
    indexName: index,
    routing: true,
    searchFunction(helper) {
      if (helper.state.query === '') {
              document.querySelector('#search-hits').innerHTML = '';
              document.querySelector('#search-pagination').innerHTML = '';
              document.querySelector('.ais-search-box--input').value = '';
              return;
          }

          $("#searchModal").modal();
          helper.search();
      }
  });
  
  ce_baseurl = base_url;
  


 // initialize SearchBox
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search',
      searchOnEnterKeyPressOnly: true
    })
  );

  // initialize hits widget
  search.addWidget(
    instantsearch.widgets.hits({
      container: '#search-hits',
      templates: {
        item: searchHitTemplate
      }
    })
  );   


  // initialize pagination
  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#search-pagination',
      maxPages: 20,
      // default is to scroll to 'body', here we disable this behavior
      scrollTo: false
    })
  );
  
  search.start();
  /* 
  searchResetButton = document.getElementsByClassName("ais-search-box--reset-wrapper")[0];
  if (searchResetButton) {
    searchResetButton.onclick = function() {
      search.helper.setQuery('').search();  
    };
  }*/
}
