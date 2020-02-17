<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(BannersTableSeeder::class);
        $this->call(CompaniesTableSeeder::class);
        $this->call(ProductAttributeTableSeeder::class);
        $this->call(ProductCategoriesSeeder::class);
        $this->call(StoresTableSeeder::class);
        $this->call(ProductTableSeeder::class);

    }
}
