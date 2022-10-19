#!/bin/bash
cd /home/ubuntu/node-express-ts
npm run build
cd build
pm2 start app.js