export enum info {

    merlinName = 'Merlin',
    merlinAbility = 'Knows all evil but Mordred',
    merlinTip = 'You must guide the loyal servants in the right direction. '+
                'Do not call out a player for being Evil without any logical reasoning to back it up. '+
                'Try to make deductions based on actions taken by players in the game. '+
                'To figure out who Mordred is, pay attention who the minions side with.',

    percivalName = 'Percival',
    percivalAbility = 'Knows Merlin and Morgana',
    percivalTip = 'His goal is to figure out who Merlin is and try to act like him. '+
                  'Do not be too loud, because Merlin would not be that outright and it will be too obivous that you are Percival. '+
                  'To figure out who Merlin is, pay attention to each player when they pick their quests. '+
                  'Morgana will very likely choose Merlin on a quest, but Merlin would try to avoid Morgana.',

    GminName = 'Loyal Servant of Arthur',
    GminAbility = 'No ability',
    GminTip = 'Try to figure out who is bad based on mission failures and voting. '+
              'Do not be quiet just because you know nothing, try to act like Merlin.',

    mordredName = 'Mordred',
    mordredAbility = 'Unknown to Merlin',
    mordredTip = 'He should try to act like a Loyal Servant of Arthur and only fail when two quests have already failed. '+
                 'Try to go against your teammates to make it look like you guys are on opposite teams. ',

    morganaName = 'Morgana',
    morganaAbility = 'Appears as Merlin',
    morganaTip = 'Try to act like Merlin to confuse Percival, '+
                 'Since you are Evil you have as much information as Merlin and can use this to your advantage while voting. '+
                 'If you have been chosen on a quest with Merlin, Percival will definitely reject it. '+
                 'Identify who Percival is and pay attention to who he is trying to compare you with.',

    oberonName = 'Oberon',
    oberonAbility = 'Unknown to Evil',
    oberonTip = 'Since he does not know his teammates and his teammates do not know him, Oberon must figure out who the other evil players are. '+
                'Try to fail missions to help your teammates identify who you are, but this might cause two failures. ',

    assassinName = 'Assassin',
    assassinAbility = 'If Evil players can not come to agreement who Merlin is, Assassin gets final pick',
    assassinTip = 'Try to fail quests with more people and use logic to blame someone else. '+
                  'You can try to figure out who Merlin is because only he knows you are Evil. '+
                  'Keep track of who does not want you on the quest.',

    lancelotName = 'Lancelot',
    lancelotAbility = 'Switches loyalty during the game',
    lancelotTip = 'Replace one Evil and Good character card with an Evil and Good Lancelot character card. '+
                  'Create a Loyalty deck made up of 3 "No Change" cards and 2 "Switch Allegience" cards. ' +
                  'At the beginning of the 3rd quest and every quest afterwards, a card from the Loyalty deck is revealed. '+
                  'If a "Switch Allegience" card is flipped, then the two Lancelots secretly switch loyalties.',

    lakeLadyName = 'Lady of the Lake',
    lakeLadyAbility = 'Chooses a player to see their loyalty',
    lakeLadyTip = 'At the beginning of the game, this card is given to the person to the right of the Quest Giver. ' +
                  'At the end of each round, the card moves along the table in a counter clockwise direction. '+
                  'After the second, third and fourth quest the player with this card can choose someone to look at their loyalty. '+
                  'Basically, the chosen player gets handed two cards: one blue(Good) and one red(Evil). '+
                  'They must give the Lady of the Lake their correct loyalty and it is up to the Lady of the Lake to lie about that players loyalty.'
}