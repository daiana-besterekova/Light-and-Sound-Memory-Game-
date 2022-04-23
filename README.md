# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **DAIANA BESTEREKOVA**

Time spent: **28** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com/edit/#!/storm-fork-lawyer, https://storm-fork-lawyer.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] All buttons are disabled when the sequence is playing 
- [X] If player wins, there is confetti for him 
- [X] Player has track of the countdown and the number of mistakes/strikes 
- [X] Dropdown menu with multiple options described below
- [X] Player can choose the difficulty (the number of buttons) of the game - 4 (Beginner)/8 (Intermediate)/13 (Advanced) buttons per game
- [X] Player can choose the number of trials to play - 5 (Low)/ 10 (Standard)/ 15 (Advanced)
- [X] Changed the page title and icon

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

**TEST 1: Winning game and confetti**

**Conditions: Beginner level (4 buttons) and Low (5) trials**

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/85840329/164339975-90bbc979-2c76-461f-a8ab-56df1f772f9f.gif)


**TEST 2: Losing game if after 2 strikes**

**Conditions: Intermediate level (8 buttons) and Standard (10) trials**
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/85840329/164333775-705f7a8a-48e5-4659-a048-3d13209b2e2c.gif)


**TEST 3: Losing game when the time is over**

**Conditions: Advanced level (13 buttons) and Standard (15) trials**

**Addition: Checking if pressing random buttons while the clue is playing would act as a guess**
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/85840329/164334397-ac3b3bb5-7ef9-425d-9cc9-53055ca466b8.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- https://www.npmjs.com/package/canvas-confetti
- https://www.sitepoint.com/community/t/disable-all-elements-within-div/4209/3
- https://www.w3schools.com/cssref/css_colors.asp
- https://www.w3schools.com/js/default.asp
- http://www.java2s.com/ref/javascript/javascript-dom-html-audio-duration-property-get.html
- https://codepen.io/unnegative/pen/dVwYBq
- https://www.plus2net.com/javascript_tutorial/timer-reset.php#:~:text=Resetting%20the%20timer%20funcitons%20in%20JavaScript&text=setTimeout%20function%20sets%20the%20timer,clearTimeout%20function%20with%20timer%20id.
- https://www.programiz.com/javascript/setInterval

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

**Creating the timer**

After successfully adding decrementation in the function startTimer(), I spent a couple of hours brainstorming how I would restart the timer after the player guesses the correct cue. At that point, I did not have the restart function and only experimented with the function I had. First, I placed  startTimer() inside the loop of playClueSequence() and set the duration as delay. However, despite my function being called, it did so at the wrong time (earlier than the ending of the sequence play). Instead, I called the function outside the loop as the delay time is updated inside the loop after each sequence. Second, creating the reset function was not an easy job even though it required less attention; however, the function would not have executed the job properly if it had been placed in an inappropriate location. First, I called the reset function only when the player guessed the cue; however, the countdown kept going because the function was not called additionally when the StopGame() was executed. I had to break down the code into several pieces and draw a flowchart to understand the logic behind the required implementation. Understanding loops and how and where outside functions are called was a crucial part of the coding part, as spending a lot of time on the StartTimer() first allowed me to get practical experience working with conditions, anonymous functions, loops, and recursions. 
  
**Game interface and Javascript**

My goal for this project was to make it interactive and user-friendly. For example, instead of using a black background, I decided it should be bright; the buttons are circles with hidden emojis; the game name is written in a rainbow font design. The main information is written in rectangles with colorful borders. However, upgrading the interface was one of the challenges I had to overcome because I had limited knowledge regarding the details of CSS and HTML. I spent plenty of time googling different styles, watching YouTube videos, and experimenting with different shapes before coming up with a pyramid of circles. When it comes to connecting elements in HTML with Javascript functions did not make sense to me because of the complexity of the code provided to us. First, I was confused about extracting an HTML element using getElementById because some elements were supposed to be accessed by their class name (initially!). Next, using the results of the selection menu to enable specific buttons and adjust the number of trials required intensive research until I discovered (through a StackExchange) an example where it was used to manipulate functions. Thus, I was able to learn how to approach problems and connect one framework with another by actively researching. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- How can I increase the efficiency of my code by putting together multiple functions instead of listing them all separately?
- How to incorporate dynamic statistics through databases to keep track of user metrics for a web app?  
- How to create login functionality that is both secure and convinient? 
- How to create an online functionality so that the users can interact with each other? For example, two players competing against each other in this game at the same time.
- What are some general guidlines when doing a web app developement in a team rather than on your own? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I have two ideas in mind tied by a common theme. The first one is inspired by conventional video games where you progress through different levels, which introduces a variation in different aspects of the game, e.g., level 1 can have 4 buttons that are static and only a few trials, level 2 can have 6 buttons and more trials and so on until a certain level where the buttons start moving on the screen so a players heuristic of "pressing the spot on the screen" changes to focusing more on the sound and the image of the button. This would, of course, be accompanied by different color schemes and images for each level to symbolize some sort of thematic progression of the game. The second idea is motivated by the science of learning principle about recall, which would essentially introduce a leaderboard or high score to see who progressed how far, but more importantly, each user would be able to track different metrics of their playthroughs of the levels: how many mistakes were made, how many times did the game end, how quickly did they recall the order of the buttons? All of these, beyond adding an interesting and competitive aspect to the game, interesting insights could be observed, such as player metrics improving over multiple playthroughs, which is in line with research on the science of learning and spaced repetition where it is expected that players get better over many playthroughs.




## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/e967797c6af24f3e83860ad8faf28bcb?sharedAppSource=personal_library)


## License

    Copyright DAIANA BESTEREKOVA

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
