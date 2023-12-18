import Model from '../src/model.js'
import View from '../src/view.js'
import Controller from '../src/controller.js'
import Blog from '../scripts/blog.js'
import api from '../scripts/api.js'

describe('Model functions', function () {
  describe('AddBlogs', function () {
    it('should add blogs to the state ', function () {
      const model = new Model()
      model.addBlogs([
        { author: 'blog author', body: 'blog body', title: 'blog title' },
      ])
      expect(model.blogs).toEqual([
        { author: 'blog author', body: 'blog body', title: 'blog title' },
      ])
    })

    it('sould contain filtering to not add empty blogs or blogs with empty titles or authors', function () {
      const model = new Model()
      model.addBlogs([
        { body: '', title: 'blog title' },
        { author: 'blog author', body: 'blog body', title: '' },
        { author: 'blog author', body: 'blog body', title: 'blog title' },
      ])
      expect(model.blogs).toEqual([
        { author: 'blog author', body: 'blog body', title: 'blog title' },
      ])
    })

    it('sould replace all the old items in the state ', function () {
      const model = new Model()
      model.addBlogs([
        { author: 'blog author', body: 'blog body', title: 'blog title' },
      ])
      model.addBlogs([
        {
          author: 'new blog author',
          body: 'new blog body',
          title: ' new blog title',
        },
      ])
      expect(model.blogs).toEqual([
        {
          author: 'new blog author',
          body: 'new blog body',
          title: ' new blog title',
        },
      ])
    })
  })
})

describe('View functions', function () {
  describe('renderBlogs', function () {
    it('should  render blogs to the dom ', function () {
      const view = new View()
      view.renderBlogs([
        {
          body: 'blog body',
          author: 'anonymos',
          title: 'blog title',
          createdAt: '02/02/2000',
        },
      ])
      const blogs = $('#blogs').children().length
      expect(blogs).toEqual(1)
    })

    it('should  empty the dom before rendering ', function () {
      const view = new View()
      view.renderBlogs([
        {
          body: 'blog body',
          author: 'anonymos',
          title: 'blog title',
          createdAt: '02/02/2000',
        },
      ])
      view.renderBlogs([
        {
          body: ' new blog body',
          author: 'anonymos',
          title: 'blog title',
          createdAt: '02/02/2000',
        },
      ])
      const blogs = $('#blogs').children().length
      expect(blogs).toEqual(1)
    })

    it('should  use the render function from blog.js file   ', function () {
      const view = new View()
      spyOn(Blog, 'render')
      view.renderBlogs([
        {
          body: 'blog body',
          author: 'anonymos',
          title: 'blog title',
          createdAt: '02/02/2000',
        },
      ])
      expect(Blog.render).toHaveBeenCalled()
    })
  })
})

describe('ajax functions', function () {
  describe('readAll', function () {
    it('should return the data from the api', function (done) {
      api.readAll(
        'https://blogging-api-8uoq.onrender.com/api/test',
        function (result) {
          expect(result).toEqual('test passed')
          done()
        }
      )
    })
  })
})

describe('controller functions', function () {
  describe('fetch', function () {
    it('should  use the readAll function from api.js to get data from the api ', function () {
      const controller = new Controller(new Model(), new View())
      spyOn(api, 'readAll')
      controller.fetch()
      expect(api.readAll).toHaveBeenCalled()
    })
  })
})
