// We use commonJS in node.js => using multiple Files within one project
// Benefit: Structure the project, which is important

// Therefore there are "modules". Each file has a particular responsiblity

// e.g. building Spotify
// Features:
// Songs -> play, pause, skip forward, go backwards
// Playlist -> create, edit, delete, reorder
// Albums ...
// Libraries ...
// Friends
// Shuffle
// all features will have certain functions for what they need to be able to do => "scope of responsiblity"

const myObject = {
  greeting: 'Hello',
  name: 'Robert'
}

console.log(myObject.greeting)

// Object destructcuring
const { greeting } = myObject
// const greeting = myObject.greeting

console.log(greeting)
