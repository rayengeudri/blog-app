
import Blog from '../scripts/blog.js'

class View {

    constructor() {
        //use of jquery to get the elements
        this.$button = $('#button')
        this.$dialog=$('#dialog')
        this.$blogs=$('#blogs')
    
    }

    //************************************  DO NOT MODIFY THIS CODE  ************************************

    //handle popup events 
    handleShowForm() {
        this.$button.on('click', this.Popup.bind(this))
    }

    Popup() {
        this.$dialog.dialog({
            height: 450,
            minWidth: 800,
            resizable: false,
            close: () => {
               this.$button.removeClass('nav-selected')
               this.$button.addClass('nav-unselected')
                $('#blog-title').val('')
                $('#blog-body').val('')
            },
            open: () => {
               this.$button.removeClass('nav-unselected')
               this.$button.addClass('nav-selected')
            }
        });
    }

    //************************************ START FROM HERE  ************************************
// shearch blogs
  
    // dynamic rendering of the data
    renderBlogs(blogs) {
        this.$blogs.empty()
        blogs.forEach((e)=>{
            this.$blogs.append(Blog.render(e))
        })
    }

    // handle logo click event
    handleLogo(){
       $("#logo").on("click",()=>{
        window.location.reload()
       })
    }

    //handle the form submit event 
    handleSubmit(callback) {
     $("#send").on("submit",function(e){
e.preventDefault()
var title = $("#blog-title").val()
var body = $("#blog-body").val()
callback({title,body})
     })
    }


    



}

export default View