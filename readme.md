## Board Game Binder Generator

The intention of this project is to allow for users to populate a simple CSV file and have a printable Board Game Binder generated. Then the user can print the pages, and fill a binder which can be kept with their physical board game collection and be handed to players when deciding a game to play.

### Future Work:

1. Most of this code is specific to my exact use case. My name is hardcoded, pngs are hardcoded, etc. There are also a lot of "rules" that have to be followed (i.e. both ids are required, must return, etc.) Ideally, the code can become more flexible than this MVP.
2. I would assume most users would prefer a nicer way to populate the contents of games.csv than opening excel. A UI to support searching for games with autocomplete/etc would be awesome.
3. GPT could be really cool here if we utilized the return values from the APIs to generate more complete pages and FAQS. The obvious "how to make sure it's right" is the harder part of this.
4. A more complete integration with BGG and Atlas could allow for something like utilizing their user systems' board game collection, which could also be a fun extension.

### Instructions:

1. populate source data via modifying games.csv (example included, do not change headers)
2. replace `quintons-pick.png` and `sarahs-pick.png` (keep the file names!) with your own pngs.
3. create a `.env` file with the structure:

```
ATLAS_CLIENT_ID=YOUR_ID_HERE
```

you can generate an atlas client id at https://www.boardgameatlas.com/api/docs/apps

4. run `npm run generate` to run the code and generate a pdf


### Example output page (1 per game):
<img width="613" alt="image" src="https://user-images.githubusercontent.com/10392661/161894933-f40cf9d7-25de-4bc0-9117-835c25c16189.png">

## Special Thanks
This project was inspired by a good friend and developer, Blake Runyon. Check out his work some time!
