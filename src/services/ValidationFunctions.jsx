import React from "react";

function isValidEmail(email) {
    if (/\S+@\S+\.\S+/.test(email)) {
        return true;
    } else {
        return false;
    }
}
function wordsNumber(paragraph) {
    if (paragraph.length > 500) {
        return true;
    } else {
        return false;
    }
}

export { isValidEmail, wordsNumber };
