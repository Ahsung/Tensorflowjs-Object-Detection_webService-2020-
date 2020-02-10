# Object Detection  base on (COCO-SSD) Demo

## This Web Service
Upload local image file   
Run to detect image!

------------------------------------------------------

## start

* parcel index.html --open
* or node main.js  and  enter localhost:9003/tensor

## you want to erase dependecy of Google_server

> * cd ./node_modules/@tensorflow-models/coco-ssd/dist/    
    
> > *Swaped FileName coco-ssd.esm.js and coco-ssd.js in this project*    

> * vi coco-ssd.esm.js
> * and modify address line 780
> * back origin pwd, node ten.js.model_server/index.js
> > *modify correct port in ten.js.model_server/index.js *
