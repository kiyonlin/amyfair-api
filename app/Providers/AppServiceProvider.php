<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Passport;
use Laravel\Passport\RouteRegistrar;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     */
    public function register()
    {
        if ($this->app->isLocal()) {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }

        Passport::ignoreMigrations();

        Passport::routes(function (RouteRegistrar $router) {
            $router->forAccessTokens();
        });

        Passport::tokensExpireIn(now()->addHours(8));

        Passport::refreshTokensExpireIn(now()->addDay());
    }
}
