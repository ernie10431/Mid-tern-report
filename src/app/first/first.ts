import { QuestService } from './../@services/quest-service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-first',
  imports: [FormsModule, RouterLink],
  templateUrl: './first.html',
  styleUrl: './first.scss'
})
export class First {
  constructor(private questService: QuestService) { }
  newQuestTeema: string = "";
  newQuestExplain: string = "";
  newStartT: string = "";
  newEndT: string = "";

  TPData() {
    this.questService.newQuestTeema = this.newQuestTeema
    this.questService.newQuestExplain=this.newQuestExplain
    this.questService.newStartT=this.newStartT
    this.questService.newEndT=this.newEndT
    console.log(132)
  }
}


