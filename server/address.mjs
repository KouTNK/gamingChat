// import os from 'os'
export default function(os) {
    const networkInterfaces = os.networkInterfaces()
    let result
    Object.keys(networkInterfaces).forEach((networkInterfacesName) => {
        networkInterfaces[networkInterfacesName].forEach((networkInterfaces) => {
            if ('IPv4' !== networkInterfaces.family || networkInterfaces.internal !== false) {
                return
            }
            result = networkInterfaces.address
        })
    })
    return result
}