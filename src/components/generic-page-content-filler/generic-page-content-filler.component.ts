import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-page-content-filler',
  standalone: true,
  imports: [],
  templateUrl: './generic-page-content-filler.component.html',
  styleUrl: './generic-page-content-filler.component.css'
})
export class GenericPageContentFillerComponent {
  @Input() imageAtLeft = true
  @Input() title = ''
  @Input() text = ''
  @Input() image = ''
}
