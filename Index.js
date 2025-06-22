process.title = "GladOS"
const chalk = require("chalk")
console.log(chalk.red(`\n [WARN] You may need to edit the delay timer for opening up the music in google`))
// check if works on desktop when get home
const readline = require('readline-sync');
const clear = require('clear');
// the off brand ahhh bat pause line
// what was that note
readline.keyInPause();
clear();
// loads web 
const { exec } = require("child_process");
const youtubeURL = "https://www.youtube.com/watch?v=sCkzRk9CxZ0&ab_channel=JustInstrumentals";
exec(`start ${youtubeURL}`);
// wait 6
setTimeout(() => {
  // this is the time delay for oepning the youtube link change this to match your pcss speeds
  const lineDelay = 50; // Delay between each line in milliseconds
  const lyrics = [
    "This was a triumph!",
    "I'm making a note here:",
    "Huge success!",
    "It's hard to overstate",
    "My satisfaction.",
    "Aperture Science:",
    "We do what we must",
    "Because we can",
    "For the good of all of us.",
    "Except the ones who are dead.",
    "But there's no sense crying",
    "Over every mistake.",
    "You just keep on trying",
    "'Til you run out of cake.",
    "And the science gets done.",
    "And you make a neat gun",
    "For the people who are",
    "Still alive.",
    "I'm not even angry...",
    "I'm being so sincere right now.",
    "Even though you broke my heart,",
    "And killed me.",
    "And tore me to pieces.",
    "And threw every piece into a fire.",
    "As they burned it hurt because",
    "I was so happy for you!",
    "Now, these points of data",
    "Make a beautiful line.",
    "And we're out of beta.",
    "We're releasing on time!",
    "So I'm GLaD I got burned!",
    "Think of all the things we learned!",
    "For the people who are",
    "Still alive.",
    "Go ahead and leave me...",
    "I think I'd prefer to stay inside...",
    "Maybe you'll find someone else",
    "To help you.",
    "Maybe Black Mesa?",
    "That was a joke. Ha Ha. Fat Chance!",
    "Anyway this cake is great!",
    "It's so delicious and moist!",
    "Look at me: still talking",
    "When there's science to do!",
    "When I look out there,",
    "It makes me glad I'm not you.",
    "I've experiments to run.",
    "There is research to be done.",
    "On the people who are",
    "Still alive.",
    "And believe me, I am",
    "Still alive.",
    "I'm doing science and I'm",
    "Still alive.",
    "I feel fantastic and I'm",
    "Still alive.",
    "While you're dying I'll be",
    "Still alive.",
    "And when you're dead I will be",
    "Still alive",
    "Still alive.",
    "Still alive.",
    "This was made by Brahman\nThank you so much for downloading"
  ];
  
  function printLyrics() {
    let currentIndex = 0;
    function printNextLine() {
      if (currentIndex >= lyrics.length) {
        return;
      }
      const currentLine = lyrics[currentIndex];
      const lineLength = currentLine.length;
      let lineDelayMultiplier = 1;
      for (let i = 0; i < lineLength; i++) {
        setTimeout(() => {
          process.stdout.write(chalk.yellow(currentLine[i]));
          if (i === lineLength - 1) {
            process.stdout.write('\n');
            currentIndex++;
            setTimeout(printNextLine, lineDelay * lineDelayMultiplier);
          }
        }, lineDelay * lineDelayMultiplier);
        lineDelayMultiplier++;
      }
    }
    printNextLine();
  }
  printLyrics();
}, 6000);