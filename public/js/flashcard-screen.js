// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Rewriting some of the existing methods, such as changing code in `show()`
// - Adding methods
// - Adding additional fields
var time=16;
var right=0;
var wrong=0;
var len =0;
var count=1;
var interval;
const countdownText = document.querySelector('#countdown');
const rightText = document.querySelector("#right");
const wrongText = document.querySelector("#wrong");
 function init()
 {
    right=0;
    wrong=0;
    rightText.innerHTML='';
    wrongText.innerHTML='';
 }
 function check(numberRight,numberWrong,DeckSize)
 {
    
    if ((numberRight+numberWrong) > count)
      return false;
    return true;
 }
 function setRight()
  {
    if (check(right+1,wrong,len)==true)
    {
      right++;
      /*const rightText = document.querySelector("#right");*/
      rightText.innerHTML = right+ " "; 
    }
    else
    {
      alert("Maximum questions");
    }
  }

  function setWrong()
  {
    if (check(right,wrong+1,len)==true)
    {
    wrong++;
    /*const wrongText = document.querySelector("#wrong");*/
    wrongText.innerHTML = wrong+ " "; 
    }
    else
    {
      alert("Maximum questions");
    }
   
  }

 function countdown()
 {
    if (time >0)
    {
      time--;
      countdownText.innerHTML = time;
    }
    else if (time===0)
    {
      countdownText.innerHTML = "Game Over";
    }

 }
class FlashcardScreen {
  constructor(containerElement) {
    interval = setInterval(countdown,1000);
    this.containerElement = containerElement;
    const flashcardContainer = document.querySelector('#flashcard-container');
    const nextCard = document.querySelector('#nextButton');
    const previousCard = document.querySelector('#previousButton');
   /* const rightButton = document.getElementById("#answer-right");*/
    const rightButton = document.querySelector("#answer-right");
    const wrongButton = document.querySelector("#answer-wrong");
    
    const wrongText = document.querySelector("#wrong");
    this.Container = flashcardContainer;
    this.cardDeck=[];

    this.putDeck = this.putDeck.bind(this);

    //load next flashcard of the current deck
    this._loadNextCard = this._loadNextCard.bind(this);
    nextCard.addEventListener('click', this._loadNextCard);


    //load previous flashcard of the current deck
    this._loadPreviousCard = this._loadPreviousCard.bind(this);
    previousCard.addEventListener('click', this._loadPreviousCard);


    rightButton.addEventListener('click', setRight);
    wrongButton.addEventListener('click', setWrong);
  }


  _loadNextCard()
  {
    /*console.log(right+' '+wrong + ' ' + len);*/
      len = Object.keys(this.cardDeck).length;
      if (count < len-1)
      {
        this.cardDeck[count-1]._hide();
        this.cardDeck[count]._show();  
        time=16;
      }
      else
      {
        this.cardDeck[count]._hide();
        const DeckResults =
        {
          rightScore : right,
          wrongScore : wrong,
          DeckLenght : len
        }
        // dispatch event to move to result screen
        document.dispatchEvent(new CustomEvent('end-of-deck', {detail: DeckResults}));
        console.log('end of deck');
        clearInterval(interval);
      }   
      count = count+1;
  }

  _loadPreviousCard()
  {
      len = Object.keys(this.cardDeck).length;
      if (count > 0)
      {
        /*console.log(count);*/
        this.cardDeck[count]._hide();
        count = count-1;
        this.cardDeck[count]._show();  
        time=16;
      }
      else
      {
        console.log('start of deck');
      }  
  }
  show() {
    this.containerElement.classList.remove('inactive');   
    /*const card = new Flashcard(flashcardContainer, 'word', 'definition');*/
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }


  putDeck(cardDeck)
  {
      init();
      this.cardDeck=[];
      const words=cardDeck.contents;
      for (const key of Object.keys(words))
      {
        /*console.log(key, words[key]);*/
        const card = new Flashcard(this.Container,key,words[key]);
        this.cardDeck.push(card);
      }
         len = Object.keys(this.cardDeck).length;
      this.cardDeck[0]._show();


  }

  /*putDeck(cardDeck, wordList)
  {
    const List = cardDeck.contents;
    console.log(List);
    for (const key of Object.key(List))
    {
      const card = new Flashcard(this.Container,key,words[key]);
      this.cardDeck.push(card);
    }
    this.cardDeck[0]._show();
  }*/

}
