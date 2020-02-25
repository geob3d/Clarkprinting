<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImageCoordinatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('image_coordinates', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('model_id');
            $table->integer('row_id');
            $table->string('field_name');
            $table->string('field_type');
            $table->integer('font_size');
            $table->string('font_color');
            $table->decimal('x_coordinate');
            $table->decimal('y_coordinate');
            $table->decimal('scaleX')->nullable();
            $table->decimal('scaleY')->nullable();
            $table->decimal('width');
            $table->decimal('height');
            $table->decimal('angle')->nullable();
            $table->timestamps();

 
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('image_coordinates');
    }
}
