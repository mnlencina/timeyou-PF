const express = require('express');
const createComment = require("../../controllers/comment");
const { Comment, Watch, User } = require("../../db");
const commentRouter = express.Router();


// POST route to create a new comment
commentRouter.post("/", async (req, res) => {
try {
    const { userId, watchId, commentText, calification, userName } = req.body;

   // console.log(req.body)
    

    // Ensure watchId is a valid watch in the database
    const watch = await Watch.findOne({ where: { id: watchId } });
    const user = await User.findOne({where: {id: userId}})
    if (!watch || !user) {
    return res.status(404).json({ error: "Watch or User not found." });
    }

    // Create the new comment with the associated user
    const newComment = await createComment(userId, watchId, commentText, calification, userName);
    res.status(201).json(newComment);
} catch (error) {
    res.status(500).json({ Error: error.message });
}
});



// GET route to fetch comments by watch Id
commentRouter.get("/watch/:watchId", async (req, res) => {
const { watchId } = req.params;
try {
    const comments = await Comment.findAll({
    where: { WatchId: watchId },
      include: User, // Include the associated User model to get user details in the response
    });
    res.status(200).json(comments);
} catch (error) {
    res.status(500).json({ Error: error.message });
}
});


commentRouter.get("/:userId", async (req, res)=> {
    const {userId } = req.params;
    try {
        const userId = await User.findOne({
            where: {UserId: userId},
            include: Comment,
        });
        res.status(200).json(userId)
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
})

//GET comment from 1 user for 1 watch
commentRouter.get("/:watchId/:userId", async(req,res) => {
    const { watchId , userId } = req.params;
    try {
        const allComments = await Comment.findAll({
            where: {WatchId: watchId, UserId: userId},
            include:{model: User},
            include:{model: Watch},
        });
        res.status(200).json(allComments);
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
})



module.exports = commentRouter;




































































































































