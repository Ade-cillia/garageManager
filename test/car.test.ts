import {describe, expect, test} from '@jest/globals';

import {checkCarData} from '../src/utils/checkData'
describe('checkData for Car module', () => {
    test('all ok', () => {
        let fakeCar = {
            brandName: "test",
            modelName: "test",
            modelEnergy: "test",
            modelPrice: "10.55",
            dateBuy: "19/64/2022"  
        }
        console.log(checkCarData(fakeCar));
        expect(checkCarData(fakeCar))
        .toStrictEqual([]);
    });

    test('test all empty', () => {
        let fakeCar = {
            brandName: "",
            modelName: "",
            modelEnergy: "",
            modelPrice: "",
            dateBuy: ""   
        }
        console.log(checkCarData(fakeCar));
        expect(checkCarData(fakeCar))
        .not.toBe([]);
    });

  test('test undefined', () => {
    let fakeCar = {
    }
    console.log(checkCarData(fakeCar));
    expect(checkCarData(fakeCar))
    .not.toBe([]);
  });

  test('test brandName', () => {
    let fakeCar = {
        brandName: "",
        modelName: "test",
        modelEnergy: "test",
        modelPrice: "10.55",
        dateBuy: "19/64/2022"  
    }
    console.log(checkCarData(fakeCar));
    expect(checkCarData(fakeCar))
    .not.toBe([]);
  });

  test('test modelName', () => {
    let fakeCar = {
        brandName: "test",
        modelName: "",
        modelEnergy: "test",
        modelPrice: "10.55",
        dateBuy: "19/64/2022"  
    }
    console.log(checkCarData(fakeCar));
    expect(checkCarData(fakeCar))
    .not.toBe([]);
  });

  test('test modelEnergy', () => {
    let fakeCar = {
        brandName: "test",
        modelName: "test",
        modelEnergy: "",
        modelPrice: "10.55",
        dateBuy: "19/64/2022"  
    }
    console.log(checkCarData(fakeCar));
    expect(checkCarData(fakeCar))
    .not.toBe([]);
  });

  test('test modelPrice', () => {
    let fakeCar = {
        brandName: "test",
        modelName: "test",
        modelEnergy: "test",
        modelPrice: "",
        dateBuy: "19/64/2022"  
    }
    console.log(checkCarData(fakeCar));
    expect(checkCarData(fakeCar))
    .not.toBe([]);
  });

  test('test dateBuy', () => {
    let fakeCar = {
        brandName: "test",
        modelName: "test",
        modelEnergy: "test",
        modelPrice: "test",
        dateBuy: ""  
    }
    console.log(checkCarData(fakeCar));
    expect(checkCarData(fakeCar))
    .not.toBe([]);
  });

});