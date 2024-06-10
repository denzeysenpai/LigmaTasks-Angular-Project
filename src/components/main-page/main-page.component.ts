import { Component } from '@angular/core';
import { GenericPageContentFillerComponent } from '../generic-page-content-filler/generic-page-content-filler.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    GenericPageContentFillerComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  title1 = 'Newly Added Features'
  text1 = `
  Ligma tasks now has brand new features you should check out! 
  You are sure to love them! Now with brand new features, such
  as the Ligma AI 4.0, media magic 2.0 and the newly added fast scheduler!`
  image1 = '../../media/undraw_accept_tasks_re_09mv.svg'
  bool1 = false

  title2 = "Celebrate this day with us!"
  text2 = `
  This celebration is not only for us, but for the entire Ligma community!
  Join us in our 69th Anniversary and let's make it a memorable one, pro
  features will be free for the duration of the anniversary! Enjoy and happy
  69th!
  `
  image2 = '../../media/undraw_counting_stars_re_smvv.svg'
  bool2 = true
}
