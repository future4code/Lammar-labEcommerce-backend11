import app from "./app";
import createCharacter  from "./endopoints/createCharacters";
import deleteCharacter from "./endopoints/deleteCharacter";
import getAllCharacters from "./endopoints/getAllCharacters"

app.get("/character", getAllCharacters)
app.put("/character",createCharacter)
app.delete("/character/:id",deleteCharacter)
