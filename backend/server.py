#!/usr/bin/env python3

import asyncio
import threading
import websockets
import json
import random

Actions = {
    "CONNECT": "connect",
    "CREATE": "create",
    "ERROR": "error"
}

presentations = {'test': []}

async def server(websocket, path):
    while True:
        msg = await websocket.recv()
        msg = json.loads(msg)

        if msg["type"] == Actions["CONNECT"]:
            if msg["presentationId"] not in presentations:
                await websocket.send(json.dumps({"type": Actions["ERROR"], "errorMsg": "Invalid code"}))
            presentations[msg["presentationId"]].append(websocket)

async def presentationHandler():
    i = 0
    while True:
        for socket in presentations['test']:
            await socket.send(json.dumps({"type": f"hi {i}"}))
        await asyncio.sleep(1)
        i += 1

def startPresHandler():
    asyncio.run(presentationHandler())

if __name__ == "__main__":
    ph = threading.Thread(target=startPresHandler)
    ph.start()
    asyncio.get_event_loop().run_until_complete(
        websockets.serve(server, 'localhost', 3080))
    asyncio.get_event_loop().run_forever()
    ph.join()
