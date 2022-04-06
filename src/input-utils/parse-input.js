import csv from "csvtojson";
import commandLineArgs from "command-line-args";
import fs from "fs";

class FileDetails {
  constructor(filename) {
    this.filename = filename;
    this.exists = fs.existsSync(filename);
  }
}

export const parseInput = () => {
  const commandLineOptionDefinitions = [
    {
      name: "inputCsv",
      alias: "i",
      type: (filename) => new FileDetails(filename),
    },
    {
      name: "outputPdf",
      alias: "o",
      type: (filename) => new FileDetails(filename),
    },
  ];

  const commandLineOptions = commandLineArgs(commandLineOptionDefinitions);

  if (!commandLineOptions.inputCsv || !commandLineOptions.inputCsv.exists) {
    console.error("Pass in an input games csv via the -i flag");
  }

  if (!commandLineOptions.outputPdf) {
    console.error("Pass an output filepath via the -o flag");
  }

  return commandLineArgs(commandLineOptionDefinitions);
};

export const getJsonGameInputData = async (commandLineOptions) => {
  let jsonGameInputData;
  try {
    jsonGameInputData = await csv().fromFile(
      commandLineOptions.inputCsv.filename
    );
  } catch {
    console.error(
      `not able to parse input: ${commandLineOptions.inputCsv.filename}`
    );
  }

  return jsonGameInputData;
};
