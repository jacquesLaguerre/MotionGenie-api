import express from "express";
import cors from "cors";
import functions from "firebase-functions";
import { addNewExercise, getAllExercise,  addReview, getAllReview, updateReview, deleteReview, updateExercise, addReviewAcl, getAllAclReview, 
  addReviewHamstring, getAllHamstringReview, addReviewAnkle, getAllAnkleReview
} from "./src/exercise.js";


const app = express();
app.use(express.json());
app.use(cors());

app.post('/exercise', addNewExercise)
app.get("/exercise", getAllExercise);
app.patch('/exercise/:exerciseId', updateExercise)
// app.get('/exercise/:exerciseId', getOneExercise)

app.post('/review', addReview)
app.get('/review', getAllReview)
app.patch('/review',updateReview )
app.delete('/review', deleteReview)

app.post('/reviewAcl', addReviewAcl)
app.get('/reviewAcl', getAllAclReview)

app.post('/reviewHamstring', addReviewHamstring)
app.get('/reviewHamstring', getAllHamstringReview)

app.post('/reviewAnkle', addReviewAnkle)
app.get('/reviewAnkle', getAllAnkleReview)
export const api = functions.https.onRequest(app);

