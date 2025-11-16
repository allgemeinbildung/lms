
:: =================================================================
::  STARTS THE FIREBASE EMULATOR AND IMPORTS LOCAL DATA
:: =================================================================
:: This script will load all .json files from the 'firestore-data'
:: directory into the local Firestore emulator.
::
:: It also saves any changes you make in the app (like creating a
:: new user) back to this folder when you stop the emulator.
:: =================================================================

set DATA_DIR=firestore-data

echo.
echo Starting Firebase Emulators...
echo Loading initial data from the './%DATA_DIR%' folder.
echo.
echo To stop the emulator, press CTRL+C in this window.
echo.

:: The main command
firebase emulators:start --import=./%DATA_DIR% --export-on-exit

echo.
echo Emulators have been shut down.
pause