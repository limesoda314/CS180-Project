from config import *
import gzip
import matplotlib.pyplot as plt
import numpy as np 
import pandas as pd
import os

def load_imgs(dpath, len=731668): # 731,668 samples in the training set
  f_data = gzip.open(dpath, "rb")

  image_size = 28
  num_images = len

  f_data.read(16)
  buf = f_data.read(image_size * image_size * num_images)
  data = np.frombuffer(buf, dtype=np.uint8).astype(np.float32)
  data = data.reshape(num_images, image_size, image_size)
  data = np.flip(data, axis=1)
  data = np.array([np.rot90(img, 3) for img in data])

  return data

def load_labs(dpath, len=731668):
  f = gzip.open(dpath,'rb')

  f.read(8)
  labels = []
  for i in range(0,len):   
      buf = f.read(1)
      label = np.frombuffer(buf, dtype=np.uint8).astype(np.int64)
      labels.append(label)
      print(i, label)

  return np.array(labels)

def load_map(dpath):
  mapping_dictionary = {}
  with open(dpath) as dict_file:
    for line in dict_file:
      (key, val) = line.split()
      mapping_dictionary[int(key)] = chr(int(val))
  return mapping_dictionary

def save_images(images, labels, mappings):
  length = len(images)

  if not os.path.exists(IMG_SAVE_PATH):
    os.makedirs(IMG_SAVE_PATH)

  for i in range(0, length):
    plt.imshow(images[i], cmap=plt.cm.binary)
    plt.axis("off")
    plt.title(
        label=f"Drawing of \"{mappings[labels[i][0]]}\"",
        fontdict={
          'fontsize': 20,
          'fontweight' : 5,
          'verticalalignment': 'baseline'
        })
    plt.savefig(IMG_SAVE_PATH + f"image{i}.png", transparent=True)

def main():
  n_samples = 100

  print("> Loading mapping")
  mapping = load_map(DATA_PATH  + MAP_FILE)
  print("> Loading labels")
  y_train = load_labs(DATA_PATH + TRAIN_Y_FILE, n_samples)
  print("> Loading images")
  x_train = load_imgs(DATA_PATH + TRAIN_X_FILE, n_samples)
  print("> Saving images")
  save_images(x_train, y_train, mapping)

if __name__ == "__main__":
    main()