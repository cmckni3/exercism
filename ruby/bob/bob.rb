class Bob
  def hey(message)
    silence = message.empty? || message.strip.empty?
    question = (message[-1] == '?')
    shouting = (message.upcase == message)
    return 'Fine. Be that way!' if silence
    return 'Woah, chill out!' if shouting
    return 'Sure.' if question
    'Whatever.'
  end
end
