class Post {
    #id = null;
    #title = null;
    #content = null;

    constructor(id = null, title = null, content = null) {
        this.#id = id;
        this.#title = title;
        this.#content = content;
    }

    getid() {
        return this.#id;
    }

    gettitle() {
        return this.#title;
    }

    getcontent() {
        return this.#content;
    }

    setId(id) {
        this.#id = id;
    }

    setTitle(title) {
        this.#title = title;
    }

    setContent(content) {
        this.#content = content;
    }

    getValues() {
        return {
            id: this.#id,
            title: this.#title,
            content: this.#content
        }
    }


}
module.exports = Post