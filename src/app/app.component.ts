import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SimpleEvent';
  message = "message par defaut";


  handleHelloClick(){
    alert ('Hello');
  }

  handleHelloDoubledClock(){
    alert ('Hello Hello');
  }

  handleEvent (event: Event){
    if(event.target instanceof HTMLButtonElement)
    {
      alert('ok')
    }
const button = event.target as HTMLButtonElement;
console.log(button.value);
  }

  handleEventTwo (event: Event){
    if(event.target instanceof HTMLHeadingElement)
    {
      alert('stop')
    }
    const header = event.target as HTMLHeadElement;
    console.log(header.innerText);
  }

  handleMouseEvent(mousevent: MouseEvent){
    console.log(`${mousevent.clientX} ${mousevent.clientY}`);

  }

  handleAndGetProperty(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  handleKeyDown(event: Event){
    const ev = event as KeyboardEvent;
    console.log(ev.key);
  }
  // //handleKeyDown(event: Event) {
  // const ev = event as KeyboardEvent;
  // if (ev.key === 'Enter') {
  //   // Faire quelque chose lorsque la touche Entrée est pressée
  // }
}


