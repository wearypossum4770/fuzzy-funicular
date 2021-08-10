import pkg from "sequelize";
const { DataTypes } = pkg;
const { STRING, DATE, BOOLEAN, DATEONLY } = DataTypes;
export const tutorialInit = {
  title: {
    type: STRING,
  },
  description: {
    type: STRING,
  },
  date_published: {
    type: Date,
  },
  published: {
    type: BOOLEAN,
  },
};
