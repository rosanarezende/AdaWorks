module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  database: 'adaworks',
  username: 'postgres',
  password: '1234',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true
  },
};