module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('women', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: Sequelize.STRING,
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      link_for_linkedin: Sequelize.STRING,
      experiences: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      agree_to_terms: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('women');
  }
};

