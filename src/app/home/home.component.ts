import { Component, inject } from '@angular/core';
import { SearchInputService } from '../_shared/search-input/search-input.service';
import { RequestService } from '../_shared/request.service';
import { User } from '../_shared/model/user.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SearchInputService]
})
export class HomeComponent {

  readonly form = inject(SearchInputService).form;
  buttonStyle = { 'min-width': '176px', 'min-height': '48px', 'gap': '8px', 'margin': '10px', 'border-radius': '6px' };
  searchStyle = { 'min-width': '592px', 'min-height': '48px', 'border-radius': '6px' };

  constructor(
    private requestService: RequestService,
    public router: Router
  ) { }

  onSubmit(event: Event) {

    event.preventDefault();

    this.form.disable();
    this.requestService.getUser(this.form.value.search!).subscribe((res: User) => {
      this.requestService.userData = res;
      this.form.enable();
      this.router.navigate(['/perfil']);
    }, error => {
      this.form.enable();
    })
  }

}
