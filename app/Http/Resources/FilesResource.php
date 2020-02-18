<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FilesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'      => (int) $this->id,
            'name'   => $this->name,
            'size'    => $this->human_readable_size,
            'mime_type'   => $this->mime_type,
            'path' => $this->getUrl(),
            'created_at' => $this->created_at->format('d-m-Y'),
            'full_size' => $this->size
        ];
    }
}
