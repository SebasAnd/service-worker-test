import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaComponent } from './america.component';

describe('AmericaComponent', () => {
  let component: AmericaComponent;
  let fixture: ComponentFixture<AmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmericaComponent]
    });
    fixture = TestBed.createComponent(AmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
