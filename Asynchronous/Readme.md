AJAX: Asynchronous Js and XML

Old way of AJAX call:

    const request = new XMLHttpRequest();
    request.open('GET','url');
    request.send();
    console.log(request)                             => xxx => Request is not available yet
    request.addEventListener('load', function(){
        console.log(this.responseText);
    })

Handling Ajax calls with promises, these promises are introduced in ES6_2015

     fetch(url)                              =>  fetch is a function that returns a Promise that resolves to the response
    .then(function (response) {
      console.log(response)                  => xxx  =>  Received data is in streams and to be converted into json format
      return response.json();
    })
    .then(function (data) {
      console.log(data);                     => Response available for other manipulations
    });

Promise ==> is a container ===> for asynchronously delivered value(future) which is a response from an AJAX call

Promise lifeCycle:

    1.Pending                       => Before the future value available
    2.Settled                       => When Async task is finished
        a> Fulfilled                => Success and the value is available now
        b> Rejected                 => An error is happened
