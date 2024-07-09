// src/app/pages/profile-list/profile-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Person } from '../../../interfaces/person-model';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Tem certeza que deseja excluir esta pessoa?',
      text: "Esta ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.profileService.excluir(id).subscribe(() => {
          this.profiles = this.profiles.filter(profile => profile.id !== id);
          Swal.fire(
            'Excluído!',
            'A pessoa foi excluída com sucesso.',
            'success'
          );
        });
      }
    });
  }
}
