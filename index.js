// Import stylesheets
import './style.css';
import * as ko from 'knockout';
import $ from 'jquery';

// Write Javascript code!

function User() {
  var self = this;

  self.firstName = ko.observable();
  self.lastName = ko.observable();
  self.npiNumber = ko.observable();
  self.businessAddress = ko.observable();
  self.city = ko.observable();
  self.state = ko.observable();
  self.zipCode = ko.observable();
  self.telephoneNumber = ko.observable();
  self.emailAddress = ko.observable();
  self.registerUser = function() {
    event.preventDefault();
    
    //Mock ajax success
    $.ajax = ajax_response(ko.toJSON(self), true);

    //Mock ajax error
    //$.ajax = ajax_response('{ "error": "unexpected server error" }', false);

    //Call API async
    $.ajax({
      type: 'POST',
      //url: 'Some API Endpoint',
      //data: ko.toJSON(user),
      success: function (results) {
        //Do something with the results
        var user = JSON.parse(results);
        $("#main").html('<h2>Thank you for registering ' + self.firstName() + '!</h2>');
      }
    });
  }
};

function ajax_response(response, success) {
  return function (params) {
    if (success) {
      params.success(response);
    } else {
      params.error(response);
    }
  };
}

ko.applyBindings(new User());