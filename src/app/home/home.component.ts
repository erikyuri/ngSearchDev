import { Component, inject } from '@angular/core';
import { SearchInputService } from '../_shared/search-input/search-input.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SearchInputService]
})
export class HomeComponent {

  readonly form = inject(SearchInputService).form;
  buttonStyle = { 'width': '176px', 'height': '48px', 'gap': '8px', 'margin': '10px', 'border-radius': '6px' };
  searchStyle = { 'width': '592px', 'height': '48px', 'border-radius': '6px' };

  onSubmit(event: Event) {

    event.preventDefault();


    this.form.disable();

    this.form.enable();
    console.log(this.form.controls.search.touched)
  }

}
