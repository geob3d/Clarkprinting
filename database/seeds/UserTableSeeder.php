<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;


class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            
            ['id' => 1, 'name' => 'ClarkPrinting','email' => 'geob3d@gmail.com', 'password' => Hash::make('admin'), 'role' => 2, 'user_name' => 'CPADMIN', 'company_fk' => 1, 'store_fk' => 1, 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],

        ];
        foreach ($items as $item) {
            \App\User::create($item);
        }
    }
}
