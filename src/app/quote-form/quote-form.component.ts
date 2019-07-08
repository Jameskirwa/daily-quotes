import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Input() quotes: Quotes;

  @Output() quoteUpdate = new EventEmitter<Quotes>();

  newQuote = new Quotes( 0, '', '', '', new Date(), 0, 0 );
  submit() {
    this.quoteUpdate.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {

  }

}
