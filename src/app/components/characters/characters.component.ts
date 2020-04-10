import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css','../shared-styles.css']
})
export class CharactersComponent implements OnInit {
  public selectedCharacter: string
  public previousSelectedCharacter: string
  public showDescription: boolean
  public goodCharacters = []
  public badCharacters = []
  public specialCharacters = []

  ngOnInit() {
    this.showDescription = false
    this.addCharacterImages()
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

  public isSelectedCharacter(name: string) {
    return this.selectedCharacter === name && this.showDescription === true
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
