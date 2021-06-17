import * as yup from "yup";

export const projectSchema = yup.object({
  title: yup.string().min(5).required(),
  scheduleDate: yup.date().required(),
  startTime: yup.string().required(),
  endTime: yup.string().required(),
});
