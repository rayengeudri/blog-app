import API from '../scripts/api.js';
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.author = window.location.search.substring(10),
      this.view.handleShowForm();
    this.fetch();
    this.view.handleLogo()
   this.view.handleSubmit(this.createBlog.bind(this))  }
 
  //a function to  get the  data from the api
  fetch() {
    API.readAll(
      API.server,
      (response) => {
        this.model.addBlogs(response);
        this.view.renderBlogs(this.model.blogs);
      },
      (error) => {
        console.log('you have an error', error);
      }
    );
  }

  // a function to send a blog to the api
  createBlog(blog) {

blog.author = this.author
API.create(API.server,blog,()=>{
console.log("successfuly posted a blog"+blog);
},(error)=>{
  console.log("the error"+error);
})
  }
}
export default Controller;