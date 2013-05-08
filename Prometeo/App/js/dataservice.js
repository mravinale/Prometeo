/* dataservice: data access and model management layer */

// create and add dataservice to the Ng injector
// constructor function relies on Ng injector to provide breeze & logger services

app.factory('dataservice', function (breeze, model, jsonResultsAdapter) {
    
    breeze.config.initializeAdapterInstance("modelLibrary", "backingStore", true);
   
    var dataService = new breeze.DataService({
        serviceName: "breeze/values",
        hasServerMetadata: false, // don't ask the server for metadata
        jsonResultsAdapter: jsonResultsAdapter
    });

    var manager = new breeze.EntityManager({ dataService: dataService });
     
    model.initialize(manager.metadataStore);
   
    return { 
        getPage: getPage,
        getComments: getComments,
        onEntityChange: onEntityChange
    };
      
    /*** implementation details ***/
    
    function onEntityChange(callback) {
        manager.entityChanged.subscribe(callback);
    }
     
    function getPage() {
        var query = breeze.EntityQuery.from("GetPage");
        return manager.executeQuery(query).then(returnResults) ;
    }
    
    function getComments() {
        var query = breeze.EntityQuery.from("GetComments");
        return manager.executeQuery(query).then(returnResults) ;
    }
    //#endregion
    
    function getCustomQueryFromCache() {
        var query = breeze.EntityQuery.from("GetPage").toType("Page");
        var page = manager.executeQueryLocally(query)[0];

        return page;
    }
    
    
    function returnResults(data) { return data.results[0]; }
     

});