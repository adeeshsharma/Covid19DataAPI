# Covid19DataAPI
This API was developed as a part of project www.covidsimpact.com . 
The data for this API is sourced from Worldometers real time updates.
The dataFileAPI.json in the repo consists of covid-19 global stats which is parsed as JSON in the node application.
This .json file is updated every ten minutes by running a cron python script which scrapes the data on the live server.

# Note
The python script which is used for scraping this data and generating the .json file is not included in this repo and this repo is uploaded only to demonstrate the working technicality of the node application which is serving the data to the consumer.
