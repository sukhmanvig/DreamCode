#!/bin/bash
 
npm ci;
cd client; 
npm ci; 
npm run-script build; 
rm -rf ../build; cp -r build ../build; rm -rf build
