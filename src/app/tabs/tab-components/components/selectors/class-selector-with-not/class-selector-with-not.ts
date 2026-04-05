import { Component } from '@angular/core';

@Component({
  selector: '.class-selector-with-not:not(span)',
  imports: [],
  templateUrl: './class-selector-with-not.html',
  styleUrls: ['./class-selector-with-not.scss', '../components-styles.scss'],
})
export class ClassSelectorWithNot {}
