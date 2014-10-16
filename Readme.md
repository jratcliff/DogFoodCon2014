# Getting Started

To see this demo in action you will need to do the following:

   - copy the 'sessions' folder into a Sencha workspace
   - build the app with Sencha Cmd
   - configure the app with your own Azure mobile service url and application key 
   - make sure to have a table defined in your Azure mobile service named 'Sessions'
   - open the app in a browser


## Create workspace if needed
If you do not have an existing Sencha workspace, you can create a new workspace by running this command from an existing Ext JS framework directory (using the --force option will make sure a copy of the framework is included into the new workspace):
   
   > sencha generate workspace --force /path/to/workspace


## Copy sessions folder to workspace
After you have a workspace, copy the 'sessions' folder into this workspace folder.


## Build application
Next, you will need to build the app so that the sencha-azure package is downloaded and extracted into the packages folder.  To do this, run this command from the 'sessions' folder.

   > sencha app build


## Test application with test data
Verify that the app works with test data by loading the app in a browser.  If you see a grid with data and a chart then the app works.  


## Setup and configure your Azure Mobile Service
You can either use an existing Azure Mobile Service or create a new one.  Make sure your mobile service has a table named 'Sessions' since the 'sessions' store's proxy defined in the DogFood.view.sessions.GridModel class is set to use a table of that name.


## Configure Application for Azure Mobile Service
First, edit the sessions/app/Application.js file and enter your own appKey and appUrl into the azure config. Then, change the proxy of the sessions store in the GridModel class to use the Azure proxy by uncommenting the Azure proxy config in the DogFood.view.sessions.GridModel class and commenting out the normal rest proxy config.


## Test application with Azure Mobile Service
After you have completed these steps, you should be able to open the application in a browser and it will connect to your Azure Mobile Service and download and display the data from your Sessions table.  

## Adding data
If you do not have any data yet in your Sessions table just use the 'Add' button from the Grid and add data.  Make sure to click the 'Save' button so this data is pushed back to the Sessions table in your Azure Mobile Service.


## Tip for hosting as an Azure Website
In order to host the application on an Azure Website, you will need to add a web.config that defines how to handle .json files.  This is needed since the application will need to load the app.json file.  

    Example web.config with a mimeMap definition for .json files:
        <?xml version="1.0"?>

        <configuration>
            <system.webServer>
                <staticContent>
                    <mimeMap fileExtension=".json" mimeType="application/json" />
             </staticContent>
            </system.webServer>
        </configuration> 

To make sure this web.config file always gets copied to your build directory, you can add the following to your build.xml file.

    <target name="-after-build">
        <!-- copy the web.config to our build directory so we can keep this sync'd with the windows azure web site -->
        <copy file="web.config" tofile="${app.output}/web.config" overwrite="true"/>
    </target>


## Additional Resources
- [Sencha Azure 2.0 Guide](http://docs.sencha.com/touch-azure/2.0.0/#!/guide)
- [Sencha Azure 2.0 Blog Post](http://www.sencha.com/blog/using-the-new-sencha-extensions-for-microsoft-azure-2.0/)
- [Azure Mobile Services documentation](http://azure.microsoft.com/en-us/documentation/services/mobile-services/)
- [Azure Websites documentation](http://azure.microsoft.com/en-us/documentation/services/websites/)
