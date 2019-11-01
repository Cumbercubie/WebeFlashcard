@extends('layouts.app')
@section('content')
	<div class="container">
	<h1>Flashcard</h1>
	@if(count($flashcards)>0)
		@foreach($flashcards as $card)
			<div class="well">
				<h3><a href="/flashcards/{{$card->id}}">{{$card->word}}</a></h3>
				<small>Written on {{$card->created_at}}</small>
			</div>
		@endforeach
		{{-- {{$flashcards->links()}} --}}
	@else
		<p>No cards found</p>
	@endif
	</div>
@endsection