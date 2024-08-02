const { init, SteamCallback } = require('../index.js')

const client = init(480);

const handles = []
handles.push(client.callback.register(SteamCallback.PersonaStateChange, (value) => {
    console.log('PersonaStateChange', value)
}))
handles.push(client.callback.register(SteamCallback.SteamInputDeviceConnected, (handle) => {
    console.log('SteamInputDeviceConnected', handle)
}))
handles.push(client.callback.register(SteamCallback.SteamInputDeviceDisconnected, (handle) => {
    console.log('SteamInputDeviceDisconnected', handle)
}))


setTimeout(() => {
    handle.disconnect()
}, 30000);