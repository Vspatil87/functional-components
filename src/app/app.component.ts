import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoopPerformanceComponent } from './loop-performance/loop-performance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoopPerformanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
