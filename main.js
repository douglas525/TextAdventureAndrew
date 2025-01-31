let gameName = "The Haunted House";
let creator = "Andrew Iskandarov";

let gameNameContainer = document.getElementById("gameNameContainer");
gameNameContainer.textContent += " " + gameName;

let NameContainer = document.getElementById("NameContainer");
NameContainer.textContent += " " + creator;

/* Create a new variable that will contain a new instance of the Text Game Engine */
let ng = new TextGameEngine();

/* Create a function named Start that will run when the player starts the game */
let Start = function () {
    ng.setText("You wake up from a dream...but cannot remember what it was about...Once you come to your senses you realize you're outside in the woods...");
    ng.characterDelay = 25;
    ng.setImage("Images/ExternalImages/haunted-house-woods.png");
    ng.setOptions([new GameOption("Continue", () => ng.setScene(WayOut))]);
};

/* Add to the game by creating new Scenes */
let WayOut = new Scene({
    text: "The woods are quiet and you feel uneasy. You see only one path out of the woods. Will you go forward or lay back and give up?",
    image: "Images/ExternalImages/haunted-house-mansion-exterior.png",
    audio: "Audio/Music/creepy-woods-music.mp3",
    options: [
        new GameOption("Go Inside", () => ng.setScene(InsideMansion)),
        new GameOption("Give Up", () => {
            ng.setText("What...are you sure?");
            ng.setStyles("white", "Determination");
            ng.setAudio("");
            let giveUpOptions = [
                new GameOption("Actually I'll Go!", () => ng.setScene(InsideMansion)),
                new GameOption("Yes... I give up.", () => {
                    ng.setText("Oh, it's game over.");
                    ng.setOptions([new GameOption("Start Over", () => Start())]);
                }),
            ];
            ng.setOptions(giveUpOptions);
        }),
    ],
});

let InsideMansion = new Scene({
    text: "You open the door to the mansion and see various paths, but no other living beings. You see a set of stairs and some hallways... Where will you go?",
    image: "Images/ExternalImages/haunted-house-mansion-foyer.png",
    audio: "Audio/Music/creepy-mansion-music.mp3",
    options: [
        new GameOption("Go on the sound of cracking fire", () => ng.setScene(FirePlace)),
        new GameOption("Go on the smell of burnt toast", () => ng.setScene(Smell)),
        new GameOption("Darkest Path", () => ng.setScene(Path)), // Updated here
    ],
});

let Path = new Scene({
    text: "You make your way up the stairs and realize you've reached some sort of library! Immediately you notice something looks a little off in the flooring... Step on the unique tile?",
    image: "Iamges/ExternalImages/haunted-house-library-hidden-room-reveal.png",
    options: [
        new GameOption("Back to the foyer", () => ng.setScene(InsideMansion)),
        new GameOption("Step on tile", () => {
            ng.setText("As you step on the tile, you hear a creak, and a hidden door opens, revealing a dark passage. What will you do?");
            ng.setOptions([
                new GameOption("Enter the passage", () => {
                    ng.setText("You slowly enter the hidden passageway to reveal a hidden room... a very familiar room... and then suddenly your memories come back! This is your mansion! Realization hits you all at once... Do you want to confront it?");
                    ng.setOptions([
                        new GameOption("Confront the truth", () => {
                            ng.setText("You face the truth, accepting your past and understanding your connection to the mansion. Something changes within you.");
                            ng.setOptions([
                                new GameOption("Return to society", () => {
                                    ng.setText("You decide to leave the mansion behind and return to the world you once knew. You step outside, ready to face the future, leaving your past where it belongs.");
                                    ng.setOptions([new GameOption("Start Over", () => Start())]);
                                }),
                                new GameOption("Keep yourself forever", () => {
                                    ng.setText("You choose to stay in the mansion forever, accepting the isolation as part of your fate. Your memories bind you to the house, and you never leave.");
                                    ng.setOptions([new GameOption("Start Over", () => Start())]);
                                }),
                            ]);
                        }),
                        new GameOption("Ignore the truth", () => {
                            ng.setText("You decide to walk away from the memories, ignoring the truth about your past. The game ends here.");
                            ng.setOptions([new GameOption("Game Over", () => Start())]);
                        }),
                    ]);
                }),
                new GameOption("Back to the library", () => ng.setScene(Path)),
            ]);
        }),
    ],
});

