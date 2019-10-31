<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{	
	
    public function index()
    {
    	$title = 'Welcome to eFlashcard Laravel';
    	return view('index')->with('title',$title);
    }

    public function about()
    {	
    	$title = 'About us';
    	return view('about')->with('title',$title);
    }
    public function services(){
    	$data = array(
    		'title' => 'Services',
    		'services' =>['Study','Test','Create']
    	);
    	return view('services')->with($data);
    }
}
