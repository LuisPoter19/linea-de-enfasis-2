const express = require('express')
//const posts = require('./data/posts')
//const PostService = require('./services/post.service')
//const CommentService = require('./services/coments.service')
const setupRoutes = require('./routes')

const app = express()
const port = 3000

/*app.get('/', (req, res) => {
    res.send('Hola Mundo')
})*/

app.use(express.json())

setupRoutes(app)

//const postService = new PostService()
//const commentService = new CommentService()


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})

