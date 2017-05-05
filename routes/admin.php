<?php
//index路由
Route::get('/admin', function () {
    return view('admin.index');
});

//admin路由群组
Route::group(['as' => 'admin', 'prefix' => '/admin', 'namespace' => 'Admin'], function () {
//    //网页授权
//    Route::get('wxOauth', 'TvController@wxOauth');
});