import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { Main } from './main';

describe('Main', () => {
  let component: Main;
  let fixture: ComponentFixture<Main>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  describe('html testing', () => { 
    it('classifer verification', () => {
      component.weigthInput = 70;
      component.heightInput = 1.75;
      component.calculateBMI();
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      const classifierElement = compiled.querySelector('.normal-weight');

      expect(classifierElement?.textContent).toContain('Normal weight');
    });

    it('class classification underweight', () => {
      component.weigthInput = 50;
      component.heightInput = 1.75;
      component.calculateBMI();
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      const classifierElement = compiled.querySelectorAll('p')[1];

      expect(classifierElement).toBeTruthy();
      expect(classifierElement).toHaveClass('underweight');
    });
   })

   it('button call function verification', () => {
    spyOn(component, 'calculateBMI');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.calculateBMI).toHaveBeenCalled();
   });

   it('placeholders verification', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const weightInput = compiled.querySelectorAll('input')[0];
    const heightInput = compiled.querySelectorAll('input')[1];

    expect(weightInput?.getAttribute('placeholder')).toBe('Weight (kg)');
    expect(heightInput?.getAttribute('placeholder')).toBe('Height (m)');
   });

   it('IBM result verification', () => {
    component.weigthInput = 80;
    component.heightInput = 1.8;
    component.calculateBMI();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const resultElement = compiled.querySelector('.result');
    expect(resultElement?.textContent).toContain('Your BMI is 24.69');
   });
});
