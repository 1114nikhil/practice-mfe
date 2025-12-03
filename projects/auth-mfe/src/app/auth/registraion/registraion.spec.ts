import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registraion } from './registraion';

describe('Registraion', () => {
  let component: Registraion;
  let fixture: ComponentFixture<Registraion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registraion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registraion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
