import pkg from "sequelize";
const { DataTypes } = pkg;
const { STRING, DATE, BOOLEAN, DATEONLY, TEXT } = DataTypes;
export const noteInit = {
  note: {
    type: TEXT,
  },
  tag: {
    type: STRING,
  },
};
