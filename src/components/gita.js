import React, { useState, useEffect } from "react";
// import pic1 from "../components/images/pic-1.jpg"; // Adjust the path based on the file structure

const Gita = () => {
  const [chapter, setChapter] = useState(1);
  const [slokNumber, setSlokNumber] = useState(1);
  const [shlokaImage, setShlokaImage] = useState("");
  const [shlokaData, setShlokaData] = useState({});
  const shlokasPerChapter = [
    46, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
  ];
  const totalChapters = 18;

  const fetchSlok = async (ch, sl) => {
    const imageUrl = `https://bhagavadgitaapi.in/slok/${ch}/${sl}/gita.svg`;

    try {
      const response = await fetch(imageUrl);
      const imageData = await response.text();
      setShlokaImage(imageData);
    } catch (error) {
      console.error("Error fetching shloka:", error);
    }
  };

  useEffect(() => {
    fetchSlok(chapter, slokNumber);
  }, [chapter, slokNumber]);

  const getNextSlok = () => {
    if (slokNumber === shlokasPerChapter[chapter - 1]) {
      if (chapter === totalChapters) {
        // Reset to the first chapter and first shloka
        setChapter(1);
        setSlokNumber(1);
      } else {
        // Move to the next chapter and first shloka
        setChapter(chapter + 1);
        setSlokNumber(1);
      }
    } else {
      // Move to the next shloka in the current chapter
      setSlokNumber(slokNumber + 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(getNextSlok,  10 * 1000); // 24 hours
    return () => clearInterval(timer);
  }, [slokNumber]);

  const parseSvgContent = () => {
    const parser = new DOMParser();
    const svgDocument = parser.parseFromString(shlokaImage, "image/svg+xml");
    const h3Element = svgDocument.querySelector("h3");
    const originalShloka = h3Element.textContent.trim();

    const preElement = svgDocument.querySelector("pre");
    const pElements = svgDocument.querySelectorAll("p");

    if (h3Element && preElement && pElements.length >= 2) {
      const hindiTranslation = pElements[0].textContent.trim();
      const englishTranslation = pElements[1].textContent.trim();

      setShlokaData({ originalShloka, hindiTranslation, englishTranslation });
    }
  };

  useEffect(() => {
    if (shlokaImage) {
      parseSvgContent();
    }
  }, [shlokaImage]);

  //Background
  // const [bgIndex, setBgIndex] = useState(0);
  // const backgroundImages = [
  //   `url(${pic1})`, // Use the imported image here
  //   "url(image2.jpg)",
  //   "url(image3.jpg)",
  //   // Add more image URLs as needed
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  //   }, 5000);

  //   return () => clearInterval(timer);
  // }, []);

  // const bgStyle = {
  //   backgroundImage: backgroundImages[bgIndex],
  // };

  return (
    <div className="gita">
      {/* Display the extracted shloka and translations */}
      {shlokaData && (
        <div>
          <p>{shlokaData.originalShloka}</p>
          <p>{shlokaData.hindiTranslation}</p>
          <p>{shlokaData.englishTranslation}</p>
        </div>
      )}
    </div>
  );
};

export default Gita;
