import PDFDocument from "pdfkit";
import QRCode from "qrcode";
import fs from "fs";
import { fetchImage } from "../network/network-utilities.js";

export const drawStatistic = (doc, statImage, statText, statX, statY) => {
  doc.image(statImage, statX, statY, { fit: [25, 25] });
  doc
    .font("fonts/IBM_Plex_Serif/IBMPlexSerif-Regular.ttf")
    .fontSize(9)
    .text(statText, statX + 35, statY + 7);
};

export const drawTags = (doc, tags) => {
  let currentX = 375;
  let currentY = 150;
  doc.image("images/tag.png", currentX, currentY, { fit: [25, 25] });

  tags.forEach((tag) => {
    doc
      .font("fonts/IBM_Plex_Serif/IBMPlexSerif-Regular.ttf")
      .fontSize(9)
      .text(tag, currentX + 30, currentY);
    currentY += 15;
  });
};

export const createPageForGame = async (doc, game) => {
  doc.addPage();
  doc
    .font("fonts/IBM_Plex_Serif/IBMPlexSerif-Regular.ttf")
    .fontSize(25)
    .text(game.name, { align: "center" });

  const gameImage = await fetchImage(game.image);
  const gameImageB64 = new Buffer.from(gameImage, "base64");

  doc.image(gameImageB64, 100, 150, {
    fit: [125, 125],
    align: "left",
    valign: "left",
  });

  let currentStatX = 250;
  let currentStatY = 150;

  drawStatistic(
    doc,
    "images/people.png",
    `${game.players} players`,
    currentStatX,
    currentStatY
  );

  currentStatY += 25;

  drawStatistic(
    doc,
    "images/clock.png",
    `${game.playTime}`,
    currentStatX,
    currentStatY
  );

  currentStatY += 25;

  if (game.strategyComplexity) {
    drawStatistic(
      doc,
      "images/graph.png",
      `Strategy Complexity: ${game.strategyComplexity}`,
      currentStatX,
      currentStatY
    );

    currentStatY += 25;
  }

  if (game.strategyComplexity) {
    drawStatistic(
      doc,
      "images/learning.png",
      `Learning Complexity: ${game.learningComplexity}`,
      currentStatX,
      currentStatY
    );

    currentStatY += 25;
  }

  if (game.tags) {
    drawTags(doc, game.tags);
  }

  doc
    .font("fonts/IBM_Plex_Serif/IBMPlexSerif-Regular.ttf")
    .fontSize(9)
    .text(game.description, 100, 300);

  const qrCode = await QRCode.toBuffer(game.rulesUrl);
  doc.image(qrCode);

  if (game.sarahsPick && game.quintonsPick) {
    doc.image("images/couples-pick.png", 400, 60, { fit: [75, 75] });
  } else if (game.sarahsPick) {
    doc.image("images/sarahs-pick.png", 400, 60, { fit: [75, 75] });
  } else if (game.quintonsPick) {
    doc.image("images/quintons-pick.png", 400, 60, { fit: [75, 75] });
  }
};

export const createOutputPdf = async (commandLineOptions, games) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(commandLineOptions.outputPdf.filename));

  doc
    .font("fonts/IBM_Plex_Serif/IBMPlexSerif-Regular.ttf")
    .fontSize(25)
    .text(`Quinton & Sarah's Big Book of Board Games`, 100, 100);

  for (const game of games) {
    await createPageForGame(doc, game);
  }

  // await createPageForGame(doc, games[0]);

  doc.end();
};
