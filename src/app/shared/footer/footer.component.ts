import { 
  ChangeDetectionStrategy, 
  Component, 
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FooterComponent {

  config: any = {
    fbLink: "https://www.facebook.com/trongkhoi.huynh.9674",
    githubLink: "https://github.com/khoihuynhInfo",
    linkinLink: "https://www.linkedin.com/in/khoi-huynh-b625a6185/",
    email: "huynhlutrongkhoi@gmail.com",
  }

  constructor() {

  }
}

