console.log("Hello World! This code runs immediately when the file is loaded. HellScape Test.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins its initialization workflow. HellScape Test.");
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available. HellScape Test.");
});