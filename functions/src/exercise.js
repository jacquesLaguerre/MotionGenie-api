import { dbConnect } from "./dbConnect.js";
import { ObjectId } from "mongodb";

export async function addNewExercise(req, res) {
  const newExercise = req.body;
  const db = dbConnect();
  await db
    .collection("exercise")
    .insertOne(newExercise)
    .catch((err) => {
      res.status(500).send(err);
      return;
    });
  res.status(201).send({ message: "New Exercise Added." });
}

export async function getAllExercise(req, res) {
  const db = dbConnect();
  const collection = await db.collection("exercise").find().toArray();
  res.send(collection);
}

export async function deleteExercise(req, res) {
  const db = dbConnect();
  const { exerciseId } = req.params;
  const collection = await db
    .collection("exercise")
    .findOneAndDelete({ _id: new ObjectId(exerciseId) });
  res.status(203).send("Exercise deleted");
}



export async function updateExercise(req, res) {
  const { exerciseId } = req.params;
  const db = dbConnect();
  
  await db
  .collection("exercise")
  .findOneAndUpdate({ _id: new ObjectId(exerciseId) }, { $set: req.body })
  .catch((err) => {
    res.status(500).send(err);
    return;
  });
  getAllExercise(req, res);
}


  // ---------REVIEWS------------
  export async function addReview(req, res) {
    const newReview = req.body;
    const db = dbConnect();
    await db
      .collection("review")
      .insertOne(newReview)
      .catch((err) => {
        res.status(500).send(err);
        return;
      });
    res.status(201).send({ message: "Review Added." });
  }
  
  export async function getAllReview(req, res) {
    const db = dbConnect();
    const collection = await db.collection("review").find().toArray();
    res.send(collection);
  }
  
  export async function updateReview(req, res) {
    const { reviewId } = req.params;
    const db = dbConnect();
  
    await db
      .collection("review")
      .findOneAndUpdate({ _id: new ObjectId(reviewId) }, { $set: req.body })
      .catch((err) => {
        res.status(500).send(err);
        return;
      });
    res.status(202).send({ message: "review updated" });
  }
  
  export async function deleteReview(req, res) {
    const db = dbConnect();
    const { reviewId } = req.params;
    const collection = await db
      .collection("exercise")
      .findOneAndDelete({ _id: new ObjectId(reviewId) });
    res.status(203).send("review deleted");
  }
// ------------ACL REVIEWS-----------
export async function addReviewAcl(req, res) {
  const newReview = req.body;
  const db = dbConnect();
  await db
    .collection("reviewAcl")
    .insertOne(newReview)
    .catch((err) => {
      res.status(500).send(err);
      return;
    });
  res.status(201).send({ message: "Review Added." });
}

export async function getAllAclReview(req, res) {
  const db = dbConnect();
  const collection = await db.collection("reviewAcl").find().toArray();
  res.send(collection);
}

// ---------Hamstring Reviews---------
export async function addReviewHamstring(req, res) {
  const newReview = req.body;
  const db = dbConnect();
  await db
    .collection("reviewHamstring")
    .insertOne(newReview)
    .catch((err) => {
      res.status(500).send(err);
      return;
    });
  res.status(201).send({ message: "Review Added." });
}

export async function getAllHamstringReview(req, res) {
  const db = dbConnect();
  const collection = await db.collection("reviewHamstring").find().toArray();
  res.send(collection);
}
// ---------Ankle---------
export async function addReviewAnkle(req, res) {
  const newReview = req.body;
  const db = dbConnect();
  await db
    .collection("reviewAnkle")
    .insertOne(newReview)
    .catch((err) => {
      res.status(500).send(err);
      return;
    });
  res.status(201).send({ message: "Review Added." });
}

export async function getAllAnkleReview(req, res) {
  const db = dbConnect();
  const collection = await db.collection("reviewAnkle").find().toArray();
  res.send(collection);
}



