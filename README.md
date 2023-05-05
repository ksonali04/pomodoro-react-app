# Pomodoro Playlist


### Overview
Our group decided to create a music based pomodoro timer as a ReactJS web-application 

Contributors: Swetha Vijayakumar, Sonali Kaushal, Sparsh Gupta, Hadeel Ameen

### Running Code
* Deployed Website: https://pomodoro-playlist.netlify.app/
* Running through local: 
  1) Install dependencies
     * cd pomodoro-react-app
     * npm install
  2) Start application
     * npm start

### Credits
* Base Code: https://github.com/astroud/pomodoro-react-app
  * Basically pulled full code from git repository above and added the directories and files below
    * my_components: audio.js, break-dropdown.js, break-input.js, Pomodoro.js, task-open.js, work-dropdown.js
    * my_component_styles: break-open.css, task-open.css
  * Added css styling to file App.css (anything above `* `)
  * Important Note: The content from `App.js` was refactored into `Pomodoro.js` for adding more functionality and features. 
    * This means that a lot of the timer logic and code my `Pomodoro.js` is from the git repo; even though there are a lot of new functionalities and code added to that file as well.
* Summary
  * The base code is the implementation of a simple pomodoro timer
  * The major features we added were:
    * music functionality and custom music for breaks
    * task manager and sub-features

