<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TipoUsuario;

class Usuarios extends Model
{
    protected $table = 'usuarios';

    protected $fillable = [
        'tipo_usuario_id',
        'nombre',
        'apellido',
        'telefono',
        'direccion',
        'email',
        'password',

    ];

    public function tipo_usuario()
    {
        return $this->belongsTo(TipoUsuario::class);
    }

}
