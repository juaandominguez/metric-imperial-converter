'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');
const convertHandler = new ConvertHandler();
module.exports = function (app) {
  
  app.get("/api/convert/", function (req, res) {
    try {
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      //console.log(initNum, initUnit, returnNum, returnUnit)
      let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      if(string === "invalid number and unit"){
        return res.status(200).json(
          "invalid number and unit"
      )}
      if(string === "invalid number"){
        return res.status(200).json(
          "invalid number"
      )}
      if(string === "invalid unit"){
        return res.status(200).json(
          "invalid unit"
        );
      }
      return res.status(200).json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string
      });
    } catch (err) {
      console.log("catched")
      res.status(200).json({
        error: "invalid input"
      });
    }
  });
};
