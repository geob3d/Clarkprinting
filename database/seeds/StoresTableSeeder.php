<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class StoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $items = [
            
            ['id' => 1, 'company_id_fk' => 2,'banner_id_fk' => 17, 'customer_no' => 0001, 'corporate_office' => '1', 'name' => 'Clarkprinting', 'address' => '6 Audrey Pl', 'city' => 'Fairfield', 'state' => 'NJ', 'zip_code' => '07000', 'phone' => null,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 2, 'company_id_fk' => 1,'banner_id_fk' => 3, 'customer_no' => 3475, 'corporate_office' => '0', 'name' => 'Met-Food Connect Ltd 2', 'address' => '79-15 Elliot Ave', 'city' => 'Middle Village', 'state' => 'NY', 'zip_code' => '11379', 'phone' => '2013973503','created_at' => Carbon::now()->format('Y-m-d H:i:s'),],

        ];
        foreach ($items as $item) {
            \App\Stores::create($item);
        }
    }
}
