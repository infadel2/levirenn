rm package*.json
rm asdf.js #extra working file that nekoweb doesnt delete for whatever reason
rm -rf node_modules

#export FFMPEG_BINARIES_URL=https://github.com/BtbN/FFmpeg-Builds/releases/download
#npm install ffmpeg-static
#echo "const pathToFfmpeg = require('ffmpeg-static')" >> get-ffmpeg-run.js
#echo "console.log(pathToFfmpeg)" >> get-ffmpeg-run.js
#node get-ffmpeg-run.js
#rm get-ffmpeg-run.js
#node node_modules/ffmpeg-static/install.js

npm install --save @ffmpeg-installer/ffmpeg
echo "const ffmpeg = require('@ffmpeg-installer/ffmpeg');" >> get-ffmpeg-run.js
echo "console.log(ffmpeg.path, ffmpeg.version);" >> get-ffmpeg-run.js
node get-ffmpeg-run.js
rm get-ffmpeg-run.js
#./node_modules/@ffmpeg-installer/linux-x64/ffmpeg
