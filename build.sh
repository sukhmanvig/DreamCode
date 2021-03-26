#!/bin/bash
 
cd client; 
npm run-script build; 
rm -rf ../build; cp -r build ../build; rm -rf build
