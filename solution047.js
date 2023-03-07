// Remove string spaces

// Simple, remove the spaces from the string, then return the resultant string.

const noSpace= x => x.split('').filter(e => e != ' ').join('')

const noSpace2 = x => x.replace(/ /g, "");