/* model: entity definitions */
app.factory('model', function () {
    
    var DataType = breeze.DataType; // alias
    
    return {
        initialize: initialize
    };

    function initialize(metadataStore) {
        metadataStore.addEntityType({
            shortName: "Page",
            namespace: "Prometeo",
            dataProperties: {
                id: { dataType: DataType.Int64, isPartOfKey: true },
                title: { dataType: DataType.String, isNullable: true },
                postLinks: { dataType: DataType.Undefined }
            },
            navigationProperties: { 
                posts: { entityTypeName: "Post:#Prometeo", isScalar: false, associationName: "Page_Posts" }
            }
        });

        metadataStore.addEntityType({
            shortName: "Post",
            namespace: "Prometeo",
            dataProperties: {
                id: { dataType: DataType.Int32, isNullable: false, isPartOfKey: true },
                name: { dataType: DataType.String, isNullable: true },
                page_id: { dataType: DataType.Int32, isNullable: false }
            },
            navigationProperties: { 
                page: { entityTypeName: "Page:#Prometeo", isScalar: true, foreignKeyNames: ["page_id"], associationName: "Page_Posts" },
                comments: { entityTypeName: "Comment:#Prometeo", isScalar: false, associationName: "Comment_Posts" }
            }
        });
        
        metadataStore.addEntityType({
            shortName: "Comment",
            namespace: "Prometeo",
            dataProperties: {
                id: { dataType: DataType.Int32, isNullable: false, isPartOfKey: true },
                content: { dataType: DataType.String, isNullable: true },
                post_id: { dataType: DataType.Int32, isNullable: false },

            },
            navigationProperties: { 
                post: { entityTypeName: "Post:#Prometeo", isScalar: true, associationName: "Comment_Posts", foreignKeyNames: ["post_id"] }
            }
        });

         
    }
})