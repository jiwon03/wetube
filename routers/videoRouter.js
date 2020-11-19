import express from "express";
import routes from "../routes";
import { videos, 
    getUpload,
    postUpload, 
    videoDetail, 
    getEditVideo, 
    postEditVideo,
    DeleteVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.get(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, DeleteVideo);

export default videoRouter;