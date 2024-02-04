var flightDetails = [{ carrierName: "Indigo", origin: "Covai", destination: "Chennai", airFare: "5000", businessClassSeats: "20", economyClassSeats: "50", executiveClassSeats: "10" },
{ carrierName: "Vistara", origin: "Chennai", destination: "Covai", airFare: "6000", businessClassSeats: "25", economyClassSeats: "40", executiveClassSeats: "20" },
{ carrierName: "Air India", origin: "Bangalore", destination: "Chennai", airFare: "8500", businessClassSeats: "15", economyClassSeats: "60", executiveClassSeats: "15" },
{ carrierName: "Deccan Air", origin: "Covai", destination: "Hyderabad", airFare: "5000", businessClassSeats: "25", economyClassSeats: "55", executiveClassSeats: "10" }];
var di = null;
function searchFlights() {
    const selectedCarrier = document.getElementById("carrierName").value;
    const selectedOrigin = document.getElementById("origin").value;
    const selectedDestination = document.getElementById("destination").value;

    if (selectedCarrier == null && selectedOrigin == null && selectedDestination == null)
        return;
    else {
        var tbody = document.querySelector("#flightDetail tbody");
        tbody.innerHTML = " ";

        for (var i = 0; i < flightDetails.length; i++) {
            if (selectedCarrier == flightDetails[i].carrierName && selectedOrigin == flightDetails[i].origin && selectedDestination == flightDetails[i].destination) {

                var row = document.createElement('tr');
                // Create table cells and populate with data

                var carrierNameCell = document.createElement('td');
                carrierNameCell.textContent = flightDetails[i].carrierName;
                row.appendChild(carrierNameCell);

                var originCell = document.createElement('td');
                originCell.textContent = flightDetails[i].origin;
                row.appendChild(originCell);

                var destinationCell = document.createElement('td');
                destinationCell.textContent = flightDetails[i].destination;
                row.appendChild(destinationCell);

                var airFareCell = document.createElement('td');
                airFareCell.textContent = flightDetails[i].airFare;
                row.appendChild(airFareCell);

                var businessClassSeatsCell = document.createElement('td');
                businessClassSeatsCell.textContent = flightDetails[i].businessClassSeats;
                row.appendChild(businessClassSeatsCell);

                var economyClassSeatsCell = document.createElement('td');
                economyClassSeatsCell.textContent = flightDetails[i].economyClassSeats;
                row.appendChild(economyClassSeatsCell);

                var executiveClassSeatsCell = document.createElement('td');
                executiveClassSeatsCell.textContent = flightDetails[i].executiveClassSeats;
                row.appendChild(executiveClassSeatsCell);

                var actionCell = document.createElement('td');
                var editButton = document.createElement('button');
                editButton.innerHTML = "Edit";
                editButton.classList.add('edt-btn');
                editButton.addEventListener('click', createEditHandler(flightDetails[i]));
                actionCell.appendChild(editButton);
                // Create Delete button
                var deleteButton = document.createElement('button');
                deleteButton.innerHTML = "Delete";
                deleteButton.classList.add('del-btn');
                deleteButton.addEventListener('click', createDeleteHandler(flightDetails[i]));
                actionCell.appendChild(deleteButton);
                row.appendChild(actionCell);
                tbody.appendChild(row);
            }
        }

    }

}
function createDeleteHandler(delData) {
    return function () {
        deleteFlight(delData);
    }
}
function deleteFlight(delData) {
    var index;
    for (var i = 0; i < flightDetails.length; i++) {
        if (delData.carrierName == flightDetails[i].carrierName && delData.origin == flightDetails[i].origin && delData.destination == flightDetails[i].destination) {
            index = i;
        }
    }

    flightDetails.splice(index, 1);
    onload();
    document.getElementById("delete-msg").innerHTML = "Flight details are removed Successfully!!!";
    document.getElementById("delete-msg").style.display = "block";

    setTimeout(function () {
        document.getElementById("delete-msg").style.display = "none";
    }, 5000);
}
function createEditHandler(data) {
    return function () {
        populateForm(data);
    }
}
function populateForm(editDetails) {
    document.getElementById("editDialog").style.display = "block";
    document.getElementById("close-btn").style.display = "none";

    document.getElementById("editCarrierName").value = editDetails.carrierName;
    document.getElementById("editCarrierName").disabled = true;
    document.getElementById("editOrigin").value = editDetails.origin;
    document.getElementById("editDestination").value = editDetails.destination;
    document.getElementById("editAirFare").value = editDetails.airFare;
    document.getElementById("editBusinessClassSeats").value = editDetails.businessClassSeats;
    document.getElementById("editEconomyClassSeats").value = editDetails.economyClassSeats;
    document.getElementById("editExecutiveClassSeats").value = editDetails.executiveClassSeats;

    for (var i = 0; i < flightDetails.length; i++) {
        if (editDetails.carrierName == flightDetails[i].carrierName && editDetails.origin == flightDetails[i].origin && editDetails.destination == flightDetails[i].destination) {
            dl = i;
        }
    }
}

