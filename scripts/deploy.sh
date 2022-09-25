# Script used for deploying the Tetris game to Firebase
echo "--------------------------------------"
echo "Deploying a new version of Tetris game"
echo "--------------------------------------"

cd ..

# build the app
yarn build

# deploy to firebase
firebase deploy

echo "--------------------------------------"
echo "Tetris game was deploy successfully   "
echo "--------------------------------------"