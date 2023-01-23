// Remove Exclamation Marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return [...s].filter(e => e !== '!').join('');
}

function removeExclamationMarks2(s) {
    return s.replace(/!/gi, '');
}