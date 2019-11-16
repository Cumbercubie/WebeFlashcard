// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields
class Button{
  constructor(containerElement,text,event)
  {
    this.containerElement = containerElement;
    this.text= text;
    this.event = event;
    
    this.onClick = this.onClick.bind(this);
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', this.onClick);
    /*this.containerElement.append(button);*/
    return button;
  }

  onClick()
  {
    const eventInfo = 
    {
      buttonName: this.text
    };
    /*this.event.menu.hide();
    this.event.flashcards.show();*/
    console.log('Clicked ' + this.text);
    document.dispatchEvent(new CustomEvent('button-click', {detail: eventInfo}));
  }

}
class App {
  constructor(DeckContainer) {
    this.container =  DeckContainer;
    this.decks=[];
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);

    const mainElement = document.querySelector('#main');
    this.flashcards = new FlashcardScreen(mainElement);

    const resultElement = document.querySelector('#results');
    this.results = new ResultsScreen(resultElement);

    this._fillDeck = this._fillDeck.bind(this);
    if (isFirst===0)
	{
		isFirst=1;    
		this._fillDeck();
	}
    this.showButtonClicked = this.showButtonClicked.bind(this);
    document.addEventListener('button-click',this.showButtonClicked);

    this.showResults = this.showResults.bind(this);
    document.addEventListener('end-of-deck',this.showResults);

    this.backtoMenu = this.backtoMenu.bind(this);
    document.addEventListener('back-to-menu',this.backtoMenu);
    /*this._onDeckPicked = this._onDeckPicked.bind(this);
    document.addEventListener('click',this._onDeckPicked);*/

    // Uncomment this pair of lines to see the "flashcard" screen:
    /*this.menu.hide();
    this.flashcards.show();*/

    // Uncomment this pair of lines to see the "results" screen:
    // this.menu.hide();
    // this.results.show();
  }

  backtoMenu()
  {
  	this.menu.show();
  	this.results.hide();
  }

  showResults(event)
  {
  	const wrongAns = event.detail.wrongScore;
  	const rightAns = event.detail.rightScore;
  	const amountOfQuestions = event.detail.DeckLength;
  	this.flashcards.hide();
  	this.results.show(rightAns,wrongAns,len);
  }

  showButtonClicked(event)
  {
  	const source = QUESTIONS.find( ({category}) => category === event.detail.buttonName);
  	this.flashcards.putDeck(source);
  	this.menu.hide();
    this.flashcards.show();
    /*const buttonName = event.currentTarget.textContent;
    console.log('showButtonClicked Clicked ' + buttonName);*/
  }

  _fillDeck()
  {
    // for (const source of FLASHCARD_DECKS)
    // {
    //   const deck = new Button(this.container,source.title,this);
    //   const deck1 = new Deck(this.container,source);
    //   /*this.decks.push(deck);*/
    //   /*console.log(source.title);*/
    //   this.flashcards.putDeck(source);
    // }
    this.decks = [];
    for (const source of QUESTIONS)
    {
      const title = source.category;
      const listItems = source.contents;	
      const deck = new Button(this.container,title,this);
      this.decks.push(deck);
      /*this.flashcards.putDeck(source);*/
    }

    for (var i=0;i<this.decks.length;i++)
    {
    	this.container.append(this.decks[i]);
    }
   	/*const source = QUESTIONS.find( ({category}) => category === 'Phần cứng');
   	this.flashcards.putDeck(source);*/
  }

}

