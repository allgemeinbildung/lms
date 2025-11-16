@echo off
:: =================================================================
::  WARNING: THIS SCRIPT OVERWRITES YOUR LIVE FIRESTORE DATA
:: =================================================================
:: It uses "npm exec" to guarantee the LATEST version of firebase-tools
:: is used, bypassing any old or broken global installations.
:: =================================================================

set PROJECT_ID=lms-interactive
set DATA_DIR=firestore-data

echo.
echo TARGET PROJECT: %PROJECT_ID%
echo SOURCE FOLDER: .\%DATA_DIR%
echo.
echo This will DELETE all data in the corresponding collections on your
echo LIVE project and replace it with your local data.
echo.

pause
echo.
echo Starting upload...

:: The main command, using "npm exec" for maximum reliability.
:: The "--" is important. It separates npm arguments from firebase arguments.
npm exec -- firebase firestore:collections:import "%DATA_DIR%" --project=%PROJECT_ID%

echo.
echo =================================================================
echo  PUSH COMPLETE! Your live database now matches your local data.
echo =================================================================
echo.
pause