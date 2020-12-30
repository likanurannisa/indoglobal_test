<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Config;

class KirimEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $kirimemail;

    public function __construct($kirimemail)
    {
        $this->kirimemail = $kirimemail;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
     public function build()
    {
        
        $address = Config::Get('constants.MAIL.address');
        $name = Config::Get('constants.MAIL.name');
        $subject = Config::Get('constants.MAIL.subject.notifikasi_aktivasi');

        $data = array();

        return $this->text('email.verifikasi')
                ->from($address, $name)
                ->subject($subject)
                ->with($data);
    }
}
