# ItsYourBirthday-Website


It's a basic Angular website which uses Firebase services.Users are asked to register and they can see how dynamically the website changes according to anyone's birthday.
It's more of personalised Dynamic birthday Website. Friends can upload pictures along with their wishes.They can even check the realtime upload or deletion of the Images.

## Getting Started
 One can create their own private website and only allow access to certain group. Clone this project to your local directory or you can even  take the  Zip.
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Some basic prerequisites are 

* Node: 12.14.0 
```
https://nodejs.org/en/download/
```
* Angular: 9.0.7
```
npm install @angular
```
* Firebase Account 
``` 
Refer Stoarge and Cloud Databse documentation for integration
```
### Installing

Some of the angular dependencies are

* Angular Material

```
npm install @angular/material
```

Refer  https://material.angular.io/guide/getting-started for more details

* Angular Fire
```
npm install @angular/fire
```
* Flex Layout

```
npm i -s @angular/flex-layout @angular/cdk
```
 Next, you'll need to import the Layout module in your app's module.

app.module.ts
```
import { FlexLayoutModule } from '@angular/flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});
```
## Basic Functionalities

* Users are supposed to Register to get featured on the main webpage.
* If today is Ben's Birthday Default page will Bdaycounter Component which will set a Counter for 20seconds and then Redirect to Menu Component which compromises of 3 Tabs 
First tab is of Celebration with a Youtube Song and Option of Connecting via Google Meet. It also contains another tab which has a digital virtual Birthday wish card .
* Next Tab is of Gallery where Friends can upload pictures and Wish Ben .
* Third Tab is of Games which will be updated soon


## Built With

* [Angular](https://angular.io/) - The web framework used
* [Firebase](https://console.firebase.google.com/) - Database And Storage
* [Angular- Material](https://material.angular.io/) - Interactive and Smooth UI components

