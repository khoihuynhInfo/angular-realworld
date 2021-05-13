import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-perfomance-track',
  templateUrl: './perfomance-track.component.html',
  styleUrls: ['./perfomance-track.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfomanceTrackComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  showLog(): string {
    console.log('== UI Track == ');

    return 'UI-Render';
  }
}
