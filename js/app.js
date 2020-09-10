class boredApi {
    ajax;
    activityContent;
    url;
    constructor(activityType, apiURL) {
        this.ajax = new XMLHttpRequest();
        this.activityContent = activityType;
        this.url = apiURL;
    }

    getActivity() {
        this.ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let newActivity = JSON.parse(this.responseText);

                let getActivity = newActivity.activity;
                document.getElementById("activity1").innerHTML = "Activity:  " + getActivity;

                let getPrice = newActivity.price;
                document.getElementById("price").innerHTML = "Price: " + getPrice;

                let getType = newActivity.type;
                document.getElementById("type").innerHTML = "Type: " + getType;

            }
            else if (this.readyState != 4) {
                document.getElementById("activity1").innerHTML = "Loading";
            }
            else {
                document.getElementById("activity1").innerHTML = "Something Went Wrong!";
            }
        }
        console.log(this.activityContent);
        this.ajax.open(this.activityContent, this.url, true);
        this.ajax.send();
    }

    getGroupActivity() {
        this.ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let newGroupActivity = JSON.parse(this.responseText);

                let groupParticipats = newGroupActivity.activity;
                document.getElementById("groupActivity").innerHTML = "Group Acitivity: " + groupParticipats;
            }
            else if (this.readyState != 4) {
                document.getElementById("groupActivity").innerHTML = "Loading";
            }
            else {
                document.getElementById("groupActivity").innerHTML = "Something Went Wrong!";
            }
        }
        this.ajax.open(this.activityContent, this.url, true);
        this.ajax.send();
    }

    getFreeActivity() {
        this.ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let newFreeActivity = JSON.parse(this.responseText);

                let freeActivities = newFreeActivity.activity;
                document.getElementById("freeActivity").innerHTML = "Free Acitivity: " +freeActivities;
            }
            else if (this.readyState != 4) {
                document.getElementById("freeActivity").innerHTML = "Loading";
            }
            else {
                document.getElementById("freeActivity").innerHTML = "Something Went Wrong!";
            }
        }
        this.ajax.open(this.activityContent, this.url, true);
        this.ajax.send();
    }

    getRecreationalActivity() {
        this.ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let newReactActivity = JSON.parse(this.responseText);

                let reactActivities = newReactActivity.activity;
                document.getElementById("recreationalActivity").innerHTML = "Recreational Acitivity: " +reactActivities;
            }
            else if (this.readyState != 4) {
                document.getElementById("recreationalActivity").innerHTML = "Loading";
            }
            else {
                document.getElementById("recreationalActivity").innerHTML = "Something Went Wrong!";
            }
        }
        this.ajax.open(this.activityContent, this.url, true);
        this.ajax.send();
    }

}//end of class
function callActivity() {
    myApi.getActivity();
}

function callActivityGroup() {
    myParticipants.getGroupActivity();
}

function callActivityFree() {
    myFreeActivity.getFreeActivity();
}

function callActivityRecreational() {
    myRecreationalActivity.getRecreationalActivity();
}
let myApi = new boredApi("GET", "http://www.boredapi.com/api/activity", true);
let activities = document.getElementById("more");
activities.addEventListener("click", callActivity);


let myParticipants = new boredApi("GET", "http://www.boredapi.com/api/activity?participants=3 ", true);
let activitiesGroup = document.getElementById("group");
activitiesGroup.addEventListener("click", callActivityGroup);

let myFreeActivity = new boredApi("GET", "http://www.boredapi.com/api/activity?price=0 ", true);
let activitiesFree = document.getElementById("free");
activitiesFree.addEventListener("click", callActivityFree);



let myRecreationalActivity = new boredApi("GET", "http://www.boredapi.com/api/activity?type=recreational", true);
let activitiesRecreational = document.getElementById("recreate");
activitiesRecreational.addEventListener("click", callActivityRecreational);