# Quad Squad - Software

Repo for the app. Runs off Ionic framework + Vue

# Setup
 - Install [Ionic](https://ionicframework.com/getting-started)

# For development
 Frequently used commands
 - For hot refresh on browser and iPhone
    - `ionic cap run ios -l --external`
 - Creating production build for ios
    - `ionic cap copy ios`

# App Structure
 ## Views
 - Control Centre
    - Main page for interacting with quad
        - videoStreamer 
            - currently a place holder
        - flightControl
            - Circle gesture complete
            - Buttons for elevation and rotation need endpoints
 - Test
    - For testing the flask server
    - request
        - Simple HTTP requester
 - Settings
    - Only built for changing servers ATM
    - serverSelect
        - Changes server that the app uses app (pi-communication)

 ## Note
 - In `src/components/ser-select.vue` the default server can be changed so that on startup it uses that server
 - Haven't tested at all for andriod