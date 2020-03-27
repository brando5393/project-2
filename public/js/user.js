// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len:{
//                     args: [5, 20],
//                     msg: "Name must be between 5 and 20 characters"
//                 } 
//             }    
//         },
//         password: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//             validate: {
//                 len:{
//                     args:[7, 20],
//                     msg: "Password must be between 7 and 20 characters"
//                 }
//             }
//         }, 
//         Email: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//             //unique: true,
//             validate: {
//                 len: {
//                     args: [10, 40], 
//                     msg: "Email must be between 10 and 40 characters",
//                 },
//                 // isEmail: {
//                 //     msg: "Email address must be valid"
//                 // }
//             }
//         }
         
//     });

//     User.associate = function(models) {
//         User.hasMany(models.Post, {
//             onDelete: "cascade"
//         });
//     };
//     return User;

// };

  