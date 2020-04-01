import { Component, OnInit } from '@angular/core';
import { characterDescriptions } from './character-description.enum';
import { GetCharactersService } from 'src/app/services';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css','../shared-styles.css']
})
export class CharactersComponent implements OnInit {
  public selectedCharacter: string
  public previousSelectedCharacter: string 
  public allCharacterDescriptions = new Map()
  public showDescription: boolean
  public goodCharacters = []
  public badCharacters = []
  public specialCharacters = []

  private _getCharacter: GetCharactersService

  constructor (getCharacter: GetCharactersService) {
    this._getCharacter = getCharacter
  }

  ngOnInit() {
    this.showDescription = false
    this.addCharacterImages()
    this.addCharacterDescriptions()
    // this.goodCharacters = this._getCharacter.good
    // this.badCharacters = this._getCharacter.bad
    // this.specialCharacters = this._getCharacter.special
  }

  public setCharacter(name: string) {
    this.selectedCharacter = name
    if (this.showDescription) {
      if (this.previousSelectedCharacter !== this.selectedCharacter) {
        this.showDescription = true
      }
      else {
        this.showDescription = false
      }
    }
    else {
      this.showDescription = true
    }
    this.previousSelectedCharacter = name
  }

  public getDescription(): string {
    return this.allCharacterDescriptions.get(this.selectedCharacter)
  }

  public isSelectedCharacter(name: string) {
    return this.selectedCharacter === name && this.showDescription === true
  }

  private addCharacterDescriptions () {
    this.allCharacterDescriptions.set('merlin', characterDescriptions.merlin)
    this.allCharacterDescriptions.set('percival', characterDescriptions.percival)
    this.allCharacterDescriptions.set('minionG', characterDescriptions.minionG)
    this.allCharacterDescriptions.set('mordred', characterDescriptions.mordred)
    this.allCharacterDescriptions.set('morgana', characterDescriptions.morgana)
    this.allCharacterDescriptions.set('oberon', characterDescriptions.oberon)
    this.allCharacterDescriptions.set('assasin', characterDescriptions.assasin)
    this.allCharacterDescriptions.set('minionB', characterDescriptions.minionB)
    this.allCharacterDescriptions.set('lancelot', characterDescriptions.lancelot)
    this.allCharacterDescriptions.set('lakeLady', characterDescriptions.lakeLady)
  }

  private addCharacterImages () {
    this.goodCharacters.push(['merlin','../../website/assets/images/Merlin.png'])
    this.goodCharacters.push(['percival','../../website/assets/images/Percival.png'])
    this.goodCharacters.push(['minionG','../../website/assets/images/MinionG.png'])
    this.badCharacters.push(['mordred','../../website/assets/images/Mordred.png'])
    this.badCharacters.push(['morgana','../../website/assets/images/Morgana.png'])
    this.badCharacters.push(['oberon','../../website/assets/images/Oberon.png'])
    this.badCharacters.push(['assasin','../../website/assets/images/Assasin.png'])
    this.badCharacters.push(['minionB','../../website/assets/images/MinionB.png'])   
    this.specialCharacters.push(['lancelot','../../website/assets/images/Lancelot.png'])
    this.specialCharacters.push(['lakeLady','../../website/assets/images/LakeLady.png'])     
  }
}
