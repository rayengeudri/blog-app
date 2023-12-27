class Model {
    constructor() {
        //a state of the model 
        this.blogs = []
        this.filtered=[]
    }
     // a function to filter blogs
    
    filterBlogs(filter){
       
       this.filtered = this.blogs.filter((blog)=>{
            return blog.title.toUpperCase().includes(filter.toUpperCase()) || blog.author.toUpperCase().includes(filter.toUpperCase())
        })
    }
    

    // a function to add blogs to the state
    //this function should filter to not add empty blogs
    
    addBlogs(blogs) { 
      this.blogs=blogs.filter((e)=>{return e.title&&e.author&&e.body})
        console.table(this.blogs)
    }
}

export default Model