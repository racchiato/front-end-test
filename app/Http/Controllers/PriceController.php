<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Price;
use DB;

class PriceController extends Controller
{
    public function postHostingPlan(Request $request)
    {
        $price = new Price;
        $price->price = $request->price;
        $price->name = $request->name;
        $price->discounted = $request->discounted;
        $price->best = $request->best;
        $price->save();

        return response()->json(['message' => 'successfully added']);
    }

    public function getHostingPlan()
    {
        $result = Price::all()->sortBy('price');

        return response()->json($result);
    }

    public function gantiPersonal()
    {
        $price = Price::where('name', 'Personal')->first();
        $price->best = 1;
        $price->save();

        return response()->json($price);
    }
}
