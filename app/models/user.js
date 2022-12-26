"use strict";

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
        username: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
    });

    return User;
};

// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class User extends Model {
//         static associate(models) {
//             // define association here
//             this.belongsToMany(models.Role, {
//                 through: "user_roles",
//                 foreignKey: "userId",
//                 otherKey: "roleId",
//             });
//         }
//     }
//     User.init(
//         {
//             username: DataTypes.STRING,
//             email: DataTypes.STRING,
//             password: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "User",
//         }
//     );
//     return User;
// };
