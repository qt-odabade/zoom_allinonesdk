{ { flutter_js } }
{ { flutter_build_config } }

// Reference: https://docs.flutter.dev/platform-integration/web/bootstrapping

_flutter.loader.load({

    serviceWorkerSettings: {
        serviceWorkerVersion: flutter_service_worker_version,
    },
    onEntrypointLoaded: async function (engineInitializer) {

        const appRunner = await engineInitializer.initializeEngine();

        await appRunner.runApp();
    }
});