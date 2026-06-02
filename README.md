# Excel Data Extractor

A Node.js project that extracts structured vocabulary data from a macro-enabled Excel workbook and converts it into reusable JSON.

## Why I Built This

I built this project while exploring tools for Persian language learning and future OCR/NLP experiments.

The goal was to take data stored inside an Excel-based learning tool and transform it into a format that could be used by future applications.

## How It Works

1. Reads an `.xlsm` workbook using the xlsx package
2. Selects a worksheet containing vocabulary data
3. Converts spreadsheet rows into JavaScript objects
4. Cleans and normalizes the data structure
5. Exports the result as JSON

## Example Transformation

Excel data:

| Definition | Entry |
| Hello | "سلام" |

JSON output:

{
  "persian": "سلام",
  "english": "hello"
}
