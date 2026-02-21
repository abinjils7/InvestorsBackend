import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";
import {
  createPitch,
  getPitchesForInvestor,
  getStartupPitches,
  updatePitchStatus,
} from "../Controllers/PitchController";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "pitches",
    resource_type: "video",
  } as any,
});

const upload = multer({ storage });

router.post("/create", upload.single("video"), createPitch);
router.get("/investor/:investorId", getPitchesForInvestor);
router.get("/startup/:startupId", getStartupPitches);
router.put("/status/:pitchId", updatePitchStatus);

export default router;
