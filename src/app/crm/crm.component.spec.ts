import { TestBed, async } from '@angular/core/testing';
import { CrmComponent } from './crm.component';
describe('CrmComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CrmComponent
      ],
    }).compileComponents();
  }));
  it('should create the crm', async(() => {
    const fixture = TestBed.createComponent(CrmComponent);
    const crm = fixture.debugElement.componentInstance;
    expect(crm).toBeTruthy();
  }));
  it(`should have as title 'crm'`, async(() => {
    const fixture = TestBed.createComponent(CrmComponent);
    const crm = fixture.debugElement.componentInstance;
    expect(crm.title).toEqual('crm');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CrmComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to crm!');
  }));
});
