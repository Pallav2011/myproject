import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedchangesGuard implements CanDeactivate<ReactiveformComponent> {
  canDeactivate(component: ReactiveformComponent){
    if (component.myForm.dirty) {
      return window.confirm('You have unsaved changes. are you sure you want to navigate?')
    }
    return true;
  }
}
