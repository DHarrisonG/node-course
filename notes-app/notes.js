const fs = require('fs')
const chalk = require('chalk')


getNotes = () => {
    return "Your notes..."
}

addNote = (title, body) => {
    const notes = loadNotes()
    const dupNote = notes.find(note => note.title === title)

    if (!dupNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title Taken!'))
    }

}

removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter( note => note.title !== title )
    
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green("Note Removed!"))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red("Note not found!"))
    }

}

listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach(note => console.log(note.title))
}

readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)

    if (note) {
        console.log(note.body)
    } else {
        console.log("no note bud")
    }
}

saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}