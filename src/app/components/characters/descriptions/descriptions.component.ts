import { Component, OnInit, Input } from '@angular/core';
import { info } from './info.enum';

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
    this.allDescriptions.set('merlin', [info.merlinName, info.merlinAbility, info.merlinTip])
    this.allDescriptions.set('percival', [info.percivalName, info.percivalAbility, info.percivalTip])
    this.allDescriptions.set('minionG', [info.GminName, info.GminAbility, info.GminTip])
    this.allDescriptions.set('mordred', [info.mordredName, info.mordredAbility, info.mordredTip])
    this.allDescriptions.set('morgana', [info.morganaName, info.morganaAbility, info.morganaTip])
    this.allDescriptions.set('oberon', [info.oberonName, info.oberonAbility, info.oberonTip])
    this.allDescriptions.set('assassin', [info.assassinName, info.assassinAbility, info.assassinTip])
    this.allDescriptions.set('lancelot', [info.lancelotName, info.lancelotAbility, info.lancelotTip])
    this.allDescriptions.set('lakeLady', [info.lakeLadyName, info.lakeLadyAbility, info.lakeLadyTip])
    this.getDescription()
  }

  private getDescription() {
    this.name = this.allDescriptions.get(this.character)[0]
    this.ability = this.allDescriptions.get(this.character)[1]
    this.tip = this.allDescriptions.get(this.character)[2]
  }
}
