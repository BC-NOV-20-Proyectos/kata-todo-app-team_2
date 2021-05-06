let config = {
    routes: {
        host: hostName + "/api/",
        getTasks: function() {
            return config.routes.host + "tasks"
        },
        createTask: function() {
            return config.routes.host + "tasks"
        },
        updateTask: function() {
            return config.routes.host + "tasks"
        },
        deleteTask: function() {
            return config.routes.host + "tasks"
        }
    }
}

module.exports = config;