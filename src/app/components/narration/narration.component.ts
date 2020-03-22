import { Component } from '@angular/core'
import { source } from './source.enum'

@Component({
  selector: 'narration',
  templateUrl: './narration.component.html',
  styleUrls: ['./narration.component.css']
})
export class NarrationComponent {
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
  
  constructor () {
    this.merlin = true
    this.isPlaying = false
   }

  public stopNarration() {
    window.location.reload()
  }

  public playNarration() {
    this.isPlaying = true
    setTimeout(() => {
     this.playBeginning2()
    }, 1000)
  }

  public play(narration: any, src: string) {
    narration.src=src
    narration.load()
    narration.play()
  }

  public playNarration2(time: number = 3000) {
    this.findOrder()
    this.isPlaying = true
    let narration = new Audio()
    for (let i = 0; i < this.orderOfNarrations.length; i++) {
      this.play(narration, this.orderOfNarrations[i])
      console.log(narration.duration)
    }
  }

  public playBeginning2() {
    this.play(this.beginningNarration, source.beginning)
    
    if (this.mordred && this.oberon) {
      setTimeout(() => {
        this.playAllEvil()
      }, 5000)
    }
    else if (this.oberon) {
      setTimeout(() => {
        this.playOberon()
      }, 5000) 
    }
    else if (this.mordred) {
      setTimeout(() => {
        this.playMordred()
      }, 5000)
    }
    else {
      setTimeout(() => {
        this.playMinions()
      }, 5000)
    }
  }

  public playMinions() {
    this.play(this.minionsNarration, source.minions) 
    setTimeout(() => { 
      this.playCloseEyes()
      }, 7000)
  }

  public playMordred() {
    this.play(this.mordredNarration, source.mordred)
    setTimeout(() => { 
      this.playCloseEyes()
      }, 7000)
  }

  public playOberon() {
    this.play(this.oberonNarration, source.oberon)
    setTimeout(() => { 
      this.playCloseEyes()
      }, 7000)
  }

  public playAllEvil() {
    this.play(this.allEvilNarration, source.allEvil)
    setTimeout(() => {
      this.playCloseEyes()
      },
      9000)
  }

  public playCloseEyes() {
    this.play(this.closeEyesNarration, source.closeEyes)
    setTimeout(() => { 
      this.playMerlin()
      }, 3000)
  }

  public playMerlin() {
    this.play(this.merlinNarration, source.merlin)
    setTimeout(() => {
      this.playThumbsDown()
      }, 9000)
  }

  public playThumbsDown() {
    this.play(this.thumbsDownNarration, source.thumbsDown)
    setTimeout(() => { 
      this.percival? this.playPercival() : this.playEnding()
      }, 4000)
  }

  public playPercival() {
    this.play(this.percivalNarration, source.percival)
    setTimeout(() => {
      this.playThumbsDown2()
      }, 10000)
  }

  public playThumbsDown2() {
    this.play(this.thumbsDownNarration, source.thumbsDown)
    setTimeout(() => { 
      this.playEnding()
      }, 3000)

  }
  
  public playEnding() {
    this.play(this.endingNarration, source.ending)
    setTimeout(() => {
      this.isPlaying = false
    }, 3500)
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private findOrder() {
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
  }
     

}
