module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
<<<<<<< HEAD
<<<<<<< HEAD
            type: sequelize.INTEGER,
=======
            type: DataTypes.INTEGER,
>>>>>>> master
=======
            type: DataTypes.INTEGER,
>>>>>>> master
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:{
                    args: [5, 20],
                    msg: "Name must be between 5 and 20 characters"
                } 
            }    
        },
        password: {
<<<<<<< HEAD
<<<<<<< HEAD
            type: DataTypes.Text,
=======
            type: DataTypes.STRING,
>>>>>>> master
=======
            type: DataTypes.STRING,
>>>>>>> master
            allowNull: false,
            validate: {
                len:{
                    args:[7, 20],
                    msg: "Password must be between 7 and 20 characters"
                }
            }
        }, 
        Email: {
<<<<<<< HEAD
<<<<<<< HEAD
            type: sequelize.TEXT,
            allowNull: false,
            unique: true,
=======
            type: DataTypes.TEXT,
            allowNull: false,
            //unique: true,
>>>>>>> master
=======
            type: DataTypes.TEXT,
            allowNull: false,
            //unique: true,
>>>>>>> master
            validate: {
                len: {
                    args: [10, 40], 
                    msg: "Email must be between 10 and 40 characters",
                },
                isEmail: {
                    msg: "Email address must be valid"
                }
            }
        }
         
    });

    User.associate = function(models) {
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };
    return User;
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======
};
>>>>>>> master
=======
};
>>>>>>> master
  