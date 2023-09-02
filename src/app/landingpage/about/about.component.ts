import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  team = [
    { name: "Aien Jazheel David", role: "Q/A Tester", img: "../../assets/aien.jpg" },
    { name: "Hans Vincent Aguilar", role: "Frontend Engineer", img: "../../assets/vincent.jpg" },
    { name: "Jeff Aloba", role: "Backend Engineer", img: "../../assets/jeff.jpg" },
    { name: "Louiez Julian", role: "Marketing Specialist", img: "../../assets/jayne.png" },
    { name: "Francis Lee Recanil", role: "UI/UX Developer", img: "../../assets/francis.jpg" },
  ];
}
