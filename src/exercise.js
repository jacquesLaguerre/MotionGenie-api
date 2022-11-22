import {dbConnect} from './dbConnect.js'
import { ObjectId } from 'mongodb'

export async function addNewExercise(req, res) {
  const newExercise = req.body
  const db = dbConnect()
  await db.collection("exercise").insertOne
  (newExercise)
  .catch(err => {
      res.status(500).send(err)
      return
})
res.status(201).send({ message: "New Exercise Added." })
}

export async function getAllExercise(req, res) {
  const db = dbConnect()
  const collection = await db.collection("exercise").find().toArray()
  res.send(collection)
}

export async function updateExercise(req, res) {

  const { exerciseId } = req.params
  const db = dbConnect()
  
      await db.collection('exercise')
          .findOneAndUpdate({ _id: new ObjectId(exerciseId) }, { $set: req.body })
          .catch(err => {
              res.status(500).send(err)
              return
          })
      res.status(202).send({ message: "exercise updated" })
}

export async function getOneExercise(req,res) {
  const db = dbConnect()
  const { exerciseId } = req.params
  const collection = await db.collection("exercise")
  .find({ _id: new ObjectId (exerciseId) }).toArray()
  res.send(collection)
}

export async function deleteExercise (req, res ){
  const db = dbConnect ()
  const  {exerciseId} = req.params
  const collection = await db.collection("exercise")
  .findOneAndDelete ({_id: new ObjectId (exerciseId)})
  res.status(203).send('Exercise deleted')
}

// export async function findExerciseByType(req,res) {
//   const db = dbConnect()
//   const { search } = req.params
//   const collection = await db.collection("furniture").find({ type: search }).toArray()
//   res.send(collection)
// }