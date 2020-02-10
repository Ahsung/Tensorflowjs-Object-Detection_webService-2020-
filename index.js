/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import * as cocoSsd from "@tensorflow-models/coco-ssd";

import imageURL from "./image1.jpg";
import image2URL from "./image2.jpg";

let modelPromise;
window.onload = () => (modelPromise = cocoSsd.load());

const image = document.getElementById("image");
image.src = imageURL;
console.log(imageURL, image2URL);

const runButton = document.getElementById("run");
runButton.onclick = async () => {
  const model = await modelPromise;
  console.time("predict_time");
  const result = await model.detect(image);
  console.timeEnd("predict_time");

  const c = document.getElementById("canvas");
  const context = c.getContext("2d");
  if (image.width > 600) {
    image.width = 600;
  }

  context.drawImage(image, 0, 0, image.width, image.height);
  context.font = "10px Arial";

  console.log("number of detections: ", result.length);
  for (let i = 0; i < result.length; i++) {
    context.beginPath();
    context.rect(...result[i].bbox);
    context.lineWidth = 1;
    context.strokeStyle = "green";
    context.fillStyle = "green";
    context.stroke();
    console.log(i, ":", result[i].class);
    console.log(i, result[i].bbox);
    context.fillText(
      result[i].score.toFixed(3) + " " + result[i].class,
      result[i].bbox[0],
      result[i].bbox[1] > 10 ? result[i].bbox[1] - 5 : 10
    );
  }
};

const c2 = document.getElementById("canvas2");
const context2 = c2.getContext("2d");
//----------------------------------function----------------------------------

function mainPos(arr) {
  var mpos;
  var maxSize = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].class != "person") continue;
    maxSize = Math.max(maxSize, arr[i].bbox[2] * arr[i].bbox[3]);
  }
}
