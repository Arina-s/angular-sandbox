import { Component } from '@angular/core';
import { TagSelector } from './components/selectors/tag-selector/tag-selector';
import { AttributeSelector } from './components/selectors/attribute-selector/attribute-selector';
import { ClassSelector } from './components/selectors/class-selector/class-selector';
import { ExactAttributeSelector } from './components/selectors/exact-attribute-selector/exact-attribute-selector';
import { ClassSelectorWithNot } from './components/selectors/class-selector-with-not/class-selector-with-not';
import { TagSelectorWithAttribute } from './components/selectors/tag-selector-with-attribute/tag-selector-with-attribute';
import { MultipleSelectors } from './components/selectors/multiple-selectors/multiple-selectors';

@Component({
  selector: 'app-tab-components',
  imports: [TagSelector, ClassSelector, AttributeSelector, ExactAttributeSelector, ClassSelectorWithNot, TagSelectorWithAttribute, MultipleSelectors],
  templateUrl: './tab-components.html',
  styleUrl: './tab-components.scss',
})
export class TabComponents {}
  