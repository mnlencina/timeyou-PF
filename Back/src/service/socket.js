import { Server } from "socket.io";

const io = new Server({
    cors:{
        origin: "http://localhost:3001"
    }
});

io.on("connection", (socket) => {
console.log("alguien se ha conectado");

socket.on("desconectado", () =>{
    console.log("alguien se ha ido")
})

});

io.listen(3001);