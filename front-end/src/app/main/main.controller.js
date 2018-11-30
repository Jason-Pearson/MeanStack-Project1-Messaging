export class MainController {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.getMessages();
  }

  getMessages() {
    var vm = this; //view model - refering to constructor's $http, from main, from the index.html, reffering to inspect element?
    this.$http.get('http://localhost:5000/api/message').then(function (result) {
      vm.messages = result.data; //i think this is referring to inspect element console (data), add all messages from get to (vm) for front-end display in main.js
    }); //.get can return promise (data from database collection) as a callback to GET message as a result - refer this from main.controller to format it with angular and display on front end
  }
  postMessage() {
    this.$http.post('http://localhost:5000/api/message', {
      msg: this.message
    });
    console.log("post");
  }
}
