# arvaders

See the [web version](https://rajsite.github.io/arvaders/). Or the GBA ROM running in a [web GBA emulator](https://gba.ninja/?autorun=https://rajsite.github.io/arvaders/cart.timescale.gba) (click "Run it anyway"). Or download the [GBA ROM](https://rajsite.github.io/arvaders/cart.timescale.gba).

## What's going on

This repo:
- Uses [AssemblyScript](https://www.assemblyscript.org/) (a subset of TypeScript that targets WASM)
- To create a [WASM-4](https://wasm4.org/) compliant WASM file
- The WASM file is then run through [wasm4-aot](https://github.com/asiekierka/wasm4-aot)
- Which uses [wasm2c](https://webassembly.github.io/wabt/doc/wasm2c.1.html) to generate C code leveraging the WASM-4 API calls
- The generated code links against code in wasm4-aot to connect the WASM-4 APIs to the Game Boy Advance APIs using [devkitPro](https://devkitpro.org/)
- And a Game Boy Advance ROM is created!
