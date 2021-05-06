let config = {
    routes: {
        hostApi: hostName + "/api/",
        host: hostName + "/",
        getTasks: () => {
            return config.routes.hostApi + "tasks"
        },
        createTask: () => {
            return config.routes.hostApi + "tasks"
        },
        updateTask: () => {
            return config.routes.hostApi + "tasks"
        },
        deleteTask: () => {
            return config.routes.hostApi + "tasks"
        },
        sign_in: () => {
            return config.routes.host + "sign_in"
        }
    }
}

module.exports = config;