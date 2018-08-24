import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdummyComponent } from './headerdummy.component';

describe('HeaderdummyComponent', () => {
  let component: HeaderdummyComponent;
  let fixture: ComponentFixture<HeaderdummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderdummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderdummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
