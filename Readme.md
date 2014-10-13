# Getting Started

To see this demo in action you will need to do the following:

   - copy the 'sessions' folder into a Sencha workspace
   - build the app with Sencha Cmd
   - configure the app with your own Azure mobile service url and application key 
   - make sure to have a table defined in your Azure mobile service named 'Sessions'
   - open the app in a browser


If you do not have an existing Sencha workspace, you can create a new workspace by running this command from an existing Ext JS framework directory (using the --force option will make sure a copy of the framework is included into the new workspace):
   
   > sencha generate workspace --force /path/to/workspace

After you have a workspace, copy the 'sessions' folder into the workspace.

Next, you will need to build the app so that the sencha-azure package is downloaded and extracted into the packages folder.  To do this, run this command from the 'sessions' folder.

   > sencha app build

Follow the steps outlined in the Sencha Azure docs so that the app will use your own application key and mobile service url.

   http://docs.sencha.com/touch-azure/1.0.0/#!/guide/getting_started
   http://docs.sencha.com/touch-azure/1.0.0/#!/guide/configuration

Finally, make sure your mobile service has a table named 'Sessions' since the 'sessions' store's proxy defined in the DogFood.view.sessions.GridModel class is set to use a table of that name.  If you wish to use a different table name then modify the GridModel class accordingly.


After you have completed these steps, you should be able to open the application in a browser and it will connect to your Azure Mobile Service and download and display the data from your Sessions table.