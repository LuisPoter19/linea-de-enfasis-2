const { Router } = require('express');
const CommentService = require('./../services/coments.service');

const router = Router();

const commentService = new CommentService();

//idPost, content, author, date

router.get('/', (req, res) => {
    res.json(commentService.get())
})

router.post('/', (req, res) => {
    const { idPost, content, author, date } = req.body
    const comment = commentService.create(idPost, content, author, date)

    res.status(201).json(comment)
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { idPost, content, author, date } = req.body

    const comment = commentService.update(id, idPost, content, author, date)
    
    if (comment === null) {
        res.status(404).json({ message: 'Post not found' })
    }
    
    res.status(200).json(comment)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const comment = commentService.delete(id)
    
    if (comment === null) {
        res.status(404).json({ message: 'Post not found' })
    }

    res.status(200).json(post)
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const comment = commentService.getById(id)
    
    if (post === null) {
        res.status(404).json({ message: 'Post not found' })
    }

    res.status(200).json(post)
})

module.exports = router;


