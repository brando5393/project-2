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
        Post.belongsTo(models,Author, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Post; 
};

  

