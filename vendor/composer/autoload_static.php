<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit60121f8a3f4004058fd642b3e05fdbb3
{
    public static $files = array (
        'f0b9d51884e28b28685ab36b3a87f700' => __DIR__ . '/..' . '/pcrov/unicode/src/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'p' => 
        array (
            'pcrov\\JsonReader\\' => 17,
        ),
        'P' => 
        array (
            'Psr\\Http\\Message\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'pcrov\\JsonReader\\' => 
        array (
            0 => __DIR__ . '/..' . '/pcrov/jsonreader/src',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit60121f8a3f4004058fd642b3e05fdbb3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit60121f8a3f4004058fd642b3e05fdbb3::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit60121f8a3f4004058fd642b3e05fdbb3::$classMap;

        }, null, ClassLoader::class);
    }
}
