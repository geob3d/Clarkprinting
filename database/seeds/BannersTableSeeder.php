<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class BannersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $items = [
            
            ['id' => 1, 'company_id' => 1, 'name' => 'Metropolitan', 'chain_no' => 90018,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 2, 'company_id' => 1, 'name' => 'Pioneer', 'chain_no' => 36145,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 3, 'company_id' => 1, 'name' => 'Met', 'chain_no' => 43562,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 4, 'company_id' => 1, 'name' => 'Associated', 'chain_no' => 48850,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 5, 'company_id' => 1, 'name' => 'Fresh Imperium', 'chain_no' => 36146,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 6, 'company_id' => 1, 'name' => 'Met Fresh', 'chain_no' => 43563,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 7, 'company_id' => 1, 'name' => 'Associated Fresh', 'chain_no' => 48851,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 8, 'company_id' => 1, 'name' => 'Compare', 'chain_no' => 46680,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 9, 'company_id' => 1, 'name' => 'Uncle Giusseppes', 'chain_no' => 33556,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 10, 'company_id' => 1, 'name' => 'Generic', 'chain_no' => 33558,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['id' => 11, 'company_id' => 1, 'name' => 'Compare Fresh', 'chain_no' => 46681,'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],

        ];

        foreach ($items as $item) {
            \App\Banners::create($item);
        }




    }
}
