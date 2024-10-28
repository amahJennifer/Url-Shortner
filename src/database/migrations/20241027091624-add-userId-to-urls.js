module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('url', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('url', 'userId');
  },
};
