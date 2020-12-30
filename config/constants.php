<?php
return [
    'group' => [
        'admin' => 1,
        'employee' => 2,
        'costumer' => 3
    ],
    'notifikasi' =>[
        'pengirim' =>[
            'system' => 0,
            'pusat' =>1,
            'badan_publik' =>2,
            'badan publik' =>2,
        ],
        'filter' =>[
            'pusat' =>1,
            'badan_publik' =>2,
            'verifikator' => 3,
        ],
        'baca' =>[
            'belum_dibaca' => 0,
            'dibaca' => 1,
        ],
    ],
    'status' => [
        'is_finished' => 1,
        'is_registered' =>1,

    ],


];
