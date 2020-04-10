import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css', '../../shared-styles.css']
})
export class DescriptionsComponent implements OnInit {
  @Input() public character: string
  public name: string
  public ability: string
  public tip: string

  public allDescriptions = new Map()

  ngOnInit() {
    this.setDescriptions()
  }
  
  private setDescriptions() {
    this.allDescriptions.set('merlin', ['Merlin', 'He knows all Evil but Mordred', 'Hard to play'])
    this.allDescriptions.set('percival', ['Percival', 'Knows Merlin and Morgana', 'Hard to play'])
    this.allDescriptions.set('minionG', ['Loyal Servant Of Arthur', 'Does not know anything', 'Hard to play'])
    this.allDescriptions.set('mordred', ['Mordred', 'Unknown to Merlin', 'Hard to play'])
    this.allDescriptions.set('morgana', ['Morgana', 'Appears as Merlin', 'Hard to play'])
    this.allDescriptions.set('oberon', ['Oberon', 'Unknown to Evil', 'Hard to play'])
    this.allDescriptions.set('assasin', ['Assasin', 'Gets final decision', 'Hard to play'])
    this.allDescriptions.set('minionB', ['Minion Of Mordred', 'Knows other Evils', 'Hard to play'])
    this.allDescriptions.set('lancelot', ['Lancelot', 'Can be good or bad', 'Hard to play'])
    this.allDescriptions.set('lakeLady', ['Lady of The Lake', 'I keep forgetting what this character does', 'Hard to play'])
    this.getDescription()
  }

  private getDescription() {
    this.name = this.allDescriptions.get(this.character)[0]
    this.ability = this.allDescriptions.get(this.character)[1]
    this.tip = this.allDescriptions.get(this.character)[2]
  }

}
