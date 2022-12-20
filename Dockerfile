# syntax=docker/dockerfile:1
FROM devkitpro/devkitarm
RUN git clone https://github.com/asiekierka/wasm4-aot && \
    cd wasm4-aot && \
    git checkout d9af16836805ff716202c2639a87f6416fae130e && \
    wget https://github.com/WebAssembly/wabt/releases/download/1.0.30/wabt-1.0.30-ubuntu.tar.gz && \
    tar xzf wabt-1.0.30-ubuntu.tar.gz && \
    echo "Run Done!"
ENV PATH=/wasm4-aot/wabt-1.0.30/bin:$PATH
WORKDIR /wasm4-aot
