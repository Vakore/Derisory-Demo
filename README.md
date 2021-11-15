# Derisory-Demo
A demo of my work in progress game Derisory.
![derisory-demo-picture](https://user-images.githubusercontent.com/94314052/141704647-ee7459f3-f05b-406d-a3cd-c550d3d52de2.png)
I originally wanted it to work in the web browser without downloading it, however my current code will not work due to the way I was loading scripts when changing areas and Google Chrome being overly sensitive to loading files dynamically. I could change the code, however my current solution is to just have it as a download. The areas will load faster anyways and it'll save you tons of bandwidth from not having to load the 130 files over the internet every time you want to run the game.

HOW TO:
 1. Download the ZIP file called derisory-demo
 2. Unzip it's contents into a new folder. Call it whatever you want.
 3. Launch 'derisory.html'
 4. (OPTIONAL)If the game is too fast(i.e. you have a 120fps monitor), go to 'gameSpeed.txt' and change 'gameIsTooFast' to true. It will run the game at half speed. Refresh the page afterwards
 5. Z on keyboard or A on controller to select stuff, and X on both to go back. Enter or Pause to pause.
 6. Go to options for fullscreen

I've only tested this in Google Chrome. If it works in other browsers that is great, but if something doesn't work that may be why.

Here are some links if you want them. If you don't then no need to read below.

DISCORD: https://discord.com/invite/qb3nhGyh

YOUTUBE: https://www.youtube.com/channel/UCqSwjaGctHSVnY7xR8Mec9g



P.S. There are two sequence breaks you can do without the bonus dev abilities. If you do them you'll just get into rooms that wrap into themselves, but performing them will make you feel cool!

P.P.S. hold X to speed up the dying animation if you get tired of it.

CHANGES:
v1.01 - Added FPS cap code due to people with super computers games running at 120fps, causing the game to run at twice the speed.
v1.02 - Add gameSpeed.txt file. It can be modified if your game is running too choppy or too fast.
v1.03 - The FPS capping is now toggleable in gameSpeed.txt. If the game is too fast, you can turn it on. Otherwise you can leave it alone.
v1.04 - I am pretty sure this new fix is the one that will work the best.

v1.10 - Fixed a variety of bugs, including saving custom controls not working, the healing prompt not showing the right button, and more.
- Fixed sitting at campfires not working when having multiple buttons set to jump

* Known bug: having multiple buttons set to an action on keyboard effects controller. I am not super concerned about this right now, but just note that you should not have the same button bound to multiple actions on keyboard if you want to use controller. I am just saying this for those who want to use UP to jump and attack up. If you only use keyboard, do not worry about this.
