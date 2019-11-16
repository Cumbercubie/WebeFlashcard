@extends('layouts.appstudy')
@section('content')
    <div id="menu">
      <div class="contents">
        <header>
          <h1>FLASHCARDS</h1>
          <h2>Choose two card deck:</h2>
        </header>
        <div id="choices">
        </div>
      </div>
    </div>

    <div id="main" class="inactive">
      <span id="countdown">15</span>
      <div id="flashcard-container" touch-action="none"></div>
      <div class="status">
        <div class="correct"><span  id="right"></span>right</div>
        <div  class="incorrect"><span id="wrong"></span> wrong</div>
        <div class="menu-buttons">
            <button id="answer-right">Right</button>
            <button id="answer-wrong">Wrong</button>
        </div>
      </div>
      <div class="control-buttons">
        <button id="previousButton">Back</button>
        <button id="nextButton">Next</button>
      </div>
    </div>

    <div id="results" class="inactive">
      <h1>Results</h1>
      <div><span class="percent"></span>%</div>
      <div><span class="correct"></span> right</div>
      <div><span class="incorrect"></span> wrong</div>
      <div class="menu-buttons">
        <button class="continue">Continue</button>
        <button class="to-menu">Back to menu</button>
      </div>
    </div>
@endsection