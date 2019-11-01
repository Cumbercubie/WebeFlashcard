@extends('layouts.app')
@section('content')
	<link rel="stylesheet" href="{{asset('css/flashcard_show_style.css')}}">
	
	<div class="container">
	<a href="/flashcards" class="btn btn-primary"> Go back</a>
	<h1>{{$card->word}}</h1>
	<div id="cardTranslation"> 
		{{$card->translation}}
	</div>
	<small>Written on {{$card->created_at}}</small>
	</div>
@endsection