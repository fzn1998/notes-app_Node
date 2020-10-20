const validator=require('validator')
const note=require('./notes.js')
const chalk = require('chalk')
const yargs= require('yargs')

yargs.command({
  command:'add',
  builder:{
    title: {
      demandOption:true,
      type:'string'
    },
    body: {
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    note.addNotes(argv.title,argv.body)
  }
}).argv
yargs.command({
  command:'remove',
  builder:{
    title: {
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    note.removeNotes(argv.title)
  }
}).argv
yargs.command({
  command:'read',
  builder:{
    title: {
      demandOption:true,
      type:'string'
    }
  },
  handler(argv){
    note.readNotes(argv.title)
  }
}).argv
yargs.command({
  command:'list',
  handler() {
    note.listNotes()
  }
}).argv
