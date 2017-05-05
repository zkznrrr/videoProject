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

//index路由
Route::get('/', function () {
    return view('welcome');
});
//
////看tv路由群组
//Route::group(['as' => 'tv', 'prefix' => '/tv', 'namespace' => 'Mobile'], function () {
//    //网页授权
//    Route::get('wxOauth', 'TvController@wxOauth');
//    //看tv index
//    Route::get('/', 'TvController@index');
//    //节目集详情页
//    Route::get('/details/{program_seriesid}', 'TvController@tvDetails');
//    //单分区页（电影、电视剧）
//    Route::get('/playList/{type}', 'TvController@playList');
//    //单分区列表全部显示页（电影、电视剧）
//    Route::get('/playList/{type}/moreItems', 'TvController@moreItems');
//    //单分区列表全部显示页（电影、电视剧）加载数据请求
//    Route::post('/getListData', 'TvController@getListData');
//    //搜索页
//    Route::get('/searchPage', 'TvController@searchPage');
//    //获取搜索数据
//    Route::post('/searchData', 'TvController@getSearchPrograms');
//    //分类查找结果页
//    Route::get('/classify', 'TvController@classify');
//    //分类查找结果页数据
//    Route::post('/classifyData', 'TvController@getRetrievalProgramSerialListByKeywordXML');
//    //分类查找面板动态改变选项Ajax
//    Route::post('/classifyAjax', 'TvController@getClassifyTagAjax');
//    //节目集详情页电影类相关推荐分页数据
//    Route::post('/getRelationRecommend', 'TvController@getRelationRecommend');
//    //节目集详情页收藏
//    Route::post('/programsetAdd', 'TvController@programsetAdd');
//});