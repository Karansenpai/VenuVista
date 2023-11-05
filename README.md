# Hackout-2023
**The entire prohject was developed in the duration of the hackathon.**

The project aims to develop a Generic Management System for various establishments like libraries, restaurants, and hospitals. The system's primary goal is to provide real-time information about the availability of seats, tables, or beds in these places. This information will be valuable for visitors, enabling them to plan their visit based on the current availability status. The system will be maintained and updated by respective personnel (library guards, hotel or restaurant receptionists, and hospital receptionists) to ensure that visitors receive accurate and up-to-date information. Another aspect is to provide the estimated waiting time in case there are no vacancies. This project will enhance the visitor experience and streamline the process of finding a suitable place within these establishments.
We are dedicated to tackling a pervasive issue that affects us all in our daily lives. For example, when we head to a restaurant for dinner and discover that all the seats are already booked, we're left with the dilemma of either waiting or altering our plans, resulting in a significant waste of time and resources. Similarly, in the event of a hospital emergency, such a situation could lead to grave consequences. This problem extends beyond just restaurants or hospitals; it represents a fundamental management challenge that has yet to find a truly sophisticated solution. This is a pressing concern that demands innovative attention.
To tackle this problem, we have come up with a system in which ,for example, if some people arrive and occupy a seat in a restaurant, the receptionist will increase the number of booked seats in the restaurant. Similarly if a table is vacated, the receptionist will increase the count of available seats. (NOTE: This feature to change the number of available and booked seats can only be changed by a person with proper authentication details, i.e only official restaurant personnel can do these operations, people without a authentication can't hamper the data.)
On the customer end, the customer will see real-time updates about the number of seats vacant and booked, and can plan his arrival time accordingly. This system can similarly be applied in library and hospital management and much more. To accomplish this project, we have implemented signup, login, list of hotels, dashboard of hotel, option to book and vacate, and customer view to see the number of empty seats. The Frontend is developed using REACT and Backend is developed NODE and EXPRESS JS. The Database of hotels is managed using MongoDB.
As a future aspect, we have also trained a Machine Learning Model to recommend hotels based on the search of the user to make this website more holistic and include various aspects of the same.

//to run server
1) cd Backend/  - (go in backend folder)
2) npm install  - (to install node modules)
3) npm run dev  - (make sure not to be connected to any internet proxy mongoose is giving error in proxy use mobile internet)

// in frontend
1) cd Frontend/
2) npm install
3) npm run dev
4) open link

enjoy
