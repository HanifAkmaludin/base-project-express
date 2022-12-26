"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.sequelize.transaction((myTransaction) => {
            return Promise.all([
                queryInterface.addColumn("Users", "username", {
                    type: Sequelize.DataTypes.STRING,
                }),
            ]);
        });
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction((myTransaction) => {
            return Promise.all([queryInterface.removeColumn("Users")]);
        });
    },
};
