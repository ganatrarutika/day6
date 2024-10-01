function classifyCharacter(char) {
    switch (char.toLowerCase()) { 
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("Vowel");
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            console.log("Consonant");
            break;
        default:
            console.log("Invalid character. Please enter a single letter.");
    }
}

classifyCharacter('b'); 
