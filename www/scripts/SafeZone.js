
'use strict'
function SafeZone() { 
    var sfLocations = [];
    var db = firebase.firestore();

    SafeZone.prototype.getSafeZoneLocationById= function(pId) { 
        return firebase.firestore().collection("sf_locations").doc(pId).get();
    }

    SafeZone.prototype.getSafeZoneLocations= function() { 
        
        return firebase.firestore().collection("sf_locations").get().then(function(results){
            results.forEach(function(location){ 
                var sfLocation = {};
                sfLocation.address = location.data().address;
                sfLocation.latitude = location.data().latitude;
                sfLocation.longitude = location.data().longitude;
                sfLocations.push(sfLocation);
            });
            window.localStorage.setItem("sf_locations", JSON.stringify(sfLocations));
        });
    }

    SafeZone.prototype.addUserVisitedLocations = function(userInfo) { 
        var uvls = JSON.parse(window.localStorage.getItem("uvl"));
        var sfLocIds = [];
        $.each(uvls, function(index, location){ 
            
            firebase.firestore().collection("sf_locations").doc(location.placeId).set(location).then(function(result) { 
                sfLocIds.push(location.placeId);
            })
        });

        var refreshIntervalId = setInterval(function(){
            if (sfLocIds && sfLocIds.length && uvls.length === sfLocIds.length) { 
                userInfo.locations = sfLocIds;
                firebase.firestore().collection("userinfo").add(userInfo).then(function(result) { 
                    console.log("userId: " + result.id)
                })
                window.clearInterval(refreshIntervalId);
            }    
        }, 10);
        


        /*var batch = db.batch();
        var sfLocations = db.collection("sf_locations");
        $.each(uvls, function(index, location){ 
            batch.set(sfLocations, location);
        });
        batch.commit().then(function(results) { 
            console.log(results);
        })*/

        

        
    }
}

window.onload = function() {
    window.app = new SafeZone();
};