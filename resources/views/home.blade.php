@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    You are logged in!
                    {{-- <div>
                        Your information here:
                        <h5>Id:</h5>
                        <p>{{$User->id}}</p>
                        <h5>Username:</h5>
                        <p>{{$User->name}}</p>
                        <h5>Email:</h5>
                        <p>{{$User->email}}</p>
                    </div> --}}
                   {{--  @if(count($User)>0)
                        @foreach ($User as $user)
                            <div class="card-body">
                                <h3><a href="/flashcards/{{$user->id}}">{{$user->name}}</a></h3>
                                    <small>Email: {{$user->email}}</small>
                            </div>
                        @endforeach
                    @else 
                        <div>Can't find any user</div>
                    @endif --}}
                </div>
              
            </div>
        </div>
    </div>
</div>
@endsection
