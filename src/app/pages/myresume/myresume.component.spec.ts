import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyresumeComponent } from './myresume.component';

describe('MyresumeComponent', () => {
  let component: MyresumeComponent;
  let fixture: ComponentFixture<MyresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyresumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
