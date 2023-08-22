import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { SearchInputService } from './search-input.service';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {

  @Input() label = '';
  @Input() searchStyle = {};
  readonly form = inject(SearchInputService).form;

}
