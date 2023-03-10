from dotenv import load_dotenv
import os

load_dotenv()  # take environment variables from .env.
env = os.environ

DATA_PATH = env["DATA_PATH"]
TRAIN_X_FILE = env["TRAIN_X_FILE"]
TRAIN_Y_FILE = env["TRAIN_Y_FILE"]
TEST_X_FILE = env["TEST_X_FILE"]
TEST_Y_FILE = env["TEST_Y_FILE"]
MAP_FILE = env["MAP_FILE"]

# Generation of images
IMG_SAVE_PATH = "./../client/src/galleryimages/"

# Model training
NUM_CLASSES = 47