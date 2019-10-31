<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

//Table name is Class name in plural: Flashcards
class Flashcard extends Model
{
    //Table name
    protected $table = 'flashcards';
    //Primary Key
    public $primaryKey = 'id';
    //Timestamps
    public $timestamps = true;
    
}
