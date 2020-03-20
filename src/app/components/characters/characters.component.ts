import { Component, OnInit } from '@angular/core';
import { characterDescriptions } from './character-description.enum';
import { GetCharactersService } from 'src/app/services';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public selectedCharacter: string
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
    this.addCharacterDescriptions()
    this.goodCharacters = this._getCharacter.good
    this.badCharacters = this._getCharacter.bad
    this.specialCharacters = this._getCharacter.special
  }

  public setCharacter(name: string) {
    this.showDescription = !this.showDescription
    this.selectedCharacter = name
  }

  public getDescription(): string{
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
}
