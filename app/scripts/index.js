
var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');
var baseUrl = 'https://api.github.com/users/starrynight203';
var repoUrl = baseUrl + '/repos';
var moment = require('moment');
var githubtoken;

if(typeof(githubtoken) !== "undefined"){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken,
    }
  });
}

$.ajax(baseUrl).done(function(data){
  //console.log(data);
  avatarTemplate(data);
  // profilePic(data);
  // fullName(data);
  sideBar(data);
})

$.ajax(repoUrl).done(function(data){
  console.log(data);
  repoList(data);
  //humanTime(data);
})

// $.ajax(baseUrl + '/repos').done(function(data){
//   console.log(data);
//   _.each(data,function(item) {
//   })
// })
//bringing in avatar
function avatarTemplate (data){
// source is equal to script with id show-template in html file
var source = $("#show-template").html();
// converts script into template
var template = handlebars.compile(source);
// passes data into template
var compiledTemplate = template(data);
// appends template to element with class show-template
$('.show-template').html(compiledTemplate);
//$('.fullname').html(compiledTemplate);
}

function sideBar (data){
var sourcetwo = $("#second-template").html();
var templatetwo = handlebars.compile(sourcetwo);
var compiledTemplatetwo = templatetwo(data);
$('.side-nave').html(compiledTemplatetwo);
//$('.fullname').html(compiledTemplatetwo);
}

function repoList(data){
var sourcethree = $("#third-template").html();
var templatethree = handlebars.compile(sourcethree);
var compiledTemplatethree = templatethree({'repo': data});
$('.repos-list').html(compiledTemplatethree);
}

// function datePicker(data){
//   var date =new Date ($(data.created_at).selector);
//   var shortMonth =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec']
//   var month = shortMonth[date.getMonth()];
//   var day = date.getDate();
//   var year = date.getYear() + 1900;
//   var newDate = month + " " + day + " " + year;
//   return newDate;
// }

//moment.js on top of page make new variable called var moment = require('moment');
// function humanTime (data){
// data = _.map(data, function(data){
//   var newtime = new Date(data.update_at);
//   return newtime;
// });
