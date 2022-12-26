"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("user_roles", {
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "id",
                },
                onDelete: "cascade",
                onUpdate: "restrict",
            },
            roleId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Roles",
                    key: "id",
                },
                onDelete: "cascade",
                onUpdate: "restrict",
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
