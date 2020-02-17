<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ProductCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [

        ['id' => 1, 'name' => 'Shelf Talkers', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),], 
        ['id' => 2, 'name' => 'Window Signs', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),], 
        ['id' => 3, 'name' => 'Labels', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),], 
        ['id' => 4, 'name' => 'Display Signs', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),], 

        ];

        foreach ($items as $item) {
            \App\ProductCategories::create($item);
        }
    }
}
