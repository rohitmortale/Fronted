import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoyWiseComponent } from './categoy-wise.component';

describe('CategoyWiseComponent', () => {
  let component: CategoyWiseComponent;
  let fixture: ComponentFixture<CategoyWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoyWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoyWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
