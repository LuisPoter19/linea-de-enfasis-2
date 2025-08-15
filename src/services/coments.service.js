const crypto = require('crypto')
const { request } = require('express')
const PostService = require('./post.service')

class CommentService {

    comments = [];

    get() {
        return this.comments;
    }

    create(idPost, content, author, date) {
        const id = crypto.randomUUID();
        const comment = {
            id,
            idPost,
            content,
            author,
            date
        }
        this.comments.push(comment);
        return comment;
    }

    update(id, idPost, content, author, date) {
        const index = this.comments.findIndex(comment => comment.id === id);

        if (index === -1) {
            return null;
        }

        this.comments[index].idPost = idPost;
        this.comments[index].content = content;
        this.comments[index].author = author;
        this.comments[index].date = date;

        return this.comments[index];
    }

    delete(id) {
        const index = this.comments.findIndex(comment => comment.id === id);
        if (index === -1) {
            return null;
        }
        
        const deletedComment = this.comments.splice(index, 1);
        return deletedComment;
    }

    getById(id) {
        const index = this.comments.findIndex(comment => comment.id === id);

        if (index === -1) {
            return null;
        }

        return this.comments[index];
    }

}
