module.exports = function()
{
  this.hey = function(message)
  {
    var question = (message[message.length-1] === '?');
    var forceful = /([A-Z0-9%\(\),\^\*@#\$ _\?\!]+)/.exec(message);
    if (forceful !== null && forceful !== undefined) forceful = (forceful[0].length === message.length);
    if (message === '') return 'Fine. Be that way!';
    else if (forceful) return 'Woah, chill out!';
    else if (question === true) return 'Sure.';
    return 'Whatever.';
  }
}
