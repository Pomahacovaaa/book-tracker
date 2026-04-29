# <img width="35" alt="photo-book" src="https://github.com/user-attachments/assets/eeff4014-3a15-41e4-b6c9-66599dbea334" /> book-tracker <img width="35" alt="photo-book" src="https://github.com/user-attachments/assets/eeff4014-3a15-41e4-b6c9-66599dbea334" />

This website is a book tracker that uses a googlesheet that it connects to thanks to java script (so you can add progress as long as you have access to google sheets). I made it because i got annoyed by all the ads and overly complicated functions most popular book trackers have while not even being that nice visualy.

## What i used to make it?
* javascript
* googlesheets
* html
* css
										
## How can you use it yourself?		
### Download and custumize
this step is pretty straightforward - just download the files and type your name into the name.csv instead of mine (so your homepage doesn't say Lenka's journal)									
### The googlesheet
1. The books are stored in Googlesheet that is published as a CSV and javascript fetches them every time you reload the site. But in order to track your books you need to make your own sheet. <br>
2. Make the sheet in the same way as the picture bellow. <br>
<img height="500" alt="image" src="https://github.com/user-attachments/assets/3bb5d68d-1438-436d-a0a0-0757ad9dc87c" />	<br>		
3. Publish the sheet (file → share → publish to web; format: csv) and copy the link and paste it into the pink highlighted part in scfin.js and in script.js<br>
<img height="500" alt="Snímek obrazovky 2026-04-27 193419" src="https://github.com/user-attachments/assets/19d105b2-d422-4ee8-800d-b1e752b1a428" /><br>

<img height="500" alt="Snímek obrazovky 2026-04-29 190047" src="https://github.com/user-attachments/assets/2afdc6f4-4b24-4f76-97ff-23531c5f9274" /> <br>
4. These are all the genres in the tracker rn - Fantasy, Sci-Fi, Thriller, Mystery, Non-Fiction, Romance, Dystopian, Horror, Adventure, Historical, Biography, Memoir, Psychology, Self-Help, Crime, Young Adult - but only the first five are working so if u want to use the others you need to uncomment them in the scfin.js and script.js. You would also need to copy what i have in fin.html and tbr.html under the genre names and just change the ID to your new genre<br>
<img height="500" alt="Snímek obrazovky 2026-04-29 185152" src="https://github.com/user-attachments/assets/931af6e5-f8fb-465f-924e-a088d589293c" /><br>

## Note
I learned how to connect the sheet to the website and now i can update it from anywhere. In the future i will probably add a progress bar or something like that. Hope you find this site useful and i REALLY recommend all the books that i have in my google sheet.
