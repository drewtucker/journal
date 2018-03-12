import './styles.css';
import $ from 'jquery';
import { Entry } from './journal';

$(document).ready(function()
{
  $("#entryForm").submit(function(event)
  {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry(title, body);
    $("#titleResult").text(newEntry.title);
    $("#bodyResult").text(newEntry.body);
    $("#wordCountResult").text(newEntry.TotalWords(body));
    $("#vowelCountResult").text(newEntry.CountVowels(body));
    $("#consonantCountResult").text(newEntry.CountConsonants(body));
  });
});
