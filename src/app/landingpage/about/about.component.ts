import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  team = [
    { name: "Rogeline M Cadorna", role: "Q/A Tester", img: "../../assets/rog.jpg" },
    { name: "Kristine May Solano", role: "Frontend Engineer", img: "../../assets/krstn.jpg" },
    { name: "Jastine Joy MASONGSONG", role: "Backend Engineer", img: "../../assets/joy.jpg" },
    { name: "KYM De Guzman", role: "Marketing Specialist", img: "../../assets/kym" },
    { name: "Francis Lee Recanil", role: "Full stock WEB DEVELOPMENT", img: "../../assets/francis.jpg" },
  ];
}
