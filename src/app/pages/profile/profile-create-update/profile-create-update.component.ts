// src/app/components/profile-create-update/profile-create-update.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-create-update',
  templateUrl: './profile-create-update.component.html',
  styleUrls: ['./profile-create-update.component.css']
})
export class ProfileCreateUpdateComponent implements OnInit {
  profileForm: FormGroup;
  isEditMode: boolean = false;
  profileId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      isActive: [false],
      country: [''],
      experience: [''],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.profileId = id;
        this.profileService.buscarPorId(id).subscribe(profile => {
          this.profileForm.patchValue(profile);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const formValue = this.profileForm.value;
      if (this.isEditMode && this.profileId) {
        formValue.id = this.profileId;
        this.profileService.atualizar(formValue).subscribe(() => {
          Swal.fire({
            title: 'Usuário atualizado com sucesso!',
            text: 'Continue editando usuários!',
            icon: 'success',
          })
          this.router.navigate(['/profile']);
        });
      } else {
        this.profileService.cadastrar(formValue).subscribe(() => {
          Swal.fire({
            title: 'Usuários cadastrado com sucesso!',
            text: 'Continue cadastrando usuários como preferir!',
            icon: 'success',
          })
          this.router.navigate(['/profile']);
        });
      }
    }
  }
}
