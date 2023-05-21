import { fileUpload } from "../../src/helpers/fileUpload";

describe("Test on fileUpload.js", () => {
  test("should upload file to cloudinary correctly", async () => {
    const imageUrl =
      "https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?b=1&s=170667a&w=0&k=20&c=AWY54kmUT9IcXJZdSdxxm5JUFK_3fxpmMbWQ6IhEG50=";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "pic.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");
  });
});
