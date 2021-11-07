const userRouter = require("./userRouter");
const authRouter = require("./authRouter");
const postRouter = require("./postsRouter");

const apiRouter = (app) => {
    app.use('/usersDevTo', userRouter);
    app.use('/authDevTo/login', authRouter);
    app.use('/postsDevTo', postRouter);

}

module.exports = apiRouter;