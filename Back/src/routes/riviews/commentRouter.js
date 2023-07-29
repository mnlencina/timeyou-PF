const express = require('express');
const createComment = require("../../controllers/comment");
const { Comment, Watch, User } = require("../../db");
const commentRouter = express.Router();


// POST route to create a new comment
commentRouter.post("/", async (req, res) => {
try {
    const { watchId, commentText, calification } = req.body;
    const userId = req.user.id; // Assuming you have the user information in the request

    // Ensure watchId is a valid watch in the database
    const watch = await Watch.findOne({ where: { id: watchId } });
    if (!watch) {
    return res.status(404).json({ error: "Watch not found." });
    }

    // Create the new comment with the associated user
    const newComment = await createComment(watchId, commentText, calification, userId);
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

module.exports = commentRouter;














































































































































