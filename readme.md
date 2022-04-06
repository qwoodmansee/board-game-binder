## Board Game Binder Generator

Generates a binder with board game data.

### Still to do:

- alot. Most of this code is specific to my exact use case. My name is hardcoded, pngs are hardcoded, etc. There are also a lot of "rules" that have to be followed (i.e. both ids are required, must return, etc.)

### Instructions:

1. populate source data via modifying games.csv (example included, do not change headers)
2. replace `quintons-pick.png` and `sarahs-pick.png` (keep the file names!) with your own pngs.
3. create a `.env` file with the structure:

```
ATLAS_CLIENT_ID=YOUR_ID_HERE
```

you can generate an atlas client id at https://www.boardgameatlas.com/api/docs/apps

4. run `npm run generate` to run the code and generate a png
