<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\MessageMail;
use Illuminate\Support\Facades\Mail;

class MessageController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function send(Request $request)
    {

		$isValidated = $this->validateMessage();

		Mail::to('bdoggincali@gmail.com')->send(new MessageMail($request));

		return($isValidated);

	}
	
	public function validateMessage() {

        return request()->validate([

            'name' => ['required', 'max:255'],

            'email' => ['required', 'email', 'max:255'],

            'message' => ['required', 'min:2', 'max:1000'],

        ]);
    }
}
