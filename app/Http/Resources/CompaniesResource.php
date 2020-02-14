<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CompaniesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return [
          //  'id' => $this->id,
            //'name' => $this->name,
            //'company_code' => $this->company_code,
            //'created_at' => $this ->created_at,
            //'updated_at' => $this ->created_at
        //];
        return parent::toArray($request);
    }

    public function with($request)
    {
        return [
            'version' => '1.0.0',
            'api_url' => url('http://lpgvue/api')
        ];
    }
}