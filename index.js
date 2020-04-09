// Import stylesheets
import './style.css';
import * as ko from 'knockout';
import $ from 'jquery';

// Write Javascript code!

var user = {
  firstName: ko.observable(),
  lastName: ko.observable(),
  npiNumber: ko.observable(),
  businessAddress: ko.observable(),
  telephoneNumber: ko.observable(),
  emailAddress: ko.observable(),
  registerUser: function() {
    event.preventDefault();
    
    //Mock ajax success
    $.ajax = ajax_response(ko.toJSON(user), true);

    //Mock ajax error
    //$.ajax = ajax_response('{ "error": "unexpected server error" }', false);

    callApiAsync();
  }
};

function callApiAsync() {
    $.ajax({
      type: 'POST',
      //url: 'Some API Endpoint',
      //data: ko.toJSON(user),
      success: function (results) {
        //Do something with the results
        var user = JSON.parse(results);
        $("#main").html('<h2>Thank you for registering ' + user.firstName + '!</h2>');
      }
    });
  }

  function ajax_response(response, success) {
    return function (params) {
      if (success) {
        params.success(response);
      } else {
        params.error(response);
      }
    };
  }

  ko.applyBindings(user);