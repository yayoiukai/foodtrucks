<h1> Project : Food Trucks (Full stack) </h1>
<p>
Link to the Application : http://ec2-54-186-49-169.us-west-2.compute.amazonaws.com/
</p>
<p>
Link to the Code : https://github.com/yayoiukai/foodtrucks
</p>
<hr> 
<h2> Technical Stack </h2></p>
<ul><h3> Full Stack </h3>
<p>I choose the Fullstack track since I've been working on websites and I wanted to build something that can show my experience and ability to learn things quickly. Also, since I am very excited about this project, I wanted to build a website I can share with other people easily regardless their techinical abilities. So making full stack website seemed like a logical choice for me. 

</p>
</ul> 
<ul><h3> Overall architecture </h3>
     <h4>
     <li> Database - SQLite </li>
     <li> Application - Django </li>
     <li> FrontEnd - Javascript, JQuery, GoogleMap API, bootstrap</li>
     </h4>
     </ul>
<ul><h3>Reasons and Experience </h3>
    <li><h4> SQLite </h4> 
    <p> I have used SQLite before. (I made a website with it before and I migrated from SQLite to MySQL after data grew substantially.) I also knew that SQLite can handle reasonable amounts of data (definately more than a few hundred data points). And SQLite comes with Django as a default. I thought that SQLite would be sufficient for the scope of this project. And I thought it would be nice that I didn't have to set up the database separately for the deployment.
    </p>
    <p> I used Python script file (dataprocess.py) to transfer the data from DataSF to SQLite. I downloaded the JSON format raw data (rows.json) from DataSF. I've done similar things before in Python and Perl. So I knew that it would be easy to do. 
    </p>
    </li> 
    <li><h4> Django </h4></li>
    <p> I learned Django for this project. Although this was my first project that I had done with Django, I built several websites with different frameworks, Ruby on Rails, CakePHP, SpringMVC etc. Also, I'd been using python for a while now, so Python was not a new language for me. I decided to choose django because I liked Python and I knew that Admin interface and already built in user functionality was convenient (even though this projecst doesn't require user registration, the Admin interface was great for checking to see that the data process is working correctly). I also understood that I did not need to have the flexibility that Flask would provide for this project. All I needed to was simple MVC. I think I made a good choice. </p></li>
    <li><h4> Frontend </h4>
    <p>Once I decided to do this foodtruck project for full stack, I looked at several other foodtrucks websites. And I decided that I wanted to have a very simple user interface that was very focused on map, user location, and bare minimum, essential information. (So that it won't clutter the over all look of the website.) I also started learning backbone.js after I read the project spec. I learned that Backbone was a great tool to update the content of the page based on the user interaction without making frequent request to the server. However, since I'd already decided to use django which did all sorting the data based on the GPS coordinate, I realiezd that it would be sufficient just using Javascript, JQuery and Google Map API to have the UI I wanted instead of using backbone. So I decided to focuses on the map. I learned map API for this project as well. I used javascript and JQuery before when I did web developments. </p> 
    </li></ul>
<ul><h3> Anything Left Out </h3>
    <li><h4> Data Related Issues </h4>
    <p> Intially I thought it would be cool if I could show the user what kind of cuisine each Foodtruck serves not just what kind of food they serve. So I counted all the keywords in the menu (they were about 500 of them) and counted the each keyword in the menu (the most frequent one was about 30). I wanted to determine the cuisine they serve automatically based the keywords in the menu. However, I realized that it would not be that simple to categorize 100% correctly programically and it would make database structure a bit more complicated than I would like. (I would have needed to maintain some kind of many to many relationship.) So I decided not do it after I experimented with the data for a while. However, If I had more time, It would be a nice feature to add. </p>
    <p>I also realized that these data sets from DataSF was not entirely accurate. Some of them were but some trucks moved around all over the place and they followed a certain schedule etc. If I had more time, I would like to make a scraper that runs regularly and updates the data regularly as well. Also, it would be good to have a UI that allows truck owner to update their data too.</p></li>
     <li><h4> FrondEnd </h4></li>
    <p>I am really happy with what I made for the project. It would be great to add more functionality. I would like to enchance map in a few different ways. For example, users can just click the marker and they can get all the information from the dialog box on the marker. Also, it would be nice if different kinds of cuisine have different color markers. And I also want to give users more options for their search. (probably cuisine and distance)
    </p>
    
    </ul> 
  
    
<hr>
<p>
Link to my public profile : http://www.bayareatechgirl.com/
</p> 
<p>
Link to my resume : http://www.bayareatechgirl.com/aboutme/resume.html
</p>



    
    
    
    
    
    
    
    
    
     
     
