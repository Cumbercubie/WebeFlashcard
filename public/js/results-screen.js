// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class ResultsScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    this.Wrong = document.querySelector("div#results div span.incorrect");
    this.Right = document.querySelector("div#results div span.correct");
    this.RightPercent = document.querySelector("div#results div span.percent");
    this.show = this.show.bind(this);

    const MenuButton = document.querySelector("div#results div.menu-buttons button.to-menu");
    this.callMenu = this.callMenu.bind(this);
    MenuButton.addEventListener('click', this.callMenu);
  }


  callMenu()
  {
  	var DeckContainer = document.getElementById('flashcard-container');
      while (DeckContainer.firstChild)
      {
        DeckContainer.removeChild(DeckContainer.firstChild);
      }
  	document.dispatchEvent(new CustomEvent('back-to-menu'));
  }

  show(numberCorrect, numberWrong, lengthDeck) {
    this.containerElement.classList.remove('inactive');
    this.Wrong.innerHTML = numberWrong;
    this.Right.innerHTML = numberCorrect;
    /*console.log('Correct: ' +numberCorrect);
    console.log('Deck size: ' +lengthDeck);*/
    var percent =  Math.floor((Number(numberCorrect) / Number(lengthDeck))*100);
    this.RightPercent.innerHTML = percent;

  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}
