var myGame = new WizardOrpheus('',`
One day you are walking to work and are suddenly teleported to a mysterious place. You are in a room with a mad scientist. They want to perform all sorts of weird experiments on you, to test the limits of humankind. They are also figuring out how to edit your genetics and make a race of genetically superior humans and servants to these scientists for the rest of eternity. These scientists know all sorts of tricks to not let their victims leave and it's nearly impossible for you to escape. The scientists are practically inescapable and have all sorts of new technology to recapture you and make it impossible for you to escape. Your job is to escape the place somehow and not anger them. If you anger the scientists, they will kill you! If you anger them to -50 you die!!!!
`)
myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
 
  if (e.code == 'Enter') { 
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})
myGame.botAction('respond', 'Send a text response to the user', {
  
  message: 'What you want to say to the user' }, data => {
  document.getElementById('conversation').innerHTML += '<p>' + 
    data.message + '</p>'

})
myGame.variable('score', 'Current score. Changes from -100 (wants to end the conversation immediately) to 100 (wants to do anything to help) based on how convinced the AI is.', -10)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
})