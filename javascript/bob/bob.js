module.exports = function()
{
  this.hey = function(message)
  {
    var question = (message[message.length-1] === '?');
    var forceful = (message.toUpperCase() === message);
    if (message === '') return 'Fine. Be that way!';
    else if (forceful) return 'Woah, chill out!';
    else if (question) return 'Sure.';
    return 'Whatever.';
  }
}
