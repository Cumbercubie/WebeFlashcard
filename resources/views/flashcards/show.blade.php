@extends('layouts.app')
@section('content')
	<a href="/flashcards" class="btn btn-default"> Go back</a>
	<h1>{{$card->word}}</h1>
	<small>Written on {{$card->created_at}}</small>
	<div>
		{{$card->translation}}
	</div>
@endsection