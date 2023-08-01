
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Comment = sequelize.define(
        "Comment",
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        commentText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        calification: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
            min: 1,
            max: 10,
            },
        },
        userName: {
          type: DataTypes.TEXT,
          allowNull: false,
          defaultValue: "Usuario anónimo"
        }
        },
        { timestamps: false }
    );

  // Associate Comment with Watch and User
Comment.associate = (models) => {
    Comment.belongsTo(models.Watch, {
    foreignKey: {
        allowNull: false,
    },
    onDelete: "CASCADE",
    });

    Comment.belongsTo(models.User, {
    foreignKey: {
        allowNull: false,
    },
    onDelete: "CASCADE",
    });
};

return Comment;
};