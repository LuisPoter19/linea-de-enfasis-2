const {Router} = require("express");
const PostService = require('./../services/post.service');

const router = Router();

const postService = new PostService();

router.get('/', (req, res) => {
    res.json(postService.get())
})

router.post('/', (req, res) => {
    const { title, content } = req.body
    const post = postService.create(title, content)

    res.status(201).json(post)
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { title, content } = req.body

    const post = postService.update(id, title, content)
    
    if (post === null) {
        res.status(404).json({ message: 'Post not found' })
    }
    
    res.status(200).json(post)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const post = postService.delete(id)
    
    if (post === null) {
        res.status(404).json({ message: 'Post not found' })
    }

    res.status(200).json(post)
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const post = postService.getById(id)
    
    if (post === null) {
        res.status(404).json({ message: 'Post not found' })
    }

    res.status(200).json(post)
})


module.exports = router