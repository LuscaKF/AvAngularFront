// src/app/pages/profile-list/profile-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Person } from '../../../interfaces/person-model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: Person[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.buscarTodos().subscribe(result => {
      this.profiles = result;
    }, error => {
      console.error(error);
    });
  }

  onDelete(id: string): void {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      this.profileService.excluir(id).subscribe(() => {
        this.profiles = this.profiles.filter(profile => profile.id !== id);
      });
    }
  }
}
