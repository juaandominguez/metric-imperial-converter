const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    suite('Function convertHandler.getNum(input)', function(){
        
        test('Whole number input', function(done) {
        let input = '32L';
        assert.equal(convertHandler.getNum(input),32);
        done();
        });
        
        test('Decimal Input', function(done) {
        let input = '3.2L';
        assert.equal(convertHandler.getNum(input),3.2);
        done();
        });
        
        test('Fractional Input', function(done) {
        let input = '1/2L';
        assert.equal(convertHandler.getNum(input),0.5);
        done();
        });
        
        test('Fractional Input w/ Decimal', function(done) {
        let input = '1.5/2L';
        assert.equal(convertHandler.getNum(input),0.75);
        done();
        });
        
        test('Invalid Input (double fraction)', function(done) {
        let input = '1/2/3L';
        assert.equal(convertHandler.getNum(input),null);
        done();
        });
        
        test('No Numerical Input', function(done) {
        let input = 'L';
        assert.equal(convertHandler.getNum(input),1);
        done();
        }); 
        
    });
    
    suite('Function convertHandler.getUnit(input)', function(){
        
        test('For Each Valid Unit Inputs', function(done) {
        let input = ['gal','L','mi','km','lbs','kg'];
        input.forEach(function(ele) {
            assert.equal(convertHandler.getUnit(ele),ele);
        });
        done();
        });
        
        test('Unknown Unit Input', function(done) {
        let input = '32g';
        assert.equal(convertHandler.getUnit(input),null);
        done();
        });  
    });
    
    suite('Function convertHandler.getReturnUnit(initUnit)', function(){
        
        test('For Each Valid Unit Inputs', function(done) {
        let input = ['gal','L','mi','km','lbs','kg'];
        let expect = ['L','gal','km','mi','kg','lbs'];
        input.forEach(function(ele, i) {
            assert.equal(convertHandler.getReturnUnit(ele),expect[i]);
        });
        done();
        });  
    });
    
    suite('Function convertHandler.spellOutUnit(unit)', function(){
        
        test('For Each Valid Unit Inputs', function(done) {
        let input = ['gal','L','mi','km','lbs','kg'];
        let expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
        input.forEach(function(ele, i) {
            assert.equal(convertHandler.spellOutUnit(ele),expect[i]);
        }
        );
        done();
    });
});
    suite('Individual conversions', function(){
        test('gal to L', function(done) {
        let input = 'gal';
        let expect = 'L';
        assert.equal(convertHandler.getReturnUnit(input),expect);
        done();
        });
        test('L to gal', function(done) {
        let input = 'L';
        let expect = 'gal';
        assert.equal(convertHandler.getReturnUnit(input),expect);
        done();
        });
        test('mi to km', function(done) {
        let input = 'mi';
        let expect = 'km';
        assert.equal(convertHandler.getReturnUnit(input),expect);
        done();
        });
        test('km to mi', function(done) {
        let input = 'km';
        let expect = 'mi';
        assert.equal(convertHandler.getReturnUnit(input),expect);
        done();
        });
        test('lbs to kg', function(done) {
        let input = 'lbs';
        let expect = 'kg';
        assert.equal(convertHandler.getReturnUnit(input),expect);
        done();
        });
        test('kg to lbs', function(done) {
        let input = 'kg';
        let expect = 'lbs';
        assert.equal(convertHandler.getReturnUnit(input),expect);
        done();
        });
    })
});