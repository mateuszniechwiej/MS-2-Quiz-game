
# QUIZ GAME

### ABOUT 
This project is a Quiz Game with questions and answers fetched from an API.
The user will be able to choose between four categories and three difficulty levels.
There are 10 questions per game with multiple and/or true or false answers.
User will be able to see the highest Score and the name he typed in the game display HUD.
 
This project is created for Milestone Project 2 ("Code Institute"). It was build using HTML5, CSS,  and JavaScript.



![Quiz Game](assets/README_media/Mockup.PNG)
:globe_with_meridians: [Live website](https://mateuszniechwiej.github.io/MS-2-Quiz-game/)

:page_facing_up: [GitHub repository](https://github.com/mateuszniechwiej/MS-2-Quiz-game)

# Table of Contest

- [Project Workflow](#project-workflow)
- [UX](#ux)
  - [The Strategy Plane](#the-strategy-plane)
    - [Project Goal](#project-goal)
    - [Site Goals](#site-goals)
    - [User Stories](#user-stories)
      - [New User](#new-user)
      - [Returning User](#returning-user)
  - [The Scope Plane](#the-scope-plane)
    - [Planed Features:](#planed-features)
  - [The Structure Plane](#the-structure-plane)
  - [The Skeleton Plane](#the-skeleton-plane)
    - [Wireframes](#wireframes)
  - [The Surface Plane](#the-surface-plane)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
- [Features](#features)
  - [Existing Features:](#existing-features)
  - [Future Features:](#future-features)
- [Technologies Used](#technologies-used)
  - [Languages Used](#languages-used)
  - [Frameworks, Programmes and Libraries](#frameworks-programmes-and-libraries)
- [Testing](#testing)
    - [The test is covering:](#the-test-is-covering)
  - [CSS, HTML and JS Test](#css-html-and-js-test)
    - [CSS Validator - Test](#css-validator---test)
    - [HTML Validator - Test](#html-validator---test)
    - [JavaScript Validator - Test](#javascript-validator---test)
      - [Comments: Add missing semicolens and delate unused code.](#comments-add-missing-semicolens-and-delate-unused-code)
  - [Browsers Testing ... to be finished](#browsers-testing--to-be-finished)
    - [For Mobiles:](#for-mobiles)
    - [For Tablet:](#for-tablet)
    - [For Desktop:](#for-desktop)
  - [Performance](#performance)
  - [Colour Contrast](#colour-contrast)
  - [Functionality](#functionality)
  - [Issues](#issues)
- [Deployment](#deployment)
    - [This website was developed using GitPod and VSCode, with a repository hosted on GitHub.](#this-website-was-developed-using-gitpod-and-vscode-with-a-repository-hosted-on-github)
  - [Project Initiation](#project-initiation)
  - [Local Clone](#local-clone)
  - [GitHub Pages](#github-pages)
- [Credits](#credits)
  - [Code](#code)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)
  
- [Deployment](#deployment)
    - [This website was developed using GitPod and VSCode, with a repository hosted on GitHub.](#this-website-was-developed-using-gitpod-and-vscode-with-a-repository-hosted-on-github)
  - [Project Initiation](#project-initiation)
  - [Local Clone](#local-clone)
- [Credits](#credits)
  - [Code](#code)
  - [Media](#media)
    - [Images](#images)
  - [Acknowledgements](#acknowledgements)
  
  - [Colour Contrast](#colour-contrast)
  - [Functionality](#functionality)
- [Deployment](#deployment)
    - [This website was developed using GitPod and VSCode, with repository hosted on GitHub.](#this-website-was-developed-using-gitpod-and-vscode-with-repository-hosted-on-github)
  - [Project Initiation](#project-initiation)
  - [GitHub Pages](#github-pages)
  - [Local Clone](#local-clone)
- [Credits](#credits)
  - [Code](#code)
  - [Media](#media)
    - [Images](#images)
  - [Acknowledgements](#acknowledgements)
   
    
  - [CSS, HTML and JS Test](#css-html-and-js-test)
    - [CSS Validator - Test ...](#css-validator---test-)
    - [HTML Validator - Test...](#html-validator---test)
    - [JavaScript Validator - Test ...](#javascript-validator---test-)
  - [Browsers Testing](#browsers-testing)
    - [For Mobiles:](#for-mobiles)
    - [For Tablet:](#for-tablet)
    - [For Desktop:](#for-desktop)
  - [Performance](#performance)
  - [Colour Contrast](#colour-contrast)
  - [Testing user stories](#Testing-user-stories)
  - [Functionality](#functionality)
- [Deployment](#deployment)
  - [Project Initiation](#project-initiation)
  - [Local Clone](#local-clone)
  - [GitHub Pages](#github-pages)
- [Credits](#credits)
  - [Code](#code)
  - [Media](#media)
  - [Images](#images)
  - [Acknowledgements](#acknowledgements)

# Project Workflow
 * To organise the project work - Jira project management toowas used:
  
![JIRA](assets/README_media/Jira.PNG)
  
  
# UX   

## The Strategy Plane
  ### Project Goal 
  The primary goal of this project is to create an easily navigated and entertaining Quiz Game for my Milestone Project 2 at Code Institute.
  This game is designed for users of all age groups build using Html, CSS, and JavaScript.

  ### Site Goals
  * Create a fun quiz game to play.
  
  * Create a website fully responsive on mobiles, tablets, and desktop devices.
  
  * Provide logical structure which is easy to follow with clear instructions on "how to play") 
  
  * Create a game that the user would like to go back to with a user-friendly design.
  
  * Learn a variety of coding techniques by creating this game and use learnt skills in future projects.
  
  * A professional first project with the use of JavaScript to add to the portfolio.

  ### User Stories

  #### New User
   * As a new user, I want to understand the purpose of this website.

  * As a new user, I want to find clear instructions on how to play the game.

  * As a new user, I want to find an intuitive game with easy to see and press buttons.

  * As a new user, I want to be able to input my name to collect high scores.

  * As a new user, I want to be able to select the difficulty level of the game.

  * As a new user, I want to choose a quiz category.

  * As a new user, I want to be able to turn sound on/off anytime during the time I visit the website.

  * As a new user, I want to see the form of progress during game.

  * As a new user, I want to be able to see if my answer was correct or false during the game and.

  * As a new user, I want to get the final score of my quiz.

  * As a new user, I want to be able to easily start a new quiz.

  * As a new user, I want to be able to contact the owner of the website and see if the developer created other projects I might be interested in.

#### Returning User
* As a returning user, I want to find new questions and quizzes.

## The Scope Plane 
  ### Planed Features:
  :black_square_button: Navigation header - Navigation header - A "sticky" navigation bar with 
  *  with sound icon on the left to turn off/on at any time 
  * Clear captions/logo on what the website is (Quiz Game)
  *  and an info icon on the right side of a navigation bar, the button will open modal with game instructions.
  
  :black_square_button: Game player name input field.

  :black_square_button: Last result.

  :black_square_button: Level of difficulty to select.

  :black_square_button: Quiz category to be selected.

  :black_square_button: Quiz progress information bar.

  :black_square_button: Correct answers score

  :black_square_button: Final score modal activating after answering the last question.

  :black_square_button: Footer with site owner info: 
  * GitHub icon - link to site owner GitHub profile
  * email link to contact the site owner.

## The Structure Plane
**Addressing user expectations**:
 > As a new user, I want to understand the purpose of this website.

A solution to satisfy user requirements:
  * "Sticky" navbar with Captions with name of the game.
  * Quiz question with four choices for each question in the active quiz area 

> As a new user, I want to be able to input my name to collect high scores.
A solution to satisfy user requirements:
  * When the website starts a modal to input name will be displayed unless the name already presents in local storage (in this case player name will be automatically assigned from local storage). 

> As a new user, I want to find clear instructions on how to play the game.

A solution to satisfy user requirements:
  * info icon in the navbar- opens game instruction modal.

>  As a new user, I want to find an intuitive game with easy to see and press buttons.

A solution to satisfy user requirements:
  * All control buttons well-sized on all devices and easy to find.
> As a new user, I want to be able to select the difficulty level of the game

A solution to satisfy user requirements:
* Three buttons with difficulty level easy, medium, and hard. 

> As a new user, I want to choose a quiz category.

A solution to satisfy user requirements:
* Area to select a category before the quiz start.

> As a new user, I want to be able to turn sound on/off anytime during the time I visit the website.

A solution to satisfy user requirements:
* Sound icon located on a "sticky navbar" to turn off and on sound at any time while visiting the site.

> As a new user, I want to see the form of progress through the quiz.

A solution to satisfy user requirements:
* Progress bar located above quiz questions. 

> As a new user, I want to be able to see if my answer was correct or false during the game.

A solution to satisfy user requirements:
* After every question, the correct answer will have a green background on the button and the user wrong answer button will get the red background.
* Current score result displayed in the quiz section.

> As a new user, I want to get the final score.

A solution to satisfy user requirements:
* After the quiz finished a modal with the final score displayed.
* under player info result displays last quiz answers.

> As a new user, I want to be able to easily start a new quiz.

A solution to satisfy user requirements:
* After every game user will be easy to start again the game by choosing level difficulty again.

> As a new user, I want to be able to contact the owner of the website and see if the developer created other projects,I might be interested in.

A solution to satisfy user requirements:
* In the footer GitHub icon linked to the GitHub username site provided.
* In the footer email link provided.

> As a returning user, I want to find new questions and quizzes.

A solution to satisfy user requirements:
* The [Open Trivia DB API](https://opentdb.com/api_config.php) used in this project to ensure a good number of question and categories available in the test. 

## The Skeleton Plane

### Wireframes

:point_right: [Wireframes for mobile, tablet and desktop](https://xd.adobe.com/view/f1ba91b2-e0a0-438a-a80e-afe3e5ae5ee1-a4e9/)

 :point_down: 

 * [Wireframes mobile pdf](assets/README_media/mobile.pdf)
 * [Wireframes tablet pdf](assets/README_media/tablet.pdf)
 * [Wireframes desktop pdf](assets/README_media/desktop.pdf)

### Differences to design:
For all screen sizes:
1. When game start username, High Score, categories and difficulty are not displayed.
Comments: It was decided after feedback that that would increase user experience with better content readability.
2. Selecting game difficulty and categories by dropdown menu
Comments: Taking less viewing browser viewing space
3. Not using next question buttons:
Comments: It is more practically to jump to the next question after selecting an answer.
4. minor difference in footer with email, copyrights and github icon.

For screens >= 576px : 
1. Current score display located above question:

Comment: It's easier to follow the score.

2. Two answer choices beside each other's:

Comment: For visual purposes, it looks better on bigger screens to have two answers 
choices per row.


## The Surface Plane
#
## Design

### Colour Scheme

* Used Adobe Color to choose the colour pallet.
![Colour Pallet](assets/README_media/colours.jpeg)

### Typography


 :black_nib:

* The primary font used in this project is **Exo 2** with *sans-serif* as a fallback font. This font was chosen for this project because it gives a futuristic feeling while keeping an elegant design and delivering great readability.
* The secondary font used for this website is **Open Sans**  with *sans-serif* as a fallback font. This font is elegant and modern. It offers an excellent reading experience.

### Imagery
One image used as a background in this project
[Pexels - João Jesus](https://www.pexels.com/photo/silhouette-of-grass-under-white-sky-925743/)


# Features

## Existing Features:
:one: Header - with a sticky navigation bar located on the top of the page allowing the user to have access to:
*  sound icon - to turn sound on/off located on the left side of navbar.
*  quiz logo in the centre of the bar.
*  info icon - to open modal with Game instructions.

:two: Game user details and scores:
* activating modal for a first-time user to input the name of the player.
* Game Dashboard - displaying username and the highest score stored in local storage.

:three: Quiz questions settings:
* Quiz questions fetched from **Open Trivia API**
* four categories to select
* three difficulty levels to chose
* open settings modal activated to remind the user to select category and difficulty if any setting is missing.
* start game button to start the "Quiz".

:four: Active Game features:
 * progress bar displaying current question in the game.
 * current score display (to the right on desktop devices, above questions on mobiles).
 * correct/incorrect - selected answer changing background colours (red for wrong answer and green for good choice). 
 * final modal displaying scores with three different messages with unique sound effects depending on the final score.

:five: Footer :
* active email link to contact the owner of this project.
* copyright information 
* GitHub icon -  link to site owner GitHub repositories.


## Future Features:

:white_large_square: - additional categories to be added.

:white_large_square: - Allowing to save more users in localStorage and display them high scores.



# Technologies Used


## Languages Used

  *  [HTML5](https://en.wikipedia.org/wiki/HTML5)

  *  [CSS3](https://en.wikipedia.org/wiki/CSS)

  * [JavaScript](https://pl.wikipedia.org/wiki/JavaScript)
 
## Frameworks, Programmes and Libraries
* [Bootstrap v.4.5.2](https://getbootstrap.com/) - used for layouts, styling and custom components such as navigation bar or modals.
* [jQuery](https://jquery.com/) - used jQuery for Modals in this website.
* [JIRA](https://www.atlassian.com/software/jira) - project management tool to organize workflow.

* [Concepts](https://concepts.app/en/) - to create the first hand-drawn wireframe
  
* [Adobe Xd](https://www.adobe.com/ie/products/xd/wireframing-tool.html#:~:text=Adobe%20XD%20is%20a%20powerful,all%20in%20one%20design%20tool.) - to create wireframes
* [Adobe Colour](https://color.adobe.com/create/color-wheel) - for colour palette used in this project.
* [Adobe Photoshop Express](https://photoshop.adobe.com/?promoid=SYBNM1DC&mv=other) - To crop the full-page background image.

* [Canva](https://www.canva.com/) - to create logo for the game.
 * [JPEG-OPTIMIZER](http://jpeg-optimizer.com/) - optimized the size of images used in this project
* [tinypng](https://tinypng.com/) - optimized Mockup.png for README
  
* [Google Fonts](https://fonts.google.com/)- to import 'Exo 2' and 'Open Sans' fonts used in this project.

* [Font Awesome](https://fontawesome.com/) - for social media links on the website and SVG used in wireframe 

* [Visual Studio Code](https://code.visualstudio.com/) - used for developing this website and commit the project to GitHub repository.

* [Github](https://github.com/) - used to host the project and deploy the live website through [Git Pages](https://pages.github.com/).

* [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) - used to debug and test the website, and to ensure colour contrast

* [Lighthouse](https://developers.google.com/web/tools/lighthouse) - as a part of the chrome dev tool was used to improve the quality of the web page.

* [Favicon](https://favicon.io/) - to create a favicon for this Website.

* [online-audio-converter](https://online-audio-converter.com/) - to convert files to mp3.
* [techsini](https://techsini.com/) - To generate website mock-up .



# Testing

This website is for Milestone Project 2. Build with HTML, CSS and JavaScript.

### The test is covering:
1. Html, CSS  and JavaScript validation.
2. Testing website responsiveness on devices from 280px width- elements should not overlap each other 
3. Website performance and best practise
4. Visual aspects of the website: fonts and colour contrast
5. User stories documented in this README file
6. Game functionality with all available scenarios

## CSS, HTML and JS Test

### CSS Validator - Test 

CSS Validator - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - PASS

[CSS Validation PDF](assets/_media/Css_Validator.pdf)

<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

Comments: 1 error found - code was not needed and delated.

### HTML Validator - Test

HTML Validator - [W3C HTML Validator](https://validator.w3.org/) - PASS

[HTML Validation PDF](assets/README_media/HTML_Validator.pdf)

 Comments: Errors been and fixed

### JavaScript Validator - Test 

JS Validator  - [JSHint Validator](https://jshint.com/) - PASS

 Comments: Add missing semicolons and fix warning ("is better use in dot notation").

## Browsers Testing ... to be finished 
|Screen size\Browser |Chrome            |Opera             |Edge              |Firefox           |Safari            
|--------------------|------------------|------------------|------------------|------------------|------------------| 
|Mobile              |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Tablet              |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|Not Tested        |
|Desktop             |:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|

The website was tested on a varied number of devices:
### For Mobiles:
* Android - Samsung Galaxy S10 (screen size - 6.1-inch) on Chrome, Opera, Firefox and Microsoft Edge
* IOS - iPhone 7 (screen size - 4.7-inch) on Safari and Chrome
* IOS - iphone Pro 12 (screen size 6.1-inch) Safari
### For Tablet:
Surface Book in tablet view - Chrome, Opera, Firefox, Edge (screen size - 13.5- inch)
### For Desktop:
* PC Windows (Windows 10):
  1. Surface Book on (screen size - 13.5-inch)
  2. Surface Book on the second monitor DELL U2419H(screen size - 24-inch)
   
  Tested on  Chrome, Opera, Firefox and Microsoft Edge
* MacBook pro 13:
  * Tested on Safari and Chrome browser.

  
Also, friends and family were asked to test this website and I did not receive any information on noticed bugs in the feedback from them.


## Performance
### To improve and check performance for this website I used [Lighthouse](https://developers.google.com/web/tools/lighthouse), which is part of [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools).

![Lighthouse Test](assets/README_media/lighthouse.PNG)

## Colour Contrast
* By using [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) colour contrast was tested:

1. On this project website right click on the pc mouse

2. Press - "Inspect"

3. Press - ctr+shift+c or "small box with an arrow" to inspect elements of the website.

4. Move the mouse cursor over elements to see under Accessibility->Contrast the result.

* All Html elements on the Quiz page were tested and contrast was correct.
## Testing user stories:
----Test Case----------------------Description
![Test](/assets/README_media/test.png)

  * As a new user, I want to understand the purpose of this website. - TC010

  * As a new user, I want to find clear instructions on how to play the game. - TC006

  * As a new user, I want to find an intuitive game with easy to see and press buttons. - TC002,TC003,TC004,TC005

  * As a new user, I want to be able to input my name to collect high scores. - TC001

  * As a new user, I want to be able to select the difficulty level of the game. - TC003

  * As a new user, I want to choose a quiz category. - TC003

  * As a new user, I want to be able to turn sound on/off anytime during the time I visit the website. - TC007

  * As a new user, I want to see the form of progress during game. - TC004

  * As a new user, I want to be able to see if my answer was correct or false during the game and. - TC004

  * As a new user, I want to get the final score of my quiz. - TC005, TC008

  * As a new user, I want to be able to easily start a new quiz. - TC002, TC003 ,TC008

  * As a new user, I want to be able to contact the owner of the website and see if the developer created other projects, I might be interested in.  - TC009

* [Detailed user stories test in Excel file](/assets/README_media/users.xlsx)

## Functionality 
**Homepage**:

## Issues
    1.Encoding issue on some questions and answers fetched from Open Trivia API
  *  <del>partly resolved</del> 
  * <del>solution explanation - by using Base64 encoding, and then use atob() to decode questions and choices.(impoved however some answers choices still wrongly disoplayed).</del>
  * resolved
  * solution explained - change to URL Encoding (3986) and then decode to display by using decodeURIComponent() .

    2.Add event listener to submit username Modal by pressing "Enter"
  *  resolved 

    3.Looking to find a solution to alert the user when category and difficulty not selected
  * resolved
    4. Background image not showing on android phones
  *  resolved. 
    5. By activating info modal background image is moving.
   * not resolved.  

  
# Deployment

### This website was developed using GitPod and VSCode, with a repository hosted on GitHub.

## Project Initiation
 This project was created using the following steps:
1. Open GitHub in the browser and sign in to my account.
2. Click on **Repositories**
3. Press **New**
4. Choose [Code Institute Temple](https://github.com/Code-Institute-Org/gitpod-full-template)
5. Give **Repository** a name and description
6. Press **Create repository**.
7. Finally click on **Gitpod** button in the newly created repository to start working on this project.

## Local Clone
1. Navigating to the GitHub [Repository]
2. Click on **Code** green button.
3. Under the _Clone_ section, copy the URL from the HTTPS dialogue box.
4. Use the IDE of choice to open the terminal.
5. Use **git clone** command followed by the copied URL.
6. A clone of the project will now be created locally on your machine.   

## GitHub Pages
This website was published using [GitHub Pages](https://pages.github.com/) by:
1. Navigating to the GitHub [Repository](https://github.com/mateuszniechwiej/MS-2-Quiz-game)
2. Under the name of this project, there is a navigation bar - > Click on **Settings**.
3. Scroll down to the GitHub Pages Heading.
4. Under the _Source_ Choose **Branch: master*
5. Click the _Save_ button.
6. Click on the newly created link with the live page. (it can take a few minutes for the site to be published).
# Credits

## Code
* Udemy tutorial *"Build a Quiz App with HTML, CSS, and JavaScript"* created by James Quick
* [CSS-Tricks](https://css-tricks.com/perfect-full-page-background-image/) - learned how to find set up for full page background image.
* [Bootsrap examples](https://getbootstrap.com/docs/4.0/examples/sticky-footer-navbar/) - learn how to make bootstrap sticky footer with fixed navbar.
* [JS30-"Drum_Kit"](https://javascript30.com/) -learned how to allow sound play after fast answers click in Quiz.
* <a href="https://codepen.io/giana/pen/BZaGyP">Raise Button Effect</a> - use the efect for answer choices in the game.
* [Bootstrap library](https://getbootstrap.com/) - used to create a responsive design

## Media
* Game no points scored sound [freesound](https://freesound.org/people/themusicalnomad/sounds/253886/);
* Game high score sound [freesound](https://freesound.org/people/plasterbrain/sounds/397353/)
* Game click sound [freesound](https://freesound.org/people/EminYILDIRIM/sounds/536108/)
* Game sounds for final win sound, correct and incorrect choices downloaded from [freesound](https://freesound.org/people/rhodesmas/sounds/320652/)
  

## Acknowledgements
* My mentor, **_Maranatha Ilesanmi_** for advice, guidance and support on this project.
* **_Daisy Mc Girr_**(Code Institute student) for:
  * webinar on Testing.
* **_Thiago Santos_**(Code Institute student) for:
  * leading Java Script study group.
* **Slack Community** - for feedback on my project.
* **My friends and family** - for giving feedback on my project and testing this website.