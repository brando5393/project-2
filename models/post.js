module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len:[30]
            }
        }, 
        category: {
            type: DataTypes.STRING, 
            defaultValue: "random"
        } 
    });

    Post.associate = function(models) {
<<<<<<< HEAD
        Post.belongsTo(models.User, {
=======
        Post.belongsTo(models,Author, {
>>>>>>> 070c21fb55c79f2f7e8f994a0ea9a97eb2a62086
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Post; 
};