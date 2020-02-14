<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            
            ['id' => 2, 'Sku' => 'SH01','name' => ' Custom Shelftalkers', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'price' => '1.10', 'ordering_company_id_fk' => '1', 'prod_cat_fk' => '1', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],           
            ['id' => 3, 'Sku' => 'DS01','name' => 'Display Signs', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'price' => '1.10', 'ordering_company_id_fk' => '1', 'prod_cat_fk' => '1', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],           
            ['id' => 4, 'Sku' => 'WS01','name' => 'Window Signs', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'price' => '1.10', 'ordering_company_id_fk' => '1', 'prod_cat_fk' => '1', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],           
            ['id' => 5, 'Sku' => 'L01','name' => 'Small Preprinted Label', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'price' => '1.10', 'ordering_company_id_fk' => '1', 'prod_cat_fk' => '1', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],           
            ['id' => 6, 'Sku' => 'L02','name' => 'Large Preprinted Label', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'price' => '1.10', 'ordering_company_id_fk' => '1', 'prod_cat_fk' => '1', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],           
            ['id' => 7, 'Sku' => 'L03','name' => 'Large Unit Price Labels', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'price' => '1.10', 'ordering_company_id_fk' => '1', 'prod_cat_fk' => '1', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],           
            ['id' => 8, 'Sku' => 'SH02','name' => 'Preprinted Shelftalker Stock', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'price' => '1.10', 'ordering_company_id_fk' => '1', 'prod_cat_fk' => '1', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],           
            ['id' => 9, 'Sku' => 'SH02','name' => 'Preprinted Display Stock', 'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'price' => '1.10', 'ordering_company_id_fk' => '1', 'prod_cat_fk' => '1', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],           


        ];
        foreach ($items as $item) {
            \App\Products::create($item);
        }
    }
}
