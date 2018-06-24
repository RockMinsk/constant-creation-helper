# Helper for constant creation

You can get all existing options from menus by usig this module.
It's necessary just define URL and element locators.

!NOTE: project is in progress.

## Requirements

* Git
* NodeJS 8 (note: on the Node 10 the ERR_INVALID_CALLBACK can be present)

## Setup

```
$> git clone https://github.com/RockMinsk/constant-creation-helper.git
$> cd constant-creation-helper
$> npm install

```

## Running end-to-end tests

Specify necessary URL and element locators in the folder 'helpers'.
Run `npm test` to create file with constants via [Protractor](http://www.protractortest.org/).