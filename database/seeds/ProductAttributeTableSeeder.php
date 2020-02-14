<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ProductAttributeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            
            ['id' => 1, 'Banner_ID_fk' => 2,'Dept_ID_fk' => '1', 'Prod_ID_fk' => '1',  'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],           

        ];
        foreach ($items as $item) {
            \App\Product_Attribute::create($item);
        }
    }
}
