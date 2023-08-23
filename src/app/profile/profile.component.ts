import { Component, OnInit, inject } from '@angular/core';
import { SearchInputService } from '../_shared/search-input/search-input.service';
import { User } from '../_shared/model/user.model';
import { RequestService } from '../_shared/request.service';
import { Router } from '@angular/router';
import { Repositories } from '../_shared/model/repositories.model';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [SearchInputService]
})
export class ProfileComponent implements OnInit {

  inputLabel = this.requestService.userData?.login || 'Search';
  twitterLink = `https://www.twitter.com/${this.requestService.userData?.twitter_username}`;
  userData?: User;
  repos?: Repositories[];

  readonly form = inject(SearchInputService).form;
  inputClass = 'p-input-icon-left p-float-label';
  searchStyle = { 'min-width': '590px', 'min-height': '48px', 'border-radius': '6px' };
  buttonStyle = { 'min-width': '280px', 'min-height': '48px', 'gap': '8px', 'margin': '10px', 'border-radius': '6px' };

  constructor(
    private requestService: RequestService,
    public router: Router
  ) {

  }

  ngOnInit(): void {
    this.checkUser();
    this.form.disable();
    this.userData = this.requestService.userData;
    this.getRepositories();
  }

  checkUser() {
    if (this.inputLabel == 'Search') {
      this.router.navigate(['home']);
    }
  }

  getRepositories() {
    const currentDate = new Date();
    this.requestService.getRepository(this.requestService.userData?.login).subscribe((res: Repositories[]) => {
      res.forEach(e => {
        var updatedAt = new Date(e.updated_at!);
        if (updatedAt.getFullYear() != currentDate.getFullYear()) {
          e.last_updated = `Atualizado a ${currentDate.getFullYear() - updatedAt.getFullYear()} anos`
        } else if (updatedAt.getMonth() != currentDate.getMonth()) {
          e.last_updated = `Atualizado a ${(currentDate.getMonth() - updatedAt.getMonth())} meses`
        } else {
          e.last_updated = `Atualizado a ${(currentDate.getDate() - updatedAt.getDate())} dias`
        }
      });
      this.repos = res;
    })
  }

  onSubmit(event: Event) {

    event.preventDefault();


    this.form.disable();

    this.requestService.getUser(this.form.value.search!).subscribe((res: User) => {
      this.requestService.userData = res;
      this.form.enable();
      this.router.navigate(['/profile']);
    })
  }

  redirectTo() {
    const blog = this.userData?.blog;

    if (blog) {
      window.open(blog, "_blank");
    } else {
      window.open(this.twitterLink, "_blank");
    }


  }
}
