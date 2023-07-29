const { Comment } = require("../db");

const createComment = async (watchId, commentText, calification, userId) => {
try {
    const newComment = await Comment.create({
    WatchId: watchId,
    comment: commentText,
    calification: calification,
    UserId: userId,
    });
    return newComment;
} catch (error) {
    throw new Error("Failed to create comment.");
}
};

module.exports = createComment;