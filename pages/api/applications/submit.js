// pages/api/applications/submit.js
import { createRouter } from "next-connect";
import multer from "multer";
import { supabase } from "lib/supabase";
import { db } from "lib/db";
import { applications } from "db/schema";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const router = createRouter();

router.use(
  upload.fields([
    { name: "driverLicenseFront", maxCount: 1 },
    { name: "driverLicenseBack", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ])
);

router.post(async (req, res) => {
  try {
    const files = req.files;
    const data = req.body;

    let driverLicenseFrontUrl = null;
    let driverLicenseBackUrl = null;
    let resumeUrl = null;

    // Upload driver's license front
    if (files.driverLicenseFront) {
      const frontFile = files.driverLicenseFront[0];
      const frontFileName = `front/${Date.now()}-${frontFile.originalname}`;
      const { data: frontData, error: frontError } = await supabase.storage
        .from("driver-licenses")
        .upload(frontFileName, frontFile.buffer);

      if (frontError) {
        console.log("fronterror");
        throw frontError;
      } else {
        console.log("frontupload success");
      }

      // Get the public URL
      const { data: frontUrlData } = supabase.storage
        .from("driver-licenses")
        .getPublicUrl(frontFileName);

      driverLicenseFrontUrl = frontUrlData.publicUrl;
    }

    // Upload driver's license back
    if (files.driverLicenseBack) {
      const backFile = files.driverLicenseBack[0];
      const backFileName = `back/${Date.now()}-${backFile.originalname}`;
      const { data: backData, error: backError } = await supabase.storage
        .from("driver-licenses")
        .upload(backFileName, backFile.buffer);

      if (backError) {
        console.log("backerror");
        throw backError;
      } else {
        console.log("success with back");
      }

      // Get the public URL
      const { data: backUrlData } = supabase.storage
        .from("driver-licenses")
        .getPublicUrl(backFileName);

      driverLicenseBackUrl = backUrlData.publicUrl;
    }

    // Upload resume
    if (files.resume) {
      const resumeFile = files.resume[0];
      const resumeFileName = `${Date.now()}-${resumeFile.originalname}`;
      const { data: resumeData, error: resumeError } = await supabase.storage
        .from("resumes")
        .upload(resumeFileName, resumeFile.buffer);

      if (resumeError) {
        console.log("resumeerror");
        throw resumeError;
      }

      // Get the public URL
      const { data: resumeUrlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(resumeFileName);

      resumeUrl = resumeUrlData.publicUrl;
    }

    // Save application data to database
    const [application] = await db
      .insert(applications)
      .values({
        jobId: data.jobId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        ssn: data.ssn,
        driverLicenseFrontUrl,
        driverLicenseBackUrl,
        resumeUrl,
        coverLetter: data.coverLetter,
        linkedinUrl: data.linkedinUrl,
        portfolioUrl: data.portfolioUrl,
        status: "pending",
      })
      .returning();

    res.status(200).json(application);
  } catch (error) {
    console.error("Error handling application:", error);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

export default router.handler();
