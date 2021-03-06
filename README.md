# server-dash

A customizable dashboard to monitor your Linux server.

This is the NodeJS server component of the server-dash application.

## Prerequisites

To run the server, you need to have NodeJS and MongoDB installed.

### Homebrew

If you're running on a Mac, Homebrew is a great package manager that will really help you through this installation process.

Visit http://brew.sh/ for instructions on downloading and installing.

Before running any of these ``brew install`` commands, make sure to do a ``brew doctor`` and ``brew update``.

NOTE: This step is completely optional and mostly meant for developers. You can download and install all of the below
packages without Homebrew (and you'll need to if you're running this on your Linux server, which is exactly where
this project is meant to run).

### NodeJS

To install NodeJS, visit http://nodejs.org/ and follow the install instructions.
If you're running on a Mac with Homebrew installed, you can install NodeJS like this:

```
brew install node
```

### MongoDB

Visit the MongoDB website (http://www.mongodb.org/) and follow the install instructions. If you're running this in a
production environment on your Linux server, make sure to follow the instructions to have MongoDB start when your
server boots (``chkconfig`` or something similar).

Again, if you're running on a Mac with Homebrew installed, you can install like this:

```
brew install mongodb
```

## Getting Started

Clone the application

```
git clone git@github.com:green-arrow/server-dash-server.git
```

Install dependencies

```
cd server-dash-server
npm install
```

### Run the application

By default this will be located at ``http://localhost:3000/``.

```
node app.js
```

### Defaults

If this is your first time running the application, the default login credentials are:

Email: admin@localhost

Password: Adm!n

These credentials will be displayed in the console window after starting the application for the first time. You will need to follow the instructions on [server-dash-client](https://github.com/green-arrow/server-dash-client) to get the Ember web application up and running.

### Forcing Setup

If you ever reach a point where you would like to completely reset the application and database, use the following command:

```
node app.js --force-setup
```

This will force the MongoDB database to be dropped and the setup script will run again.
