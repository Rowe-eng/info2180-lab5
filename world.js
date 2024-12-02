window.onload = function() {
    var button = document.getElementById("lookup");
    var cityButton = document.getElementById("button");
    var result = document.getElementById("result");
    var searchValue = document.getElementById("country");

    // Event listener for "Lookup Country" button
    button.addEventListener("click", function() {
        var url = "http://localhost/info2180-lab5/world.php?country=" + searchValue.value + "&lookup=";
        sendRequest(url);
    });

    // Event listener for "Lookup Cities" button
    cityButton.addEventListener("click", function() {
        var url = "http://localhost/info2180-lab5/world.php?country=" + searchValue.value + "&lookup=cities";
        sendRequest(url);
    });

    // Function to send the request and handle the response
    function sendRequest(url) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.send();

        req.onreadystatechange = function() {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    result.innerHTML = req.responseText;
                } else {
                    alert('Error: ' + req.status);
                }
            }
        };
    }
};
