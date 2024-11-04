# espresso-addict
 A small text adventure - written in vanilla JS
 Espresso Addict is an engaging text adventure game built in JavaScript where the mission is to collect 5 espressos to win. Players navigate through various scenes, needing to maintain their health, money and items while making important decisions. With it's simple design the game invites players to carefully consider their strategies in each scenario while trying to collect espressos.



# Tests 
¤ win_the_game
¤ full_screen_mode


# How to test with selenium and cucumber
 As a user you need to install nmp install:
 npm install selenium-webdriver
 npm install @cucumber/cucumber
 $ npm install --save-dev chai
 npm install cucumber-html-reporter --save-dev
 Git hub actions add map .github and make a subfolder to workflows. We added "env: FORCE_COLOR: 2" to enable color in the tests in GitHub Actions. This makes it easier to read the test results that way.
 When testing, you need two terminals open at the same time : one for the localhost 3000(npm start)  and the other one for testing (npm test)

 # Problems
 We didn't have helpers.js at the beginning of the workshop, it made writing the tests much more difficult.
 We missed that we needed two terminals open at the same time.
 It took time to find the right files/folders for our program due to changes that had been added later on.
 We had to modify the original test and feature for win_the_game to make it work. We also added cheatIfNeeded to prevent health from reaching 0. We included console.log to check and see if we were getting the expected output in the terminal.
 We had trouble running GitHub Actions, and to solve the issue, we added run headless in hooks.js.
 We also added "--format @qavajs/console-formatter --fail-fast" to the package.json "test" to get GitHub Actions running.