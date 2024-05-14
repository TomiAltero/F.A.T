<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Usuarios;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuarios = Usuarios::all();
        return $usuarios;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $usuario = new Usuarios();

        $usuario->tipo_usuario_id = $request->tipo_usuario_id;
        $usuario->nombre = $request->nombre;
        $usuario->apellido = $request->apellido;
        $usuario->telefono = $request->telefono;
        $usuario->direccion = $request->direccion;
        $usuario->email = $request->email;
        $usuario->password = $request->password;

            $usuario->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $usuario = Usuarios::find($id);
        return $usuario;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $usuario = Usuarios::find($id);

        $usuario->tipo_usuario_id = $request->tipo_usuario_id;
        $usuario->nombre = $request->nombre;
        $usuario->apellido = $request->apellido;
        $usuario->telefono = $request->telefono;
        $usuario->direccion = $request->direccion;
        $usuario->email = $request->email;
        $usuario->password = $request->password;

        $usuario->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $usuario = Usuarios::find($id);
        $usuario->delete();
    }
}
