var adalConfig = {
    tenant: 'bahdev.onmicrosoft.com',
    clientId: 'xxxxxxx-9b9e-4bd6-9432-49e94027087c',
    extraQueryParameter: 'nux=1',
    disableRenewal: false,
    endpoints: {
        'https://graph.microsoft.com': 'https://graph.microsoft.com'
    }
    // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost. 
};

module.exports = adalConfig;