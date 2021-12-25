var axios = require('axios');
require('dotenv').config()
// var dataOne = JSON.stringify({
//     "collection": "jupiter",
//     "database": "test",
//     "dataSource": "Cluster0",
//     "roles": [{
        
//         "role": "read",
//         
//       },
//{
  //  role:"write"
//},]
// });
            
//
// var dataTwo = JSON.stringify({
//     "collection": "moon",
//     "database": "test",
//     "dataSource": "Cluster0",
//     "roles": [{
        
//         "role": "read",
        
//       },
//     {
//         "role":"write"
//     }]
// });

// var dataThree = JSON.stringify({
//     "collection": "mars",
//     "database": "test",
//     "dataSource": "Cluster0",
//     "roles": [{
        
//         "role": "read",
        
//       },
//     {
//         "role":"write"
//     }]
// });
            
//var config = {
    //     method: 'post',
    //     url: 'https://cloud.mongodb.com/api/atlas/v1.0/groups/<project id>/databaseUsers"',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Request-Headers': '*',
    //         'api-key': 'process.argv[2]'
    //     },
    //     auth: {
    //         "user": '<public-api key>',
    //         "pass": '<private api key>',
    //         "sendImmediately": false
    //     },
    //     
        //    data:dataOne,
        //    data:dataTwo,
        //    data:dataThree
    // };

if(!process.argv[2])
{
    console.log("enter api key");
}
else
{

var jupiterdata = JSON.stringify({
    "collection": "jupiter",
    "database": "test",
    "dataSource": process.env.cluster_name,
    "document": {
        "name": "John Sample",
        "age": 42
      }
});

var marsdata = JSON.stringify({
    "collection": "mars",
    "database": "test",
    "dataSource": process.env.cluster_name,
    "document": {
        "name": "John Sample",
        "age": 42
      }
});

var moondata = JSON.stringify({
    "collection": "moon",
    "database": "test",
    "dataSource": process.env.cluster_name,
    "document": {
        "name": "John Sample",
        "age": 42
      }
});
     

var reqOne = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-lstid/endpoint/data/beta/action/insertOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': process.argv[2]
    },
    data : marsdata,
    
};

var reqtwo = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-lstid/endpoint/data/beta/action/insertOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': process.argv[2]
    },
    data : jupiterdata,
    
};

var reqthree = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-lstid/endpoint/data/beta/action/insertOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': process.argv[2]
    },
    data : moondata,
    
};
            

axios(reqOne)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });



axios(reqtwo)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });


axios(reqthree)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

}