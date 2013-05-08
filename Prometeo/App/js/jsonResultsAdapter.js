/* jsonResultsAdapter: parses data into entities */

app.value('jsonResultsAdapter', 
    new breeze.JsonResultsAdapter({

        name: "prometeo",
        
        extractResults: function (data) {
            var results = data.results;
            if (!results) throw new Error("Unable to resolve 'results' property");
            
            return results; 
        },

        visitNode: function (node, parseContext, nodeContext) {

            if(nodeContext.nodeType == 'root' && parseContext.query.resourceName == 'GetPage') {
                
                node.postLinks = node.posts;
                node.posts = [];
                
                angular.forEach(node.postLinks, function (post) {
                    parseContext.entityManager.createEntity("Post", post);
                });

                return { entityType: "Page" };
            }
            
            else if (nodeContext.nodeType == 'root' && parseContext.query.resourceName == 'GetComments') {
                 
                return { entityType: "Comment" };
            }

            return null;
        }
    }));
