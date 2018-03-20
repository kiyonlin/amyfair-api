<?php

namespace App\Modules\Auth;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'          => $this->id,
            'email'       => $this->email,
            'mobile'      => $this->mobile,
            'name'        => $this->name,
            'admin'       => !!$this->admin,
            'created_at'  => $this->created_at
        ];
    }
}
