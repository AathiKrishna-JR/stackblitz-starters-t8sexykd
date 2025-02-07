import { Component, computed, inject } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from './auth/auth.directive';
import { DisplayFont } from './display.pipe';
import { FormsModule } from '@angular/forms';
import { temperature } from './temperature.pipes';
import { CurrencyPipe, DatePipe, DecimalPipe,  } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent,AuthDirective , LearningResourcesComponent,DisplayFont,FormsModule,temperature, CurrencyPipe, DecimalPipe],
  providers : [DatePipe]
})
export class AppComponent {
  private authService = inject(AuthService);
  isAdmin = computed(() => this.authService.activePermission() === 'admin')
  displayName = "aaa";
  displayDate: Date = new Date(); 
  temp? : number | string;
  money ?: string | number ;
  setDetails(det :{name :string,date :Date}){
    this.displayName = det.name.split('@')[0];
    this.displayDate = det.date

  }
  onModelChange(tem :string){
        this.temp = tem ;
  }
  onChange(m :string){
    console.log("aaaaaaa");
    this.money = m ;
}
  
}