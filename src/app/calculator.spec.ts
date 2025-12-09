import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });

  it('should multiply 10 by 3 and return 30', () => {
    const spectedValue = 30;
    const result = calculator.multiply(10, 3);
    expect(result).toBe(spectedValue);
  });

  it('should divide 10 by 2 and return 5', () => {
    const spectedDivideValue = 5;
    const divideResult = calculator.divide(10, 2);
    expect(divideResult).toBe(spectedDivideValue);
  });

  it('should return null when dividing by zero', () => {
    const spectedDivideByZeroValue = null;
    const divideByZeroResult = calculator.divide(10, 0);
    expect(divideByZeroResult).toBe(spectedDivideByZeroValue);
  });

  describe('Matchers', () => {
    it('Division result should be greater than 2', () => {
      const divideResult = calculator.divide(10, 2);
      expect(divideResult).toBeGreaterThan(2);
    });
    
    it('Multiplication result should be less than 100', () => {
      const result = calculator.multiply(10, 3);
      expect(result).toBeLessThan(100);
    });

    it('Null matcher test', () => {
      const divideByZeroResult = calculator.divide(10, 0);
      expect(divideByZeroResult).toBeNull();
    });

    it('Truthiness matcher test', () => {
      const result = calculator.multiply(10, 3);
      expect(result).toBeTruthy();
    });

    it('Defined matcher test', () => {
      const result = calculator.multiply(10, 3);
      expect(result).toBeDefined();
    });

    it('Falsy matcher test', () => {
      const divideByZeroResult = calculator.divide(10, 0);
      expect(divideByZeroResult).toBeFalsy();
    });
  });

  // describe('tests to fail', () => { 

    // it('should fail when multiplying 10 by 3 and expecting 25', () => {
    //   const spectedValue = 25;
    //   const result = calculator.multiply(10, 3);
    //   expect(result).toBe(spectedValue);
    // });

    // it('should fail when dividing 10 by 2 and expecting 4', () => {
    //   const spectedDivideValue = 4;
    //   const divideResult = calculator.divide(10, 2);
    //   expect(divideResult).toBe(spectedDivideValue);
    // });

    // it('should fail when dividing by zero and expecting NaN', () => {
    //   const spectedDivideByZeroValue = NaN;
    //   const divideByZeroResult = calculator.divide(10, 0);
    //   expect(divideByZeroResult).toBeNaN();
    // });
  //  })
});
