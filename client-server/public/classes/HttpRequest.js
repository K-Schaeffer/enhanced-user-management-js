class HttpRequest {

    static get(url, params = {}) {

        return HttpRequest.request('GET', url, params);

    }

    static put(url, params = {}) {

        return HttpRequest.request('PUT', url, params);

    }

    static post(url, params = {}) {

        return HttpRequest.request('POST', url, params);

    }

    static delete(url, params = {}) {

        return HttpRequest.request('DELETE', url, params);

    }

    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {

            let ajax = new XMLHttpRequest(); // Creating XHR

            ajax.open(method.toUpperCase(), url); // Requisition

            ajax.onerror = event => { // Just if something went wrong
                reject(e);
            };

            ajax.onload = event => { // When it finishes the requisition

                let obj = {}

                try {
                    obj = JSON.parse(ajax.responseText); // Taking the JSON and converting it to object (already declared)
                } catch (e) {
                    reject(e);
                    console.error(e);
                }

                resolve(obj); // Calling the "resolve" of the promise

            };

            ajax.setRequestHeader('Content-Type', 'application/json');

            ajax.send(JSON.stringify(params)); // After all completed, send the requisition

        });


    }


}