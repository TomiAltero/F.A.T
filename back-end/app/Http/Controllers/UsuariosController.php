<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuarios;
use Illuminate\Support\Facades\DB;

class UsuariosController extends Controller
{
    public function index() {
        $users = DB::select('select * from usuarios');
        return $users;

    }

    public function show(string $id) {
        $user = DB::select('select * from usuarios where id = ?', [$id]);
        return $user;
    }
}
