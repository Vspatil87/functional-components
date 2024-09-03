import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loop-performance.component.html',
  styleUrl: './loop-performance.component.scss'
})
export class LoopPerformanceComponent {

  iterations: number = 1000000;
  results: { loopType: string, milliseconds: number, seconds: number, roundOfMs: number, roundOfS: number }[] = [];

  ngOnInit(): void {
    this.calculateLoopTimes();
  }

  calculateLoopTimes(): void {
    // For loop
    this.measureLoopTime('For Loop', () => {
      for (let i = 0; i < this.iterations; i++) {
        // Do something here
      }
    });

    // While loop
    this.measureLoopTime('While Loop', () => {
      let i = 0;
      while (i < this.iterations) {
        // Do something here
        i++;
      }
    });

    // Do-while loop
    this.measureLoopTime('Do-While Loop', () => {
      let i = 0;
      do {
        // Do something here
        i++;
      } while (i < this.iterations);
    });

    // For...of loop (for arrays)
    const array = Array.from({ length: this.iterations }, (_, i) => i);
    this.measureLoopTime('For...of Loop (Array)', () => {
      for (const item of array) {
        // Do something here
      }
    });

    // For...in loop (for objects)
    const object = { ...array };
    this.measureLoopTime('For...in Loop (Object)', () => {
      for (const key in object) {
        // Do something here
      }
    });

    // ForEach loop
    this.measureLoopTime('forEach Loop', () => {
      array.forEach(item => {
        // Do something here
      });
    });

    // Some loop
    this.measureLoopTime('some Loop', () => {
      array.some(item => {
        // Do something here
        return false; // Adjust the condition as needed
      });
    });

    // filter loop
    this.measureLoopTime('filter Loop', () => {
      array.filter(item => {
        // Do something here
      });
    });
    
    console.time('myLoop');
    for (let i = 0; i < this.iterations; i++) {
      // Loop logic
    }
    console.timeEnd('myLoop');
  }

  measureLoopTime(loopType: string, callback: () => void): void {
    const startTime = performance.now();
    callback();
    const endTime = performance.now();
    const milliseconds = endTime - startTime;
    const seconds = milliseconds / 1000;

    // Format the results for better readability
    const formattedSeconds = seconds.toFixed(3);
    const formattedMilliseconds = milliseconds.toFixed(5)

    this.results.push({ loopType, milliseconds, seconds, roundOfMs: parseFloat(formattedMilliseconds), roundOfS: parseFloat(formattedSeconds) });
  }
}
