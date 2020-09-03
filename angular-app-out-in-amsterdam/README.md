# Main task

Attached you should find a JSON dataset from "Out in Amsterdam". This dataset contains information on various venues - restaurants, cafes and bars - in and around the city of Amsterdam. You should produce an application to display the venues in a tabular format that allows you to filter the venues in various ways:

 - By name. Note: you should be able to search by substring.
 - By city. It should be possible to select several cities at once.
 - By start year.
 - By postcode.
 
 In the table, you should be able to view the following information about each venue.

 - Name
 - City
 - Postcode
 - Address
 - Start year

You should also be able to click on a venue to reveal some more details about it - it's full name and full address, URL and any pictures which are available.

# Bonus task 1

Each venue in the dataset should also have a latitude and longitude. Implement a map view that allows you to view the venues

 - The map view should also support the features defined in the table view - filtering the venues and clicking a venue to view more details about it
 - Provide a method to switch between viewing the tabular and map views.
 - When a venue is selected highlight it somehow on the map view
 

# Bonus task 2

You should also find the "Events in Amsterdam" data set attached. Modify the application so that when a venue is selected the user can see any events which are nearby (< 1km) the selected venue - again in both map and tabular views.

 - Events on the map view should be easily distinguishable from venues
 - Events on the tabular view should be ordered by the distance from the venue
 - Allow filtering the event list by:
   - name
   - year and month of the event

Non-functional requirements

The application should work in modern browsers
Use the latest Angular(7+) (Angular CLI for easy scaffolding is recommended)
Feel free to use additional libraries like Bootstrap, lodash, jQuery, etc.
To run the application we recommend Angular CLI's ng serve, but feel free to use e.g. NodeJS with http-server, etc.
