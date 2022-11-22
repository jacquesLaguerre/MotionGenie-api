import express from "express";
import cors from "cors"
import { addNewExercise, getAllExercise, updateExercise, getOneExercise, deleteExercise } from "./src/exercise.js";

app.use (cors())
const app = express ()
app.use(express.json())

app.post('/exercise', addNewExercise)
app.get ('/exercise', getAllExercise)
app.patch('/exercise/:exerciseId', updateExercise)
app.get('/exercise/:exerciseId', getOneExercise)
app.delete('/exercise/:exerciseId', deleteExercise)

const PORT = 3030 



app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`);
})