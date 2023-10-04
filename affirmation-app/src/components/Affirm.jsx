function Affirm() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });

    return(
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col d-flex align-items-center">
                    <h1>For Today:</h1>
                </div>
                <div className="col d-flex align-items-center">
                    <h2>{}</h2>
                </div>
            </div>
        </div>
    )
}