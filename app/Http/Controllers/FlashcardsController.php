<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Flashcard;
class FlashcardsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cards=Flashcard::all();

        //take only 1 record
        /*$cards=Flashcard::orderBy('id','desc')->take(1)->get();*/

        /*$cards=Flashcard::orderBy('id','desc')->paginate(1);  */          
        //$cards  = Flashcard::orderBy('id','desc')->get();
        //$card = Flashcard::where('word','environment')->get();
        //$cards = DB::select('SELECT * FROM flashcards')
        return view('flashcards.index')->with('flashcards',$cards);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('flashcards.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
                'category'=>'required',
                'word'=>'required',
                'translation'=> 'required',
                'definition'=> 'required'
              /*  'image'=> 'required',
                'audio'=> 'required'*/
        ]);
        // Create flashcard
        $card = new Flashcard;
        $card->word = $request->input('word');
        $card->translation = $request->input('translation');
        $card->definition = $request->input('definition');
        $card->imageUrl = '';
        $card->audioUrl = '';
        $card->userID = auth()->user()->id;
        $card->save();
        return redirect('/flashcards')->with('success','Flashcard Created');


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        $card = Flashcard::find($id);
        return view('flashcards.show')->with('card',$card);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
