import pkg from "sequelize";
const { DataTypes } = pkg;
const { STRING, DATE, BOOLEAN, DATEONLY } = DataTypes;
export const userInit = {
  honorific_prefix: {
    type: STRING,
    allowNull: true,
  },
  title: {
    type: STRING,
    allowNull: true,
  },
  first_name: {
    type: STRING,
    allowNull: false,
  },
  middle_name: {
    type: STRING,
    allowNull: true,
  },
  last_name: {
    type: STRING,
    allowNull: false,
  },
  suffix: {
    type: STRING,
    allowNull: true,
  },
  honorific_suffix: {
    type: STRING,
    allowNull: true,
  },
  madien_name: {
    type: STRING,
    allowNull: true,
  },
  nickname: {
    type: STRING,
    allowNull: true,
  },
  date_of_birth: {
    type: DATEONLY,
    allowNull: false,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  date_joined: {
    type: DATE,
    allowNull: true,
  },
  date_of_death: {
    type: DATEONLY,
    allowNull: true,
  },
  do_not_contact: {
    type: BOOLEAN,
    allowNull: true,
  },
  is_active: {
    type: BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
  is_staff: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  is_superuser: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  last_login: {
    type: DATE,
    allowNull: true,
  },
  owasp_safe_password: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  prompt_password_change: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  retention_only: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
};
