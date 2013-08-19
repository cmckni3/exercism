module.exports = function()
{
  this.hey = function(message)
  {
    var question = (message.slice(-1) === '?');
    var forceful = (message.toUpperCase() === message);
    var silent   = (message === '');
    if (silent) return 'Fine. Be that way!';
    else if (forceful) return 'Woah, chill out!';
    else if (question) return 'Sure.';
    return 'Whatever.';
  }
}
