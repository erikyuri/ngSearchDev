import { inject, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class SearchInputService {

  readonly form = inject(FormBuilder).group({
    search: ['', [Validators.required]]
  })

  constructor() {

  }
}
