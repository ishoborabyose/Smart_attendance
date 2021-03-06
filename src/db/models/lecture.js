'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lecture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lecture.hasMany(models.Accesses, {foreignKey: 'classRoom', onDelete:'CASCADE'})
      Lecture.hasMany(models.Student, {foreignKey: 'registrationN', as: 'student', onDelete: 'CASCADE'})
      Lecture.hasMany(models.AttendedStudent, {foreignKey: 'regNumber', as: 'attendedStudent', onDelete: 'CASCADE'})

    }
  };
  Lecture.init({
    names: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    faculty: DataTypes.STRING,
    department: DataTypes.STRING,
    school: DataTypes.STRING,
    college: DataTypes.STRING,
    contact: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lecture',
  });
  return Lecture;
};