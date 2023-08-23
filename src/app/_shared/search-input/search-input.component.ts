import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { SearchInputService } from './search-input.service';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {

  @Input() label?: string = '';
  @Input() searchStyle = {};
  @Input() inputClass = 'p-input-icon-right p-float-label';
  readonly form = inject(SearchInputService).form;

}
