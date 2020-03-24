module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
<<<<<<< HEAD
            type: DataTypes.INTEGER,
=======
            type: sequelize.INTEGER,
>>>>>>> 070c21fb55c79f2f7e8f994a0ea9a97eb2a62086
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
            type: DataTypes.STRING,
=======
            type: DataTypes.Text,
>>>>>>> 070c21fb55c79f2f7e8f994a0ea9a97eb2a62086
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
            type: DataTypes.TEXT,
            allowNull: false,
            //unique: true,
=======
            type: sequelize.TEXT,
            allowNull: false,
            unique: true,
>>>>>>> 070c21fb55c79f2f7e8f994a0ea9a97eb2a62086
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
};
=======
  };
>>>>>>> 070c21fb55c79f2f7e8f994a0ea9a97eb2a62086
  