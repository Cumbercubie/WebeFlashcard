@extends('layouts.app')
@section('content')
	<h1>Create Flashcard</h1>
	{!! Form::open(['action' => 'FlashcardsController@store','method'=>'POST']) !!}
		<div class="form-group">
			{{Form::label('category','Category')}}
			{{-- text(name,value,attributes) --}}
			{{Form::text('category','',['class'=>'form-control','placeholder'=>'Type in a category'])}}
		</div>
		<div class="form-group">
			{{Form::label('word','Card Word')}}
			{{Form::text('word','',['class'=>'form-control','placeholder'=>'Type word here'])}}
			{{Form::label('translation','Card Translation')}}
			{{Form::text('translation','',['class'=>'form-control','placeholder'=>'Type translation here'])}}
			{{Form::label('image','Card Image')}}
			{{Form::text('image','',['class'=>'form-control','placeholder'=>'Type translation here'])}}
			{{Form::label('audio','Card Audio')}}
			{{Form::text('audio','',['class'=>'form-control','placeholder'=>'Type audio here'])}}
			{{Form::label('definition','Card Definition')}}
			{{Form::text('definition','',['class'=>'form-control','placeholder'=>'Type definition here'])}}
		</div>
		{{Form::submit('submit',['class'=>'btn btn-primary '])}}
	{!! Form::close()  !!}
@endsection