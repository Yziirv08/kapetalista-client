import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const animateElement = document.querySelector('.animate-element') as HTMLElement;
    if (animateElement) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
            observer.unobserve(entry.target); 
          }
        });
      });
      observer.observe(animateElement);
    }
  }
}
