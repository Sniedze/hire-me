# Daycare tablet interface for Checkin in/out children

solution in the browser:

```
 http://soperfect.dk/daycare/
```

This webhook server allows clients to register urls they want to receive webhooks to, trigger webhooks which proceeds with server sending post request to all client`s registred urls.

## Technologies

    ### React Framework

    ### Axios for data fetching

    ### reactstrap Bootstrap UI for styled components

    ### Sass for styling

        because styling was not the focus in this project, all scss code was written in App.scss file. Normally, pages would have separate styling files.

## Structure

The code structure is made scalable.

        ### components

        This folder would normally keep reusable components.

        ### helpers

        thsi folder holds all the functions, methods.

        ### pages

        pages folder is further divided into separate folders for each page.

        ### styles

        Styles folder contains all folders realted to styling.


        ### config.js

        Normally this file would be ignored and not pushed to git repo.

## Design

Due to the scope of this assignement solution targets tablet size users. Button and input sizes are created accordingly.

The Interface is user friendly in terms of interaction steps needed to checkin or checkout children. Users are not directed to another page.

Button colors help to indicated if the child is checked in or checked out.

## How to Install and Run

### Installation

To install dependencies run:

```
  $ npm install
  or
  yarn install

```

### Run Server

```
 $ yarn start
 or
 $ npm start
```
