<?php

namespace App\Collection\Providers;

use Illuminate\Support\ServiceProvider;

class CollectionServiceProvider extends ServiceProvider {

    public function register()
    {

        $this->app->bind(
            'App\Collection\Repository\RekapNilaiInterface',
            'App\Collection\Repository\Model\Rekapnilai'
        );
        $this->app->bind(
            'App\Collection\Repository\RekapnilaiverfikasiInterface',
            'App\Collection\Repository\Model\Nilaiverifikasi'
        );

        $this->app->bind(
            'App\Collection\Repository\RekapNilaiverifInterface',
            'App\Collection\Repository\Model\RekapNilaiVerif'
        );

        $this->app->bind(
            'App\Collection\Repository\RekapNilaiDetailVerifInterface',
            'App\Collection\Repository\Model\RekapDetailVerif'
        );

    }
}
