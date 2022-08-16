import React from "react";

function PostRequestFunction(value) {
    const data = {
        email: value,
    };

    fetch("http://localhost:3000/Users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
}

export default PostRequestFunction;
