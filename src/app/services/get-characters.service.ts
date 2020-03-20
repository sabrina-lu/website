import { Injectable } from '@angular/core';

@Injectable()
export class GetCharactersService {
    public good = []
    public bad = []
    public special = []

    constructor() {
        this.addCharacterImages()
    }

    private addCharacterImages () {
        this.good.push(['merlin','../../../assets/images/Merlin.png'])
        this.good.push(['percival','../../../assets/images/Percival.png'])
        this.good.push(['minionG','../../../assets/images/MinionG.png'])
        this.bad.push(['mordred','../../../assets/images/Mordred.png'])
        this.bad.push(['morgana','../../../assets/images/Morgana.png'])
        this.bad.push(['oberon','../../../assets/images/Oberon.png'])
        this.bad.push(['assasin','../../../assets/images/Assasin.png'])
        this.bad.push(['minionB','../../../assets/images/MinionB.png'])   
        this.special.push(['lancelot','../../../assets/images/Lancelot.png'])
        this.special.push(['lakeLady','../../../assets/images/LakeLady.png'])     
      }
}