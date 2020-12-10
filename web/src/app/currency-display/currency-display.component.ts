import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-display',
  template: `
    <div class="currency-display">
      <div>{{ currency }}</div>
      <button class="px-2">
        {{ value | number:'1.2-2' }}
      </button>
    </div>
  `,
  styleUrls: ['./currency-display.component.css']
})
export class CurrencyDisplayComponent implements OnInit {

  @Input() currency: string = '';
  @Input() value: number = 0;

  ngOnInit(): void {
  }
}
