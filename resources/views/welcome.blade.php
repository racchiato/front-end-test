<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="{{ mix('css/app.css')}}">
        <link rel="stylesheet" href="{{ mix('css/custom.css')}}">
    </head>
    <body>
        <div id='app'>
            <login-bar></login-bar>
        	<navigation-bar></navigation-bar>
            <main-header></main-header>
            <php-features></php-features>
            <php-limit></php-limit>
            <hosting-features></hosting-features>
            <laravel-support></laravel-support>
            <php-modules></php-modules>
            <linux-hosting></linux-hosting>
            <share-bar></share-bar>
            <help-support></help-support>
            <main-footer></main-footer>
        </div>
    	<script src="{{ mix('js/app.js')}}"></script>
    </body>
</html>
