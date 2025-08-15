class Comment {
    #id = null;
    #content = null;
    #author = null;
    #date = null;
    #idPost = null;

    constructor(id = null, content = null, author = null, date = null, idPost = null) {
        this.#id = id;
        this.#content = content;
        this.#author = author;
        this.#date = date;
        this.#idPost = idPost;
    }

    getid() {
        return this.#id;
    }

    getcontent() {
        return this.#content;
    }

    getauthor() {
        return this.#author;
    }

    getdate() {
        return this.#date;
    }

    getidPost() {
        return this.#idPost;
    }

    setId(id) {
        this.#id = id;
    }

    setContent(content) {
        this.#content = content;
    }

    setAuthor(author) {
        this.#author = author;
    }

    setDate(date) {
        this.#date = date;
    }

    setIdPost(idPost) {
        this.#idPost = idPost;
    }

    getValues() {
        return {
            id: this.#id,
            content: this.#content,
            author: this.#author,
            date: this.#date,
            idPost: this.#idPost
        }
    }
}

module.export = Comment;