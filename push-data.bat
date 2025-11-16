@echo off
:: =================================================================
::  WARNING: THIS SCRIPT OVERWRITES YOUR LIVE FIRESTORE DATA
:: =================================================================
:: It uses the Google Cloud CLI (gcloud) to upload your local
:: 'firestore-data' folder to your live Firebase project.
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

:: The main gcloud command to import data.
:: It requires a temporary location in Google Cloud Storage to work.
gcloud firestore import "gs://%PROJECT_ID%.appspot.com/temp-import-data/" --collection-ids="assignments" --project=%PROJECT_ID% --quiet

echo.
echo =================================================================
echo  PUSH COMPLETE! Your live database now matches your local data.
echo =================================================================
echo.
pause