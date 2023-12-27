
var API = {

  server:'https://blogging-api-8uoq.onrender.com/api/blogs',

  create: function (url,blog, successCB, errorCB ) {
    $.ajax({
      url:url,
      type: 'POST',
      data:blog,
      success: successCB,
      error: errorCB || null
    });
  },

  readAll: function(url,successCB, errorCB ) {
    $.ajax({
      url:url ,
      type: 'GET',
      success: successCB,
      error: errorCB || null
    });
  } ,

}

export default API
