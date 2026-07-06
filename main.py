from fastapi import FastAPI

app = FastAPI()

@app.get("/items")
def list_items():
    return {"message": "Listing items for: build me a test app"}
