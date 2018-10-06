class ToDoTaskApi {

    static getToDoTasksApi() {
        let serviceUrl = "https://practiceapi.devmountain.com/api/tasks";
        return new Promise((resolve, reject) => {
            fetch(serviceUrl, {
                method: "get",
                mode: 'cors',
                cache: 'no-cache'
            }).then(function (response) {
                resolve(response.json());
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    static createNewToDoTaskApi(toDoTask) {
        let serviceUrl = "https://practiceapi.devmountain.com/api/tasks";
        return new Promise((resolve, reject) => {
            fetch(serviceUrl, {
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(toDoTask),
                headers: {
                    'Accept': 'application/json; odata=verbose',
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                    resolve(response.json());
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    static deleteToDoTaskApi(toDoTaskID) {
        let serviceUrl = "https://practiceapi.devmountain.com/api/tasks/" + toDoTaskID;
        return new Promise((resolve, reject) => {
            fetch(serviceUrl, {
                method: "DELETE",
                mode: 'cors'
            })
                .then(function (response) {
                    resolve(response.json());
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    static completeTodoTaskApi(toDoTaskID) {
        let serviceUrl = "https://practiceapi.devmountain.com/api/tasks/" + toDoTaskID;
        return new Promise((resolve, reject) => {
            fetch(serviceUrl, {
                method: "PUT",
                mode: 'cors'
            })
                .then(function (response) {
                    resolve(response.json());
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    static updateToDoTaskApi(toDoTaskID, toDoTask) {
        let serviceUrl = "https://practiceapi.devmountain.com/api/tasks/" + toDoTaskID;
        return new Promise((resolve, reject) => {
            fetch(serviceUrl, {
                method: "PATCH",
                mode: 'cors',
                body: JSON.stringify(toDoTask),
                headers: {
                    'Accept': 'application/json; odata=verbose',
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                    resolve(response.json());
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}

export default ToDoTaskApi;