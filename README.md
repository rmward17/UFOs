# UFOs
## Overview of Project
Dana is a jounralist that has been tasked with developing a webpage with a dynamic table full of data about UFO sightings. With our knowledge of HTML, building the webpage wasn't too difficult but we needed to use JavaScript to create a table that would react to user input. 

## Analysis
Before getting into the webpage, we had to understand JavaScript and it's relationship to HTML and how it can be utilized for this task. Once we got a handle of the language, we organized our repository so that the HTML file would properly connect to the css and javascript files. Once that was ready, we created a storyboard and then got to work building our HTML page and writing our code. 

We worked on the HTML first to build out each section and create the table. It was helpful doing all of this that way when we wrote our javascript functions, we were ale to call in the proper ids and classes of our HTML tags. We wrote two functions - one to build the table and one to filter the table. Within the filtering function, we were able to updated the filters and then call back the build table function to rebuild the datatable based on the filters input by the user. Below are the results of our efforts!

## Results: 
Here is a snapshot of the webpage:

![full_page](https://github.com/rmward17/UFOs/blob/main/Analysis_Resources/full_page.png)

In order to filter the table, you can just change the inputs in the filter section on the left hand side of the page. Let's walk through how to use them.

### Filter by one paramter
Our filters are on the bottom left side of the page:

![filters](https://github.com/rmward17/UFOs/blob/main/Analysis_Resources/filters.png)

Currently, the filters are empty. What we are seeing are the default backgrounds of the input sections to show the user how to format their text when they are searching through the table.

If we wanted to filter by the date, the user can simply enter a date and press enter. Once we do that, the table will change accordingly.

![filtered_by_date](https://github.com/rmward17/UFOs/blob/main/Analysis_Resources/filtered_by_date.png)

As you can see, the table only shows criteria for that date.

We can do the same for the other filters. Here is another example with the state filter. Below is what happens if someone wants to see the results for only Florida.

![filtered by state](https://github.com/rmward17/UFOs/blob/main/Analysis_Resources/filtered_by_state.png)

### Filter by multiple parameters

You can also filter by multiple criteria. If we wanted to see the table for Florida on 1/11/2010, we would just put those inputs into the filters and the table will update accordingly.

![table filtered by data and state](https://github.com/rmward17/UFOs/blob/main/Analysis_Resources/filtered_by_date_and_state.png)


## Summary: 
In conclusion, using javascript to check the filters and reload the table accordingly works perfectly! However, there is some room for improvement. The filters do not automatically clear so if the user wanted to see the results for a different filter, they would need to remember to clear the input from the filters they do not want to use. One reccomendation I have is to have a "clear filters" button to reset the table. Also, if the user has not had a look at the data, they do not know what the input options are. For each filter there are only so many options within the data. For example, there are not data points from the state of Virginia (VA). Adding a drop down menu for each filter would help the user get a better idea of the data and know the limits of this data. There are many other ways to step up the tables capabilities however, the table still works well as is.