let Smell = new Scene({
    text: "You make your way down the hallway to the smell of burnt toast and realize that you've reached the kitchen. What will you do?",
    image: "Images/ExternalImages/haunted-house-kitchen.png",
    audio: "Audio/Music/kitchen-hum-sound.mp3",
    options: [
        new GameOption("Back to the Foyer", () => ng.setScene(InsideMansion)),
        new GameOption("Check Cabinets", () => {
            ng.setText("You check the cabinets and find a ton of potatoes... Mmm, your favorite! What next?");
            ng.setOptions([
                new GameOption("Stop checking cabinets", () => ng.setScene(Smell)),
                new GameOption("Back to the Foyer", () => ng.setScene(InsideMansion)),
            ]);
        }),
        new GameOption("Check the Fridge", () => {
            ng.setText("You check the fridge and find a piece of burnt toast and potato-based meals! Jeez, not a very talented chef... What next?");
            ng.setOptions([
                new GameOption("Stop checking fridge", () => ng.setScene(Smell)),
                new GameOption("Back to the Foyer", () => ng.setScene(InsideMansion)),
            ]);
        }),
    ],
});

let FirePlace = new Scene({
    text: "You follow the hallway on the left and end up in a den. The fireplace is running and despite the warmth of the fire a slight chill runs down your spine... Someone must've set this fire...",
    image: "Images/ExternalImages/haunted-house-mansion-den.png",
    audio: "Audio/Music/den-fireplace-sound.mp3",
    options: [
        new GameOption("Back to the foyer!", () => ng.setScene(InsideMansion)),
        new GameOption("Look Around", () => {
            ng.setText("Looking around you also notice a bookshelf, a cozy chair, and a horse painting... Which will you inspect?");
            ng.setOptions([
                new GameOption("Bookshelf", () => {
                    ng.setText("You check out the bookshelf and pull out a random cookbook...' 1001 Recipes For Potatoes'. Mmm...classy, nothing beats a good potato! So, what will you do now?");
                    ng.setImage("Images/ExternalImages/haunted-house-bookshelf.png");
                    ng.setOptions([new GameOption("Go Back", () => ng.setScene(FirePlace))]);
                }),
                new GameOption("Chair", () => {
                    ng.setText("You touch the chair making sure it's not booby trapped then carefully take a seat. You sink in, it's peaceful. But, from what you can tell nothing is happening ... What now?");
                    ng.setImage("Images/ExternalImages/haunted-house-chair.png")
                    ng.setOptions([new GameOption("Go Back", () => ng.setScene(FirePlace))]);
                }),
                new GameOption("Horse Painting", () => {
                    ng.setText("You look around at the painting above the fireplace, it's a horse that looks a bit odd to you for some reason...");
                    ng.setImage("Images/ExternalImages/haunted-house-painting.png");
                    ng.setOptions([
                        new GameOption("Stop Staring!", () => ng.setScene(FirePlace)),
                        new GameOption("Continue Staring!", () => {
                            ng.setText("Next thing you know you're in a horse-drawn carriage heading along an empty road... You're unsure if this is the right way, but no matter what, you've reached the end of this particular journey.");
                            ng.setImage("Images/ExternalImages/haunted-house-carriage.png");
                            ng.setAudio("Audio/Music/horse-drawn-carriage-sound.mp3");
                            ng.setOptions([new GameOption("Start Over", () => Start())]);
                        }),
                    ]);
                }),
            ]);
        }),
    ],
});

/* DO NOT REMOVE OR EDIT ANY CODE BELOW THIS COMMENT! The game is ran by calling the Start function. */
Start();
