# Unit 1 Project: GDF Text Adventure

## Project Overview
In this unit's capstone project students will create a text adventure game by using the Mastery Coding Text Game Engine. 

<br>

## Set Up
### Open the Template Files
Before editing the project open the `start.html` file within a modern web browser. Refreshing the browser window will show changes made to the game as the code is modified. Also, if errors occur in the game remember that opening the console in the devtools may reveal information to help identify a fix for the issue. 

### Add Game and Creator Names
Think of an original name for the game and assign it to the `gameName` variable. Write the developer's name and the name of any collaborators and assign it to the `creator` variable. 

### New Game
To create a new game a new instance of the `TextGameEngine` class needs to be made. This instance then needs to be saved to a variable that will then be used to access the engine's properties and methods. 
```
let ng = new TextGameEngine();
```

### Start Function
Create a function that will start the game. Within this function properties and methods are used to set the starting elements of the game. 

```
let Start = function() {

}
```
## Properties and Methods
Using the variable, `ng` there are now a number of accessible properties and methods. Use these within the `Start` function and instances of the `GameOption` class. 

<br>

**characterDelay Property**<br>
The `characterDelay` property sets the speed at which game text is written to the screen. This property should be assigned to a numeric value, the default value can be 25.

The lower the numeric value the faster the text and the larger the number the slower the text speed. 
```
ng.characterDelay = 25;
```
<br>

**setText Method**<br>
The `setText()` method sets up the game text that will be displayed to the screen at a given moment. This method accepts a string argument. To avoid breaking the layout set strings to a maximum 35 words or about 230 characters. 
```
ng.setText("This is some game text!");
```
<br>

**setImage Method**<br>
The `setImage()` method displays a image that will be displayed to the screen. It takes a string argument in the form of a path (URL). Images you add to the game with `setImage()` will stay on the screen until the method is used again to change the image.
```
ng.setImage("Images/ExternalImages/haunted-house-library.png");
```

To edit any images included within the template files go to the PixilArt editor, select File, and then Open Photo. Then navigate to the GDFUnit1-TextAdventureProject folder, Images, ExternalImages, and select a image to edit. After editing download the modified image, rename the file, and then place it within the Images folder. 

If you don't want to display an image at a given point and instead want the screen to appear blank do the following:
```
ng.setImage("./DoNotEdit/default.png");
```

<br>

**setAudio Method**<br>
The `setAudio()` method plays a sound file. It takes a string argument in the form of a path (URL). 

```
ng.setAudio("Audio/Music/epic-action-music.mp3");
```

Audio (including both music and sound effects) you add to the game will continue to play until completion and then loop until a new `setAudio()` method is set. 
There are two ways to stop an audio file that's already playing:
* Pass the `setAudio()` method a new audio file. 
```
ng.setAudio("Audio/SoundEffects/light-rain-sound.mp3");
```

* Pass the `setAudio()` method an empty string to stop the music or sound currently being played. 
```
ng.setAudio("");
``` 

Note, any images, music, and sound effects not already included in the template will need to be placed within the Images or Audio folders to be used within the game. Then add that file by using the URL, `Images/filename.extension` or `Audio/filename.extension`. 

If an image, music, or sound effect is not appearing/playing in game make sure to double check that the URL is written correctly and the file's name and extension is written correctly.   

<br>

**setStyles Method**<br>
The `setStyles` method will change the text color and font of the in-game text. By default the color of the text is white and the font is set to "Determination", the same font used in the RPG game, Undertale. 

