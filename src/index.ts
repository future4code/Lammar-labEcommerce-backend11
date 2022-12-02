import app from "./app";
import createCharacter  from "./endopoints/createCharacters";
import getAllCharacters from "./endopoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.put("/character",createCharacter)