angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Topics', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var topics = [{
    id: 0,
    title: 'Microsoft Word',
    subtitle: 'Word Document Processor',
    image: 'img/msword.png',
    image1: 'img/mspowerpoint1.png',
    page1: 'Introduction',
    content1: 'PowerPoint is the powerful and ubiquitous presentation program from Microsoft. It gives you the facility to create stunning presentations that incorporate video and PowerPoint animations. The image editing capabilities that PowerPoint offer get better and better with every new version. Starting to learn Microsoft PowerPoint can seem like a daunting task if you are not familiar with its environment. The tutorials you see listed on this page are designed to take beginners by the hand and to teach them the basics of using the program. As you gain confidence, more advanced subjects will be explained. Before you know it, you will be a Microsoft PowerPoint guru and you will be helping out other people who are beginners themselves.',
    image2: 'img/mspowerpoint2.gif',
    page2: 'Getting Started',
    content2: 'There are a couple of ways to add a new slide. In each way, the slide that is currently selected is important as the new slide will be placed after the selected one. This means that if you want to insert a slide before the end of the presentation, you will need to select the slide that appears before the one you want to insert. To select the slide, just click on it. You can select the slide in whichever view you happen to be using, whether it is Slides View or Outline view. Once you have selected a slide, click Home > Slides > New Slide. You will notice that the New Slide button is in two halves.',
    image3: 'img/mspowerpoint3.gif',
    page3: 'Background Format',
    content3: 'To change your presentation background, click Design > Background > Background Styles > Format Background. Alternatively, you can right click on a free area on a slide (and area that does not contain an object) and then select Format Background from there. Ensure that the fill tab is selected (as in the image above) and then make changes according to what kind of background you want for your presentation. The colours in the main part of the grid are all theme colours, so if you select one, you can be pretty confident that the background will blend in well with the rest of the presentation\'s colours. At the bottom of the colour selection panel are standard colours and if you want even more colours to choose from, you can click More Colours at the bottom.'
  }, {
    id: 1,
    title: 'Microsoft Excel',
    subtitle: 'Spreadsheet Program',
    image: 'img/msexcel.png',
    image1: 'img/mspowerpoint1.png',
    page1: 'Introduction',
    content1: 'PowerPoint is the powerful and ubiquitous presentation program from Microsoft. It gives you the facility to create stunning presentations that incorporate video and PowerPoint animations. The image editing capabilities that PowerPoint offer get better and better with every new version. Starting to learn Microsoft PowerPoint can seem like a daunting task if you are not familiar with its environment. The tutorials you see listed on this page are designed to take beginners by the hand and to teach them the basics of using the program. As you gain confidence, more advanced subjects will be explained. Before you know it, you will be a Microsoft PowerPoint guru and you will be helping out other people who are beginners themselves.',
    image2: 'img/mspowerpoint2.gif',
    page2: 'Getting Started',
    content2: 'There are a couple of ways to add a new slide. In each way, the slide that is currently selected is important as the new slide will be placed after the selected one. This means that if you want to insert a slide before the end of the presentation, you will need to select the slide that appears before the one you want to insert. To select the slide, just click on it. You can select the slide in whichever view you happen to be using, whether it is Slides View or Outline view. Once you have selected a slide, click Home > Slides > New Slide. You will notice that the New Slide button is in two halves.',
    image3: 'img/mspowerpoint3.gif',
    page3: 'Background Format',
    content3: 'To change your presentation background, click Design > Background > Background Styles > Format Background. Alternatively, you can right click on a free area on a slide (and area that does not contain an object) and then select Format Background from there. Ensure that the fill tab is selected (as in the image above) and then make changes according to what kind of background you want for your presentation. The colours in the main part of the grid are all theme colours, so if you select one, you can be pretty confident that the background will blend in well with the rest of the presentation\'s colours. At the bottom of the colour selection panel are standard colours and if you want even more colours to choose from, you can click More Colours at the bottom.'
  }, {
    id: 2,
    title: 'Microsoft PowerPoint',
    subtitle: 'Presentation Program',
    image: 'img/mspowerpoint.png',
    image1: 'img/mspowerpoint1.png',
    page1: 'Introduction',
    content1: 'PowerPoint is the powerful and ubiquitous presentation program from Microsoft. It gives you the facility to create stunning presentations that incorporate video and PowerPoint animations. The image editing capabilities that PowerPoint offer get better and better with every new version. Starting to learn Microsoft PowerPoint can seem like a daunting task if you are not familiar with its environment. The tutorials you see listed on this page are designed to take beginners by the hand and to teach them the basics of using the program. As you gain confidence, more advanced subjects will be explained. Before you know it, you will be a Microsoft PowerPoint guru and you will be helping out other people who are beginners themselves.',
    image2: 'img/mspowerpoint2.gif',
    page2: 'Getting Started',
    content2: 'There are a couple of ways to add a new slide. In each way, the slide that is currently selected is important as the new slide will be placed after the selected one. This means that if you want to insert a slide before the end of the presentation, you will need to select the slide that appears before the one you want to insert. To select the slide, just click on it. You can select the slide in whichever view you happen to be using, whether it is Slides View or Outline view. Once you have selected a slide, click Home > Slides > New Slide. You will notice that the New Slide button is in two halves.',
    image3: 'img/mspowerpoint3.gif',
    page3: 'Background Format',
    content3: 'To change your presentation background, click Design > Background > Background Styles > Format Background. Alternatively, you can right click on a free area on a slide (and area that does not contain an object) and then select Format Background from there. Ensure that the fill tab is selected (as in the image above) and then make changes according to what kind of background you want for your presentation. The colours in the main part of the grid are all theme colours, so if you select one, you can be pretty confident that the background will blend in well with the rest of the presentation\'s colours. At the bottom of the colour selection panel are standard colours and if you want even more colours to choose from, you can click More Colours at the bottom.'
  }];

  return {
    all: function() {
      return topics;
    },
    remove: function(topic) {
      topics.splice(topics.indexOf(topic), 1);
    },
    get: function(topicId) {
      for (var i = 0; i < topics.length; i++) {
        if (topics[i].id === parseInt(topicId)) {
          return topics[i];
        }
      }
      return null;
    }
  };
})
.factory('Games', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var games = [{
    id: 0,
    title: 'Three Pics One Word',
    subtitle: 'Guess the images to form a word.',
    icon: 'ion-images',
    image1: 'img/gameA1.png'
  }, {
    id: 1,
    title: 'Hangman',
    subtitle: 'Guess the letter/s to form a word',
    icon: 'ion-man',
    image1: 'img/gameA1.png'
  }, {
    id: 2,
    title: 'Jumble Letters',
    subtitle: 'Arrange the letters to form a word',
    icon: 'ion-ios-eye',
    image1: 'img/gameA1.png'
  }];

  return {
    all: function() {
      return games;
    },
    remove: function(game) {
      games.splice(games.indexOf(game), 1);
    },
    get: function(gameId) {
      for (var i = 0; i < games.length; i++) {
        if (games[i].id === parseInt(gameId)) {
          return games[i];
        }
      }
      return null;
    }
  };
});
