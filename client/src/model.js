class Model {
    constructor() {
        //a state of the model 
        this.blogs = []
    }
     

    // a function to add blogs to the state
    //this function should filter to not add empty blogs
    addBlogs(blogs) { 
      this.blogs=blogs.filter((e)=>{return e.title&&e.author&&e.body})
        console.table(this.blogs)
    }
}

export default Model