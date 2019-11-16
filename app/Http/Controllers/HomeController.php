<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Flashcard;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $userID = auth()->user()->id;
        $user = User::find($userID);
        /*$users = User::all();*/
        return view('home')->with('cards',$user->flashcards);/*->with('User',$users);*/
    }
}
