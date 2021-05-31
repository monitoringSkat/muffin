#!/bin/bash
echo "Started Muffin installation."
sudo wget https://gist.githubusercontent.com/Tegnio/e7fd3b737cd0707b4ac1054ac87a4f04/raw/816bb83ccfe13fd833b7d9e262d832f08afd90ec/config.json -O ./config.json
npm i
echo "Installed successfully. Now you need to fill in config.json file and run the bot using 'npm run normal'."