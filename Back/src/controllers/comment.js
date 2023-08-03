const { Comment } = require("../db");

const createComment = async (userId, watchId, commentText, calification, userName) => {
try {
    const newComment = await Comment.create({
        UserId: userId,
        WatchId: watchId,
        commentText: commentText,
        calification: calification,
        userName: userName,
    });
    return newComment;
} catch (error) {
    throw new Error("Failed to create comment.");
}
};

module.exports = createComment;