const crypto = require('crypto')
const { request } = require('express')

class PostService {
    posts = []

    get() {
        return this.posts
    }

    create (title, content) {
        const id = crypto.randomUUID()
        const post = {
            id,
            title,
            content
        }
        this.posts.push(post)
        return post    
    }

    update (id, title, content) {
        const index = this.posts.findIndex(post => post.id === id)

        if (index === -1) {
            return null
        }

        this.posts[index].title = title
        this.posts[index].content = content

        return this.posts[index]
    }

    delete (id) {
        const index = this.posts.findIndex(post => post.id === id)
        if (index === -1) {
            return null
        }
        
        const deletedPost = this.posts.splice(index, 1)
        return deletedPost
    }


    getById (id) {
        const index = this.posts.findIndex(post => post.id === id)

        if (index === -1) {
            return null
        }

        return this.posts[index]
    }
}

module.exports = PostService
