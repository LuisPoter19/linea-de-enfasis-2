const { Router} = require('express');
const postRouter = require('./posts.router');
const commentRouter = require('./comments.router');
const router = Router();

function setupRoutes(app) {
    app.use('/api', router);
    router.use('/posts', postRouter);
    router.use('/comments', commentRouter);
}

module.exports = setupRoutes;

