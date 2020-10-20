const fs= require('fs')
const chalk=require('chalk')
const getNotes= () =>{
  return 'your Note...'
}

const addNotes=(title,body)=> {
  const notes=loadNotes()
  const duplicate = notes.find((note) => note.title===title)
  if (!duplicate){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse.bold("Note Added"))
  }else {
    console.log(chalk.red.inverse.bold("Title Taken"))
  }

}
const removeNotes=(title)=>{
  const notes=loadNotes()
  const notesRemains=notes.filter((note)=>note.title!==title)
  if(notes.length>notesRemains.length){
    console.log(chalk.green.inverse.bold("Note Removed"))
  }else{
    console.log(chalk.red.inverse.bold("Note not Found"))
  }
  saveNotes(notesRemains)
}
const readNotes=(title)=>{
  const notes=loadNotes()
  const note2read = notes.find((note) => note.title===title)
  if (note2read){
    console.log(chalk.cyan.bold("Your Note"))
    console.log(chalk.yellow.bold(note2read.title+"\n"+note2read.body))
  }else {
    console.log(chalk.red.bold("Note Not Found"))
  }
}
const listNotes=function(){
  const notes=loadNotes()
  console.log(chalk.cyan.bold("Your Notes :"))
  notes.forEach((note)=>console.log(chalk.green.bold(note.title)))
}

const saveNotes= function(notes){
  const jsonData =JSON.stringify(notes)
  fs.writeFileSync('notes.json',jsonData)

}

const loadNotes= function(){
  try{
    const jsonBuffer=fs.readFileSync('notes.json')
    const jsonData=jsonBuffer.toString()
      return JSON.parse(jsonData)

  }
  catch(e){
    return []
  }
}

module.exports={
  getNotes:getNotes,
  addNotes:addNotes,
  removeNotes:removeNotes,
  readNotes:readNotes,
  listNotes:listNotes
}
