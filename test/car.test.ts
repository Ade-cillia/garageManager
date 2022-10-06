import {describe, expect, test} from '@jest/globals';
import {checkCarData} from '../src/utils/checkData'
describe('Car module', () => {
  test('Crontrolle car data for add or edit', () => {
    let fakeCar = {
        brandName: "",
        modelName: "",
        modelEnergy: "",
        modelPrice: "",
        dateBuy: ""   
    }
    expect(checkCarData(fakeCar))
    .not.toBe([]);
  });
});