window.onload = function () {
    document.getElementById("carrierName").selectedIndex = -1;
    document.getElementById("origin").selectedIndex = -1;
    document.getElementById("destination").selectedIndex = -1;

    var tbody = document.querySelector("#flightDetail tbody");
    tbody.innerHTML = " ";
    if (flightDetails == null)
        return;
    for (var i = 0; i < flightDetails.length; i++) {
        var row = document.createElement('tr');
        // Create table cells and populate with data

        var carrierNameCell = document.createElement('td');
        carrierNameCell.textContent = flightDetails[i].carrierName;
        row.appendChild(carrierNameCell);

        var originCell = document.createElement('td');
        originCell.textContent = flightDetails[i].origin;
        row.appendChild(originCell);

        var destinationCell = document.createElement('td');
        destinationCell.textContent = flightDetails[i].destination;
        row.appendChild(destinationCell);

        var airFareCell = document.createElement('td');
        airFareCell.textContent = flightDetails[i].airFare;
        row.appendChild(airFareCell);

        var businessClassSeatsCell = document.createElement('td');
        businessClassSeatsCell.textContent = flightDetails[i].businessClassSeats;
        row.appendChild(businessClassSeatsCell);

        var economyClassSeatsCell = document.createElement('td');
        economyClassSeatsCell.textContent = flightDetails[i].economyClassSeats;
        row.appendChild(economyClassSeatsCell);

        var executiveClassSeatsCell = document.createElement('td');
        executiveClassSeatsCell.textContent = flightDetails[i].executiveClassSeats;
        row.appendChild(executiveClassSeatsCell);

        var actionCell = document.createElement('td');
        var actionCell = document.createElement('td');
        var editButton = document.createElement('button');
        editButton.innerHTML = "Edit";
        editButton.classList.add('edt-btn');
        editButton.addEventListener('click', createEditHandler(flightDetails[i]));
        actionCell.appendChild(editButton);
        // Create Delete button
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add('del-btn');
        deleteButton.addEventListener('click', createDeleteHandler(flightDetails[i]));

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        tbody.appendChild(row);
    }
}
function editFlight() {
    document.getElementById("editmsg").innerHTML = "Flight Information Updated Successfully!!!";

    flightDetails[dl].origin = document.getElementById("editOrigin").value;
    flightDetails[dl].destination = document.getElementById("editDestination").value;
    flightDetails[dl].airFare = document.getElementById("editAirFare").value;
    flightDetails[dl].businessClassSeats = document.getElementById("editBusinessClassSeats").value;
    flightDetails[dl].economyClassSeats = document.getElementById("editEconomyClassSeats").value;
    flightDetails[dl].executiveClassSeats = document.getElementById("editExecutiveClassSeats").value;
    onload();
    document.getElementById("edit-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
}
function cancelFlight() {
    document.getElementById("editDialog").style.display = "none";
    document.getElementById("edit-btn").style.display = "block";
    document.getElementById("editmsg").innerHTML = " ";
}