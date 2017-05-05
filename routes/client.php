<?php
//index路由
Route::get('/', function () {
    return view('client.index');
});

//client路由群组
Route::group(['as' => 'client', 'prefix' => '/', 'namespace' => 'Client'], function () {
//    //网页授权
//    Route::get('wxOauth', 'TvController@wxOauth');
});