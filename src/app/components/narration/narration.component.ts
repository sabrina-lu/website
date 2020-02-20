import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'narration',
  templateUrl: './narration.component.html',
  styleUrls: ['./narration.component.css']
})
export class NarrationComponent implements OnInit {
  public merlin: boolean
  public percival: boolean
  public mordred: boolean
  public oberon: boolean
  public lancelot: boolean

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

  constructor() {
    this.merlin = true
   }

  ngOnInit() {
  }

  public playNarration() {
    
    this.playBeginning()
    
  }

  public playBeginning() {
    this.beginningNarration.src="../../../assets/narrations/Beginning.mp3"
    this.beginningNarration.play()
    if (this.mordred && this.oberon) {
      this.playAllEvil()
    }
    else if (this.oberon) {
      this.playOberon()
    }
    else if (this.mordred) {
      this.playMordred()
    }
    else {
      this.playMinions()
    }
  }

  public playMinions() {
    this.minionsNarration.src="../../../assets/narrations/Evil1.mp3"
    this.minionsNarration.play()
    this.playCloseEyes()
  }

  public playMordred() {
    this.mordredNarration.src="../../../assets/narrations/Evil2.mp3"
    this.mordredNarration.play()
    this.playCloseEyes()
  }

  public playOberon() {
    this.oberonNarration.src="../../../assets/narrations/Evil3.mp3"
    this.oberonNarration.play()
    this.playCloseEyes()
  }

  public playAllEvil() {
    this.closeEyesNarration.src="../../../assets/narrati-inons/Evil4.mp3"
    this.closeEyesNarration.play()
    this.playCloseEyes()
  }

  public playCloseEyes() {
    this.allEvilNarration.src="../../../assets/narrations/CloseEyes.mp3"
    this.allEvilNarration.play()
    this.playMerlin()
  }

  public playMerlin() {
    this.merlinNarration.src="../../../assets/narrations/Merlin.mp3"
    this.merlinNarration.play()
    this.playThumbsDown()
  }

  public playThumbsDown() {
    this.thumbsDownNarration.src="../../../assets/narrations/ThumbsDown.mp3"
    this.thumbsDownNarration.play()
    this.percival? this.playPercival() : this.playEnding()
  }

  public playPercival() {
    this.percivalNarration.src="../../../assets/narrations/Percival.mp3"
    this.percivalNarration.play()
    this.playThumbsDown2()
  }

  public playThumbsDown2() {
    this.thumbsDownNarration.src="../../../assets/narrations/ThumbsDown.mp3"
    this.thumbsDownNarration.play()
    this.playEnding()

  }
  
  public playEnding() {
    this.endingNarration.src="../../../assets/narrations/End.mp3"
    this.endingNarration.play()
  }

}
