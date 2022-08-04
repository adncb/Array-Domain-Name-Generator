console.log("Hello World")
let pronoun = ["your", "their", "our"];
let adj = ["fantastic", "incredible", "unavailable"];
let noun = ["truly", "fakesy", "vivante"];
for (a=0; a<pronoun.length; a++){
    for (b=0; b<adj.length; b++){
        for (z=0; z<noun.length; z++)
        console.log(pronoun[a] + adj[b] + noun[z] + ".com")
    }
    
}
