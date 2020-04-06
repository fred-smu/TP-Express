// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const custInfo = sequelize.define('custInfo', {
//     userId: {
//       allowNull: false,
//       type: DataTypes.INTEGER
//     },
//     firstName: {
//       allowNull: false,
//       type: DataTypes.STRING
//     },
//     lastName: {
//       allowNull: false,
//       type: DataTypes.STRING
//     },
//    MI: {
//       allowNull: true,
//       type: DataTypes.STRING
//     },
//     suffix: {
//       allowNull: true,
//       type: DataTypes.STRING
//     },
//     address: {
//       allowNull: false,
//       type: DataTypes.STRING
//     },
//     city:{
//       allowNull: false,
//       type: DataTypes.STRING
//     },
//     state: {
//       allowNull: false,
//       type: DataTypes.STRING
//     },
//     zipCode: {
//       allowNull: false,
//       type: DataTypes.STRING
//     },
//     customer_pic: DataTypes.STRING
//   }, {});
//   custInfo.associate = function(models) {
//     // associations can be defined here
//   };
//   return custInfo;
// };