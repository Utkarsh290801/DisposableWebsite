import React, { useState, useEffect } from "react";
// import * as tf from "@tensorflow/tfjs";
import * as toxicity from "@tensorflow-models/toxicity";
import app_config from "../../config";
const ToxicityModel = () => {
  const url = app_config.backend_url;
  const [prediction, setPrediction] = useState("");
  const [model, setModel] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    async function loadModel() {
      const toxicityModel = await toxicity.load();
      setModel(toxicityModel);
    }
    loadModel();
  }, []);

  const classify = async () => {
    if (!model) {
      setPrediction("Model is not yet loaded.");
      return;
    }

    const results = await model.classify([text]);
    const toxic = results[0].results.some((result) => result.match);
    if (!toxic) {
      storeComment(text);
    }
    setPrediction(toxic ? "Toxic" : "Not Toxic");
  };

  const storeComment = async (comment) => {
    try {
      const response = await fetch(url + "contact/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Comment stored successfully!");
    } catch (error) {
      console.error("Error storing comment:", error);
    }
  };

  return (
    <div>
      <textarea
        id="text-input"
        rows="5"
        cols="50"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={classify}>Predict</button>
      <br />
      <br />
      <p>Prediction: {prediction}</p>
    </div>
  );
};

export default ToxicityModel;