This method accepts two strings: 
* The first string accepts a color in the form of a color name, RGB, HEX, or HSL. To see a list of web safe color names check out [W3Schools Color Names](https://www.w3schools.com/colors/colors_names.asp). When writing a color name write the string in lower case, and for words with multiple words enter them as one word, such as `darkmagenta`, `darkolivegreen`, `lightgoldenrodyellow`. 

* The second string accepts a font name. To see a list of font names to use see [W3Schools Web Safe Fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp). Unlike writing color names, when writing font names maintain the font's spaces. 
```
ng.setStyles("darkorange", "Times New Roman");
```

Note, styles set with the `setStyles` method will be maintained throughout the game unless the method is used to change them.

<br>

**setOptions Method**<br>
The `setOptions` method creates clickable button options used to progress the game. This method accepts an array, which are made using square brackets `[]`. Within this array the new keyword is used to create a new instance of the `GameOption` class.

```
ng.setOptions([new GameOption()]);
```

Pass the instance of the `GameOption` two arguments: 

* The first will be a string. This string will set the clickable button text that will display in game.

* The second is a function that will set what will happen when the button is clicked. To create this function use an arrow function to keep your code readable. An arrow function omits the `function` keyword, keeping the parentheses and then utilizes an arrow `=>` made with an assignment operator and an angle bracket. Then use methods such as setText, setImage, setAudio, and setStyles. Also, use setOptions to create more complex game options.

In addition to the use of those methods the `setScenes()` method is available to link a option to a new scene. 

```
ng.setOptions([new GameOption("CONTINUE", () => {
    ng.setText("The next part of the story...");
    ng.setAudio("");
    ng.setStyles("white", "Determination");
    ng.setOptions([new GameOption("LEAVE ROOM", () => ng.setScene(LivingRoom))])
})]);
```

## New Scenes
Create new instances of the `Scene` class. These scenes will be formatted with properties and methods that create new areas. Scenes represent different locations for the game and they are linked together through the player's options to progress the player throughout the story. 

Within the scene set the text, images, audio, and unique selectable options. Styles cannot be changed within a scene.

To create a scene start by creating a variable that will act as the scene's name. Assign this scene name to a new instance of the `Scene` class. 
```
let OutsideMansion = new Scene({
    
})
```
Pass this new scene an object with properties that will describe the scene. The object can have four properties:
* `text` accepts a string value that will set the in-game text for the scene. This operates similarly to the `setText()` method.

* `image` accepts a string value in the form of a path (URL). This operates similarly to the `setImage()` method. 

* `audio` accepts a string value in the form of a path (URL). This operates similarly to the `setAudio()` method.

* `options` accepts an array, and within this array place new instances of the `GameOption` class to add clickable options to the scene. This operates similary to the `setOptions()` method. 

Reference the setOptions Method section to see how to create an instance of the `GameOption` class. <br> 

Make sure to seperate the properties with a comma. 

```
let OutsideMansion = new Scene({
    text: "This scene takes place outside the mansion!",
    audio: "Audio/Music/creepy-woods-music.mp3",
    image: "Images/haunted-house-mansion-exterior.png",
    options: [
        new GameOption("Check the door", () => ng.setScene(MansionDoor)),
        new GameOption("Run away", () => {
            ng.setText("Are you sure you want to run away?");
            let mansionExteriorOptions = [
                new GameOption("No, check the door", () => ng.setScene(MansionDoor)),
                new GameOption("Yes, run far away!", () => {
                    ng.setText("You run as fast as you can");
                    ng.setOptions([new GameOption("Start Over", () => Start())])
                })
            ]
            ng.setOptions(mansionExteriorOptions);
        }),
    ],
})
```
The example above details how to create a more complex scene. It starts with the declaration of a new variable `OutsideMansion`, this is the name of the scene. The variable is then assigned to a new instance of the `Scene` class.

Within this new instance an object is passed. This object's `text`, `audio`, and `image` properties work similarly to the Text Game Engine's set methods. The `options` property accepts an array and within two new GameOption instances are made.

The first one will create an option for the player to "Check the door", upon choosing this option the player will progress to the `MansionDoor` scene. 

The second option will be to "Run away". Rather than progressing to a new scene an arrow function is used to extend the scene. Once "Run away" is selected the player will be asked "Are you sure you want to run away?" Within this option a new variable is made called `mansionExteriorOptions`, it's assigned to an array where more instances of the GameOption class are made. The variable is then used within by the `setOptions` method (still within the "Run Away" `GameOption`) to allow the player to progress the the `MansionDoor` scene or be forced to start over.
