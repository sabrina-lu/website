import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { source } from './source.enum'
import { GetCharactersService } from 'src/app/services'

@Component({
  selector: 'narration',
  templateUrl: './narration.component.html',
  styleUrls: ['./narration.component.css']
})
export class NarrationComponent implements OnInit{
  public merlin: boolean
  public percival: boolean
  public mordred: boolean
  public oberon: boolean
  public lancelot: boolean

  public orderOfNarrations = []

  public beginningNarration = new Audio()
  public minionsNarration = new Audio()
  public mordredNarration = new Audio()
  public oberonNarration = new Audio() 
  public allEvilNarration = new Audio()
  public closeEyesNarration = new Audio()
  public merlinNarration = new Audio()
  public thumbsDownNarration = new Audio()
  public percivalNarration = new Audio()
  public endingNarration = new Audio()

  public isPlaying: boolean
  
  public goodCharacters = []
  public badCharacters = []
  public specialCharacters = []

  private _getCharacter: GetCharactersService

  constructor (getCharacter: GetCharactersService) {
    this._getCharacter = getCharacter
    this.merlin = true
    this.isPlaying = false
   }

   public ngOnInit() {
    this.goodCharacters = this._getCharacter.good
    this.badCharacters = this._getCharacter.bad
    this.specialCharacters = this._getCharacter.special
   }

  public playNarration2() {
    this.isPlaying = true
    setTimeout(() => {
     this.playBeginning2()
    }, 1000)
  }

  public stopNarration() {
    this.isPlaying = false
    this.stop(this.beginningNarration)
    this.stop(this.minionsNarration)
    this.stop(this.mordredNarration)
    this.stop(this.oberonNarration)
    this.stop(this.allEvilNarration)
    this.stop(this.closeEyesNarration)
    this.stop(this.merlinNarration)
    this.stop(this.thumbsDownNarration)
    this.stop(this.percivalNarration)
    this.stop(this.endingNarration)
  }

  public play(narration: any, src: string) {
    narration.src=src
    narration.load()
    narration.play()
  }

  public stop(narration: any) {
    narration.src=""
    narration.currentTime = 0
  }
  public findOrder() {
    this.orderOfNarrations.push(source.beginning) 
    this.oberon&&this.mordred? this.orderOfNarrations.push(source.allEvil) :
    this.oberon? this.orderOfNarrations.push(source.oberon) :
    this.mordred? this.orderOfNarrations.push(source.mordred) : this.orderOfNarrations.push(source.minions)
    this.orderOfNarrations.push(source.closeEyes) 
    this.orderOfNarrations.push(source.merlin) 
    this.orderOfNarrations.push(source.thumbsDown) 
    this.percival? this.orderOfNarrations.push(source.percival,source.thumbsDown) : ""
    this.orderOfNarrations.push(source.ending)
    console.log(this.orderOfNarrations)
    this.playNarration()

  }

  public playNarration(time: number = 3000) {
    this.isPlaying = true
    let narration = new Audio()
    for (let i = 0; i < this.orderOfNarrations.length; i++) {
      this.play(narration, this.orderOfNarrations[i])
      console.log(narration.duration)
    }
  }

  public playBeginning2() {
    this.isPlaying? this.play(this.beginningNarration, "../../../assets/narrations/Beginning.mp3") : ""
    
    if (this.isPlaying&&this.mordred && this.oberon) {
      setTimeout(() => {
        this.playAllEvil()
      }, 5000)
    }
    else if (this.isPlaying&&this.oberon) {
      setTimeout(() => {
        this.playOberon()
      }, 5000) 
    }
    else if (this.isPlaying&&this.mordred) {
      setTimeout(() => {
        this.playMordred()
      }, 5000)
    }
    else if (this.isPlaying) {
      setTimeout(() => {
        this.playMinions()
      }, 5000)
    }
  }

  public playMinions() {
    this.isPlaying? this.play(this.minionsNarration, "../../../assets/narrations/Evil1.mp3") : ""
    setTimeout(() => { 
      this.playCloseEyes()
      }, 7000)
  }

  public playMordred() {
    this.isPlaying? this.play(this.mordredNarration, "../../../assets/narrations/Evil2.mp3") : ""
    setTimeout(() => { 
      this.playCloseEyes()
      }, 7000)
  }

  public playOberon() {
    this.isPlaying? this.play(this.oberonNarration, "../../../assets/narrations/Evil3.mp3") : ""
    setTimeout(() => { 
      this.playCloseEyes()
      }, 7000)
  }

  public playAllEvil() {
    this.isPlaying? this.play(this.allEvilNarration, "../../../assets/narrations/Evil4.mp3") : ""
    setTimeout(() => {
      this.playCloseEyes()
      },
      9000)
  }

  public playCloseEyes() {
    this.isPlaying? this.play(this.closeEyesNarration, "../../../assets/narrations/CloseEyes.mp3") : ""
    setTimeout(() => { 
      this.playMerlin()
      }, 3000)
  }

  public playMerlin() {
    this.isPlaying? this.play(this.merlinNarration, "../../../assets/narrations/Merlin.mp3") : ""
    setTimeout(() => {
      this.playThumbsDown()
      }, 9000)
  }

  public playThumbsDown() {
    this.isPlaying? this.play(this.thumbsDownNarration, "../../../assets/narrations/ThumbsDown.mp3") : ""
    setTimeout(() => { 
      this.percival? this.playPercival() : this.playEnding()
      }, 4000)
  }

  public playPercival() {
    this.isPlaying? this.play(this.percivalNarration, "../../../assets/narrations/Percival.mp3") : ""
    setTimeout(() => {
      this.playThumbsDown2()
      }, 10000)
  }

  public playThumbsDown2() {
    this.isPlaying? this.play(this.thumbsDownNarration, "../../../assets/narrations/ThumbsDown.mp3") : ""
    setTimeout(() => { 
      this.playEnding()
      }, 3000)

  }
  
  public playEnding() {
    this.isPlaying? this.play(this.endingNarration, "../../../assets/narrations/End.mp3") : ""
    setTimeout(() => {
      this.isPlaying = false
    }, 3500)
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
