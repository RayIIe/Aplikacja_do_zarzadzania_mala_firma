import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FooterC() {
    return (
        <div className="fixed-bottom bg-dark" style={{position: "static", bottom: "1px"}}>
            <footer className="justify-content-center">
                <div className="text-center mx-auto"><b>Created by Dawid</b></div>
            </footer>
        </div>
    )
}


export default FooterC;