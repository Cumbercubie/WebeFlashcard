<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
if (App::environment('production')) {
    URL::forceScheme('https');
}
Route::get('/', function () {
    return view('welcome');
});

Route::get('/','PagesController@index');
Route::get('/about','PagesController@about');
Route::get('/services','PagesController@services');


//create route for every methods in FlashcardsController
Route::resource('flashcards','FlashcardsController');
/*Route::get('eFlashcard',function(){
	return 'xin chao cac ban';
});


Route::get('HoTen/{ten}',function($ten)
{
	echo ("Ten cua ban la: ".$ten);
});


Route::get('Ngay/{ngay}',function($ngay){
	echo "Hom nay la ngay" .$ngay;
})->where(['ngay'=>'[]+']);*/
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
