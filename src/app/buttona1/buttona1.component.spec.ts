import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttona1Component } from './buttona1.component';

describe('Buttona1Component', () => {
  let component: Buttona1Component;
  let fixture: ComponentFixture<Buttona1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Buttona1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Buttona1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
