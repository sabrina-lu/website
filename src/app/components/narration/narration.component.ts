import { Component } from '@angular/core'
import { source } from './source.enum'

@Component({
  selector: 'narration',
  templateUrl: './narration.component.html',
  styleUrls: ['./narration.component.css', '../shared-styles.css']
})
export class NarrationComponent {
  public merlin: boolean
  public percival: boolean
  public mordred: boolean
  public oberon: boolean
  public lancelot: boolean

  public index = 0

  public orderOfNarrations = []

  public isPlaying: boolean
  
  constructor () {
    this.merlin = true
    this.isPlaying = false
   }

  public stopNarration() {
    window.location.reload()
  }

  public play(src: string) {
    var narration = document.createElement('audio')
    narration.src = src
    narration.load()
    narration.play()
  }

  public playButtonClicked() {
    this.findOrder()
    this.isPlaying = true
    this.playNarration()
  }

  public playNarration(time: number = 2500) {
    let duration: number
    let wait: number
    this.index === 0 ? wait = 0 : wait = time
    this.index === 0 ? duration = 0 : duration = this.orderOfNarrations[this.index - 1][1]
    setTimeout(() => {    
      this.play(this.orderOfNarrations[this.index][0])
      console.log(duration)
      this.index++
      this.index < this.orderOfNarrations.length ?  this.playNarration(time) : this.isPlaying = false
    }, duration + wait)
  }

  private findOrder() {
    this.orderOfNarrations.push([source.beginning, 5000]) 
    this.lancelot ? this.orderOfNarrations.push([source.lancelot, 4000]) : ""
    this.oberon&&this.mordred? this.orderOfNarrations.push([source.allEvil, 6000]) :
    this.oberon? this.orderOfNarrations.push([source.oberon, 6000]) :
    this.mordred? this.orderOfNarrations.push([source.mordred, 5000]) : this.orderOfNarrations.push([source.minions, 4000])
    this.orderOfNarrations.push([source.closeEyes, 1000]) 
    this.orderOfNarrations.push([source.merlin, 6000]) 
    this.orderOfNarrations.push([source.thumbsDown, 3000]) 
    this.percival? this.orderOfNarrations.push([source.percival, 8000],[source.thumbsDown, 3000]) : ""
    this.orderOfNarrations.push([source.ending, 3000])
    console.log(this.orderOfNarrations)
  }
}
