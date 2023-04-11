function numberStringSplitter(input) {
  let number = input.match(/[.\d\/]+/g) || ["1"];
  let stringMatch = input.match(/[a-zA-Z]+/g);
  let string = stringMatch ? stringMatch[0] : "";
  
  if (!string) {
    string = "default";
  }
  
  return [number[0], string];
}

  function checkDiv(possibleFraction) {
    if (typeof possibleFraction !== 'string') {
      return [possibleFraction];
    }
    let nums = possibleFraction.split("/");
    if (nums.length > 2) {
      return false;
    }
    return nums;
  }
  function ConvertHandler() {
    this.getNum = function (input) {
      if(!input) return undefined;
      let result = numberStringSplitter(input)[0];
      let nums = checkDiv(result);
      if (!nums) {
        return undefined;
      }
      let num1 = nums[0];
      let num2 = nums[1] || "1";
      result = parseFloat(num1) / parseFloat(num2);
      if (isNaN(result)) {
        return undefined;
      }
      return result;
    };
  
    this.getUnit = function (input) {
      if(!input) return undefined;
      let result = numberStringSplitter(input)[1].toLowerCase();
      switch (result) {
        case "km":
          return "km";
        case "gal":
          return "gal";
        case "lbs":
          return "lbs";
        case "mi":
          return "mi";
        case "l":
          return "L";
        case "kg":
          return "kg";
        default:
          return undefined;
      }
    };
  
    this.getReturnUnit = function (initUnit) {
      if(!initUnit) return undefined;
      let unit = initUnit.toLowerCase();
  
      switch (unit) {
        case "km":
          return "mi";
        case "gal":
          return "L";
        case "lbs":
          return "kg";
        case "mi":
          return "km";
        case "l":
          return "gal";
        case "kg":
          return "lbs";
        default:
          return undefined;
      }
    };
  
    this.spellOutUnit = function (initUnit) {
      if(!initUnit) return undefined;
      let unit = initUnit.toLowerCase();
  
      switch (unit) {
        case "km":
          return "kilometers";
        case "gal":
          return "gallons";
        case "lbs":
          return "pounds";
        case "mi":
          return "miles";
        case "l":
          return "liters";
        case "kg":
          return "kilograms";
        default:
          return undefined;
      }
    };
  
    this.convert = function (initNum, initUnit) {
      if(!initNum || !initUnit) return undefined;
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      let unit = initUnit.toLowerCase();
      let result;
  
      switch (unit) {
        case "km":
          result = initNum / miToKm;
          break;
        case "gal":
          result = initNum * galToL;
          break;
        case "lbs":
          result = initNum * lbsToKg;
          break;
        case "mi":
          result = initNum * miToKm;
          break;
        case "l":
          result = initNum / galToL;
          break;
        case "kg":
          result = initNum / lbsToKg;
          break;
        default:
          result = undefined;
      }
      return Math.round(result * 100000) / 100000;
    };
  
    this.getString = function (initNum, initUnit, returnNum, returnUnit) { 
      if(initNum === undefined && initUnit === undefined){
        return "invalid number and unit";
      }
      if(initNum === undefined){
        return "invalid number";
      }
      if(initUnit === undefined){
        return "invalid unit";
      }
      return `${initNum} ${this.spellOutUnit(
        initUnit
      )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    };
  }
  
  module.exports = ConvertHandler;
  