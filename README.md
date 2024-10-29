# espresso-addict
 A small text adventure - written in vanilla JS
 Espresso Addict is an engaging text adventure game built in JavaScript where the mission is to collect 5 espressos to win. Players navigate through various scenes, needing to maintain their health, money and items while making important decisions. With it's simple design the game invites players to carefully consider their strategies in each scenario while trying to collect espressos.



# Tests to do
¤ doubleEspressos_reward
¤ game_over
¤ Health_status (last part "Then")
¤ Help_btn
¤ Money_status (last part "Then")
¤ Wait_btn
¤ win _the_game


# How to test with selenium and cucumber
 As a user you need to install nmp install:
 npm install selenium-webdriver
 npm install @cucumber/cucumber
 $ npm install --save-dev chai
 npm install cucumber-html-reporter --save-dev
 Git hub actions add map .github and make a subfolder to workflows
 When testing, you need two terminals open at the same time : one for the localhost 3000(npm start)  and the other one for testing (npm test)

 # Problems
 We didn't have helpers.js at the beginning of the workshop, it made writing the tests much more difficult.
 We missed that we needed two terminals open at the same time.
 It took time to find the right files/folders for our program due to changes that had been added later on.
 Some of our tests passed initially but have stopped working when vi ran them again,(Health status och Money status).