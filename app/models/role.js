"use strict";

module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("Roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
        },
    });

    return Role;
};

// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class Role extends Model {
//         static associate(models) {
//             // define association here
//             this.belongsToMany(models.User, {
//                 through: "user_roles",
//                 foreignKey: "roleId",
//                 otherKey: "userId",
//             });
//         }
//     }
//     Role.init(
//         {
//             name: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "Role",
//         }
//     );
//     return Role;
// };
