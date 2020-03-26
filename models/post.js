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
            type: DataTypes.ENUM, 
            values: ['CSS', 'JavaScript', 'Node', 'React', 'HTML', 'DataBase']
        } 
    });

    Post.associate = function(models) {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Post; 
};

  

