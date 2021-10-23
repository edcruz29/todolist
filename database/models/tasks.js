module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    "Tasks",
    {
      id_user: DataTypes.INTEGER,
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detalhe: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      concluida: {
        type: DataTypes.BOOLEAN,
      },
    },

    {
      tableName: "tasks",
    }
  );

  Tasks.associate = (models) => {
    Tasks.belongsTo(models.User, {
      foreignKey: "id_user",
      as: "user",
    });
  };

  return Tasks;
};
