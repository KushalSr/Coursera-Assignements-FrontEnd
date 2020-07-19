(function() {
    var names = ["Kushal", "Jerry", "James", "Jimmy", "Piyush", "Fransis", "Lana", "Rahul", "Saumya", "Sakshi"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
